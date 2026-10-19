'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';
import { ContentImage as Image } from '@/components/common/ContentImage';
import { SplitTextReveal } from '../ui/SplitTextReveal';

gsap.registerPlugin(ScrollTrigger);

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
  image: string;
  /** Optional small label shown above the title (e.g. "Phase 1: Discovery"). */
  badge?: string;
  /** Optional supporting bullets, rendered as a checklist under the description when present. Also available to other renderers of `process.steps` (e.g. FeatureGrid). */
  bullets?: string[];
}

export interface AgileTimelineProps {
  tagTitle?: string;
  heading: string;
  /** Optional supporting line under the heading. */
  description?: string;
  steps: TimelineStep[];
  /** Defaults to the dark card treatment; set false for a light card (e.g. right after another dark section). */
  dark?: boolean;
  animatedHeading?: boolean;
}

export function AgileTimeline({ tagTitle, heading, description, steps, dark = true, animatedHeading = false }: AgileTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  // Number of step circles the green line has reached so far (they turn green as it arrives).
  const [reachedCount, setReachedCount] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
    const stepElements = containerRef.current!.querySelectorAll('.step-row');

    stepElements.forEach((step, index) => {
      const fade = (opacity: number) => gsap.to(step.querySelectorAll('.step-content'), { opacity, duration: 0.3 });
      // Text of the step in view is bright; the others are dimmed.
      ScrollTrigger.create({
        trigger: step,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => fade(1),
        onEnterBack: () => fade(1),
        onLeave: () => fade(0.5),
        onLeaveBack: () => fade(0.5),
      });
      // The green line reaches this step's circle when the row's centre crosses the viewport centre.
      ScrollTrigger.create({
        trigger: step,
        start: 'center center',
        onEnter: () => setReachedCount((c) => Math.max(c, index + 1)),
        onLeaveBack: () => setReachedCount(index),
      });
    });

    // Green progress line, growing down the track as the page scrolls
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: (self) => {
         // The green line grows down to the node as the page scrolls.
         if (progressLineRef.current) {
           progressLineRef.current.style.height = `${self.progress * 100}%`;
         }
      }
    });

    }, containerRef);

    return () => ctx.revert();
  }, [steps]);

  return (
    <section data-component-id="C038" data-component-name="AgileTimeline" className="w-full bg-background py-12 lg:py-20 px-6 sm:px-12 lg:px-24 xl:px-32">
      <div className={`w-full max-w-[1400px] mx-auto rounded-[20px] py-16 lg:py-24 px-2 sm:px-6 lg:px-10 overflow-clip ${dark ? 'bg-[#2a2e31]' : 'bg-surface border border-border'}`}>
        <div className="w-full px-5 sm:px-8 lg:px-12 max-w-[1200px] mx-auto text-center mb-16 lg:mb-24">
        {tagTitle && (
          <div className={`inline-block border rounded-full px-4 py-1.5 mb-8 ${dark ? 'border-white/20 bg-white/5' : 'border-border bg-background'}`}>
            <span className={`text-[11px] font-semibold tracking-[0.15em] uppercase ${dark ? 'text-white/80' : 'text-muted'}`}>{tagTitle}</span>
          </div>
        )}
        <h2 className={`text-[36px] sm:text-[48px] lg:text-[56px] font-normal tracking-tight leading-[1.1] ${dark ? 'text-white' : 'text-primary'}`}>
          {animatedHeading ? <SplitTextReveal text={heading} trigger="inView" wordDelay={0.025} /> : heading}
        </h2>
        {description && (
          <p className={`mt-6 mx-auto max-w-[640px] text-[16px] lg:text-[18px] leading-relaxed ${dark ? 'text-white/60' : 'text-muted'}`}>{description}</p>
        )}
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto" ref={containerRef}>
        {/* Track Background */}
        <div className={`absolute left-[3.5rem] md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2 z-0 ${dark ? 'bg-white/15' : 'bg-border'}`} />

        {/* Active Track (Olive) moving down on scroll */}
        <div
          ref={progressLineRef}
          className="absolute left-[3.5rem] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#8DA850]/0 via-[#8DA850] to-[#8DA850] md:-translate-x-1/2 z-10"
          style={{ height: '0%' }}
        />

        <div className="flex flex-col relative z-10">
          {steps.map((step, idx) => {
            // Zig-zag layout
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`step-row flex flex-col md:flex-row items-center w-full relative min-h-[44vh] py-12 md:py-16 group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Step circle on the track: fixed in place, turns green when the line reaches it */}
                <div
                  aria-hidden
                  className={`absolute left-[3.5rem] md:left-1/2 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[13px] font-normal tabular-nums transition-all duration-500 ${
                    idx < reachedCount
                      ? 'border-[#8DA850] bg-[#67793D] text-white shadow-[0_0_0_4px_rgba(141,168,80,0.2)]'
                      : dark
                        ? 'border-white/30 bg-[#2a2e31] text-white/70'
                        : 'border-primary/25 bg-surface text-primary/70'
                  }`}
                >
                  <span className={`absolute inset-[3px] rounded-full border transition-colors duration-500 ${idx < reachedCount ? 'border-white/40' : 'border-transparent'}`} />
                  {step.number}
                </div>

                {/* Text Block */}
                <div className={`w-full md:w-1/2 pl-[6rem] pr-5 sm:pl-[7rem] sm:pr-8 md:pl-0 md:pr-0 flex justify-start ${isEven ? 'md:pr-12 lg:pr-24 md:justify-end' : 'md:pl-12 lg:pl-24 md:justify-start'}`}>
                  <div className={`max-w-[480px] text-left step-content ${idx === 0 ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}>
                    <span className={`mb-3 block text-[12px] font-normal tracking-[0.18em] tabular-nums ${dark ? 'text-[#8DA850]' : 'text-accent'}`}>
                      STEP {step.number}
                    </span>
                    {step.badge && (
                      <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-4 ${dark ? 'bg-white/15 text-white' : 'bg-background text-primary border border-border'}`}>
                        {step.badge}
                      </span>
                    )}
                    <h3 className={`text-[26px] lg:text-[32px] font-normal mb-4 leading-[1.15] tracking-tight ${dark ? 'text-white' : 'text-primary'}`}>{step.title}</h3>
                    <p className={`text-[15px] lg:text-[17px] leading-relaxed font-normal ${dark ? 'text-white/70' : 'text-primary/70'}`}>{step.description}</p>
                    {step.bullets && step.bullets.length > 0 && (
                      <ul className="mt-6 flex flex-col gap-2.5">
                        {step.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className={`flex items-start gap-2.5 text-[14px] font-medium ${dark ? 'text-white/90' : 'text-primary'}`}>
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Image Block */}
                <div className={`w-full md:w-1/2 pl-[6rem] pr-5 sm:pl-[7rem] sm:pr-8 md:pl-0 md:pr-0 mt-12 md:mt-0 flex justify-start ${isEven ? 'md:pl-12 lg:pl-24 md:justify-start' : 'md:pr-12 lg:pr-24 md:justify-end'}`}>
                  <div className={`max-w-[560px] w-full step-content ${idx === 0 ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.5)] rounded-[5px] overflow-hidden relative aspect-[4/3] flex items-center justify-center border ${dark ? 'border-white/10 bg-[#23272a]' : 'border-black/5 bg-gray-100'}`}>
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}