"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type QA = { q: string; a: string };

export function FaqAccordion({
  items,
  className,
}: {
  items: readonly QA[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-cream/10", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-1">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-2 focus-visible:ring-offset-smoke rounded-[8px] px-1"
            >
              <span
                className={cn(
                  "font-sans font-bold text-base sm:text-lg transition-colors",
                  isOpen ? "text-flame" : "text-cream",
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "rotate-180 border-flame bg-flame text-white"
                    : "border-cream/20 text-cream",
                )}
              >
                <CaretDown size={16} weight="bold" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={reduce ? undefined : { height: 0, opacity: 0 }}
                  animate={reduce ? undefined : { height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-12 text-muted-text leading-[1.7] text-sm sm:text-base">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
