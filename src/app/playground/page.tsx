import type { Metadata } from 'next';
import { MainLayout } from '@/components/layout';

import { ChatHero } from '@/components/sections/C041_ChatHero';
import InteractiveServicesList from '@/components/sections/C042_whatwebuild';
import { HeroSplit } from '@/components/sections/C001_HeroSplit';
import { ContentIntro } from '@/components/sections/C003_ContentIntro';
import { CardGrid } from '@/components/sections/C004_CardGrid';
import { TestimonialCarousel } from '@/components/sections/C007_TestimonialCarousel';
import { AccordionFAQ } from '@/components/sections/C008_AccordionFAQ';
import { GridBento } from '@/components/sections/C010_GridBento';
import { QuoteBlock } from '@/components/sections/C014_QuoteBlock';
import { HeroBanner } from '@/components/sections/C015_HeroBanner';
import { SummaryMeta } from '@/components/sections/C016_SummaryMeta';
import { ContentSplit } from '@/components/sections/C017_ContentSplit';
import { ScrollReveal } from '@/components/sections/C018_ScrollReveal';
import { StoryCarousel } from '@/components/sections/C019_StoryCarousel';
import { FeatureList } from '@/components/sections/C021_FeatureList';
import { OutcomeSlider } from '@/components/sections/C022_OutcomeSlider';
import { BenefitGrid } from '@/components/sections/C023_BenefitGrid';
import { ShowcaseHero } from '@/components/sections/C024_ShowcaseHero';
import { TracingBeamSection } from '@/components/sections/C026_TracingBeamSection';
import { RelatedCaseStudy } from '@/components/sections/C050_RelatedCaseStudy';
import { PageOutline, OutlineSection } from '@/components/sections/C051_PageOutline';
import { FigureBlock } from '@/components/sections/C052_FigureBlock';
import { ResultsTable } from '@/components/sections/C053_ResultsTable';
import { CtaStrip } from '@/components/sections/C054_CtaStrip';
import { Disclosure } from '@/components/sections/C055_Disclosure';
import { ProcessUI } from '@/components/sections/C056_ProcessUI';
import { HowWeWorkTabs } from '@/components/pages/home/HowWeWorkTabs';
import { CommunityGrid } from '@/components/sections/C028_CommunityGrid';
import { Locations } from '@/components/sections/C029_Locations';
import { IndustryBands } from '@/components/sections/C030_IndustryBands';
import { LogoTicker } from '@/components/sections/C031_LogoTicker';
import { BannerCTA } from '@/components/sections/C032_BannerCTA';
import { TeamCarousel } from '@/components/sections/C033_TeamCarousel';
import { ProfileSpotlight } from '@/components/sections/C034_ProfileSpotlight';
import { C036_TextImage } from '@/components/sections/C036_TextImage';
import UltimateHero from '@/components/sections/C037_UltimateHero';
import { AgileTimeline } from '@/components/sections/C038_AgileTimeline';
import { TechStack } from '@/components/sections/C039_TechStack';
import { FeatureGrid } from '@/components/sections/C040_FeatureGrid';
import { StatBand } from '@/components/sections/C043_StatBand';
import { JobListings } from '@/components/sections/C044_JobListings';

// Real data reused from existing pages/data files (see mapping below).
import {
  aboutData,
  caseStudiesData,
  faqData as homeFaqData,
  bannerCTAData,
} from '@/data/pages/home/homeData';
import { TESTIMONIALS } from '@/data/common/constants';
import { getFeaturedBentoItems } from '@/data/pages/insights/relatedInsights';
import { dpdpCompliancePageData as dpdp } from '@/data/pages/compliance/dpdpCompliancePageData';
import { aiSecurityPageData as aisec } from '@/data/pages/cybersecurity/aiSecurityPageData';
import { lprCaseStudyData as lpr } from '@/data/pages/insights/case-studies/aiLPRParkingData';
import { digitalKycData as vkyc } from '@/data/pages/insights/case-studies/digitalKycData';
import { getRelatedCaseStudies } from '@/data/pages/insights/case-studies/caseStudiesPageData';
import { caseStudiesShowcaseHero } from '@/data/pages/insights/case-studies/caseStudiesPageData';
import {
  heroGridData,
  missionData,
  valuesData,
  teamCarouselData,
  profileSpotlightData,
} from '@/data/pages/about/aboutUsPageData';
import { tracingBeamData } from '@/data/pages/services/enterpriseSolutionsPageData';
import { careersOpeningsData } from '@/data/pages/careers/careersPageData';
import { outcomesData } from '@/data/pages/services/midMarketPageData';
import { serviceListData as startupServiceListData } from '@/data/pages/services/startupMvpPageData';
import { locationData } from '@/data/pages/playground/playgroundData';

const blogBentoItems = getFeaturedBentoItems(4);

// Internal component showcase, not real content -- kept out of the
// sitemap and out of search results.
export const metadata: Metadata = {
  title: 'Component Playground',
  robots: { index: false, follow: false },
};

function Heading({ id, name }: { id: string; name: string }) {
  return (
    <div className="bg-black text-white text-xs font-mono px-4 py-1">
      {id}_{name}
    </div>
  );
}

export default function PlaygroundPage() {
  return (
    <MainLayout>
      <ChatHero />
      <div className="bg-[#FFFFFF]">
        <InteractiveServicesList
          items={[]}
          background="#FFFFFF"
          activeNumberColor="rgb(156, 14, 14)"
          inactiveNumberColor="rgba(156, 14, 14, 0.5)"
          activeTitleColor="rgb(28, 28, 28)"
          inactiveTitleColor="rgba(28, 28, 28, 0.5)"
          descriptionColor="rgba(28, 28, 28, 0.7)"
          borderColor="rgb(203, 203, 203)"
          columnGap={40}
          rowGap={0}
          listPadding="40px"
          heightVh={90}
        />
      </div>

      {/* C001_HeroSplit — real usage: DPDPCompliance page / dpdpCompliancePageData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C001" name="HeroSplit" />
        <HeroSplit
          label={dpdp.hero.label}
          title={dpdp.hero.title}
          description={dpdp.hero.description}
          buttonText={dpdp.hero.buttonText}
          buttonHref="/contact"
          imageSrc={dpdp.hero.imageSrc}
        />
      </div>

      {/* C003_ContentIntro — real usage: Home page / homeData.ts (aboutData) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C003" name="ContentIntro" />
        <ContentIntro
          tagTitle={aboutData.tagTitle}
          heading={aboutData.heading}
          paragraph1={aboutData.paragraph1}
          buttonText={aboutData.buttonText}
          imageSmall={aboutData.imageSmall}
          imageLarge={aboutData.imageLarge}
        />
      </div>

      {/* C004_CardGrid — real usage: Home page / homeData.ts (caseStudiesData) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C004" name="CardGrid" />
        <CardGrid
          tagTitle={caseStudiesData.tagTitle}
          heading={caseStudiesData.heading}
          buttonText={caseStudiesData.buttonText}
          studies={caseStudiesData.studies as any}
        />
      </div>

      {/* C007_TestimonialCarousel — real usage: Home page / constants.ts (TESTIMONIALS) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C007" name="TestimonialCarousel" />
        <TestimonialCarousel
          tagTitle="Testimonials"
          heading="Trusted by Teams Worldwide"
          description="Join thousands of teams globally who rely on our solutions to collaborate, scale, and succeed."
          testimonials={TESTIMONIALS}
        />
      </div>

      {/* C008_AccordionFAQ — real usage: Home page / homeData.ts (faqData) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C008" name="AccordionFAQ" />
        <AccordionFAQ
          tagTitle={homeFaqData.tagTitle}
          heading={homeFaqData.heading}
          questions={homeFaqData.questions}
        />
      </div>

      {/* C010_GridBento — real usage: Home page (Blog & Insights) / relatedInsights.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C010" name="GridBento" />
        <GridBento
          title="Blog & Insights"
          description="Read our latest thoughts, engineering deep dives, and insights into the future of AI."
          items={blogBentoItems}
        />
      </div>

      {/* C014_QuoteBlock — real usage: AILPRParking page / aiLPRParkingData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C014" name="QuoteBlock" />
        <QuoteBlock data={lpr.testimonial} />
      </div>

      {/* C015_HeroBanner — real usage: AILPRParking page / aiLPRParkingData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C015" name="HeroBanner" />
        <HeroBanner data={lpr.hero} />
      </div>

      {/* C016_SummaryMeta — real usage: AILPRParking page / aiLPRParkingData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C016" name="SummaryMeta" />
        <SummaryMeta data={lpr.summary} />
      </div>

      {/* C017_ContentSplit — real usage: About page / aboutUsPageData.ts (missionData) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C017" name="ContentSplit" />
        <ContentSplit data={missionData} />
      </div>

      {/* C018_ScrollReveal — real usage: AILPRParking page / aiLPRParkingData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C018" name="ScrollReveal" />
        <ScrollReveal data={lpr.engineeringApproach} />
      </div>

      {/* C019_StoryCarousel — real usage: AILPRParking page / aiLPRParkingData.ts + caseStudiesPageData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C019" name="StoryCarousel" />
        <StoryCarousel
          data={{
            title: 'Related case studies',
            description: lpr.relatedStories.description,
            items: getRelatedCaseStudies('cs-lpr'),
          }}
        />
      </div>

      {/* C021_FeatureList — real usage: AISecurity page / aiSecurityPageData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C021" name="FeatureList" />
        <FeatureList data={aisec.deepDive} />
      </div>

      {/* C022_OutcomeSlider — real usage: MidMarket page / midMarketPageData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C022" name="OutcomeSlider" />
        <OutcomeSlider
          data={{
            title: outcomesData.heading,
            items: outcomesData.outcomes.map((item) => ({
              number: item.metric,
              title: item.suffix,
              description: [item.description],
              footerTitle: item.label,
              footerLogo: '',
            })),
          }}
        />
      </div>

      {/* C023_BenefitGrid — real usage: About page / aboutUsPageData.ts (valuesData) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C023" name="BenefitGrid" />
        <BenefitGrid data={valuesData as any} />
      </div>

      {/* C024_ShowcaseHero — real usage: CaseStudies page / caseStudiesPageData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C024" name="ShowcaseHero" />
        <ShowcaseHero data={caseStudiesShowcaseHero} />
      </div>

      {/* C026_TracingBeamSection — real usage: EnterpriseSolutions page / enterpriseSolutionsPageData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C026" name="TracingBeamSection" />
        <TracingBeamSection content={tracingBeamData} />
      </div>

      {/* C027 (removed; now ServicesFromTabs) — real usage: Home page / homeData.ts (howWeWorkData) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C027" name="ServicesFromTabs" />
        <HowWeWorkTabs />
      </div>

      {/* C028_CommunityGrid — real usage: About page / aboutUsPageData.ts (heroGridData) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C028" name="CommunityGrid" />
        <CommunityGrid data={heroGridData} />
      </div>

      {/* C029_Locations — real data: data/pages/playground/playgroundData.ts (locationData), which is
          already typed as LocationCard[] for this exact component. */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C029" name="Locations" />
        <Locations locations={locationData} />
      </div>

      {/* C030_IndustryBands — real usage: Industries page (no external props) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C030" name="IndustryBands" />
        <IndustryBands />
      </div>

      {/* C031_LogoTicker — real usage: Home page (no external props) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C031" name="LogoTicker" />
        <LogoTicker />
      </div>

      {/* C032_BannerCTA — real usage: Home page / homeData.ts (bannerCTAData) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C032" name="BannerCTA" />
        <BannerCTA data={bannerCTAData} />
      </div>

      {/* C033_TeamCarousel — real data: About page / aboutUsPageData.ts (teamCarouselData) — render currently
          disabled on the About page itself, but the data object is real and shaped for this component. */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C033" name="TeamCarousel" />
        <TeamCarousel {...teamCarouselData} />
      </div>

      {/* C034_ProfileSpotlight — real data: About page / aboutUsPageData.ts (profileSpotlightData) — render
          currently disabled on the About page itself, but the data object is real and shaped for this component. */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C034" name="ProfileSpotlight" />
        <ProfileSpotlight data={profileSpotlightData} />
      </div>

      {/* C036_TextImage — real usage: MidMarket page (inline props) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C036" name="TextImage" />
        <C036_TextImage
          headline={<>Scale<br />With<br />Certainty.</>}
          subline="Systematizing growth without the growing pains."
          intro="We help mid-market companies bridge the gap between agility and scale. By replacing fragmented workflows with unified data ecosystems, we empower your teams to do their best work at any size."
          imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Data and analytics"
          footerTitle="Scaling Strategy"
        />
      </div>

      {/* C037_UltimateHero (exported as HeroCarousel, imported as UltimateHero) — real usage: Home page (no external props) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C037" name="UltimateHero" />
        <UltimateHero />
      </div>

      {/* C038_AgileTimeline — real usage: AISecurity page / aiSecurityPageData.ts (process) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C038" name="AgileTimeline" />
        <AgileTimeline
          tagTitle={aisec.process.tagTitle}
          heading={aisec.process.heading}
          steps={aisec.process.steps}
          dark={false}
        />
      </div>

      {/* C039_TechStack — real usage: DPDPCompliance page / dpdpCompliancePageData.ts (framework) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C039" name="TechStack" />
        <TechStack
          title={dpdp.framework.title}
          description={dpdp.framework.description}
          categories={dpdp.framework.categories}
          enhanced
        />
      </div>

      {/* C040_FeatureGrid — real usage: StartupMVP page / startupMVPPageData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C040" name="FeatureGrid" />
        <FeatureGrid
          tagTitle={startupServiceListData.tagTitle}
          heading={startupServiceListData.heading}
          description={startupServiceListData.description}
          features={startupServiceListData.services.map((svc) => ({
            title: svc.title,
            description: svc.description,
            imageSrc: svc.imageSrc,
            linkHref: '/contact',
          }))}
        />
      </div>

      {/* C043_StatBand — real usage: DPDPCompliance page / dpdpCompliancePageData.ts (stats) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C043" name="StatBand" />
        <StatBand tagTitle={dpdp.stats.tagTitle} heading={dpdp.stats.heading} stats={dpdp.stats.items} />
      </div>

      {/* C044_JobListings — real usage: Careers page / careersPageData.ts (careersOpeningsData) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C044" name="JobListings" />
        <JobListings {...careersOpeningsData} />
      </div>
      {/* C050_RelatedCaseStudy — real usage: every case study page (links to the next study in the same industry) */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C050" name="RelatedCaseStudy" />
        <RelatedCaseStudy currentId="cs-core-banking" />
      </div>

      {/* C051_PageOutline — real usage: all case study pages. Wrap sections in <OutlineSection label="…"> and add <PageOutline />
          once inside MainLayout; a fixed "On this page" panel (xl) or "Contents" button (mobile) then lists the wrapped sections. */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C051" name="PageOutline" />
        <OutlineSection label="Registry demo section">
          <div className="bg-white px-6 py-10 text-sm text-black/70">
            Add <PageOutline /> once per page; it lists every OutlineSection. It is not mounted on the playground so the demo layout is not shifted.
          </div>
        </OutlineSection>
      </div>

      {/* C052_FigureBlock — real usage: Digital KYC case study / digitalKycData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C052" name="FigureBlock" />
        <FigureBlock {...vkyc.architecture} />
      </div>

      {/* C053_ResultsTable — real usage: Digital KYC case study / digitalKycData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C053" name="ResultsTable" />
        <ResultsTable {...vkyc.results} />
      </div>

      {/* C054_CtaStrip — real usage: Digital KYC case study / digitalKycData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C054" name="CtaStrip" />
        <CtaStrip {...vkyc.midCta} />
      </div>

      {/* C055_Disclosure — real usage: Digital KYC case study / digitalKycData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C055" name="Disclosure" />
        <Disclosure text={vkyc.disclosure} />
      </div>

      {/* C056_ProcessUI — real usage: Digital KYC case study / digitalKycData.ts */}
      <div className="border-t-4 border-dashed border-red-400">
        <Heading id="C056" name="ProcessUI" />
        <ProcessUI heading={vkyc.build.heading} description={vkyc.build.description} steps={vkyc.build.steps} />
      </div>
    </MainLayout>
  );
}
