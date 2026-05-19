// Article registry — single source of truth cho 5 bài.
// Mỗi article có frontmatter metadata + import lazy content component.
// Audit trail YAML mirror tại _audit-trail/[slug].yaml.

export const articles = [
  {
    slug: 'seo-la-gi',
    title: 'SEO là gì? Bắt đầu từ đâu cho website doanh nghiệp',
    description:
      'SEO là tối ưu website để xuất hiện cao trên Google. Bài này giải thích plain Vietnamese, kèm case study Backlinko + cách HAYWEB triển khai chuẩn 2026.',
    primaryKeyword: 'SEO là gì',
    keywords: ['SEO là gì', 'SEO cho doanh nghiệp', 'bắt đầu SEO 2026'],
    publishDate: '2026-05-25',
    dateModified: '2026-05-25',
    readingMinutes: 9,
    heroImage: '/images/articles/seo-la-gi-hero.webp',
    heroAlt: 'Bàn làm việc tối giản với laptop, sổ tay và biểu đồ tăng trưởng SEO',
    aiDisclosure: {
      involvementPercentage: '30-40%',
      tools: ['Claude Opus 4.7', 'Ollama Qwen 32B'],
      humanReview: '100%',
    },
    sources: [
      {
        url: 'https://backlinko.com/seo-this-year',
        label: 'Backlinko — SEO Guide 2026',
        retrieved: '2026-05-19',
      },
      {
        url: 'https://ahrefs.com/blog/seo-statistics/',
        label: 'Ahrefs — SEO Statistics 2026',
        retrieved: '2026-05-19',
      },
    ],
  },
  {
    slug: 'aeo-toi-uu-ai-search',
    title: 'AEO 2026: Tối ưu cho AI search (ChatGPT, Gemini, Perplexity, AI Hay)',
    description:
      'AEO là tối ưu để AI search engines cite website của bạn. Bài này phân biệt SEO vs AEO, cite Princeton GEO paper + Decision Lab Vietnam AI Hay 47%.',
    primaryKeyword: 'tối ưu AI search',
    keywords: ['AEO', 'AI search optimization', 'AI Hay Việt Nam', 'tối ưu ChatGPT'],
    publishDate: '2026-05-25',
    dateModified: '2026-05-25',
    readingMinutes: 11,
    heroImage: '/images/articles/aeo-toi-uu-ai-search-hero.webp',
    heroAlt: 'Màn hình laptop hiển thị giao diện AI chat với câu trả lời được cite từ nhiều nguồn',
    aiDisclosure: {
      involvementPercentage: '30-40%',
      tools: ['Claude Opus 4.7', 'Ollama Qwen 32B'],
      humanReview: '100%',
    },
    sources: [
      {
        url: 'https://arxiv.org/abs/2311.09735',
        label: 'Aggarwal et al — GEO: Generative Engine Optimization (KDD 2024)',
        retrieved: '2026-05-19',
      },
      {
        url: 'https://www.decisionlab.co/vietnam-ai-adoption-2026',
        label: 'Decision Lab — Vietnam AI Adoption Survey 2026',
        retrieved: '2026-05-19',
      },
      {
        url: 'https://www.brightlocal.com/research/local-consumer-review-survey/',
        label: 'BrightLocal — Local Consumer Review Survey 2026',
        retrieved: '2026-05-19',
      },
    ],
  },
  {
    slug: 'local-seo-viet-nam',
    title: 'Local SEO Việt Nam: Map Pack + AI local pack thay đổi 2026',
    description:
      'Local SEO Việt Nam 2026 — Map Pack vẫn primary cho B2C (proximity 55%) nhưng AI local pack đang lên. Khác biệt theo ngành (Nhà hàng / Spa / Y tế / Luật).',
    primaryKeyword: 'Local SEO Việt Nam',
    keywords: ['Local SEO', 'Map Pack', 'Google Business Profile', 'AI local pack'],
    publishDate: '2026-05-25',
    dateModified: '2026-05-25',
    readingMinutes: 10,
    heroImage: '/images/articles/local-seo-viet-nam-hero.webp',
    heroAlt: 'Bản đồ Hà Nội trên điện thoại với các pin định vị doanh nghiệp gần',
    aiDisclosure: {
      involvementPercentage: '30-40%',
      tools: ['Claude Opus 4.7', 'Ollama Qwen 32B'],
      humanReview: '100%',
    },
    sources: [
      {
        url: 'https://whitespark.ca/blog/local-search-ranking-factors/',
        label: 'Whitespark — Local Search Ranking Factors Survey (47-expert)',
        retrieved: '2026-05-19',
      },
      {
        url: 'https://searchatlas.com/blog/local-seo-ranking-factors-study/',
        label: 'Search Atlas — Local SEO XGBoost Study (7,718 businesses)',
        retrieved: '2026-05-19',
      },
      {
        url: 'https://www.brightlocal.com/research/local-consumer-review-survey/',
        label: 'BrightLocal — LCRS 2026',
        retrieved: '2026-05-19',
      },
    ],
  },
  {
    slug: 'content-chuan-seo-2026',
    title: 'Content chuẩn SEO 2026: E-E-A-T + minh bạch AI theo Thông tư 18',
    description:
      'Content chuẩn SEO 2026 cần đạt E-E-A-T (Experience/Expertise/Authoritativeness/Trustworthiness) + minh bạch AI theo Thông tư 18/2027. Bài giải thích plain VN.',
    primaryKeyword: 'content chuẩn SEO 2026',
    keywords: ['content SEO 2026', 'E-E-A-T', 'minh bạch AI', 'Thông tư 18'],
    publishDate: '2026-05-25',
    dateModified: '2026-05-25',
    readingMinutes: 12,
    heroImage: '/images/articles/content-chuan-seo-2026-hero.webp',
    heroAlt: 'Bàn biên tập với tài liệu in ấn, bút máy và laptop hiển thị bài viết',
    aiDisclosure: {
      involvementPercentage: '30-40%',
      tools: ['Claude Opus 4.7', 'Ollama Qwen 32B'],
      humanReview: '100%',
    },
    sources: [
      {
        url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        label: 'Google — Creating Helpful, People-First Content',
        retrieved: '2026-05-19',
      },
      {
        url: 'https://ahrefs.com/blog/ai-overviews-study/',
        label: 'Ahrefs — AI Overviews 17M Article Study (Aug 2025)',
        retrieved: '2026-05-19',
      },
    ],
  },
  {
    slug: 'bao-mat-website-mozilla',
    title: 'Bảo mật website: Mozilla Observatory 100/100 cho doanh nghiệp',
    description:
      'Mozilla Observatory chấm bảo mật website /100. Đạt 100/100 cần đủ 9 security headers (CSP, HSTS, X-Frame-Options...). Bài giải thích từng cái + cách triển khai.',
    primaryKeyword: 'bảo mật website',
    keywords: ['Mozilla Observatory', 'bảo mật website', 'security headers', 'CSP HSTS'],
    publishDate: '2026-05-25',
    dateModified: '2026-05-25',
    readingMinutes: 10,
    heroImage: '/images/articles/bao-mat-website-mozilla-hero.webp',
    heroAlt: 'Khóa số an ninh trước màn hình code, biểu trưng cho bảo mật website',
    aiDisclosure: {
      involvementPercentage: '30-40%',
      tools: ['Claude Opus 4.7', 'Ollama Qwen 32B'],
      humanReview: '100%',
    },
    sources: [
      {
        url: 'https://developer.mozilla.org/en-US/observatory',
        label: 'Mozilla Observatory — Web Security Scanner',
        retrieved: '2026-05-19',
      },
      {
        url: 'https://owasp.org/www-project-secure-headers/',
        label: 'OWASP — Secure Headers Project',
        retrieved: '2026-05-19',
      },
    ],
  },
];

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}
