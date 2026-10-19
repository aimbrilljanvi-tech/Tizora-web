'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ContentImage as Image } from "@/components/common/ContentImage";

export function ChatHero() {
  const bubble1Ref = useRef<HTMLDivElement>(null);
  const bubble2Ref = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial entrance animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from([bubble1Ref.current, bubble2Ref.current, pillRef.current], {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        delay: 0.2
      });

      // Continuous floating animation
      gsap.to(bubble1Ref.current, {
        y: "-=12",
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.2,
      });

      gsap.to(bubble2Ref.current, {
        y: "-=15",
        duration: 3.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.5,
      });

      gsap.to(pillRef.current, {
        y: "-=8",
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.8,
      });
    });

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <section
      data-component-id="C041"
      data-component-name="ChatHero"
      className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://res.cloudinary.com/cjzo6qye/video/upload/so_0,q_auto/v1788515314/tizora-bg.jpg"
      >
        <source
          src="https://res.cloudinary.com/cjzo6qye/video/upload/q_auto/v1788515314/tizora-bg.webm"
          type="video/webm"
        />
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex items-center h-full pt-16">
        {/* Left Side: Text and CTA */}
        <div className="w-full lg:w-[55%] max-w-[650px]">
          {/* Eyebrow */}
          <div className="text-white/90 text-[11px] font-mono uppercase tracking-[0.15em] mb-6 font-medium">
            ONE AI BRAIN → MULTIPLE OUTCOMES
          </div>

          <h1 className="text-[38px] sm:text-[50px] font-medium text-white leading-[1.05] tracking-tight mb-6">
            We run AI in production, so we can run yours too.
          </h1>

          <p className="text-[14px] sm:text-[16px] text-white/95 leading-[1.6] mb-10 font-medium max-w-[560px]">
            Tizora builds AI products end to end — architecture, engineering, launch and ongoing support.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/industries"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-normal text-[14px] hover:bg-gray-100 transition-colors"
            >
              Explore our services
            </a>
            <a
              href="https://calendly.com/tizora-sales/30min"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/40 bg-transparent text-white font-normal text-[14px] hover:bg-white/10 transition-colors gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a demo
            </a>
          </div>

          {/* Checklist */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 text-[12px] text-white/90 font-normal">
            <div className="flex items-center gap-1.5">
              <span className="text-white">✓</span>
              Architecture
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-white">✓</span>
              Engineering
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-white">✓</span>
              Ongoing Support
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Chat Bubbles */}
        <div className="hidden lg:block absolute right-6 xl:right-12 top-1/2 -translate-y-1/2 w-[520px]">

          {/* Bubble 1 (User) */}
          <div ref={bubble1Ref} className="relative left-16 w-[400px] rounded-[16px] border border-white/20 bg-white/10 backdrop-blur-[12px] p-6 shadow-2xl mb-[-24px] z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                <Image src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100&h=100" alt="Client" width={24} height={24} className="w-full h-full object-cover" />
              </div>
              <span className="text-white/90 text-[13px] font-medium">Client</span>
            </div>
            <p className="text-white text-[19px] font-medium leading-[1.3] mb-6 pr-8">
              Can you build and scale our AI agent across all channels?
            </p>
            <div className="absolute bottom-5 right-5 text-white/60 text-[11px] font-mono">10:24 ✓✓</div>
          </div>

          {/* Bubble 2 (Agent) */}
          <div ref={bubble2Ref} className="relative z-20 w-[440px] rounded-[16px] border border-white/20 bg-white/10 backdrop-blur-[12px] p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 rounded flex items-center justify-center bg-white">
                <span className="text-black font-bold text-[12px]">T</span>
              </div>
              <span className="text-white/90 text-[13px] font-medium">Tizora AI</span>
            </div>
            <p className="text-white text-[19px] font-medium mb-6">
              Yes, we handle it end to end!
            </p>
            {/* Part of the illustrated chat, not a real action, so it is not a button. */}
            <span className="inline-flex items-center justify-center gap-2 bg-[#6859FF] text-white px-5 py-2.5 rounded-full text-[14px] font-medium shadow-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Deploy Architecture
            </span>
            <div className="absolute bottom-6 right-6 text-white/60 text-[11px] font-mono">10:25 ✓✓</div>
          </div>

          {/* Checkout Pill */}
          <div ref={pillRef} className="absolute -bottom-14 left-[40%] transform -translate-x-1/2 bg-white/10 backdrop-blur-[12px] border border-white/20 text-white/90 px-4 py-2 rounded-full text-[13px] font-medium flex items-center gap-1.5 shadow-xl">
            <span>✓</span> Launched
          </div>

        </div>
      </div>
    </section>
  );
}