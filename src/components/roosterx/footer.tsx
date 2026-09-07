import * as React from "react";
import Link from "next/link";
import {
  Clock,
  Phone,
  EnvelopeSimple,
  MapPin,
  InstagramLogo,
  Storefront,
} from "@phosphor-icons/react/dist/ssr";
import { BRAND, ORDER_PLATFORMS } from "@/data/site";

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-display text-cream text-xl">{title}</h3>
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-cream/10 bg-smoke">
      <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <Col title={BRAND.wordmark}>
            <p className="font-display text-flame text-2xl leading-none">
              {BRAND.fullLine}
            </p>
            <p className="text-muted-text text-sm leading-relaxed">
              {BRAND.taglinePrimary}
            </p>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream hover:text-gold transition-colors"
            >
              <InstagramLogo size={18} weight="regular" />
              {BRAND.instagramHandle}
            </a>
          </Col>

          {/* Hours */}
          <Col title="Hours">
            <p className="flex items-start gap-2 text-cream text-sm leading-relaxed">
              <Clock size={18} weight="regular" className="mt-0.5 text-gold shrink-0" />
              <span>{BRAND.hours}</span>
            </p>
            <p className="text-muted-text text-sm">
              Open late. Late-night delivery window on Zomato.
            </p>
          </Col>

          {/* Contact */}
          <Col title="Contact">
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${BRAND.brandPhoneRaw}`}
                  className="flex items-start gap-2 text-cream hover:text-gold transition-colors"
                >
                  <Phone size={18} weight="regular" className="mt-0.5 text-gold shrink-0" />
                  <span>
                    {BRAND.brandPhone}
                    <span className="block text-muted-text text-xs">Brand / WhatsApp</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.deliveryPhoneRaw}`}
                  className="flex items-start gap-2 text-cream hover:text-gold transition-colors"
                >
                  <Phone size={18} weight="regular" className="mt-0.5 text-gold shrink-0" />
                  <span>
                    {BRAND.deliveryPhone}
                    <span className="block text-muted-text text-xs">RTC X Roads delivery</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-start gap-2 text-cream hover:text-gold transition-colors"
                >
                  <EnvelopeSimple size={18} weight="regular" className="mt-0.5 text-gold shrink-0" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-text">
                <MapPin size={18} weight="regular" className="mt-0.5 text-gold shrink-0" />
                <span>{BRAND.flagshipAddress}</span>
              </li>
            </ul>
          </Col>

          {/* Order links */}
          <Col title="Order">
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={ORDER_PLATFORMS.direct.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
                >
                  <Storefront size={18} weight="regular" className="text-gold shrink-0" />
                  {ORDER_PLATFORMS.direct.label}
                </a>
              </li>
              <li>
                <a
                  href={ORDER_PLATFORMS.zomato.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
                >
                  <Storefront size={18} weight="regular" className="text-gold shrink-0" />
                  {ORDER_PLATFORMS.zomato.label}
                </a>
              </li>
              <li>
                <a
                  href={ORDER_PLATFORMS.swiggy.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
                >
                  <Storefront size={18} weight="regular" className="text-gold shrink-0" />
                  {ORDER_PLATFORMS.swiggy.label}
                </a>
              </li>
            </ul>
            <Link
              href="/franchise"
              className="inline-block text-gold font-bold hover:text-gold/80 transition-colors"
            >
              Own a RoosterX &rarr;
            </Link>
          </Col>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-muted-text sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.wordmark}. Flame-grilled in Hyderabad.
          </p>
          <p>GSTIN: {BRAND.gstin}</p>
        </div>
      </div>
    </footer>
  );
}
