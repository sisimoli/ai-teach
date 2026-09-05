import type { CSSProperties } from "react";
import { Cap, Chain, Chip, CornerTicks, Li, Sheet, Tag } from "./chrome";
import { faNum, Reveal } from "./lib";
import {
  IconArrowLeft,
  IconChip,
  IconFlag,
  IconGauge,
  IconPulse,
  IconSpark,
} from "./icons";

/* ================================================================
   PAGE 07 — AI READINESS
   ================================================================ */

const AI_DOMAINS = ["داده", "زیرساخت", "مهارت‌ها", "فرایندها", "حاکمیت", "فرهنگ سازمانی"];
const ORG_GAPS = ["فرایندها", "منابع", "قابلیت‌ها", "فناوری", "نیروی انسانی", "ساختار سازمانی"];

export function AiReadinessPage() {
  return (
    <Sheet id="ai" num="۰۷" title="آمادگی هوش مصنوعی">
      <Tag num="۰۷" en="AI READINESS" title="آمادگی سازمان برای هوش مصنوعی" />
      <Reveal delay={120}>
        <p className="mt-5 max-w-2xl text-mist text-[15px] leading-9">
          هوش مصنوعی زمانی ارزش‌آفرین است که سازمان برای استفاده از آن آمادگی داشته باشد — و زمانی
          ارزش را چند برابر می‌کند که سرمایه‌گذاری‌ها درست در نقطه‌ای انجام شوند که بیشترین اثر را
          دارند.
        </p>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-12 gap-x-12 gap-y-12">
        <Cap num="۰۸" icon={<IconChip className="w-7 h-7" />} title="آمادگی سازمان برای AI" className="lg:col-span-7">
          <p>
            APEXTRA به سازمان کمک می‌کند وضعیت فعلی خود را از منظر آمادگی برای هوش مصنوعی بررسی کند
            و شکاف‌های مهم را شناسایی نماید. ارزیابی آمادگی در حوزه‌هایی مانند:
          </p>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {AI_DOMAINS.map((d, i) => (
              <div
                key={d}
                className="group border border-hair bg-card px-3.5 py-3.5 flex items-center gap-2.5 transition-all duration-300 hover:border-teal-400 hover:-translate-y-0.5"
              >
                <span className="font-latin text-[10px] text-teal-600 tracking-wider">{faNum(i + 1)}</span>
                <span className="text-[13px] font-semibold text-ink">{d}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 border border-hair border-s-4 border-s-teal-500 bg-card px-5 py-3.5">
            <span className="text-[13.5px] text-mist">نتیجه: </span>
            <span className="text-[14px] font-bold text-ink">
              یک تصویر روشن از مسیر <span dir="ltr" className="font-latin tracking-wide text-teal-700">AI Adoption</span> سازمان
            </span>
          </div>
        </Cap>

        <Cap num="۰۷" icon={<IconGauge className="w-7 h-7" />} title="ارزیابی آمادگی سازمان" className="lg:col-span-5">
          <p>
            هر استراتژی خوبی الزاماً قابل اجرا نیست. APEXTRA آمادگی سازمان برای حرکت در مسیر
            استراتژیک موردنظر را بررسی می‌کند و شکاف‌های موجود را در حوزه‌هایی مانند موارد زیر
            شناسایی می‌کند:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {ORG_GAPS.map((g) => (
              <Chip key={g}>{g}</Chip>
            ))}
          </div>
        </Cap>

        <Cap num="۰۹" icon={<IconSpark className="w-7 h-7" />} title="شناسایی فرصت‌های هوش مصنوعی" className="lg:col-span-12">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7">
              <p>
                APEXTRA به شناسایی و اولویت‌بندی فرصت‌های استفاده از هوش مصنوعی کمک می‌کند تا
                سرمایه‌گذاری‌های AI بر حوزه‌هایی متمرکز شوند که
                <span className="text-ink font-bold"> بیشترین ارزش بالقوه </span>
                را برای سازمان دارند.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-3">
              <div className="border border-hair bg-card px-5 py-4">
                <div className="font-latin text-[9.5px] tracking-[0.25em] text-mist/70">سؤال اول</div>
                <p className="mt-1.5 text-mist text-[14px] leading-7">«کجا می‌توانیم از AI استفاده کنیم؟</p>
              </div>
              <div className="relative border border-navy-700 bg-navy-900 px-5 py-4">
                <CornerTicks />
                <div className="font-latin text-[9.5px] tracking-[0.25em] text-teal-400">سؤال اصلی</div>
                <p className="mt-1.5 text-slate-100 font-display font-bold text-[15px] leading-8">
                  «کجا استفاده از AI بیشترین ارزش را برای کسب‌وکار ایجاد می‌کند؟»
                </p>
              </div>
            </div>
          </div>
        </Cap>
      </div>
    </Sheet>
  );
}

/* ================================================================
   PAGE 08 — DIGITAL MATURITY & INNOVATION
   ================================================================ */

function GaugePanel() {
  return (
    <div className="border border-hair bg-card p-6">
      <svg viewBox="0 0 220 132" className="w-full max-w-[330px] mx-auto" role="img" aria-label="سنجش بلوغ دیجیتال">
        <path d="M20 110 A90 90 0 0 1 200 110" stroke="var(--color-hair)" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path
          d="M20 110 A90 90 0 0 1 200 110"
          stroke="var(--color-teal-500)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          className="gauge-arc"
          style={{ "--len": "283", "--off": "107" } as CSSProperties}
        />
        <g className="gauge-needle" style={{ "--rot": "21.6deg", transformOrigin: "110px 110px" } as CSSProperties}>
          <path d="M110 110 L110 38" stroke="var(--color-navy-900)" strokeWidth="2.6" strokeLinecap="round" />
        </g>
        <circle cx="110" cy="110" r="7.5" fill="var(--color-navy-900)" />
        <circle cx="110" cy="110" r="2.6" fill="var(--color-teal-400)" />
        <text x="110" y="92" textAnchor="middle" fontSize="21" fill="var(--color-teal-700)" fontFamily="Space Grotesk" fontWeight="700">
          62%
        </text>
        <text x="16" y="128" textAnchor="start" fontSize="9.5" fill="var(--color-mist)" fontFamily="Vazirmatn">
          وضعیت فعلی
        </text>
        <text x="204" y="128" textAnchor="end" fontSize="9.5" fill="var(--color-mist)" fontFamily="Vazirmatn">
          وضعیت مطلوب
        </text>
      </svg>
      <div className="mt-4 flex items-center justify-between text-[10.5px] text-mist border-t border-hair pt-3">
        <span>سنجش شکاف بلوغ — نمونه شماتیک</span>
        <span className="font-latin tracking-[0.22em]">FIG. 04</span>
      </div>
    </div>
  );
}

export function MaturityPage() {
  return (
    <Sheet id="maturity" num="۰۸" title="بلوغ دیجیتال و نوآوری">
      <Tag num="۰۸" en="DIGITAL MATURITY" title="بلوغ دیجیتال و استراتژی نوآوری" />
      <Reveal delay={120}>
        <p className="mt-5 max-w-2xl text-mist text-[15px] leading-9">
          تحول دیجیتال و نوآوری، هر دو از یک نقطه شروع می‌شوند: شناخت دقیق وضعیت موجود — و هر دو به
          یک چیز ختم می‌شوند: خلق ارزش اقتصادی پایدار.
        </p>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-12 gap-x-12 gap-y-12">
        <Cap num="۱۰" icon={<IconGauge className="w-7 h-7" />} title="ارزیابی بلوغ دیجیتال" className="lg:col-span-7">
          <p>
            تحول دیجیتال بدون شناخت نقطه شروع امکان‌پذیر نیست. APEXTRA با ارزیابی بلوغ دیجیتال
            سازمان، وضعیت فعلی و شکاف‌های موجود را مشخص می‌کند.
          </p>
          <div className="mt-5 grid sm:grid-cols-2 gap-5 items-center">
            <GaugePanel />
            <div>
              <div className="font-display font-bold text-ink text-[15.5px]">از وضعیت فعلی تا وضعیت مطلوب</div>
              <div className="mt-4">
                <Chain compact items={["ارزیابی", "شناسایی شکاف", "اولویت‌بندی", "طراحی مسیر تحول"]} />
              </div>
              <p className="mt-4 text-[13px] leading-7">
                این فرایند می‌تواند مبنایی برای تدوین
                <span className="text-ink font-bold"> نقشه راه تحول دیجیتال </span>
                سازمان باشد.
              </p>
            </div>
          </div>
        </Cap>

        <Cap num="۱۱" icon={<IconSpark className="w-7 h-7" />} title="استراتژی نوآوری" className="lg:col-span-5">
          <p>
            نوآوری تنها تولید ایده نیست؛ نوآوری زمانی ارزشمند است که بتواند به
            <span className="text-ink font-bold"> مزیت، رشد و ارزش اقتصادی </span>
            تبدیل شود. APEXTRA ارتباط میان عناصر مسیر نوآوری را ساختاریافته می‌کند:
          </p>
          <div className="mt-5 space-y-0">
            {["نیازهای بازار", "فرصت‌ها", "ایده‌ها", "قابلیت‌ها", "ابتکارات نوآورانه"].map((s, i, arr) => (
              <div key={s}>
                <div className="group flex items-center gap-3.5 border border-hair bg-card px-4 py-3 transition-colors hover:border-teal-400">
                  <span className="font-latin text-[10.5px] text-teal-600 tracking-wider w-6">{faNum(i + 1)}</span>
                  <span className="font-display font-bold text-ink text-[14.5px]">{s}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex justify-start ps-7 py-1">
                    <IconArrowLeft className="w-3.5 h-3.5 text-teal-500 -rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Cap>
      </div>
    </Sheet>
  );
}

/* ================================================================
   PAGE 09 — EXECUTION & MONITORING
   ================================================================ */

const INITIATIVE_QUESTIONS = [
  "چه کاری؟",
  "برای رسیدن به کدام هدف؟",
  "با چه اولویتی؟",
  "توسط چه بخشی؟",
  "با چه نتیجه‌ای؟",
];

export function ExecutionPage() {
  return (
    <Sheet id="execution" num="۰۹" title="اجرا و پایش">
      <Tag num="۰۹" en="EXECUTION & MONITORING" title="از استراتژی تا اقدام؛ اجرا و پایش" />
      <Reveal delay={120}>
        <p className="mt-5 max-w-2xl text-mist text-[15px] leading-9">
          فاصله میان «استراتژی تدوین‌شده» و «استراتژی اجراشده» یکی از مهم‌ترین چالش‌های سازمان‌هاست.
          APEXTRA این فاصله را با شفاف‌سازی ابتکارات و پایش مستمر پر می‌کند.
        </p>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-12 gap-x-12 gap-y-12">
        <Cap num="۱۲" icon={<IconFlag className="w-7 h-7" />} title="مدیریت ابتکارات استراتژیک" className="lg:col-span-6">
          <p>
            استراتژی باید به اقدام تبدیل شود. APEXTRA ارتباط میان اهداف استراتژیک و ابتکارات سازمان
            را شفاف می‌کند تا برای هر ابتکار مشخص باشد:
          </p>
          <div className="mt-4">
            {INITIATIVE_QUESTIONS.map((q, i) => (
              <div
                key={q}
                className="group flex items-center gap-4 border-b border-hair py-3 px-1 transition-all duration-300 hover:bg-card hover:px-4"
              >
                <span className="font-latin text-xs text-teal-600 tracking-wider w-6 shrink-0">{faNum(i + 1)}</span>
                <span className="font-display font-bold text-ink text-[15.5px]">{q}</span>
                <IconArrowLeft className="w-4 h-4 text-hair ms-auto transition-all duration-300 group-hover:text-teal-500 group-hover:-translate-x-1" />
              </div>
            ))}
          </div>
        </Cap>

        <Cap num="۱۳" icon={<IconPulse className="w-7 h-7" />} title="پایش اجرای استراتژی" className="lg:col-span-6">
          <p>
            APEXTRA امکان پایش مستمر مسیر اجرای استراتژی را فراهم می‌کند تا مدیران بتوانند:
          </p>
          <ul className="mt-4 space-y-2 text-[13.5px]">
            <Li>میزان پیشرفت ابتکارات را بررسی کنند</Li>
            <Li>انحرافات را شناسایی کنند</Li>
            <Li>اولویت‌ها را بازبینی کنند</Li>
            <Li>میزان هم‌راستایی اقدامات با اهداف را ارزیابی کنند</Li>
          </ul>
          <Reveal delay={200}>
            <div className="mt-6 border border-hair bg-card p-5">
              <svg viewBox="0 0 320 84" className="w-full" role="img" aria-label="نمودار پایش اجرا">
                <path d="M0 42 H220 V62 M220 42 V22 M220 42 H320" stroke="var(--color-hair)" strokeWidth="1" fill="none" strokeDasharray="4 5" />
                <path
                  d="M0 46 L36 44 L64 50 L92 34 L120 40 L150 26 L180 32 L210 20 L244 24 L276 14 L320 10"
                  stroke="var(--color-teal-500)"
                  strokeWidth="2.2"
                  fill="none"
                  strokeLinecap="round"
                  className="draw-path"
                  style={{ "--len": "420" } as CSSProperties}
                />
                <circle cx="320" cy="10" r="4" fill="var(--color-teal-500)" className="tdot" />
                <text x="6" y="76" fontSize="9" fill="var(--color-mist)" fontFamily="Vazirmatn">
                  خط مبنای برنامه
                </text>
                <text x="314" y="76" textAnchor="end" fontSize="9" fill="var(--color-teal-700)" fontFamily="Vazirmatn" fontWeight="600">
                  پیشرفت واقعی
                </text>
              </svg>
              <div className="mt-3 flex items-center justify-between text-[10.5px] text-mist border-t border-hair pt-3">
                <span>پایش مستمر پیشرفت و انحرافات</span>
                <span className="font-latin tracking-[0.22em]">FIG. 05</span>
              </div>
            </div>
          </Reveal>
        </Cap>
      </div>
    </Sheet>
  );
}


