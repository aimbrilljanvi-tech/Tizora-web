import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { seoData } from '@/data/pages/insights/insightsPageData';
import { InsightsContent } from '@/components/pages/insights/InsightsContent';

export const metadata: Metadata = buildMetadata(seoData);

export default function InsightsPage() {
  return <InsightsContent />;
}
