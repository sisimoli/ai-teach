import type { ReactNode } from "react";

type IconProps = { className?: string; sw?: number };

function I({ className = "w-6 h-6", sw = 1.5, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ---------- flow: data / insight / decision / action ---------- */

export const IconData = (p: IconProps) => (
  <I {...p}>
    <ellipse cx="12" cy="5.6" rx="7" ry="2.7" />
    <path d="M5 5.6v12.8c0 1.5 3.13 2.7 7 2.7s7-1.2 7-2.7V5.6" />
    <path d="M5 12c0 1.5 3.13 2.7 7 2.7s7-1.2 7-2.7" />
  </I>
);

export const IconEye = (p: IconProps) => (
  <I {...p}>
    <path d="M2.6 12S6.2 5.9 12 5.9 21.4 12 21.4 12 17.8 18.1 12 18.1 2.6 12 2.6 12Z" />
    <circle cx="12" cy="12" r="2.7" />
  </I>
);

export const IconDecision = (p: IconProps) => (
  <I {...p}>
    <circle cx="5.5" cy="6" r="2.1" />
    <circle cx="5.5" cy="18" r="2.1" />
    <circle cx="18.5" cy="12" r="2.4" />
    <path d="M7.5 6.9l8.7 3.9M7.5 17.1l8.7-3.9" />
  </I>
);

export const IconAction = (p: IconProps) => (
  <I {...p}>
    <path d="M5.5 21V3.8" />
    <path d="M5.5 4.5h11.2l-2.6 3.6 2.6 3.6H5.5" />
  </I>
);

/* ---------- domains ---------- */

export const IconRadar = (p: IconProps) => (
  <I {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <circle cx="12" cy="12" r="4.6" />
    <path d="M12 12l6-6" />
    <circle cx="15.4" cy="14.6" r="0.5" fill="currentColor" stroke="none" />
  </I>
);

export const IconCompass = (p: IconProps) => (
  <I {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1Z" />
  </I>
);

export const IconAnalyze = (p: IconProps) => (
  <I {...p}>
    <circle cx="10.2" cy="10.2" r="6.2" />
    <path d="M14.8 14.8L20.2 20.2" />
    <path d="M7.6 12.4V10M10.2 12.4V7.6M12.8 12.4V9.2" />
  </I>
);

export const IconSwot = (p: IconProps) => (
  <I {...p}>
    <rect x="4" y="4" width="16" height="16" rx="0.5" />
    <path d="M12 4v16M4 12h16" />
    <circle cx="8" cy="8" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="16" cy="16" r="0.6" fill="currentColor" stroke="none" />
  </I>
);

export const IconModel = (p: IconProps) => (
  <I {...p}>
    <path d="M12 3.6l8 4-8 4-8-4 8-4Z" />
    <path d="M4 12.2l8 4 8-4" />
    <path d="M4 16.6l8 4 8-4" />
  </I>
);

export const IconBranch = (p: IconProps) => (
  <I {...p}>
    <path d="M12 21v-6" />
    <path d="M12 15c0-3.4-6-3.2-6-7.4V5" />
    <path d="M12 15c0-3.4 6-3.2 6-7.4V5" />
    <path d="M12 15V5" />
    <path d="M10.4 6.6L12 5l1.6 1.6" />
  </I>
);

export const IconFlag = (p: IconProps) => (
  <I {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <circle cx="12" cy="12" r="4.4" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
  </I>
);

export const IconPulse = (p: IconProps) => (
  <I {...p}>
    <path d="M3 12.5h3.6l2.4-5.2 3.2 9.8 2.4-4.6H21" />
  </I>
);

export const IconChip = (p: IconProps) => (
  <I {...p}>
    <rect x="7" y="7" width="10" height="10" rx="1" />
    <rect x="10.2" y="10.2" width="3.6" height="3.6" />
    <path d="M9.2 7V4.2M12 7V4.2M14.8 7V4.2M9.2 19.8V17M12 19.8V17M14.8 19.8V17M7 9.2H4.2M7 12H4.2M7 14.8H4.2M19.8 9.2H17M19.8 12H17M19.8 14.8H17" />
  </I>
);

export const IconGauge = (p: IconProps) => (
  <I {...p}>
    <path d="M4.4 16.2a8.6 8.6 0 1 1 15.2 0" />
    <path d="M12 15.6l3.8-5.8" />
    <circle cx="12" cy="15.6" r="1.1" />
  </I>
);

export const IconSpark = (p: IconProps) => (
  <I {...p}>
    <path d="M12 3.4l1.7 4.9 4.9 1.7-4.9 1.7-1.7 4.9-1.7-4.9-4.9-1.7 4.9-1.7 1.7-4.9Z" />
    <path d="M18.6 15.8l.6 1.8 1.8.6-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.6.6-1.8Z" />
  </I>
);

export const IconChat = (p: IconProps) => (
  <I {...p}>
    <path d="M4 5.4h16v11.2h-9.6L6 20.2v-3.6H4z" />
    <path d="M8 9.4h8M8 12.4h5" />
  </I>
);

export const IconShield = (p: IconProps) => (
  <I {...p}>
    <path d="M12 3.4l7 2.5v5.4c0 4.6-3 7.7-7 9.3-4-1.6-7-4.7-7-9.3V5.9l7-2.5Z" />
    <path d="M9 12.2l2.1 2.1 4-4.2" />
  </I>
);

export const IconCycle = (p: IconProps) => (
  <I {...p}>
    <path d="M19.6 12a7.6 7.6 0 1 1-2.2-5.4" />
    <path d="M19.9 3.6v3.9H16" />
  </I>
);

export const IconRoute = (p: IconProps) => (
  <I {...p}>
    <circle cx="5.5" cy="18.5" r="2" />
    <circle cx="18.5" cy="5.5" r="2" />
    <path d="M7.5 18.5h7a3.5 3.5 0 0 0 0-7h-6a3.5 3.5 0 0 1 0-7h8" />
  </I>
);

export const IconBriefcase = (p: IconProps) => (
  <I {...p}>
    <rect x="3.6" y="7.4" width="16.8" height="12.2" rx="1" />
    <path d="M9 7.4V5.6A1.6 1.6 0 0 1 10.6 4h2.8A1.6 1.6 0 0 1 15 5.6v1.8" />
    <path d="M3.6 12.4h16.8" />
    <path d="M10.6 12.4v2h2.8v-2" />
  </I>
);

export const IconPen = (p: IconProps) => (
  <I {...p}>
    <path d="M4 20l1.1-4.1L16.6 4.4a2.05 2.05 0 0 1 3 3L8.1 18.9 4 20Z" />
    <path d="M14.6 6.4l3 3" />
  </I>
);

export const IconTransform = (p: IconProps) => (
  <I {...p}>
    <rect x="3.8" y="3.8" width="6.8" height="6.8" />
    <rect x="13.4" y="13.4" width="6.8" height="6.8" />
    <path d="M13.4 7.2h4.2M15.5 5.1l2.1 2.1-2.1 2.1" />
    <path d="M10.6 16.8H6.4M8.5 18.9l-2.1-2.1 2.1-2.1" />
  </I>
);

export const IconCheck = (p: IconProps) => (
  <I {...p}>
    <path d="M5 12.6l4.4 4.4L19 7.4" />
  </I>
);

export const IconArrowLeft = (p: IconProps) => (
  <I {...p}>
    <path d="M20 12H4.6" />
    <path d="M9.4 6.8L4.2 12l5.2 5.2" />
  </I>
);

export const IconArrowLoop = (p: IconProps) => (
  <I {...p}>
    <path d="M4.5 12a7.5 7.5 0 1 1 2.2 5.3" />
    <path d="M4.2 20.4v-3.9h3.9" />
  </I>
);

export const IconDoc = (p: IconProps) => (
  <I {...p}>
    <path d="M6 3.6h8.4L19 8.2v12.2H6z" />
    <path d="M14.4 3.6v4.6H19" />
    <path d="M9 12.4h6M9 15.4h6M9 9.4h2.5" />
  </I>
);

export const IconDownload = (p: IconProps) => (
  <I {...p}>
    <path d="M12 3v11" />
    <path d="M7.5 10.5L12 15l4.5-4.5" />
    <path d="M4 17.5V20h16v-2.5" />
  </I>
);

export const IconFilePdf = (p: IconProps) => (
  <I {...p}>
    <path d="M6.5 2.5h7.5l4.5 4.5V21.5h-12z" />
    <path d="M14 2.5V7h4.5" />
    <path d="M9 12.5h6M9 15.5h6M9 18.5h4" />
  </I>
);

export const IconX = (p: IconProps) => (
  <I {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </I>
);

export const IconOwlMark = (p: IconProps) => (
  <I {...p} sw={p.sw ?? 1.4}>
    <path d="M12 3.2c-5.2 0-8.2 3.8-8.2 9 0 5 2.9 8.6 8.2 8.6s8.2-3.6 8.2-8.6c0-5.2-3-9-8.2-9Z" />
    <circle cx="8.7" cy="11" r="2.5" />
    <circle cx="15.3" cy="11" r="2.5" />
    <circle cx="8.7" cy="11" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="15.3" cy="11" r="0.7" fill="currentColor" stroke="none" />
    <path d="M12 13.6l-1.3 2h2.6l-1.3-2Z" />
    <path d="M5.2 5.2L6.8 2.6l2 2M18.8 5.2l-1.6-2.6-2 2" />
  </I>
);
