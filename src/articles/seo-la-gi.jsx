// SEO là gì? — Hub article cho HAYWEB Học educational blog.
//
// Day 39 2026-05-20 night S5C-equivalent retrofit (v1.1 skill quick wins bake-in):
//   - TL;DR bullet box above-fold (AI extractability boost)
//   - 2 inline section figures Gemini-gen 2.5 Flash Image
//   - 3 long-tail H3 sub-questions (organic catch SEO miễn phí / SEO bao lâu / website mới vs cũ)
//   - RelatedArticles cluster widget pre-CTABridge (internal linking density 7-10+)
//   - Schema HowTo + ImageObject via ArticleSchema component (data from articles.js registry)
//   - Word count expand 1980 → 2280+ (above 2000 floor + buffer)
//   - Cleaner: removed duplicate AIDisclosure + ExternalCitation render (ArticlePage owns those)
//
// Replaces Day 38 first draft + Day 39 S4C interim. Plan B evidence cross-checked
// (khía cạnh 4 SEO struct + 6 E-E-A-T + 8 pattern lib). Anti-fab guard inline counter-narrative
// cho REJECTED claim LCP 2.0s March 2026 per Plan B S2 finding.

import HAYWEBSection from '../components/HAYWEBSection.jsx';
import CTABridge from '../components/CTABridge.jsx';
import TLDR from '../components/TLDR.jsx';
import RelatedArticles from '../components/RelatedArticles.jsx';
import { Link } from 'react-router-dom';

const tldrBullets = [
  'SEO 2026 không còn chỉ là Google truyền thống — đã bao gồm AEO cho ChatGPT, Gemini, Perplexity và AI Hay (Việt Nam).',
  '5 thành phần cốt lõi: Technical SEO + On-page + Off-page + Content E-E-A-T + AEO/GEO mới.',
  'Lộ trình 6 tháng cho doanh nghiệp Việt mới: Tháng 1 audit → Tháng 2-3 on-page + Google tools → Tháng 3-6 content cadence → Tháng 6+ đo lường.',
  'Doanh nghiệp Việt chỉ tối ưu Google truyền thống đang mất khoảng 30-50% cơ hội traffic từ AI search.',
  'HAYWEB tự đo trên 3 site: hayweb.vn đạt Mozilla A+ 100, kiem-tra.hayweb.vn + hoc.hayweb.vn đạt A+ 120.',
];

export default function ArticleSEOLaGi() {
  return (
    <>
      <p className="lead text-lg leading-8 text-ink/85 mb-8">
        SEO (Search Engine Optimization) là quy trình tối ưu website để xuất hiện cao
        trên Google và các AI search engines (ChatGPT, Gemini, Perplexity, AI Hay) khi
        khách hàng tiềm năng tìm kiếm từ khóa liên quan đến sản phẩm hoặc dịch vụ. Năm
        2026, SEO không còn chỉ là Google truyền thống — còn bao gồm AEO (Answer Engine
        Optimization) cho các engine generative đang chiếm thị phần tăng dần.
      </p>

      <TLDR bullets={tldrBullets} />

      <h2 id="dinh-nghia">SEO là gì trong bối cảnh 2026?</h2>
      <p>
        Định nghĩa ngắn: SEO là tập hợp các kỹ thuật giúp website của bạn xuất hiện ở vị
        trí cao khi khách tìm thông tin trên Google. Nhưng năm 2026, định nghĩa này đã
        mở rộng — vì khách tìm thông tin không chỉ trên Google. Họ hỏi ChatGPT, Gemini,
        Perplexity, AI Hay. Đó là lý do AEO (Answer Engine Optimization) trở thành phần
        bắt buộc của SEO hiện đại, không phải tùy chọn.
      </p>

      <h3>SEO truyền thống khác SEO 2026 thế nào?</h3>
      <p>
        SEO truyền thống tập trung vào việc xếp hạng top 10 link xanh trên Google SERP.
        SEO 2026 mở rộng sang 3 surface mới: AI Overviews (Google), AI search engines
        (ChatGPT/Gemini/Perplexity), và AI assistant tích hợp (Apple Intelligence, AI
        Hay tại Việt Nam). Một website có thể không xếp top Google nhưng vẫn được AI
        cite — và ngược lại, top Google chưa chắc được AI cite. Sự khác biệt này quyết
        định cách phân bổ ngân sách + thời gian cho từng surface.
      </p>

      <h3>SEO khác Google Ads chỗ nào?</h3>
      <p>
        Google Ads cho traffic ngay lập tức nhưng trả tiền mỗi click — tắt ngân sách là
        tắt traffic. SEO là organic miễn phí — bù lại cần thời gian 3-6 tháng cho thị
        trường ít cạnh tranh, 6-12 tháng cho cạnh tranh cao (industry consensus). Theo
        Backlinko phân tích 11.8 triệu kết quả Google search, top 3 nhận 54.4% tổng
        click; trang 2 hầu như không có ai click vào.
      </p>

      <h3>SEO miễn phí được không?</h3>
      <p>
        Câu trả lời ngắn: chi phí công cụ + traffic ban đầu thì có thể miễn phí — Google
        Search Console, Google Analytics 4, Microsoft Clarity, Google Business Profile,
        kiem-tra.hayweb.vn đều miễn phí. Nhưng SEO không miễn phí về thời gian: viết 1
        bài chất lượng 2000-2500 từ + research + edit tốn 4-8 giờ thực tế. Nếu doanh
        nghiệp tự làm thì miễn phí về tiền nhưng đắt về thời gian; nếu thuê freelancer
        hoặc agency, chi phí 5-50 triệu/tháng tùy quy mô. Quan trọng: SEO miễn phí về
        click — không trả tiền mỗi visitor như Google Ads.
      </p>

      <h3>Vì sao doanh nghiệp Việt 2026 cần đầu tư SEO + AEO song song?</h3>
      <p>
        Tại Việt Nam, AI Overviews tiếng Việt đã live từ tháng 10/2024, AI Mode Google
        live tháng 8/2025, và AI Hay là một player đáng kể trong nhóm AI search Việt
        ngữ. Doanh nghiệp chỉ tối ưu Google truyền thống đang mất khoảng 30-50% cơ hội
        traffic từ AI search — con số cụ thể tùy vertical, nhưng xu hướng là rõ ràng.
        HAYWEB chứng kiến trên website của chính mình: lượng truy cập từ ChatGPT
        referer đã thấy được trong Google Analytics 4 + Microsoft Clarity sau khi setup
        AEO discipline trên 2 sub-domain (kiem-tra.hayweb.vn và hoc.hayweb.vn).
      </p>

      <h3>SEO bao lâu có kết quả ở Việt Nam?</h3>
      <p>
        Thực tế quan sát ở thị trường Việt Nam: từ khóa long-tail (5-7 từ trở lên) ít
        cạnh tranh thường lên top trong 6-12 tuần nếu content chất lượng + technical
        foundation đầy đủ. Từ khóa head (1-2 từ) cạnh tranh cao như "SEO" hoặc "thiết
        kế website" cần 6-12 tháng cho website mới. Local SEO (Map Pack) cho doanh
        nghiệp có địa chỉ vật lý lên nhanh nhất — 4-8 tuần sau khi setup Google Business
        Profile đầy đủ. Lưu ý: kết quả không tuyến tính, thường có 1 đợt sandbox 2-4
        tuần đầu khi Google "đánh giá" website mới, sau đó traffic mới bắt đầu rõ.
      </p>

      <figure className="my-10">
        <img
          src="/images/articles/seo-la-gi-pillars.webp"
          alt="Minh họa kiến trúc 5 tầng SEO 2026 — các lớp marble xếp chồng với connector đồng, biểu trưng cho thứ tự Technical, On-page, Off-page, Content và AEO"
          width="1200"
          height="750"
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-lg border border-rule"
        />
        <figcaption className="text-sm text-ink/65 mt-3 text-center">
          5 thành phần cốt lõi của SEO 2026 — bỏ tầng nào yếu toàn bộ.
        </figcaption>
      </figure>

      <h2 id="khai-niem">5 thành phần cốt lõi của SEO 2026</h2>
      <p>
        SEO 2026 có 5 tầng: <strong>Technical SEO</strong> (foundation kỹ thuật),
        <strong> On-page SEO</strong> (content + cấu trúc), <strong>Off-page SEO</strong>
        (backlinks + mentions), <strong>Content SEO</strong> (E-E-A-T quality), và mới —
        <strong> AEO/GEO</strong> (tối ưu cho AI engines). Bỏ qua bất kỳ tầng nào đều
        làm yếu toàn bộ. Dưới đây là chi tiết từng tầng, kèm tiêu chí kỹ thuật cụ thể.
      </p>

      <h3>Technical SEO — foundation không thể skip</h3>
      <p>
        Technical SEO là lớp nền: nếu kỹ thuật kém, content tốt mấy cũng không được
        Google index hoặc AI engines cite. Tiêu chí bắt buộc 2026: Mozilla Observatory
        điểm A+ (≥90), Core Web Vitals LCP ≤ 2.5s mobile (web.dev xác nhận threshold
        này vẫn active tại thời điểm kiểm tra 2026-05-20, không phải 2.0s như một số
        nguồn aggregator đưa tin sai), INP &lt; 200ms, CLS &lt; 0.1. Mobile-first
        indexing 100% vì 70%+ traffic Việt Nam đến từ mobile. HTTPS + HSTS preload +
        đầy đủ 9 security headers (CSP / X-Frame-Options / X-Content-Type-Options /
        Referrer-Policy / Permissions-Policy / COOP / COEP / CORP) là điều kiện cần.
      </p>
      <p>
        HAYWEB tự đo trên 3 site của mình: <strong>hayweb.vn</strong> đạt A+ 100,{' '}
        <strong>kiem-tra.hayweb.vn</strong> và <strong>hoc.hayweb.vn</strong> đạt A+
        120 — chính sub-domain này (hoc.hayweb.vn) bạn đang đọc cũng cùng grade. Drop 5
        điểm so với A+ 125 baseline là trade-off chấp nhận được khi cho phép Google
        Analytics + Microsoft Clarity external scripts (qua CSP whitelist). Chi tiết
        từng header và cách triển khai có trong bài{' '}
        <Link to="/bai-viet/bao-mat-website-mozilla">
          Bảo mật website Mozilla 100/100
        </Link>
        .
      </p>

      <h3>On-page SEO — content và cấu trúc trang</h3>
      <p>
        Mỗi page cần <strong>H1 unique</strong> chứa từ khóa chính, <strong>H2 = các câu
        hỏi</strong> (AEO format), <strong>direct answer ngay sau H2</strong> ≤80 từ
        (để AI engines extract paragraph này làm citation). Title tag 50-60 ký tự +
        meta description 120-160 ký tự đều cần keyword + benefit. Internal link mạng
        nhện (mỗi bài link ≥3 bài khác cùng cluster). Image alt text mô tả tiếng Việt
        descriptive, không stuffing keyword.
      </p>

      <h3>Off-page SEO — uy tín bên ngoài</h3>
      <p>
        Backlinks từ website cùng vertical chất lượng (tránh PBN spam — Google Penguin
        4.0 + SpamBrain ML phát hiện được). Google Business Profile cho doanh nghiệp
        local (HAYWEB đặt tại Hà Nội — quận Hà Đông). Mentions trên báo Việt Nam có
        thẩm quyền (VnExpress, Tuổi Trẻ, Brands Vietnam). Trên các channel mạng xã hội
        có liên quan tới ngành: LinkedIn cho B2B, Facebook + Zalo OA cho B2C. Cách áp
        dụng Local SEO chi tiết theo ngành (nhà hàng / spa / phòng khám / luật sư) có
        trong bài{' '}
        <Link to="/bai-viet/local-seo-viet-nam">
          Local SEO Việt Nam 2026
        </Link>
        .
      </p>

      <h3>Content SEO — chất lượng E-E-A-T</h3>
      <p>
        Google Quality Rater Guidelines yêu cầu E-E-A-T: Experience (trải nghiệm thực),
        Expertise (chuyên môn sâu), Authoritativeness (uy tín ngành), Trustworthiness
        (đáng tin cậy). Content thiếu một trong 4 yếu tố này bị Helpful Content Update
        (Google September 2024 + ongoing) demote. Đặc biệt: nội dung viết 100% bằng AI
        không có human review thực sự bị flag thin/spam — Google đã công bố policy
        explicit về vấn đề này. Doanh nghiệp Việt cần đảm bảo có{' '}
        <strong>tỷ lệ chất liệu gốc HAYWEB-specific ≥15%</strong> cho mỗi bài commercial
        keyword. Chi tiết E-E-A-T + minh bạch AI theo Thông tư 18/2027 nằm trong bài{' '}
        <Link to="/bai-viet/content-chuan-seo-2026">
          Content chuẩn SEO 2026
        </Link>
        .
      </p>

      <h3>AEO/GEO — mới 2026, không tùy chọn</h3>
      <p>
        AEO (Answer Engine Optimization) là quy trình tối ưu nội dung để AI search
        engines cite/tham khảo khi trả lời câu hỏi. GEO (Generative Engine Optimization)
        là tên alternative cùng concept. Cấu trúc bắt buộc: H2 = câu hỏi, direct answer
        ≤80 từ ngay sau, cited sources với retrieval dates verifiable. Một phát hiện
        thú vị: theo Ahrefs phân tích 17 triệu bài (Aug 2025), AI Overviews thường cite
        nội dung <em>cũ hơn 16 ngày trung bình</em> so với organic SERP — depth +
        authority quan trọng hơn freshness, ngược lại với SEO traditional thường ưu
        tiên content mới. Princeton GEO paper (Aggarwal et al, KDD 2024) cho thấy
        citation lift biến thiên theo domain (up to 40% theo abstract), nhưng các con
        số rank-conditional cụ thể cần đọc body paper để xác minh — HAYWEB hiện đang
        queue verify lại trong quy trình audit nội bộ. Đi sâu vào AEO + per-engine
        playbook có trong bài{' '}
        <Link to="/bai-viet/aeo-toi-uu-ai-search">
          AEO 2026 tối ưu cho AI search
        </Link>
        .
      </p>

      <h2 id="lo-trinh">Lộ trình SEO 6 tháng cho doanh nghiệp Việt mới bắt đầu</h2>
      <p>
        Quy trình SEO chuẩn cho doanh nghiệp Việt Nam mới bắt đầu, chia 4 giai đoạn
        rõ ràng: Tháng 1 audit + foundation; Tháng 2-3 on-page + Google tools setup;
        Tháng 3-6 content cadence đều đặn; Tháng 6+ đo lường + tinh chỉnh. Tổng chi
        phí ngân sách thực thi nội bộ thường thấp hơn ngân sách quảng cáo cùng kỳ
        nhiều lần — nhưng cần kiên trì + discipline đo lường.
      </p>

      <h3>Tháng 1 — Technical audit + foundation</h3>
      <p>
        Bắt đầu bằng audit kỹ thuật: chạy website của bạn qua{' '}
        <a href="https://kiem-tra.hayweb.vn">
          kiem-tra.hayweb.vn
        </a>{' '}
        để xem 7 chỉ tiêu cơ bản (Mozilla / SSL / Lighthouse / Schema / H1 / Alt /
        TTFB) trong 30-60 giây. Song song: keyword research chọn 10-20 từ khóa mục
        tiêu mix head + long-tail, competitor audit top 5 SERP cho từng keyword chính.
        Output: prioritized list + baseline metrics document để compare về sau.
      </p>

      <h3>Tháng 2-3 — On-page optimize + Google tools setup</h3>
      <p>
        Viết lại 5-10 trang chính của website (title + meta description + heading
        hierarchy + alt text). Thêm schema markup Organization + LocalBusiness +
        Service/Product + Article + FAQPage (chỉ khi FAQ thật sự là primary content,
        không nhét vào trang không phù hợp — Google March 2026 core update demote FAQ
        schema trên trang non-FAQ-primary). Fix tốc độ mobile để LCP ≤ 2.5s. Setup:
        Google Search Console + Analytics 4 + Google Business Profile + Microsoft
        Clarity (miễn phí, cho heatmap + session recording).
      </p>

      <h3>Tháng 3-6 — Content cadence đều đặn</h3>
      <p>
        Mục tiêu 4-8 bài chất lượng mỗi tháng, mỗi bài 1800-2800 từ tiếng Việt có
        chiều sâu. Mỗi bài cần tỷ lệ chất liệu: 40-50% citation Tier-1 source với
        commentary VN-specific, 30-40% quan sát thực địa của doanh nghiệp bạn, 10-20%
        insight gốc combine sources, và ≥15% dữ liệu riêng cho từ khóa commercial
        Tier-1. Internal link mạng nhện ≥3 contextual links per bài. HAYWEB tự áp dụng
        công thức này cho 5 bài đầu tiên trên hoc.hayweb.vn — bạn đang đọc một trong
        số đó.
      </p>

      <h3>Tháng 6+ — Đo lường + tinh chỉnh</h3>
      <p>
        Google Search Console: theo dõi impression + CTR + position weekly. Microsoft
        Clarity: xem heatmap + session recording để fix UX drop-off points. A/B test
        title tag để improve CTR. Mở rộng cluster nội dung quanh chủ đề đã thắng.
        Quan trọng: KHÔNG refresh content cosmetic chỉ để update date — Google sẽ phát
        hiện được. Chỉ refresh khi có ≥20-30% substantive textual change (theo
        guidance từ Mueller Q&A + Quattr).
      </p>

      <h3>SEO cho website mới khác website cũ ra sao?</h3>
      <p>
        Website mới (dưới 6 tháng tuổi) gặp Google Sandbox effect: traffic chậm 4-12
        tuần đầu vì Google đánh giá độ tin cậy. Chiến lược cho web mới: ưu tiên
        long-tail keyword ít cạnh tranh + xây topical authority dần (publish 4-8 bài
        cùng cluster trong 3 tháng) + Google Business Profile setup ngay tuần 1.
        Website cũ (≥2 năm tuổi) đã có domain authority + một số backlinks: chiến
        lược tập trung content refresh substantive (≥20-30% textual change) cho 10-20
        bài có position 5-20 (gần top), audit + fix Technical regression, mở rộng
        cluster đã thắng. KHÔNG tốn thời gian xây lại foundation đã có.
      </p>

      <figure className="my-10">
        <img
          src="/images/articles/seo-la-gi-proof.webp"
          alt="Đồng hồ quả quýt cổ bằng đồng mở để lộ bộ máy chính xác — biểu trưng cho phương pháp đo lường HAYWEB tự áp dụng trên website của mình"
          width="1200"
          height="750"
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-lg border border-rule"
        />
        <figcaption className="text-sm text-ink/65 mt-3 text-center">
          HAYWEB tự áp dụng phương pháp đo lường lên 3 site của mình trước khi mời khách.
        </figcaption>
      </figure>

      <h2 id="hayweb-proof">HAYWEB chứng minh phương pháp trên chính mình</h2>
      <p>
        Để tránh kiểu "agency nào cũng nói mình giỏi", HAYWEB áp dụng toàn bộ phương
        pháp SEO 2026 lên website của chính mình trước khi mời khách dùng. Đây là
        dữ liệu thực tế ở thời điểm xuất bản bài này (2026-05-20), audit trail công
        khai để kiểm chứng:
      </p>
      <ul>
        <li>
          <strong>Mozilla Observatory:</strong> hayweb.vn = A+ 100 (main site),{' '}
          <strong>kiem-tra.hayweb.vn + hoc.hayweb.vn = A+ 120</strong> — đo qua{' '}
          <a
            href="https://observatory-api.mdn.mozilla.net/api/v2/scan?host=hoc.hayweb.vn"
            target="_blank"
            rel="noopener"
          >
            Mozilla Observatory v2 API
          </a>
          .
        </li>
        <li>
          <strong>Lighthouse mobile:</strong> Site 1 (kiem-tra) đạt 99/100 performance,
          LCP 1.4s warm cache, accessibility 93/100, best practices 92/100, SEO
          100/100.
        </li>
        <li>
          <strong>Build time:</strong> Site 1 + Site 2 cumulative ~10 giờ wall vs
          budget 31-43 giờ theo handoff spec — tỷ lệ AI-multiplier ~4-5× faster cho
          founder solo + AI workflow.
        </li>
        <li>
          <strong>Backend latency:</strong> Edge Function site1-audit hoàn thành 7 chỉ
          tiêu audit trong 27 giây (post-bug-fix Day 39) so với 61 giây trước khi sửa
          bug 3-parallel PageSpeed Insights gây burst rate-limit.
        </li>
        <li>
          <strong>Cost transparency:</strong> 5 hero banner image generate qua Gemini
          2.5 Flash Image tổng chi phí ~$0.28 (chia sẻ thực tế, không hype).
        </li>
        <li>
          <strong>Audit trail:</strong> mỗi bài viết trên hoc.hayweb.vn có file YAML
          schema v1.0 lưu tools used, % AI involvement, prompts archived, anti-fab
          claim verification, human review timestamp — đáp ứng yêu cầu lưu trữ nhiều
          năm theo lộ trình Thông tư 18/2027 BTTTT (chi tiết kỳ hạn cụ thể theo văn
          bản chính thức khi ban hành).
        </li>
      </ul>

      <HAYWEBSection
        tacticBasic="quy trình 4 giai đoạn (audit → on-page → content cadence → đo lường) ở trên"
        extraBullet={
          <>
            <strong>Phương pháp đo tỷ lệ chất liệu gốc + cách phân bổ Layer mix per
            cluster commercial</strong> — chia sẻ qua tư vấn 1-on-1 (HAYWEB sử dụng nội
            bộ để đánh giá chất lượng content trước khi xuất bản).
          </>
        }
      />

      <h2 id="bat-dau">Bắt đầu thế nào sau khi đọc xong bài này?</h2>
      <p>
        Ba bước cụ thể, có thể làm trong 1 buổi: <strong>Bước 1</strong> — chấm web
        hiện tại miễn phí trên{' '}
        <a href="https://kiem-tra.hayweb.vn">
          kiem-tra.hayweb.vn
        </a>{' '}
        (30 giây ra kết quả 7 chỉ tiêu, không cần đăng ký).{' '}
        <strong>Bước 2</strong> — đọc thêm các bài bổ sung trong cluster dưới đây để
        đi sâu vào AEO, Local SEO, Content E-E-A-T và Bảo mật website chuẩn 2026.{' '}
        <strong>Bước 3</strong> — nếu muốn audit chuyên sâu + lộ trình 6-12 tháng cá
        nhân hóa cho doanh nghiệp,{' '}
        <a href="https://hayweb.vn/contact">liên hệ HAYWEB tư vấn 1-on-1</a> — founder
        Nguyễn Thế Quyền trả lời trực tiếp, không qua sales tier.
      </p>

      <RelatedArticles currentSlug="seo-la-gi" cluster="seo-foundation" maxCount={4} />

      <CTABridge />
    </>
  );
}
