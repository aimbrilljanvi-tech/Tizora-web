// Shared blog types + taxonomy. Lives in its own file (rather than
// blogPageData.ts) so individual post files under ./posts/ can import these
// types without creating a circular import back through blogPageData.ts.

// Fixed category taxonomy — kept stable so the filter always lists every
// category, not just the ones with a published post yet.
export const BLOG_CATEGORIES = [
  'Engineering',
  'AI & Machine Learning',
  'Product Strategy',
  'Culture & Team',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: { lead?: string; text: string }[] }
  | { type: 'image'; url: string; caption?: string };

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  type: 'blog';
  category: BlogCategory;
  title: string;
  description: string;
  image: string;
  /** Descriptive alt text for `image` (defaults to the title). */
  imageAlt?: string;
  /** Visible caption shown under the hero image. */
  imageCaption?: string;
  /** 1200x630 share image for og:image / twitter:image / schema (defaults to `image`). */
  ogImage?: string;
  bgColor: string;
  isImage: boolean;
  date: string; // human readable, e.g. "September 10, 2026"
  isoDate: string; // ISO 8601, for structured data
  modifiedIsoDate?: string; // last updated (ISO 8601); defaults to isoDate
  author: string;
  authorRole?: string;
  authorAvatar?: string;
  authorBio?: string;
  tags: string[];
  content: BlogContentBlock[];
  faqs: BlogFAQ[];
  readingTime?: number;
}
