import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { seoData } from '@/data/pages/home/homeData';
import { HomeContent } from '@/components/pages/home/HomeContent';

export const metadata: Metadata = buildMetadata(seoData);

export default function HomePage() {
  return <HomeContent />;
}
