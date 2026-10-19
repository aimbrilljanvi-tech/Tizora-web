'use client';

import { IndustryTemplate } from '@/components/layout/IndustryTemplate';
import { ecommerceData } from '@/data/pages/industries/industriesData';

export function EcommerceClient() {
  return <IndustryTemplate caseStudyIndustry="eCommerce" name="eCommerce & Retail" breadcrumbLabel="eCommerce" data={ecommerceData} />;
}
