"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Storefront, Warning } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/roosterx/nav";
import { Footer } from "@/components/roosterx/footer";
import { InnerHero } from "@/components/roosterx/inner-hero";
import { Reveal } from "@/components/roosterx/reveal";
import { VegMark } from "@/components/roosterx/veg-mark";
import { FlameButton, GhostButton } from "@/components/roosterx/buttons";
import { MENU_ITEMS, MENU_CATEGORIES, BRAND, ORDER_PLATFORMS } from "@/data/site";
import type { MenuCategory } from "@/data/site";
import { cn } from "@/lib/utils";

type Filter = "All" | MenuCategory;

export default function MenuPage() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [vegOnly, setVegOnly] = React.useState(false);

  // restore veg-only from localStorage
  React.useEffect(() => {
    const saved = localStorage.getItem("rx-veg-only");
    if (saved === "1") setVegOnly(true);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("rx-veg-only", vegOnly ? "1" : "0");
  }, [vegOnly]);

  const filtered = React.useMemo(() => {
    return MENU_ITEMS.filter((m) => {
      if (filter !== "All" && m.category !== filter) return false;
      if (vegOnly && !m.veg) return false;
      return true;
    });
  }, [filter, vegOnly]);

  function reset() {
    setFilter("All");
    setVegOnly(false);
  }

  return (
    <>
      <Nav />
      <main className="flex-1">
        <InnerHero
          kicker="Eat with fire"
          title={<>The Menu</>}
          subtitle={
            <>
              Flame-grilled shawarma, burgers, sandwiches and coolers.{" "}
              <span className="font-extrabold text-gold">Rs {BRAND.costForTwo}</span> for two.
            </>
          }
        />

        {/* Sticky filter bar - sibling of grid, NOT inside the grid container */}
        <div className="sticky top-[68px] z-30 bg-smoke/90 backdrop-blur-xl border-y border-cream/10">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* category pills */}
              <div className="no-scrollbar -mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1">
                {MENU_CATEGORIES.map((c) => {
                  const active = filter === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setFilter(c)}
                      className={cn(
                        "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
                        active
                          ? "bg-flame text-white"
                          : "bg-char text-cream/80 hairline hover:text-cream hover:bg-[#33220f]",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-flame",
                      )}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>

              {/* veg-only toggle (sibling of pills, not inside grid) */}
              <button
                type="button"
                role="switch"
                aria-checked={vegOnly}
                onClick={() => setVegOnly((v) => !v)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
                  vegOnly
                    ? "bg-veg/15 text-cream hairline"
                    : "bg-char text-cream/80 hairline hover:text-cream",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-veg",
                )}
              >
                <span className="flex items-center gap-1.5">
                  <VegMark veg label={false} />
                  <span>Veg only</span>
                </span>
                <span
                  className={cn(
                    "relative h-5 w-9 rounded-full transition-colors",
                    vegOnly ? "bg-veg" : "bg-cream/20",
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-0.5 h-4 w-4 rounded-full bg-cream transition-transform duration-200",
                      vegOnly ? "translate-x-4" : "translate-x-0.5",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Item grid */}
        <section className="bg-smoke py-14 sm:py-16">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            {filtered.length === 0 ? (
              <div className="mx-auto flex max-w-md flex-col items-center rounded-[18px] bg-char hairline p-10 text-center">
                <Warning size={32} weight="regular" className="text-gold" />
                <h3 className="mt-3 font-display text-cream text-2xl">No dishes match</h3>
                <p className="mt-2 text-muted-text text-sm">
                  Try a different category or switch off the veg-only filter.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 inline-flex items-center rounded-full bg-flame px-6 py-3 font-bold text-white hover:bg-flame-deep transition-colors"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((m, i) => (
                  <Reveal key={m.id} delay={(i % 3) * 0.06}>
                    <article className="group flex h-full flex-col rounded-[18px] bg-char hairline p-5 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:glow-soft">
                      <div className="flex items-start gap-4">
                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[14px] hairline">
                          {m.image && (
                            <Image
                              src={m.image}
                              alt={m.name}
                              fill
                              sizes="96px"
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                            />
                          )}
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col">
                          <div className="flex items-center gap-2">
                            <VegMark veg={m.veg} />
                            {m.signature && (
                              <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold">
                                Signature
                              </span>
                            )}
                          </div>
                          <h3 className="mt-2 font-sans font-bold text-cream text-lg leading-snug">
                            {m.name}
                          </h3>
                          <p className="mt-1 text-muted-text text-xs leading-relaxed line-clamp-2">
                            {m.description}
                          </p>
                        </div>
                      </div>

                      {/* price row with dotted leader */}
                      <div className="mt-4 flex items-end gap-2">
                        <span className="flex items-center gap-1 text-xs text-muted-text">
                          <Storefront size={13} weight="regular" className="text-gold" />
                          {m.category}
                        </span>
                        <span className="leader-gold flex-1 self-center" />
                        <span className="font-sans font-extrabold text-gold text-xl tabular-nums">
                          Rs {m.price}
                        </span>
                      </div>

                      <a
                        href={ORDER_PLATFORMS.zomato.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-flame hover:text-flame-deep transition-colors"
                      >
                        Order on Zomato
                        <ArrowRight size={14} weight="bold" />
                      </a>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Order CTA */}
        <section className="bg-ember py-14">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-col items-center justify-between gap-6 rounded-[18px] bg-char hairline p-8 sm:flex-row sm:p-10">
                <div>
                  <h2 className="font-display text-cream text-3xl leading-tight">
                    Order the whole menu online
                  </h2>
                  <p className="mt-2 text-muted-text text-sm">Direct, Zomato, or Swiggy.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <FlameButton href={ORDER_PLATFORMS.direct.href} target="_blank" rel="noopener noreferrer" size="lg">
                    Order Now
                  </FlameButton>
                  <GhostButton href={ORDER_PLATFORMS.swiggy.href} target="_blank" rel="noopener noreferrer">
                    Swiggy
                  </GhostButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
