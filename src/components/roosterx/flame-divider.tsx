import * as React from "react";
import { Flame } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

/* A horizontal flame divider: thin gold line with a centered flame icon.
   Used between sections to add fire-themed rhythm. */
export function FlameDivider({
  className,
  icon = true,
}: {
  className?: string;
  icon?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4 py-2",
        className,
      )}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40 sm:w-28" />
      {icon && (
        <Flame
          size={18}
          weight="fill"
          className="text-flame ember-flicker"
        />
      )}
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40 sm:w-28" />
    </div>
  );
}
