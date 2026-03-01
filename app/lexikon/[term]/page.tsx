import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GLOSSARY_TERMS, GLOSSARY_SLUGS, getTermBySlug } from '@/data/glossary';

interface Props {
  params: Promise<{ term: string }>;
}

export async function generateStaticParams() {
  return GLOSSARY_SLUGS.map((slug) => ({ term: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term: slug } = await params;
  const entry = getTermBySlug(slug);
  if (!entry) return {};

  const title = `${entry.term} — Definition, Berechnung & Beispiel | Immo-Rechner.net`;
  const description = entry.shortDefinition;
  const ogUrl = `/api/og?title=${encodeURIComponent(entry.term)}&subtitle=${encodeURIComponent('Lexikon | immo-rechner.net')}`;

  return {
    title,
    description,
    alternates: { canonical: `https://immo-rechner.net/lexikon/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://immo-rechner.net/lexikon/${slug}`,
      siteName: 'Immo-Rechner.net',
      locale: 'de_DE',
      type: 'article',
      images: [{ url: ogUrl, width: 1200, height: 630, alt: entry.term }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl],
    },
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term: slug } = await params;
  const entry = getTermBySlug(slug);
  if (!entry) notFound();

  const pageUrl = `https://immo-rechner.net/lexikon/${slug}`;

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'DefinedTerm',
        '@id': `${pageUrl}#term`,
        name: entry.term,
        description: entry.shortDefinition,
        inDefinedTermSet: {
          '@type': 'DefinedTermSet',
          name: 'Immobilien-Lexikon für Kapitalanleger',
          url: 'https://immo-rechner.net/lexikon',
        },
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://immo-rechner.net' },
          { '@type': 'ListItem', position: 2, name: 'Lexikon', item: 'https://immo-rechner.net/lexikon' },
          { '@type': 'ListItem', position: 3, name: entry.term, item: pageUrl },
        ],
      },
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: `${entry.term} — Definition und Berechnung`,
        description: entry.shortDefinition,
        dateModified: '2026-02-28',
        inLanguage: 'de',
        author: {
          '@type': 'Organization',
          name: 'Immobilien Rechner',
          url: 'https://immo-rechner.net',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Immobilien Rechner',
          logo: { '@type': 'ImageObject', url: 'https://immo-rechner.net/favicon.svg' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLdData} />
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:text-teal-600">Startseite</Link></li>
            <li aria-hidden="true"> / </li>
            <li><Link href="/lexikon" className="hover:text-teal-600">Lexikon</Link></li>
            <li aria-hidden="true"> / </li>
            <li className="text-gray-800" aria-current="page">{entry.term}</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">{entry.term}</h1>

        {/* Featured snippet paragraph */}
        <p className="text-lg text-gray-700 bg-teal-50 border-l-4 border-teal-500 px-4 py-3 rounded-r-lg mb-8 leading-relaxed">
          {entry.shortDefinition}
        </p>

        {/* Definition */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Definition</h2>
          <p className="text-gray-600 leading-relaxed">{entry.definition}</p>
        </section>

        {/* Formula */}
        {entry.formula && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Formel</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm text-gray-800 mb-3">
              {entry.formula.equation}
            </div>
            <dl className="space-y-1">
              {entry.formula.variables.map((v) => (
                <div key={v.symbol} className="flex gap-2 text-sm text-gray-600">
                  <dt className="font-semibold text-gray-800 whitespace-nowrap">{v.symbol}:</dt>
                  <dd>{v.description}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Example */}
        {entry.example && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Berechnungsbeispiel</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-sm text-gray-600 mb-3">{entry.example.scenario}</p>
              <div className="border-t border-gray-200 pt-3">
                <p className="text-sm font-semibold text-teal-700">{entry.example.result}</p>
              </div>
            </div>
          </section>
        )}

        {/* Additional content */}
        {entry.content && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Was du als Investor wissen solltest</h2>
            <p className="text-gray-600 leading-relaxed">{entry.content}</p>
          </section>
        )}

        {/* Relevance for investors */}
        <section className="mb-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h2 className="font-semibold text-amber-800 mb-2">Bedeutung für Kapitalanleger</h2>
            <p className="text-amber-900 text-sm leading-relaxed">{entry.relevanceForInvestors}</p>
          </div>
        </section>

        {/* Related calculators */}
        {entry.relatedCalculators.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Passende Rechner</h2>
            <ul className="space-y-2">
              {entry.relatedCalculators.map((calc) => (
                <li key={calc.href}>
                  <Link
                    href={calc.href}
                    className="flex items-center gap-2 text-teal-600 hover:underline font-medium"
                  >
                    <span aria-hidden="true">→</span> {calc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related guides */}
        {entry.relatedGuides.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Verwandte Ratgeber</h2>
            <ul className="space-y-2">
              {entry.relatedGuides.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="flex items-center gap-2 text-teal-600 hover:underline font-medium"
                  >
                    <span aria-hidden="true">→</span> {guide.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related terms */}
        {entry.relatedTerms.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Verwandte Begriffe</h2>
            <div className="flex flex-wrap gap-2">
              {entry.relatedTerms.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/lexikon/${rel.slug}`}
                  className="px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 transition-colors"
                >
                  {rel.label}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
