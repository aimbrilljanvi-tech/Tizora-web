import { ImageIcon } from 'lucide-react';
import { ContentImage as Image } from '@/components/common/ContentImage';
import { ImageLightbox } from '@/components/common/ImageLightbox';
import { inlineLinks } from '@/lib/caseStudyLinks';
import { SECTION_LABEL } from '../ui/labelStyles';

export interface FigureBlockProps {
  tagTitle?: string;
  heading?: string;
  /** Copy above the image, one paragraph per entry. `[anchor](/path)` becomes an inline link. */
  paragraphs?: string[];
  /** Wide image (e.g. an architecture diagram). Without one, the figure is left out unless `showPlaceholder` is set. */
  image?: string;
  /** Show an "Image coming soon" frame while a diagram is still being made. */
  showPlaceholder?: boolean;
  /** Alt text; for a diagram, describe what it shows, not just its name. Required whenever `image` is set. */
  imageAlt?: string;
  /**
   * Intrinsic size of `image`. When given, the image shows at its natural proportions (no
   * cropping or letterboxing) and scrolls sideways on phones so small diagram labels stay
   * readable. Without it, the image fills a fixed wide frame.
   */
  imageWidth?: number;
  imageHeight?: number;
  /** Caption shown under the image. */
  caption?: string;
  /** Optional numbered notes under the figure (e.g. the key design decisions). */
  pointsTitle?: string;
  points?: { title: string; text: string }[];
}

/**
 * Heading and paragraphs, with optional numbered notes (e.g. key design decisions) in a card
 * beside them, over one wide image (centred, at most 960px wide) with a centred caption.
 * Built for diagrams and screenshots. A diagram with a known size opens full size on click.
 */
export function FigureBlock({
  tagTitle,
  heading,
  paragraphs,
  image,
  imageAlt = '',
  imageWidth,
  imageHeight,
  showPlaceholder = false,
  caption,
  pointsTitle,
  points,
}: FigureBlockProps) {
  const natural = !!(image && imageWidth && imageHeight);
  const hasPoints = !!points?.length;
  return (
    <section
      data-component-id="C052"
      data-component-name="FigureBlock"
      className="w-full bg-background py-16 sm:py-20 lg:py-28 border-t border-border/50"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {(tagTitle || heading || paragraphs?.length || hasPoints) && (
          <div
            className={`mb-10 sm:mb-14 ${
              hasPoints ? 'grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start lg:gap-16' : 'max-w-3xl'
            }`}
          >
            <div>
              {tagTitle && <span className={`${SECTION_LABEL} mb-3 block`}>{tagTitle}</span>}
              {heading && (
                <h2 className="text-[28px] font-normal leading-[1.15] tracking-tight text-primary sm:text-[40px]">
                  {heading}
                </h2>
              )}
              {paragraphs?.map((p, i) => (
                <p key={i} className="mt-5 text-[15px] leading-relaxed text-muted sm:text-[17px]">
                  {inlineLinks(p)}
                </p>
              ))}
            </div>

            {/* Key decisions sit beside the prose they explain, using the right-hand column. */}
            {hasPoints && (
              <aside className="rounded-[10px] bg-white p-6 shadow-[0_24px_60px_-44px_rgba(0,54,64,0.45)] ring-1 ring-black/[0.06] sm:p-8 lg:mt-9">
                {pointsTitle && (
                  <h3 className="mb-6 text-[20px] font-normal leading-tight tracking-tight text-primary sm:text-[22px]">
                    {pointsTitle}
                  </h3>
                )}
                <ol className="m-0 flex list-none flex-col p-0">
                  {points!.map((pt, i) => {
                    // The second decision is highlighted as the pivotal one.
                    const hi = i === 1;
                    return (
                      <li
                        key={pt.title}
                        className={`flex gap-4 ${
                          hi
                            ? '-mx-3 my-2 rounded-[10px] bg-[#15533e] px-3 py-5 sm:-mx-4 sm:px-4'
                            : `py-5 first:pt-0 last:pb-0 ${i > 0 && i !== 2 ? 'border-t border-black/[0.06]' : ''}`
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] tabular-nums ${
                            hi ? 'bg-white text-[#15533e]' : 'bg-primary text-white'
                          }`}
                        >
                          {i + 1}
                        </span>
                        <p className={`m-0 text-[15px] leading-relaxed ${hi ? 'text-white/80' : 'text-muted'}`}>
                          <span className={hi ? 'text-white' : 'text-primary'}>{pt.title}</span> {inlineLinks(pt.text)}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </aside>
            )}
          </div>
        )}

        {(image || showPlaceholder) && (
        <figure className="m-0">
          {natural ? (
            <div className="-mx-5 overflow-x-auto px-5 [scrollbar-width:thin] sm:mx-auto sm:max-w-[960px] sm:px-0">
              <div className="min-w-[720px] overflow-hidden rounded-[5px] border border-border bg-white p-3 sm:min-w-0 sm:p-5 lg:p-6">
                {/* Click opens the diagram full size, with a close button. */}
                <ImageLightbox src={image!} alt={imageAlt} caption={caption}>
                  <Image
                    src={image!}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    sizes="(min-width: 1024px) 960px, (min-width: 640px) 90vw, 720px"
                    // Diagrams carry small text, so ask Cloudinary for its best quality.
                    quality={100}
                    className="h-auto w-full"
                  />
                </ImageLightbox>
              </div>
            </div>
          ) : (
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[960px] overflow-hidden rounded-[5px] border border-border bg-white sm:aspect-[16/9] lg:aspect-[21/9]">
            {image ? (
              <Image src={image} alt={imageAlt} fill sizes="(min-width: 1440px) 1340px, 100vw" quality={100} className="object-contain" />
            ) : (
              <div
                role="img"
                aria-label={imageAlt}
                className="absolute inset-3 flex flex-col items-center justify-center gap-3 rounded-[5px] border border-dashed border-primary/25 bg-[#fff8f0] text-center sm:inset-4"
              >
                <ImageIcon className="h-8 w-8 text-primary/30" strokeWidth={1.25} aria-hidden />
                <span className="px-6 text-[13px] text-muted">Image coming soon</span>
              </div>
            )}
          </div>
          )}
          {natural && (
            <p className="mt-2 text-center text-[12px] text-muted sm:hidden" aria-hidden>
              Swipe to see the full diagram →
            </p>
          )}
          {caption && (
            <figcaption className="mx-auto mt-4 max-w-3xl text-center text-[13.5px] leading-relaxed text-muted sm:text-[14.5px]">
              {caption}
            </figcaption>
          )}
        </figure>
        )}

      </div>
    </section>
  );
}
