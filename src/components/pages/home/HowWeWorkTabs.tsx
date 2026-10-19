'use client';

import { ServicesFromTabs } from '@/components/sections/C042_whatwebuild';
import { howWeWorkData } from '@/data/pages/home/homeData';

/**
 * howWeWorkData's tabs embed real lucide-react icon components (not just
 * string keys), so it can't be passed as a prop from a Server Component
 * into the client ServicesFromTabs -- this wrapper imports the data itself
 * so it never crosses that boundary.
 */
export function HowWeWorkTabs() {
  return <ServicesFromTabs data={howWeWorkData} />;
}
