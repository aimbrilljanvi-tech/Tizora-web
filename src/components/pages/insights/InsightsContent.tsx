'use client';

import { useMemo, useState } from 'react';
import { MainLayout } from '@/components/layout';
import { ArticleGrid, ArticleFilterBar, ArticleCardData } from '@/components/articles';
import { formatIsoDate } from '@/lib/readingTime';
import { heroData } from '@/data/pages/insights/insightsPageData';
import { caseStudiesGrid, CASE_STUDY_INDUSTRIES } from '@/data/pages/insights/case-studies/caseStudiesPageData';
import { blogGridData } from '@/data/pages/insights/blogs/blogPageData';
import { trendGridData } from '@/data/pages/insights/ai-trends/aiTrendsPageData';
import { ebookGridData } from '@/data/pages/insights/ebooks/ebooksPageData';

const FALLBACK_IMAGE = 'https://res.cloudinary.com/cjzo6qye/image/upload/w_800,h_600,c_fill,q_80/v1788860885/og.png';

const TYPE_CASE_STUDY = 'Case Studies';
const TYPE_BLOG = 'Blogs';
const TYPE_AI_TREND = 'AI Trends';
const TYPE_EBOOK = 'Ebooks';
const SORT_LATEST = 'Latest';

// The Topic filter lists industries only (the same fixed list the case studies use).
const TOPIC_OPTIONS = [...CASE_STUDY_INDUSTRIES];

const TYPE_OPTIONS = [TYPE_CASE_STUDY, TYPE_BLOG, TYPE_AI_TREND, TYPE_EBOOK];

interface InsightEntry {
  article: ArticleCardData;
  type: string;
  topic: string | null; // the underlying industry/category, kept apart from the type-badge shown on the card
  date: string | null; // used for "Latest" sorting only
}

export function InsightsContent() {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [activeSort, setActiveSort] = useState<string | null>(null);

  const entries: InsightEntry[] = useMemo(() => {
    const caseStudies: InsightEntry[] = caseStudiesGrid.studies.map((s) => ({
      type: TYPE_CASE_STUDY,
      topic: s.industry || null,
      date: s.date || null,
      article: {
        id: `case-study-${s.id}`,
        title: typeof s.title === 'string' ? s.title : s.industry || '',
        description: s.description,
        image: s.image || FALLBACK_IMAGE,
        imageAlt: s.imageAlt,
        href: s.link || '/insights/case-studies',
        category: TYPE_CASE_STUDY,
        date: s.date ? formatIsoDate(s.date) : undefined,
        author: s.author,
        readingTime: s.readingTime,
      },
    }));

    const blogs: InsightEntry[] = blogGridData.studies.map((b) => ({
      type: TYPE_BLOG,
      topic: b.category || null,
      date: b.date || null,
      article: {
        id: `blog-${b.id}`,
        title: b.title,
        description: b.description,
        image: b.image || FALLBACK_IMAGE,
        imageAlt: b.imageAlt,
        href: b.link,
        category: TYPE_BLOG,
        date: b.date,
        author: b.author,
        readingTime: b.readingTime,
      },
    }));

    // AI Trend cards intentionally omit date/author/reading-time (kept for
    // sorting via the entry-level `date` field, not shown on the card itself).
    const trends: InsightEntry[] = trendGridData.items.map((t) => ({
      type: TYPE_AI_TREND,
      topic: t.category || null,
      date: t.date || null,
      article: {
        id: `trend-${t.id}`,
        title: t.title,
        description: t.description,
        image: t.image || FALLBACK_IMAGE,
        href: t.href,
        category: TYPE_AI_TREND,
        date: t.date,
        author: t.author,
        readingTime: t.readingTime,
      },
    }));

    const ebooks: InsightEntry[] = ebookGridData.items.map((e) => ({
      type: TYPE_EBOOK,
      topic: e.topic,
      date: e.isoDate,
      article: {
        id: `ebook-${e.id}`,
        title: e.title,
        description: e.description,
        image: e.image || FALLBACK_IMAGE,
        imageAlt: e.imageAlt,
        href: e.link,
        category: 'Ebook',
        date: e.date,
      },
    }));

    return [...caseStudies, ...blogs, ...trends, ...ebooks].sort(
      (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
    );
  }, []);

  const filteredArticles = useMemo(() => {
    let list = entries
      .filter((e) => (activeType ? e.type === activeType : true))
      .filter((e) => (activeTopic ? e.topic === activeTopic : true));

    if (activeSort === SORT_LATEST) {
      list = [...list].sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
    }

    return list.map((e) => e.article);
  }, [entries, activeType, activeTopic, activeSort]);

  return (
    <MainLayout>
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-accent">✦</span>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
              {heroData.tagTitle}
            </span>
          </div>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-light leading-[1.1] tracking-tight text-primary mb-6">
            {heroData.heading}
          </h1>
          <p className="text-[16px] sm:text-[18px] text-muted leading-relaxed">
            {heroData.description}
          </p>
        </div>
      </div>

      {/* Type + Topic + Sort Filter */}
      <ArticleFilterBar
        groups={[
          {
            label: 'Type',
            options: TYPE_OPTIONS,
            active: activeType,
            onChange: (v) => { setActiveType(v); setActiveTopic(null); },
          },
          {
            label: 'Topic',
            options: TOPIC_OPTIONS,
            active: activeTopic,
            onChange: setActiveTopic,
          },
          {
            label: 'Sort',
            options: [SORT_LATEST],
            active: activeSort,
            onChange: setActiveSort,
            allLabel: 'Default',
          },
        ]}
      />

      <ArticleGrid
        articles={filteredArticles}
        emptyMessage="No content published yet. Check back soon."
      />
    </MainLayout>
  );
}
