// AI disclosure block — Thông tư 18/2027 BTTTT compliance.
// Hiện hữu visible per article, đúng yêu cầu prominent label.
export default function AIDisclosure({ disclosure }) {
  const { involvementPercentage, tools, humanReview } = disclosure;
  return (
    <aside
      className="my-10 p-5 md:p-6 border-l-4 border-accent bg-bone rounded-r-md"
      aria-label="Minh bạch sử dụng AI"
    >
      <h3 className="!mt-0 !mb-2 text-base font-medium text-ink">
        Minh bạch sử dụng AI
      </h3>
      <p className="text-sm leading-6 text-muted mb-2">
        Bài viết này được hỗ trợ bởi AI tools (
        <span className="text-ink">{tools.join(', ')}</span>) ở mức{' '}
        <span className="text-ink">{involvementPercentage}</span>. Mức human
        review: <span className="text-ink">{humanReview}</span>.
      </p>
      <p className="text-sm leading-6 text-muted">
        Tuân thủ Thông tư 18/2027 BTTTT về minh bạch nội dung AI. Chi tiết tại{' '}
        <a
          href="https://hayweb.vn/minh-bach-ai"
          className="text-accent border-b border-rule hover:border-accent"
        >
          trang minh bạch AI HAYWEB
        </a>
        .
      </p>
    </aside>
  );
}
