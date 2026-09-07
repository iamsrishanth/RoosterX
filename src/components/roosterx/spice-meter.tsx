import * as React from "react";
import { Fire } from "@phosphor-icons/react/dist/ssr";
import { SPICE_LABELS } from "@/data/site";
import { cn } from "@/lib/utils";

/* Flame heat meter: 0-3 chilli-style flames filled vs outline. */
export function SpiceMeter({
  level,
  showLabel = true,
  className,
}: {
  level: number;
  showLabel?: boolean;
  className?: string;
}) {
  if (level === 0) {
    return showLabel ? (
      <span className={cn("inline-flex items-center gap-1 text-xs text-muted-text", className)}>
        <Fire size={13} weight="regular" className="opacity-40" />
        No spice
      </span>
    ) : null;
  }
  return (
    <span
      className={cn("inline-flex items-center gap-1", className)}
      title={SPICE_LABELS[level] ?? `Spice ${level}/3`}
      aria-label={`Spice level ${level} of 3, ${SPICE_LABELS[level]}`}
    >
      <span className="inline-flex" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <Fire
            key={i}
            size={13}
            weight={i < level ? "fill" : "regular"}
            className={i < level ? "text-flame" : "text-cream/20"}
          />
        ))}
      </span>
      {showLabel && (
        <span className="text-xs font-semibold text-flame/90">{SPICE_LABELS[level]}</span>
      )}
    </span>
  );
}
