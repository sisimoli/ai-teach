import { Chain, CornerTicks, Logo, OWL_HERO, Owl, Sheet, Tag } from "./chrome";
import { Reveal, useScramble } from "./lib";

/* ================================================================
   PAGE 01 — COVER
   ================================================================ */

export function CoverPage() {
  const word = useScramble("APEXTRA", true, 30);

  return (
    <Sheet id="cover" bare tone="dark">
      <div className="flex h-full flex-col">
        <Reveal>
          <div className="flex items-center justify-between gap-4">
            <Logo className="h-8 w-auto" />
            <div className="text-left text-[10.5px] leading-5 text-slate-500">
              <div>بروشور معرفی پلتفرم · نسخه ۱.۰</div>
              <div className="text-slate-400">
                ویژه <span className="text-teal-400">مدیرعامل، هیئت‌مدیره و مدیران ارشد</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid flex-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 py-4">
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-teal-500" />
                <span className="font-latin text-[10px] tracking-[0.32em] text-teal-400">
                  ENTERPRISE STRATEGIC MANAGEMENT PLATFORM
                </span>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <h1
                dir="ltr"
                className="mt-4 text-right font-latin font-bold leading-none tracking-[0.04em] text-slate-100 text-[72px] xl:text-[102px]"
              >
                {word}
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-5 font-display font-extrabold text-teal-300 text-[19px] md:text-[23px] leading-[1.6]">
                پلتفرم هوشمند مدیریت و تحلیل استراتژیک
              </p>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-2 font-display font-bold text-slate-200 text-[14.5px] md:text-[16px]">
                از داده و تحلیل، تا تصمیم و اقدام
              </p>
            </Reveal>

            <Reveal delay={400}>
              <p className="mt-4 max-w-xl text-[13px] leading-8 text-slate-400">
                APEXTRA با ترکیب چارچوب‌های مدیریت استراتژیک، تحلیل داده و هوش مصنوعی، به سازمان‌ها
                کمک می‌کند محیط کسب‌وکار خود را بهتر درک کنند، استراتژی‌های مؤثرتر طراحی کنند و اجرای
                آن‌ها را هوشمندانه مدیریت و پایش نمایند.
              </p>
            </Reveal>

            <Reveal delay={480}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://apextra.ir"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-teal-500/60 bg-teal-500/5 px-4 py-2 font-latin text-[13px] tracking-[0.12em] text-teal-300 transition-colors hover:bg-teal-500/15"
                >
                  apextra.ir
                </a>
                <span className="text-[11px] text-slate-500">تحلیل کنید · آینده را بسازید · استراتژی را اجرا کنید</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={300} y={30}>
              <div className="relative mx-auto max-w-[420px]">
                <CornerTicks />
                <div className="relative overflow-hidden border border-navy-700">
                  <Owl
                    src={OWL_HERO}
                    alt="کاراکتر برند APEXTRA"
                    className="aspect-[4/4.05] w-full object-cover breathe"
                  />
                  <span aria-hidden="true" className="absolute inset-0 ring-1 ring-inset ring-teal-500/20" />
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
                  <span>کاراکتر برند — جغد آپکسترا</span>
                  <span className="font-latin tracking-[0.22em]">FIG. 01</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={560}>
          <div className="grid gap-x-8 gap-y-3 border-t border-navy-700 pt-4 pb-1 sm:grid-cols-3 text-[11.5px] text-slate-400">
            <div className="flex flex-wrap items-center gap-2">
              {["تحلیل", "سناریو", "تصمیم", "اقدام"].map((t, i) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="border border-navy-600 px-2 py-0.5 text-slate-300">{t}</span>
                  {i < 3 && <span className="text-teal-500">←</span>}
                </span>
              ))}
            </div>
            <div className="sm:text-center">مدیریت استراتژیک · هوش مصنوعی · بلوغ دیجیتال</div>
            <div className="sm:text-left font-latin tracking-[0.18em] text-teal-400">apextra.ir</div>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

/* ================================================================
   PAGE 02 — WHY APEXTRA
   ================================================================ */

const WHY_STATS = [
  { num: "۶", label: "مرحله یکپارچه", desc: "از تحلیل تا پایش، در یک محیط واحد" },
  { num: "۱۳", label: "قابلیت کلیدی", desc: "پوشش کامل چرخه مدیریت استراتژیک" },
  { num: "۵", label: "گروه مخاطب", desc: "از مدیرعامل تا مشاوران مدیریت" },
  { num: "۱", label: "چرخه زنده", desc: "داده → بینش → تصمیم → اقدام → پایش" },
];

export function WhyPage() {
  return (
    <Sheet id="why" num="۰۲" title="چرا APEXTRA؟">
      <Tag num="۰۲" en="THE WHY" title="چرا APEXTRA؟" />

      <Reveal delay={120}>
        <p className="mt-3 max-w-2xl text-[13.5px] leading-8 text-mist">
          در محیط کسب‌وکار امروز، اطلاعات به‌تنهایی مزیت ایجاد نمی‌کند. مزیت واقعی زمانی شکل می‌گیرد
          که سازمان بتواند این مسیر را به یک <span className="font-bold text-ink">چرخه مستمر و یکپارچه</span> تبدیل
          کند — و APEXTRA برای همین طراحی شده است؛ به‌جای اتکا به گزارش‌های پراکنده و تحلیل‌های
          دستی، یک تصویر ساختاریافته و پویا از وضعیت استراتژیک سازمان.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className="relative mt-6 border border-hair bg-card px-6 py-5">
          <CornerTicks tone="slate" />
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="font-display font-bold text-ink text-[14px]">چرخه مزیت — هسته طراحی APEXTRA</span>
            <span className="font-latin text-[9.5px] tracking-[0.26em] text-mist/70">FIG. 01 — THE VALUE LOOP</span>
          </div>
          <Chain items={["اطلاعات", "تحلیل", "بینش", "تصمیم", "اقدام"]} />
          <div className="mt-3.5 flex items-center gap-2.5 text-[12px] text-mist">
            <svg viewBox="0 0 20 20" className="w-4 h-4 shrink-0 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M16.5 10a6.5 6.5 0 1 1-1.9-4.6" strokeLinecap="round" />
              <path d="M14.8 2.6v3h-3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            پایش مستمر، خروجی هر دوره را به ورودی دوره بعد تبدیل می‌کند — چرخه هیچ‌گاه متوقف نمی‌شود.
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-4">
        {WHY_STATS.map((s, i) => (
          <Reveal key={s.label} delay={280 + i * 90}>
            <div className="group border-t-2 border-ink/70 pt-3.5 transition-colors duration-300 hover:border-teal-500">
              <div className="font-display font-black text-[30px] leading-none text-ink transition-colors duration-300 group-hover:text-teal-700">
                {s.num}
              </div>
              <div className="mt-2 font-display font-bold text-[13.5px] text-ink">{s.label}</div>
              <div className="mt-1 text-[11.5px] leading-5 text-mist">{s.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={640}>
        <p className="mt-6 text-[12px] text-mist/90 border-s-2 border-teal-500 ps-4 leading-6">
          این پلتفرم به مدیران و تیم‌های استراتژی کمک می‌کند به‌جای اتکا به گزارش‌های پراکنده، یک
          تصویر ساختاریافته و پویا از وضعیت استراتژیک سازمان داشته باشند.
        </p>
      </Reveal>
    </Sheet>
  );
}

/* ================================================================
   PAGE 03 — INTEGRATED PLATFORM
   ================================================================ */

const STAGES = [
  { num: "۱", title: "تحلیل", desc: "درک وضعیت فعلی سازمان، بازار و محیط کسب‌وکار", icon: "M4 19a15 15 0 0 1 16 0M7 15.5a10.5 10.5 0 0 1 10 0M10 12a6 6 0 0 1 4 0M12 8.5v.01" },
  { num: "۲", title: "ارزیابی", desc: "شناسایی قوت‌ها، ضعف‌ها، فرصت‌ها، تهدیدها و شکاف‌ها", icon: "M9 3.5h6M12 3.5V7l6.5 10.5a1.8 1.8 0 0 1-1.55 2.7H7.05A1.8 1.8 0 0 1 5.5 17.5L12 7" },
  { num: "۳", title: "طراحی", desc: "تدوین و مدل‌سازی اهداف و مسیرهای استراتژیک", icon: "M4 20h16M6 16l7.5-7.5M13 5l2.5-2.5L19 6l-2.5 2.5M13 5l3 3" },
  { num: "۴", title: "سناریو", desc: "بررسی گزینه‌ها و پیامد تصمیمات در شرایط مختلف", icon: "M5 19V9M5 9l5-4 5 4M10 5v6m0 0l5 3v5m-5-8l-5 3v5" },
  { num: "۵", title: "اجرا", desc: "تبدیل استراتژی به اقدامات و ابتکارات مشخص", icon: "M5 4.5h11l3 3V19.5H5zM13 4.5v3.5h3M8.5 12.5l2.5 2.5 4.5-4.5" },
  { num: "۶", title: "پایش", desc: "بررسی مستمر پیشرفت و هم‌راستایی با استراتژی", icon: "M3.5 12h4l2.5-6.5 4 13 2.5-6.5h4" },
];

function CycleDiagram() {
  const cx = 120;
  const cy = 118;
  const r = 74;
  const pos = (i: number) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 3;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };
  return (
    <svg viewBox="0 0 240 236" className="w-full max-w-[300px] mx-auto" role="img" aria-label="چرخه یکپارچه مدیریت استراتژیک">
      <circle cx={cx} cy={cy} r={r + 26} fill="none" stroke="var(--color-hair)" strokeDasharray="2 7" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--color-teal-500)" strokeWidth="1.4" strokeDasharray="5 8" className="cycle-dash" />
      {STAGES.map((s, i) => {
        const p = pos(i);
        return (
          <g key={s.num}>
            <circle cx={p.x} cy={p.y} r={17} fill="var(--color-card)" stroke="var(--color-teal-600)" strokeWidth="1.3" />
            <text x={p.x} y={p.y + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--color-teal-700)" fontFamily="Estedad">
              {s.num}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={30} fill="var(--color-navy-900)" stroke="var(--color-navy-700)" />
      <text x={cx} y={cy - 2} textAnchor="middle" fontSize="10" fill="#e7eefb" fontWeight="700" fontFamily="Estedad">
        محیط
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fontSize="10" fill="#e7eefb" fontWeight="700" fontFamily="Estedad">
        یکپارچه
      </text>
    </svg>
  );
}

export function PlatformPage() {
  return (
    <Sheet id="platform" num="۰۳" title="محیط یکپارچه">
      <Tag num="۰۳" en="THE INTEGRATED PLATFORM" title="یک محیط یکپارچه برای مدیریت استراتژیک" />
      <Reveal delay={120}>
        <p className="mt-3 max-w-2xl text-[13.5px] leading-8 text-mist">
          APEXTRA بخش‌های مختلف فرایند مدیریت استراتژیک را در یک محیط یکپارچه قرار می‌دهد — شش
          مرحله‌ای که به‌جای جزیره‌های جداگانه، یک چرخه پیوسته را می‌سازند.
        </p>
      </Reveal>

      <div className="mt-5 grid items-start gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal delay={200} y={26}>
            <div className="border border-hair bg-card p-5">
              <CycleDiagram />
              <div className="mt-3 flex items-center justify-between border-t border-hair pt-3 text-[10.5px] text-mist">
                <span>شش مرحله، یک چرخه پیوسته</span>
                <span className="font-latin tracking-[0.22em]">FIG. 02</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {STAGES.map((s, i) => (
              <Reveal key={s.num} delay={240 + i * 80}>
                <div className="group border-s-2 border-hair ps-3.5 py-2 transition-colors duration-300 hover:border-teal-500">
                  <div className="flex items-center gap-2.5">
                    <span className="font-latin text-[11px] text-teal-600 w-3.5">{s.num}</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.icon} />
                    </svg>
                    <h4 className="font-display font-extrabold text-ink text-[15px]">{s.title}</h4>
                  </div>
                  <p className="mt-1 text-[11.5px] leading-5 text-mist">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={760}>
            <div className="mt-4 border border-hair border-s-4 border-s-teal-500 bg-card px-5 py-3.5 text-[12.5px] leading-6 text-ink/85">
              خروجی هر مرحله، ورودی مرحله بعد است — بنابراین تصویر استراتژیک سازمان همیشه
              <span className="font-bold text-ink"> زنده، به‌روز و یکپارچه </span>
              باقی می‌ماند.
            </div>
          </Reveal>
        </div>
      </div>
    </Sheet>
  );
}
