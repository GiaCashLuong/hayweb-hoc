export default function AboutPage() {
  return (
    <div className="container-prose py-14">
      <h1 className="font-headline text-4xl md:text-5xl mb-5">Về HAYWEB Học</h1>
      <p className="text-lg leading-relaxed text-muted mb-6">
        HAYWEB Học là nhánh blog học của HAYWEB.vn — agency thiết kế web Hà Nội
        chuyên về SEO, AEO, GEO, content chuẩn E-E-A-T và bảo mật website
        chuẩn 2026.
      </p>

      <h2 className="font-headline text-2xl md:text-3xl mb-3">Mục tiêu</h2>
      <p className="leading-7 mb-4">
        Chia sẻ kiến thức công khai — không giấu phần cơ bản, nhưng giữ riêng
        phần phương pháp nâng cao (chỉ chia sẻ qua tư vấn 1-on-1 với khách).
      </p>

      <h2 className="font-headline text-2xl md:text-3xl mb-3">Cam kết minh bạch</h2>
      <ul className="list-disc pl-6 space-y-2 leading-7">
        <li>
          Mọi bài viết công khai tỷ lệ AI hỗ trợ (% involvement + công cụ + tỷ
          lệ human review).
        </li>
        <li>Lưu trữ audit trail 3 năm theo Thông tư 18/2027 BTTTT.</li>
        <li>
          Mỗi số liệu external có URL nguồn chính + ngày retrieved (chống fab).
        </li>
        <li>
          Mỗi claim qua kiểm 4 tiêu chí (URL, methodology, sample size, range)
          trước khi xuất bản.
        </li>
      </ul>

      <p className="mt-7">
        Chi tiết trang{' '}
        <a
          href="https://hayweb.vn/minh-bach-ai"
          className="text-accent border-b border-rule hover:border-accent"
        >
          minh bạch AI
        </a>{' '}
        — bao gồm 5 cam kết đầy đủ.
      </p>
    </div>
  );
}
