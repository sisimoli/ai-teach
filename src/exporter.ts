/**
 * Serializes the rendered brochure into a single self-contained HTML file.
 * - Inlines every linked stylesheet (styles become part of the file)
 * - Removes all scripts (the document is static — no React needed)
 * - Forces every scroll-reveal element into its visible state
 * - Keeps fonts/images as remote references (loaded on open)
 */
export async function exportHtmlFile(filename = "apextra-brochure.html"): Promise<void> {
  const clone = document.documentElement.cloneNode(true) as HTMLElement;

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

  // 3) make sure every reveal/animated element is in its final, visible state
  clone.querySelectorAll(".rv").forEach((el) => {
    el.classList.add("in");
    (el as HTMLElement).style.removeProperty("transition-delay");
  });
  clone.querySelectorAll(".draw-path").forEach((el) => {
    const htmlEl = el as HTMLElement;
    const target = htmlEl.style.getPropertyValue("--off");
    htmlEl.style.strokeDashoffset = target || "0";
  });

  // 4) freeze the progress bar full
  clone.querySelectorAll<HTMLElement>(".bg-teal-500").forEach((el) => {
    if (el.style.width) el.style.width = "100%";
  });

  // 5) remove transient UI state (open dropdowns, toasts)
  clone.querySelectorAll("[data-toast], [data-menu-open]").forEach((el) => el.remove());
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
}

/** Opens the browser print dialog — "Save as PDF" produces the PDF version. */
export function exportPdfViaPrint(): void {
  window.print();
}
