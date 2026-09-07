"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { MARQUEE_ITEMS } from "@/data/site";

export function Marquee() {
  const reduce = useReducedMotion();
  const items = MARQUEE_ITEMS;
  // duplicate for a seamless loop
  const row = [...items, ...items];

  if (reduce) {
    return (
      <div className="w-full border-y border-cream/10 bg-ember py-3 overflow-hidden">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-6 gap-y-1 px-5">
          {items.map((t) => (
            <span key={t} className="font-display text-gold text-lg tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="marquee-pause w-full border-y border-cream/10 bg-ember py-3 overflow-hidden"
      aria-label="RoosterX highlights"
    >
      <div className="flex w-max animate-marquee will-change-transform">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center font-display text-gold text-lg tracking-wide whitespace-nowrap"
          >
            <span className="px-6">{t}</span>
            <span className="text-flame/60" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
