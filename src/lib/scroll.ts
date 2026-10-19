// MainLayout owns the site's single Lenis smooth-scroll instance and
// exposes it here so other components can drive programmatic scrolling
// through it. Calling window.scrollTo directly doesn't work while Lenis is
// active -- Lenis's own rAF loop re-applies its last virtual scroll target
// on the very next frame, snapping the page straight back.
declare global {
  interface Window {
    __lenis?: { scrollTo: (target: number | string | HTMLElement, options?: Record<string, unknown>) => void };
  }
}

export function scrollToElement(selector: string) {
  if (typeof window === 'undefined') return;
  const target = document.querySelector(selector);
  if (!target) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(target as HTMLElement, { offset: 0 });
  } else {
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
  }
}
