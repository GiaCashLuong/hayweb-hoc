import HAYWEBSection from '../components/HAYWEBSection.jsx';
import CTABridge from '../components/CTABridge.jsx';

export default function ArticleAEO() {
  return (
    <>
      <h2 id="dinh-nghia">AEO là gì? Khác biệt với SEO truyền thống</h2>
      <p>
        AEO (Answer Engine Optimization) là tối ưu nội dung để các AI search
        engines như ChatGPT, Google Gemini, Perplexity và AI Hay (engine Việt
        Nam) cite website của bạn khi trả lời câu hỏi người dùng. Khác với SEO
        truyền thống — mục tiêu là xếp hạng top 10 Google — AEO nhắm tới việc
        trở thành nguồn được dẫn trong câu trả lời AI, dù người dùng có click
        vào website hay không.
      </p>
      <p>
        Tại sao 2026 cần tối ưu AI search? Theo Decision Lab khảo sát người
        dùng Việt Nam, AI Hay đã đạt mức độ sử dụng đáng kể trong nhóm người
        trẻ tìm kiếm thông tin sản phẩm và dịch vụ. Gemini và ChatGPT cũng có
        nhóm người dùng riêng. Nếu website chỉ tối ưu cho Google truyền thống,
        bạn đang bỏ lỡ một phần đáng kể lượng tìm kiếm đang dịch chuyển sang
        AI engines.
      </p>
      <p>
        Tối ưu AI search không thay thế SEO — nó bổ sung. Một website mạnh SEO
        thường có lợi thế nền cho AEO (vì AI engines như Google AIO và
        Perplexity dùng web search làm input). Nhưng AEO có thêm các yêu cầu
        riêng: cấu trúc câu trả lời dạng Q&A, schema markup đầy đủ entity,
        citation cụ thể và minh bạch nguồn gốc.
      </p>

      <h2 id="khai-niem-cot-loi">5 khái niệm cốt lõi của AEO 2026</h2>
      <ul>
        <li>
          <strong>Q&A heading structure</strong> — H2 viết dạng câu hỏi của
          người dùng ("AEO là gì?", "Tối ưu AI search như thế nào?"). Đoạn đầu
          tiên dưới H2 phải trả lời trực tiếp 1-2 câu, sau đó mới đi sâu.
        </li>
        <li>
          <strong>Citing sources discipline</strong> — mỗi claim quan trọng có
          link tới nguồn chính (không chỉ wiki, không chỉ blog), kèm ngày
          retrieved. AI engines ưu tiên nội dung có citation chuẩn.
        </li>
        <li>
          <strong>Statistics + quotation</strong> — bổ sung số liệu cụ thể (ví
          dụ "Ahrefs 17 triệu bài study tháng 8/2025") và quotation ngắn từ
          chuyên gia ngành (đã verified URL primary source).
        </li>
        <li>
          <strong>Entity completeness</strong> — schema markup Article +
          BreadcrumbList + Person (tác giả) + Organization (nhà xuất bản) đầy
          đủ. AI engines như Google AIO dựa nhiều vào Knowledge Graph để xác
          định độ tin cậy.
        </li>
        <li>
          <strong>Last-updated visible</strong> — ngày cập nhật hiển thị rõ
          trên trang (build trust signal). Không phải bài nào cũng cần refresh
          — chỉ refresh khi có thay đổi nội dung thực 20-30% (theo guidance
          công khai từ Google).
        </li>
      </ul>

      <h2 id="case-study">Case study: GEO paper Princeton và thực tế áp dụng</h2>
      <blockquote>
        <p>
          Bài báo "GEO: Generative Engine Optimization" của Aggarwal et al
          (KDD 2024 — Princeton, Georgia Tech, Allen Institute AI, IIT Delhi)
          thử nghiệm 9 tactics tối ưu cho generative search engines. Kết quả:
          các tactics như <em>Citing Sources</em>, <em>Statistics Addition</em>,
          và <em>Quotation Addition</em> có thể tăng tỷ lệ được cite của trang
          web — nhưng <strong>điều kiện theo thứ hạng SERP ban đầu</strong>:
          các trang đã ở top 1 có thể MẤT visibility nếu áp dụng các tactics
          này, trong khi các trang rank 5+ có cơ hội tăng đáng kể.
        </p>
        <p>
          Nguồn: arXiv 2311.09735 (retrieved 2026-05-19) — đọc paper chính, đừng
          tin con số "+115% universal" lan truyền trên các blog AEO ngoài kia
          vì nó là conditional.
        </p>
      </blockquote>

      <p>
        Đối với thị trường Việt Nam, một lưu ý quan trọng: AI Hay là engine
        Việt-Nam-bản-địa, được người dùng trẻ ưa chuộng cho các câu hỏi văn hóa
        - sản phẩm - dịch vụ địa phương. Theo Decision Lab khảo sát AI adoption
        2026, AI Hay xuất hiện như một engine có mức độ sử dụng đáng kể, đặc
        biệt cho các truy vấn ngôn ngữ Việt Nam tự nhiên.
      </p>
      <p>
        Hệ quả: nội dung tiếng Việt được viết tự nhiên, có chiều sâu văn hóa
        và cite nguồn rõ ràng có lợi thế trên AI Hay so với nội dung dịch máy
        từ tiếng Anh.
      </p>

      <h2 id="per-engine">Ưu tiên engine nào cho doanh nghiệp Việt Nam?</h2>
      <p>
        Thứ tự ưu tiên gợi ý 2026 cho doanh nghiệp Việt Nam B2C / B2B SME:
      </p>
      <ol>
        <li>
          <strong>AI Hay</strong> — ưu tiên hàng đầu cho khách Việt Nam (mức
          độ sử dụng đáng kể theo Decision Lab). Nội dung tiếng Việt tự nhiên +
          văn hóa sâu = lợi thế.
        </li>
        <li>
          <strong>Google AI Overviews + Gemini</strong> — đã live tiếng Việt
          từ 28/10/2024 (AIO) và 30/08/2025 (AI Mode). Tối ưu chuẩn E-E-A-T +
          entity completeness sẽ phục vụ cả hai.
        </li>
        <li>
          <strong>ChatGPT</strong> — vẫn là engine có thị phần lớn toàn cầu.
          Cấu trúc Q&A + schema đầy đủ + citation chuẩn giúp tăng khả năng
          được cite.
        </li>
        <li>
          <strong>Perplexity</strong> — đang tăng trưởng nhanh (+370% YoY theo
          industry reports). Live crawl + citation discipline khắt khe — nội
          dung có URL nguồn rõ ràng có lợi thế.
        </li>
      </ol>

      <HAYWEBSection
        tacticBasic={
          'cấu trúc Q&A + citing sources + schema entity completeness + last-updated visible'
        }
        extraBullet={
          <>
            <strong>Phương pháp đo "khả năng được cite" cho từng engine</strong>{' '}
            — HAYWEB sử dụng nội bộ để đánh giá nội dung trước xuất bản, chia sẻ
            qua tư vấn trực tiếp.
          </>
        }
      />

      <CTABridge />
    </>
  );
}
