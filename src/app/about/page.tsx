import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Leaf, Users } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/roosterx/nav";
import { Footer } from "@/components/roosterx/footer";
import { InnerHero } from "@/components/roosterx/inner-hero";
import { Reveal, Kicker, StaggerGroup, StaggerItem } from "@/components/roosterx/reveal";
import { GhostButton } from "@/components/roosterx/buttons";
import { GalleryLightbox } from "@/components/roosterx/gallery-lightbox";
import { STORY_TIMELINE, STORY_PHILOSOPHY, BRAND } from "@/data/site";

const GALLERY = [
  { src: "/food/hero-shawarma.jpg", alt: "Flame-grilled shawarma wrap", caption: "The signature wrap" },
  { src: "/food/arabic-rumali-shawarma.jpg", alt: "Arabic Rumali Chicken Shawarma", caption: "Arabic Rumali" },
  { src: "/food/golden-ring-shawarma.jpg", alt: "Golden Ring Chicken Shawarma", caption: "Golden Ring" },
  { src: "/food/peri-peri-burger.jpg", alt: "Peri Peri Chicken Burger", caption: "Peri Peri Burger" },
  { src: "/food/paneer-sandwich.jpg", alt: "Classic Paneer Sandwich", caption: "Paneer Sandwich" },
  { src: "/food/lemon-mint-mojito.jpg", alt: "Lemon and Mint Mojito", caption: "Lemon & Mint Mojito" },
  { src: "/brand/grill-spit.jpg", alt: "Vertical rotisserie grill spit", caption: "On the spit" },
  { src: "/brand/storefront-night.jpg", alt: "RoosterX storefront at night", caption: "Open late" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <InnerHero
          kicker="How it started"
          title={<>One bite in Europe, a brand back home.</>}
          subtitle={
            <>
              A Hyderabadi student fell for shawarma during a 2014 Master&apos;s. He came home to
              grill his own. Five years later, RoosterX runs eight branches across two states.
            </>
          }
        />

        {/* Story timeline */}
        <section className="bg-smoke py-20 sm:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <StaggerGroup className="grid gap-4 lg:grid-cols-4" stagger={0.08}>
              {STORY_TIMELINE.map((s, i) => (
                <StaggerItem key={s.year}>
                  <div className="relative flex h-full flex-col rounded-[18px] bg-char hairline p-6">
                    <span className="font-display text-gold text-3xl leading-none">{s.year}</span>
                    <div className="my-4 h-px w-10 bg-flame/50" />
                    <h3 className="font-sans font-bold text-cream text-lg leading-snug">{s.title}</h3>
                    <p className="mt-2 text-muted-text text-sm leading-relaxed">{s.text}</p>
                    {i < STORY_TIMELINE.length - 1 && (
                      <ArrowRight
                        size={20}
                        weight="bold"
                        className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-flame/40 lg:block"
                      />
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Founder quote + image */}
        <section className="bg-ember py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative overflow-hidden rounded-[14px] aspect-[4/3] hairline">
                <Image
                  src="/brand/grill-spit.jpg"
                  alt="Flame-grilled vertical rotisserie"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 55% 50% at 50% 75%, rgba(220,38,38,0.28), transparent 70%)",
                  }}
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <Kicker className="block mb-3">The obsession</Kicker>
                <blockquote className="font-display text-cream text-3xl sm:text-4xl leading-snug">
                  &ldquo;If it doesn&apos;t look like it was cooked over an open flame, it isn&apos;t
                  RoosterX.&rdquo;
                </blockquote>
                <p className="mt-6 text-cream/85 text-base leading-relaxed">
                  Every shawarma is grilled over real open flame, wrapped to order, at a price the
                  city can love. No reheated bags, no shortcuts. Just fire, chicken, bread, and the
                  sauce.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-smoke py-20 sm:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <Reveal>
              <div className="mb-10 text-center">
                <Kicker className="block mb-3">What we believe</Kicker>
                <h2 className="font-display text-cream text-4xl sm:text-5xl leading-[1.05]">
                  Our philosophy
                </h2>
              </div>
            </Reveal>
            <StaggerGroup className="grid gap-4 md:grid-cols-2" stagger={0.1}>
              {STORY_PHILOSOPHY.map((p, i) => (
                <StaggerItem key={p.title}>
                  <div className="flex h-full flex-col rounded-[18px] bg-char hairline p-8">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-flame/15 text-flame">
                      {i === 0 ? <Leaf size={24} weight="regular" /> : <Users size={24} weight="regular" />}
                    </span>
                    <h3 className="mt-5 font-display text-cream text-2xl leading-tight">{p.title}</h3>
                    <p className="mt-3 text-cream/80 leading-relaxed">{p.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Gallery strip */}
        <section className="bg-ember py-20 sm:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <Reveal>
              <div className="mb-10 text-center">
                <Kicker className="block mb-3">From our kitchen</Kicker>
                <h2 className="font-display text-cream text-4xl sm:text-5xl leading-[1.05]">
                  The gallery
                </h2>
                <p className="mx-auto mt-3 max-w-md text-muted-text text-sm">
                  Tap any tile to open it larger.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <GalleryLightbox images={GALLERY} />
            </Reveal>
          </div>
        </section>

        {/* Careers strip */}
        <section className="bg-smoke py-16">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-col items-center justify-between gap-6 rounded-[18px] border border-gold/30 bg-gradient-to-br from-[#1f160d] to-[#17100B] p-8 sm:flex-row sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Briefcase size={28} weight="regular" />
                  </span>
                  <div>
                    <h2 className="font-display text-cream text-3xl leading-tight">We&apos;re hiring</h2>
                    <p className="mt-1 text-muted-text text-sm">
                      Competitive pay, full benefits, and a kitchen that runs on fire.
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${BRAND.email}?subject=RoosterX%20Careers%20Application`}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-smoke transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:glow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-smoke"
                >
                  Apply now
                  <ArrowRight size={18} weight="bold" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
