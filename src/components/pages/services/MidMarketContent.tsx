'use client';

import { useRouter } from 'next/navigation';
import { MainLayout } from '@/components/layout';
import { HeroSplit } from '@/components/sections/C001_HeroSplit';
import { LogoTicker } from '@/components/sections/C031_LogoTicker';
import { C036_TextImage } from '@/components/sections/C036_TextImage';
import { OutcomeSlider } from '@/components/sections/C022_OutcomeSlider';
import { ServicesFromTabs } from '@/components/sections/C042_whatwebuild';
import { Layers, Cloud, Cpu, Workflow } from 'lucide-react';
import { QuoteBlock } from '@/components/sections/C014_QuoteBlock';
import { blogBentoCopy, getFeaturedBentoItems } from '@/data/pages/insights/relatedInsights';
import { GridBento } from '@/components/sections/C010_GridBento';
import { AccordionFAQ } from '@/components/sections/C008_AccordionFAQ';
import { BannerCTA } from '@/components/sections/C032_BannerCTA';
import { SummaryMeta } from '@/components/sections/C016_SummaryMeta';
import { ContentSplit } from '@/components/sections/C017_ContentSplit';
import { StoryCarousel } from '@/components/sections/C019_StoryCarousel';
import { getRelatedCaseStudies } from '@/data/pages/insights/case-studies/caseStudiesPageData';

import {
  heroSplitData,
  outcomesData,
  serviceListData,
  contentSplitApproachData,
  quoteData,
  faqData,
  ctaData,
  summaryMetaData,
  contentSplitData,
  storyCarouselData,
  textImageData,
} from '@/data/pages/services/midMarketPageData';

export function MidMarketContent() {
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

      <SummaryMeta data={summaryMetaData} />

      <OutcomeSlider
        data={{
          title: outcomesData.heading,
          items: outcomesData.outcomes.map((item) => ({
            number: item.metric,
            title: item.suffix,
            description: [item.description],
            footerTitle: item.label,
            footerLogo: ""
          }))
        }}
      />

      <ServicesFromTabs
        data={{
          label: serviceListData.tagTitle,
          title: serviceListData.heading,
          buttonText: "Talk to Sales",
          buttonAction: () => router.push('/contact'),
          tabs: [
            {
              id: "tab-1",
              icon: Layers,
              title: serviceListData.services[0].title,
              description: serviceListData.services[0].description,
              imageSrc: serviceListData.services[0].imageSrc,
              features: []
            },
            {
              id: "tab-2",
              icon: Cloud,
              title: serviceListData.services[1].title,
              description: serviceListData.services[1].description,
              imageSrc: serviceListData.services[1].imageSrc,
              features: []
            },
            {
              id: "tab-3",
              icon: Cpu,
              title: serviceListData.services[2].title,
              description: serviceListData.services[2].description,
              imageSrc: serviceListData.services[2].imageSrc,
              features: []
            },
            {
              id: "tab-4",
              icon: Workflow,
              title: serviceListData.services[3].title,
              description: serviceListData.services[3].description,
              imageSrc: serviceListData.services[3].imageSrc,
              features: []
            }
          ]
        }}
      />

      <ContentSplit data={contentSplitData} />

      <ContentSplit data={contentSplitApproachData} />

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
          buttonLink: ctaData.buttonLink,
          image: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789477278/Start_Your_Mid-Level_Business-_section.png"
        }}
      />
    </MainLayout>
  );
}
