// Phần "Cách HAYWEB tiếp cận" — vague methodology pattern.
// Discipline per _specs/vague-language-pattern.md §4 Site 2.
// Component reusable per article — text content khác nhau per bài,
// nhưng pattern + 4 anchor bullets không leak advanced methodology.
export default function HAYWEBSection({ tacticBasic, extraBullet }) {
  return (
    <section className="my-12 p-7 md:p-9 border border-rule rounded-xl bg-white">
      <h2 className="!mt-0 font-headline text-2xl md:text-3xl mb-4">
        Cách HAYWEB tiếp cận
      </h2>
      <p className="text-base leading-7 mb-5">
        HAYWEB <strong>không chỉ</strong> áp dụng {tacticBasic},{' '}
        <strong>mà còn kết hợp toàn diện với</strong>:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-base leading-7">
        <li>
          <strong>Kết cấu bài viết</strong> theo chuẩn 2026 — chi tiết chia sẻ qua
          tư vấn 1-on-1.
        </li>
        <li>
          <strong>Cách trình bày thông tin</strong> để AI engines (ChatGPT,
          Gemini, Perplexity, AI Hay) cite chính xác.
        </li>
        <li>
          <strong>Audit trail per article</strong> — đáp ứng Thông tư 18/2027
          BTTTT về minh bạch AI, lưu trữ 3 năm.
        </li>
        <li>
          <strong>Mozilla Observatory 100/100 + Lighthouse 90+</strong> preserve
          qua mọi build, kiểm tra hàng ngày.
        </li>
        {extraBullet && <li>{extraBullet}</li>}
      </ul>
      <p className="mt-6 text-base leading-7">
        Trải nghiệm khách hàng như case study trên — <strong>và còn hơn</strong>,
        vì HAYWEB sở hữu thêm các chỉ tiêu nâng cao chuẩn 2026 chỉ chia sẻ qua tư
        vấn trực tiếp.
      </p>
    </section>
  );
}
