import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Fire,
  Star,
  MapPin,
  ArrowRight,
  Phone,
  Quotes,
  Storefront,
} from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/roosterx/nav";
import { Footer } from "@/components/roosterx/footer";
import { Marquee } from "@/components/roosterx/marquee";
import { EmberHero } from "@/components/threejs/ember-hero";
import { Reveal, Kicker, StaggerGroup, StaggerItem } from "@/components/roosterx/reveal";
import { FlameButton, GhostButton } from "@/components/roosterx/buttons";
import { VegMark } from "@/components/roosterx/veg-mark";
import {
  BRAND,
  SIGNATURE_DISHES,
  WHY_STATS,
  OUTLETS,
  REVIEWS,
  ORDER_PLATFORMS,
} from "@/data/site";

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
      <EmberHero />
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1180px] flex-col justify-center px-5 pt-28 pb-20 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <Kicker className="block mb-4">{BRAND.heroKicker}</Kicker>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display text-cream text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.02] text-balance text-shadow-soft">
              {BRAND.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-cream/85 text-lg leading-relaxed">
              {BRAND.heroSubtext}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
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
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/70">
              <span className="inline-flex items-center gap-1.5">
                <Star size={16} weight="fill" className="text-gold" />
                <span className="font-semibold text-cream">{BRAND.rating}</span>
                <span className="text-muted-text">from {BRAND.ratingCount} delivery orders</span>
              </span>
              <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-cream/30" />
              <span className="inline-flex items-center gap-1.5 text-muted-text">
                <MapPin size={16} weight="regular" className="text-gold" />
                {BRAND.branchesCount} branches across {BRAND.statesCount} states
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Signature Dishes bento ---------- */
function SignatureDishCard({
  dish,
  className,
}: {
  dish: (typeof SIGNATURE_DISHES)[number];
  className?: string;
}) {
  const big = dish.size === "lg";
  return (
    <article
      className={`group relative overflow-hidden rounded-[18px] bg-char hairline flex flex-col ${className ?? ""}`}
    >
      <div className={`relative w-full overflow-hidden ${big ? "aspect-[16/11]" : "aspect-[4/3]"}`}>
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(23,16,11,0.55) 78%, rgba(23,16,11,0.9) 100%)",
          }}
        />
        <span className="absolute left-3 top-3">
          <VegMark veg={dish.veg} />
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3 p-5">
        <div>
          <h3 className={`font-sans font-bold text-cream ${big ? "text-xl" : "text-lg"}`}>
            {dish.name}
          </h3>
          <p className="mt-1.5 text-muted-text text-sm leading-relaxed">{dish.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-sans font-extrabold text-gold text-xl tabular-nums">
            Rs {dish.price}
          </span>
          <Link
            href={BRAND.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-flame hover:text-flame-deep transition-colors"
          >
            Order
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-cream hover:text-flame transition-colors"
            >
              See the full menu
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </Reveal>

        <StaggerGroup
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[1fr]"
          stagger={0.08}
        >
          {/* LG1 - spans 2 cols x 2 rows on lg */}
          <StaggerItem className="lg:col-span-2 lg:row-span-2">
            <SignatureDishCard dish={SIGNATURE_DISHES[0]} className="h-full" />
          </StaggerItem>
          {/* LG2 - spans 1 col x 2 rows on lg */}
          <StaggerItem className="lg:row-span-2">
            <SignatureDishCard dish={SIGNATURE_DISHES[1]} className="h-full" />
          </StaggerItem>
          {/* three small */}
          {SIGNATURE_DISHES.slice(2).map((d) => (
            <StaggerItem key={d.id}>
              <SignatureDishCard dish={d} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

/* ---------- Why row stats ---------- */
function WhyRow() {
  return (
    <section className="bg-ember py-16">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4" stagger={0.07}>
          {WHY_STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div className="flex h-full flex-col gap-1 rounded-[18px] bg-char/60 hairline p-6 text-center">
                <span className="font-sans font-extrabold text-gold text-3xl sm:text-4xl tabular-nums leading-none">
                  {s.value}
                </span>
                <span className="mt-2 font-display text-cream text-lg leading-tight">{s.label}</span>
                <span className="text-muted-text text-xs">{s.sub}</span>
              </div>
            </StaggerItem>
          ))}
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
          <div className="relative overflow-hidden rounded-[14px] aspect-[4/3] hairline">
            <Image
              src="/brand/kitchen-night.jpg"
              alt="RoosterX flame-lit grill kitchen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(220,38,38,0.25), transparent 70%)",
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
            <p className="mt-5 text-cream/85 text-lg leading-relaxed">
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-cream hover:text-flame transition-colors"
            >
              All branches and contact
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {OUTLETS.map((o) => (
            <StaggerItem key={o.id}>
              <Link
                href="/outlets"
                className="group flex h-full flex-col gap-2 rounded-[18px] bg-char hairline p-5 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:glow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-cream text-xl">{o.name}</span>
                  {o.flagship && (
                    <span className="rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-smoke">
                      Flagship
                    </span>
                  )}
                </div>
                <span className="text-muted-text text-xs">{o.city}, {o.state}</span>
                <span className="mt-1 inline-flex items-center gap-1.5 text-flame text-xs font-semibold">
                  <MapPin size={13} weight="regular" />
                  {o.area}
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
          <div className="relative overflow-hidden rounded-[18px] border border-gold/30 bg-gradient-to-br from-[#1f160d] to-[#17100B] px-6 py-12 sm:px-12 sm:py-16">
            {/* gold radial accent */}
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 50% 60% at 85% 30%, rgba(245,166,35,0.18), transparent 70%)",
              }}
            />
            <div className="relative z-10 max-w-2xl">
              <Kicker className="block mb-3 text-gold">Franchise opportunity</Kicker>
              <h2 className="font-display text-cream text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
                Own a RoosterX
              </h2>
              <p className="mt-4 text-cream/85 text-lg leading-relaxed">
                Franchise opportunities across India. Minimum investment
                <span className="font-extrabold text-gold"> 30 Lakhs.</span>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <GhostButton href="/franchise" size="lg">
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

/* ---------- Reviews ---------- */
function Reviews() {
  return (
    <section className="bg-ember py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <Kicker className="block mb-3">What the city says</Kicker>
            <h2 className="font-display text-cream text-4xl sm:text-5xl leading-[1.05]">
              4.2 stars from 7,379+ delivery orders
            </h2>
          </div>
        </Reveal>
        <StaggerGroup className="mx-auto mt-10 grid max-w-3xl gap-4" stagger={0.1}>
          {REVIEWS.map((r) => (
            <StaggerItem key={r.author}>
              <figure className="rounded-[18px] bg-char hairline p-7">
                <Quotes size={28} weight="fill" className="text-flame/70" />
                <blockquote className="mt-3 font-display text-cream text-2xl leading-snug">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-muted-text text-sm">
                  <span className="font-semibold text-cream">{r.author}</span> &middot; {r.platform}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.15}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-text">
            <span className="inline-flex items-center gap-1.5">
              <Star size={15} weight="fill" className="text-gold" /> magicpin {BRAND.magicpinRating} ({BRAND.magicpinCount})
            </span>
            <span>Corroborated across delivery platforms.</span>
          </div>
        </Reveal>
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
          <div className="flex flex-col items-center justify-between gap-6 rounded-[18px] bg-char hairline p-8 sm:flex-row sm:p-10">
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
        <WhyRow />
        <StoryTeaser />
        <OutletsPreview />
        <FranchiseBand />
        <Reviews />
        <OrderCTA />
      </main>
      <Footer />
    </>
  );
}
