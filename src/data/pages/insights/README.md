# Insights content architecture

The Insights section has four content types — **Blogs**, **AI Trends**,
**Case Studies** and **Ebooks** — and they intentionally use two different file conventions,
because they have different shapes. This doc exists so a new contributor
doesn't have to reverse-engineer which pattern to follow when adding content.

## Blogs & AI Trends — one file per post, aggregated in `index.ts`

```
blogs/
  blogTypes.ts        <- BlogPost type + BLOG_CATEGORIES taxonomy
  blogPageData.ts      <- thin aggregator: imports posts/, re-exports types, derives the grid
  posts/
    index.ts           <- imports every post file, exports the combined array
    <slug>.ts           <- one real blog post per file

ai-trends/
  trendTypes.ts        <- AITrendItem type + AI_TREND_CATEGORIES taxonomy
  aiTrendsPageData.ts  <- thin aggregator, same shape as blogPageData.ts
  trends/
    index.ts
    <slug>.ts
```

Both types render through a single shared dynamic route —
`src/app/insights/blogs/[slug]/page.tsx` and
`src/app/insights/ai-trends/[slug]/page.tsx` — so every post/trend just
needs to be *data*; no new page or route required. Next.js prerenders one
static HTML page per slug at build time via that route's
`generateStaticParams()`, and `src/app/sitemap.ts` lists every one
automatically — so the sitemap needs no manual update either.

**To add a new blog post:**
1. Create `blogs/posts/your-slug.ts` exporting `export const post: BlogPost = { ... }`.
   Copy an existing file in that folder as a starting template — every field
   it needs is already there.
2. Add it to the array in `blogs/posts/index.ts`.
3. That's it — the `/insights/blogs` listing, the `/insights/blogs/your-slug`
   page, and the sitemap all pick it up automatically on the next build.

Adding a new AI Trend is the identical process under `ai-trends/trends/`.

This is deliberately structured so that 20 blog posts means 20 small,
easy-to-find files (`posts/how-x-works.ts`, `posts/why-y-matters.ts`, ...)
instead of one enormous array in one file — each post is its own diff, its
own git-blame history, and easy to locate by filename alone.

## Case Studies — one file per case study, imported directly by its own page

Case studies don't follow the same pattern because each one has a genuinely
different page layout (different sections, different order) rather than
rendering through one shared template. So each case study is:

```
case-studies/
  caseStudiesPageData.ts   <- listing-page grid data + hub SEO
  aiLPRParkingData.ts      <- full content for one case study
  aiWeightManagementData.ts
  aiPatientManagementData.ts
  cstoreMasterData.ts
```

...and each has its own dedicated route under
`src/app/insights/case-studies/` (e.g.
`src/app/insights/case-studies/parking/ai-lpr-parking-enforcement/page.tsx`)
that imports its data file directly and composes whatever sections that
story needs. To add a new case study: create a new data file following the
shape of an existing one, a new `page.tsx` under a new folder inside
`src/app/insights/case-studies/<industry>/<slug>/` that composes it, a card
entry in `caseStudiesPageData.ts`'s grid, and a line for it in
`src/app/sitemap.ts`'s `STATIC_ROUTES` list.

## Ebooks — one file per ebook, same pattern as Blogs

```
ebooks/
  ebookTypes.ts        <- Ebook type + EBOOK_TOPICS taxonomy
  ebooksPageData.ts    <- aggregator: listing grid, SEO, getEbook(slug)
  books/
    index.ts
    <slug>.ts          <- title, chapters (full text), FAQs, images, PDF details
```

Every ebook renders through `src/app/insights/ebooks/[slug]/page.tsx`, and the
`/insights/ebooks` listing, the Insights menu ("Ebooks", latest three), the Insights
hub filter and the sitemap all pick a new one up automatically.

**To add an ebook:**
1. Copy a file in `ebooks/books/`, rename it to the new slug and fill in the content.
2. Put the PDF at `public/ebooks/<slug>.pdf` (served from tizora.ai, so it is indexed
   under our domain) and set `pdf.pages` and `pdf.size`.
3. Upload the card (1920x1080), hero (1600x1400) and share (1200x630) images to
   Cloudinary under `ebooks/` and paste the URLs.
4. Add it to `ebooks/books/index.ts`, and add a line to `public/llms.txt`.

## Why the difference

- **Blogs/AI Trends**: same template every time → data-only files, aggregated
  automatically. Adding one is a content change, not a code change.
- **Case Studies**: bespoke layout every time → each needs its own page file
  anyway, so there's no aggregator to keep in sync.

## Adding the "On this page" outline to a case study

Add `<PageOutline />` inside `MainLayout`, then wrap each section you want listed:

```tsx
<PageOutline />
<HeroSplit ... />                       {/* hero: not wrapped, outline appears after it */}
<OutlineSection label="The challenge">
  <ContentSplit data={story.challenge} />
</OutlineSection>
```

Only wrapped sections are listed, in page order, so the outline does not depend on
heading text or section colours. On wide screens the content below the hero moves
right to leave a page-coloured gutter for the panel; phones get a "Contents" button.
Components take an optional `label` eyebrow (ContentSplit, FeatureGrid, ScrollReveal,
TechStack) so every section title looks consistent.

## Importing section components

Every section is exported from one barrel, so you never need the `Cxxx_` file names:

```tsx
import { HeroSplit, StatBand, ContentSplit, BenefitGrid, PageOutline, OutlineSection } from "@/components/sections";
```

Rules that keep sections working together:
- Use each section component once per page where you can; they are designed to alternate in look.
- Give card-style sections (`FeatureGrid`, `FeatureList`) the same number of bullets per card so cards stay even.
- Optional props (`label`, `author`, `readTime`, ...) are additive; leaving them out keeps the old look.
- Register new sections in `src/components/sections/index.ts` and in `src/app/playground/page.tsx` (`Heading id name`).
