import * as React from "react";
import { Kicker } from "./reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  className,
}: {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {kicker && (
        <Kicker className={align === "center" ? "block mb-3" : "block mb-3"}>
          {kicker}
        </Kicker>
      )}
      <h2 className="font-display text-cream text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-text text-base sm:text-lg leading-relaxed max-w-prose">
          {subtitle}
        </p>
      )}
    </div>
  );
}
