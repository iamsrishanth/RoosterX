import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Fire,
  Star,
  MapPin,
  ArrowRight,
  Quotes,
  Storefront,
  Clock,
  SealCheck,
  CookingPot,
  Tag,
  Timer,
} from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/roosterx/nav";
import { Footer } from "@/components/roosterx/footer";
import { Marquee } from "@/components/roosterx/marquee";
import { EmberHero } from "@/components/threejs/ember-hero";
import { Reveal, Kicker, StaggerGroup, StaggerItem } from "@/components/roosterx/reveal";
import { FlameButton, GhostButton } from "@/components/roosterx/buttons";
import { VegMark } from "@/components/roosterx/veg-mark";
import { FlameDivider } from "@/components/roosterx/flame-divider";
import { CountUp } from "@/components/roosterx/count-up";
import {
  BRAND,
  SIGNATURE_DISHES,
  OUTLETS,
  REVIEWS,
  ORDER_PLATFORMS,
  COMBO_DEALS,
  RATING_DISTRIBUTION,
} from "@/data/site";

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
      <EmberHero />
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1180px] flex-col justify-center px-5 pt-28 pb-20 sm:px-8">
        <div className="max-w-2xl">
          <Kicker className="block mb-4">{BRAND.heroKicker}</Kicker>
          <h1 className="font-display text-cream text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.02] text-shadow-soft">
            {BRAND.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-cream text-lg sm:text-xl leading-relaxed drop-shadow-[0_2px_12px_rgba(23,16,11,0.9)]">
            {BRAND.heroSubtext}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <FlameButton href={BRAND.orderUrl} target="_blank" rel="noopener noreferrer" size="lg">
              <Fire size={20} weight="fill" />
              Order Now
            </FlameButton>
            <GhostButton href="/menu" size="lg">
              View Menu
              <ArrowRight size={18} weight="bold" />
            </GhostButton>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-char/70 px-3 py-1.5 hairline backdrop-blur-sm">
              <Star size={16} weight="fill" className="text-gold" />
              <span className="font-bold text-cream">{BRAND.rating}</span>
              <span className="text-muted-text">from {BRAND.ratingCount} orders</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-char/70 px-3 py-1.5 hairline backdrop-blur-sm text-muted-text">
              <MapPin size={16} weight="regular" className="text-gold" />
              {BRAND.branchesCount} branches across {BRAND.statesCount} states
            </span>
          </div>
        </div>
      </div>
      {/* scroll hint */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center" aria-hidden="true">
        <span className="flex flex-col items-center gap-1 text-muted-text/60 text-xs">
          Scroll
          <span className="h-8 w-px bg-gradient-to-b from-gold/50 to-transparent" />
        </span>
      </div>
    </section>
  );
}

/* ---------- Signature Dishes bento ---------- */
function FeaturedDishCard({
  dish,
  className,
}: {
  dish: (typeof SIGNATURE_DISHES)[number];
  className?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[18px] bg-char border border-cream/10 flex flex-col sm:flex-row transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-flame/40 hover:glow-soft ${className ?? ""}`}
    >
      {/* Food Image Container */}
      <div className="relative w-full aspect-[16/10] sm:aspect-auto sm:w-[48%] min-h-[220px] sm:min-h-[300px] overflow-hidden bg-smoke self-stretch shrink-0">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
          className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char/80 via-transparent to-transparent sm:hidden" />
        <span className="absolute left-3.5 top-3.5 z-10 rounded-full bg-smoke/80 px-2 py-1 backdrop-blur-sm">
          <VegMark veg={dish.veg} />
        </span>
        <span className="absolute right-3.5 top-3.5 z-10 rounded-full bg-gold/20 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold border border-gold/30">
          Chef&apos;s Signature
        </span>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF5722]">
            Bestseller Wrap
          </span>
          <h3 className="mt-1.5 font-sans font-bold text-cream text-2xl sm:text-3xl leading-tight group-hover:text-gold transition-colors">
            {dish.name}
          </h3>
          <p className="mt-2.5 text-muted-text text-sm sm:text-base leading-relaxed">
            {dish.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-smoke/80 border border-cream/10 px-3 py-1 text-xs text-cream/90 font-medium">
              Thin Rumali Roti
            </span>
            <span className="rounded-full bg-smoke/80 border border-cream/10 px-3 py-1 text-xs text-cream/90 font-medium">
              Flame-Charred
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-cream/10">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-muted-text font-medium">
              Price
            </span>
            <span className="font-sans font-extrabold text-gold text-2xl tabular-nums leading-none">
              Rs {dish.price}
            </span>
          </div>
          <Link
            href={BRAND.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-flame px-5 py-2.5 text-sm font-bold text-white hover:bg-flame-deep transition-all shadow-md hover:shadow-flame/20 hover:-translate-y-0.5"
          >
            Order Now
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function StandardDishCard({
  dish,
  badge,
  className,
}: {
  dish: (typeof SIGNATURE_DISHES)[number];
  badge?: string;
  className?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[18px] bg-char border border-cream/10 flex flex-col justify-between transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-flame/40 hover:glow-soft ${className ?? ""}`}
    >
      <div>
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-smoke">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
          <span className="absolute left-3 top-3 z-10 rounded-full bg-smoke/80 px-2 py-1 backdrop-blur-sm">
            <VegMark veg={dish.veg} />
          </span>
          {badge && (
            <span className="absolute right-3 top-3 z-10 rounded-full bg-gold/20 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold border border-gold/30">
              {badge}
            </span>
          )}
        </div>

        <div className="p-5 pb-3">
          <h3 className="font-sans font-bold text-cream text-lg leading-snug group-hover:text-gold transition-colors">
            {dish.name}
          </h3>
          <p className="mt-1.5 text-muted-text text-sm leading-relaxed line-clamp-2">
            {dish.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between p-5 pt-3 border-t border-cream/10 mt-auto">
        <span className="font-sans font-extrabold text-gold text-xl tabular-nums">
          Rs {dish.price}
        </span>
        <Link
          href={BRAND.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-flame px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-flame-deep shadow-sm"
        >
          Order
          <ArrowRight size={14} weight="bold" />
        </Link>
      </div>
    </article>
  );
}

function SignatureBento() {
  return (
    <section className="bg-smoke py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Kicker className="block mb-3">Straight off the grill</Kicker>
              <h2 className="font-display text-cream text-4xl sm:text-5xl leading-[1.05]">
                Signature dishes
              </h2>
            </div>
            <Link
              href="/menu"
              prefetch={false}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cream hover:text-flame transition-colors"
            >
              See the full menu
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </Reveal>

        <StaggerGroup
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {/* Row 1, Col 1-2 (lg): Featured Wrap */}
          <StaggerItem className="md:col-span-2 lg:col-span-2">
            <FeaturedDishCard dish={SIGNATURE_DISHES[0]} className="h-full" />
          </StaggerItem>

          {/* Row 1, Col 3 (lg): Golden Ring Shawarma Specialty */}
          <StaggerItem className="md:col-span-1 lg:col-span-1">
            <StandardDishCard
              dish={SIGNATURE_DISHES[1]}
              badge="Signature Ring"
              className="h-full"
            />
          </StaggerItem>

          {/* Row 2: Three equal cards across lg (Burger, Sandwich, Mojito) */}
          <StaggerItem className="md:col-span-1 lg:col-span-1">
            <StandardDishCard
              dish={SIGNATURE_DISHES[2]}
              badge="Flame-Grilled"
              className="h-full"
            />
          </StaggerItem>

          <StaggerItem className="md:col-span-1 lg:col-span-1">
            <StandardDishCard
              dish={SIGNATURE_DISHES[3]}
              badge="Veg Specialty"
              className="h-full"
            />
          </StaggerItem>

          <StaggerItem className="md:col-span-1 lg:col-span-1">
            <StandardDishCard
              dish={SIGNATURE_DISHES[4]}
              badge="House Cooler"
              className="h-full"
            />
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Combo deals ---------- */
function ComboDeals() {
  return (
    <section className="bg-ember py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 text-center">
            <Kicker className="block mb-3">Save when you bundle</Kicker>
            <h2 className="font-display text-cream text-4xl sm:text-5xl leading-[1.05]">
              Value combos
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-text text-sm">
              Paired by the kitchen. Priced to save.
            </p>
          </div>
        </Reveal>
        <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-3" stagger={0.08}>
          {COMBO_DEALS.map((c) => (
            <StaggerItem key={c.id}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[18px] bg-char border border-gold/20 p-6 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:glow-gold">
                <div className="flex items-start justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold">
                    <Tag size={11} weight="fill" />
                    {c.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-veg/15 px-2 py-0.5">
                    <VegMark veg={c.veg} label={false} />
                  </span>
                </div>
                <h3 className="mt-4 font-display text-cream text-2xl leading-tight">{c.name}</h3>
                <p className="mt-1.5 text-muted-text text-sm leading-relaxed">{c.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-cream/85">
                      <CookingPot size={14} weight="regular" className="mt-0.5 text-gold shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-end justify-between pt-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans font-extrabold text-gold text-2xl tabular-nums">
                      Rs {c.price}
                    </span>
                    <span className="text-muted-text text-sm line-through tabular-nums">
                      Rs {c.mrp}
                    </span>
                  </div>
                  <span className="rounded-full bg-veg/15 px-2.5 py-1 text-xs font-bold text-veg">
                    Save Rs {c.saves}
                  </span>
                </div>
                <Link
                  href={BRAND.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-flame px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-flame-deep"
                >
                  Order combo
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Why row stats (with dividers + count-up) ---------- */
const STAT_ICONS = [SealCheck, Clock, Star, MapPin];

function WhyRow() {
  return (
    <section className="bg-ember py-16">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <StaggerGroup
          className="grid grid-cols-2 gap-px overflow-hidden rounded-[18px] bg-cream/10 lg:grid-cols-4"
          stagger={0.07}
        >
          {[
            { label: "Halal Certified", value: 100, suffix: "%", sub: "Every kitchen", icon: SealCheck },
            { label: "Open Late", value: 12, suffix: " AM", sub: "Daily hours", icon: Clock },
            { label: "Delivery Rating", value: 4.2, suffix: "\u2605", decimals: 1, sub: "7,379+ Zomato orders", icon: Star },
            { label: "Branches", value: 8, suffix: "", sub: "Across 2 states", icon: MapPin },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.label}>
                <div className="flex h-full flex-col items-center gap-1 bg-ember px-4 py-7 text-center sm:px-6">
                  <Icon size={22} weight="regular" className="text-gold mb-1" />
                  <span className="font-sans font-extrabold text-gold text-3xl sm:text-4xl tabular-nums leading-none">
                    {"decimals" in s && s.decimals ? (
                      <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals as number} />
                    ) : (
                      <CountUp value={s.value} suffix={s.suffix} />
                    )}
                  </span>
                  <span className="mt-2 font-display text-cream text-lg leading-tight">{s.label}</span>
                  <span className="text-muted-text text-xs">{s.sub}</span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Story teaser ---------- */
function StoryTeaser() {
  return (
    <section className="bg-smoke py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[14px] aspect-[4/3] border border-cream/10">
            <Image
              src="/brand/kitchen-night.jpg"
              alt="RoosterX flame-lit grill kitchen"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(220,38,38,0.28), transparent 70%)",
              }}
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <Kicker className="block mb-3">How it started</Kicker>
            <h2 className="font-display text-cream text-4xl sm:text-5xl leading-[1.05] text-balance">
              2014, one student, one shawarma.
            </h2>
            <p className="mt-5 text-cream/90 text-lg leading-[1.7]">
              It started in 2014, with a student, a Master&apos;s in Europe, and one
              unforgettable shawarma.
            </p>
            <p className="mt-4 text-gold font-display text-2xl leading-snug">
              He came home to Hyderabad to grill his own.
            </p>
            <div className="mt-8">
              <GhostButton href="/about">
                Read the full story
                <ArrowRight size={18} weight="bold" />
              </GhostButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Outlets preview ---------- */
function OutletsPreview() {
  return (
    <section className="bg-ember py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Kicker className="block mb-3">Eight and counting</Kicker>
              <h2 className="font-display text-cream text-4xl sm:text-5xl leading-[1.05]">
                Find your RoosterX
              </h2>
            </div>
            <Link
              href="/outlets"
              prefetch={false}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cream hover:text-flame transition-colors"
            >
              All branches and contact
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {OUTLETS.map((o, i) => (
            <StaggerItem key={o.id}>
              <Link
                href="/outlets"
                prefetch={false}
                className="group relative flex h-full flex-col gap-2 overflow-hidden rounded-[18px] bg-char border border-cream/10 p-5 transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:border-flame/40 hover:glow-soft"
              >
                <span className="absolute right-4 top-4 font-display text-cream/50 text-5xl leading-none select-none" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-display text-cream text-xl">{o.name}</span>
                  {o.flagship && (
                    <span className="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-smoke">
                      Flagship
                    </span>
                  )}
                </div>
                <span className="text-muted-text text-xs">{o.city}, {o.state}</span>
                <span className="mt-1 inline-flex items-center gap-1.5 text-[#FF5722] text-xs font-bold">
                  <MapPin size={13} weight="regular" />
                  {o.area}
                </span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-muted-text text-xs">
                  <Clock size={12} weight="regular" className="text-gold" />
                  Open till 12 AM
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Franchise band ---------- */
function FranchiseBand() {
  return (
    <section className="bg-smoke py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[18px] border border-gold/40 bg-gradient-to-br from-[#221710] via-[#1a1209] to-[#17100B] px-6 py-12 sm:px-12 sm:py-16">
            <div
              className="absolute inset-0 pointer-events-none opacity-70"
              style={{
                background:
                  "radial-gradient(ellipse 50% 60% at 85% 30%, rgba(245,166,35,0.22), transparent 70%)",
              }}
            />
            <div className="relative z-10 max-w-2xl">
              <Kicker className="block mb-3 text-gold">Franchise opportunity</Kicker>
              <h2 className="font-display text-cream text-4xl sm:text-5xl lg:text-6xl leading-[1.02] drop-shadow-[0_2px_20px_rgba(245,166,35,0.25)]">
                Own a RoosterX
              </h2>
              <p className="mt-4 text-cream/90 text-lg leading-relaxed">
                Franchise opportunities across India. Minimum investment
                <span className="font-extrabold text-gold"> 30 Lakhs.</span>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <GhostButton href="/franchise" size="lg" className="border-gold/40 hover:border-gold/70 hover:text-gold">
                  Enquire
                  <ArrowRight size={18} weight="bold" />
                </GhostButton>
                <span className="text-muted-text text-sm">
                  {BRAND.branchesCount} branches open &middot; {BRAND.statesCount} states and growing
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Reviews (with rating distribution + watermark quote) ---------- */
function Reviews() {
  return (
    <section className="bg-ember py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: rating summary */}
          <Reveal>
            <div className="flex flex-col">
              <Kicker className="block mb-3">What the city says</Kicker>
              <div className="flex items-end gap-3">
                <span className="font-sans font-extrabold text-gold text-6xl leading-none tabular-nums">
                  {BRAND.rating}
                </span>
                <div className="pb-1">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        size={18}
                        weight="fill"
                        className={n <= Math.round(BRAND.rating) ? "text-gold" : "text-cream/15"}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-muted-text text-xs">
                    from {BRAND.ratingCount} Zomato delivery orders
                  </p>
                </div>
              </div>

              {/* distribution bars */}
              <div className="mt-6 space-y-2">
                {RATING_DISTRIBUTION.map((r) => (
                  <div key={r.stars} className="flex items-center gap-3">
                    <span className="flex w-8 items-center gap-0.5 text-xs text-muted-text">
                      {r.stars}
                      <Star size={10} weight="fill" className="text-gold/70" />
                    </span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-cream/8">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-flame to-gold"
                        style={{ width: `${r.pct}%` }}
                      />
                    </div>
                    <span className="w-9 text-right text-xs tabular-nums text-muted-text">{r.pct}%</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs text-muted-text">
                Corroborated by magicpin {BRAND.magicpinRating} ({BRAND.magicpinCount}).
              </p>
            </div>
          </Reveal>

          {/* Right: review quote with watermark */}
          <Reveal delay={0.1}>
            <StaggerGroup className="space-y-4" stagger={0.1}>
              {REVIEWS.map((r) => (
                <StaggerItem key={r.author}>
                  <figure className="relative overflow-hidden rounded-[18px] bg-char border border-cream/10 p-7 sm:p-8">
                    <Quotes
                      size={80}
                      weight="fill"
                      className="absolute -right-2 -top-2 text-flame/8 select-none pointer-events-none"
                    />
                    <div className="relative z-10">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <Star key={n} size={16} weight="fill" className="text-gold" />
                        ))}
                      </div>
                      <blockquote className="mt-4 font-display text-cream text-2xl sm:text-3xl leading-snug text-balance">
                        &ldquo;{r.quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-5 flex items-center gap-3 text-sm">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-flame/15 font-display text-flame text-base">
                          {r.author.charAt(0)}
                        </span>
                        <span>
                          <span className="block font-semibold text-cream">{r.author}</span>
                          <span className="text-muted-text text-xs">{r.platform}</span>
                        </span>
                      </figcaption>
                    </div>
                  </figure>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Order CTA strip ---------- */
function OrderCTA() {
  return (
    <section className="bg-smoke py-16">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-[18px] bg-char border border-cream/10 p-8 sm:flex-row sm:p-10">
            <div>
              <h2 className="font-display text-cream text-3xl sm:text-4xl leading-tight">
                Hungry? Your shawarma is one tap away.
              </h2>
              <p className="mt-2 text-muted-text text-sm">Order direct, or from your favourite app.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <FlameButton href={ORDER_PLATFORMS.direct.href} target="_blank" rel="noopener noreferrer" size="lg">
                <Storefront size={20} weight="regular" />
                Order direct
              </FlameButton>
              <GhostButton href={ORDER_PLATFORMS.zomato.href} target="_blank" rel="noopener noreferrer">
                Zomato
              </GhostButton>
              <GhostButton href={ORDER_PLATFORMS.swiggy.href} target="_blank" rel="noopener noreferrer">
                Swiggy
              </GhostButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <SignatureBento />
        <FlameDivider className="bg-smoke" />
        <ComboDeals />
        <WhyRow />
        <StoryTeaser />
        <FlameDivider className="bg-smoke" />
        <OutletsPreview />
        <FranchiseBand />
        <Reviews />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}
