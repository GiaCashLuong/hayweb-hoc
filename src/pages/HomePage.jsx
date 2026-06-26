import { articles } from '../data/articles.js';
import ArticleCard from '../components/ArticleCard.jsx';

export default function HomePage() {
  return (
    <div className="container-wide py-12 md:py-16">
      <section className="mb-14 max-w-3xl">
        <h1 className="font-headline text-4xl md:text-5xl leading-tight mb-5">
          Học SEO, AEO, GEO, Content & Bảo mật chuẩn 2026
        </h1>
        <p className="text-lg leading-relaxed text-muted">
          Blog học cho doanh nghiệp Việt Nam: SEO truyền thống, tối ưu cho AI
          search (ChatGPT, Gemini, Perplexity, AI Hay), Local SEO, content
          chuẩn E-E-A-T và bảo mật website Mozilla 100/100.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          {/* S5B-ext 2026-05-20 Day 39 night: same-tab nav + funnel "Tư vấn" sang hayweb.vn/contact (parent service) */}
          <a
            href="https://kiem-tra.hayweb.vn"
            className="btn-primary"
          >
            Đo website của bạn miễn phí
          </a>
          <a href="https://hayweb.vn/contact" className="btn-secondary">
            Tư vấn 1-on-1 (30 phút)
          </a>
        </div>
      </section>

      <section>
        <h2 className="font-headline text-2xl md:text-3xl mb-7">5 chủ đề cốt lõi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
