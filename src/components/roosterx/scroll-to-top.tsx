"use client";

import * as React from "react";
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    let clean = false;
    const register = () => {
      if (clean) return;
      const onScroll = () => setVisible(window.scrollY > 600);
      window.addEventListener("scroll", onScroll, { passive: true });
    };
    if ("requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(register);
      return () => {
        clean = true;
        (window as any).cancelIdleCallback(id);
      };
    }
    const timer = setTimeout(register, 1000);
    return () => {
      clean = true;
      clearTimeout(timer);
    };
  }, []);

  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-flame text-white shadow-[0_8px_24px_rgba(23,16,11,0.55)] transition-all duration-250 hover:bg-flame-deep hover:-translate-y-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-2 focus-visible:ring-offset-smoke",
        visible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-75 pointer-events-none",
      )}
    >
      <ArrowUp size={20} weight="bold" />
    </button>
  );
}
