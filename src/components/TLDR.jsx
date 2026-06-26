// TL;DR component — above-fold summary box, AI engine extractability boost.
// AI engines (ChatGPT/Perplexity/AI Hay/Gemini) extract TL;DR bullets first khi cite.
// Renders 3-5 bullets immediately after article lead paragraph.
//
// Skill seo-blog-quality-pipeline.md v1.1+ §1 Step 4.6 + §2 chuẩn #14.
export default function TLDR({ bullets }) {
  if (!Array.isArray(bullets) || bullets.length < 3 || bullets.length > 7) return null;
  return (
    <aside
      className="my-8 p-6 md:p-7 border-l-4 border-gold bg-bone rounded-r-md"
      aria-label="Tóm tắt nhanh bài viết"
    >
      <h2 className="!mt-0 !mb-3 text-xs font-semibold uppercase tracking-widest text-ink/65">
        Tóm tắt nhanh
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-base leading-7 text-ink/90 marker:text-gold">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </aside>
  );
}
