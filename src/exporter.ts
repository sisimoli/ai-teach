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

/** Fetches every image once and returns a map of src → base64 data URL. */
async function collectImageDataUrls(root: Document | HTMLElement): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  const imgs = Array.from(root.querySelectorAll("img"));
  const unique = Array.from(new Set(imgs.map((i) => i.src).filter(Boolean)));
  await Promise.all(
    unique.map(async (src) => {
      try {
        const res = await fetch(src, { mode: "cors" });
        if (!res.ok) return;
        map.set(src, await toDataURL(await res.blob()));
      } catch {
        /* keep remote reference */
      }
    })
  );
  return map;
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

  const dataUrls = await collectImageDataUrls(clone);
  result.embedded = dataUrls.size;
  const imgs = Array.from(clone.querySelectorAll("img"));
  result.failed = imgs.filter((i) => i.src && !dataUrls.has(i.src)).length;
  imgs.forEach((img) => {
    img.removeAttribute("loading");
    img.removeAttribute("decoding");
    const d = dataUrls.get(img.src);
    if (d) img.src = d;
  });

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

  const dataUrls = await collectImageDataUrls(document);

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
