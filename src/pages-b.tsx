import { Cap, Chain, Chip, CornerTicks, Li, Sheet, Tag } from "./chrome";
import { Reveal } from "./lib";
import {
  IconAnalyze,
  IconBranch,
  IconModel,
  IconRadar,
  IconShield,
  IconSwot,
} from "./icons";

/* ================================================================
   PAGE 04 — STRATEGIC MANAGEMENT
   ================================================================ */

export function StrategyPage() {
  return (
    <Sheet id="strategy" num="۰۴" title="مدیریت استراتژیک">
      <Tag num="۰۴" en="STRATEGIC MANAGEMENT" title="مدیریت استراتژیک؛ از تحلیل تا مدلِ قابل اجرا" />
      <Reveal delay={120}>
        <p className="mt-5 max-w-2xl text-mist text-[15px] leading-9">
          سه قابلیت بنیادین APEXTRA برای این طراحی شده‌اند که استراتژی از «سند» به «سیستم» تبدیل
          شود — تحلیل هوشمند، ارزیابی ساختاریافته و مدل‌سازی مسیر حرکت.
        </p>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-12 gap-x-12 gap-y-12">
        <Cap num="۰۱" icon={<IconAnalyze className="w-7 h-7" />} title="تحلیل هوشمند کسب‌وکار" className="lg:col-span-7">
          <p>
            APEXTRA به سازمان کمک می‌کند داده‌ها و اطلاعات کسب‌وکار را از یک مجموعه اطلاعات پراکنده
            به <span className="text-ink font-bold">بینش قابل استفاده برای تصمیم‌گیری</span> تبدیل کند.
          </p>
          <div className="mt-5 border border-hair bg-card px-5 py-4">
            <p className="text-[13.5px] leading-7">
              تمرکز صرفاً بر نمایش داده نیست؛ هدف، شناسایی
              <span className="text-teal-700 font-semibold"> الگوها، عوامل مؤثر و موضوعاتی </span>
              است که برای تصمیمات مدیریتی اهمیت دارند.
            </p>
          </div>
        </Cap>

        <Cap num="۰۲" icon={<IconSwot className="w-7 h-7" />} title="تحلیل و ارزیابی استراتژیک" className="lg:col-span-5">
          <p>
            با APEXTRA می‌توان وضعیت فعلی سازمان و عوامل اثرگذار بر مسیر آینده آن را بررسی کرد. این
            تحلیل می‌تواند مبنایی برای موارد زیر باشد:
          </p>
          <ul className="mt-4 space-y-2 text-[13.5px]">
            <Li>شناسایی مسائل استراتژیک</Li>
            <Li>تشخیص فرصت‌ها و شناسایی تهدیدها</Li>
            <Li>بررسی نقاط قوت و ضعف</Li>
            <Li>تعیین اولویت‌های استراتژیک</Li>
            <Li>تعریف مسیرهای بهبود</Li>
          </ul>
        </Cap>

        <Cap num="۰۵" icon={<IconModel className="w-7 h-7" />} title="تدوین و مدل‌سازی استراتژی" className="lg:col-span-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <p>
                استراتژی زمانی ارزشمند است که از یک سند ثابت به یک
                <span className="text-ink font-bold"> مدل قابل مدیریت و اجرا </span>
                تبدیل شود. APEXTRA امکان ارتباط و مدل‌سازی میان عناصر مختلف استراتژی را فراهم می‌کند.
              </p>
              <p className="mt-3 text-[13px] leading-7 text-mist/90">
                این ارتباط به مدیران کمک می‌کند تصویر واضح‌تری از مسیر حرکت سازمان داشته باشند.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Chain items={["چشم‌انداز", "اهداف", "ابتکارات", "اقدامات", "شاخص‌ها", "نتایج"]} />
            </div>
          </div>
        </Cap>
      </div>
    </Sheet>
  );
}

/* ================================================================
   PAGE 05 — COMPETITIVE STRATEGY
   ================================================================ */

function RadarPanel() {
  return (
    <div className="relative border border-navy-700 bg-navy-900 p-6">
      <CornerTicks />
      <svg viewBox="0 0 200 200" className="w-full max-w-[300px] mx-auto" role="img" aria-label="رادار رصد محیط کسب‌وکار">
        <circle cx="100" cy="100" r="88" stroke="rgba(63,201,207,0.35)" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="rgba(63,201,207,0.22)" strokeWidth="1" fill="none" />
        <circle cx="100" cy="100" r="32" stroke="rgba(63,201,207,0.22)" strokeWidth="1" fill="none" />
        <path d="M100 12v176M12 100h176" stroke="rgba(96,140,200,0.18)" strokeWidth="1" />
        <g className="radar-sweep">
          <path d="M100 100 L100 12 A88 88 0 0 1 144 23.6 Z" fill="rgba(63,201,207,0.13)" />
          <path d="M100 100 L100 12" stroke="var(--color-teal-400)" strokeWidth="1.8" />
        </g>
        <circle cx="64" cy="70" r="3" fill="var(--color-teal-400)" />
        <circle cx="138" cy="128" r="3" fill="var(--color-teal-400)" opacity="0.8" />
        <circle cx="118" cy="52" r="2.4" fill="#8ce3e6" opacity="0.65" />
        <circle cx="100" cy="100" r="2.6" fill="#e7eefb" />
      </svg>
      <div className="mt-4 flex items-center justify-between text-[10.5px] text-slate-500">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 pulse-dot text-teal-400" />
          رصد زنده سیگنال‌های محیطی
        </span>
        <span className="font-latin tracking-[0.22em]">FIG. 03</span>
      </div>
    </div>
  );
}

export function CompetitivePage() {
  return (
    <Sheet id="competitive" num="۰۵" title="رقابت و رصد محیط">
      <Tag num="۰۵" en="COMPETITIVE STRATEGY" title="استراتژی رقابتی و رصد محیط کسب‌وکار" />

      <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <Cap num="۰۳" icon={<IconRadar className="w-7 h-7" />} title="رصد محیط کسب‌وکار">
            <p>
              محیط کسب‌وکار دائماً در حال تغییر است. APEXTRA امکان پایش و تحلیل عوامل بیرونی مؤثر بر
              سازمان را فراهم می‌کند تا تغییرات مهم زودتر شناسایی شوند:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["بازار", "رقبا", "فناوری", "مقررات", "روندهای صنعت"].map((c) => (
                <Chip key={c} dot>{c}</Chip>
              ))}
            </div>
            <p className="mt-4 text-[13.5px]">
              هدف، <span className="text-ink font-bold">واکنش سریع‌تر و تصمیم‌گیری آگاهانه‌تر</span> در
              برابر تغییرات محیطی است.
            </p>
          </Cap>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <Reveal delay={160} y={30}>
            <RadarPanel />
          </Reveal>
        </div>
      </div>

      <div className="mt-12">
        <Cap num="۰۴" icon={<IconShield className="w-7 h-7" />} title="استراتژی رقابتی">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <p>
                شناخت جایگاه سازمان در بازار و درک رفتار رقبا، بخش مهمی از تصمیم‌گیری استراتژیک است.
                APEXTRA به سازمان کمک می‌کند:
              </p>
              <ul className="mt-4 space-y-2 text-[13.5px]">
                <Li>موقعیت رقابتی خود را ارزیابی کند</Li>
                <Li>عوامل مؤثر بر رقابت را شناسایی کند</Li>
                <Li>فرصت‌های ایجاد مزیت رقابتی را بررسی کند</Li>
                <Li>نقاط تمایز خود را مشخص کند</Li>
                <Li>مسیرهای مختلف رقابتی را ارزیابی کند</Li>
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="relative h-full border border-navy-700 bg-navy-900 p-6 md:p-7 flex flex-col justify-center">
                <CornerTicks />
                <IconShield className="w-8 h-8 text-teal-400" />
                <div className="mt-4 font-latin text-[10px] tracking-[0.28em] text-slate-500">THE GOAL</div>
                <p className="mt-2 font-display font-extrabold text-slate-100 text-lg md:text-xl leading-9">
                  ساختن مزیتی که
                  <span className="text-teal-300"> قابل دفاع </span>
                  و
                  <span className="text-teal-300"> قابل توسعه </span>
                  باشد.
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
   PAGE 06 — SCENARIO PLANNING
   ================================================================ */

const IFS = [
  { code: "S-01", text: "افزایش رقابت" },
  { code: "S-02", text: "تغییر بازار" },
  { code: "S-03", text: "تغییر قوانین" },
  { code: "S-04", text: "ورود فناوری جدید" },
  { code: "S-05", text: "تغییر هزینه‌ها" },
  { code: "S-06", text: "تغییر رفتار مشتریان" },
];

function BranchDiagram() {
  return (
    <svg viewBox="0 0 360 240" className="w-full" role="img" aria-label="دیاگرام انشعاب سناریوها">
      <g>
        <rect x="248" y="98" width="104" height="44" fill="var(--color-navy-900)" stroke="var(--color-navy-600)" />
        <text x="300" y="125" textAnchor="middle" fontSize="13" fill="#e7eefb" fontFamily="Estedad" fontWeight="700">
          تصمیم امروز
        </text>
      </g>
      {[
        { y: 36, d: "M248 112 C 200 112, 170 36, 118 36" },
        { y: 120, d: "M248 120 C 200 120, 170 120, 118 120" },
        { y: 204, d: "M248 128 C 200 128, 170 204, 118 204" },
      ].map((b, i) => (
        <path
          key={i}
          d={b.d}
          stroke="var(--color-teal-500)"
          strokeWidth="1.6"
          fill="none"
          className="draw-path"
          style={{ ["--len" as string]: "240" }}
          strokeDasharray="240"
        />
      ))}
      {[
        { y: 36, n: "سناریو ۱" },
        { y: 120, n: "سناریو ۲" },
        { y: 204, n: "سناریو ۳" },
      ].map((s, i) => (
        <g key={s.n}>
          <circle cx="86" cy={s.y} r="27" fill="var(--color-card)" stroke="var(--color-hair)" strokeWidth="1.5" />
          <text x="86" y={s.y - 3} textAnchor="middle" fontSize="8.5" fill="var(--color-teal-600)" fontFamily="Space Grotesk" fontWeight="600">
            SC{i + 1}
          </text>
          <text x="86" y={s.y + 12} textAnchor="middle" fontSize="11" fill="var(--color-ink)" fontFamily="Estedad" fontWeight="700">
            {s.n}
          </text>
          <path d={`M59 ${s.y} H 16`} stroke="var(--color-hair)" strokeWidth="1.5" strokeDasharray="3 6" />
          <text x="14" y={s.y - 8} textAnchor="start" fontSize="9" fill="var(--color-mist)" fontFamily="Vazirmatn">
            پیامدها
          </text>
        </g>
      ))}
    </svg>
  );
}

export function ScenarioPage() {
  return (
    <Sheet id="scenario" num="۰۶" title="سناریوپردازی">
      <Tag num="۰۶" en="SCENARIO PLANNING" title="سناریوپردازی و شبیه‌سازی" />

      <div className="mt-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <p className="text-mist text-[15px] leading-9">
              آینده قطعی نیست؛ به همین دلیل تصمیمات استراتژیک باید در برابر شرایط مختلف مورد بررسی
              قرار گیرند. APEXTRA امکان بررسی سناریوهای مختلف و ارزیابی پیامدهای احتمالی تصمیمات را
              فراهم می‌کند.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <h4 className="mt-8 font-display font-black text-ink text-[26px] md:text-[32px] leading-[1.5]">
              چه اتفاقی می‌افتد
              <span className="text-teal-600"> اگر...؟</span>
            </h4>
          </Reveal>
          <Reveal delay={280} y={30}>
            <div className="mt-6 border border-hair bg-paper p-4">
              <BranchDiagram />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={160}>
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-display font-bold text-ink text-lg">شرایطی که باید قبل از وقوع، آزموده شوند</h4>
              <span className="font-latin text-[10px] tracking-[0.28em] text-mist/70">WHAT-IF MATRIX</span>
            </div>
          </Reveal>
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            {IFS.map((s, i) => (
              <Reveal key={s.code} delay={i * 70}>
                <div className="group flex items-center justify-between gap-4 border border-hair bg-card px-5 py-5 transition-all duration-300 hover:border-teal-400 hover:-translate-y-1 hover:shadow-[0_18px_36px_-18px_rgba(14,148,155,0.45)]">
                  <div className="flex items-center gap-4">
                    <span className="font-latin text-[11px] tracking-[0.18em] text-teal-600">{s.code}</span>
                    <span className="font-display font-bold text-ink text-[15.5px]">{s.text}</span>
                  </div>
                  <IconBranch className="w-5 h-5 text-hair transition-colors duration-300 group-hover:text-teal-500" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={260}>
            <div className="mt-8 relative border border-navy-700 bg-navy-900 px-6 md:px-8 py-6">
              <CornerTicks />
              <p className="font-display font-extrabold text-slate-100 text-[16px] md:text-[19px] leading-9">
                سناریوهای مختلف را بررسی کنید؛
                <span className="text-teal-300"> قبل از اینکه مجبور شوید با آنها مواجه شوید.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Sheet>
  );
}
