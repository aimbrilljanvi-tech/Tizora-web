import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { seoData } from '@/data/pages/services/startupMvpPageData';
import { StartupMvpContent } from '@/components/pages/services/StartupMvpContent';

export const metadata: Metadata = buildMetadata(seoData);

export default function StartupMvpPage() {
  return <StartupMvpContent />;
}
