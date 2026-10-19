'use client';

import { useState, ReactNode } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, Quote, CalendarDays, Clock, Video } from 'lucide-react';
import { ContentImage as Image } from '@/components/common/ContentImage';
import { BOOKING_URL, SOCIAL_LINKS } from '../../../data/common/constants';

export interface FooterProps {
  heading: ReactNode;
  subheading?: string;
  /** Render the heading as the page's h1 (on the Contact page, where this section is the hero). */
  headingAs?: 'h1' | 'h2';
}

const clientTestimonials = [
  {
    quote: "Tizora completely rearchitected how our team processes documents. Within three months of deploying their deterministic extraction pipeline, we saw a 35% reduction in manual review time and a massive leap in data accuracy across our platform.",
    name: "Alex Jordan",
    role: "VP of Engineering",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&q=80"
  },
  {
    quote: "The team at Tizora delivered beyond our expectations. Their scalable headless architecture enabled our ecommerce platform to handle massive traffic spikes during BFCM without a single glitch.",
    name: "Sarah Miller",
    role: "E-Commerce Director",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&q=80"
  },
  {
    quote: "Working with Tizora transformed our backend operations. Their robust microservices integration gave us the agility we desperately needed to scale into new international markets.",
    name: "David Chen",
    role: "Chief Technology Officer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces&q=80"
  }
];

const PARTNER_LOGOS = [
  {
    name: "AWS Partner",
    src: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788426775/aws_Partner.png",
    heightClass: "h-13 sm:h-15 lg:h-17 max-w-[150px]"
  },
  {
    name: "Google Cloud Partner",
    src: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788426779/google.png",
    heightClass: "h-11 sm:h-13 lg:h-15 max-w-[150px]"
  },
  {
    name: "Shopify Plus Partner",
    src: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788426777/shopify.png",
    heightClass: "h-14 sm:h-16 lg:h-18 max-w-[150px]"
  },
  {
    name: "BigCommerce Certified",
    src: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788426784/bigcommerce.png",
    heightClass: "h-11 sm:h-13 lg:h-15 max-w-[150px]"
  },
  {
    name: "Adobe Certified",
    src: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788426778/adobe.png",
    heightClass: "h-13 sm:h-15 lg:h-17 max-w-[150px]"
  }
];

// What the booking card promises -- kept factual: the Calendly event is a 30-minute call.
const BOOKING_POINTS = [
  { icon: Clock, text: '30 minutes, one conversation' },
  { icon: Video, text: 'Online call with our team' },
  { icon: CalendarDays, text: 'Pick a slot that suits your time zone' },
];

export function CTASection({ heading, headingAs = 'h2' }: FooterProps) {
  const Heading = headingAs;
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % clientTestimonials.length);
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);

  const testimonial = clientTestimonials[activeIndex];

  return (
    <div className="flex flex-col bg-background">
      <section 
        data-component-id="C009" 
        data-component-name="Footer"
        className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 lg:gap-6 items-stretch">
          
          {/* LEFT: Book a call */}
          <div className="bg-surface rounded-[10px] p-8 sm:p-12 shadow-sm border border-border/30 flex flex-col justify-between gap-12">
            <div>
              <Heading className="text-[32px] sm:text-[42px] font-normal leading-[1.1] text-primary tracking-tight">
                {heading || 'Get in touch'}
              </Heading>
              <p className="mt-5 max-w-xl text-[15px] sm:text-[17px] leading-relaxed text-muted">
                Book a 30-minute call with our team. Pick a time that suits you and tell us what you&apos;re building.
              </p>

              <ul className="mt-10 flex flex-col divide-y divide-border/50 border-y border-border/50">
                {BOOKING_POINTS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-4 py-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#003640]/[0.06] text-primary">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="text-[15px] text-primary">{text}</span>
                  </li>
                ))}
              </ul>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex w-full items-center justify-between gap-4 rounded-full bg-primary py-2 pl-7 pr-2 text-[15px] font-normal text-white transition-colors hover:bg-[#002a32] sm:w-auto"
              >
                Book a 30-minute call
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
                <span className="sr-only">(opens Calendly in a new tab)</span>
              </a>
            </div>

            <div className="pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4">
              <span className="text-[13px] text-muted">Prefer to follow along first?</span>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-medium text-muted mr-1 hidden sm:inline">Connect:</span>
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={social.name}
                    className="w-9 h-9 rounded-[8px] bg-white border border-border/80 flex items-center justify-center transition-all duration-200 hover:scale-105 hover:border-primary/40 hover:shadow-2xs"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className={`${social.imgClass} object-contain`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Stacked Cards */}
          <div className="flex flex-col gap-4 lg:gap-6">
            
            {/* Top Card: Testimonial */}
            <div className="bg-primary rounded-[10px] p-8 sm:p-10 flex flex-col gap-8 border border-border/10 shadow-lg">
              <div>
                <Quote className="w-8 h-8 text-white mb-6 fill-white" strokeWidth={0} />
                <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed mb-8 min-h-[120px]">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 mb-10">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover border-2 border-white/10" />
                  <div>
                    <p className="text-[15px] font-bold text-white mb-0.5">{testimonial.name}</p>
                    <p className="text-[13px] text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                <button onClick={prevTestimonial} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors">
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <button onClick={nextTestimonial} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Bottom Card: Awards/Logos */}
            <div className="bg-surface rounded-[10px] p-6 sm:p-8 border border-border/40 shadow-sm flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {PARTNER_LOGOS.map((logo, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-xl p-3 sm:p-4 border border-border/70 flex items-center justify-center h-24 sm:h-28 transition-all hover:border-primary/40 hover:shadow-sm group"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className={`${logo.heightClass} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
                    />
                  </div>
                ))}
                <div className="bg-white/80 rounded-xl p-3 sm:p-4 border border-dashed border-border/90 flex flex-col items-center justify-center h-24 sm:h-28 text-center">
                  <span className="text-[14px] sm:text-[16px] font-bold text-primary">SOC2 &amp; ISO</span>
                  <span className="text-[11.5px] sm:text-[12.5px] text-muted font-medium mt-1">Compliant Stack</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}