import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { withInlineLinks } from "@/lib/caseStudyLinks";
import { MainLayout } from "@/components/layout/MainLayout";
import { JsonLd } from "@/components/common/JsonLd";
import {
  AccordionFAQ,
  BannerCTA,
  BenefitGrid,
  ContentSplit,
  CtaStrip,
  Disclosure,
  FeatureGrid,
  FigureBlock,
  HeroSplit,
  ProcessUI,
  QuoteBlock,
  ResultsTable,
  StatBand,
  StoryCarousel,
  TechStackTabs,
  TextImage,
} from "@/components/sections";
import {
  getBreadcrumbItems,
  getCaseStudy,
  getRelatedCaseStudies,
} from "@/data/pages/insights/case-studies/caseStudiesPageData";
import type { CaseStudyContent } from "@/data/pages/insights/case-studies/caseStudyTypes";

const SITE = "https://www.tizora.ai";
const ORG_ID = `${SITE}/#organization`;
const DEFAULT_AUTHOR = "Tizora Team";

const absolute = (src: string) => (src.startsWith("/") ? `${SITE}${src}` : src);

/** Page metadata for a case study: title, description, canonical, OG/Twitter, article dates, keywords. */
export function caseStudyMetadata(cs: CaseStudyContent): Metadata {
  const author = cs.author ?? DEFAULT_AUTHOR;
  const keywords = [cs.seo.primaryKeyword, ...cs.seo.secondaryKeywords];
  const metadata = buildMetadata({
    title: cs.seo.title,
    description: cs.seo.description,
    url: cs.url,
    image: cs.seo.ogImage,
    type: "article",
    publishedTime: cs.published,
    modifiedTime: cs.modified,
    author,
    tags: keywords,
  });
  metadata.keywords = keywords;
  metadata.authors = [{ name: author, url: `${SITE}/about` }];
  metadata.openGraph = {
    ...metadata.openGraph,
    images: [{ url: cs.seo.ogImage, width: 1200, height: 630, alt: cs.seo.ogImageAlt }],
  };
  metadata.twitter = { ...metadata.twitter, images: [{ url: cs.seo.ogImage, alt: cs.seo.ogImageAlt }] };
  return metadata;
}

/**
 * Structured data: TechArticle (with its WebPage, publisher Organization and every real image),
 * BreadcrumbList and, when the page has an FAQ, FAQPage. Clients are anonymised or credited by
 * role, so no client Organization or Review markup. Everything mirrors visible page content.
 */
function caseStudySchema(cs: CaseStudyContent) {
  const author = cs.author ?? DEFAULT_AUTHOR;
  const inLanguage = cs.inLanguage ?? "en";
  const industry = getCaseStudy(cs.id)?.industry;
  const keywords = [cs.seo.primaryKeyword, ...cs.seo.secondaryKeywords];

  const images: Record<string, unknown>[] = [
    { "@type": "ImageObject", url: cs.seo.ogImage, width: 1200, height: 630, caption: cs.seo.ogImageAlt },
  ];
  if (cs.architecture?.image) {
    images.push({
      "@type": "ImageObject",
      url: absolute(cs.architecture.image),
      ...(cs.architecture.imageWidth ? { width: cs.architecture.imageWidth, height: cs.architecture.imageHeight } : {}),
      ...(cs.architecture.caption ? { caption: cs.architecture.caption } : {}),
      ...(cs.architecture.imageAlt ? { description: cs.architecture.imageAlt } : {}),
    });
  }

  const article = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${cs.url}#article`,
    headline: cs.hero.title,
    description: cs.hero.description,
    image: images,
    inLanguage,
    datePublished: cs.published,
    dateModified: cs.modified,
    author: { "@type": "Organization", name: author, url: `${SITE}/about` },
    articleSection: "Case Studies",
    keywords: keywords.join(", "),
    ...(cs.schema?.about ? { about: cs.schema.about } : {}),
    ...(cs.schema?.mentions ? { mentions: cs.schema.mentions } : {}),
    ...(cs.schema?.citation ? { citation: cs.schema.citation } : {}),
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Tizora",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/cjzo6qye/image/upload/e_trim/v1788875430/Tizora_-_Logo-Sel-F-Typo.png",
      },
      sameAs: ["https://www.linkedin.com/company/tizora/"],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": cs.url,
      url: cs.url,
      name: cs.seo.title,
      description: cs.seo.description,
      inLanguage,
      breadcrumb: { "@id": `${cs.url}#breadcrumb` },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${cs.url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE}/insights/case-studies` },
      ...(industry
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: industry,
              item: `${SITE}/insights/case-studies?industry=${encodeURIComponent(industry)}`,
            },
          ]
        : []),
      { "@type": "ListItem", position: industry ? 4 : 3, name: cs.breadcrumbLabel, item: cs.url },
    ],
  };

  // One list feeds both the visible FAQ and the FAQPage schema, so they cannot disagree.
  const faq = cs.faqs?.questions.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: cs.faqs.questions.map((q) => ({
          "@type": "Question",
          name: q.q,
          acceptedAnswer: { "@type": "Answer", text: q.a },
        })),
      }
    : null;

  return [article, breadcrumb, ...(faq ? [faq] : [])];
}

/**
 * The one layout every case study uses. Sections always appear in the same order; optional
 * sections are skipped when the data leaves them out.
 */
export function CaseStudyTemplate({ cs }: { cs: CaseStudyContent }) {
  return (
    <MainLayout>
      {caseStudySchema(cs).map((node, i) => (
        <JsonLd key={i} data={node} />
      ))}

      {/* Breadcrumb, H1, answer capsule */}
      <HeroSplit
        breadcrumb={getBreadcrumbItems(cs.id, cs.breadcrumbLabel)}
        label={cs.hero.label}
        title={cs.hero.title}
        description={cs.hero.description}
        buttonText={cs.hero.cta.label}
        buttonHref={cs.hero.cta.href}
        secondaryButtonText={cs.hero.secondaryCta?.label}
        secondaryButtonHref={cs.hero.secondaryCta?.href}
        imageSrc={cs.hero.image}
        imageAlt={cs.hero.imageAlt}
        faceScan={cs.hero.faceScan}
        skinScan={cs.hero.skinScan}
        healthApp={cs.hero.healthApp}
        bankingApp={cs.hero.bankingApp}
        patientApp={cs.hero.patientApp}
        warehouseApp={cs.hero.warehouseApp}
        statusPanel={cs.hero.statusPanel}
        imagePosition={cs.hero.imagePosition}
        compactTitle={cs.hero.compactTitle}
        animatedTitle
      />

      {/* Key outcomes */}
      {cs.outcomes && (
        <StatBand tagTitle={cs.outcomes.tagTitle} heading={cs.outcomes.heading} stats={cs.outcomes.stats} />
      )}

      {/* The challenge */}
      <ContentSplit data={withInlineLinks(cs.challenge)} spacing="compact" />

      {/* How it was built / how it works */}
      {cs.build && <ProcessUI heading={cs.build.heading} description={cs.build.description} steps={cs.build.steps} />}

      {/* Architecture / solution detail */}
      {cs.architecture && <FigureBlock {...cs.architecture} />}

      {/* Key features */}
      {cs.features && <FeatureGrid {...cs.features} />}

      {/* Tech stack */}
      {cs.techStack && (
        <TechStackTabs
          title={cs.techStack.title}
          description={cs.techStack.description}
          categories={cs.techStack.categories}
          showNames
        />
      )}

      {/* What made the project hard */}
      {cs.hurdles && <BenefitGrid data={cs.hurdles} bordered />}

      {/* Mid-page CTA */}
      <CtaStrip {...cs.midCta} />

      {/* Results */}
      {cs.results && <ResultsTable {...cs.results} />}

      {/* What the results mean in practice */}
      {cs.impact && <BenefitGrid data={cs.impact} bordered />}

      {/* Client quote */}
      {cs.quote && <QuoteBlock data={cs.quote} animatedQuote />}

      {/* What we learned */}
      {cs.learned && <BenefitGrid data={cs.learned} bordered />}

      {/* Will this work for you? */}
      {cs.fit && <TextImage {...cs.fit} />}

      {/* FAQ */}
      {cs.faqs && cs.faqs.questions.length > 0 && <AccordionFAQ {...cs.faqs} hideContactCta />}

      {/* Disclosure, references, related reading */}
      {cs.disclosure && <Disclosure text={cs.disclosure.text} links={cs.disclosure.links} />}

      {/* Related case studies */}
      <StoryCarousel
        data={{
          title: cs.related.title,
          description: cs.related.description,
          items: getRelatedCaseStudies(cs.id),
        }}
      />

      {/* Final CTA */}
      <BannerCTA data={cs.cta} />
    </MainLayout>
  );
}
