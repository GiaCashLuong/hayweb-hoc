import { Link } from 'react-router-dom';

export default function ArticleCard({ article }) {
  return (
    <Link
      to={`/bai-viet/${article.slug}`}
      className="card-article block group"
    >
      <div className="aspect-[16/10] bg-rule/40 rounded-md mb-4 overflow-hidden">
        <img
          src={article.heroImage}
          alt={article.heroAlt}
          loading="lazy"
          className="w-full h-full object-cover transition group-hover:scale-[1.02]"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <div className="flex items-center gap-3 text-xs text-muted mb-2">
        <time dateTime={article.publishDate}>{article.publishDate}</time>
        <span>•</span>
        <span>{article.readingMinutes} phút đọc</span>
      </div>
      <h3 className="font-headline text-xl leading-snug mb-2 group-hover:text-accent transition">
        {article.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed line-clamp-3">
        {article.description}
      </p>
    </Link>
  );
}
