import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MainLayout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <MainLayout>
      <section className="w-full min-h-[60vh] flex items-center justify-center px-5 sm:px-8 lg:px-12 py-32">
        <div className="max-w-lg text-center">
          <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-accent">
            404
          </span>
          <h1 className="mt-4 text-[36px] sm:text-[48px] font-medium text-primary tracking-tight leading-[1.1]">
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-4 text-[16px] text-muted leading-relaxed">
            The page you&apos;re looking for may have been moved or no longer
            exists. Let&apos;s get you back on track.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 btn-primary group"
          >
            <ArrowLeft className="w-4 h-4 text-surface/70 group-hover:text-surface transition-colors" />
            Back to homepage
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
