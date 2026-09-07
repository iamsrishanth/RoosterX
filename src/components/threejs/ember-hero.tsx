"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const EmberScene = dynamic(() => import("./ember-scene"), {
  ssr: false,
});

function hasWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function EmberHero() {
  const [reduce, setReduce] = React.useState(false);
  const [webgl, setWebgl] = React.useState<boolean | null>(null);
  const [inView, setInView] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // detect WebGL + device type on mount
  React.useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    setIsDesktop(desktop);
    if (!desktop) {
      setWebgl(false);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;
    const activate = () => {
      window.removeEventListener("scroll", activate);
      window.removeEventListener("pointermove", activate);
      window.removeEventListener("touchstart", activate);
      clearTimeout(timeoutId);
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => {
          setWebgl(hasWebGL());
        });
      } else {
        setWebgl(hasWebGL());
      }
    };

    window.addEventListener("scroll", activate, { passive: true, once: true });
    window.addEventListener("pointermove", activate, { passive: true, once: true });
    window.addEventListener("touchstart", activate, { passive: true, once: true });
    timeoutId = setTimeout(activate, 2500);

    return () => {
      window.removeEventListener("scroll", activate);
      window.removeEventListener("pointermove", activate);
      window.removeEventListener("touchstart", activate);
      clearTimeout(timeoutId);
    };
  }, []);

  // pause when offscreen
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const show3D = isDesktop && webgl && !reduce;
  const particleCount = 1000;

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* base ember gradient fallback always rendered behind */}
      <div className="absolute inset-0 ember-gradient" />

      {show3D && inView && (
        <div className="absolute inset-0">
          <EmberScene parallax={isDesktop} particleCount={particleCount} />
        </div>
      )}

      {/* flame-lit shawarma photo, positioned right */}
      <div className="absolute inset-0">
        <Image
          src="/food/hero-shawarma.jpg"
          alt=""
          fill
          priority
          quality={65}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover object-center opacity-55 mix-blend-screen"
        />
        {/* food-edge ember glow only */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 72% 48%, rgba(220,38,38,0.28), transparent 60%)",
          }}
        />
        {/* left-side fade so copy stays legible */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #17100B 8%, rgba(23,16,11,0.85) 38%, rgba(23,16,11,0.15) 70%, transparent 100%)",
          }}
        />
        {/* bottom fade into smoke */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, transparent, #17100B 92%)",
          }}
        />
      </div>
    </div>
  );
}
