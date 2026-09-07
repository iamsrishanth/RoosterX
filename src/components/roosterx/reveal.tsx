"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Shared IntersectionObserver for desktop reveal animations - zero React state overhead
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (typeof window === "undefined") return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer?.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
  }
  return observer;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "span" | "article";
}) {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.classList.add("is-revealed");
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();
    if (!obs) {
      el.classList.add("is-revealed");
      return;
    }
    obs.observe(el);
    return () => {
      obs.unobserve(el);
    };
  }, []);

  const Comp = as as any;

  return (
    <Comp
      ref={ref}
      data-reveal="true"
      className={cn("reveal-element", className)}
      style={delay > 0 ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Comp>
  );
}

export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.classList.add("is-revealed");
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();
    if (!obs) {
      el.classList.add("is-revealed");
      return;
    }
    obs.observe(el);
    return () => {
      obs.unobserve(el);
    };
  }, []);

  return (
    <div ref={ref} data-reveal="true" className={cn("reveal-element", className)}>
      {children}
    </div>
  );
}

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-display text-[#FF5722] uppercase tracking-[0.18em] text-[1.05rem] leading-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
