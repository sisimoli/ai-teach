import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { IconArrowLeft, IconCheck, IconDownload, IconFilePdf, IconOwlMark } from "./icons";
import { faNum, Reveal } from "./lib";

/* ================= page registry ================= */

export type PageMeta = { id: string; num: string; label: string; en: string };

export const PAGES: PageMeta[] = [
  { id: "cover", num: "۰۱", label: "کاور", en: "COVER" },
  { id: "why", num: "۰۲", label: "چرا APEXTRA؟", en: "THE WHY" },
  { id: "platform", num: "۰۳", label: "محیط یکپارچه", en: "PLATFORM" },
  { id: "strategy", num: "۰۴", label: "مدیریت استراتژیک", en: "STRATEGIC MANAGEMENT" },
  { id: "competitive", num: "۰۵", label: "رقابت و رصد محیط", en: "COMPETITIVE STRATEGY" },
  { id: "scenario", num: "۰۶", label: "سناریوپردازی", en: "SCENARIO PLANNING" },
  { id: "ai", num: "۰۷", label: "آمادگی و هوش مصنوعی", en: "AI READINESS" },
  { id: "maturity", num: "۰۸", label: "بلوغ دیجیتال", en: "DIGITAL MATURITY" },
  { id: "execution", num: "۰۹", label: "اجرا و پایش", en: "EXECUTION" },
  { id: "audience", num: "۱۰", label: "مخاطبان و ارزش", en: "AUDIENCE & VALUE" },
  { id: "shift", num: "۱۱", label: "از گزارش تا تصمیم", en: "THE SHIFT" },
  { id: "overview", num: "۱۲", label: "در یک نگاه", en: "AT A GLANCE" },
  { id: "forward", num: "۱۳", label: "یک قدم جلوتر", en: "ONE STEP AHEAD" },
  { id: "final", num: "۱۴", label: "پایان", en: "CLOSING" },
];

export const OWL_HERO = "https://apextra.ai/brand/owl-hero.webp";
export const OWL_FACE = "https://apextra.ai/brand/owl-face-200w.webp";
export const LOGO_URL = "https://apextra.ai/logo.png";

/* ================= brand imagery ================= */

export function Owl({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`flex items-center justify-center text-teal-400 ${className}`}>
        <IconOwlMark className="w-3/5 h-3/5" />
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}

/** APEXTRA logo with a graceful fallback to the owl mark + wordmark. */
export function Logo({ className = "h-6", boxed = false }: { className?: string; boxed?: boolean }) {
  const [failed, setFailed] = useState(false);
  const img = failed ? (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <IconOwlMark className="h-full w-auto text-teal-400" />
      <span className="font-latin font-bold tracking-[0.3em] text-slate-100 text-[13px]">APEXTRA</span>
    </span>
  ) : (
    <img src={LOGO_URL} alt="APEXTRA" onError={() => setFailed(true)} className={className} />
  );
  if (!boxed) return img;
  return (
    <span className="inline-flex items-center justify-center bg-navy-900 border border-navy-700 px-2.5 py-1.5">
      {img}
    </span>
  );
}

/* ================= ambient background ================= */

export function AppBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-navy-950 print-hide" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(1100px 720px at 88% -8%, rgba(27,58,103,0.55) 0%, transparent 58%), radial-gradient(900px 640px at 4% 108%, rgba(14,148,155,0.14) 0%, transparent 55%)",
        }}
      />
      <div className="absolute inset-0 grid-bg" />
      <svg className="absolute -top-56 -left-56 w-[760px] h-[760px] spin-slower" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="98" stroke="rgba(63,201,207,0.10)" strokeDasharray="3 9" />
        <circle cx="100" cy="100" r="72" stroke="rgba(63,201,207,0.07)" />
        <circle cx="100" cy="100" r="46" stroke="rgba(96,140,200,0.10)" strokeDasharray="1 6" />
      </svg>
      <svg className="absolute -bottom-64 -right-64 w-[820px] h-[820px] spin-rev" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="98" stroke="rgba(96,140,200,0.10)" strokeDasharray="2 8" />
        <circle cx="100" cy="100" r="66" stroke="rgba(63,201,207,0.08)" />
        <circle cx="100" cy="100" r="34" stroke="rgba(63,201,207,0.10)" strokeDasharray="1 5" />
      </svg>
    </div>
  );
}

/* ================= corner ticks ================= */

export function CornerTicks({ tone = "teal" }: { tone?: "teal" | "slate" }) {
  const c = tone === "teal" ? "border-teal-400/80" : "border-slate-500/60";
  const b = `absolute w-4 h-4 pointer-events-none ${c}`;
  return (
    <>
      <span className={`${b} -top-px -right-px border-t-2 border-r-2`} />
      <span className={`${b} -top-px -left-px border-t-2 border-l-2`} />
      <span className={`${b} -bottom-px -right-px border-b-2 border-r-2`} />
      <span className={`${b} -bottom-px -left-px border-b-2 border-l-2`} />
    </>
  );
}

/* ================= top bar ================= */

export function TopBar({ active, progress }: { active: string; progress: number }) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [busy, setBusy] = useState<"html" | "pdf" | null>(null);
  const toastTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  const showToast = (msg: string) => {
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    setToast(msg);
    toastTimer.current = window.setTimeout(() => setToast(null), 4000);
  };

  const handleHtml = async () => {
    setBusy("html");
    try {
      const { exportHtmlFile } = await import("./exporter");
      const res = await exportHtmlFile("apextra-brochure.html");
      showToast(
        res.failed > 0
          ? `فایل HTML دانلود شد — ${faNum(res.embedded)} از ${faNum(res.total)} تصویر داخل فایل جاسازی شد؛ بقیه به‌صورت پیوند آنلاین ماندند.`
          : "فایل HTML مستقل دانلود شد — همه تصاویر داخل خود فایل جاسازی شده‌اند."
      );
    } catch {
      showToast("خطا در ساخت فایل HTML. دوباره تلاش کنید.");
    } finally {
      setBusy(null);
    }
  };

  const [pdfProgress, setPdfProgress] = useState("");

  const handlePdf = async () => {
    setBusy("pdf");
    setPdfProgress("دریافت و جاسازی تصاویر...");
    try {
      const { exportRealPdf } = await import("./exporter");
      const res = await exportRealPdf({
        filename: "apextra-brochure.pdf",
        onProgress: (i: number, t: number) => setPdfProgress(`صفحه ${faNum(i)} از ${faNum(t)}`),
      });
      showToast(
        res.failed > 0
          ? "فایل PDF ساخته شد — برای تصویر(هایی) که سرور اجازه دانلود نداد، نشان جایگزین قرار گرفت."
          : "فایل PDF ساخته و دانلود شد — همه تصاویر برند داخل آن جاسازی شده‌اند."
      );
    } catch {
      showToast("خطا در ساخت PDF. دوباره تلاش کنید.");
    } finally {
      setBusy(null);
      setPdfProgress("");
    }
  };

  const btnBase =
    "flex items-center gap-1.5 border px-2.5 py-1.5 text-[11.5px] transition-colors disabled:opacity-50";

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 print-hide">
        <div className="bg-navy-950/90 backdrop-blur-md border-b border-navy-800">
          <div className="mx-auto w-[min(100%-1.5rem,1180px)] h-16 flex items-center justify-between gap-3">
            <a href="#cover" className="flex items-center gap-3 min-w-0 shrink-0">
              <Logo className="h-7 w-auto" />
              <span className="hidden md:block h-4 w-px bg-navy-700 shrink-0" />
              <span className="hidden md:block text-[11.5px] text-slate-400 truncate">
                پلتفرم مدیریت استراتژیک سازمانی
              </span>
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={handleHtml}
                disabled={busy !== null}
                className={`${btnBase} border-navy-700 text-slate-300 hover:border-teal-600 hover:text-teal-300`}
                title="دانلود بروشور به‌صورت یک فایل HTML مستقل"
              >
                {busy === "html" ? (
                  <span className="w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  <IconDownload className="w-3.5 h-3.5" />
                )}
                <span className="hidden sm:inline">دانلود HTML</span>
              </button>
              <button
                onClick={handlePdf}
                disabled={busy !== null}
                className={`${btnBase} border-teal-500/60 text-teal-300 hover:bg-teal-500/15 hover:text-teal-200`}
                title="ساخت فایل PDF — هر صفحه دقیقاً هم‌اندازه صفحات بروشور، بدون حاشیه و برش"
              >
                {busy === "pdf" ? (
                  <span className="w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  <IconFilePdf className="w-3.5 h-3.5" />
                )}
                <span className="hidden sm:inline">{busy === "pdf" ? pdfProgress || "در حال ساخت PDF..." : "خروجی PDF"}</span>
              </button>

              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen((v) => !v);
                  }}
                  className={`flex items-center gap-2 border px-2.5 py-1.5 text-[11.5px] transition-colors ${
                    open
                      ? "border-teal-500 text-teal-300 bg-teal-500/10"
                      : "border-navy-700 text-slate-300 hover:border-teal-600 hover:text-teal-300"
                  }`}
                  aria-expanded={open}
                >
                  فهرست صفحات
                  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2.5 4.5L6 8l3.5-3.5" strokeLinecap="round" />
                  </svg>
                </button>
                {open && (
                  <div
                    className="absolute top-full mt-2 end-0 w-72 max-h-[70vh] overflow-y-auto bg-navy-900 border border-navy-700 shadow-[0_24px_60px_-12px_rgba(2,8,20,0.9)]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {PAGES.map((p) => (
                      <a
                        key={p.id}
                        href={`#${p.id}`}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2.5 text-[13px] border-b border-navy-800/70 last:border-0 transition-colors hover:bg-navy-800 ${
                          active === p.id ? "text-teal-300 bg-navy-800/60" : "text-slate-300"
                        }`}
                      >
                        <span className="font-latin text-[11px] tracking-widest text-teal-500/90 w-6 shrink-0">{p.num}</span>
                        <span className="flex-1">{p.label}</span>
                        <span className="font-latin text-[9px] tracking-[0.18em] text-slate-500">{p.en}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2px] bg-navy-800/80">
          <div
            className="h-full bg-teal-500 transition-[width] duration-200 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {toast && (
        <div
          role="status"
          className="fixed bottom-6 inset-x-0 z-[60] flex justify-center px-4 print-hide pointer-events-none"
        >
          <div className="toast-in flex items-center gap-3 border border-teal-500/50 bg-navy-900 text-slate-100 px-4 py-3 text-[13px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] max-w-lg">
            <IconCheck className="w-4 h-4 text-teal-400 shrink-0" />
            {toast}
          </div>
        </div>
      )}
    </>
  );
}

/* ================= index rail ================= */

export function IndexRail({ active }: { active: string }) {
  return (
    <nav
      className="fixed left-3 xl:left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-[7px] print-hide"
      aria-label="فهرست صفحات"
    >
      {PAGES.map((p) => (
        <a key={p.id} href={`#${p.id}`} className="group relative py-[3px] flex items-center" aria-label={p.label}>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === p.id
                ? "w-[7px] h-7 bg-teal-400 shadow-[0_0_12px_rgba(63,201,207,0.7)]"
                : "w-[5px] h-[5px] bg-slate-500 group-hover:bg-teal-300"
            }`}
          />
          <span className="absolute left-5 whitespace-nowrap text-[10.5px] text-slate-200 bg-navy-900/95 border border-navy-700 px-2.5 py-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
            <span className="font-latin text-teal-400 me-1.5">{p.num}</span>
            {p.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

/* ================= A4 sheet ================= */

export function Sheet({
  id,
  num,
  title,
  tone = "light",
  bare = false,
  children,
}: {
  id: string;
  num?: string;
  title?: string;
  tone?: "light" | "dark";
  bare?: boolean;
  children: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <section id={id} className="relative mx-auto w-[min(100%-1.25rem,1180px)] my-8 md:my-12 scroll-mt-24">
      <div
        className={`a4-frame relative flex flex-col overflow-hidden border transition-shadow duration-500 ${
          dark
            ? "bg-navy-900 border-navy-700 text-slate-200 shadow-[0_36px_90px_-24px_rgba(2,8,20,0.95)]"
            : "bg-paper border-hair text-ink shadow-[0_36px_80px_-28px_rgba(3,12,28,0.65)]"
        }`}
      >
        {!bare && (
          <header
            className={`flex items-center justify-between gap-4 px-6 sm:px-10 lg:px-14 pt-4 pb-3 border-b shrink-0 ${
              dark ? "border-navy-700" : "border-hair"
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              {num && (
                <span className={`font-latin text-[13px] tracking-[0.2em] ${dark ? "text-teal-400" : "text-teal-600"}`}>
                  {num}
                </span>
              )}
              <span className={`hidden sm:block w-8 h-px shrink-0 ${dark ? "bg-navy-600" : "bg-hair"}`} />
              {title && (
                <h2 className={`font-display font-bold text-[13.5px] md:text-[14.5px] truncate ${dark ? "text-slate-100" : "text-ink"}`}>
                  {title}
                </h2>
              )}
            </div>
            <Logo boxed={!dark} className="h-5 w-auto" />
          </header>
        )}

        <div className="flex-1 min-h-0 overflow-hidden px-6 sm:px-10 lg:px-14 py-6">{children}</div>

        <footer
          className={`flex items-center justify-between gap-4 px-6 sm:px-10 lg:px-14 py-3 border-t text-[10px] md:text-[11px] shrink-0 ${
            dark ? "border-navy-700 text-slate-500" : "border-hair text-mist"
          }`}
        >
          <span className="font-latin tracking-[0.18em] uppercase hidden sm:block">Enterprise Strategic Management</span>
          <span className="sm:hidden font-latin tracking-[0.18em] uppercase">Apextra</span>
          <span className="flex items-center gap-3">
            <a
              href="https://apextra.ir"
              target="_blank"
              rel="noreferrer"
              className={`font-semibold tracking-wide transition-colors ${
                dark ? "text-teal-400 hover:text-teal-300" : "text-teal-600 hover:text-teal-700"
              }`}
            >
              apextra.ir
            </a>
            <span className={`w-px h-3 ${dark ? "bg-navy-600" : "bg-hair"}`} />
            {num ? <span>صفحه {num}</span> : <span>بروشور رسمی سازمانی</span>}
          </span>
        </footer>
      </div>
    </section>
  );
}

/* ================= section tag ================= */

export function Tag({
  num,
  en,
  title,
  dark = false,
}: {
  num: string;
  en: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <span className={`font-latin text-[13px] tracking-[0.2em] ${dark ? "text-teal-400" : "text-teal-600"}`}>
          {num}
        </span>
        <span className={`h-px flex-1 ${dark ? "bg-navy-700" : "bg-hair"}`} />
        <span className={`font-latin text-[9px] md:text-[10px] tracking-[0.3em] uppercase ${dark ? "text-slate-500" : "text-mist/80"}`}>
          {en}
        </span>
      </div>
      <h3 className={`mt-3 font-display font-black text-[21px] md:text-[27px] leading-[1.45] ${dark ? "text-slate-100" : "text-ink"}`}>
        {title}
      </h3>
    </Reveal>
  );
}

/* ================= chain of steps (RTL arrows) ================= */

export function Chain({
  items,
  dark = false,
  compact = false,
  className = "",
}: {
  items: string[];
  dark?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-2 gap-y-2.5 ${className}`}>
      {items.map((it, i) => (
        <Fragment key={i}>
          <span
            className={`border font-medium transition-colors ${
              compact ? "px-2.5 py-1 text-[12px]" : "px-3 py-1.5 text-[12.5px] md:text-[13.5px]"
            } ${
              dark
                ? "border-navy-600 bg-navy-850 text-slate-200"
                : "border-hair bg-card text-ink hover:border-teal-400"
            }`}
          >
            {it}
          </span>
          {i < items.length - 1 && (
            <IconArrowLeft className={`w-3.5 h-3.5 shrink-0 ${dark ? "text-teal-400" : "text-teal-500"}`} />
          )}
        </Fragment>
      ))}
    </div>
  );
}

/* ================= capability block =================
   Capabilities carry their own numbering (قابلیت ۰۱…۱۳),
   deliberately separate from page numbers (صفحه ۰۱…۱۴). */

export function Cap({
  num,
  icon,
  title,
  children,
  className = "",
  dark = false,
}: {
  num: string;
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className={className}>
      <article
        className={`group h-full border-t-2 pt-3.5 transition-colors duration-500 ${
          dark ? "border-navy-600 hover:border-teal-400" : "border-ink/70 hover:border-teal-500"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            {icon && <span className={`shrink-0 ${dark ? "text-teal-400" : "text-teal-600"}`}>{icon}</span>}
            <h4 className={`font-display font-extrabold text-[16px] md:text-[17.5px] leading-snug ${dark ? "text-slate-100" : "text-ink"}`}>
              {title}
            </h4>
          </div>
          <span className="text-left shrink-0 leading-none">
            <span className={`block text-[8.5px] tracking-[0.22em] mb-1 ${dark ? "text-slate-500" : "text-mist/70"}`}>
              قابلیت
            </span>
            <span className={`font-latin text-[13px] font-semibold tracking-[0.15em] ${dark ? "text-teal-400" : "text-teal-600"}`}>
              {num}
            </span>
          </span>
        </div>
        <div className={`mt-2.5 text-[12.5px] md:text-[13px] leading-[1.95] ${dark ? "text-slate-400" : "text-mist"}`}>
          {children}
        </div>
      </article>
    </Reveal>
  );
}

/* ================= bullet item ================= */

export function Li({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <li className={`flex items-start gap-2.5 leading-[1.8] ${dark ? "text-slate-300" : "text-ink/90"}`}>
      <IconCheck className="w-3.5 h-3.5 mt-[6px] shrink-0 text-teal-500" />
      <span>{children}</span>
    </li>
  );
}

/* ================= hairline chip ================= */

export function Chip({
  children,
  dark = false,
  dot = false,
}: {
  children: ReactNode;
  dark?: boolean;
  dot?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 border px-2.5 py-1 text-[12px] font-medium transition-colors ${
        dark
          ? "border-navy-600 text-slate-300 hover:border-teal-400 hover:text-teal-300"
          : "border-hair bg-card text-ink/85 hover:border-teal-400 hover:text-teal-700"
      }`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-teal-500 pulse-dot text-teal-500" />}
      {children}
    </span>
  );
}
