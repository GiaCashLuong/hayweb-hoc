// Inject Article + BreadcrumbList JSON-LD per article (AI engines static fetch).
// Lessons learned Day 38 Plan A S2: static-bake essential, useEffect-runtime sẽ bị miss.
// Vì React Router là SPA, runtime injection vẫn ok cho Google (renders JS) nhưng
// chúng ta render dưới dạng <script type="application/ld+json"> trong DOM ở mount.
import { useEffect } from 'react';

export default function ArticleSchema({ article }) {
  useEffect(() => {
    const url = `https://hoc.hayweb.vn/bai-viet/${article.slug}`;
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
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
          image: `https://hoc.hayweb.vn${article.heroImage}`,
          keywords: article.keywords.join(', '),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Trang chủ',
              item: 'https://hoc.hayweb.vn/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: article.title,
              item: url,
            },
          ],
        },
      ],
    };

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
  }, [article]);

  return null;
}
