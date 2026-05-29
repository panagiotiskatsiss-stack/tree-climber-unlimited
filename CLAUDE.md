# Contractor Template v2

High-converting, SEO/AEO-optimized base template for RenoLaunch contractor clients. Clone this per client, then customize `src/lib/site-config.ts` (the single source of truth) and swap images in `public/images/`.

## Stack
Next.js 16.2.1 (App Router) · React 19.2.4 · Tailwind v4 (CSS tokens, oklch) · shadcn 4.1 on Base UI · lucide-react · twilio. See `AGENTS.md` for critical conventions.

## Architecture
- **`src/lib/site-config.ts`** — all client data (business info, services, areas, reviews, testimonials, process, offers, certifications, portfolio). Edit this first per client.
- **`src/lib/schema.ts` / `metadata.ts`** — JSON-LD + per-page metadata generators.
- **`src/components/sections/`** — the 17-section homepage blueprint, all config-driven.
- **`src/components/layout/`** — top bar, sticky header, footer.
- **`src/app/api/contact/route.ts`** — form handler → Twilio SMS + webhook (RenoLaunch OS CRM).

## Per-client customization
1. Replace all data in `site-config.ts`.
2. Set brand colors + fonts in `src/app/globals.css` (documented comment block at top).
3. Drop real images into `public/images/{hero,services,areas,portfolio,blog}`.
4. Fill `.env.local` from `.env.local.example`.

## Conversion + SEO rules
≥5 CTA touchpoints per page · click-to-call everywhere · dark hero · trust signals per section · FAQ answers render HTML (`<strong>`) + FAQPage schema · semantic `<ul>/<li>` nav with title attrs · location-keyword image alt text · AEO direct-answer content. Full strategy lives in the global `seo` skill and the CONTRACTOR-WEBSITE-DESIGN.md design system.
