// Shared AI Trends types + taxonomy. Lives in its own file (rather than
// aiTrendsPageData.ts) so individual trend files under ./trends/ can import
// these types without creating a circular import back through
// aiTrendsPageData.ts.

export type TrendContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: { lead?: string; text: string }[] }
  | { type: 'image'; url: string; caption?: string };

export interface TrendFAQ {
  question: string;
  answer: string;
}

// Fixed AI Trends taxonomy — every entry's `category` must be one of these.
export const AI_TREND_CATEGORIES = [
  'Agentic AI',
  'Model Infrastructure & Ops',
  'Enterprise Adoption',
  'Regulation & Compliance',
  'Research',
] as const;

export type AITrendCategory = (typeof AI_TREND_CATEGORIES)[number];

export interface AITrendItem {
  id: string;
  slug: string;
  category: AITrendCategory;
  title: string;
  description: string; // meta description / card excerpt
  image: string;
  date: string; // human readable
  isoDate: string; // ISO 8601 for structured data
  modifiedIsoDate?: string; // last updated (ISO 8601); defaults to isoDate
  author: string;
  authorRole?: string;
  tags: string[]; // SEO/AEO keyword tags
  content: TrendContentBlock[];
  faqs: TrendFAQ[];
}
