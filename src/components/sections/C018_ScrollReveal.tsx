import { ContentImage as Image } from '@/components/common/ContentImage';
import { SplitTextReveal } from '../ui/SplitTextReveal';

export interface ScrollRevealProps {
  data: {
    feature2: {
      title: string;
      bullets: string[];
    };
    warehouse: {
      image: string;
    };
  };
  animatedTitle?: boolean;
  /** Optional small eyebrow shown above the title. */
  label?: string;
  /** Optional supporting copy shown beside the bullets on large screens. */
  paragraphs?: string[];
  /** CSS object-position for the background image, e.g. 'center top' to keep a subject at the top in view. */
  imagePosition?: string;
  /** Alt text for the background image. */
  imageAlt?: string;
  /** Height class for the top fade over the image. Use 'h-0' to disable. */
  fadeClassName?: string;
}

export function ScrollReveal({ data, animatedTitle = false, label, paragraphs, imagePosition = 'center', imageAlt = '', fadeClassName = 'h-32' }: ScrollRevealProps) {
  return (
    <section data-component-id="C018" data-component-name="ScrollReveal" className="w-full flex flex-col bg-primary text-white">

      {/* Text Content (Auto Height) */}
      <div className="w-full pt-24 pb-12 lg:pt-28 relative z-10">
        <div className="w-full px-5 sm:px-8 lg:px-12">
          {label && <span className="mb-10 block text-[14px] font-normal text-white/80">{label}</span>}
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-normal leading-[1.2] tracking-tight mb-12 max-w-4xl">
            {animatedTitle ? <SplitTextReveal text={data.feature2.title} trigger="inView" wordDelay={0.03} /> : data.feature2.title}
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ul className="flex flex-col gap-6 text-[16px] sm:text-[18px] leading-relaxed">
              {data.feature2.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {paragraphs && paragraphs.length > 0 && (
              <div className="flex flex-col gap-5 text-[16px] sm:text-[18px] leading-relaxed text-white/80 lg:border-l lg:border-white/15 lg:pl-12">
                {paragraphs.map((t, i) => (
                  <p key={i} className="m-0">{t}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fading Image Background starting exactly after text ends */}
      <div className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] max-h-[640px] relative z-0 mt-[-1px]">
        <div className={`absolute inset-x-0 top-0 ${fadeClassName} bg-gradient-to-b from-primary to-transparent z-10 pointer-events-none`} />
        <Image src={data.warehouse.image} alt={imageAlt} fill sizes="100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
      </div>
    </section>
  );
}
