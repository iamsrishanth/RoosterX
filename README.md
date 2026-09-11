# RoosterX — The Arabian Fusion

Website for **RoosterX**, a flame-grilled shawarma / Arabian-fusion street-food chain in Hyderabad — dark, fiery "Fire & Ember" identity serving two audiences at once: hungry orderers and franchise investors.

## Features

- **Home** — full-bleed flame-black hero, marquee strips, scroll-reveal sections (framer-motion), animated count-up stats, gallery lightbox
- **Menu** — the full menu with spice-meter ratings, veg/non-veg item badges, and item-level detail
- **Outlets** — location pages for the chain's Hyderabad outlets
- **Franchise** — investor-facing pitch page with an enquiry form
- **Franchise enquiry API** — `POST /api/franchise` (zod-style server-side validation) persisting enquiries to the `FranchiseEnquiry` model via Prisma
- Shared component kit in `src/components/roosterx/`: nav, footer, FAQ accordion, flame divider, gallery lightbox, inner-hero, marquee, reveal animations, scroll-to-top, section headings, veg marks

## Tech Stack

- Next.js (App Router) + React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui (Radix primitives), framer-motion, lucide-react + Phosphor icons
- Prisma 6 ORM (Supabase-backed Postgres) — `FranchiseEnquiry` model
- Three.js / react-three-fiber available for 3D scenes; recharts, embla carousel, react-hook-form + zod, zustand
- Bun used as the production server runtime (standalone output)

## Getting Started

```bash
bun install
bun run dev        # next dev on port 3000
bun run build      # prisma generate && next build (standalone output)
bun run start      # bun .next/standalone/server.js

# Database
bun run db:generate   # prisma generate
bun run db:push       # push schema
bun run db:migrate    # dev migrations
```

## Project Structure

```
├── src/
│   ├── app/                # routes: /, /menu, /outlets, /about, /franchise
│   │   └── api/franchise/  # enquiry POST endpoint
│   ├── components/
│   │   ├── roosterx/       # brand component kit
│   │   └── ui/             # shadcn/ui primitives
│   └── lib/                # prisma client, utils
├── prisma/                 # schema (FranchiseEnquiry)
├── DESIGN.md               # "Fire & Ember" design contract (colors, type, motion)
├── next.config.ts
└── tailwind.config.ts
```

## Deployment

Deployed on Vercel at **roosterx.vercel.app** (`.vercel/` project config present). Production runs the Next.js standalone build under Bun. Environment variables (database URL, auth secrets) are configured in the Vercel dashboard — see `.env.example` for the expected shape.

## Notes

`DESIGN.md` is the single source of visual truth: smoke black / ember / char surfaces, flame red (`#DC2626`) primary, saffron gold accents, Lalezar display type with Outfit body.
