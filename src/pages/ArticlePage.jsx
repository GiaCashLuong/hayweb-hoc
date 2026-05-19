import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getArticle } from '../data/articles.js';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ArticleSchema from '../components/ArticleSchema.jsx';
import AIDisclosure from '../components/AIDisclosure.jsx';
import ExternalCitation from '../components/ExternalCitation.jsx';
import ArticleSEOLaGi from '../articles/seo-la-gi.jsx';
import ArticleAEO from '../articles/aeo-toi-uu-ai-search.jsx';
import ArticleLocal from '../articles/local-seo-viet-nam.jsx';
import ArticleContent from '../articles/content-chuan-seo-2026.jsx';
import ArticleSecurity from '../articles/bao-mat-website-mozilla.jsx';

const articleComponents = {
  'seo-la-gi': ArticleSEOLaGi,
  'aeo-toi-uu-ai-search': ArticleAEO,
  'local-seo-viet-nam': ArticleLocal,
  'content-chuan-seo-2026': ArticleContent,
  'bao-mat-website-mozilla': ArticleSecurity,
};

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);
  const Body = articleComponents[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!article || !Body) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="py-12 md:py-16">
      <ArticleSchema article={article} />

      <div className="container-prose">
        <Breadcrumb
          items={[
            { label: 'Trang chủ', href: '/' },
            { label: 'Bài viết', href: '/' },
            { label: article.title },
          ]}
        />

        <h1 className="font-headline text-3xl md:text-5xl leading-tight mb-4">
          {article.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-7">
          <span>HAYWEB Editorial Team</span>
          <span>•</span>
          <time dateTime={article.publishDate}>{article.publishDate}</time>
          <span>•</span>
          <span>{article.readingMinutes} phút đọc</span>
        </div>

        <figure className="mb-8">
          <img
            src={article.heroImage}
            alt={article.heroAlt}
            className="w-full rounded-lg border border-rule"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </figure>
      </div>

      <div className="container-prose prose-article">
        <Body article={article} />
      </div>

      <div className="container-prose">
        <AIDisclosure disclosure={article.aiDisclosure} />
        <ExternalCitation sources={article.sources} />
      </div>
    </article>
  );
}
