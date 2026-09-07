import * as React from "react";
import { Kicker } from "./reveal";

export function InnerHero({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ember pt-32 pb-14 sm:pt-36 sm:pb-16">
      {/* ember radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(220,38,38,0.12), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1180px] px-5 text-center sm:px-8">
        <Kicker className="block mb-4">{kicker}</Kicker>
        <h1 className="font-display text-cream text-5xl sm:text-6xl lg:text-[4.75rem] leading-[1.02] text-balance">
          {title}
        </h1>
        {subtitle && (
          <div className="mx-auto mt-5 max-w-2xl text-muted-text text-lg leading-relaxed">
            {subtitle}
          </div>
        )}
      </div>
    </section>
  );
}
