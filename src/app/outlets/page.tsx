import * as React from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  NavigationArrow,
  Storefront,
  WhatsappLogo,
  EnvelopeSimple,
  Crown,
} from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/roosterx/nav";
import { Footer } from "@/components/roosterx/footer";
import { InnerHero } from "@/components/roosterx/inner-hero";
import { Reveal, Kicker, StaggerGroup, StaggerItem } from "@/components/roosterx/reveal";
import { FlameButton, GhostButton } from "@/components/roosterx/buttons";
import { OUTLETS, BRAND, ORDER_PLATFORMS } from "@/data/site";

export default function OutletsPage() {
  const mapsLink = (q: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  const whatsappLink = `https://wa.me/${BRAND.brandPhoneRaw}`;

  return (
    <>
      <Nav />
      <main className="flex-1">
        <InnerHero
          kicker="Eight and counting"
          title={<>Find your RoosterX</>}
          subtitle={
            <>
              {BRAND.branchesCount} branches across {BRAND.statesCount} states. All halal-certified,
              all open late. Order online or walk in.
            </>
          }
        />

        {/* Branch grid */}
        <section className="bg-smoke py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <StaggerGroup
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
              stagger={0.06}
            >
              {OUTLETS.map((o) => (
                <StaggerItem key={o.id}>
                  <div className="group flex h-full flex-col rounded-[18px] bg-char hairline p-5 transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:glow-soft">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-cream text-2xl leading-tight">{o.name}</h3>
                      {o.flagship && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-smoke">
                          <Crown size={11} weight="fill" /> Flagship
                        </span>
                      )}
                    </div>
                    <p className="mt-1 flex items-center gap-1.5 text-muted-text text-xs">
                      <MapPin size={13} weight="regular" className="text-gold" />
                      {o.area}, {o.city}
                    </p>
                    <p className="mt-1 text-cream/70 text-xs">{o.state}</p>
                    <p className="mt-3 flex items-start gap-1.5 text-cream text-sm">
                      <Clock size={15} weight="regular" className="mt-0.5 text-gold shrink-0" />
                      <span>{o.hours}</span>
                    </p>
                    {o.flagship && (
                      <p className="mt-2 rounded-md bg-ember px-2.5 py-1.5 text-[11px] leading-snug text-gold">
                        Open till midnight; late-night window till 3 AM on Zomato - confirm before
                        publishing.
                      </p>
                    )}
                    <div className="mt-auto flex items-center gap-2 pt-5">
                      <a
                        href={mapsLink(o.mapsQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-char px-3 py-2 text-xs font-semibold text-cream hairline transition-colors hover:bg-[#33220f]"
                      >
                        <NavigationArrow size={14} weight="bold" /> Directions
                      </a>
                      <a
                        href={ORDER_PLATFORMS.direct.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-flame px-3 py-2 text-xs font-bold text-white transition-colors hover:bg-flame-deep"
                      >
                        <Storefront size={14} weight="regular" /> Order
                      </a>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* Flagship block */}
        <section className="bg-ember py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <Reveal>
              <div className="grid gap-8 rounded-[18px] bg-char hairline p-8 sm:p-10 lg:grid-cols-2 lg:gap-12">
                <div>
                  <Kicker className="block mb-3">The flagship</Kicker>
                  <h2 className="font-display text-cream text-3xl sm:text-4xl leading-tight">
                    Chikkadpally, RTC X Roads
                  </h2>
                  <p className="mt-4 flex items-start gap-2 text-cream leading-relaxed">
                    <MapPin size={20} weight="regular" className="mt-0.5 text-gold shrink-0" />
                    <span>{BRAND.flagshipAddress}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href={`tel:${BRAND.brandPhoneRaw}`}
                    className="flex items-start gap-3 rounded-[12px] bg-ember p-4 transition-colors hover:bg-[#2c2015]"
                  >
                    <Phone size={20} weight="regular" className="mt-0.5 text-gold shrink-0" />
                    <span>
                      <span className="block font-bold text-cream">{BRAND.brandPhone}</span>
                      <span className="text-xs text-muted-text">Brand / WhatsApp</span>
                    </span>
                  </a>
                  <a
                    href={`tel:${BRAND.deliveryPhoneRaw}`}
                    className="flex items-start gap-3 rounded-[12px] bg-ember p-4 transition-colors hover:bg-[#2c2015]"
                  >
                    <Phone size={20} weight="regular" className="mt-0.5 text-gold shrink-0" />
                    <span>
                      <span className="block font-bold text-cream">{BRAND.deliveryPhone}</span>
                      <span className="text-xs text-muted-text">RTC X Roads delivery line</span>
                    </span>
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-veg px-6 py-3 font-bold text-white transition-[transform] duration-200 hover:-translate-y-[2px]"
                  >
                    <WhatsappLogo size={20} weight="fill" />
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact block */}
        <section className="bg-smoke py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <Reveal>
              <div className="text-center">
                <Kicker className="block mb-3">Still have a question</Kicker>
                <h2 className="font-display text-cream text-4xl sm:text-5xl leading-[1.05]">
                  Talk to us
                </h2>
              </div>
            </Reveal>
            <StaggerGroup className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3" stagger={0.08}>
              <StaggerItem>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex h-full flex-col items-center gap-2 rounded-[18px] bg-char hairline p-6 text-center transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:glow-soft"
                >
                  <EnvelopeSimple size={26} weight="regular" className="text-gold" />
                  <span className="font-bold text-cream">Email</span>
                  <span className="text-xs text-muted-text break-all">{BRAND.email}</span>
                </a>
              </StaggerItem>
              <StaggerItem>
                <div className="flex h-full flex-col items-center gap-2 rounded-[18px] bg-char hairline p-6 text-center">
                  <Clock size={26} weight="regular" className="text-gold" />
                  <span className="font-bold text-cream">Hours</span>
                  <span className="text-xs text-muted-text">{BRAND.hours}</span>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="flex h-full flex-col items-center gap-2 rounded-[18px] bg-char hairline p-6 text-center">
                  <Storefront size={26} weight="regular" className="text-gold" />
                  <span className="font-bold text-cream">Order on</span>
                  <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-muted-text">
                    <a href={ORDER_PLATFORMS.direct.href} target="_blank" rel="noopener noreferrer" className="hover:text-cream">order.roosterx.in</a>
                    <span>&middot;</span>
                    <a href={ORDER_PLATFORMS.zomato.href} target="_blank" rel="noopener noreferrer" className="hover:text-cream">Zomato</a>
                    <span>&middot;</span>
                    <a href={ORDER_PLATFORMS.swiggy.href} target="_blank" rel="noopener noreferrer" className="hover:text-cream">Swiggy</a>
                  </div>
                </div>
              </StaggerItem>
            </StaggerGroup>
            <Reveal delay={0.15}>
              <div className="mt-10 flex justify-center">
                <FlameButton href="/franchise" size="lg">
                  Own a RoosterX instead
                </FlameButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
