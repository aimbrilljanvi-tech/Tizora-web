import { Quote } from 'lucide-react';
import { ContentImage as Image } from '@/components/common/ContentImage';
import { SplitTextReveal } from '../ui/SplitTextReveal';

export interface QuoteBlockProps {
  data: {
    quote: string;
    author: string;
    role: string;
    /** Optional portrait; when omitted a quote badge is shown instead. */
    image?: string;
    companyLogo?: string;
    companyName?: string;
  };
  animatedQuote?: boolean;
}

export function QuoteBlock({ data, animatedQuote = false }: QuoteBlockProps) {
  return (
    <section data-component-id="C014" data-component-name="QuoteBlock" className="w-full bg-background py-16 lg:py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12 flex flex-col items-center">

        <div className="max-w-4xl flex flex-col gap-8 lg:gap-12">
          {/* Quote Text with inline icon */}
          <p className="text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.6] text-muted font-light">
            <Quote className="w-8 h-8 lg:w-10 lg:h-10 fill-current opacity-80 inline-block mr-4 -mt-2 text-primary" strokeWidth={0} />
            {animatedQuote ? <SplitTextReveal text={data.quote} trigger="inView" wordDelay={0.02} /> : data.quote}
          </p>
          
          {/* Author Card */}
          <div className="bg-[#1C1C21] rounded-2xl p-2 pr-6 lg:pr-8 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full sm:w-fit sm:min-w-[450px] gap-8">
            
            {/* Left side: Avatar and Info */}
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                {data.image ? (
                  <Image
                    src={data.image}
                    alt={data.author}
                    fill
                    sizes="80px"
                    className="rounded-xl object-cover bg-white"
                  />
                ) : (
                  <div aria-hidden className="flex h-full w-full items-center justify-center rounded-xl bg-white/10 text-white">
                    <Quote className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                )}
              </div>
              <div className="flex flex-col text-white">
                <span className="text-[16px] sm:text-[18px] font-semibold tracking-tight">{data.author}</span>
                <span className="text-[14px] text-white/70">{data.role}</span>
              </div>
            </div>
            
            {/* Right side: Logo */}
            <div className="sm:ml-auto pr-4 sm:pr-0">
              {data.companyLogo ? (
                <img src={data.companyLogo} alt={data.companyName} className="h-6 sm:h-8 object-contain filter invert brightness-0" />
              ) : (
                <span className="text-white text-[20px] sm:text-[24px] font-bold tracking-tighter">
                  {data.companyName}
                </span>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
