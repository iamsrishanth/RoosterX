import Link from "next/link";
import { Fire, ArrowRight, House } from "@phosphor-icons/react/dist/ssr";
import { FlameButton, GhostButton } from "@/components/roosterx/buttons";
import { FlameDivider } from "@/components/roosterx/flame-divider";
import { BRAND } from "@/data/site";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center">
      {/* ember background */}
      <div className="absolute inset-0 ember-gradient" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(220,38,38,0.18), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex max-w-xl flex-col items-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-flame/15 text-flame ember-flicker">
          <Fire size={32} weight="fill" />
        </span>

        <p className="mt-8 font-display text-flame text-7xl leading-none sm:text-8xl">404</p>
        <FlameDivider className="mt-6 w-full" />

        <h1 className="mt-6 font-display text-cream text-3xl leading-tight sm:text-4xl">
          This page burnt to ash.
        </h1>
        <p className="mt-4 text-muted-text leading-relaxed">
          The page you came looking for is no longer here. But the grill is still on, and the
          shawarma is still wrapped to order.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <FlameButton href="/" size="lg">
            <House size={18} weight="regular" />
            Back home
          </FlameButton>
          <GhostButton href="/menu" size="lg">
            See the menu
            <ArrowRight size={18} weight="bold" />
          </GhostButton>
        </div>

        <a
          href={BRAND.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 text-sm font-semibold text-flame hover:text-flame-deep transition-colors"
        >
          Or just order now &rarr;
        </a>
      </div>
    </main>
  );
}
