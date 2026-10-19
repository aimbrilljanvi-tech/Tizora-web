'use client';

import { IndustryTemplate } from '@/components/layout/IndustryTemplate';
import { parkingData } from '@/data/pages/industries/industriesData';

export function ParkingClient() {
  return <IndustryTemplate caseStudyIndustry="Parking" name="Parking & Mobility" breadcrumbLabel="Parking" data={parkingData} />;
}
