interface QuickAnswerProps {
  question: string;
  answer: string;
  keyFacts?: string[];
}

/**
 * AEO-optimized "Kurzantwort" box for Google featured snippets and AI search engine extraction.
 * Place directly after the intro paragraph on guide pages.
 */
export default function QuickAnswer({ question, answer, keyFacts }: QuickAnswerProps) {
  return (
    <aside
      aria-label="Kurzantwort"
      className="my-8 border-l-4 border-teal-500 bg-teal-50 rounded-r-xl px-5 py-4"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 mb-2">
        Kurzantwort
      </p>
      <p className="font-semibold text-gray-800 mb-2">{question}</p>
      <p className="text-gray-700 leading-relaxed text-sm">{answer}</p>
      {keyFacts && keyFacts.length > 0 && (
        <ul className="mt-3 space-y-1">
          {keyFacts.map((fact) => (
            <li key={fact} className="flex gap-2 text-sm text-gray-700">
              <span className="text-teal-600 font-bold mt-0.5 shrink-0">→</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
