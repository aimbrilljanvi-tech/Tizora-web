'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Slim top-of-page progress bar shown during route transitions.
 * Most routes here are static/prerendered so next/link swaps are near-instant;
 * this exists purely to give feedback for the moment before that swap lands
 * (slow network, uncached prefetch) instead of a blocking full-page spinner.
 */
export function RouteProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const trickleRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    function isInternalNavigationClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return false;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return false;

      const anchor = (e.target as HTMLElement)?.closest?.('a');
      if (!anchor) return false;
      if (anchor.target && anchor.target !== '_self') return false;
      if (anchor.hasAttribute('download')) return false;

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return false;
      }
      if (url.origin !== window.location.origin) return false;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return false;

      return true;
    }

    function handleClick(e: MouseEvent) {
      if (isInternalNavigationClick(e)) startProgress();
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  function startProgress() {
    clearInterval(trickleRef.current);
    clearTimeout(hideTimeoutRef.current);

    setVisible(true);
    setProgress(20);

    trickleRef.current = setInterval(() => {
      setProgress((p) => (p >= 85 ? p : p + (85 - p) * 0.1));
    }, 200);
  }

  // Route has changed and rendered — finish and hide the bar.
  useEffect(() => {
    if (!visible) return;

    clearInterval(trickleRef.current);
    setProgress(100);

    hideTimeoutRef.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 200);

    return () => clearTimeout(hideTimeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-accent transition-all duration-200 ease-out"
        style={{ width: `${progress}%`, opacity: progress === 100 ? 0 : 1 }}
      />
    </div>
  );
}
