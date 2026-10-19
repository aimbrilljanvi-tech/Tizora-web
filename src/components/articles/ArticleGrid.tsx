import { ArticleCard, ArticleCardData } from './ArticleCard';

export interface ArticleGridProps {
  articles: ArticleCardData[];
  className?: string;
  emptyMessage?: string;
}

export function ArticleGrid({ articles, className, emptyMessage = 'No articles yet. Check back soon.' }: ArticleGridProps) {
  return (
    <section
      data-component-id="A002"
      data-component-name="ArticleGrid"
      className={className || 'border-t border-border pt-10 pb-16 sm:pt-12 sm:pb-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full'}
    >
      {articles.length === 0 ? (
        <p className="text-[15px] text-muted">{emptyMessage}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
