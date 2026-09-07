# RoosterX Website - Build Prompt (PROMPT.md)

Master generation prompt for the RoosterX ("The Arabian Fusion") website. Use with any AI site builder (Stitch, v0, Lovable, Cursor) or as the build contract for the real Next.js implementation.

**Stack (required):** Next.js App Router + TypeScript + Tailwind v4 + `motion/react` for UI animation + `@react-three/fiber` (Three.js) for the 3D layer. Multiple pages (5 routes, listed below). Dark theme, locked site-wide.

**How to use**
- `DESIGN.md` (same folder) is the design-system source of truth. Feed both files to the builder.
- Generate the Home page first with the Master Prompt below. Then use the interior-page prompts, one page at a time.
- Use the Section-Edit prompts for targeted changes only - one change per prompt.
- Wherever `[PRICE]` appears, fill from the live menu (order.roosterx.in) before shipping. Never invent prices, ratings, or reviews.

---

## Master Prompt - full site (run this first)

A dark, fiery, multi-page Next.js website for RoosterX - The Arabian Fusion, a Hyderabad shawarma grill chain: flame-lit 3D ember hero, real menu with prices, 8 branch locations, and a franchise funnel. Bold street-food-premium, never corporate.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Next.js App Router + TypeScript + Tailwind v4, Desktop-first, responsive at 375 / 768 / 1024 / 1440
- Theme: Dark only ("Fire & Ember"). Background: Smoke #17100B (warm near-black, never #000000). Section tint: Ember #241A11. Cards: Char #2A1D13
- Text Primary: Cream #F5EDE1. Text Secondary: Muted #B8A995
- Primary Accent: Flame Red #DC2626 for CTAs, kickers, large accents (large text only on dark - 18px+ bold)
- Prestige: Saffron Gold #F5A623 for prices, stars, badges, franchise band
- Functional: Veg Green #2E7D32 for FSSAI veg marks only
- Fonts: Lalezar (display, wordmark, H1/H2, kickers) + Outfit (UI, body, buttons 700, prices 800) via `next/font`, no other fonts
- Buttons: full pill (999px), Flame bg with white label (primary), Char bg with cream label (ghost). Cards 18px. Images 14px. Inputs 12px
- 3D (Three.js via @react-three/fiber): ONE WebGL canvas on the Home hero - a rising ember/spark particle field behind a flame-lit shawarma photo plus a slow-rotating gold ring torus (the "Golden Ring" signature) with soft bloom. Dynamic import with `ssr: false`, DPR clamped [1, 2], frameloop paused when offscreen (IntersectionObserver), pointer parallax max 3 degrees desktop-only, all disposed on unmount. Static CSS ember-gradient fallback when WebGL is unavailable; static poster under `prefers-reduced-motion`
- Motion: fade-up 24px reveals with 80ms stagger (`motion/react` whileInView), hover lift translateY(-3px), easing cubic-bezier(0.16, 1, 0.3, 1), transform/opacity only, `prefers-reduced-motion` disables everything
- Icons: Phosphor thin-line SVG icons only, no emoji as icons
- States: every button has hover/active/2px flame focus ring; loading = skeleton shimmer; forms have inline error states; labels above inputs

**Pages (App Router):**
1. `/` - Home: 3D ember hero, marquee, signature dishes bento, why-row stats, story teaser, outlets preview, franchise band, reviews, footer
2. `/menu` - full menu: sticky category pills, item grid with photos, veg marks, gold prices, Order Now links
3. `/about` - Our Story: founder journey, philosophy, gallery strip
4. `/outlets` - 8 branch cards with area, hours, order links, map links + contact block
5. `/franchise` - opportunity pitch, 30 Lakhs investment stat, enquiry form (Name, Phone, Email, Overall Investment)

**Home Page Structure:**
1. **Nav:** floating glass pill, detached from top, Lalezar wordmark "RoosterX" left, links (Menu, About, Outlets, Franchise) center, flame "Order Now" pill right; hamburger + full-screen ember overlay below 820px
2. **Hero:** left - kicker "THE ARABIAN FUSION", H1 "Freshly Grilled. Perfectly Rolled. Totally Addictive.", subtext "Hyderabad's favourite shawarma, grilled over open flame and wrapped to order. Order online or walk in.", CTAs "Order Now" (flame) + "View Menu" (ghost); right - 3D ember particle field + gold ring torus behind a flame-lit shawarma photo
3. **Marquee:** one thin ember strip, gold Lalezar: "Arabic Rumali / Golden Ring / Halal Certified / Open Late", 60s loop, pauses on hover and under reduced motion
4. **Signature Dishes bento:** asymmetric grid, real dishes - Arabic Rumali Chicken Shawarma [PRICE], Golden Ring Chicken Shawarma [PRICE], Peri Peri Chicken Burger Rs 129, Classic Paneer Sandwich Rs 119, Lemon & Mint Mojito Rs 119 - each with photo, name, one-line description, gold price
5. **Why-row:** ember band, four block stats: Halal Certified / Open Late / 4.2★ (7,379+ delivery ratings) / 8 Branches
6. **Story teaser:** split section, grill photo left, "It started in 2014, with a student, a Master's in Europe, and one unforgettable shawarma." right, link to /about
7. **Outlets preview:** grid of branch tiles (Chikkadpally flagship, Hi-tech City, Gowlidoddy, Dilsukhnagar, Nacharam, B.N Reddy Nagar, S.R Nagar, Manipal), link to /outlets
8. **Franchise band:** gold-on-smoke, Lalezar "Own a RoosterX", subtext "Franchise opportunities across India. Minimum investment 30 Lakhs.", ghost "Enquire" CTA linking to /franchise
9. **Reviews:** "4.2★ from 7,379+ Zomato delivery orders" + one real quote (max 3 lines, attributed "Eshan Jain, magicpin")
10. **Footer:** brand + tagline, hours (12:00 PM – 12:00 AM daily), contact (+91 86393 39205 WhatsApp/brand, +91 83283 61331 delivery line, support@roosterx.in, flagship address), order links (order.roosterx.in, Zomato, Swiggy), Instagram @roosterx.in

---

## Interior Page Prompts

### /menu - Menu Page
A dark, appetizing full-menu page for RoosterX with sticky category filter pills and a photo-rich item grid.

**DESIGN SYSTEM (REQUIRED):** same Fire & Ember tokens as the Master Prompt (Smoke #17100B base, Char #2A1D13 cards, Cream #F5EDE1 text, Flame #DC2626 accents, Gold #F5A623 prices, Lalezar display + Outfit UI).

**Page Structure:**
1. Inner hero: ember band, Lalezar "The Menu", subtext with cost-for-two "Rs 300 for two"
2. Sticky category pills (Char pills, active = Flame), scroll-synced
3. Item grid: Char cards, 96px photo thumb, name, FSSAI veg mark, dotted gold price leader, gold price, per-item "Order on Zomato" text link
4. Empty state: composed "no dishes match" card with a reset pill
5. Footer: shared site footer

### /about - Our Story Page
A warm, fire-lit brand-story page for RoosterX: the 2014 founder journey from Europe to Hyderabad, told in large Lalezar moments over dark ember sections.

**Page Structure:**
1. Inner hero: "How it started" + founder line
2. Story timeline: 2014 Europe discovery → return to Hyderabad → first outlet → 8 branches across two states
3. Philosophy block: fresh, high-quality ingredients; great food brings people together (from the brand's own About copy)
4. Gallery strip: real food/branch photos, 14px radii, lightbox
5. Careers strip: "We're hiring. Competitive pay, full benefits." + application mailto/link
6. Footer: shared site footer

### /outlets - Outlets & Contact Page
A practical dark directory page for RoosterX's 8 branches with order and map actions per branch.

**Page Structure:**
1. Inner hero: "Find your RoosterX"
2. Branch grid: 8 cards (Chikkadpally flagship, Hi-tech City, Gowlidoddy, Dilsukhnagar, Nacharam, B.N Reddy Nagar, S.R Nagar, Manipal) - each with area, hours, "Order" + "Directions" pill links
3. Flagship block: full address "1-1-261/13/A, Chikkadpally, Near Metro Pillar 1136, RTC X Roads, Himayatnagar, Hyderabad 500020", both phone roles, WhatsApp link
4. Contact block: support@roosterx.in, hours, order-platform links
5. Footer: shared site footer

### /franchise - Franchise Page
A confident gold-accented franchise pitch page for RoosterX with a real enquiry form.

**Page Structure:**
1. Inner hero: "Own a RoosterX" + "Franchise opportunities across India. Minimum investment 30 Lakhs."
2. Proof band: 4.2★ (7,379+ delivery ratings), 8 branches, 2 states, growing
3. Model block: delivery-first quick bites, halal kitchen, late-night demand
4. Enquiry form: Name, Phone, Email, Overall Investment (numeric field) - labels above inputs, inline flame errors, submit = "Enquire"
5. Footer: shared site footer

---

## Section-Edit Prompts (one change at a time)

1. "Replace the hero photo with [asset]. Keep the ember glow at the food edge only, keep all copy and CTAs unchanged."
2. "Add a Veg-only toggle as a sibling of the category pills row (never inside the JS-rendered grid container). Persist in localStorage, respect it on category switches."
3. "Add [dish name] to the Signature Dishes bento with photo [asset] and price [PRICE]. Never create an empty bento cell."
4. "Change the franchise band headline to [text]. Keep the gold-on-smoke composition, the 30 Lakhs fact, and the Enquire CTA."
5. "Add a late-night hours note to the outlets page flagship card: 'Open till midnight; late-night window till 3 AM on Zomato - confirm before publishing.'"

---

## Negative Prompt (banned on every page)

- No light-theme sections on the dark site; no theme flipping mid-scroll
- No AI-purple or blue neon gradients; the only glow is flame-colored, on the hero food edge and the primary CTA, never on text
- No Inter, Roboto, Arial, serif display fonts, or italic display type
- No emoji as icons; no hand-drawn SVG icon paths; Phosphor thin-line only
- No lorem ipsum, fake reviews, invented ratings, invented prices, fake awards, or "reviews coming soon" placeholders
- No scroll-hijacking, no horizontal scroll on mobile, no h-screen (use min-h-[100dvh])
- No stock corporate photography; flame-lit real food photography only
- No em-dashes in any visible copy; no filler verbs ("elevate", "seamless", "unleash")
- No content hidden by default with opacity 0 in CSS (progressive enhancement only)
- No second WebGL canvas, no OrbitControls, no autorotate; 3D lives on the Home hero only

---

## Content Checklist (real data - verbatim, verified Sep 7, 2026)

- Wordmark: "RoosterX" (one word). Display line: "RoosterX - The Arabian Fusion" (hyphen)
- Taglines: "Freshly grilled. Perfectly rolled. Totally addictive." / "Experience love in every bite with roosterx!"
- Signature dishes: Arabic Rumali Chicken Shawarma, Golden Ring Chicken Shawarma (fill [PRICE] from live menu)
- Verified prices: Regular Chicken Sandwich Rs 109; Lemon & Mint Mojito Rs 119; Classic Paneer Sandwich Rs 119; Peri Peri Chicken Burger Rs 129; Regular Chicken Burger Rs 129
- Hero stat: 4.2★ from 7,379+ Zomato delivery ratings (never cite the 3.9 dining score); magicpin 4.5 (49) as corroboration
- Cost for two: Rs 300. Hours: 12:00 PM – 12:00 AM daily ("open late"; confirm the 3 AM window before publishing it)
- Phones: +91 86393 39205 (brand/WhatsApp), +91 83283 61331 (RTC X Roads delivery line). Email: support@roosterx.in
- Flagship address: 1-1-261/13/A, Chikkadpally, Near Metro Pillar 1136, RTC X Roads, Himayatnagar, Hyderabad 500020
- Branches: Chikkadpally (flagship), Hi-tech City, Gowlidoddy, Dilsukhnagar, Nacharam, B.N Reddy Nagar, S.R Nagar, Manipal (Karnataka)
- Order links: https://order.roosterx.in/store/1/delivery, Zomato, Swiggy. Instagram: @roosterx.in
- Franchise: minimum investment 30 Lakhs; enquiry form fields Name, Phone, Email, Overall Investment
- Founder story: 2014, Europe, Master's degree, fell for shawarma and doner kebab, returned to build the brand in India (~5 years as a chain)
- Real review quote (magicpin, Eshan Jain): "Their Arabic Rumali Chicken Shawarma was a standout, with flavorful, tender chicken."
- GSTIN 36AJDPL0514E1ZS - legal/contact contexts only, not marketing copy

---

## Build Acceptance Greps (run after generation)

- `grep -rn "-" src/` → 0 hits in rendered copy
- `grep -rniE "inter|roboto|playfair|fraunces" src/` → 0 hits in font usage
- `grep -rn "reviews coming soon" src/` → 0 hits
- `grep -rn "use client" src/components/threejs/` → present; WebGL bundle dynamically imported
- `grep -rn "h-screen" src/` → 0 hits; `min-h-[100dvh]` in hero
- `grep -rn "PRICE" src/data/` → only where live prices are still unfilled, never shipped
