// Inject Article + BreadcrumbList + ImageObject + (conditional) HowTo JSON-LD per article.
// Author Person + Publisher Organization already baked static trong index.html
// (referenced via @id "https://hayweb.vn/#founder" + "#organization").
//
// Lessons learned Day 38 Plan A S2: static-bake essential cho AI engines static fetch.
// Vì React Router là SPA, runtime injection bổ sung cho Google crawler render.
//
// Skill seo-blog-quality-pipeline.md v1.1+ §2 chuẩn #15 — Schema expansion.
import { useEffect } from 'react';
import { trackArticleView } from '../lib/analytics.js';

export default function ArticleSchema({ article, howToSteps }) {
  useEffect(() => {
    trackArticleView(article.slug, article.primaryKeyword || article.keywords?.[0], article.wordCount);
    const url = `https://hoc.hayweb.vn/bai-viet/${article.slug}`;
    const heroAbsoluteUrl = `https://hoc.hayweb.vn${article.heroImage}`;

    const graph = [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: article.title,
        description: article.description,
        datePublished: article.publishDate,
        dateModified: article.dateModified || article.publishDate,
        author: { '@id': 'https://hayweb.vn/#founder' },
        publisher: { '@id': 'https://hayweb.vn/#organization' },
        inLanguage: 'vi-VN',
        mainEntityOfPage: url,
        image: { '@id': `${url}#hero-image` },
        keywords: article.keywords.join(', '),
        wordCount: article.wordCount,
        timeRequired: article.readingMinutes ? `PT${article.readingMinutes}M` : undefined,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Trang chủ', item: 'https://hoc.hayweb.vn/' },
          { '@type': 'ListItem', position: 2, name: article.title, item: url },
        ],
      },
      {
        '@type': 'ImageObject',
        '@id': `${url}#hero-image`,
        url: heroAbsoluteUrl,
        contentUrl: heroAbsoluteUrl,
        width: 1200,
        height: 675,
        caption: article.heroAlt,
        creditText: 'HAYWEB',
        creator: { '@id': 'https://hayweb.vn/#organization' },
      },
    ];

    if (Array.isArray(howToSteps) && howToSteps.length >= 2) {
      graph.push({
        '@type': 'HowTo',
        '@id': `${url}#howto`,
        name: article.title,
        description: article.description,
        step: howToSteps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      });
    }

    const schema = { '@context': 'https://schema.org', '@graph': graph };

    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.dataset.articleSchema = article.slug;
    tag.textContent = JSON.stringify(schema);
    document.head.appendChild(tag);

    document.title = `${article.title} — HAYWEB Học`;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', article.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    return () => {
      tag.remove();
    };
  }, [article, howToSteps]);

  return null;
}
