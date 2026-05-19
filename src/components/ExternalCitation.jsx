// External citation list — primary sources + retrieval date per anti-fab Step 1.
export default function ExternalCitation({ sources }) {
  if (!sources || sources.length === 0) return null;
  return (
    <section className="mt-12 pt-8 border-t border-rule" aria-label="Tài liệu tham khảo">
      <h2 className="!mt-0 font-headline text-xl md:text-2xl mb-4">
        Tài liệu tham khảo
      </h2>
      <ol className="list-decimal pl-6 space-y-3 text-sm text-muted leading-6">
        {sources.map((src, i) => (
          <li key={i}>
            <a
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent border-b border-rule hover:border-accent"
            >
              {src.label}
            </a>{' '}
            — retrieved {src.retrieved}.
          </li>
        ))}
      </ol>
    </section>
  );
}
