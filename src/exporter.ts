import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

/**
 * Export toolkit for the brochure:
 * - exportHtmlFile: one self-contained static HTML file (styles inlined, images embedded)
 * - exportRealPdf:  a real PDF whose page size equals the on-screen sheet size —
 *                   full-bleed, no browser margins, borders never clipped
 */
export type ExportResult = { embedded: number; failed: number };

function toDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result as string);
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

/** Inline brand fallback — used when an image cannot be fetched at all. */
const PLACEHOLDER_SVG =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="#3FC9CF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M32 9 L39 3 L41 10 C49 13 55 21 55 31 C55 45 45 57 32 57 C19 57 9 45 9 31 C9 21 15 13 23 10 L25 3 Z"/><circle cx="22.5" cy="28" r="6.5"/><circle cx="41.5" cy="28" r="6.5"/><circle cx="22.5" cy="28" r="1.8" fill="#3FC9CF" stroke="none"/><circle cx="41.5" cy="28" r="1.8" fill="#3FC9CF" stroke="none"/><path d="M29 38 L32 42.5 L35 38"/></svg>`
  );

/**
 * Fetches an image as a base64 data-URL.
 * Tries the origin directly first; if the server omits CORS headers (the usual
 * reason canvases drop third-party images), falls back to public image proxies
 * that do send `Access-Control-Allow-Origin: *`.
 */
async function fetchAsDataUrl(src: string): Promise<string | null> {
  const attempts = [
    src,
    `https://images.weserv.nl/?url=${encodeURIComponent(src.replace(/^https?:\/\//i, ""))}&output=png`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(src)}`,
  ];
  for (const url of attempts) {
    try {
      const res = await fetch(url, { mode: "cors" });
      if (!res.ok) continue;
      const blob = await res.blob();
      if (blob.size === 0) continue;
      return await toDataURL(blob);
    } catch {
      /* try the next source */
    }
  }
  return null;
}

/** Fetches every image once; returns src → base64 data URL (placeholder on total failure). */
async function collectImageDataUrls(
  root: Document | HTMLElement
): Promise<{ urls: Map<string, string>; failed: number }> {
  const urls = new Map<string, string>();
  let failed = 0;
  const imgs = Array.from(root.querySelectorAll("img"));
  const unique = Array.from(new Set(imgs.map((i) => i.src).filter(Boolean)));
  await Promise.all(
    unique.map(async (src) => {
      if (src.startsWith("data:")) {
        urls.set(src, src);
        return;
      }
      const d = await fetchAsDataUrl(src);
      if (d) urls.set(src, d);
      else {
        urls.set(src, PLACEHOLDER_SVG);
        failed += 1;
      }
    })
  );
  return { urls, failed };
}

/** Forces reveal/animated elements into their final visible state. */
function finalizeVisuals(root: Document | HTMLElement, dataUrls?: Map<string, string>) {
  root.querySelectorAll(".rv").forEach((el) => {
    el.classList.add("in");
    (el as HTMLElement).style.removeProperty("transition-delay");
  });
  root.querySelectorAll(".draw-path").forEach((el) => {
    const e = el as HTMLElement;
    e.style.strokeDashoffset = e.style.getPropertyValue("--off") || "0";
  });
  if (dataUrls) {
    root.querySelectorAll("img").forEach((img) => {
      const d = dataUrls.get(img.src);
      if (d) img.src = d;
    });
  }
}

/* ================= single-file HTML export ================= */

export async function exportHtmlFile(filename = "apextra-brochure.html"): Promise<ExportResult> {
  const clone = document.documentElement.cloneNode(true) as HTMLElement;
  const result: ExportResult = { embedded: 0, failed: 0 };

  clone.querySelectorAll("script").forEach((s) => s.remove());

  const links = Array.from(clone.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'));
  for (const link of links) {
    try {
      const res = await fetch(link.href);
      if (!res.ok) continue;
      const style = document.createElement("style");
      style.textContent = await res.text();
      link.replaceWith(style);
    } catch {
      /* keep the remote link as a fallback */
    }
  }

  const { urls } = await collectImageDataUrls(clone);
  const imgs = Array.from(clone.querySelectorAll("img"));
  imgs.forEach((img) => {
    img.removeAttribute("loading");
    img.removeAttribute("decoding");
    const d = urls.get(img.src);
    if (d) img.src = d;
  });
  result.embedded = Array.from(urls.values()).filter((v) => v !== PLACEHOLDER_SVG).length;
  result.failed = Array.from(urls.values()).filter((v) => v === PLACEHOLDER_SVG).length;

  finalizeVisuals(clone);

  clone.querySelectorAll<HTMLElement>(".bg-teal-500").forEach((el) => {
    if (el.style.width) el.style.width = "100%";
  });
  clone.querySelectorAll("[aria-expanded]").forEach((el) => el.setAttribute("aria-expanded", "false"));

  const markup = "<!DOCTYPE html>\n" + clone.outerHTML;
  const blob = new Blob([markup], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();

  window.setTimeout(() => URL.revokeObjectURL(url), 4000);
  return result;
}

/* ================= real PDF export ================= */

export type PdfProgress = (current: number, total: number) => void;

export async function exportRealPdf(
  opts: { filename?: string; onProgress?: PdfProgress } = {}
): Promise<void> {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
  const total = sections.length;
  if (total === 0) throw new Error("no pages");

  const { urls: dataUrls } = await collectImageDataUrls(document);

  // Page size = exact proportions of the on-screen sheet (1180 × 834 ≈ A4 landscape),
  // image fills the page edge-to-edge → no browser margins, no clipped borders.
  const PAGE_W = 297;
  const PAGE_H = Math.round(PAGE_W * (834 / 1180) * 100) / 100; // ≈ 209.92mm

  let pdf: jsPDF | null = null;

  for (let i = 0; i < total; i++) {
    opts.onProgress?.(i + 1, total);
    const canvas = await html2canvas(sections[i], {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: null,
      onclone: (doc) => finalizeVisuals(doc, dataUrls),
    });
    const jpeg = canvas.toDataURL("image/jpeg", 0.93);
    canvas.width = 0; // free memory between pages

    if (!pdf) {
      pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: [PAGE_W, PAGE_H], compress: true });
    } else {
      pdf.addPage([PAGE_W, PAGE_H], "landscape");
    }
    pdf.addImage(jpeg, "JPEG", 0, 0, PAGE_W, PAGE_H);
  }

  pdf?.save(opts.filename ?? "apextra-brochure.pdf");
}
