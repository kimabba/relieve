# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run lint     # Run ESLint (next lint)
npm start        # Start production server
```

There are no tests in this repository.

## Architecture Overview

Marketing/booking site for a Korean waxing & sugaring salon ("광주왁싱 슈가링 릴리브"). Next.js 14 App Router, TypeScript, Tailwind, next-intl. SSR-rendered, no database — all content is hardcoded in `src/lib/*.ts` and `src/locales/*.json`.

### Routing & Internationalization (next-intl)
- Locales: `ko` (default) and `en`. All routes live under `src/app/[locale]/`.
- `src/middleware.ts` matches `/` and `/(ko|en)/:path*`; `src/i18n/routing.ts` defines locales and re-exports `Link`, `redirect`, `usePathname`, `useRouter`, `getPathname`. **Always import navigation helpers from `@/i18n/routing`, never from `next/link` or `next/navigation`** — otherwise locale prefixes will be lost.
- `src/i18n/request.ts` loads `src/locales/${locale}.json` per request; `next.config.mjs` wires this via `createNextIntlPlugin("./src/i18n/request.ts")`.
- Translation strings: `useTranslations("namespace")` in client components; namespaces correspond to top-level keys in `ko.json`/`en.json`.
- For long-form bilingual content (e.g., blog posts, Y-zone benefits) the convention is to keep both languages as sibling fields on the same object (`titleKo`/`titleEn`, `contentKo`/`contentEn`) and switch with `locale === "ko"`, rather than splitting across the JSON files.

### Top-level Routes (under `[locale]/`)
`/` (home), `about`, `services`, `education`, `location`, `reservation`, `yzone`, `blog`, `blog/[slug]`, `privacy`, `terms`, plus `not-found.tsx`. Keep `src/app/sitemap.ts` in sync when adding routes — it enumerates static pages and blog slugs for both locales.

### Content sources
- `src/lib/data.ts` — single source of truth for business info: `placeInfo`, `location`, `contact`, `socialLinks`, `businessHours`, `facilities`, `menuItems`, `reviews`, `certifications`. Update here, not in components.
- `src/lib/blog-data.ts` — all blog posts as a typed `BlogPost[]` with KO/EN content inline. Exports `getAllPosts()`, `getPostBySlug(slug)`, `getPostsByCategory(category)`, and `categoryLabels`. Adding a post here automatically picks it up in the blog index, the dynamic `[slug]` route, and `sitemap.ts`.
- `src/locales/{ko,en}.json` — UI copy only.

### SEO
- Root metadata, OpenGraph, Twitter, robots, and `alternates.languages` are configured in `src/app/[locale]/layout.tsx`. Per-page metadata uses `generateMetadata` (see `blog/[slug]/page.tsx`).
- `src/components/shared/JsonLd.tsx` exposes `LocalBusinessJsonLd` and `FAQJsonLd`, both rendered in `<head>` from the locale layout. They derive from `src/lib/data.ts`, so business edits propagate to structured data automatically.
- `src/app/sitemap.ts` and `src/app/robots.ts` are at the app root (not locale-scoped) and emit entries for both locales.

### Server vs Client Components
- Page/layout files default to Server Components; `getMessages()` is awaited in the locale layout and passed to `NextIntlClientProvider`.
- Interactive sections (Hero, FloatingCTA, anything with `framer-motion` or `useState`) use `"use client"`.
- Locale access: `useLocale()` in client components, `await params` then validate against `routing.locales` in async server pages.

## Design System

### Active theme: Waxly (warm brown & cream)
Despite three palettes existing in `tailwind.config.ts`, the **Waxly** palette is what the live site uses — the locale layout sets `<body className="bg-waxly-cream text-waxly-brown ...">`, and components/CSS button classes (`btn-primary`, `btn-secondary`, `btn-outline` in `src/app/globals.css`) all reference `waxly-*`.

- `waxly-brown` (#6A483C) primary, `waxly-brownLight` (#885D4D), `waxly-brownDark` (#5A3D33)
- `waxly-cream` (#FFF7EF) background, `waxly-peach`, `waxly-creamDark`
- `waxly-gold` (#FFC402) accent, `waxly-border` (#EAEAEB)

The `beauty-*` (luxury spa rose/mauve/sage) and `joy-*` (legacy WCAG-tuned pink/teal/yellow) palettes are still defined and may appear in older components — leave them in place but prefer `waxly-*` for new work unless intentionally matching an existing section.

### Typography
- `--font-noto-sans` (Noto Sans KR) → Tailwind `font-sans`, applied to `<body>`.
- `--font-playfair` (Playfair Display) → Tailwind `font-serif`, applied to all headings via `globals.css`.
- Both are loaded with `next/font/google` in `src/app/[locale]/layout.tsx`.
- Material Symbols icons are loaded via a `<link>` in the same `<head>`; use them as `<span className="material-symbols-outlined">icon_name</span>`.

### Spacing, radii, shadows
Custom Tailwind tokens in `tailwind.config.ts`:
- Spacing: `section` (7rem), `component` (2rem), `element` (1rem)
- Border radius scale tuned around `2xl`/`3xl` for cards and `full` for pill buttons
- Shadow scale `xs` → `xl` plus `glow`, `glow-teal`, `glow-yellow`
- Animations: `fade-in-up`, `fade-in`, `bounce-soft`

## Conventions

- Path alias: `@/*` → `./src/*` (use `@/components`, `@/lib`, `@/i18n`).
- Hero variants under `src/components/hero-demos/` (`HeroOptionA…F`) are alternates kept for reference; the live site uses `src/components/home/Hero.tsx`.
- Global button/card utility classes live in `src/app/globals.css` under `@layer components` — prefer them over re-implementing button styles inline.
- Remote image hosts are allowlisted in `next.config.mjs`: `ldb-phinf.pstatic.net` (Naver), `lh3.googleusercontent.com`, `images.unsplash.com`. Add new hosts there before using `<Image>` with them.

## Deployment

Deployed on Vercel; project ID lives in `.vercel/project.json`. `vercel.json` is present at the repo root for any platform-specific overrides.
