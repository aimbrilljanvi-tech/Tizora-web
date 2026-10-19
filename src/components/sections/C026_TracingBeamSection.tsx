import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ContentImage as Image } from "@/components/common/ContentImage";

export interface TracingBeamPhase {
  badge: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  deliverables?: string[];
  keyOutcome?: string;
}

export interface TracingBeamSectionProps {
  tagTitle?: string;
  heading?: string;
  subheading?: string;
  content: TracingBeamPhase[];
  /** Section background: the page's soft grey (default) or white. */
  background?: 'white' | 'grey';
  /** How many phases to render (default 3). */
  maxPhases?: number;
  /** Tighter spacing between phases, for longer step lists. */
  compact?: boolean;
}

export function TracingBeamSection({ 
  tagTitle = "ENGINEERING ROADMAP",
  heading = "A Deterministic Framework for Enterprise Scale",
  subheading = "From rapid validation to enterprise-grade cloud systems, our 3-phase lifecycle ensures architectural integrity, security compliance, and measurable ROI at every milestone.",
  content,
  background = 'grey',
  maxPhases = 3,
  compact = false,
}: TracingBeamSectionProps) {
  // Render up to `maxPhases` phases (3 by default)
  const phases = content.slice(0, maxPhases);

  return (
    <section data-component-id="C026" data-component-name="TracingBeamSection" className={`w-full py-20 sm:py-28 border-t border-border/50 ${background === 'white' ? 'bg-[#fff8f0]' : 'bg-background'}`}>
      {/* Header */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 mb-16 sm:mb-20 text-center">
        {tagTitle && (
          <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-widest text-accent uppercase mb-3">
            {tagTitle}
          </span>
        )}
        {heading && (
          <h2 className="text-[32px] sm:text-[44px] font-normal text-primary tracking-tight leading-[1.15] mb-4">
            {heading}
          </h2>
        )}
        {subheading && (
          <p className="text-[15px] sm:text-[17px] text-muted max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        )}
      </div>

      {/* Main Content with Minimal Static Ray Tracing Timeline */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 relative">
        <ol className="relative m-0 list-none p-0 pl-8 sm:pl-12">
          
          {/* Static Minimal Olive Gradient Ray (Spans from Phase 1 to Phase 3) */}
          <div 
            className="absolute left-[11px] sm:left-[15px] top-3.5 bottom-12 w-[2px] rounded-full bg-linear-to-b from-[#67793D] via-[#8DA850] to-[#67793D]/30" 
            aria-hidden="true"
          />

          {phases.map((item, index) => {
            const isLast = index === phases.length - 1;
            return (
              <li key={`phase-${index}`} className={`relative ${isLast ? 'mb-0' : compact ? 'mb-10 sm:mb-12' : 'mb-20 sm:mb-24'}`}>
                
                {/* Minimal Ray Node Dot */}
                <div 
                  className="absolute -left-8 sm:-left-12 top-0.5 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] rounded-full bg-surface border-2 border-accent flex items-center justify-center shadow-xs">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-accent" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Badge & Key Outcome */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase bg-primary text-surface shadow-xs">
                      {item.badge}
                    </span>
                    {item.keyOutcome && (
                      <span className="inline-flex items-center text-[12px] font-medium text-muted bg-white/70 px-3 py-0.5 rounded-full border border-border">
                        {item.keyOutcome}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] sm:text-[30px] font-normal text-primary tracking-tight leading-tight mb-4">
                    {item.title}
                  </h3>

                  {/* Image */}
                  {item.image && (
                    <div className="relative w-full aspect-16/9 sm:aspect-2/1 rounded-2xl overflow-hidden mb-6 border border-border/70 shadow-sm group">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-[15px] sm:text-[16.5px] text-muted leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Deliverables / Capabilities List */}
                  {item.deliverables && item.deliverables.length > 0 && (
                    <div className="bg-white/80 rounded-xl p-5 border border-border/80 shadow-2xs">
                      <h4 className="text-[12px] font-bold text-primary uppercase tracking-wider mb-3.5 flex items-center gap-2">
                        <span>Key Architectural Milestones</span>
                        <ArrowRight className="w-3.5 h-3.5 text-accent" />
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.deliverables.map((deliverable, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-[13.5px] text-primary/90 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}


