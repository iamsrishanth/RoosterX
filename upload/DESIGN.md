---
version: alpha
name: RoosterX Fire & Ember
description: >-
  Dark, fiery street-food-premium identity for RoosterX - The Arabian Fusion,
  a shawarma grill chain in Hyderabad. Smoke blacks, flame red, saffron gold,
  and big Arabic-flavored display type. Built for two audiences at once:
  hungry orderers and franchise investors.
colors:
  primary: "{colors.flame}"
  smoke: "#17100B"
  ember: "#241A11"
  char: "#2A1D13"
  cream: "#F5EDE1"
  muted: "#B8A995"
  flame: "#DC2626"
  flame-deep: "#B91C1C"
  gold: "#F5A623"
  veg: "#2E7D32"
typography:
  display:
    fontFamily: Lalezar
    fontSize: 4.75rem
    fontWeight: 400
    lineHeight: 1.05
  h2:
    fontFamily: Lalezar
    fontSize: 3.5rem
    fontWeight: 400
    lineHeight: 1.1
  h3:
    fontFamily: Outfit
    fontSize: 1.375rem
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: Outfit
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: Outfit
    fontSize: 1rem
    fontWeight: 700
    lineHeight: 1.2
  price:
    fontFamily: Outfit
    fontSize: 1.25rem
    fontWeight: 800
    lineHeight: 1.2
  caption:
    fontFamily: Outfit
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.5
rounded:
  pill: 999px
  card: 18px
  img: 14px
  input: 12px
spacing:
  xs: 6px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 48px
  section: 88px
components:
  button-primary:
    backgroundColor: "{colors.flame}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: 14px 30px
  button-primary-hover:
    backgroundColor: "{colors.flame-deep}"
  button-ghost:
    backgroundColor: "{colors.char}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: 13px 28px
  card:
    backgroundColor: "{colors.char}"
    textColor: "{colors.cream}"
    rounded: "{rounded.card}"
    padding: 28px 24px
  menu-item:
    backgroundColor: "{colors.char}"
    textColor: "{colors.cream}"
    rounded: "{rounded.card}"
    padding: 18px
  badge-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.smoke}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  badge-veg:
    backgroundColor: "{colors.veg}"
    textColor: "#FFFFFF"
    rounded: 4px
    padding: 4px 10px
  input:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.cream}"
    rounded: "{rounded.input}"
    padding: 14px 18px
  kicker:
    backgroundColor: "{colors.smoke}"
    textColor: "{colors.flame}"
    padding: 0
  caption:
    backgroundColor: "{colors.smoke}"
    textColor: "{colors.muted}"
    padding: 0
  nav-pill:
    backgroundColor: "{colors.char}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: 10px 12px
---

# RoosterX - Fire & Ember Design System

## Overview

RoosterX ("The Arabian Fusion") is a shawarma and Arabian quick-bites chain in Hyderabad: 8 branches, delivery-first (4.2 stars across 7,379+ Zomato delivery ratings), halal-certified, open late, and actively franchising. The identity is built on one idea: **fire**. Flame-grilled meat, char, ember-lit late-night kitchens, and the rooster's red comb.

- Brand name in copy: **RoosterX** (one word) as the wordmark; "RoosterX - The Arabian Fusion" allowed as the full display line (hyphen, never an em-dash).
- Voice: their own line - "Freshly grilled. Perfectly rolled. Totally addictive." Warm, confident, hungry. Never corporate, never cutesy.
- Design read: bold quick-bites for orderers and franchise investors. Variance 6, Motion 6, Density 5. Dark theme, locked site-wide - no light sections, no theme flipping.
- Build stack: Next.js App Router + TypeScript + Tailwind v4 + motion/react + @react-three/fiber (Three.js), five pages (/ , /menu, /about, /outlets, /franchise). This file styles the stack; PROMPT.md in the same folder is the generation prompt that consumes it.
- This system is deliberately distinct from soft-cream cafe identities: no parchment, no script fonts, no pastel. If it doesn't look like it was cooked over an open flame, it isn't RoosterX.

## Colors

| Token | Hex | Role |
|---|---|---|
| smoke | #17100B | Page base. Warm near-black, never #000000. |
| ember | #241A11 | Alternating section tint one step up from smoke. |
| char | #2A1D13 | Card and menu-item surface. |
| cream | #F5EDE1 | Primary text on all dark surfaces. |
| muted | #B8A995 | Secondary text, captions, helper text. |
| flame | #DC2626 | THE accent. CTAs, kickers, large accents. Rooster-comb red. |
| flame-deep | #B91C1C | Flame hover and pressed states. |
| gold | #F5A623 | Prices, stars, badges, franchise band, dotted leaders. |
| veg | #2E7D32 | FSSAI veg marks only. Never decoration. |

Contrast evidence (WCAG, computed): cream on smoke 16.21:1; cream on ember 14.69:1; cream on char 14.09:1; muted on smoke 8.20:1; white on flame 4.83:1 (AA body); white on flame-deep 6.47:1; smoke on gold 9.29:1; gold on smoke 9.29:1; white on veg 5.13:1.

**Accent rules:**
- flame on smoke is 3.90:1 - **large text only** (18px+ bold or 24px+). Never body copy, never small labels on smoke.
- White (not cream) is the label color on filled flame buttons.
- gold on flame is 2.38:1 - **banned combination**, in any direction.
- No pure black (#000000) fills, no pure white (#FFFFFF) page backgrounds, no AI-purple or blue gradients anywhere. One accent (flame). Gold is functional prestige (prices, franchise), green is functional (veg marks). That is the whole palette.

## Typography

| Token | Font | Weight | Use |
|---|---|---|---|
| display / h2 | Lalezar | 400 | Wordmark "RoosterX", H1, H2, kickers |
| h3 | Outfit | 700 | Card titles, section subheads |
| body | Outfit | 400/500 | Body copy, nav, labels |
| button | Outfit | 700 | All button labels |
| price | Outfit | 800 | Prices, big stats (in gold) |
| caption | Outfit | 500 | Captions, helper text, hours |

- Scale (px): 14, 16, 18, 22, 28, 40, 56, 76. H1 uses `clamp(2.75rem, 6vw, 4.75rem)`, max two lines.
- Lalezar is an Arabic-flavored Latin display face - it carries the "Arabian fusion" identity. Outfit is the clean UI voice. Nothing else.
- Banned: Inter, Roboto, Arial, Open Sans, Helvetica, Fraunces, Instrument Serif, Playfair, and any italic serif. Lalezar has no italic - emphasis is weight and color, never slanted, and never a mixed-family accent word.
- Kickers: Lalezar, flame, uppercase-tracking is optional; keep them short (2-4 words). Kickers are always 28px+ (WCAG large text - this is what licenses the 3.90:1 flame-on-smoke pairing; never below 18px bold).
- Body max-width 65ch. Prices and stats always Outfit 800 in gold, never Lalezar.

## Layout

- Container: max-width 1180px, centered, 20px side padding.
- Section gap: 88px desktop; `clamp(3.5rem, 9vw, 5.5rem)` mobile. Dark sections breathe: no cramped food-site stacks.
- Grids: CSS Grid only (never flexbox percentage math). 3-col collapses to 2 at 900px, 1 at 620px. Split sections (1fr 1fr) collapse at 860px.
- Breakpoints: 640 / 768 / 1024 / 1280 / 1536. Below 768px everything is single column, `w-full`, px-4; no horizontal scroll anywhere; touch targets at least 44px.
- **Hero (home):** asymmetric split. Left: kicker + headline (max 2 lines) + subtext (max 20 words) + two CTAs. Right: flame-lit shawarma photograph with a soft ember glow at the food edge. All four text elements visible without scrolling; never `h-screen`, use `min-h-[100dvh]`; hero top padding max 6rem.
- Inner-page hero: ember band, centered Lalezar title, 84px/56px padding desktop/mobile.
- No overlapping elements; every element owns its spatial zone.

## Elevation & Depth

| Token | Value | Use |
|---|---|---|
| shadow-card | 0 8px 24px rgba(23, 16, 11, 0.55) | resting cards on smoke |
| shadow-lift | 0 14px 34px rgba(23, 16, 11, 0.65) | hover lift |

- Shadows are tinted to the smoke hue, never pure black, never harsh.
- **Glow policy:** a soft flame-colored glow is allowed in exactly two places - the edge of the hero food photograph and the primary CTA. Never glowing text, never neon gradients, never more than one glow per viewport.
- Cards only where elevation communicates hierarchy (menu items, dish bento, outlet tiles, form panels). Elsewhere, group with spacing and hairlines.
- Z-index discipline: sticky nav, overlays, modals, tooltips only. No z-[9999].

## Shapes

- Buttons, chips, badges, tabs: full pill (999px).
- Cards and menu items: 18px.
- Images and gallery tiles: 14px.
- Form inputs: 12px.
- That is the entire radius system - consistent everywhere, no exceptions. Dividers between menu rows are dotted gold leaders, never solid gray lines. Veg indicators are the standard FSSAI 14px green square with a green dot; non-veg uses the brown triangle equivalent.

## Components

- **nav** - floating glass pill, detached from the top edge (12px margin, centered, max-width fit), dark char surface with 1px cream/8% hairline, Lalezar wordmark left, links center, flame "Order Now" pill right. Collapses to a full-screen ember overlay menu below 820px with staggered link reveals (hamburger morphs into an X).
- **hero** - asymmetric split per Layout; flame primary CTA "Order Now" + char ghost "View Menu"; ember glow on the photo edge only.
- **marquee** - exactly one per site: a thin ember strip scrolling dish and claim names ("Arabic Rumali / Golden Ring / Halal Certified / Open Late"), gold Lalezar on ember, pauses under reduced motion.
- **signature-dish-bento** - asymmetric grid (2 large + 3 small cells, or per real content count): dish photo, name (h3), one-line description, gold price. Real dishes and real prices only; no empty cells ever.
- **why-row** - single row of block stats on ember: Halal Certified / Open Late / 4.2★ (7,379+ delivery ratings) / 8 Branches. Outfit 800 gold numbers, caption labels.
- **story** - split section: founder photo or grill shot left, the 2014 founding story right, cream body text, one gold pull-line.
- **outlets-grid** - 8 branch cards (name, area, order links), 4-col desktop collapsing to 2-col tablet, 1-col mobile. Flagship card carries the full address and both phone numbers.
- **franchise-band** - full-width gold-on-smoke band: Lalezar headline "Own a RoosterX", subtext with the 30 Lakhs minimum investment fact, ghost "Enquire" CTA. This band is the one place gold leads the composition.
- **reviews** - delivery rating stat + up to 3 real quotes, max 3 lines each, attribution name + platform. No invented reviews, no "coming soon" placeholders.
- **footer** - smoke base, 4 columns: brand + tagline, hours, contact (both phones with roles, email, address), order links (Zomato, Swiggy, order.roosterx.in) + Instagram @roosterx.in.
- **menu-item** - char card, 96px photo thumb, name, veg mark, dotted gold price leader, gold price.
- **input** - ember field, cream text, cream/15% hairline border, focus ring 2px flame, labels above fields (never placeholder-as-label), inline error text below in flame.
- **buttons** - filled flame (white label), ghost char (cream label). Hover: flame deepens to flame-deep, translateY(-3px) + shadow-lift. Active: translateY(0), scale 0.98.
- **states** - every interactive element has hover, active, and a 2px flame focus ring. Loading = skeleton shimmer matching the card shape (never a spinner). Empty = composed "no dishes match" card. Every form field has a real error state.

## Do's and Don'ts

**Do**
- Use real food photography: flame-grilled shawarma close-ups, char marks, steam, late-night kitchen light. Warm fire-lit grade. No corporate stock photos.
- Lead every conversion path with the real actions: "Order Now" (order intent, one label everywhere) and "Enquire" (franchise intent, one label everywhere).
- Quote the verified stats exactly: 4.2 stars, 7,379+ delivery ratings, 8 branches, 30 Lakhs minimum investment.
- Keep gold for prices, stars, and the franchise band; keep flame for CTAs and kickers; keep green for veg marks only.
- Write hungry, warm, confident copy in the brand's own voice.

**Don't**
- Never set flame text smaller than 18px bold on smoke (3.90:1 is large-text only), and never put gold on flame.
- Never use a second accent color, an AI-purple/blue gradient, or a light theme section on the dark page.
- Never use Inter/Roboto/serif fonts, italic display type, or emoji as icons.
- Never invent menu items, prices, ratings, reviews, branch names, or hours. Placeholders must be explicit `[PRICE]`-style tokens, never realistic fakes.
- Never write glowing text, scroll-hijack layouts, or a second marquee.
- Never misspell the brand: it is **RoosterX** (one word) - not RoostorX, RoosterrX, or Rooster X's in possessive headline constructions.
- Never ship a section with `opacity: 0` defaults; content is visible without JavaScript, reveal effects are progressive enhancement only.

## Motion

- Reveals: fade-up 24px, 500ms ease-out, 80ms stagger, via IntersectionObserver or scroll-linked APIs. Never `window.addEventListener('scroll')`.
- Hover: translateY(-3px) lift, 150-200ms, shadow-card to shadow-lift.
- Marquee: one, slow (60s loop), pauses on hover and under reduced motion.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` family. Never linear, never default ease-in-out.
- Animate only transform and opacity. `prefers-reduced-motion: reduce` disables reveals, marquee, glow pulse, and smooth scroll - non-negotiable.

## Three.js System (single WebGL signature)

- Stack: @react-three/fiber (+ drei) on Next.js App Router. The canvas is dynamically imported (`next/dynamic`, `ssr: false`) inside a `'use client'` leaf component; the page itself stays a Server Component.
- Scene: Home hero ONLY - a rising ember/spark particle field (instanced points, additive blending, flame and gold emitters on smoke) behind the hero photograph, plus one slow-rotating gold torus ring - the "Golden Ring" signature dish made iconic.
- Motion: torus rotation ~8s per revolution; particles rise slowly; pointer parallax max 3 degrees, desktop only.
- Post: soft bloom (mipmap-blur, high luminance threshold) touching ONLY the gold ring - the food photo and copy stay crisp.
- Performance guardrails: DPR clamped [1, 2]; particle count bounded (<= 1500 desktop, half on mobile); frameloop paused when offscreen via IntersectionObserver; geometries/materials disposed on unmount; no OrbitControls, no autorotate, no external HDRI; the 3D layer never blocks LCP (photo + copy render without it).
- Fallbacks (mandatory): WebGL unsupported or `prefers-reduced-motion: reduce` renders a static CSS ember gradient + the hero photo with identical content - no canvas node in the DOM.
- Hard limits: exactly ONE canvas in the whole site, on the Home hero only. No second 3D scene, no light-section 3D.

## Imagery

- Priority: real brand photography (Instagram @roosterx.in, menu photos) at build time; image-gen only to fill gaps, labeled as generated; final fallback is labeled placeholder slots, never fake-SOP div mockups.
- Hero: flame-lit shawarma wrap close-up, steam visible, dark background so the food is the brightest object on the page.
- Grade: warm, high-contrast, fire-lit; consistent across all food tiles (same temperature, no mixed daylight/studio looks).
- No text pills overlaid on photos; captions sit below images.

## Copy & Voice

- Headline max 8 words, subtext max 25 words, one visual or CTA per block.
- Zero em-dashes anywhere visible - hyphens only. Zero filler verbs ("elevate", "seamless", "unleash"). Zero fake numbers.
- CTA labels: "Order Now" and "Enquire" - exactly these, everywhere.
- Reviews are snippets (max 3 lines) with attribution; never fabricated.

## Canonical Brand Data (verified Sep 7, 2026 - use verbatim)

- Taglines: "Freshly grilled. Perfectly rolled. Totally addictive." (IG) / "Experience love in every bite with roosterx!" (site)
- Signature dishes: Arabic Rumali Chicken Shawarma; Golden Ring Chicken Shawarma
- Verified prices (magicpin): Regular Chicken Sandwich Rs 109; Lemon & Mint Mojito Rs 119; Classic Paneer Sandwich Rs 119; Peri Peri Chicken Burger Rs 129; Regular Chicken Burger Rs 129. Signature shawarma prices: fill from the live menu (order.roosterx.in), never invent.
- Ratings: 4.2 stars, 7,379+ Zomato delivery ratings (hero stat); magicpin 4.5 (49) as corroboration. Never cite the 3.9 dining score.
- Cost for two: Rs 300.
- Hours (flagship): 12:00 PM - 12:00 AM daily; "open late" framing allowed, the 3 AM window needs confirmation before it ships.
- Phones: +91 86393 39205 (brand/WhatsApp) and +91 83283 61331 (RTC X Roads delivery line).
- Email: support@roosterx.in. GSTIN: 36AJDPL0514E1ZS (contact/legal contexts only).
- Flagship address: 1-1-261/13/A, Chikkadpally, Near Metro Pillar 1136, RTC X Roads, Himayatnagar, Hyderabad 500020.
- Branches: Chikkadpally (flagship), Hi-tech City, Gowlidoddy, Dilsukhnagar, Nacharam, B.N Reddy Nagar, S.R Nagar, Manipal (Karnataka).
- Order links: order.roosterx.in/store/1/delivery, Zomato, Swiggy. Instagram: @roosterx.in.
- Franchise: minimum investment 30 Lakhs; enquiry fields are Name, Phone, Email, Overall Investment.
- Story: founded by a Hyderabadi who discovered shawarma and doner kebab during a 2014 European Master's and returned to build the brand in India (~5 years as a chain).
