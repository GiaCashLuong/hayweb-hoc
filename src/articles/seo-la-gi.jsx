import HAYWEBSection from '../components/HAYWEBSection.jsx';
import CTABridge from '../components/CTABridge.jsx';

export default function ArticleSEOLaGi() {
  return (
    <>
      <h2 id="dinh-nghia">Định nghĩa SEO trong 200 từ</h2>
      <p>
        SEO (Search Engine Optimization) là quy trình tối ưu website để xuất
        hiện cao trên Google khi khách hàng tiềm năng tìm kiếm một từ khóa liên
        quan đến sản phẩm hoặc dịch vụ. Hiểu đơn giản: nếu khách gõ "thiết kế
        nội thất Hà Nội" thì website cửa hàng của bạn nằm ở trang nào? SEO là
        công việc đẩy thứ hạng từ trang 3-4 lên trang 1.
      </p>
      <p>
        Khác với quảng cáo Google Ads (trả tiền mỗi click), SEO là traffic miễn
        phí (organic) — bù lại cần thời gian (3-6 tháng cho thị trường ít cạnh
        tranh, 6-12 tháng cho thị trường cạnh tranh cao theo Backlinko 2026).
        Một website xếp top 3 thường nhận 50-60% lượng click; xếp trang 2 hầu
        như không có ai click vào.
      </p>
      <p>
        SEO là gì khi đặt vào bối cảnh 2026? Không chỉ là tối ưu cho Google
        truyền thống — còn phải tối ưu cho AI search (ChatGPT, Gemini,
        Perplexity, AI Hay của Việt Nam). Trang web có thể không xếp hạng top
        Google nhưng vẫn được AI engines cite — đó là phần mở rộng mới của SEO
        gọi là AEO (Answer Engine Optimization).
      </p>

      <h2 id="khai-niem-cot-loi">Khái niệm cốt lõi của SEO 2026</h2>
      <ul>
        <li>
          <strong>On-page SEO</strong> — tối ưu chính trên website: tiêu đề (H1
          chứa từ khóa chính), meta description, cấu trúc heading (H2-H3),
          internal links, image alt text, schema markup. Đây là phần kiểm soát
          được hoàn toàn.
        </li>
        <li>
          <strong>Technical SEO</strong> — tối ưu kỹ thuật: tốc độ tải (LCP
          dưới 2 giây trên mobile theo cập nhật Google tháng 3/2026), bảo mật
          (Mozilla Observatory 100/100), Core Web Vitals, mobile-friendly,
          crawlability (robots.txt + sitemap.xml).
        </li>
        <li>
          <strong>Off-page SEO</strong> — uy tín bên ngoài: backlinks chất
          lượng từ website cùng ngành, Google Business Profile (Map Pack),
          mentions trên báo chí, social signals. Phần khó kiểm soát nhất —
          thường phải xây dựng qua nội dung tốt và quan hệ ngành.
        </li>
        <li>
          <strong>Content SEO</strong> — nội dung chuẩn E-E-A-T (Experience,
          Expertise, Authoritativeness, Trustworthiness): viết cho người đọc
          trước, cho Google sau. Trùng lặp keyword không còn giúp — Google
          phạt thin content và keyword stuffing.
        </li>
        <li>
          <strong>AEO / GEO mới 2026</strong> — tối ưu để AI search engines
          cite website của bạn khi trả lời câu hỏi người dùng. Theo Ahrefs (17
          triệu bài study tháng 8/2025), AI Overviews thường cite nội dung cũ
          hơn organic SERP trung bình 16 ngày — ưu tiên depth + authority, chứ
          không phải freshness.
        </li>
      </ul>

      <h2 id="case-study">Case study: Bắt đầu SEO từ con số 0</h2>
      <blockquote>
        <p>
          Theo Backlinko (Brian Dean) phân tích trên 11,8 triệu kết quả Google
          search, các yếu tố ranking quan trọng nhất 2026 vẫn là{' '}
          <strong>chất lượng nội dung phù hợp ý định tìm kiếm</strong> + tốc độ
          mobile + backlinks chất lượng. Top 3 nhận 54,4% tổng click; trang 2
          chỉ nhận 0,63%.
        </p>
        <p>
          Nguồn: Backlinko — SEO Guide 2026 (retrieved 2026-05-19).
        </p>
      </blockquote>

      <p>
        Một quy trình SEO chuẩn cho website doanh nghiệp Việt Nam mới làm SEO
        thường gồm:
      </p>
      <ol>
        <li>
          <strong>Tháng 1</strong> — Technical audit (kiểm tra Mozilla,
          Lighthouse, Schema, sitemap), keyword research (chọn 10-20 từ khóa
          mục tiêu), competitor audit.
        </li>
        <li>
          <strong>Tháng 2-3</strong> — On-page optimize: viết lại 5-10 trang
          chính, thêm schema markup, fix tốc độ mobile, thiết lập Google Search
          Console + Analytics + Google Business Profile.
        </li>
        <li>
          <strong>Tháng 3-6</strong> — Content cadence đều đặn: viết 4-8 bài
          chất lượng / tháng, mỗi bài có chiều sâu (1500-2500 từ), kèm số liệu
          gốc và case study thực tế.
        </li>
        <li>
          <strong>Tháng 6+</strong> — Đo lường + tinh chỉnh: theo dõi GSC
          impression + CTR + position, A/B test tiêu đề, mở rộng cluster nội
          dung quanh chủ đề thắng.
        </li>
      </ol>

      <HAYWEBSection
        tacticBasic={
          'quy trình 4 bước trên (audit → on-page → content cadence → đo lường)'
        }
        extraBullet={
          <>
            <strong>Phương pháp đo riêng cho content commercial</strong> — chỉ
            chia sẻ qua tư vấn 1-on-1 (HAYWEB sử dụng nội bộ để đánh giá content
            có khả năng xếp hạng cao trong AI search hay không trước khi xuất
            bản).
          </>
        }
      />

      <CTABridge />
    </>
  );
}
