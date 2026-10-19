// Shared ebook types + taxonomy. Lives in its own file (rather than ebooksPageData.ts) so the
// individual ebook files under ./books/ can import these types without a circular import.

/** Fixed topic list, kept stable so the listing filter always shows every topic. */
export const EBOOK_TOPICS = ['Healthcare', 'Aviation', 'AI Engineering', 'Fintech', 'eCommerce'] as const;

export type EbookTopic = (typeof EBOOK_TOPICS)[number];

/** Body of a chapter. Rendered into the PDF; the web page shows chapter summaries only. */
export type EbookBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: { lead?: string; text: string }[] }
  /** Highlighted aside, e.g. "From our work" with a link to a case study. */
  | { type: 'callout'; title: string; text: string; link?: { label: string; href: string } };

export interface EbookChapter {
  title: string;
  /** One or two sentences, shown on the ebook page under "What's inside". */
  summary: string;
  body: EbookBlock[];
}

export interface EbookFAQ {
  question: string;
  answer: string;
}

export interface Ebook {
  id: string;
  /** URL slug: /insights/ebooks/<slug>. The PDF is served from /ebooks/<slug>.pdf. */
  slug: string;
  topic: EbookTopic;
  title: string;
  subtitle: string;
  /** Meta description and card text (under 160 characters). */
  description: string;
  /** Plain-text definition shown under the hero ("In short."). */
  inShort: string;
  /** 16:9 listing card artwork (1920x1080). */
  cardImage: string;
  cardImageAlt: string;
  /** Hero artwork for the ebook page (1600x1400). */
  heroImage: string;
  heroImageAlt: string;
  /** 1200x630 share image. */
  ogImage: string;
  /** Downloadable file. `pages` and `size` are shown on the button and in the details. */
  pdf: { url: string; pages: number; size: string };
  date: string; // human readable, e.g. "October 15, 2026"
  isoDate: string; // ISO 8601
  modifiedIsoDate?: string;
  author: string;
  /** Who should read it, shown in the details list. */
  audience: string;
  /** "What you'll learn": short takeaways. */
  learn: { title: string; text: string }[];
  chapters: EbookChapter[];
  faqs: EbookFAQ[];
  /** Case studies to read next (paths under /insights/case-studies). */
  related: { title: string; description: string; href: string; image: string; imageAlt: string; linkLabel: string }[];
  keywords: string[];
  /** Small print shown in the PDF and on the page, e.g. "This guide is not legal advice." */
  notice?: string;
}
