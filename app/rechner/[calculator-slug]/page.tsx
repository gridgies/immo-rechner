import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RenditerechnerSimple from '@/components/RenditerechnerSimple';
import KaufnebenkostenrechnerSimple from '@/components/KaufnebenkostenrechnerSimple';
import { CALCULATORS, CALCULATOR_SLUGS, getCalculatorBySlug } from '@/data/calculators';

interface Props {
  params: Promise<{ 'calculator-slug': string }>;
}

export async function generateStaticParams() {
  return CALCULATOR_SLUGS.map((slug) => ({ 'calculator-slug': slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { 'calculator-slug': slug } = await params;
  const calc = getCalculatorBySlug(slug);
  if (!calc) return {};
  const ogUrl = `/api/og?title=${encodeURIComponent(calc.h1)}&subtitle=${encodeURIComponent('Kostenloser Rechner | immo-rechner.net')}`;
  return {
    title: calc.metaTitle,
    description: calc.metaDescription,
    alternates: { canonical: `https://immo-rechner.net/rechner/${slug}` },
    openGraph: {
      title: calc.metaTitle,
      description: calc.metaDescription,
      url: `https://immo-rechner.net/rechner/${slug}`,
      siteName: 'Immo-Rechner.net',
      locale: 'de_DE',
      type: 'website',
      images: [{ url: ogUrl, width: 1200, height: 630, alt: calc.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: calc.metaTitle,
      description: calc.metaDescription,
      images: [ogUrl],
    },
  };
}

export default async function CalculatorSlugPage({ params }: Props) {
  const { 'calculator-slug': slug } = await params;
  const calc = getCalculatorBySlug(slug);
  if (!calc) notFound();

  const pageUrl = `https://immo-rechner.net/rechner/${slug}`;

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${pageUrl}#app`,
        name: calc.h1,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        url: pageUrl,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
        description: calc.metaDescription,
        inLanguage: 'de',
        provider: {
          '@type': 'Organization',
          name: 'Immobilien Rechner',
          url: 'https://immo-rechner.net',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://immo-rechner.net' },
          { '@type': 'ListItem', position: 2, name: 'Rechner', item: 'https://immo-rechner.net/rechner' },
          { '@type': 'ListItem', position: 3, name: calc.h1, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: calc.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
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
            <li><Link href="/rendite-rechner" className="hover:text-teal-600">Rechner</Link></li>
            <li aria-hidden="true"> / </li>
            <li className="text-gray-800" aria-current="page">{calc.h1}</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">{calc.h1}</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{calc.intro}</p>

        {/* Embedded Calculator */}
        <section className="mb-10">
          {calc.primaryCalculator.component === 'rendite' && <RenditerechnerSimple />}
          {calc.primaryCalculator.component === 'nebenkosten' && <KaufnebenkostenrechnerSimple />}
          {calc.primaryCalculator.component === null && (
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
              <p className="text-gray-700 mb-4">
                Nutze unseren vollständigen Rechner für diese Berechnung:
              </p>
              <Link
                href={calc.primaryCalculator.path}
                className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                {calc.primaryCalculator.label} öffnen →
              </Link>
            </div>
          )}
        </section>

        {/* Formula */}
        {calc.formula && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Formel</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm text-gray-800 mb-3">
              {calc.formula.equation}
            </div>
            <dl className="space-y-1">
              {calc.formula.variables.map((v) => (
                <div key={v.symbol} className="flex gap-2 text-sm text-gray-600">
                  <dt className="font-semibold text-gray-800 whitespace-nowrap">{v.symbol}:</dt>
                  <dd>{v.description}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Content sections */}
        {calc.sections.map((section) => (
          <section key={section.h2} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">{section.h2}</h2>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </section>
        ))}

        {/* Example calculation */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">{calc.example.title}</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <dl className="space-y-2 mb-4">
              {calc.example.inputs.map((input) => (
                <div key={input.label} className="flex justify-between text-sm">
                  <dt className="text-gray-600">{input.label}</dt>
                  <dd className="font-medium text-gray-800">{input.value}</dd>
                </div>
              ))}
            </dl>
            <div className={`border-t pt-3 flex justify-between text-sm font-semibold ${calc.example.result.highlight ? 'text-teal-700' : 'text-gray-800'}`}>
              <span>{calc.example.result.label}</span>
              <span>{calc.example.result.value}</span>
            </div>
            {calc.example.note && (
              <p className="text-xs text-gray-500 mt-2">{calc.example.note}</p>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Häufige Fragen</h2>
          <dl className="space-y-5">
            {calc.faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="font-semibold text-gray-800 mb-1">{faq.q}</dt>
                <dd className="text-gray-600 leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Verwandte Rechner & Artikel</h2>
          <ul className="space-y-3">
            {calc.related.map((rel) => (
              <li key={rel.href}>
                <Link href={rel.href} className="group flex flex-col hover:text-teal-600">
                  <span className="font-medium group-hover:underline">{rel.label}</span>
                  <span className="text-sm text-gray-500">{rel.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
