'use client';

import { ShieldAlert } from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { JsonLd } from '@/components/common/JsonLd';
import { HeroSplit } from '@/components/sections/C001_HeroSplit';
import { StatBand } from '@/components/sections/C043_StatBand';
import InteractiveServicesList from '@/components/sections/C042_whatwebuild';
import { TechStack } from '@/components/sections/C039_TechStack';
import { FeatureList } from '@/components/sections/C021_FeatureList';
import { FeatureGrid } from '@/components/sections/C040_FeatureGrid';
import { AccordionFAQ } from '@/components/sections/C008_AccordionFAQ';
import { BannerCTA } from '@/components/sections/C032_BannerCTA';
import { CalloutCard, NudgePanel } from '@/components/sections/C045_LeadCallouts';
import { vaptShopifyAppsPageData as d } from '@/data/pages/cybersecurity/vaptShopifyAppsPageData';
import { buildTopicJsonLd } from '@/data/pages/topicPageSeo';

const jsonLd = buildTopicJsonLd({
  name: 'Shopify App VAPT & Security Assessment',
  data: d,
  keywords: ['Shopify App VAPT', 'Shopify App security', 'penetration testing', 'vulnerability assessment', 'OWASP Top 10'],
});

export function VAPTShopifyAppsContent() {
  return (
    <MainLayout>
      <JsonLd data={jsonLd} />

      <HeroSplit
        label={d.hero.label}
        title={d.hero.title}
        description={d.hero.description}
        buttonText={d.hero.buttonText}
        buttonHref="/contact"
        imageSrc={d.hero.imageSrc}
        animatedTitle
        animatedDescription
        compactTitle
      />

      <div className="w-full bg-background py-6 sm:py-8 border-b border-border/60">
        <p className="max-w-3xl mx-auto px-5 sm:px-8 text-[13px] sm:text-[14px] text-muted text-center">
          Security testing for Shopify App developers, SaaS companies, agencies,
          and technology providers.
        </p>
      </div>

      {d.hook && (
        <CalloutCard
          icon={ShieldAlert}
          eyebrow="Common situation"
          heading={d.hook.heading}
          lead={d.hook.lead}
          body={d.hook.body}
          variant="accent"
        />
      )}

      <StatBand tagTitle={d.stats.tagTitle} heading={d.stats.heading} stats={d.stats.items} />

      <TechStack
        title={d.framework.title}
        description={d.framework.description}
        categories={d.framework.categories}
        animatedTitle
        animatedDescription
        enhanced
      />

      <FeatureList data={d.deepDive} animatedText />

      <div className="bg-background pt-16">
        <InteractiveServicesList
          tagTitle="WHAT WE TEST"
          heading="Every layer of your Shopify app, tested."
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

      <FeatureGrid
        tagTitle={d.process.tagTitle}
        heading={d.process.heading}
        features={d.process.steps.map((step) => ({
          title: step.title,
          description: step.description,
          bullets: step.bullets,
          imageSrc: step.image,
        }))}
      />

      {d.preFormNudge && (
        <NudgePanel heading={d.preFormNudge.heading} body={d.preFormNudge.body} />
      )}

      <AccordionFAQ
        tagTitle={d.faq.tagTitle}
        heading={d.faq.heading}
        questions={d.faq.questions}
        animatedHeading
        hideContactCta
      />

      <BannerCTA data={d.cta} animatedText />
    </MainLayout>
  );
}
