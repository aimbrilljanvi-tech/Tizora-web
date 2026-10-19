'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MainLayout } from '@/components/layout/MainLayout';
import { ArticleGrid, ArticleFilterBar } from '@/components/articles';
import { formatIsoDate } from '@/lib/readingTime';
import {
  caseStudiesGrid,
  CASE_STUDY_INDUSTRIES,
} from '@/data/pages/insights/case-studies/caseStudiesPageData';

const SORT_LATEST = 'Latest';

function normalizeIndustryParam(param: string | null): string | null {
  if (!param) return null;
  const p = param.toLowerCase().trim().replace(/[-_]+/g, ' ');
  if (p === 'fintech' || p === 'finance' || p === 'financial services' || p === 'financial') {
    return 'Fintech';
  }
  if (p === 'automotive' || p === 'automotives' || p === 'parking' || p === 'parking logistic' || p === 'parking logistics' || p === 'parking & logistic' || p === 'parking & logistics') {
    return 'Parking';
  }
  if (p === 'retail' || p === 'retails' || p === 'ecommerce' || p === 'e commerce') {
    return 'eCommerce';
  }
  if (p === 'healthcare' || p === 'health' || p === 'medical') {
    return 'Healthcare';
  }
  if (p === 'aviation' || p === 'airport' || p === 'airports' || p === 'airline' || p === 'airlines') {
    return 'Aviation';
  }
  return CASE_STUDY_INDUSTRIES.find((ind) => ind.toLowerCase() === p) || null;
}

/**
 * Reads the `?industry=` filter from the URL. Reading the URL can only happen in the browser, so
 * the page wraps this in <Suspense> with <CaseStudiesView industryParam={null} /> as the fallback:
 * that unfiltered view is what gets written into the page's HTML, so the heading and every case
 * study link are there for search engines and AI crawlers that do not run JavaScript.
 */
export function CaseStudiesContent() {
  const searchParams = useSearchParams();
  return <CaseStudiesView industryParam={searchParams.get('industry')} />;
}

/** The listing itself: heading, industry and sort filters, and the card grid. */
export function CaseStudiesView({ industryParam }: { industryParam: string | null }) {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(() => normalizeIndustryParam(industryParam));
  const [activeSort, setActiveSort] = useState<string | null>(null);

  useEffect(() => {
    setActiveIndustry(normalizeIndustryParam(industryParam));
  }, [industryParam]);

  const filteredStudies = useMemo(() => {
    let studies = activeIndustry
      ? caseStudiesGrid.studies.filter((s) => s.industry === activeIndustry)
      : caseStudiesGrid.studies;

    if (activeSort === SORT_LATEST) {
      studies = [...studies].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return studies;
  }, [activeIndustry, activeSort]);

  // Same card as the other insights listings: industry pill, date, byline and reading time.
  const articles = useMemo(
    () =>
      filteredStudies.map((s) => ({
        id: s.id,
        title: s.title,
        description: s.description,
        image: s.image,
        imageAlt: s.imageAlt,
        href: s.link,
        category: s.industry,
        date: s.date ? formatIsoDate(s.date) : undefined,
        author: s.author,
        readingTime: s.readingTime,
      })),
    [filteredStudies],
  );

  return (
    <MainLayout>
      {/* Minimal Hero Header */}
      <div className="pt-32 pb-12 lg:pt-44 lg:pb-16 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-accent">✦</span>
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-primary">
              Case Studies
            </span>
          </div>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-light leading-[1.1] tracking-tight text-primary mb-5">
            Real Problems. Engineered Solutions.
          </h1>
          <p className="text-[16px] sm:text-[18px] text-muted leading-relaxed">
            See how Tizora delivers measurable impact through AI engineering, deterministic systems, and cloud architecture across industries.
          </p>
        </div>
      </div>

      {/* Industry + Sort Filter */}
      <ArticleFilterBar
        groups={[
          { label: 'Industry', options: [...CASE_STUDY_INDUSTRIES], active: activeIndustry, onChange: setActiveIndustry },
          { label: 'Sort', options: [SORT_LATEST], active: activeSort, onChange: setActiveSort, allLabel: 'Default' },
        ]}
        className="flex items-center justify-end gap-6 flex-wrap px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full pb-6 border-b border-border"
      />

      {/* Case Study Grid */}
      <ArticleGrid
        articles={articles}
        emptyMessage={activeIndustry ? `No case studies in "${activeIndustry}" yet.` : 'No case studies published yet. Check back soon.'}
      />
    </MainLayout>
  );
}
