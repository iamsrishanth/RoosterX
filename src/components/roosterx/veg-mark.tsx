import * as React from "react";
import { cn } from "@/lib/utils";

/* FSSAI standard veg / non-veg indicator. Green square + green dot for veg,
   brown triangle + red-brown dot for non-veg. Functional only, never decorative. */
export function VegMark({
  veg,
  className,
  label = true,
}: {
  veg: boolean;
  className?: string;
  label?: boolean;
}) {
  if (veg) {
    return (
      <span role="img" className={cn("inline-flex items-center gap-2", className)} aria-label="Vegetarian">
        <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0" aria-hidden="true">
          <rect
            x="0.75"
            y="0.75"
            width="12.5"
            height="12.5"
            rx="1.5"
            fill="none"
            stroke="#2E7D32"
            strokeWidth="1.5"
          />
          <circle cx="7" cy="7" r="3" fill="#2E7D32" />
        </svg>
        {label && <span className="text-xs font-semibold text-veg">Veg</span>}
      </span>
    );
  }
  return (
    <span role="img" className={cn("inline-flex items-center gap-2", className)} aria-label="Non-vegetarian">
      <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0" aria-hidden="true">
        <polygon
          points="7,1 13.2,12.5 0.8,12.5"
          fill="none"
          stroke="#7a2e12"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="9" r="2.4" fill="#7a2e12" />
      </svg>
      {label && <span className="text-xs font-semibold text-[#c98a5e]">Non-veg</span>}
    </span>
  );
}

/* Gold price with optional dotted leader to the right (for menu rows) */
export function PriceTag({
  price,
  className,
  leader = false,
}: {
  price: number;
  className?: string;
  leader?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-sans font-extrabold tabular-nums text-gold",
        className,
        leader && "leader-gold",
      )}
    >
      Rs {price}
    </span>
  );
}
