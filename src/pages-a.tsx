import { Fragment } from "react";
import {
  Chain,
  CornerTicks,
  OWL_FACE,
  OWL_HERO,
  Owl,
  Sheet,
  Tag,
} from "./chrome";
import { faNum, Reveal, useScramble } from "./lib";
import {
  IconAction,
  IconAnalyze,
  IconArrowLeft,
  IconBranch,
  IconCycle,
  IconData,
  IconDecision,
  IconEye,
  IconFlag,
  IconModel,
  IconPulse,
  IconSwot,
  IconX,
} from "./icons";

/* ================================================================
   PAGE 01 — COVER
   ================================================================ */

export function CoverPage() {
  const title = useScramble("APEXTRA", true, 30);

  const meta = [
    { label: "مخاطب", value: "مدیرعامل، هیئت‌مدیره و مدیران ارشد" },
    { label: "محتوا", value: "۱۴ قابلیت کلیدی در ۵ حوزه تخصصی" },
    { label: "دسترسی", value: "apextra.ir", link: true },
  ];

  return (
    <Sheet id="cover" bare tone="dark">
      <div className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -left-6 top-6 hidden 2xl:block [writing-mode:vertical-rl] rotate-180 font-latin font-bold text-[110px] leading-none text-outline"
        >
          APEXTRA
        </span>

        {/* top identity row */}
        <Reveal>
          <div className="flex items-center justify-between gap-4 border-b border-navy-700 pb-5">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 border border-navy-700 bg-navy-850 flex items-center justify-center overflow-hidden">
                <Owl src={OWL_FACE} alt="نشان APEXTRA" className="w-9 h-9 object-contain" />
              </span>
              <div>
                <div className="font-latin font-bold tracking-[0.32em] text-[15px] text-slate-100">APEXTRA</div>
                <div className="text-[11px] text-slate-400 mt-0.5">بروشور رسمی سازمانی</div>
              </div>
            </div>
            <div className="text-left">
              <div className="font-latin text-[10px] md:text-[11px] tracking-[0.3em] text-slate-500">
                ENTERPRISE STRATEGIC MANAGEMENT
              </div>
              <div className="font-latin text-[10px] tracking-[0.3em] text-slate-600 mt-1">BROCHURE — VOL. 01</div>
            </div>
          </div>
        </Reveal>

        {/* main */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center py-10 md:py-14 lg:min-h-[56vh]">
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-teal-500" />
                <span className="font-latin text-[10.5px] md:text-xs tracking-[0.32em] text-teal-400">
                  INTELLIGENT STRATEGY &amp; ANALYTICS PLATFORM
                </span>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h1
                dir="ltr"
                className="mt-6 text-right font-latin font-bold text-slate-100 leading-[0.95] tracking-[-0.015em] text-[64px] sm:text-[96px] xl:text-[124px]"
              >
                {title}
                <span className="caret text-teal-400">_</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <h2 className="mt-7 font-display font-black text-slate-100 text-[24px] sm:text-[32px] xl:text-[40px] leading-[1.45]">
                هوشمندی استراتژیک برای تصمیم‌های بزرگ
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-4 max-w-xl text-slate-400 text-[14.5px] md:text-base leading-8">
                پلتفرم هوشمند مدیریت و تحلیل استراتژیک — ترکیبی از چارچوب‌های مدیریت استراتژیک، تحلیل
                داده و هوش مصنوعی.
                <span className="text-teal-300 font-semibold"> از داده و تحلیل تا تصمیم و اقدام.</span>
              </p>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-navy-700 pt-6">
                {meta.map((m) => (
                  <div key={m.label}>
                    <div className="font-latin text-[10px] tracking-[0.25em] text-slate-500 uppercase">{m.label}</div>
                    {m.link ? (
                      <a
                        href="https://apextra.ir"
                        target="_blank"
                        rel="noreferrer"
                        dir="ltr"
                        className="mt-1.5 inline-block text-teal-400 font-latin text-sm tracking-wide hover:text-teal-300 transition-colors"
                      >
                        apextra.ir
                      </a>
                    ) : (
                      <div className="mt-1.5 text-slate-200 text-[13px] leading-6">{m.value}</div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* owl panel */}
          <div className="lg:col-span-5">
            <Reveal delay={260} y={34}>
              <div className="relative max-w-[400px] lg:ml-0 lg:mr-auto">
                <CornerTicks />
                <div className="relative overflow-hidden border border-navy-700 bg-navy-850 aspect-[4/4.7]">
                  <Owl
                    src={OWL_HERO}
                    alt="کاراکتر APEXTRA — جغد هوشمندی استراتژیک"
                    className="w-full h-full object-cover breathe"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-navy-950/78 backdrop-blur-[2px] px-4 py-3 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-slate-300">جغد APEXTRA — نماد هوشمندی استراتژیک</span>
                    <span className="font-latin text-[10px] tracking-[0.25em] text-teal-400 shrink-0">FIG. 01</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* bottom value path */}
        <Reveal delay={200}>
          <div className="border-t border-navy-700 pt-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <span className="text-[11.5px] text-slate-500">مسیر ارزش در APEXTRA</span>
            <div className="flex items-center gap-2.5 text-[13px] text-slate-200">
              {["داده", "بینش", "تصمیم", "اقدام"].map((s, i) => (
                <Fragment key={s}>
                  <span className="font-semibold">{s}</span>
                  {i < 3 ? (
                    <IconArrowLeft className="w-4 h-4 text-teal-500" />
                  ) : (
                    <span className="flex items-center gap-1.5 text-slate-500 text-[11.5px]">
                      <IconCycle className="w-3.5 h-3.5 text-teal-500" />
                      پایش مستمر
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
            <span className="font-latin text-[10px] tracking-[0.3em] text-slate-600">DATA → INSIGHT → DECISION → ACTION</span>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

/* ================================================================
   PAGE 02 — WHY APEXTRA
   ================================================================ */

const FLOW = [
  { fa: "داده", en: "DATA", icon: IconData },
  { fa: "بینش", en: "INSIGHT", icon: IconEye },
  { fa: "تصمیم", en: "DECISION", icon: IconDecision },
  { fa: "اقدام", en: "ACTION", icon: IconAction },
];

export function WhyPage() {
  return (
    <Sheet id="why" num="۰۲" title="چرا APEXTRA؟">
      <Tag num="۰۲" en="THE WHY" title="اطلاعات به‌تنهایی مزیت ایجاد نمی‌کند" />

      <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-14">
        {/* narrative */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Reveal delay={100}>
            <p className="text-mist text-[15px] leading-9">
              در محیط کسب‌وکار امروز، اطلاعات به‌تنهایی مزیت ایجاد نمی‌کند. مزیت واقعی زمانی شکل
              می‌گیرد که سازمان بتواند مسیر زیر را به یک
              <span className="text-ink font-bold"> چرخه مستمر و یکپارچه </span>
              تبدیل کند:
            </p>
            <div className="mt-5">
              <Chain items={["اطلاعات", "تحلیل", "بینش", "تصمیم", "اقدام"]} compact />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="border border-hair border-s-4 border-s-teal-500 bg-card px-5 py-4">
              <p className="font-display font-extrabold text-ink text-lg leading-8">
                APEXTRA برای همین طراحی شده است.
              </p>
              <p className="mt-2 text-mist text-[13.5px] leading-7">
                به‌جای اتکا به گزارش‌های پراکنده و تحلیل‌های دستی، یک تصویر ساختاریافته و پویا از
                وضعیت استراتژیک سازمان — در اختیار مدیران و تیم‌های استراتژی.
              </p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="space-y-3">
              <div className="flex items-start gap-3 border border-hair bg-paper px-4 py-3 text-mist">
                <IconX className="w-4 h-4 mt-1 shrink-0 text-mist/70" />
                <span className="text-[13px] leading-6">
                  گزارش‌های پراکنده، تحلیل‌های دستی، جلسات مکرر و تصمیم‌های دیرهنگام
                </span>
              </div>
              <div className="flex items-start gap-3 border border-teal-500/45 bg-card px-4 py-3 text-ink">
                <IconCycle className="w-4 h-4 mt-1 shrink-0 text-teal-600" />
                <span className="text-[13px] leading-6 font-medium">
                  یک چرخه زنده: داده‌ها همیشه در جریان، بینش همیشه به‌روز، تصمیم همیشه مبتنی بر تحلیل
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* flow diagram */}
        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-display font-bold text-ink text-lg">مسیر ایجاد ارزش</h4>
              <span className="font-latin text-[10px] tracking-[0.28em] text-mist/70">
                DATA → INSIGHT → DECISION → ACTION
              </span>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-6 border border-hair bg-card p-6 md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                {FLOW.map((n, i) => (
                  <Fragment key={n.en}>
                    <div className="group flex flex-col items-center text-center shrink-0">
                      <div className="relative w-16 h-16 md:w-[84px] md:h-[84px] border border-hair bg-paper flex items-center justify-center text-teal-600 transition-all duration-300 group-hover:border-teal-500 group-hover:-translate-y-1 group-hover:shadow-[0_16px_32px_-14px_rgba(14,148,155,0.5)]">
                        <n.icon className="w-7 h-7 md:w-8 md:h-8" />
                        <span className="absolute -top-2.5 -end-2.5 w-6 h-6 bg-navy-900 text-teal-300 font-latin text-[10.5px] flex items-center justify-center">
                          {i + 1}
                        </span>
                      </div>
                      <div className="mt-3 font-display font-extrabold text-ink text-[15px] md:text-[17px]">{n.fa}</div>
                      <div className="mt-1 font-latin text-[9px] md:text-[9.5px] tracking-[0.26em] text-mist/80">{n.en}</div>
                    </div>
                    {i < FLOW.length - 1 && (
                      <div className="flex-1 flex items-center gap-1.5 pt-8 md:pt-10 min-w-[26px]">
                        <span className="flow-dash flex-1" />
                        <IconArrowLeft className="w-4 h-4 text-teal-500 shrink-0" />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>

              {/* loop back */}
              <div className="mt-8 mx-4 md:mx-8">
                <div className="relative h-8 border-x-2 border-b-2 border-teal-600/35">
                  <span className="absolute -bottom-3.5 right-1/2 translate-x-1/2 bg-card px-3.5 py-1 text-[11.5px] text-mist flex items-center gap-2 whitespace-nowrap">
                    <IconCycle className="w-3.5 h-3.5 text-teal-600" />
                    پایش مستمر — چرخه دوباره از داده آغاز می‌شود
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-9 text-mist text-[13.5px] leading-7">
              هر مرحله، خوراک مرحله بعد را تولید می‌کند و پایش، کل مسیر را به یک
              <span className="text-teal-700 font-bold"> سیستم تصمیم‌گیری زنده </span>
              تبدیل می‌کند — نه یک زنجیره یک‌طرفه.
            </p>
          </Reveal>
        </div>
      </div>
    </Sheet>
  );
}

/* ================================================================
   PAGE 03 — INTEGRATED PLATFORM
   ================================================================ */

const STAGES = [
  { fa: "تحلیل", desc: "درک وضعیت فعلی سازمان، بازار و محیط کسب‌وکار", icon: IconAnalyze },
  { fa: "ارزیابی", desc: "شناسایی نقاط قوت، ضعف، فرصت‌ها، تهدیدها و شکاف‌های سازمان", icon: IconSwot },
  { fa: "طراحی", desc: "تدوین و مدل‌سازی اهداف و مسیرهای استراتژیک", icon: IconModel },
  { fa: "سناریو", desc: "بررسی گزینه‌ها و پیامدهای تصمیمات در شرایط مختلف", icon: IconBranch },
  { fa: "اجرا", desc: "تبدیل استراتژی به اقدامات و ابتکارات مشخص", icon: IconFlag },
  { fa: "پایش", desc: "بررسی مستمر پیشرفت و میزان هم‌راستایی با استراتژی", icon: IconPulse },
];

function CycleDiagram() {
  const C = 170;
  const R = 116;
  const pos = (i: number) => {
    const a = ((-90 + i * 60) * Math.PI) / 180;
    return { x: C + R * Math.cos(a), y: C + R * Math.sin(a) };
  };
  return (
    <svg viewBox="0 0 340 340" className="w-full max-w-[430px] mx-auto" role="img" aria-label="چرخه شش‌مرحله‌ای مدیریت استراتژیک">
      <g className="spin-slower">
        <circle cx="170" cy="170" r="158" stroke="rgba(20,175,182,0.28)" strokeWidth="1" strokeDasharray="2 10" fill="none" />
      </g>
      <circle cx="170" cy="170" r="116" stroke="var(--color-hair)" strokeWidth="1.5" fill="none" />
      {STAGES.map((_, i) => {
        const mid = -90 + i * 60 + 30;
        const a = (mid * Math.PI) / 180;
        const x = C + R * Math.cos(a);
        const y = C + R * Math.sin(a);
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${mid + 90})`}>
            <path d="M-3.5 -5 L4 0 L-3.5 5" stroke="var(--color-teal-500)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );
      })}
      {STAGES.map((s, i) => {
        const p = pos(i);
        return (
          <g key={s.fa} className="transition-transform">
            <circle cx={p.x} cy={p.y} r="31" fill="var(--color-card)" stroke="var(--color-hair)" strokeWidth="1.5" />
            <circle cx={p.x} cy={p.y} r="31" fill="none" stroke="var(--color-teal-500)" strokeWidth="1.5" strokeDasharray="8 187" transform={`rotate(${-90 + i * 60} ${p.x} ${p.y})`} opacity="0.9" />
            <text x={p.x} y={p.y - 6} textAnchor="middle" fontSize="8.5" fill="var(--color-teal-600)" fontFamily="Vazirmatn" fontWeight="600">
              {faNum(i + 1)}
            </text>
            <text x={p.x} y={p.y + 12} textAnchor="middle" fontSize="13.5" fill="var(--color-ink)" fontFamily="Estedad" fontWeight="700">
              {s.fa}
            </text>
          </g>
        );
      })}
      <circle cx="170" cy="170" r="57" fill="var(--color-navy-900)" />
      <circle cx="170" cy="170" r="57" fill="none" stroke="var(--color-navy-600)" strokeWidth="1" />
      <text x="170" y="163" textAnchor="middle" fontSize="15" fill="#e7eefb" fontFamily="Estedad" fontWeight="800">
        یک چرخه
      </text>
      <text x="170" y="185" textAnchor="middle" fontSize="15" fill="var(--color-teal-300)" fontFamily="Estedad" fontWeight="800">
        یک محیط
      </text>
    </svg>
  );
}

export function PlatformPage() {
  return (
    <Sheet id="platform" num="۰۳" title="یک محیط یکپارچه">
      <Tag num="۰۳" en="ONE PLATFORM" title="یک محیط یکپارچه برای مدیریت استراتژیک" />
      <Reveal delay={120}>
        <p className="mt-5 max-w-2xl text-mist text-[15px] leading-9">
          APEXTRA بخش‌های مختلف فرایند مدیریت استراتژیک را در یک محیط یکپارچه قرار می‌دهد — شش
          مرحله‌ای که به‌جای جزیره‌های جداگانه، یک چرخه پیوسته را تشکیل می‌دهند.
        </p>
      </Reveal>

      <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          {STAGES.map((s, i) => (
            <Reveal key={s.fa} delay={i * 70}>
              <div className="group flex items-center gap-5 border-b border-hair py-4.5 px-2 transition-all duration-300 hover:bg-card hover:px-5">
                <span className="font-latin text-[13px] tracking-[0.15em] text-teal-600 w-7 shrink-0">{faNum(i + 1)}</span>
                <span className="w-11 h-11 shrink-0 border border-hair bg-card flex items-center justify-center text-teal-600 transition-colors duration-300 group-hover:border-teal-400">
                  <s.icon className="w-6 h-6" />
                </span>
                <div className="min-w-0">
                  <h4 className="font-display font-extrabold text-ink text-[17px]">{s.fa}</h4>
                  <p className="mt-0.5 text-mist text-[13px] leading-6">{s.desc}</p>
                </div>
                <IconArrowLeft className="w-4 h-4 text-hair shrink-0 transition-all duration-300 group-hover:text-teal-500 -translate-x-0 group-hover:-translate-x-1" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <Reveal delay={200} y={30}>
            <div className="relative border border-hair bg-paper p-4 md:p-6">
              <CornerTicks tone="slate" />
              <CycleDiagram />
              <div className="mt-4 flex items-center justify-between text-[10.5px] text-mist">
                <span>چرخه مدیریت استراتژیک APEXTRA</span>
                <span className="font-latin tracking-[0.22em]">FIG. 02</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Sheet>
  );
}
