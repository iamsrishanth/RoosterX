"use client";

import * as React from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/* Counts up to `value` when scrolled into view. Renders the fallback string
   immediately (progressive enhancement) and only animates after mount + motion allowed. */
export function CountUp({
  value,
  duration = 1.4,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });

  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    if (!mounted || reduce || !inView) {
      setDisplay(value.toFixed(decimals));
      return;
    }
    mv.set(value);
    const unsub = spring.on("change", (v) => {
      setDisplay(v.toFixed(decimals));
    });
    return () => unsub();
  }, [mounted, reduce, inView, value, mv, spring, decimals]);

  const shown = mounted && !reduce && inView ? display : value.toFixed(decimals);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
