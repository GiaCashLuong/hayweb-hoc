// CTA bridge sang Site 1 (kiem-tra.hayweb.vn) + Site form chính.
export default function CTABridge() {
  return (
    <section className="my-12 p-7 md:p-9 rounded-xl bg-ink text-bone">
      <h2 className="!mt-0 font-headline text-2xl md:text-3xl text-bone mb-3">
        Bắt đầu thế nào?
      </h2>
      <p className="text-base leading-7 mb-6 text-bone/85">
        So sánh website của bạn với HAYWEB trên 7 chỉ tiêu kỹ thuật cơ bản chuẩn
        2026. Không cần đăng ký — chỉ cần URL.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://kiem-tra.hayweb.vn"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-ink font-medium rounded-md hover:bg-bone transition"
        >
          So sánh website ngay →
        </a>
        <a
          href="/lien-he"
          className="inline-flex items-center gap-2 px-5 py-3 border border-bone/40 text-bone font-medium rounded-md hover:border-bone hover:bg-bone/10 transition"
        >
          Đặt lịch tư vấn miễn phí 30 phút
        </a>
      </div>
    </section>
  );
}
