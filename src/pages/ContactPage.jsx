export default function ContactPage() {
  return (
    <div className="container-prose py-14">
      <h1 className="font-headline text-4xl md:text-5xl mb-5">Liên hệ HAYWEB</h1>
      <p className="text-lg leading-relaxed text-muted mb-7">
        Đặt lịch tư vấn miễn phí 30 phút — phù hợp doanh nghiệp đang muốn cải
        thiện website cho SEO + AI search + bảo mật chuẩn 2026.
      </p>

      <div className="border border-rule rounded-lg p-6 bg-white mb-6">
        <h2 className="!mt-0 font-headline text-2xl mb-3">Bước 1 — Đo website</h2>
        <p className="leading-7 mb-4">
          Trước khi tư vấn, đo website của bạn trên 7 chỉ tiêu kỹ thuật cơ bản.
          Chỉ cần URL — không cần đăng ký.
        </p>
        <a
          href="https://kiem-tra.hayweb.vn"
          target="_blank"
          rel="noopener"
          className="btn-primary"
        >
          So sánh website ngay →
        </a>
      </div>

      <div className="border border-rule rounded-lg p-6 bg-white">
        <h2 className="!mt-0 font-headline text-2xl mb-3">Bước 2 — Đặt lịch tư vấn</h2>
        <p className="leading-7 mb-4">
          Sau khi đo, gửi URL kết quả qua Zalo OA HAYWEB hoặc email. Founder
          Nguyễn Thế Quyền sẽ phản hồi trong 24h (giờ làm việc).
        </p>
        <ul className="space-y-2 mb-4">
          <li>
            <strong>Zalo OA</strong>:{' '}
            <a
              href="https://zalo.me/hayweb"
              className="text-accent border-b border-rule hover:border-accent"
            >
              zalo.me/hayweb
            </a>
          </li>
          <li>
            <strong>Email</strong>:{' '}
            <a
              href="mailto:hello@hayweb.vn"
              className="text-accent border-b border-rule hover:border-accent"
            >
              hello@hayweb.vn
            </a>
          </li>
          <li>
            <strong>Website chính</strong>:{' '}
            <a
              href="https://hayweb.vn"
              className="text-accent border-b border-rule hover:border-accent"
            >
              hayweb.vn
            </a>
          </li>
        </ul>
        <p className="text-sm text-muted leading-6">
          Cam kết: phản hồi 24h giờ làm việc, không gọi điện làm phiền, không
          email marketing tự động. Tư vấn miễn phí 30 phút đầu, không ràng buộc.
        </p>
      </div>
    </div>
  );
}
