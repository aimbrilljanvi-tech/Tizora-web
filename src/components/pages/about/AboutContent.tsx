import { MainLayout } from '@/components/layout';
import { ContentSplit } from '@/components/sections/C017_ContentSplit';
import { BenefitGrid } from '@/components/sections/C023_BenefitGrid';

import {
  heroGridData,
  missionData,
  visionData,
  valuesData,
} from '@/data/pages/about/aboutUsPageData';
import { CommunityGrid } from '@/components/sections/C028_CommunityGrid';

export function AboutContent() {
  return (
    <MainLayout>
      {/* 1. Hero Section (Community Grid) */}
      <CommunityGrid data={heroGridData} headingAs="h1" className="pt-24 pb-16 sm:pt-32 sm:pb-24" />

      {/* 2. Our Mission */}
      <ContentSplit data={missionData} />

      {/* 3. Our Vision (Reversed Layout) */}
      <ContentSplit data={visionData} />

      {/* 4. Core Values */}
      <BenefitGrid data={valuesData as any} />

      {/* 5. Profile Spotlight (Founder) — Temporarily Disabled */}
      {/* <ProfileSpotlight data={profileSpotlightData} /> */}

      {/* 6. Team Section (Temporarily Disabled) */}
      {/* <TeamCarousel {...teamCarouselData} /> */}
    </MainLayout>
  );
}
