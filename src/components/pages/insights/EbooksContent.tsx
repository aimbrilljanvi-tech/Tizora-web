'use client';

import { useMemo, useState } from 'react';
import { MainLayout } from '@/components/layout';
import { ArticleGrid, ArticleFilterBar } from '@/components/articles';
import { Breadcrumb } from '@/components/common/Breadcrumb';

import { heroData, ebookGridData, EBOOK_TOPICS } from '@/data/pages/insights/ebooks/ebooksPageData';

export function EbooksContent() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const articles = useMemo(
    () =>
      ebookGridData.items.map((e) => ({
        id: e.id,
        title: e.title,
        description: e.description,
        image: e.image,
        imageAlt: e.imageAlt,
        href: e.link,
        category: `Ebook · ${e.topic}`,
        topic: e.topic,
        date: e.date,
      })),
    []
  );

  const filtered = useMemo(
    () => (activeTopic ? articles.filter((a) => a.topic === activeTopic) : articles),
    [articles, activeTopic]
  );

  return (
    <MainLayout>
      {/* Hero */}
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <Breadcrumb
            items={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights' }, { label: 'Ebooks' }]}
            className="mb-8"
          />
          <div className="flex items-center gap-2 mb-4">
            <span className="text-accent">✦</span>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">{heroData.tagTitle}</span>
          </div>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-light leading-[1.1] tracking-tight text-primary mb-6">
            {heroData.heading}
          </h1>
          <p className="text-[16px] sm:text-[18px] text-muted leading-relaxed">{heroData.description}</p>
        </div>
      </div>

      {/* Topic filter */}
      <ArticleFilterBar groups={[{ label: 'Topic', options: [...EBOOK_TOPICS], active: activeTopic, onChange: setActiveTopic }]} />

      {/* Ebooks grid */}
      <ArticleGrid
        articles={filtered}
        emptyMessage={activeTopic ? `No ${activeTopic} ebooks yet. Check back soon.` : 'No ebooks yet. Check back soon.'}
      />
    </MainLayout>
  );
}
