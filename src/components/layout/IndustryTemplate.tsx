'use client';

import React from 'react';
import { MainLayout } from './MainLayout';
import { HeroSplit } from '../sections/C001_HeroSplit';
import { SummaryMeta } from '../sections/C016_SummaryMeta';
import InteractiveServicesList from '../sections/C042_whatwebuild';
import { QuoteBlock } from '../sections/C014_QuoteBlock';
import { FeatureList } from '../sections/C021_FeatureList';
import { AgileTimeline } from '../sections/C038_AgileTimeline';
import { ContentSplit } from '../sections/C017_ContentSplit';
import { ScrollReveal } from '../sections/C018_ScrollReveal';
import { StoryCarousel } from '../sections/C019_StoryCarousel';
import { BannerCTA } from '../sections/C032_BannerCTA';
import { RelatedCaseStudy } from '../sections/C050_RelatedCaseStudy';
import { InShort } from '../sections/C057_InShort';
import { BenefitGrid } from '../sections/C023_BenefitGrid';
import { CardGrid } from '../sections/C004_CardGrid';
import { AccordionFAQ } from '../sections/C008_AccordionFAQ';
import { ComparisonTable } from '../sections/C058_ComparisonTable';
import { C036_TextImage } from '../sections/C036_TextImage';
import { ProcessUI } from '../sections/C056_ProcessUI';
import type { CaseStudyIndustry } from '../../data/pages/insights/case-studies/caseStudiesPageData';
import { getRelatedCaseStudies } from '../../data/pages/insights/case-studies/caseStudiesPageData';
import { industryBreadcrumbItems } from '../../data/pages/industries/industryBreadcrumbs';

export interface IndustryTemplateProps {
  name: string;
  /** Last item of the "Home › Industries › …" breadcrumb (defaults to `name`). */
  breadcrumbLabel?: string;
  /** Case-study industry to link to from a banner near the end of the page. */
  caseStudyIndustry?: CaseStudyIndustry;
  data: any;
}

export function IndustryTemplate({ name, breadcrumbLabel, caseStudyIndustry, data }: IndustryTemplateProps) {
  // Every section label, heading and CTA can be overridden per industry via data.labels.
  const L = data.labels || {};
  const titleString = `${data.topbar.line1} ${data.topbar.line2} ${data.topbar.line3}`;

  const whatWeDoItems = (data.steps || []).map((s: any) => ({
    number: s.n,
    title: s.title,
    description: s.text,
    image: s.image ? { src: s.image.src, alt: s.image.alt } : undefined
  }));


  const methodology: {
    label: string;
    title: string;
    tabs: { id: string; title: string; description: string; imageSrc: string }[];
  } = data.interactiveTabs || {
    label: "METHODOLOGY",
    title: "The Tizora standard.",
    tabs: [
      { id: "t1", title: "Security First", description: "Data is isolated and encrypted.", imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200" },
      { id: "t2", title: "High Performance", description: "Optimized for global scale.", imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200" },
      { id: "t3", title: "Clean Code", description: "Deterministic, typed, and tested.", imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200" },
    ],
  };

  return (
    <MainLayout>
      {/* Hero */}
      <HeroSplit
        breadcrumb={industryBreadcrumbItems(breadcrumbLabel || name)}
        label={L.heroLabel || "INDUSTRY OVERVIEW"}
        title={titleString}
        description={data.topbar.description}
        buttonText={data.topbar.buttonText || "Let's talk"}
        imageSrc={data.heroImage}
        imageAlt={data.heroImageAlt}
        buttonHref={data.topbar.buttonHref || "/contact"}
        secondaryButtonText={data.topbar.secondaryButtonText}
        secondaryButtonHref={data.topbar.secondaryButtonHref}
        compactTitle
      />

      {/* Optional plain-text definition right under the hero */}
      {data.inShort && <InShort text={data.inShort} />}

      {/* Summary */}
      <SummaryMeta 
        data={{
          title: data.about.heading,
          paragraph: data.about.description,
          items: L.summary?.items,
          metadata: {
            labels: L.summary?.labels,
            location: L.summary?.location || "Global",
            period: L.summary?.period || "Continuous",
            industry: name,
            services: L.summary?.services || ["Architecture", "Engineering", "AI Modeling"]
          }
        }}
      />

      {/* What we do: a numbered process (ProcessUI), linked capability cards, or the interactive list */}
      {data.pipeline ? (
        <div className="bg-background">
          <ProcessUI heading={data.pipeline.heading} description={data.pipeline.description} steps={data.pipeline.steps} maxVisible={4} imageFit={data.pipeline.imageFit} />
        </div>
      ) : data.capabilities ? (
        <BenefitGrid data={data.capabilities} bordered columns={data.capabilities.items.length === 4 ? 2 : 3} />
      ) : (
      <div className="bg-background pt-16">
        <InteractiveServicesList
          tagTitle={L.approach?.tagTitle || "OUR APPROACH"}
          heading={L.approach?.heading || `How we build for ${name}.`}
          items={whatWeDoItems}
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
      )}

      {/* Customer Feedback */}
      {data.quote !== null && (
      <QuoteBlock
        data={data.quote || {
          quote: `Tizora's approach to ${name} is fundamentally different. They didn't just build software; they engineered a competitive advantage that reshaped our entire operational model.`,
          author: "EVP of Engineering",
          role: "Enterprise Partner",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",
          companyName: "Global 500 Organization"
        }}
      />
      )}

      {/* Service Benefits */}
      <FeatureList
        data={data.features || {
          label: "CORE CAPABILITIES",
          title: "Engineering beyond standard paradigms.",
          description: `Our solutions for ${name} are built on a foundation of rigorous software engineering, deterministic logic, and high-availability architecture.`,
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000",
          features: [
            { icon: "01", title: "Zero-Trust Architecture", description: "Security is built into the application layer, not bolted on afterwards." },
            { icon: "02", title: "Algorithmic Velocity", description: "Micro-second latency and uncompromised throughput under peak loads." },
            { icon: "03", title: "Predictive Intelligence", description: "Deploying AI models that anticipate requirements before they occur." }
          ]
        }}
      />
      {/* Optional comparison table, right after the capabilities */}
      {data.comparison && <ComparisonTable {...data.comparison} />}

      <AgileTimeline
        tagTitle={data.agileTimeline?.tagTitle || "DELIVERY"}
        description={data.agileTimeline?.description}
        heading={data.agileTimeline?.heading || `How we deploy ${name} solutions.`}
        steps={data.agileTimeline?.steps || [
          { number: "01", title: "Discovery", description: "Mapping legacy dependencies.", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800" },
          { number: "02", title: "Architecture", description: "Designing the deterministic system.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" },
          { number: "03", title: "Engineering", description: "Writing the bespoke solution.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" },
          { number: "04", title: "Deployment", description: "Zero-downtime rolling releases.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800" }
        ]}
      />

      {/* Case studies as full cards, or one featured case study, otherwise the industry banner */}
      {data.caseStudyCards ? (
        <CardGrid {...data.caseStudyCards} />
      ) : data.caseStudySpotlight ? (
        <ContentSplit spacing="reduced" data={data.caseStudySpotlight} />
      ) : caseStudyIndustry && (
        <div className="bg-background py-8 sm:py-12">
          <RelatedCaseStudy industry={caseStudyIndustry} />
        </div>
      )}

      {/* Optional vendor checklist, after the case studies */}
      {data.vendorChecklist && <BenefitGrid data={data.vendorChecklist} bordered />}

      {/* Scroll Reveal Section ("Advanced Capabilities…") */}
      {data.scrollReveal && <ScrollReveal data={data.scrollReveal} />}

      {/* Methodology: grey gap above and below, tighter padding inside the cream band */}
      <div className="bg-background py-10 sm:py-16">
        <ContentSplit
          spacing="reduced"
          data={{
            label: methodology.label,
            title: methodology.title,
            paragraphs: methodology.tabs.map((t) => (
              <span key={t.id}>
                <span className="text-primary">{t.title}:</span> {t.description}
              </span>
            )),
            image: methodology.tabs[0].imageSrc,
            imageAlt: methodology.tabs[0].title,
            dark: false,
            reverse: true,
          }}
        />
      </div>

      {/* Optional related work cards (replace the generic carousel) */}
      {data.relatedWork && <CardGrid {...data.relatedWork} />}

      {/* Case studies carousel (skipped when the page already shows its own case study or related cards) */}
      {!data.caseStudyCards && !data.relatedWork && (
      <StoryCarousel
        data={{
          title: L.caseStudies?.title || "Real-world engineering.",
          description: L.caseStudies?.description || "See how we've solved complex problems for our partners.",
          items: getRelatedCaseStudies(),
        }}
      />
      )}

      {/* Optional "Who this is for" block, before the FAQ */}
      {data.audience && <C036_TextImage {...data.audience} />}

      {/* Optional FAQ, above the closing call to action */}
      {data.faqs && <AccordionFAQ tagTitle={data.faqs.tagTitle} heading={data.faqs.heading} questions={data.faqs.questions} hideContactCta />}

      {/* CTA */}
      <BannerCTA
        data={{
          heading: L.cta?.heading || "Ready to engineer your future?",
          description: L.cta?.description || "Let's discuss how our bespoke architectures can solve your most complex operational challenges.",
          buttonText: L.cta?.buttonText || "Schedule a technical consultation",
          buttonLink: L.cta?.buttonLink || "/contact"
        }}
      />
    </MainLayout>
  );
}