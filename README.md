# Tizora — tizora.ai

The marketing website for Tizora (AI product engineering, cybersecurity,
compliance). Built with **Next.js (App Router)** + **TypeScript** +
**Tailwind CSS v4**. This README explains what every folder is for in plain
terms, so adding a new page, blog post, or case study doesn't require
reverse-engineering the codebase first.

## Tech stack

- **Next.js 15 (App Router)** + **React 19** + **TypeScript**
- **Tailwind CSS v4** — theme tokens (colors, radius, font) live in
  `src/app/globals.css` under an `@theme` block
- **Framer Motion** (`motion/react`) for most animation, **GSAP** for a
  couple of scroll-driven effects (site-wide smooth scroll, the industries
  timeline)
- Routing and per-page metadata (title, description, Open Graph, canonical)
  use Next's built-in **file-based routing** and **Metadata API** — there's
  no router library and no SEO component to configure by hand
- `src/app/sitemap.ts` / `src/app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically from the same data the pages use

## Getting started

```bash
npm install
npm run dev        # starts the dev server on localhost:3000
npm run typecheck   # tsc --noEmit
npm run lint        # eslint .
npm run build       # production build — also type-checks and lints
```

## Folder structure, in plain terms

```
src/
  app/            <- EVERY ROUTE lives here. One folder per URL segment.
  components/
    ui/           <- small generic building blocks (Button, Clock, ...)
    sections/     <- big reusable page sections (hero, FAQ, card grid, ...)
    articles/     <- the ArticleCard/ArticleGrid/ArticleFilterBar used by Insights
    layout/       <- Navbar, Footer, MainLayout, and the two shared page templates
    common/       <- tiny cross-cutting helpers (JsonLd, ContentImage)
    pages/        <- page-specific content components (see below)
  data/           <- all page copy and content lives here, not in components
  context/        <- LanguageContext (multi-language scaffold, currently EN-only content)
  lib/            <- small shared utilities (the SEO metadata builder)
```

### `src/app/` — routes

Each folder under `app/` is one URL segment, and a `page.tsx` inside it is
what renders at that URL. For example:

- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/industries/healthcare/page.tsx` → `/industries/healthcare`
- `app/insights/blogs/[slug]/page.tsx` → `/insights/blogs/<anything>` (a
  **dynamic route** — `[slug]` is a variable segment, see below)

Every `page.tsx` is a **Server Component** and is the *only* place that
exports `metadata` (the page's title/description/OG tags) — that's a Next.js
requirement, not a style choice. A `page.tsx` either renders its content
directly, or renders a matching component from `src/components/pages/` when
that content needs client-side interactivity (see "Server vs Client" below).

`app/sitemap.ts` and `app/robots.ts` are not pages — Next.js recognizes
those exact filenames and serves them at `/sitemap.xml` and `/robots.txt`.

### `src/components/pages/` — page-specific content

Named `<Thing>Content.tsx` (e.g. `HomeContent.tsx`, `AboutContent.tsx`).
This is where a page's actual body lives when it needs `'use client'`
(state, hooks, event handlers). The matching `app/.../page.tsx` stays a thin
server wrapper that just sets metadata and renders `<XyzContent />`. If a
page has no interactivity of its own, it skips this folder and its markup
lives directly in `page.tsx` instead — both patterns exist in this codebase
on purpose, based on what each page actually needs.

### `src/components/sections/`

The big reusable visual blocks (hero banners, FAQ accordions, card grids,
timelines, etc.), named `C0XX_Name.tsx`. Numbering has gaps from sections
that were renamed or removed — that's expected, don't try to fill them in.
Most take a single typed `data` prop; a few take flat props directly. These
are shared across many pages — check other usages before changing one.

### `src/data/`

All page copy (headings, body text, image URLs, FAQ questions, SEO
title/description) lives here as plain TypeScript objects — never inline in
a component. `data/pages/<section>/` mirrors the route structure in `app/`.
`data/common/` holds things shared across many pages (testimonials, social
links, country list). See `data/pages/insights/README.md` for the
blog/AI-trend/case-study content conventions specifically — that's the part
most likely to grow over time.

### Server vs Client components — the rule this project follows

- `page.tsx` is **always** a Server Component (Next.js requires this to
  export `metadata`).
- A component gets `'use client'` only if it actually uses React state,
  effects, browser APIs, or event handlers — or if it needs to hand a
  function prop to another client component (a plain data object can cross
  from server to client; a function or an unrendered icon component
  reference cannot).
- Purely presentational leaf components with no hooks (`Button`,
  `ArticleCard`, several of the `C0XX` sections) stay Server Components —
  check the top of the file for `'use client'` before assuming either way.

## How to add a new page

1. Create `src/app/<path>/page.tsx`.
2. Export `metadata` (use `buildMetadata()` from `src/lib/seo.ts` — it fills
   in Open Graph/Twitter/canonical from just a title, description, and
   optional image/url, matching every other page).
3. Compose the page from existing `components/sections/*` where possible,
   passing content through a new file in `data/pages/<section>/`. Only add
   a new section component if nothing existing fits.
4. If the page needs `useState`/hooks/click handlers, put the body in
   `src/components/pages/<section>/<Name>Content.tsx` (`'use client'`) and
   render it from the server `page.tsx`. Otherwise just write the markup
   directly in `page.tsx`.
5. Add the new URL to `STATIC_ROUTES` in `src/app/sitemap.ts`.
6. Link to it from wherever makes sense — `Navbar.tsx` (`NAV_DATA`) and/or
   `FooterBottom.tsx` (`FOOTER_COLUMNS`) if it belongs in site navigation.

## How to add a new Insight (blog post / AI trend / case study)

See `src/data/pages/insights/README.md` — blogs and AI trends are pure data
(one new file, no new route needed); case studies get their own route
because each has a bespoke layout. That doc walks through both.

## Images

Use `next/image` via the `ContentImage` wrapper
(`src/components/common/ContentImage.tsx`, imported as `Image`) instead of a
plain `<img>` wherever the surrounding markup already gives the image a
fixed size or aspect ratio — it behaves exactly like `next/image` but
automatically skips optimization for `.gif` sources (Next's image optimizer
doesn't reliably preserve GIF animation). Leave a plain `<img>` in place for
logos/icons sized by their own intrinsic aspect ratio (`w-auto`/`h-auto`,
`object-contain`) — forcing those through `next/image` risks distorting
anything that isn't perfectly square.

Any new external image host needs to be added to `remotePatterns` in
`next.config.ts`, or `next/image` will throw at request time.
