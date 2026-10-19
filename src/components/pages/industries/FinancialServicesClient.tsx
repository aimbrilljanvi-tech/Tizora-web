'use client';

import { IndustryTemplate } from '@/components/layout/IndustryTemplate';
import { financialServicesData } from '@/data/pages/industries/industriesData';

export function FinancialServicesClient() {
  return <IndustryTemplate caseStudyIndustry="Fintech" name="Financial Services" breadcrumbLabel="Fintech" data={financialServicesData} />;
}
