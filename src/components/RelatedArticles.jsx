// RelatedArticles — sidebar/footer widget auto-pick cluster articles.
// Renders before CTABridge, boost internal linking density 7-10+ for topical authority.
//
// Skill seo-blog-quality-pipeline.md v1.1+ §2 chuẩn #16.
import { Link } from 'react-router-dom';
import { articles } from '../data/articles.js';

export default function RelatedArticles({ currentSlug, cluster, maxCount = 4 }) {
  const related = articles
    .filter((a) => a.slug !== currentSlug && (cluster ? a.cluster === cluster : true))
    .slice(0, maxCount);
  if (related.length === 0) return null;
  return (
    <section
      className="my-12 p-7 md:p-9 border border-rule bg-paper rounded-lg"
      aria-label="Bài liên quan trong cluster"
    >
      <h2 className="!mt-0 font-headline text-2xl md:text-3xl mb-6 text-ink">
        Đọc thêm cùng chủ đề
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {related.map((a) => (
          <li key={a.slug} className="flex flex-col">
            <Link
              to={`/bai-viet/${a.slug}`}
              className="text-base font-medium text-ink border-b border-rule hover:border-gold pb-1 transition no-underline"
            >
              {a.title}
            </Link>
            <span className="text-sm text-ink/65 mt-2">
              {a.primaryKeyword} · {a.readingMinutes} phút đọc
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
