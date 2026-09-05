import { Fragment } from "react";
import { Chain, CornerTicks, Logo, OWL_HERO, Owl, Sheet, Tag } from "./chrome";
import { Reveal, useScramble } from "./lib";
import {
  IconArrowLeft,
  IconBriefcase,
  IconChat,
  IconChip,
  IconCompass,
  IconCycle,
  IconData,
  IconDecision,
  IconDoc,
  IconPen,
  IconTransform,
} from "./icons";

const FA = "۰۱۲۳۴۵۶۷۸۹";
const fa2 = (n: number) => `${FA[Math.floor(n / 10)] ?? ""}${FA[n % 10]}`;

/* ================================================================
   PAGE 10 — AUDIENCE & VALUE
   ================================================================ */

const PERSONAS = [
  { icon: IconBriefcase, title: "مدیرعامل و مدیران ارشد", desc: "برای تصمیم‌گیری مبتنی بر تحلیل و داشتن تصویر جامع‌تر از وضعیت سازمان." },
  { icon: IconCompass, title: "مدیران استراتژی", desc: "برای تدوین، تحلیل، مدل‌سازی و پایش استراتژی." },
  { icon: IconTransform, title: "مدیران تحول دیجیتال", desc: "برای ارزیابی بلوغ دیجیتال و طراحی مسیر تحول." },
  { icon: IconChip, title: "مدیران فناوری و نوآوری", desc: "برای ارزیابی آمادگی سازمان و شناسایی فرصت‌های AI و نوآوری." },
  { icon: IconPen, title: "مشاوران مدیریت", desc: "برای ساختاردهی و تسریع فرایندهای تحلیل و تدوین استراتژی." },
];

const VALUES = [
  { title: "تصمیم‌گیری سریع‌تر", desc: "کاهش زمان جمع‌آوری، پردازش و تحلیل اطلاعات." },
  { title: "دید جامع‌تر", desc: "تصویری یکپارچه از وضعیت استراتژیک سازمان و محیط پیرامون." },
  { title: "استراتژی ساختاریافته‌تر", desc: "تبدیل تحلیل‌ها و اهداف به یک مدل قابل مدیریت." },
  { title: "اجرای منسجم‌تر", desc: "ارتباط میان اهداف، ابتکارات و اقدامات اجرایی." },
  { title: "آمادگی بیشتر برای آینده", desc: "شناسایی تغییرات و فرصت‌ها پیش از تبدیل‌شدن به بحران." },
  { title: "استفاده هدفمند از AI", desc: "تمرکز سرمایه‌گذاری‌های AI بر حوزه‌های دارای بیشترین ارزش." },
];

export function AudienceValuePage() {
  return (
    <Sheet id="audience" num="۱۰" title="مخاطبان و ارزش">
      <Tag num="۱۰" en="AUDIENCE & VALUE" title="برای چه کسانی، با چه ارزشی؟" />

      <div className="mt-5 grid lg:grid-cols-12 gap-x-12 gap-y-7">
        <div className="lg:col-span-6">
          <Reveal delay={100}>
            <h4 className="font-display font-bold text-ink text-[15.5px] flex items-center gap-3">
              APEXTRA برای چه کسانی است؟
              <span className="h-px flex-1 bg-hair" />
            </h4>
          </Reveal>
          <div className="mt-2">
            {PERSONAS.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="group flex items-start gap-3.5 border-b border-hair py-3 px-1 transition-all duration-300 hover:bg-card hover:px-3.5">
                  <span className="w-9 h-9 shrink-0 border border-hair bg-card flex items-center justify-center text-teal-600 transition-colors duration-300 group-hover:border-teal-400">
                    <p.icon className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <h5 className="font-display font-extrabold text-ink text-[14px]">{p.title}</h5>
                    <p className="mt-0.5 text-mist text-[11.5px] leading-5">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={140}>
            <h4 className="font-display font-bold text-ink text-[15.5px] flex items-center gap-3">
              ارزش APEXTRA برای سازمان
              <span className="h-px flex-1 bg-hair" />
            </h4>
          </Reveal>
          <div className="mt-2 grid sm:grid-cols-2 gap-x-7">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="group border-t-2 border-hair pt-3 pb-4 transition-colors duration-300 hover:border-teal-500">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-latin text-[12px] tracking-wider text-teal-600">{fa2(i + 1)}</span>
                    <h5 className="font-display font-extrabold text-ink text-[13.5px] leading-6">{v.title}</h5>
                  </div>
                  <p className="mt-1 text-mist text-[11.5px] leading-5">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Sheet>
  );
}

/* ================================================================
   PAGE 11 — FROM REPORTS TO DECISION SYSTEM
   ================================================================ */

const OLD_FLOW = [
  { fa: "داده‌ها", icon: IconData },
  { fa: "گزارش‌ها", icon: IconDoc },
  { fa: "جلسات", icon: IconChat },
  { fa: "تحلیل دستی", icon: IconPen },
  { fa: "تصمیم", icon: IconDecision },
];

export function ShiftPage() {
  return (
    <Sheet id="shift" num="۱۱" title="از گزارش تا تصمیم">
      <Tag num="۱۱" en="THE SHIFT" title="از «گزارش» به «سیستم تصمیم‌گیری»" />

      <div className="mt-5 space-y-4">
        <Reveal delay={120}>
          <div className="border border-hair bg-paper px-6 py-4.5">
            <div className="flex items-center justify-between gap-4">
              <span className="font-display font-bold text-mist text-[14px]">در مدل سنتی</span>
              <span className="font-latin text-[9px] tracking-[0.26em] text-mist/60">LINEAR — STOPS AT DECISION</span>
            </div>
            <div className="mt-3.5 flex flex-wrap items-center gap-x-2.5 gap-y-2.5">
              {OLD_FLOW.map((n, i) => (
                <Fragment key={n.fa}>
                  <span className="flex items-center gap-2 border border-hair bg-card px-3 py-1.5 text-[12.5px] text-mist">
                    <n.icon className="w-3.5 h-3.5 text-mist/60" />
                    {n.fa}
                  </span>
                  {i < OLD_FLOW.length - 1 && (
                    <span className="flex items-center gap-1.5 min-w-[22px] flex-1 max-w-[56px]">
                      <span className="flow-dash flow-dash-muted flex-1" />
                      <IconArrowLeft className="w-3 h-3 text-mist/50 shrink-0" />
                    </span>
                  )}
                </Fragment>
              ))}
              <span className="text-[11px] text-mist/70 border border-dashed border-hair px-2.5 py-1">
                و سپس... شروع دوباره از صفر
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="relative border border-navy-700 bg-navy-900 px-6 py-5">
            <CornerTicks />
            <div className="flex items-center justify-between gap-4">
              <span className="font-display font-bold text-slate-100 text-[14px]">
                در <span className="font-latin tracking-[0.15em] text-teal-400">APEXTRA</span>
              </span>
              <span className="font-latin text-[9px] tracking-[0.26em] text-slate-500">CONTINUOUS — DECISION → ACTION → MONITOR</span>
            </div>
            <div className="mt-4">
              <Chain dark items={["داده‌ها", "تحلیل هوشمند", "بینش", "سناریو", "تصمیم", "اقدام", "پایش"]} />
            </div>
            <div className="mt-3.5 flex items-center gap-2.5 text-[11.5px] text-slate-400">
              <IconCycle className="w-3.5 h-3.5 text-teal-400" />
              پایش، چرخه را دوباره به داده‌ها برمی‌گرداند — تصمیم‌گیری متوقف نمی‌شود.
            </div>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 border border-hair border-s-4 border-s-teal-500 bg-card px-5 py-4">
            <span className="font-latin text-[9.5px] tracking-[0.3em] text-teal-600 shrink-0">THE RESULT</span>
            <p className="font-display font-extrabold text-ink text-[15.5px] md:text-[17px] leading-8">
              یک چرخه مستمر و پویا برای مدیریت استراتژیک.
            </p>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}

/* ================================================================
   PAGE 12 — AT A GLANCE (TABLE)
   ================================================================ */

const GLANCE = [
  { domain: "مدیریت استراتژیک", cap: "تحلیل، تدوین، مدل‌سازی و پایش استراتژی" },
  { domain: "تحلیل کسب‌وکار", cap: "تبدیل اطلاعات به بینش مدیریتی" },
  { domain: "محیط کسب‌وکار", cap: "رصد و تحلیل تغییرات محیطی" },
  { domain: "رقابت", cap: "تحلیل موقعیت و مزیت رقابتی" },
  { domain: "سناریو", cap: "بررسی شرایط و مسیرهای مختلف آینده" },
  { domain: "نوآوری", cap: "تدوین و تحلیل استراتژی نوآوری" },
  { domain: "تحول دیجیتال", cap: "ارزیابی بلوغ و شناسایی شکاف‌ها" },
  { domain: "هوش مصنوعی", cap: "ارزیابی آمادگی و شناسایی فرصت‌های AI" },
  { domain: "اجرا", cap: "مدیریت و پایش ابتکارات استراتژیک" },
];

export function OverviewPage() {
  return (
    <Sheet id="overview" num="۱۲" title="در یک نگاه">
      <Tag num="۱۲" en="AT A GLANCE" title="APEXTRA در یک نگاه" />
      <Reveal delay={120}>
        <p className="mt-3 max-w-2xl text-[13px] leading-7 text-mist">
          نه حوزه، یک پلتفرم — جدول زیر نقشه کامل قابلیت‌های APEXTRA را در یک نگاه نشان می‌دهد.
        </p>
      </Reveal>

      <div className="mt-5">
        <Reveal>
          <div className="grid grid-cols-[52px_1fr] md:grid-cols-[72px_minmax(0,2fr)_minmax(0,3fr)] bg-navy-900 text-slate-100 px-5 py-3 text-[12px] font-bold">
            <span className="font-latin tracking-[0.15em] text-teal-400">#</span>
            <span className="font-display">حوزه</span>
            <span className="font-display hidden md:block">قابلیت</span>
          </div>
        </Reveal>
        {GLANCE.map((r, i) => (
          <Reveal key={r.domain} delay={i * 45}>
            <div className="group grid grid-cols-[52px_1fr] md:grid-cols-[72px_minmax(0,2fr)_minmax(0,3fr)] items-center gap-x-4 border-b border-hair px-5 py-3 transition-all duration-300 hover:bg-card hover:ps-7">
              <span className="font-latin text-[11.5px] tracking-wider text-teal-600">{fa2(i + 1)}</span>
              <span className="font-display font-extrabold text-ink text-[13.5px] md:text-[14.5px]">{r.domain}</span>
              <span className="col-span-2 md:col-span-1 mt-0.5 md:mt-0 text-mist text-[12px] leading-5">
                <span className="md:hidden font-bold text-ink/70 me-2">قابلیت:</span>
                {r.cap}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Sheet>
  );
}

/* ================================================================
   PAGE 13 — ONE STEP AHEAD (sticky two-column)
   ================================================================ */

const QUESTIONS = [
  "اگر شرایط تغییر کند چه می‌شود؟",
  "اگر رقیب جدید وارد شود چه می‌شود؟",
  "اگر فناوری جدیدی بازار را تغییر دهد چه می‌شود؟",
  "اگر بخواهیم با AI متحول شویم، از کجا باید شروع کنیم؟",
];

export function ForwardPage() {
  return (
    <Sheet id="forward" num="۱۳" title="یک قدم جلوتر">
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-7">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Tag num="۱۳" en="ONE STEP AHEAD" title="یک قدم جلوتر از امروز" />
            <Reveal delay={150}>
              <p className="mt-4 text-mist text-[13px] leading-8">
                سازمان‌های موفق فقط به این فکر نمی‌کنند که
                <span className="text-ink font-bold"> «امروز کجا هستیم؟» </span>
                — آن‌ها پرسش‌های سخت‌تری می‌پرسند.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <div className="mt-5 border border-hair border-s-4 border-s-teal-500 bg-card px-5 py-3.5">
                <p className="text-[13px] leading-7 text-ink font-medium">
                  APEXTRA برای پاسخ‌دادن
                  <span className="font-bold"> ساختاریافته </span>
                  به همین پرسش‌ها طراحی شده است.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          {QUESTIONS.map((q, i) => (
            <Reveal key={q} delay={i * 110}>
              <div className="group flex items-baseline gap-5 border-b border-hair py-5 px-1 transition-all duration-300 hover:bg-card hover:px-4">
                <span className="font-latin text-[13.5px] tracking-wider text-teal-600 w-8 shrink-0">
                  {fa2(i + 1)}
                </span>
                <h4 className="font-display font-bold text-ink text-[17px] md:text-[21px] leading-[1.7] transition-colors duration-300 group-hover:text-teal-700">
                  {q}
                </h4>
              </div>
            </Reveal>
          ))}
          <Reveal delay={480}>
            <div className="relative mt-6 border border-navy-700 bg-navy-900 px-6 py-6 md:px-8">
              <CornerTicks />
              <div className="font-latin text-[9.5px] tracking-[0.3em] text-teal-400">AND ABOVE ALL</div>
              <p className="mt-2.5 font-display font-black text-slate-100 text-[18px] md:text-[24px] leading-[1.8]">
                «برای رسیدن به آینده مطلوب،
                <span className="text-teal-300"> امروز چه تصمیمی </span>
                باید بگیریم؟»
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Sheet>
  );
}

/* ================================================================
   PAGE 14 — CLOSING
   ================================================================ */

export function FinalPage() {
  const word = useScramble("APEXTRA", true, 30);
  const imperatives = ["تحلیل کنید.", "آینده را بسازید.", "استراتژی را اجرا کنید."];

  return (
    <Sheet id="final" bare tone="dark" num="۱۴">
      <div className="relative flex h-full flex-col">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -left-6 bottom-16 hidden 2xl:block [writing-mode:vertical-rl] rotate-180 font-latin font-bold text-[88px] leading-none text-outline"
        >
          DECIDE
        </span>

        <Reveal>
          <div className="flex items-center justify-between gap-4 border-b border-navy-700 pb-4">
            <Logo className="h-8 w-auto" />
            <span className="font-latin text-[9.5px] tracking-[0.3em] text-slate-500">CLOSING — PAGE 14 / 14</span>
          </div>
        </Reveal>

        <div className="grid flex-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 py-4">
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="font-latin text-[10px] tracking-[0.32em] text-teal-400">STRATEGIC INTELLIGENCE</div>
            </Reveal>
            <Reveal delay={160}>
              <h2 className="mt-3 font-display font-black text-slate-100 text-[26px] sm:text-[32px] xl:text-[38px] leading-[1.55]">
                هوشمندی استراتژیک برای
                <span className="text-teal-300"> تصمیم‌های بزرگ</span>
              </h2>
            </Reveal>

            <div className="mt-5">
              {imperatives.map((s, i) => (
                <Reveal key={s} delay={260 + i * 130}>
                  <div className="group flex items-center gap-4 border-b border-navy-700 py-3.5 px-1 transition-all duration-300 hover:ps-3.5 hover:border-teal-500/50">
                    <span className="font-latin text-[11px] tracking-wider text-teal-500 w-7 shrink-0">{fa2(i + 1)}</span>
                    <span className="font-display font-extrabold text-slate-100 text-[18px] md:text-[22px] transition-colors duration-300 group-hover:text-teal-300">
                      {s}
                    </span>
                    <IconArrowLeft className="w-4.5 h-4.5 text-navy-600 ms-auto transition-all duration-300 group-hover:text-teal-400 group-hover:-translate-x-1.5" />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={650}>
              <a
                href="https://apextra.ir"
                target="_blank"
                rel="noreferrer"
                className="group mt-5 flex items-center justify-between gap-5 border border-teal-500/60 bg-teal-500/5 px-5 py-4 transition-colors duration-300 hover:bg-teal-500/15"
              >
                <div>
                  <div dir="ltr" className="text-right font-latin font-bold tracking-[0.18em] text-teal-300 text-lg md:text-xl group-hover:text-teal-200 transition-colors">
                    apextra.ir
                  </div>
                  <div className="mt-0.5 text-slate-400 text-[11.5px]">آغاز گفت‌وگو درباره استقرار APEXTRA در سازمان شما</div>
                </div>
                <span className="w-10 h-10 border border-teal-500/60 flex items-center justify-center text-teal-400 shrink-0 transition-transform duration-300 group-hover:-translate-x-1.5">
                  <IconArrowLeft className="w-4.5 h-4.5" />
                </span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={300} y={30}>
              <div className="relative mx-auto max-w-[340px]">
                <CornerTicks />
                <div className="relative overflow-hidden border border-navy-700 bg-navy-850">
                  <Owl src={OWL_HERO} alt="کاراکتر APEXTRA" className="aspect-[4/4.2] w-full object-cover breathe" />
                </div>
                <div className="mt-3 text-center">
                  <div dir="ltr" className="font-latin font-bold tracking-[0.4em] text-slate-200 text-base">
                    {word}
                  </div>
                  <div className="mt-1 text-[10.5px] text-slate-500">همراهِ تصمیم‌های بزرگ سازمان شما</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={200}>
          <div className="border-t border-navy-700 pt-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-[10.5px] text-slate-500">
            <span>© APEXTRA — Enterprise Strategic Management Platform</span>
            <span className="hidden md:block">تحلیل کنید، آینده را بسازید، استراتژی را اجرا کنید</span>
            <a href="https://apextra.ir" target="_blank" rel="noreferrer" className="font-latin tracking-[0.15em] text-teal-400 hover:text-teal-300 transition-colors">
              apextra.ir
            </a>
          </div>
        </Reveal>
      </div>
    </Sheet>
  );
}
