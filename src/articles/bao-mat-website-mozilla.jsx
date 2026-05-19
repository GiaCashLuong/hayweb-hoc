import HAYWEBSection from '../components/HAYWEBSection.jsx';
import CTABridge from '../components/CTABridge.jsx';

export default function ArticleSecurity() {
  return (
    <>
      <h2 id="dinh-nghia">Bảo mật website là gì và tại sao Mozilla 100/100?</h2>
      <p>
        Bảo mật website là quy trình thiết lập các lớp phòng thủ kỹ thuật để
        bảo vệ website khỏi tấn công, đánh cắp dữ liệu, mạo danh và can thiệp
        nội dung. Một website doanh nghiệp Việt Nam tối thiểu phải có HTTPS
        (chứng chỉ SSL hợp lệ), các security headers chuẩn HTTP, và bảo vệ
        chống tấn công thường gặp (XSS, CSRF, clickjacking).
      </p>
      <p>
        Mozilla Observatory (phát triển bởi Mozilla Foundation, hiện migrated
        sang MDN) là công cụ chấm điểm bảo mật website từ 0-100, kèm grade
        A+ tới F. Điểm 100/100 (grade A+) yêu cầu đầy đủ 9 security headers
        đúng cấu hình. Đây là chuẩn được nhiều doanh nghiệp lớn và cơ quan
        chính phủ Mỹ áp dụng. Khác biệt quan trọng: A+ với điểm 125 (cap mới
        2025-2026) cao hơn A+ với điểm 100 — vì Mozilla cộng bonus cho các
        cấu hình tiến bộ.
      </p>
      <p>
        Tại sao 100/100 quan trọng cho website doanh nghiệp Việt Nam? Ba lý
        do: (1) tín hiệu chuyên nghiệp với khách hàng kỹ tính (đặc biệt B2B),
        (2) yếu tố Core Web Vitals + bảo mật là tín hiệu xếp hạng Google
        (tiebreaker khi các yếu tố khác bằng nhau), (3) bảo vệ thực sự khỏi
        các tấn công thường gặp tới website doanh nghiệp.
      </p>

      <h2 id="khai-niem-cot-loi">9 security headers cần thiết</h2>
      <ul>
        <li>
          <strong>Content-Security-Policy (CSP)</strong> — chỉ định nguồn nào
          được phép load script, style, font, image. Headers quan trọng nhất —
          chống XSS attack. Cấu hình chặt: <code>default-src 'self'</code>.
        </li>
        <li>
          <strong>Strict-Transport-Security (HSTS)</strong> — bắt buộc trình
          duyệt dùng HTTPS, kể cả khi user gõ http://. Thiết lập{' '}
          <code>max-age=63072000</code> (2 năm) + <code>includeSubDomains</code>{' '}
          + <code>preload</code>.
        </li>
        <li>
          <strong>X-Frame-Options</strong> — chống clickjacking (chèn website
          trong iframe). Đặt <code>DENY</code> cho website doanh nghiệp.
        </li>
        <li>
          <strong>X-Content-Type-Options</strong> — chống MIME sniffing. Đặt{' '}
          <code>nosniff</code>.
        </li>
        <li>
          <strong>Referrer-Policy</strong> — kiểm soát thông tin referrer khi
          user click ra ngoài. Đặt <code>strict-origin-when-cross-origin</code>
          {' '}cân bằng giữa privacy và functionality.
        </li>
        <li>
          <strong>Permissions-Policy</strong> — disable các browser feature
          không dùng (camera, microphone, geolocation, interest-cohort).
        </li>
        <li>
          <strong>Cross-Origin-Opener-Policy (COOP)</strong> — cô lập browsing
          context, chống side-channel attack. Đặt <code>same-origin</code>.
        </li>
        <li>
          <strong>Cross-Origin-Embedder-Policy (COEP)</strong> — yêu cầu
          resources cross-origin opt-in. Đặt <code>require-corp</code>.
        </li>
        <li>
          <strong>Cross-Origin-Resource-Policy (CORP)</strong> — chống embed
          resource (như ảnh) trên website khác mà không cho phép. Đặt{' '}
          <code>same-origin</code>.
        </li>
      </ul>

      <h2 id="case-study">Case study: Mozilla Observatory grade A+ score 125</h2>
      <blockquote>
        <p>
          Mozilla Observatory chấm{' '}
          <code>hayweb.vn</code> và các sub-domain HAYWEB ở grade{' '}
          <strong>A+ với điểm 125 (10/10 tests passed)</strong> tính tới ngày
          retrieved 2026-05-19. Điểm số này không thể đạt nếu chỉ có HTTPS —
          cần đầy đủ 9 security headers đúng cấu hình + một số bonus
          (subresource integrity, no inline scripts cho phần CSP).
        </p>
        <p>
          API kiểm tra công khai:{' '}
          <code>
            developer.mozilla.org/api/v1/observatory/analyze/?host=[domain]
          </code>
          . Mozilla đã migrate Observatory từ <code>observatory.mozilla.org</code>
          {' '}sang MDN trong 2025-2026 — endpoint cũ trả 404, phải dùng endpoint
          mới.
        </p>
        <p>
          Nguồn: Mozilla Observatory (retrieved 2026-05-19) + OWASP Secure
          Headers Project.
        </p>
      </blockquote>

      <h2 id="trien-khai">Cách triển khai trên các stack thường gặp</h2>
      <ol>
        <li>
          <strong>Vercel</strong> — file <code>vercel.json</code> với key{' '}
          <code>headers</code> + 9 headers ở trên. Vercel áp dụng cho mọi
          response. Không cần config server.
        </li>
        <li>
          <strong>Cloudflare Pages / Workers</strong> — file{' '}
          <code>_headers</code> hoặc Worker code thêm Response headers.
        </li>
        <li>
          <strong>Nginx tự host</strong> — directive <code>add_header</code>{' '}
          trong server block. Lưu ý <code>always</code> flag để header gửi cho
          mọi response code.
        </li>
        <li>
          <strong>Apache</strong> — module <code>mod_headers</code> + directive{' '}
          <code>Header always set</code>.
        </li>
        <li>
          <strong>WordPress + Hosting truyền thống</strong> — phụ thuộc
          provider. Nếu provider không support, cần plugin hoặc chuyển stack.
        </li>
      </ol>

      <p>
        Sau khi triển khai, kiểm tra qua{' '}
        <a
          href="https://developer.mozilla.org/en-US/observatory"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mozilla Observatory UI
        </a>{' '}
        hoặc API. Nếu chưa đạt A+, đọc kỹ phần "tests failed" — mỗi test có
        link giải thích cụ thể cách fix.
      </p>

      <HAYWEBSection
        tacticBasic={
          'cấu hình đầy đủ 9 security headers + HTTPS chuẩn + kiểm tra Mozilla Observatory'
        }
        extraBullet={
          <>
            <strong>Kiểm tra bảo mật + Lighthouse tự động hàng ngày</strong>{' '}
            qua cron schedule và cảnh báo khi điểm số giảm — HAYWEB triển khai
            cho mọi khách, chi tiết qua tư vấn.
          </>
        }
      />

      <CTABridge />
    </>
  );
}
