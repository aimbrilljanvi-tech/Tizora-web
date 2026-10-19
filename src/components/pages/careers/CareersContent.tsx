'use client';

import { useEffect } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { CommunityGrid } from '@/components/sections/C028_CommunityGrid';
import { ContentIntro } from '@/components/sections/C003_ContentIntro';
import { BenefitGrid } from '@/components/sections/C023_BenefitGrid';
import { ServicesFromTabs } from '@/components/sections/C042_whatwebuild';
import { JobListings } from '@/components/sections/C044_JobListings';
import { scrollToElement } from '@/lib/scroll';
import {
  careersIntroData,
  careersBenefitsData,
  careersProcessData,
  careersOpeningsData,
  careersGridData,
} from '@/data/pages/careers/careersPageData';

function scrollToOpenings() {
  scrollToElement('[data-component-id="C044"]');
}

export function CareersContent() {
  useEffect(() => {
    // Don't clear the flag here -- React Strict Mode double-invokes this
    // effect in dev (mount, cleanup, mount again), and clearing it on the
    // first throwaway pass would leave the real pass with nothing to read.
    // It's only cleared once the retries below actually finish.
    if (sessionStorage.getItem('tizora-careers-scroll-target') !== 'openings') return;

    // MainLayout resets scroll to the top on every route mount, and exactly
    // when that finishes relative to this effect isn't reliable (it can
    // still win the race with a single delayed call). Retry for under a
    // second so whichever call lands last -- ours -- is the one that sticks.
    let attempts = 0;
    const id = window.setInterval(() => {
      scrollToOpenings();
      attempts += 1;
      if (attempts >= 6) {
        window.clearInterval(id);
        sessionStorage.removeItem('tizora-careers-scroll-target');
      }
    }, 100);
    return () => window.clearInterval(id);
  }, []);

  return (
    <MainLayout>
      {/* 1. Hero / Grid */}
      <CommunityGrid data={careersGridData} className="pt-14 pb-16 sm:pb-24" />

      {/* 2. Intro / Culture */}
      <ContentIntro {...careersIntroData} buttonAction={scrollToOpenings} />

      {/* 3. Perks & Benefits */}
      <BenefitGrid data={careersBenefitsData} />

      {/* 4. Hiring Process Timeline */}
      <ServicesFromTabs
        data={{
          ...careersProcessData,
          buttonAction: scrollToOpenings,
        }}
      />

      {/* 5. Open Positions */}
      <JobListings {...careersOpeningsData} />

      {/* 7. Contact Information */}
      <section className="bg-surface py-16 sm:py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[32px] sm:text-[40px] font-medium text-primary mb-4 tracking-tight">Get in Touch</h2>
            <p className="text-[16px] text-muted mb-12 max-w-2xl">Have questions about our open roles or want to discuss a partnership? Reach out to the right team below.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
              <a href="mailto:hr@tizora.ai" className="flex flex-col items-center justify-center p-8 rounded-global bg-white border border-border/80 hover:border-[#67793D]/30 hover:shadow-lg transition-all group">
                <span className="text-[13px] font-medium tracking-widest text-muted uppercase mb-2">Careers & HR</span>
                <span className="text-[20px] font-medium text-primary group-hover:text-[#67793D] transition-colors">hr@tizora.ai</span>
              </a>
              <a href="mailto:sales@tizora.ai" className="flex flex-col items-center justify-center p-8 rounded-global bg-white border border-border/80 hover:border-[#67793D]/30 hover:shadow-lg transition-all group">
                <span className="text-[13px] font-medium tracking-widest text-muted uppercase mb-2">Sales & Partnerships</span>
                <span className="text-[20px] font-medium text-primary group-hover:text-[#67793D] transition-colors">sales@tizora.ai</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
