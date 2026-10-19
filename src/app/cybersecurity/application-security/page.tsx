import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { MainLayout } from '@/components/layout';
import { JsonLd } from '@/components/common/JsonLd';
import { HeroSplit } from '@/components/sections/C001_HeroSplit';
import { StatBand } from '@/components/sections/C043_StatBand';
import InteractiveServicesList from '@/components/sections/C042_whatwebuild';
import { FeatureList } from '@/components/sections/C021_FeatureList';
import { TechStack } from '@/components/sections/C039_TechStack';
import { QuoteBlock } from '@/components/sections/C014_QuoteBlock';
import { FeatureGrid } from '@/components/sections/C040_FeatureGrid';
import { AccordionFAQ } from '@/components/sections/C008_AccordionFAQ';
import { BannerCTA } from '@/components/sections/C032_BannerCTA';
import { applicationSecurityPageData as d } from '@/data/pages/cybersecurity/applicationSecurityPageData';
import { buildTopicJsonLd } from '@/data/pages/topicPageSeo';

const jsonLd = buildTopicJsonLd({
  name: 'Application Security',
  data: d,
  keywords: ['application security', 'penetration testing', 'secure code review', 'OWASP Top 10', 'DevSecOps'],
});

export const metadata: Metadata = buildMetadata(d.seo);

export default function ApplicationSecurityPage() {
  return (
    <MainLayout>
      <JsonLd data={jsonLd} />

      <HeroSplit label={d.hero.label} title={d.hero.title} description={d.hero.description} buttonText={d.hero.buttonText} buttonHref="/contact" imageSrc={d.hero.imageSrc} animatedTitle animatedDescription compactTitle />

      <div className="bg-background pt-16">
        <InteractiveServicesList
          tagTitle="WHAT WE DO"
          heading="Four layers of defense, working together."
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

      <StatBand tagTitle={d.stats.tagTitle} heading={d.stats.heading} stats={d.stats.items} />

      <FeatureList data={d.deepDive} animatedText />

      <TechStack title={d.framework.title} description={d.framework.description} categories={d.framework.categories} animatedTitle animatedDescription enhanced />

      {d.quote && <QuoteBlock data={d.quote} animatedQuote />}

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
