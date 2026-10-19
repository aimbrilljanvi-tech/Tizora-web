'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw } from 'lucide-react';
import { MainLayout } from '@/components/layout';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MainLayout>
      <section className="w-full min-h-[60vh] flex items-center justify-center px-5 sm:px-8 lg:px-12 py-32">
        <div className="max-w-lg text-center">
          <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-accent">
            Something went wrong
          </span>
          <h1 className="mt-4 text-[32px] sm:text-[40px] font-medium text-primary tracking-tight leading-[1.1]">
            This page hit a snag.
          </h1>
          <p className="mt-4 text-[16px] text-muted leading-relaxed">
            Nothing on our end was lost — try again, or head back home.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 btn-primary group"
            >
              <RefreshCw className="w-4 h-4 text-surface/70 group-hover:text-surface transition-colors" />
              Try again
            </button>
            <Link
              href="/"
              className="text-[14px] font-medium text-primary hover:text-accent transition-colors"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
