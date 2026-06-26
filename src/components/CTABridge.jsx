// CTA bridge sang Site 1 (kiem-tra.hayweb.vn) + hayweb.vn/contact (service inquiry).
// S5B 2026-05-20: bg-ink → bg-navy + cream text + gold primary CTA + gold-hairline top
// S5B-extension 2026-05-20 Day 39 night per Điện Hạ "SEO tập trung hết vào đẩy cho Hayweb" +
//   "khi họ nhấp vào, nó sẽ ko ra tab khác, chỉ đổi site":
//   - Same-tab navigation (NO target=_blank/rel=noopener) — feels HAYWEB family native
//   - Secondary CTA /lien-he (Site 2 internal) → https://hayweb.vn/contact (funnel to parent)
export default function CTABridge() {
  return (
    <section className="my-12 p-7 md:p-9 rounded-xl bg-navy text-cream border-t-2 border-gold relative">
      <h2 className="!mt-0 font-headline text-2xl md:text-3xl text-cream mb-3">
        Bắt đầu thế nào?
      </h2>
      <p className="text-base leading-7 mb-6 text-cream/85">
        So sánh website của bạn với HAYWEB trên 7 chỉ tiêu kỹ thuật cơ bản chuẩn
        2026. Không cần đăng ký — chỉ cần URL.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://kiem-tra.hayweb.vn"
          className="inline-flex items-center gap-2 px-5 py-3 bg-gold text-navy font-medium rounded-md hover:bg-gold-champagne transition"
        >
          So sánh website ngay →
        </a>
        <a
          href="https://hayweb.vn/contact"
          className="inline-flex items-center gap-2 px-5 py-3 border border-cream/40 text-cream font-medium rounded-md hover:border-cream hover:bg-cream/10 transition"
        >
          Đặt lịch tư vấn miễn phí 30 phút
        </a>
      </div>
    </section>
  );
}
