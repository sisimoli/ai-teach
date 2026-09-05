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
   PAGE 07 — READINESS & AI (capabilities 07–09)
   ================================================================ */

const ORG_GAPS = ["فرایندها", "منابع", "قابلیت‌ها", "فناوری", "نیروی انسانی", "ساختار سازمانی"];
const AI_DOMAINS = ["داده", "زیرساخت", "مهارت‌ها", "فرایندها", "حاکمیت", "فرهنگ سازمانی"];

export function AiReadinessPage() {
  return (
    <Sheet id="ai" num="۰۷" title="آمادگی و هوش مصنوعی">
      <Tag num="۰۷" en="READINESS & AI" title="ارزیابی آمادگی سازمان و هوش مصنوعی" />
      <Reveal delay={120}>
        <p className="mt-3 max-w-2xl text-[13px] leading-7 text-mist">
          هوش مصنوعی زمانی ارزش‌آفرین است که سازمان برای استفاده از آن آمادگی داشته باشد — و زمانی
          ارزش را چند برابر می‌کند که سرمایه‌گذاری‌ها درست در نقطه‌ای انجام شوند که بیشترین اثر را
          دارند.
        </p>
      </Reveal>

      <div className="mt-5 grid lg:grid-cols-12 gap-x-10 gap-y-7">
        <Cap num="۰۷" icon={<IconGauge className="w-6 h-6" />} title="ارزیابی آمادگی سازمان" className="lg:col-span-5">
          <p>
            هر استراتژی خوبی الزاماً قابل اجرا نیست. APEXTRA آمادگی سازمان برای حرکت در مسیر
            استراتژیک موردنظر را بررسی می‌کند و شکاف‌های موجود را در حوزه‌هایی مانند موارد زیر
            شناسایی می‌کند:
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {ORG_GAPS.map((g) => (
              <Chip key={g}>{g}</Chip>
            ))}
          </div>
        </Cap>

        <Cap num="۰۸" icon={<IconChip className="w-6 h-6" />} title="آمادگی سازمان برای AI" className="lg:col-span-7">
          <p>
            APEXTRA به سازمان کمک می‌کند وضعیت فعلی خود را از منظر آمادگی برای هوش مصنوعی بررسی کند
            و شکاف‌های مهم را شناسایی نماید. ارزیابی آمادگی در شش حوزه:
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {AI_DOMAINS.map((d, i) => (
              <div
                key={d}
                className="border border-hair bg-card px-3 py-2.5 flex items-center gap-2 transition-all duration-300 hover:border-teal-400 hover:-translate-y-0.5"
              >
                <span className="font-latin text-[9.5px] text-teal-600 tracking-wider">{faNum(i + 1)}</span>
                <span className="text-[12px] font-semibold text-ink">{d}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 border border-hair border-s-4 border-s-teal-500 bg-card px-4 py-2.5">
            <span className="text-[12px] text-mist">نتیجه: </span>
            <span className="text-[12.5px] font-bold text-ink">
              یک تصویر روشن از مسیر <span dir="ltr" className="font-latin tracking-wide text-teal-700">AI Adoption</span> سازمان
            </span>
          </div>
        </Cap>

        <Cap num="۰۹" icon={<IconSpark className="w-6 h-6" />} title="شناسایی فرصت‌های هوش مصنوعی" className="lg:col-span-12">
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7">
              <p>
                APEXTRA به شناسایی و اولویت‌بندی فرصت‌های استفاده از هوش مصنوعی کمک می‌کند تا
                سرمایه‌گذاری‌های AI بر حوزه‌هایی متمرکز شوند که
                <span className="text-ink font-bold"> بیشترین ارزش بالقوه </span>
                را برای سازمان دارند.
              </p>
            </div>
            <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              <div className="border border-hair bg-card px-4 py-3">
                <div className="font-latin text-[9px] tracking-[0.25em] text-mist/70">سؤال اول</div>
                <p className="mt-1 text-mist text-[12.5px] leading-6">«کجا می‌توانیم از AI استفاده کنیم؟»</p>
              </div>
              <div className="relative border border-navy-700 bg-navy-900 px-4 py-3">
                <CornerTicks />
                <div className="font-latin text-[9px] tracking-[0.25em] text-teal-400">سؤال اصلی</div>
                <p className="mt-1 text-slate-100 font-display font-bold text-[13px] leading-6">
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
   PAGE 08 — DIGITAL MATURITY & INNOVATION (capabilities 10–11)
   ================================================================ */

function GaugePanel() {
  return (
    <div className="border border-hair bg-card p-4">
      <svg viewBox="0 0 220 132" className="w-full max-w-[240px] mx-auto" role="img" aria-label="سنجش بلوغ دیجیتال">
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
        <text x="110" y="92" textAnchor="middle" fontSize="20" fill="var(--color-teal-700)" fontFamily="Space Grotesk" fontWeight="700">
          62%
        </text>
        <text x="16" y="128" textAnchor="start" fontSize="9" fill="var(--color-mist)" fontFamily="Vazirmatn">
          وضعیت فعلی
        </text>
        <text x="204" y="128" textAnchor="end" fontSize="9" fill="var(--color-mist)" fontFamily="Vazirmatn">
          وضعیت مطلوب
        </text>
      </svg>
      <div className="mt-2.5 flex items-center justify-between text-[10px] text-mist border-t border-hair pt-2.5">
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
        <p className="mt-3 max-w-2xl text-[13px] leading-7 text-mist">
          تحول دیجیتال و نوآوری، هر دو از یک نقطه شروع می‌شوند: شناخت دقیق وضعیت موجود — و هر دو به
          یک چیز ختم می‌شوند: خلق ارزش اقتصادی پایدار.
        </p>
      </Reveal>

      <div className="mt-5 grid lg:grid-cols-12 gap-x-10 gap-y-7">
        <Cap num="۱۰" icon={<IconGauge className="w-6 h-6" />} title="ارزیابی بلوغ دیجیتال" className="lg:col-span-7">
          <p>
            تحول دیجیتال بدون شناخت نقطه شروع امکان‌پذیر نیست. APEXTRA با ارزیابی بلوغ دیجیتال
            سازمان، وضعیت فعلی و شکاف‌های موجود را مشخص می‌کند.
          </p>
          <div className="mt-3 grid sm:grid-cols-2 gap-4 items-center">
            <GaugePanel />
            <div>
              <div className="font-display font-bold text-ink text-[14px]">از وضعیت فعلی تا وضعیت مطلوب</div>
              <div className="mt-3">
                <Chain compact items={["ارزیابی", "شناسایی شکاف", "اولویت‌بندی", "طراحی مسیر تحول"]} />
              </div>
              <p className="mt-3 text-[12px] leading-6">
                این فرایند می‌تواند مبنایی برای تدوین
                <span className="text-ink font-bold"> نقشه راه تحول دیجیتال </span>
                سازمان باشد.
              </p>
            </div>
          </div>
        </Cap>

        <Cap num="۱۱" icon={<IconSpark className="w-6 h-6" />} title="استراتژی نوآوری" className="lg:col-span-5">
          <p>
            نوآوری تنها تولید ایده نیست؛ نوآوری زمانی ارزشمند است که بتواند به
            <span className="text-ink font-bold"> مزیت، رشد و ارزش اقتصادی </span>
            تبدیل شود. APEXTRA مسیر نوآوری را ساختاریافته می‌کند:
          </p>
          <div className="mt-3">
            {["نیازهای بازار", "فرصت‌ها", "ایده‌ها", "قابلیت‌ها", "ابتکارات نوآورانه"].map((s, i, arr) => (
              <div key={s}>
                <div className="flex items-center gap-3 border border-hair bg-card px-3.5 py-2 transition-colors hover:border-teal-400">
                  <span className="font-latin text-[10px] text-teal-600 tracking-wider w-5">{faNum(i + 1)}</span>
                  <span className="font-display font-bold text-ink text-[13px]">{s}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex justify-start ps-6 py-0.5">
                    <IconArrowLeft className="w-3 h-3 text-teal-500 -rotate-90" />
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
   PAGE 09 — EXECUTION & MONITORING (capabilities 12–13)
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
        <p className="mt-3 max-w-2xl text-[13px] leading-7 text-mist">
          فاصله میان «استراتژی تدوین‌شده» و «استراتژی اجراشده» یکی از مهم‌ترین چالش‌های سازمان‌هاست.
          APEXTRA این فاصله را با شفاف‌سازی ابتکارات و پایش مستمر پر می‌کند.
        </p>
      </Reveal>

      <div className="mt-5 grid lg:grid-cols-12 gap-x-10 gap-y-7">
        <Cap num="۱۲" icon={<IconFlag className="w-6 h-6" />} title="مدیریت ابتکارات استراتژیک" className="lg:col-span-6">
          <p>
            استراتژی باید به اقدام تبدیل شود. APEXTRA ارتباط میان اهداف استراتژیک و ابتکارات سازمان
            را شفاف می‌کند تا برای هر ابتکار مشخص باشد:
          </p>
          <div className="mt-2.5">
            {INITIATIVE_QUESTIONS.map((q, i) => (
              <div
                key={q}
                className="group flex items-center gap-3.5 border-b border-hair py-2.5 px-1 transition-all duration-300 hover:bg-card hover:px-3.5"
              >
                <span className="font-latin text-[11px] text-teal-600 tracking-wider w-5 shrink-0">{faNum(i + 1)}</span>
                <span className="font-display font-bold text-ink text-[14px]">{q}</span>
                <IconArrowLeft className="w-3.5 h-3.5 text-hair ms-auto transition-all duration-300 group-hover:text-teal-500 group-hover:-translate-x-1" />
              </div>
            ))}
          </div>
        </Cap>

        <Cap num="۱۳" icon={<IconPulse className="w-6 h-6" />} title="پایش اجرای استراتژی" className="lg:col-span-6">
          <p>
            APEXTRA امکان پایش مستمر مسیر اجرای استراتژی را فراهم می‌کند تا مدیران بتوانند:
          </p>
          <ul className="mt-2.5 space-y-1 text-[12.5px]">
            <Li>میزان پیشرفت ابتکارات را بررسی کنند</Li>
            <Li>انحرافات را شناسایی کنند</Li>
            <Li>اولویت‌ها را بازبینی کنند</Li>
            <Li>میزان هم‌راستایی اقدامات با اهداف را ارزیابی کنند</Li>
          </ul>
          <Reveal delay={200}>
            <div className="mt-4 border border-hair bg-card p-4">
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
              <div className="mt-2.5 flex items-center justify-between text-[10px] text-mist border-t border-hair pt-2.5">
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
