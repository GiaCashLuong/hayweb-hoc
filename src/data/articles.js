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
    cluster: 'seo-foundation',
    publishDate: '2026-05-20',
    dateModified: '2026-05-20',
    readingMinutes: 12,
    wordCount: 2280,
    heroImage: '/images/articles/seo-la-gi-hero.webp',
    heroAlt: 'Bàn làm việc tối giản với typewriter cổ, sổ tay phác họa mũi tên tăng trưởng và ba khối gỗ khắc chữ S E O',
    aiDisclosure: {
      involvementPercentage: '35%',
      tools: ['Ollama Qwen 14B Q5 (Pass 1 + Pass 2)', 'Claude Opus 4.7 (anti-fab cross-check + manual edit)'],
      humanReview: '100% (founder Nguyễn Thế Quyền review final)',
    },
    sources: [
      {
        url: 'https://backlinko.com/google-ctr-stats',
        label: 'Backlinko — Google CTR stats (11.8 triệu kết quả search)',
        retrieved: '2026-05-20',
      },
      {
        url: 'https://ahrefs.com/blog/ai-overviews-study/',
        label: 'Ahrefs — AI Overviews 17 triệu bài study (Aug 2025)',
        retrieved: '2026-05-20',
      },
      {
        url: 'https://web.dev/articles/lcp',
        label: 'web.dev — Largest Contentful Paint (LCP) thresholds',
        retrieved: '2026-05-20',
      },
      {
        url: 'https://developer.mozilla.org/en-US/observatory',
        label: 'Mozilla Observatory — web security scanner',
        retrieved: '2026-05-20',
      },
      {
        url: 'https://arxiv.org/abs/2311.09735',
        label: 'arXiv — GEO: Generative Engine Optimization (Aggarwal et al, KDD 2024)',
        retrieved: '2026-05-20',
      },
      {
        url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
        label: 'Google Search Central — SEO Starter Guide',
        retrieved: '2026-05-20',
      },
    ],
    howToSteps: [
      {
        name: 'Tháng 1: Audit kỹ thuật + foundation',
        text: 'Chạy website qua kiem-tra.hayweb.vn để xem 7 chỉ tiêu cơ bản (Mozilla Observatory / SSL / Lighthouse / Schema / H1 / Alt / TTFB) trong 30-60 giây. Song song keyword research 10-20 từ khóa mix head + long-tail và competitor audit top 5 SERP cho từng keyword chính.',
      },
      {
        name: 'Tháng 2-3: On-page optimize + Google tools setup',
        text: 'Viết lại 5-10 trang chính (title + meta + heading + alt text). Thêm schema markup Organization + LocalBusiness + Service/Product + Article. Fix tốc độ mobile để LCP ≤ 2.5 giây. Setup Google Search Console + Analytics 4 + Google Business Profile + Microsoft Clarity.',
      },
      {
        name: 'Tháng 3-6: Content cadence đều đặn',
        text: 'Mục tiêu 4-8 bài chất lượng mỗi tháng, mỗi bài 1800-2800 từ tiếng Việt có chiều sâu. Tỷ lệ chất liệu: 40-50% citation Tier-1 source với commentary Việt Nam, 30-40% quan sát thực địa doanh nghiệp bạn, 10-20% insight gốc, ≥15% dữ liệu riêng cho từ khóa commercial Tier-1.',
      },
      {
        name: 'Tháng 6+: Đo lường + tinh chỉnh',
        text: 'Google Search Console theo dõi impression + CTR + position weekly. Microsoft Clarity xem heatmap + session recording fix UX drop-off. A/B test title tag improve CTR. Mở rộng cluster nội dung quanh chủ đề đã thắng. Không refresh cosmetic chỉ để update date — chỉ refresh khi có ≥20-30% substantive textual change.',
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
    cluster: 'seo-foundation',
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
    cluster: 'seo-foundation',
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
    cluster: 'seo-foundation',
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
    cluster: 'seo-foundation',
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
  {
    slug: 'backlink-la-gi-3-tier-active-inactive-devalued',
    title: 'Backlink là gì? Phân loại 3 tier Active / Inactive / Devalued + cách audit 2026',
    description:
      'Backlink là link từ website khác trỏ về site của bạn. 3 tier: Active (pass ranking) / Inactive (neutral) / Devalued (Google bỏ qua hoặc phạt). Bài giải thích cơ chế Google đo qua PageRank + SpamBrain + TrustRank.',
    primaryKeyword: 'backlink là gì',
    keywords: [
      'backlink là gì',
      'phân loại backlink',
      'backlink chất lượng',
      'Active Inactive Devalued backlink',
      'DR Ahrefs khác PageRank',
      'kiểm tra backlink chất lượng',
    ],
    cluster: 'seo-foundation',
    publishDate: '2026-07-14',
    dateModified: '2026-06-07',
    readingMinutes: 16,
    wordCount: 3176,
    heroImage: '/images/articles/backlink-la-gi-3-tier-active-inactive-devalued-hero.webp',
    heroAlt:
      'Sơ đồ 3 tier backlink: Active (xanh, mũi tên pass ranking) / Inactive (xám, neutral) / Devalued (đỏ, Google bỏ qua)',
    aiDisclosure: {
      involvementPercentage: '<35%',
      tools: [
        'Ollama Qwen 14B Q5 (Tầng A+B)',
        'Claude Sonnet 4.6 (Tầng C UTF-8 fix)',
        'Claude Opus 4.7 (Tầng D doctrine enforce + voice register Lớp 1-5 sweep)',
      ],
      humanReview: '100% (founder Nguyễn Thế Quyền review final)',
    },
    sources: [
      {
        url: 'https://patents.google.com/patent/US7716225',
        label: 'USPTO Patent 7,716,225 — Reasonable Surfer PageRank (Google)',
        retrieved: '2026-06-07',
      },
      {
        url: 'https://patents.google.com/patent/US7743065',
        label: 'USPTO Patent 7,743,065 — Temporal velocity link signal',
        retrieved: '2026-06-07',
      },
      {
        url: 'https://developers.google.com/search/blog/2016/09/penguin-is-now-part-of-our-core',
        label: 'Google Search blog — Penguin 4.0 granular per-link spam filter',
        retrieved: '2026-06-07',
      },
      {
        url: 'https://developers.google.com/search/blog/2022/12/spambrain-2022',
        label: 'Google Search Central — SpamBrain ML score',
        retrieved: '2026-06-07',
      },
      {
        url: 'https://www.vldb.org/conf/2004/RS15P3.PDF',
        label: 'TrustRank — Gyöngyi et al, VLDB 2004',
        retrieved: '2026-06-07',
      },
      {
        url: 'https://observatory-api.mdn.mozilla.net',
        label: 'Mozilla Observatory v2 API — hoc.hayweb.vn A+ 120 self-proof',
        retrieved: '2026-06-07',
      },
    ],
    howToSteps: null,
  },
  {
    slug: 'ai-overviews-vs-ai-mode-google-2026-chien-luoc-content',
    title: 'AI Overviews so với AI Mode Google 2026: Hiểu khác biệt và chiến lược nội dung',
    description:
      'AI Overviews là khối tóm tắt Gemini đầu SERP (LIVE 28/10/2024 tại VN). AI Mode là thẻ riêng chat hội thoại nhiều lượt (LIVE 30/08/2025). Bài này giải thích khác biệt + cách tối ưu cho cả hai.',
    primaryKeyword: 'AI Overviews vs AI Mode',
    keywords: [
      'AI Overviews là gì',
      'AI Mode Google',
      'AI Overviews vs AI Mode',
      'Google AI search 2026',
      'tối ưu content cho AI Overviews',
      'AEO chiến lược 2026',
    ],
    cluster: 'aeo',
    publishDate: '2026-07-07',
    dateModified: '2026-06-07',
    readingMinutes: 15,
    wordCount: 2913,
    heroImage: '/images/articles/ai-overviews-vs-ai-mode-google-2026-chien-luoc-content-hero.webp',
    heroAlt:
      'Sơ đồ so sánh AI Overviews (khối tóm tắt đầu SERP) và AI Mode (thẻ chat conversational nhiều lượt)',
    aiDisclosure: {
      involvementPercentage: '<35%',
      tools: [
        'Ollama Qwen 14B Q5 (Tầng A+B)',
        'Claude Sonnet 4.6 (Tầng C UTF-8 fix)',
        'Claude Opus 4.7 (Tầng D doctrine enforce + voice register Lớp 1-5 sweep)',
      ],
      humanReview: '100% (founder Nguyễn Thế Quyền review final)',
    },
    sources: [
      {
        url: 'https://ahrefs.com/blog/ai-overviews-study/',
        label: 'Ahrefs — AI Overviews 17M URL study (Aug 2025)',
        retrieved: '2026-06-06',
      },
      {
        url: 'https://backlinko.com/hub/seo/google-ai-overviews',
        label: 'Backlinko — Google AI Overviews hub',
        retrieved: '2026-06-06',
      },
      {
        url: 'https://blog.google/intl/vi/',
        label: 'Google Search blog Vietnam — AI Mode VN 30/08/2025',
        retrieved: '2026-06-06',
      },
      {
        url: 'https://www.brightedge.com/resources/research-reports',
        label: 'BrightEdge — AI Overviews per-vertical penetration data 2025',
        retrieved: '2026-06-06',
      },
      {
        url: 'https://www.brightlocal.com/research/',
        label: 'BrightLocal — Search Consumer Survey 2025',
        retrieved: '2026-06-06',
      },
      {
        url: 'https://www.pewresearch.org/internet/',
        label: 'Pew Research — American Trends Panel 2024 AI search behavior',
        retrieved: '2026-06-06',
      },
      {
        url: 'https://observatory-api.mdn.mozilla.net',
        label: 'Mozilla Observatory v2 API — hoc.hayweb.vn A+ 120 self-proof',
        retrieved: '2026-06-06',
      },
    ],
    howToSteps: null,
  },
];

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}
