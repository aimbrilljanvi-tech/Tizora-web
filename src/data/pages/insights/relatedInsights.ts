import { ArticleCardData } from '../../../components/articles';
import { BentoItem } from '../../../components/sections/C010_GridBento';
import { caseStudiesGrid } from './case-studies/caseStudiesPageData';
import { blogGridData } from './blogs/blogPageData';
import { trendGridData } from './ai-trends/aiTrendsPageData';

import { formatIsoDate } from '@/lib/readingTime';

const FALLBACK_IMAGE = 'https://res.cloudinary.com/cjzo6qye/image/upload/w_800,h_600,c_fill,q_80/v1788860885/og.png';

interface AllInsightEntry {
  article: ArticleCardData;
  topic: string | null;
}

function allInsightEntries(): AllInsightEntry[] {
  const caseStudies: AllInsightEntry[] = caseStudiesGrid.studies.map((s) => ({
    topic: s.industry || null,
    article: {
      id: `case-study-${s.id}`,
      title: typeof s.title === 'string' ? s.title : s.industry || '',
      description: s.description,
      image: s.image || FALLBACK_IMAGE,
      imageAlt: s.imageAlt,
      href: s.link || '/insights/case-studies',
      category: 'Case Studies',
      date: s.date ? formatIsoDate(s.date) : undefined,
      author: s.author,
      readingTime: s.readingTime,
    },
  }));

  const blogs: AllInsightEntry[] = blogGridData.studies.map((b) => ({
    topic: b.category || null,
    article: {
      id: `blog-${b.id}`,
      title: b.title,
      description: b.description,
      image: b.image || FALLBACK_IMAGE,
      imageAlt: b.imageAlt,
      href: b.link,
      category: 'Blogs',
      date: b.date,
      author: b.author,
      readingTime: b.readingTime,
    },
  }));

  const trends: AllInsightEntry[] = trendGridData.items.map((t) => ({
    topic: t.category || null,
    article: {
      id: `trend-${t.id}`,
      title: t.title,
      description: t.description,
      image: t.image || FALLBACK_IMAGE,
      href: t.href,
      category: 'AI Trends',
      date: t.date,
      author: t.author,
      readingTime: t.readingTime,
    },
  }));

  return [...caseStudies, ...blogs, ...trends];
}

/**
 * Related-articles picker used at the bottom of every article page.
 * Excludes the current article, prioritizes same-topic entries, then
 * fills the rest from across all Insights content so the section is
 * never empty even in a thin content category.
 */
export function getRelatedArticles(excludeId: string, topic: string | null, limit = 3): ArticleCardData[] {
  const entries = allInsightEntries().filter((e) => e.article.id !== excludeId);

  const sameTopic = topic ? entries.filter((e) => e.topic === topic) : [];
  const rest = entries.filter((e) => !sameTopic.includes(e));

  return [...sameTopic, ...rest].slice(0, limit).map((e) => e.article);
}

/**
 * Homepage/industry-page "Blog & Insights" bento teaser. Leads with actual
 * blog posts, then fills any remaining slots from case studies and AI trends
 * so the grid stays visually full even while the blog is thin on content —
 * a bento tile sized for a lone item otherwise leaves a bare gap next to it.
 */
function getFeaturedInsights(limit: number): ArticleCardData[] {
  const entries = allInsightEntries();
  const blogs = entries.filter((e) => e.article.category === 'Blogs');
  // Feature the newest case study here in place of Mobile Banking, so the teaser stays current.
  const featured = entries.find((e) => e.article.id === 'case-study-cs-skin-analysis');
  const rest = entries.filter(
    (e) => e.article.category !== 'Blogs' && e.article.id !== 'case-study-cs-mobile-banking' && e !== featured
  );
  const ordered = featured ? [featured, ...rest] : rest;
  return [...blogs, ...ordered].slice(0, limit).map((e) => e.article);
}

function bentoSpanClass(index: number, total: number): string {
  if (total === 1) return 'md:col-span-2 lg:col-span-3';
  if (total === 3) return 'md:col-span-1';
  // 2 items, or the standard 4: first (and 4th, if present) run wide.
  return index === 0 || index === 3 ? 'md:col-span-2' : 'md:col-span-1';
}

/** Heading copy for the "Blog & Insights" bento, shared by every page that shows it. */
export const blogBentoCopy = {
  title: "Blog & Insights",
  description: "Read our latest thoughts, engineering deep dives, and insights into the future of AI.",
};

export function getFeaturedBentoItems(limit = 4): BentoItem[] {
  const items = getFeaturedInsights(limit);
  return items.map((item, index) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    imageSrc: item.image,
    backgroundColor: '#111111',
    textColor: '#FFFFFF',
    spanClass: bentoSpanClass(index, items.length),
    link: item.href,
  }));
}
