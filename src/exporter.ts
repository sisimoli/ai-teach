import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

/**
 * Export toolkit for the brochure:
 * - exportHtmlFile: one self-contained static HTML file (styles inlined, images embedded)
 * - exportRealPdf:  a real PDF whose page size equals the on-screen sheet size —
 *                   full-bleed, no browser margins, borders never clipped
 *
 * IMAGE EMBEDDING
 * The brand server (apextra.ai) does not send CORS headers, so a plain fetch
 * cannot read the bytes. Images are therefore downloaded through a chain of
 * open image proxies (validated by content-type and size), converted to base64
 * data-URIs, and written straight into the output file. A warm-up routine runs
 * right after the page loads so the downloads are already finished by the time
 * the user asks for an export.
 */
export type ExportResult = { embedded: number; failed: number; total: number };
export type PdfProgress = (current: number, total: number) => void;

function toDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result as string);
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

/* ---------- download chain ---------- */

const enc = (u: string) => encodeURIComponent(u);

const ROUTES: Array<(u: string) => string> = [
  (u) => u, // 1) direct (works if the origin ever sends CORS headers)
  (u) => `https://images.weserv.nl/?url=${enc(u)}&output=png`, // 2) image CDN proxy (forces PNG)
  (u) => `https://wsrv.nl/?url=${enc(u)}&output=png`, // 3) same service, short domain
  (u) => `https://api.allorigins.win/raw?url=${enc(u)}`, // 4) generic CORS proxy
  (u) => `https://corsproxy.io/?url=${enc(u)}`, // 5) generic CORS proxy
  (u) => `https://api.codetabs.com/v1/proxy?quest=${enc(u)}`, // 6) generic CORS proxy
  (u) =>
    `https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=31536000&url=${enc(u)}`, // 7) Google image proxy
];

async function fetchViaRoute(url: string): Promise<string | null> {
  const ctrl = new AbortController();
  const timer = window.setTimeout(() => ctrl.abort(), 7000);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) return null;
    const blob = await res.blob();
    // some proxies answer 200 with an HTML error page — accept real image bytes only
    if (blob.size < 200 || !blob.type.startsWith("image/")) return null;
    return await toDataURL(blob);
  } catch {
    return null;
  } finally {
    window.clearTimeout(timer);
  }
}

const cache = new Map<string, string>();
const inflight = new Map<string, Promise<string | null>>();

/** Downloads one image through the whole chain (deduplicated, cached). */
function downloadAsDataUrl(src: string): Promise<string | null> {
  if (cache.has(src)) return Promise.resolve(cache.get(src)!);
  let p = inflight.get(src);
  if (!p) {
    p = (async () => {
      for (const route of ROUTES) {
        const d = await fetchViaRoute(route(src));
        if (d) {
          cache.set(src, d);
          return d;
        }
      }
      return null;
    })().finally(() => inflight.delete(src));
    inflight.set(src, p);
  }
  return p;
}

/** Starts downloading every brand image on the page (call once after load). */
export async function warmUpImages(): Promise<void> {
  const srcs = Array.from(
    new Set(Array.from(document.images).map((i) => i.src).filter((s) => s.startsWith("http")))
  );
  await Promise.all(srcs.map((s) => downloadAsDataUrl(s)));
}

/* ---------- fallback artwork (kept inside the file if every route is blocked) ---------- */

/**
 * Brand-consistent owl artwork used only when the original file cannot be
 * downloaded at all (e.g. every proxy route is blocked). Downloaded through
 * the same chain and embedded like any other image.
 */
const GENERATED_FALLBACKS: Array<{ match: RegExp; url: string }> = [
  {
    match: /owl-hero/i,
    url: "https://image.qwenlm.ai/generated-images/da6c0b68-78e5-4480-b38a-0a5cb4a1c15b/_result.png",
  },
  {
    match: /owl-face|logo/i,
    url: "https://image.qwenlm.ai/generated-images/3a6f1d98-d7d1-403e-ab5c-16e8674646b8/_result.png",
  },
];


function owlPlaceholder(): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'>
    <rect width='800' height='800' fill='#081a33'/>
    <circle cx='400' cy='380' r='252' fill='none' stroke='#2ec4cb' stroke-opacity='.35' stroke-width='3' stroke-dasharray='4 12'/>
    <circle cx='400' cy='380' r='184' fill='none' stroke='#2ec4cb' stroke-opacity='.18' stroke-width='2'/>
    <path d='M320 282v-54l54 34h52l54-34v54c28 34 40 70 40 104 0 104-82 176-146 176s-146-72-146-176c0-34 12-70 42-104z' fill='none' stroke='#3fc9cf' stroke-width='10' stroke-linejoin='round'/>
    <circle cx='356' cy='372' r='30' fill='none' stroke='#3fc9cf' stroke-width='9'/>
    <circle cx='444' cy='372' r='30' fill='none' stroke='#3fc9cf' stroke-width='9'/>
    <circle cx='356' cy='372' r='9' fill='#3fc9cf'/>
    <circle cx='444' cy='372' r='9' fill='#3fc9cf'/>
    <path d='M400 400l-16 26h32z' fill='#3fc9cf'/>
    <text x='400' y='648' text-anchor='middle' font-family='monospace' font-size='34' letter-spacing='14' fill='#3fc9cf' opacity='.85'>APEXTRA</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/* ---------- collection ---------- */

async function collectImageDataUrls(
  root: ParentNode
): Promise<{ urls: Map<string, string>; failed: number; total: number }> {
  const srcs = Array.from(
    new Set(
      Array.from(root.querySelectorAll("img"))
        .map((i) => (i as HTMLImageElement).src)
        .filter((s) => Boolean(s) && !s.startsWith("data:"))
    )
  );
  const urls = new Map<string, string>();
  let failed = 0;
  await Promise.all(
    srcs.map(async (src) => {
      // 1) the original brand image
      let d = await downloadAsDataUrl(src);
      if (!d) {
        // 2) brand-consistent replacement artwork, downloaded the same way
        const fb = GENERATED_FALLBACKS.find((f) => f.match.test(src));
        if (fb) d = await downloadAsDataUrl(fb.url);
      }
      if (d) {
        urls.set(src, d);
      } else {
        // 3) vector mark that is generated inline — always available
        urls.set(src, owlPlaceholder());
        failed += 1;
      }
    })
  );
  return { urls, failed, total: srcs.length };
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const im = new Image();
    im.onload = () => resolve();
    im.onerror = () => resolve();
    im.src = src;
  });
}

/** Forces reveal/animated elements into their final visible state and swaps image sources. */
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
      img.removeAttribute("loading");
      img.removeAttribute("decoding");
      img.removeAttribute("crossorigin");
      const d = dataUrls.get(img.src);
      if (d) img.src = d;
    });
  }
}

/* ================= single-file HTML export ================= */

export async function exportHtmlFile(filename = "apextra-brochure.html"): Promise<ExportResult> {
  const clone = document.documentElement.cloneNode(true) as HTMLElement;

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

  const { urls, failed, total } = await collectImageDataUrls(clone);
  finalizeVisuals(clone, urls);

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
  return { embedded: total - failed, failed, total };
}

/* ================= real PDF export ================= */

export async function exportRealPdf(
  opts: { filename?: string; onProgress?: PdfProgress } = {}
): Promise<{ failed: number }> {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
  const total = sections.length;
  if (total === 0) throw new Error("no pages");

  // 1) download every brand image and turn it into base64
  const { urls, failed } = await collectImageDataUrls(document);

  // 2) make sure every embedded image is fully decoded before rasterising
  await Promise.all(
    Array.from(urls.values())
      .filter((v) => v.startsWith("data:"))
      .map(preloadImage)
  );

  // 3) swap the live images to their embedded copies so the cloned document
  //    inherits data-URIs directly (no reliance on async onclone timing)
  const swaps: Array<{ im: HTMLImageElement; original: string; dataUrl: string }> = [];
  Array.from(document.images).forEach((im) => {
    const d = urls.get(im.src);
    if (d) swaps.push({ im, original: im.getAttribute("src") ?? im.src, dataUrl: d });
  });
  swaps.forEach((s) => {
    s.im.removeAttribute("loading");
    s.im.src = s.dataUrl;
  });

  // Page size = exact proportions of the on-screen sheet (1180 × 834),
  // image fills the page edge-to-edge → no browser margins, no clipped borders.
  const PAGE_W = 297;
  const PAGE_H = Math.round(PAGE_W * (834 / 1180) * 100) / 100; // ≈ 209.92mm

  let pdf: jsPDF | null = null;

  try {
    for (let i = 0; i < total; i++) {
      opts.onProgress?.(i + 1, total);
      const canvas = await html2canvas(sections[i], {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: null,
        imageTimeout: 8000,
        onclone: (doc) => finalizeVisuals(doc, urls),
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
  } finally {
    // restore the original sources once the capture is done
    swaps.forEach((s) => s.im.setAttribute("src", s.original));
  }

  pdf?.save(opts.filename ?? "apextra-brochure.pdf");
  return { failed };
}
