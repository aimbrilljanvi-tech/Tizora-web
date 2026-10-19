/**
 * Section components barrel.
 *
 * Import any section from one place instead of remembering file names:
 *
 *   import { HeroSplit, StatBand, ContentSplit, PageOutline, OutlineSection } from '@/components/sections';
 *
 * Files keep their `Cxxx_` prefix (the id used for `data-component-id`); this file
 * maps every id to a plain name. Add new sections here when you create them.
 */

// Heroes
export { HeroSplit } from './C001_HeroSplit';
export { HeroBanner } from './C015_HeroBanner';
export { ShowcaseHero } from './C024_ShowcaseHero';
export { default as UltimateHero } from './C037_UltimateHero';
export { ChatHero } from './C041_ChatHero';

// Content
export { ContentIntro } from './C003_ContentIntro';
export { ContentSplit } from './C017_ContentSplit';
export { SummaryMeta } from './C016_SummaryMeta';
export { ScrollReveal } from './C018_ScrollReveal';
export { C036_TextImage as TextImage } from './C036_TextImage';
export { QuoteBlock } from './C014_QuoteBlock';
export { FigureBlock } from './C052_FigureBlock';
export { Disclosure } from './C055_Disclosure';

// Grids, lists and cards
export { CardGrid } from './C004_CardGrid';
export { ServiceList } from './C005_ServiceList';
export { GridBento } from './C010_GridBento';
export { BenefitGrid } from './C023_BenefitGrid';
export { FeatureList } from './C021_FeatureList';
export { FeatureGrid } from './C040_FeatureGrid';
export { WhatWeBuildCard } from './C047_WhatWeBuildCard';
export { default as InteractiveServicesList } from './C042_whatwebuild';
export { CommunityGrid } from './C028_CommunityGrid';
export { IndustryBands } from './C030_IndustryBands';

// Proof and metrics
export { StatBand } from './C043_StatBand';
export { OutcomeSlider } from './C022_OutcomeSlider';
export { TestimonialCarousel } from './C007_TestimonialCarousel';
export { StoryCarousel } from './C019_StoryCarousel';
export { LogoTicker } from './C031_LogoTicker';
export { ResultsTable } from './C053_ResultsTable';

// Process and technology
export { AgileTimeline } from './C038_AgileTimeline';
export { TracingBeamSection } from './C026_TracingBeamSection';
export { ProcessUI } from './C056_ProcessUI';
export { TechStack } from './C039_TechStack';
export { TechStackTabs } from './C046_TechStackTabs';

// People, places and careers
export { TeamCarousel } from './C033_TeamCarousel';
export { ProfileSpotlight } from './C034_ProfileSpotlight';
export { Locations } from './C029_Locations';
export { JobListings } from './C044_JobListings';

// Calls to action and FAQ
export { AccordionFAQ } from './C008_AccordionFAQ';
export { BannerCTA } from './C032_BannerCTA';
export { CalloutCard, NudgePanel } from './C045_LeadCallouts';
export { CtaStrip } from './C054_CtaStrip';

// Case-study helpers
export { RelatedCaseStudy } from './C050_RelatedCaseStudy';
export { PageOutline, OutlineSection } from './C051_PageOutline';
export { InShort } from './C057_InShort';
export { ComparisonTable } from './C058_ComparisonTable';
