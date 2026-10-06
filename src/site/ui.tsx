import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { LOGO } from "./data";

export function usePageReveal(dep: string) {
  useEffect(() => {
    const root = document.getElementById("main");
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nodes.forEach((node) => node.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, [dep]);
}

export function Logo({ className }: { className?: string }) {
  const [ok, setOk] = useState(true);
  return (
    <a href="#/" className={cn("flex min-w-0 items-center gap-3", className)} aria-label="The Academy Project home">
      {ok ? (
        <img
          src={LOGO}
          alt=""
          width={44}
          height={48}
          className="h-12 w-11 shrink-0 object-contain"
          onError={() => setOk(false)}
        />
      ) : (
        <span className="grid h-12 w-11 shrink-0 place-items-center bg-tap text-[11px] font-bold tracking-wide text-white" aria-hidden="true">
          TAP
        </span>
      )}
      <span className="min-w-0 leading-none">
        <span className="block font-display text-[15px] font-semibold tracking-tight text-ink sm:text-[16px]">
          The Academy Project
        </span>
        <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-tap">Los Angeles</span>
      </span>
    </a>
  );
}

type Btn = "red" | "dark" | "ghost" | "light" | "line";

export function buttonClass(variant: Btn = "red", className?: string) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 px-5 text-center text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200";
  const styles: Record<Btn, string> = {
    red: "bg-tap text-white hover:bg-tap-dark",
    dark: "bg-ink text-ivory hover:bg-[#121922]",
    ghost: "border border-ink/15 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-ivory",
    light: "bg-ivory text-ink hover:bg-white",
    line: "border border-white/40 text-white hover:bg-white hover:text-ink",
  };
  return cn(base, styles[variant], className);
}

export function A({
  to,
  className,
  children,
  variant,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  variant?: Btn;
}) {
  const external = to.startsWith("http");
  const href = external ? to : `#/${to.replace(/^#?\//, "")}`;
  return (
    <a
      href={href}
      className={variant ? buttonClass(variant, className) : className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl", className)}>{children}</div>;
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>;
}

export function Photo({
  src,
  alt,
  className,
  eager,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn("bg-sand object-cover", className)}
    />
  );
}

export function PageHero({
  kicker,
  title,
  lede,
  image,
  imageAlt,
  actions,
}: {
  kicker: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  actions?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper">
      <Container className="grid items-end gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <Kicker>{kicker}</Kicker>
          <h1 className="display mt-4 text-[2.6rem] text-ink sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{lede}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        <div className="photo-zoom lg:col-span-6">
          <Photo src={image} alt={imageAlt} className="aspect-[4/3] w-full" />
        </div>
      </Container>
    </section>
  );
}

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(to);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 900);
          setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Icon({ name }: { name: string }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "book":
      return (
        <svg {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case "art":
      return (
        <svg {...props}>
          <path d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0-5H12a2 2 0 0 1 0-4h.5A2.5 2.5 0 0 0 15 9.5 6.5 6.5 0 0 0 12 3z" />
          <circle cx="7.5" cy="10" r="0.8" fill="currentColor" />
          <circle cx="9" cy="7" r="0.8" fill="currentColor" />
          <circle cx="12.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
      );
    case "music":
      return (
        <svg {...props}>
          <path d="M9 18V6l12-2v12" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case "people":
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="3" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a3 3 0 0 1 0 5.75" />
        </svg>
      );
    case "sun":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10z" />
        </svg>
      );
  }
}
