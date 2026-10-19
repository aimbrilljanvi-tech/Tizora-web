'use client';

import { useMemo, useState } from 'react';
import { MainLayout } from '@/components/layout';
import { ArticleGrid, ArticleFilterBar } from '@/components/articles';
import { heroData, trendGridData, AI_TREND_CATEGORIES } from '@/data/pages/insights/ai-trends/aiTrendsPageData';

const SORT_LATEST = 'Latest';

export function AITrendsContent() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [activeSort, setActiveSort] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    let items = activeTopic ? trendGridData.items.filter((t) => t.category === activeTopic) : trendGridData.items;
    if (activeSort === SORT_LATEST) {
      items = [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    // Card display stays clean — date/author/reading-time are used for sorting only, not shown on AI Trends cards.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return items.map(({ date, author, readingTime, ...rest }) => rest);
  }, [activeTopic, activeSort]);

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

      <ArticleFilterBar
        groups={[
          { label: 'Topic', options: [...AI_TREND_CATEGORIES], active: activeTopic, onChange: setActiveTopic },
          { label: 'Sort', options: [SORT_LATEST], active: activeSort, onChange: setActiveSort, allLabel: 'Default' },
        ]}
      />

      <ArticleGrid
        articles={filteredItems}
        emptyMessage={activeTopic ? `No trends in "${activeTopic}" yet.` : 'No AI trend articles yet. Check back soon.'}
      />
    </MainLayout>
  );
}
