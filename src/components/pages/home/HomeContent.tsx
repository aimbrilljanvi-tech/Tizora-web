import UltimateHero from '@/components/sections/C037_UltimateHero';
import { ChatHero } from '@/components/sections/C041_ChatHero';
import { LogoTicker } from '@/components/sections/C031_LogoTicker';
import { ContentIntro } from '@/components/sections/C003_ContentIntro';
import { GridBento } from '@/components/sections/C010_GridBento';
import { CardGrid } from '@/components/sections/C004_CardGrid';
import { BenefitGrid } from '@/components/sections/C023_BenefitGrid';
import { TechStackTabs } from '@/components/sections/C046_TechStackTabs';
import { WhatWeBuildCard } from '@/components/sections/C047_WhatWeBuildCard';
import { TestimonialCarousel } from '@/components/sections/C007_TestimonialCarousel';
import { AccordionFAQ } from '@/components/sections/C008_AccordionFAQ';
import { BannerCTA } from '@/components/sections/C032_BannerCTA';
import { MainLayout } from '@/components/layout';
import { HowWeWorkTabs } from '@/components/pages/home/HowWeWorkTabs';
import { TESTIMONIALS } from '@/data/common/constants';
import { blogBentoCopy, getFeaturedBentoItems } from '@/data/pages/insights/relatedInsights';
import {
  aboutData,
  caseStudiesData,
  servicesData,
  sixPillarsData,
  techStackData,
  whyTizoraData,
  faqData,
  bannerCTAData,
} from '@/data/pages/home/homeData';

const blogBentoItems = getFeaturedBentoItems(4);

export function HomeContent() {
  return (
    <MainLayout>
      {/* 1. Hook */}
      <ChatHero />

      {/* 2. Trust -- instant social proof via recognizable logos */}
      <LogoTicker />

      {/* 3. Story -- who we are */}
      <ContentIntro
        tagTitle={aboutData.tagTitle}
        heading={aboutData.heading}
        paragraph1={aboutData.paragraph1}
        buttonText={aboutData.buttonText}
        buttonHref={aboutData.buttonHref}
        imageSmall={aboutData.imageSmall}
        imageLarge={aboutData.imageLarge}
      />

      {/* 4. Relevance -- which industries/sectors we serve */}
      <div className="pt-16 sm:pt-24 bg-transparent">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 mb-8 text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4" style={{ color: '#003640' }}>
            Industries We Serve
          </h2>
          <p className="text-black/70 text-lg md:text-xl max-w-2xl mx-auto">
            Delivering robust, AI-native engineering across diverse sectors.
          </p>
        </div>
      </div>
      <UltimateHero />

      {/* 5. Why us -- differentiators, once the reader knows who we are and
          who we serve. */}
      <GridBento
        title={whyTizoraData.title}
        variant="solid"
        items={whyTizoraData.items}
        compact
      />

      {/* 6. Proof -- concrete case studies */}
      <CardGrid
        tagTitle={caseStudiesData.tagTitle}
        heading={caseStudiesData.heading}
        buttonText={caseStudiesData.buttonText}
        buttonHref={caseStudiesData.buttonHref}
        studies={caseStudiesData.studies as any}
        className="bg-background pt-12 sm:pt-20 lg:pt-24 pb-12 sm:pb-20 lg:pb-24 md:mx-[40px] md:[&>div]:!px-[48px] [&>div]:!max-w-none"
      />

      {/* 7. Capabilities -- what we're good at, before the specific offer */}
      <BenefitGrid data={sixPillarsData} bordered />

      {/* 8. Offer -- how you can actually engage us */}
      <div className="pt-10 sm:pt-[60px] px-5 sm:px-8 lg:px-12 pb-16 sm:pb-[100px] bg-[#f6f6f6]">
        <div className="max-w-7xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-black/5 mb-6">
            <span className="text-black text-[11px] font-semibold uppercase tracking-wider">
              {servicesData.tagTitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight whitespace-pre-line" style={{ color: '#003640' }}>
            {servicesData.heading}
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <WhatWeBuildCard
            items={servicesData.items.map(item => ({
              number: item.num,
              title: item.title,
              description: item.description,
              tags: item.tags,
              whenToUse: item.whenToUse,
              image: { src: item.img, alt: item.title }
            }))}
            background="#f6f6f6"
            accentColor="#556B2F"
            titleColor="#ffffff"
            descriptionColor="#000000"
            borderColor="rgba(31, 39, 16, 0.15)"
          />
        </div>
      </div>

      {/* 9. Technical depth -- the stack behind the offer */}
      <TechStackTabs
        title={techStackData.title}
        description={techStackData.description}
        categories={techStackData.categories}
      />

      {/* 10. Process -- sets expectations for engagement */}
      <HowWeWorkTabs />

      {/* 11. Social proof -- right before objection handling/CTA */}
      <TestimonialCarousel
        tagTitle="Testimonials"
        heading="Trusted by Teams Worldwide"
        description="Join thousands of teams globally who rely on our solutions to collaborate, scale, and succeed."
        testimonials={TESTIMONIALS}
      />

      {/* 12. Objection handling */}
      <AccordionFAQ
        tagTitle={faqData.tagTitle}
        heading={faqData.heading}
        questions={faqData.questions}
      />

      {/* 13. Content marketing / thought leadership */}
      <div className="mt-8">
        <GridBento {...blogBentoCopy} items={blogBentoItems} />
      </div>

      {/* 14. Final conversion ask */}
      <div className="mt-[5vh]">
        <BannerCTA data={bannerCTAData} />
      </div>
    </MainLayout>
  );
}
