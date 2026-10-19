import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { MainLayout } from '@/components/layout';
import { JsonLd } from '@/components/common/JsonLd';
import { HeroSplit } from '@/components/sections/C001_HeroSplit';
import { SummaryMeta } from '@/components/sections/C016_SummaryMeta';
import { StatBand } from '@/components/sections/C043_StatBand';
import { TechStack } from '@/components/sections/C039_TechStack';
import InteractiveServicesList from '@/components/sections/C042_whatwebuild';
import { ContentSplit } from '@/components/sections/C017_ContentSplit';
import { FeatureGrid } from '@/components/sections/C040_FeatureGrid';
import { AccordionFAQ } from '@/components/sections/C008_AccordionFAQ';
import { BannerCTA } from '@/components/sections/C032_BannerCTA';
import { dpdpCompliancePageData as d } from '@/data/pages/compliance/dpdpCompliancePageData';
import { buildTopicJsonLd } from '@/data/pages/topicPageSeo';

const jsonLd = buildTopicJsonLd({
  name: 'DPDP Act Compliance',
  data: d,
  keywords: ['DPDP Act', 'India data protection', 'data privacy compliance', 'consent management', 'data fiduciary'],
});

export const metadata: Metadata = buildMetadata(d.seo);

export default function DPDPCompliancePage() {
  return (
    <MainLayout>
      <JsonLd data={jsonLd} />

      <HeroSplit label={d.hero.label} title={d.hero.title} description={d.hero.description} buttonText={d.hero.buttonText} buttonHref="/contact" imageSrc={d.hero.imageSrc} animatedTitle animatedDescription compactTitle />

      <SummaryMeta data={d.summary} animatedTitle animatedParagraph />

      <StatBand tagTitle={d.stats.tagTitle} heading={d.stats.heading} stats={d.stats.items} />

      <TechStack title={d.framework.title} description={d.framework.description} categories={d.framework.categories} animatedTitle animatedDescription enhanced />

      <div className="bg-background pt-16">
        <InteractiveServicesList
          tagTitle="OUR APPROACH"
          heading="What DPDP compliance engineering covers."
          items={d.pillars}
          background="#f6f6f6"
          activeNumberColor="#171716"
          inactiveNumberColor="#c4c3bd"
          activeTitleColor="#171716"
          inactiveTitleColor="#c4c3bd"
          descriptionColor="#4a4a48"
          borderColor="#e5e5e5"
          columnGap={32}
          rowGap={16}
          listPadding="1rem"
          heightVh={80}
        />
      </div>

      {d.statement && (
        <ContentSplit
          data={{
            label: 'THE GAP',
            title: d.statement.title,
            paragraphs: d.statement.bullets,
            image: d.statement.image,
            dark: false,
            reverse: false,
          }}
          animatedText
        />
      )}

      <FeatureGrid
        tagTitle={d.process.tagTitle}
        heading={d.process.heading}
        features={d.process.steps.map((step) => ({
          title: step.title,
          description: step.description,
          imageSrc: step.image,
        }))}
      />

      <AccordionFAQ tagTitle={d.faq.tagTitle} heading={d.faq.heading} questions={d.faq.questions} animatedHeading />

      <BannerCTA data={d.cta} animatedText />
    </MainLayout>
  );
}
