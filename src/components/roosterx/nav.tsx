"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { BRAND, NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  React.useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // close on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
        <nav
          aria-label="Primary"
          className={cn(
            "pointer-events-auto flex w-full max-w-[1180px] items-center justify-between gap-4 rounded-full px-4 py-2.5 sm:px-5",
            "bg-char/85 backdrop-blur-xl hairline transition-shadow duration-300",
            scrolled ? "glow-soft" : "",
          )}
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-cream text-2xl leading-none tracking-tight hover:text-flame transition-colors"
            aria-label="RoosterX home"
          >
            Rooster<span className="text-flame">X</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={cn(
                      "relative rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-200",
                      active
                        ? "text-gold"
                        : "text-muted-text hover:text-cream",
                    )}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute inset-0 rounded-full bg-gold/10 hairline" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href={BRAND.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-full bg-flame px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-flame-deep"
            >
              Order Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-char text-cream hairline transition-colors hover:bg-[#33220f] focus:outline-none focus-visible:ring-2 focus-visible:ring-flame md:hidden"
            >
              {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 ember-gradient md:hidden transition-all duration-300",
          open
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible",
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-2 px-6">
          <span className="font-display text-flame uppercase tracking-[0.22em] text-lg mb-4">
            The Arabian Fusion
          </span>
          {NAV_LINKS.map((l) => (
            <div key={l.href}>
              <Link
                href={l.href}
                className="font-display text-cream text-4xl py-2 hover:text-flame transition-colors block text-center"
              >
                {l.label}
              </Link>
            </div>
          ))}
          <div className="mt-8">
            <Link
              href={BRAND.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-flame px-8 py-4 font-bold text-white text-lg hover:bg-flame-deep transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
