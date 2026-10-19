'use client';

import { useRouter } from 'next/navigation';
import { HeroSplit } from '@/components/sections/C001_HeroSplit';
import { LogoTicker } from '@/components/sections/C031_LogoTicker';
import { C036_TextImage } from '@/components/sections/C036_TextImage';
import { OutcomeSlider } from '@/components/sections/C022_OutcomeSlider';
import { FeatureGrid } from '@/components/sections/C040_FeatureGrid';
import { ContentSplit } from '@/components/sections/C017_ContentSplit';
import { QuoteBlock } from '@/components/sections/C014_QuoteBlock';
import { blogBentoCopy, getFeaturedBentoItems } from '@/data/pages/insights/relatedInsights';
import { GridBento } from '@/components/sections/C010_GridBento';
import { AccordionFAQ } from '@/components/sections/C008_AccordionFAQ';
import { BannerCTA } from '@/components/sections/C032_BannerCTA';
import { StoryCarousel } from '@/components/sections/C019_StoryCarousel';
import { MainLayout } from '@/components/layout';
import { getRelatedCaseStudies } from '@/data/pages/insights/case-studies/caseStudiesPageData';
import {
  heroSplitData,
  outcomesData,
  serviceListData,
  contentSplitProcessData,
  quoteData,
  faqData,
  ctaData,
  storyCarouselData,
  textImageData,
} from '@/data/pages/services/startupMvpPageData';

export function StartupMvpContent() {
  const router = useRouter();

  return (
    <MainLayout>
      <HeroSplit
        label={heroSplitData.label}
        title={heroSplitData.title}
        description={heroSplitData.description}
        buttonText={heroSplitData.buttonText}
        buttonAction={() => router.push('/contact')}
        imageSrc={heroSplitData.imageSrc}
        imageAlt={heroSplitData.imageAlt}
      />

      <LogoTicker />

      <C036_TextImage {...textImageData} />

      <OutcomeSlider
        data={{
          title: outcomesData.heading,
          items: outcomesData.outcomes.map((item) => ({
            number: item.metric,
            title: item.suffix,
            description: [item.description],
            footerTitle: item.label,
            footerLogo: "",
            link: "/contact"
          }))
        }}
      />

      <FeatureGrid
        tagTitle={serviceListData.tagTitle}
        heading={serviceListData.heading}
        description={serviceListData.description}
        features={serviceListData.services.map((svc) => ({
          title: svc.title,
          description: svc.description,
          imageSrc: svc.imageSrc,
          linkHref: "/contact"
        }))}
      />

      <ContentSplit data={contentSplitProcessData} />

      <QuoteBlock
        data={{
          quote: quoteData.quote,
          author: quoteData.author,
          role: quoteData.role,
          image: quoteData.imageSrc
        }}
      />

      <GridBento {...blogBentoCopy} items={getFeaturedBentoItems(4)} />

      <StoryCarousel data={{ ...storyCarouselData, items: getRelatedCaseStudies() }} />

      <AccordionFAQ
        tagTitle={faqData.tagTitle}
        heading={faqData.heading}
        questions={faqData.faqs.map(faq => ({
          q: faq.question,
          a: faq.answer
        }))}
      />

      <BannerCTA
        data={{
          heading: ctaData.heading,
          description: ctaData.description,
          buttonText: ctaData.buttonText,
          buttonLink: ctaData.buttonLink
        }}
      />
    </MainLayout>
  );
}
