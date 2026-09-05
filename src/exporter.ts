/**
 * Serializes the rendered brochure into a single self-contained HTML file.
 * - Inlines every linked stylesheet (styles become part of the file)
 * - Embeds all reachable images as base64 data-URIs (logo, owl, …)
 * - Removes all scripts (the document is static — no React needed)
 * - Forces every scroll-reveal element into its visible state
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

export async function exportHtmlFile(filename = "apextra-brochure.html"): Promise<ExportResult> {
  const clone = document.documentElement.cloneNode(true) as HTMLElement;
  const result: ExportResult = { embedded: 0, failed: 0 };

  // 1) no scripts in the exported document
  clone.querySelectorAll("script").forEach((s) => s.remove());

  // 2) inline linked stylesheets
  const links = Array.from(clone.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]'));
  for (const link of links) {
    try {
      const res = await fetch(link.href);
      if (!res.ok) continue;
      const css = await res.text();
      const style = document.createElement("style");
      style.textContent = css;
      link.replaceWith(style);
    } catch {
      /* keep the remote link as a fallback */
    }
  }

  // 3) embed images as base64 so the file works fully offline
  const imgs = Array.from(clone.querySelectorAll("img"));
  await Promise.all(
    imgs.map(async (img) => {
      img.removeAttribute("loading");
      img.removeAttribute("decoding");
      if (!img.src || img.src.startsWith("data:")) return;
      try {
        const res = await fetch(img.src, { mode: "cors" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob = await res.blob();
        img.src = await toDataURL(blob);
        result.embedded += 1;
      } catch {
        result.failed += 1; // remote URL is kept as a fallback
      }
    })
  );

  // 4) make sure every reveal/animated element is in its final, visible state
  clone.querySelectorAll(".rv").forEach((el) => {
    el.classList.add("in");
    (el as HTMLElement).style.removeProperty("transition-delay");
  });
  clone.querySelectorAll(".draw-path").forEach((el) => {
    const htmlEl = el as HTMLElement;
    const target = htmlEl.style.getPropertyValue("--off");
    htmlEl.style.strokeDashoffset = target || "0";
  });

  // 5) freeze the progress bar full & clear transient UI state
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

/** Opens the browser print dialog — "Save as PDF" produces the PDF version. */
export function exportPdfViaPrint(): void {
  window.print();
}
