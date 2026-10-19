import Link from 'next/link';
import { ContentImage as Image } from '@/components/common/ContentImage';

export interface ArticleCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  /** Descriptive alt text for the thumbnail (defaults to the title). */
  imageAlt?: string;
  href: string;
  category?: string;
  date?: string;
  /** @deprecated The byline (author, reading time) was removed from every card; these fields are accepted but ignored. */
  author?: string;
  /** @deprecated See `author`. */
  readingTime?: number;
}

export interface ArticleCardProps {
  article: ArticleCardData;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { title, description, image, imageAlt, href, category, date } = article;

  return (
    <Link
      href={href}
      data-component-id="A001"
      data-component-name="ArticleCard"
      className="group flex flex-col"
    >
      {/* Even margin on all four sides, sized for a 1600x900 (16:9) thumbnail so nothing gets cropped. */}
      <div className="w-full rounded-[8px] bg-[#f6f6f6] p-2">
        <div className="relative w-full aspect-video overflow-hidden rounded-[5px]">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {(category || date) && (
        <div className="flex items-center gap-2.5 pt-5">
          {category && (
            <span className="bg-surface border border-border rounded-full px-3.5 py-1 text-[11px] font-medium text-primary">
              {category}
            </span>
          )}
          {date && (
            <span className="text-[11px] font-medium text-muted">{date}</span>
          )}
        </div>
      )}

      <div className="pt-4">
        <h3 className="text-[19px] sm:text-[21px] font-bold leading-[1.3] text-primary mb-2.5 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-[14px] text-muted leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>
      </div>
    </Link>
  );
}
