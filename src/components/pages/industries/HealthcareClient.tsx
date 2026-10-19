'use client';

import { IndustryTemplate } from '@/components/layout/IndustryTemplate';
import { healthcareData } from '@/data/pages/industries/industriesData';

export function HealthcareClient() {
  return <IndustryTemplate caseStudyIndustry="Healthcare" name="Healthcare" breadcrumbLabel="Healthcare" data={healthcareData} />;
}
