'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { Navbar } from './Navbar';
import { FooterBottomSection as Footer } from './Footer/FooterBottom';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // MainLayout remounts on every route change (see below), so this is
    // also where "new page" scroll-to-top happens. The browser's own
    // scroll restoration ('auto') and Lenis's virtual scroll position both
    // fight a plain window.scrollTo here, so both are pinned to the top
    // explicitly before Lenis takes over.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });
    lenis.scrollTo(0, { immediate: true });
    window.__lenis = lenis;

    // MainLayout remounts on every route change (each page wraps its own
    // content in <MainLayout>), so this effect re-runs per navigation.
    // Both the raw rAF loop and the gsap.ticker callback below capture
    // this specific `lenis` instance -- if they aren't torn down here,
    // they keep calling .raf() on an already-destroyed instance forever,
    // and the accumulating zombie loops from every prior page fight the
    // next page's scroll-to-top reset, which is what made it intermittent.
    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    lenis.on('scroll', ScrollTrigger.update);
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      cancelAnimationFrame(rafId);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      if (window.__lenis === lenis) {
        window.__lenis = undefined;
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}