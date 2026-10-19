import { trends } from './trends';
import { readingMinutes } from '@/lib/readingTime';

export * from './trendTypes';

export const seoData = {
  title: "AI Trends",
  description: "Tizora's perspective on emerging trends in AI engineering and enterprise adoption.",
  url: "https://www.tizora.ai/insights/ai-trends",
  image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop"
};

export const heroData = {
  tagTitle: "AI TRENDS",
  heading: "Where AI engineering is headed",
  description: "Perspectives and analysis from our team on the trends shaping enterprise AI."
};

// Each trend lives in its own file under ./trends/ — see trends/index.ts for
// how to add a new one. This file just aggregates them for the rest of the
// app; it should never need to grow past this re-export.
export const allTrends = trends;


export const trendGridData = {
  items: allTrends.map((t) => ({
    id: t.id,
    title: t.title,
    description: t.description,
    image: t.image,
    href: `/insights/ai-trends/${t.slug}`,
    category: t.category,
    date: t.date,
    author: t.author,
    readingTime: readingMinutes({ content: t.content, faqs: t.faqs }),
  })),
};
