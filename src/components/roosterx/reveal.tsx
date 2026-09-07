"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Shared IntersectionObserver for all reveal animations to minimize main-thread overhead
let observer: IntersectionObserver | null = null;
const callbacks = new Map<Element, () => void>();

function getObserver() {
  if (typeof window === "undefined") return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = callbacks.get(entry.target);
            if (cb) {
              cb();
              callbacks.delete(entry.target);
              observer?.unobserve(entry.target);
            }
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
  y = 20,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "span" | "article";
}) {
  const ref = React.useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();
    if (!obs) {
      setIsVisible(true);
      return;
    }
    callbacks.set(el, () => setIsVisible(true));
    obs.observe(el);
    return () => {
      callbacks.delete(el);
      obs.unobserve(el);
    };
  }, []);

  const Comp = as as any;

  return (
    <Comp
      ref={ref}
      className={cn(className, "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]")}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : `translateY(${y}px)`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </Comp>
  );
}

const StaggerContext = React.createContext<{ isVisible: boolean }>({
  isVisible: false,
});

export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();
    if (!obs) {
      setIsVisible(true);
      return;
    }
    callbacks.set(el, () => setIsVisible(true));
    obs.observe(el);
    return () => {
      callbacks.delete(el);
      obs.unobserve(el);
    };
  }, []);

  return (
    <StaggerContext.Provider value={{ isVisible }}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </StaggerContext.Provider>
  );
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const { isVisible } = React.useContext(StaggerContext);
  return (
    <div
      className={cn(className, "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]")}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : `translateY(${y}px)`,
      }}
    >
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
