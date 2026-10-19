'use client';

import { useMemo, useState } from 'react';
import { MainLayout } from '@/components/layout';
import { ArticleGrid, ArticleFilterBar } from '@/components/articles';

import { heroData, blogGridData, BLOG_CATEGORIES } from '@/data/pages/insights/blogs/blogPageData';

const SORT_LATEST = 'Latest';

export function BlogsContent() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSort, setActiveSort] = useState<string | null>(null);

  const articles = useMemo(
    () =>
      blogGridData.studies.map((b) => ({
        id: b.id,
        title: b.title,
        description: b.description,
        image: b.image,
        imageAlt: b.imageAlt,
        href: b.link,
        category: b.category,
        date: b.date,
        author: b.author,
        readingTime: b.readingTime,
      })),
    []
  );

  const filteredArticles = useMemo(() => {
    let list = activeCategory ? articles.filter((a) => a.category === activeCategory) : articles;
    if (activeSort === SORT_LATEST) {
      list = [...list].sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
    }
    return list;
  }, [articles, activeCategory, activeSort]);

  return (
    <MainLayout>
      {/* Hero Section */}
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

      {/* Category + Sort Filter */}
      <ArticleFilterBar
        groups={[
          { label: 'Category', options: [...BLOG_CATEGORIES], active: activeCategory, onChange: setActiveCategory },
          { label: 'Sort', options: [SORT_LATEST], active: activeSort, onChange: setActiveSort, allLabel: 'Default' },
        ]}
      />

      {/* Blogs Grid */}
      <ArticleGrid
        articles={filteredArticles}
        emptyMessage={activeCategory ? `No posts in "${activeCategory}" yet.` : 'No blog posts yet. Check back soon.'}
      />
    </MainLayout>
  );
}
