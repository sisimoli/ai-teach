import { AppBackground, IndexRail, PAGES, TopBar } from "./chrome";
import { useActiveSection, useScrollProgress } from "./lib";
import { CoverPage, PlatformPage, WhyPage } from "./pages-a";
import { CompetitivePage, ScenarioPage, StrategyPage } from "./pages-b";
import { AiReadinessPage, DialoguePage, ExecutionPage, MaturityPage } from "./pages-c";
import {
  AudienceValuePage,
  FinalPage,
  ForwardPage,
  OverviewPage,
  ShiftPage,
} from "./pages-d";

const IDS = PAGES.map((p) => p.id);

export default function App() {
  const active = useActiveSection(IDS);
  const progress = useScrollProgress();

  return (
    <div className="min-h-screen pt-[70px] pb-8">
      <AppBackground />
      <TopBar active={active} progress={progress} />
      <IndexRail active={active} />

      <main>
        <CoverPage />
        <WhyPage />
        <PlatformPage />
        <StrategyPage />
        <CompetitivePage />
        <ScenarioPage />
        <AiReadinessPage />
        <MaturityPage />
        <ExecutionPage />
        <DialoguePage />
        <AudienceValuePage />
        <ShiftPage />
        <OverviewPage />
        <ForwardPage />
        <FinalPage />
      </main>

      <p className="mt-6 text-center text-[11px] text-slate-600">
        <span className="font-latin tracking-[0.25em]">APEXTRA</span>
        <span className="mx-3 text-slate-700">|</span>
        بروشور رسمی سازمانی — ۱۵ صفحه
        <span className="mx-3 text-slate-700">|</span>
        <a
          href="https://apextra.ir"
          target="_blank"
          rel="noreferrer"
          className="text-teal-500 hover:text-teal-400 transition-colors"
        >
          apextra.ir
        </a>
      </p>
    </div>
  );
}
