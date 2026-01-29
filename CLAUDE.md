# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run lint     # Run ESLint
npm start        # Start production server
```

## Architecture Overview

### Next.js App Router with Internationalization
- Routes are locale-prefixed: `/ko/...` (Korean, default) and `/en/...` (English)
- All pages live under `src/app/[locale]/`
- Middleware (`src/middleware.ts`) handles locale routing via next-intl
- Use `Link` from `@/i18n/routing` instead of `next/link` for locale-aware navigation

### Component Organization
```
src/components/
├── home/       # Homepage sections (Hero, ServiceHighlights, etc.)
├── layout/     # Header, Footer, FloatingCTA, LanguageSwitcher
├── services/   # Service-related components
├── about/      # About page components
├── location/   # Map and location info
├── reservation/# Booking flow components
└── shared/     # Shared utilities (JsonLd for structured data)
```

### Key Data Files
- `src/lib/data.ts` - Centralized business data (location, contact, hours, menu, certifications, reviews). All business info changes should go here.
- `src/locales/ko.json` / `en.json` - Translation strings for both languages

## Design System

### Color Themes (Tailwind)
Two color systems in `tailwind.config.ts`:

**Beauty Theme** (Primary):
- `beauty-pink` (#FFB5C5), `beauty-lavender` (#9B8AC4), `beauty-cream` (#FFFAF4)
- Used for gradient backgrounds and premium aesthetics

**Joy Theme** (Legacy, WCAG AA compliant):
- `joy-pink` (#E07070), `joy-teal` (#5BA8A8), `joy-yellow` (#F5B800)
- Meets accessibility contrast requirements

### Custom Spacing
- `spacing-section`: 7rem (page sections)
- `spacing-component`: 2rem (component gaps)
- `spacing-element`: 1rem (element spacing)

## Patterns

### Server vs Client Components
- Layouts and data-fetching components are Server Components (default)
- Interactive features use `"use client"` directive
- Locale access: `useLocale()` hook in client components, `getLocale()` in server components

### Translation Usage
```tsx
import { useTranslations } from "next-intl";
const t = useTranslations("home");  // Use namespace from JSON
```

### Path Alias
`@/*` maps to `./src/*` - use `@/components`, `@/lib`, `@/i18n`

## Deployment
- Vercel deployment with project ID in `.vercel/project.json`
- Remote image domains configured: `ldb-phinf.pstatic.net`, `lh3.googleusercontent.com`, `images.unsplash.com`
