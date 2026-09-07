"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Storefront,
  Warning,
  MagnifyingGlass,
  SortAscending,
  X,
  Clock,
  Fire,
} from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/roosterx/nav";
import { Footer } from "@/components/roosterx/footer";
import { InnerHero } from "@/components/roosterx/inner-hero";
import { Reveal } from "@/components/roosterx/reveal";
import { VegMark } from "@/components/roosterx/veg-mark";
import { SpiceMeter } from "@/components/roosterx/spice-meter";
import { ItemBadgeTag } from "@/components/roosterx/item-badge";
import { FlameButton, GhostButton } from "@/components/roosterx/buttons";
import { MENU_ITEMS, MENU_CATEGORIES, BRAND, ORDER_PLATFORMS, ALLERGEN_INFO } from "@/data/site";
import type { MenuCategory } from "@/data/site";
import { cn } from "@/lib/utils";

type Filter = "All" | MenuCategory;
type SortKey = "popular" | "price-asc" | "price-desc";

const SORT_LABELS: Record<SortKey, string> = {
  popular: "Most popular",
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
};

export default function MenuPage() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [vegOnly, setVegOnly] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [sort, setSort] = React.useState<SortKey>("popular");
  const [sortOpen, setSortOpen] = React.useState(false);

  React.useEffect(() => {
    const saved = localStorage.getItem("rx-veg-only");
    if (saved === "1") setVegOnly(true);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("rx-veg-only", vegOnly ? "1" : "0");
  }, [vegOnly]);

  const filtered = React.useMemo(() => {
    let out = MENU_ITEMS.filter((m) => {
      if (filter !== "All" && m.category !== filter) return false;
      if (vegOnly && !m.veg) return false;
      if (query.trim()) {
        const q = query.trim().toLowerCase();
        if (
          !m.name.toLowerCase().includes(q) &&
          !m.description.toLowerCase().includes(q) &&
          !m.category.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
    out = [...out].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      // popular: badge popular first, then chef, then new, then value, then none
      const rank: Record<string, number> = { popular: 0, chef: 1, new: 2, value: 3 };
      const ra = a.badge ? rank[a.badge] ?? 9 : 9;
      const rb = b.badge ? rank[b.badge] ?? 9 : 9;
      return ra - rb;
    });
    return out;
  }, [filter, vegOnly, query, sort]);

  function reset() {
    setFilter("All");
    setVegOnly(false);
    setQuery("");
    setSort("popular");
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

        {/* Sticky filter bar */}
        <div className="sticky top-[68px] z-30 border-y border-cream/10 bg-smoke/90 backdrop-blur-xl">
          <div className="mx-auto max-w-[1180px] px-5 py-4 sm:px-8">
            {/* Row 1: search + sort */}
            <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <MagnifyingGlass
                  size={18}
                  weight="regular"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text pointer-events-none"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search dishes..."
                  aria-label="Search dishes"
                  className="w-full rounded-full bg-ember border border-cream/15 py-2.5 pl-11 pr-10 text-sm text-cream placeholder:text-muted-text/60 transition-[border-color,box-shadow] focus:border-flame/50 focus:outline-none focus:ring-2 focus:ring-flame/40"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-text hover:text-cream"
                  >
                    <X size={16} weight="bold" />
                  </button>
                )}
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSortOpen((v) => !v)}
                  aria-haspopup="listbox"
                  aria-expanded={sortOpen}
                  className="inline-flex w-full items-center justify-between gap-2 rounded-full bg-ember border border-cream/15 px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-cream/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-flame sm:w-52"
                >
                  <span className="inline-flex items-center gap-2">
                    <SortAscending size={16} weight="regular" className="text-gold" />
                    {SORT_LABELS[sort]}
                  </span>
                </button>
                {sortOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setSortOpen(false)}
                      aria-hidden="true"
                    />
                    <ul
                      role="listbox"
                      className="absolute right-0 z-20 mt-2 w-full min-w-[12rem] overflow-hidden rounded-[12px] border border-cream/10 bg-char shadow-[0_14px_34px_rgba(23,16,11,0.65)]"
                    >
                      {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => (
                        <li key={k}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={sort === k}
                            onClick={() => {
                              setSort(k);
                              setSortOpen(false);
                            }}
                            className={cn(
                              "block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-ember",
                              sort === k ? "text-flame font-bold" : "text-cream/85",
                            )}
                          >
                            {SORT_LABELS[k]}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Row 2: category pills + veg toggle */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
                          : "bg-char text-cream/80 border border-cream/10 hover:text-cream hover:bg-[#33220f]",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-flame",
                      )}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={vegOnly}
                onClick={() => setVegOnly((v) => !v)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
                  vegOnly
                    ? "bg-veg/15 text-cream border border-veg/30"
                    : "bg-char text-cream/80 border border-cream/10 hover:text-cream",
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

        {/* Result count */}
        <div className="mx-auto max-w-[1180px] px-5 pt-8 sm:px-8">
          <p className="text-sm text-muted-text">
            Showing <span className="font-bold text-cream">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "dish" : "dishes"}
            {filter !== "All" && <> in <span className="text-cream">{filter}</span></>}
            {vegOnly && <> (veg only)</>}
            {query && <> matching &ldquo;<span className="text-cream">{query}</span>&rdquo;</>}
          </p>
        </div>

        {/* Item grid */}
        <section className="bg-smoke py-10 sm:py-12">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            {filtered.length === 0 ? (
              <div className="mx-auto flex max-w-md flex-col items-center rounded-[18px] bg-char border border-cream/10 p-10 text-center">
                <Warning size={32} weight="regular" className="text-gold" />
                <h3 className="mt-3 font-display text-cream text-2xl">No dishes match</h3>
                <p className="mt-2 text-muted-text text-sm">
                  Try a different search, category, or switch off the veg-only filter.
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
                    <article className="group flex h-full flex-col rounded-[18px] bg-char border border-cream/10 p-5 transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-flame/30 hover:glow-soft">
                      <div className="flex items-start gap-4">
                        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[14px] border border-cream/10">
                          {m.image && (
                            <Image
                              src={m.image}
                              alt={m.name}
                              fill
                              sizes="96px"
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                            />
                          )}
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col">
                          <div className="flex flex-wrap items-center gap-2">
                            <VegMark veg={m.veg} />
                            {m.badge && <ItemBadgeTag badge={m.badge} />}
                          </div>
                          <h3 className="mt-2 font-sans font-bold text-cream text-lg leading-snug">
                            {m.name}
                          </h3>
                          <p className="mt-1 text-muted-text text-xs leading-relaxed line-clamp-2">
                            {m.description}
                          </p>
                        </div>
                      </div>

                      {/* meta row: spice + prep + kcal */}
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-text">
                        <SpiceMeter level={m.spice} />
                        {m.prepMins && (
                          <span className="inline-flex items-center gap-1">
                            <Clock size={12} weight="regular" className="text-gold" />
                            {m.prepMins} min
                          </span>
                        )}
                        {m.kcal && <span>{m.kcal} kcal</span>}
                      </div>

                      {/* price row with dotted leader */}
                      <div className="mt-3 flex items-end gap-2">
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

        {/* Allergen legend */}
        <section className="bg-ember py-12">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <div className="rounded-[18px] bg-char/60 border border-cream/10 p-6">
              <h2 className="font-display text-cream text-2xl flex items-center gap-2">
                <Fire size={22} weight="fill" className="text-flame" />
                Allergen guide
              </h2>
              <p className="mt-2 text-muted-text text-sm">
                Every item lists its allergens. Ask our staff for the full allergen matrix at any branch.
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(ALLERGEN_INFO).map(([k, v]) => (
                  <li key={k} className="flex items-center gap-2 text-sm text-cream/85">
                    <span className="inline-flex h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                    <span className="font-semibold text-cream">{k}</span>
                    <span className="text-muted-text">&middot; {v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Order CTA */}
        <section className="bg-smoke py-14">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-col items-center justify-between gap-6 rounded-[18px] bg-char border border-cream/10 p-8 sm:flex-row sm:p-10">
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
