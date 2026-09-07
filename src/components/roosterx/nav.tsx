"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { BRAND, NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const reduce = useReducedMotion();

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

          {/* Center links - desktop */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
                    isActive(l.href)
                      ? "text-flame"
                      : "text-cream/80 hover:text-cream",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Order Now + hamburger */}
          <div className="flex items-center gap-2">
            <Link
              href={BRAND.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-flame px-5 py-2.5 text-sm font-bold text-white transition-[transform,background-color] duration-200 hover:bg-flame-deep hover:-translate-y-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-2 focus-visible:ring-offset-smoke sm:inline-flex"
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
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 ember-gradient md:hidden"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 px-6">
              <span className="font-display text-flame uppercase tracking-[0.22em] text-lg mb-4">
                The Arabian Fusion
              </span>
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.06 * i + 0.1 }}
                >
                  <Link
                    href={l.href}
                    className="font-display text-cream text-4xl py-2 hover:text-flame transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.06 * NAV_LINKS.length + 0.15 }}
                className="mt-8"
              >
                <Link
                  href={BRAND.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-flame px-8 py-4 font-bold text-white text-lg hover:bg-flame-deep transition-colors"
                >
                  Order Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
