import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { MainLayout } from '@/components/layout';
import { ShowcaseHero } from '@/components/sections/C024_ShowcaseHero';
import { LogoTicker } from '@/components/sections/C031_LogoTicker';
import { C036_TextImage } from '@/components/sections/C036_TextImage';
import { ScrollReveal } from '@/components/sections/C018_ScrollReveal';
import { CardGrid } from '@/components/sections/C004_CardGrid';
import { AgileTimeline } from '@/components/sections/C038_AgileTimeline';
import { StoryCarousel } from '@/components/sections/C019_StoryCarousel';
import { getRelatedCaseStudies } from '@/data/pages/insights/case-studies/caseStudiesPageData';
import { AccordionFAQ } from '@/components/sections/C008_AccordionFAQ';
import { BannerCTA } from '@/components/sections/C032_BannerCTA';

import {
  seoData,
  showcaseHeroData,
  scrollRevealData,
  cardGridData,
  tracingBeamData,
  storyCarouselData,
  faqData,
  ctaData,
  textImageData,
} from '@/data/pages/services/enterpriseSolutionsPageData';

export const metadata: Metadata = buildMetadata(seoData);

export default function EnterpriseSolutionsPage() {
  return (
    <MainLayout>
      <ShowcaseHero data={showcaseHeroData} />

      {/* Wrapping LogoTicker for spacing consistency */}
      <div className="border-b border-border/40 bg-surface">
        <LogoTicker />
      </div>

      <C036_TextImage {...textImageData} />

      <ScrollReveal data={scrollRevealData} />

      <div className="py-24 bg-background">
        <CardGrid
          tagTitle={cardGridData.tagTitle}
          heading={cardGridData.heading}
          studies={cardGridData.studies}
        />
      </div>

      <AgileTimeline
        tagTitle="ENGINEERING ROADMAP"
        heading="A Deterministic Framework for Enterprise Scale"
        steps={tracingBeamData.slice(0, 3).map((phase, idx) => ({
          number: String(idx + 1).padStart(2, '0'),
          badge: phase.badge,
          title: phase.title,
          description: phase.description,
          image: phase.image!,
          bullets: phase.deliverables,
        }))}
      />

      <StoryCarousel data={{ ...storyCarouselData, items: getRelatedCaseStudies() }} />

      <AccordionFAQ
        tagTitle={faqData.tagTitle}
        heading={faqData.heading}
        questions={faqData.questions.map((item) => ({
          q: item.question,
          a: item.answer
        }))}
      />

      <BannerCTA data={ctaData} />
    </MainLayout>
  );
}
