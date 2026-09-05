import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/* ---------- Persian digits ---------- */
const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
export const faNum = (v: number | string): string =>
  String(v).replace(/\d/g, (d) => FA_DIGITS[Number(d)]);

/* ---------- prefers reduced motion ---------- */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* ---------- in-view observer ---------- */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/* ---------- Reveal wrapper ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const style = { "--rvd": `${delay}ms`, "--rvy": `${y}px` } as CSSProperties;
  return (
    <div ref={ref} style={style} className={`rv ${inView ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}

/* ---------- scramble / decode text ---------- */
export function useScramble(text: string, play = true, speed = 26): string {
  const reduced = usePrefersReducedMotion();
  const [out, setOut] = useState(() => (reduced ? text : text.replace(/[^ ]/g, "·")));
  useEffect(() => {
    if (!play) return;
    if (reduced) {
      setOut(text);
      return;
    }
    const glyphs = "APEXTR#/\\<>*+=ΔΣ";
    let frame = 0;
    const totalFrames = 34;
    const id = window.setInterval(() => {
      frame += 1;
      const locked = Math.floor((frame / totalFrames) * text.length * 1.35);
      if (locked >= text.length) {
        setOut(text);
        window.clearInterval(id);
        return;
      }
      let s = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " ") s += " ";
        else s += i < locked ? ch : glyphs[Math.floor(Math.random() * glyphs.length)];
      }
      setOut(s);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, play, reduced, speed]);
  return out;
}

/* ---------- active section tracking ---------- */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");
  const key = ids.join(",");
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        }
      },
      { rootMargin: "-40% 0px -54% 0px", threshold: 0 },
    );
    key.split(",").forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [key]);
  return active;
}

/* ---------- scroll progress 0..1 ---------- */
export function useScrollProgress(): number {
  const [p, setP] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return p;
}
