import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RenditerechnerSimple from '@/components/RenditerechnerSimple';
import { CITIES, CITY_SLUGS, getCityBySlug } from '@/data/cities';

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return CITY_SLUGS.map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const title = `Immobilie als Kapitalanlage in ${city.name} — Rendite, Preise & Rechner 2026`;
  const description = `Lohnt sich eine Immobilien-Kapitalanlage in ${city.name}? Aktuelle Preise (${city.avgPricePerSqm.toLocaleString('de-DE')} €/m²), Renditen, Grunderwerbsteuer ${city.grunderwerbsteuer} % und kostenloser Rechner.`;
  const ogUrl = `/api/og?title=${encodeURIComponent(`Kapitalanlage ${city.name}`)}&subtitle=${encodeURIComponent('Preise · Rendite · Rechner 2026')}`;

  return {
    title,
    description,
    alternates: { canonical: `https://immo-rechner.net/immobilien-kapitalanlage/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://immo-rechner.net/immobilien-kapitalanlage/${slug}`,
      siteName: 'Immo-Rechner.net',
      locale: 'de_DE',
      type: 'article',
      images: [{ url: ogUrl, width: 1200, height: 630, alt: `Kapitalanlage ${city.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl],
    },
  };
}

function trendLabel(trend: string): string {
  if (trend === 'steigend') return '↗ Steigend';
  if (trend === 'leicht fallend') return '↘ Leicht fallend';
  return '→ Stabil';
}

function profileColor(profile: string): string {
  if (profile === 'A-Lage') return 'text-red-700 bg-red-50 border-red-200';
  if (profile === 'B-Lage') return 'text-amber-700 bg-amber-50 border-amber-200';
  if (profile === 'C-Lage') return 'text-green-700 bg-green-50 border-green-200';
  return 'text-gray-700 bg-gray-50 border-gray-200';
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const pageUrl = `https://immo-rechner.net/immobilien-kapitalanlage/${slug}`;
  const bruttomietrendite = ((city.avgRentPerSqmCold * 12) / city.avgPricePerSqm * 100).toFixed(1);

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: `Immobilie als Kapitalanlage in ${city.name} — Rendite & Marktüberblick 2026`,
        description: `Aktuelle Marktdaten, Renditen und Tipps für Kapitalanleger in ${city.name}.`,
        datePublished: '2025-01-01',
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
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://immo-rechner.net' },
          { '@type': 'ListItem', position: 2, name: 'Immobilien Kapitalanlage', item: 'https://immo-rechner.net/immobilien-kapitalanlage' },
          { '@type': 'ListItem', position: 3, name: city.name, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `Lohnt sich eine Kapitalanlage in ${city.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${city.name} ist eine ${city.investmentProfile} mit einer Bruttomietrendite von ca. ${bruttomietrendite} %. ${city.description} ${city.pros.length > 0 ? 'Vorteile: ' + city.pros.join(', ') + '.' : ''}`,
            },
          },
          {
            '@type': 'Question',
            name: `Wie hoch sind die Immobilienpreise in ${city.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Der durchschnittliche Kaufpreis in ${city.name} liegt bei ca. ${city.avgPricePerSqm.toLocaleString('de-DE')} €/m². Die durchschnittliche Kaltmiete beträgt ca. ${city.avgRentPerSqmCold.toFixed(2).replace('.', ',')} €/m².`,
            },
          },
          {
            '@type': 'Question',
            name: `Wie hoch ist die Grunderwerbsteuer in ${city.bundesland}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `In ${city.bundesland} beträgt die Grunderwerbsteuer ${city.grunderwerbsteuer} % des Kaufpreises (Stand 2026). Bei einem Kaufpreis von 300.000 € sind das ${(300000 * city.grunderwerbsteuer / 100).toLocaleString('de-DE')} € Grunderwerbsteuer.`,
            },
          },
          {
            '@type': 'Question',
            name: `Was ist der Mietpreismultiplikator in ${city.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Der durchschnittliche Mietpreismultiplikator (Kaufpreis / Jahreskaltmiete) liegt in ${city.name} bei ca. ${city.mietpreismultiplikator}. Das entspricht einer Bruttomietrendite von ca. ${(100 / city.mietpreismultiplikator).toFixed(1)} %.`,
            },
          },
        ],
      },
    ],
  };

  // Find nearby cities in same Bundesland
  const nearbyCities = CITIES.filter(
    (c) => c.bundeslandSlug === city.bundeslandSlug && c.slug !== city.slug
  ).slice(0, 4);

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
            <li>
              <Link href="/rendite-rechner" className="hover:text-teal-600">Kapitalanlage</Link>
            </li>
            <li aria-hidden="true"> / </li>
            <li className="text-gray-800" aria-current="page">{city.name}</li>
          </ol>
        </nav>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded border ${profileColor(city.investmentProfile)}`}>
            {city.investmentProfile}
          </span>
          <span className="text-sm text-gray-500">{trendLabel(city.trend)}</span>
          <span className="text-sm text-gray-500">{city.bundesland}</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Immobilie als Kapitalanlage in {city.name}
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{city.description}</p>

        {/* Market data table */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Marktdaten {city.name} 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-500 font-medium">Ø Kaufpreis</td>
                  <td className="px-4 py-3 text-gray-800 font-semibold text-right">
                    {city.avgPricePerSqm.toLocaleString('de-DE')} €/m²
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-500 font-medium">Ø Kaltmiete</td>
                  <td className="px-4 py-3 text-gray-800 font-semibold text-right">
                    {city.avgRentPerSqmCold.toFixed(2).replace('.', ',')} €/m²
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-500 font-medium">Bruttomietrendite (Ø)</td>
                  <td className="px-4 py-3 text-teal-700 font-semibold text-right">
                    ca. {bruttomietrendite} %
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-500 font-medium">Mietpreismultiplikator</td>
                  <td className="px-4 py-3 text-gray-800 font-semibold text-right">
                    ca. {city.mietpreismultiplikator}x
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-500 font-medium">Grunderwerbsteuer ({city.bundesland})</td>
                  <td className="px-4 py-3 text-gray-800 font-semibold text-right">
                    {city.grunderwerbsteuer} %
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-gray-500 font-medium">Einwohner</td>
                  <td className="px-4 py-3 text-gray-800 font-semibold text-right">
                    {city.population.toLocaleString('de-DE')}
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-gray-500 font-medium">Markttrend</td>
                  <td className="px-4 py-3 text-gray-800 font-semibold text-right">
                    {trendLabel(city.trend)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Alle Angaben sind Näherungswerte basierend auf Marktdaten 2025/2026 (Quellen: Immoscout24-Marktbericht, CBRE-Wohnmarktreport, Statistisches Bundesamt). Grunderwerbsteuer-Sätze gemäß aktueller Landesgesetzgebung (Stand 2026). Keine Anlageberatung.
          </p>
        </section>

        {/* Calculator */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Rendite für {city.name} berechnen
          </h2>
          <p className="text-gray-600 mb-4">
            Trage die Daten deines Wunschobjekts ein — als Orientierung: In {city.name} liegen Kaufpreise
            typischerweise bei {city.avgPricePerSqm.toLocaleString('de-DE')} €/m² und
            Kaltmieten bei {city.avgRentPerSqmCold.toFixed(2).replace('.', ',')} €/m².
          </p>
          <RenditerechnerSimple />
        </section>

        {/* Pros and Cons */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {city.name} als Kapitalanlage: Vor- und Nachteile
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 mb-2">Vorteile</h3>
              <ul className="space-y-1">
                {city.pros.map((pro) => (
                  <li key={pro} className="text-sm text-green-700 flex gap-2">
                    <span aria-hidden="true">✓</span> {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-semibold text-red-800 mb-2">Nachteile</h3>
              <ul className="space-y-1">
                {city.cons.map((con) => (
                  <li key={con} className="text-sm text-red-700 flex gap-2">
                    <span aria-hidden="true">✗</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Grunderwerbsteuer note */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Grunderwerbsteuer in {city.bundesland} ({city.grunderwerbsteuer} %)
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Beim Immobilienkauf in {city.name} ({city.bundesland}) fällt eine Grunderwerbsteuer von{' '}
            <strong>{city.grunderwerbsteuer} %</strong> des Kaufpreises an. Bei einem Kaufpreis von 200.000 €
            sind das <strong>{(200000 * city.grunderwerbsteuer / 100).toLocaleString('de-DE')} €</strong>,
            bei 300.000 € bereits{' '}
            <strong>{(300000 * city.grunderwerbsteuer / 100).toLocaleString('de-DE')} €</strong>.
            Die Grunderwerbsteuer ist Teil der Kaufnebenkosten und muss in der Regel aus Eigenkapital
            bezahlt werden.
          </p>
          <div className="mt-3">
            <Link
              href={`/grunderwerbsteuer/${city.bundeslandSlug}`}
              className="text-teal-600 hover:underline text-sm font-medium"
            >
              Grunderwerbsteuer {city.bundesland} — alle Details →
            </Link>
          </div>
        </section>

        {/* Nearby cities */}
        {nearbyCities.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Weitere Städte in {city.bundesland}
            </h2>
            <ul className="grid grid-cols-2 gap-3">
              {nearbyCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/immobilien-kapitalanlage/${c.slug}`}
                    className="block border border-gray-200 rounded-lg p-3 hover:border-teal-300 hover:bg-teal-50 transition-colors"
                  >
                    <span className="font-medium text-gray-800 block">{c.name}</span>
                    <span className="text-xs text-gray-500">
                      {c.avgPricePerSqm.toLocaleString('de-DE')} €/m² ·{' '}
                      {((c.avgRentPerSqmCold * 12) / c.avgPricePerSqm * 100).toFixed(1)} % Rendite
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related links */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Nützliche Rechner & Ratgeber</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/cashflow-rechner" className="text-teal-600 hover:underline font-medium">
                Cashflow Rechner — monatlichen Überschuss berechnen
              </Link>
            </li>
            <li>
              <Link href="/rendite-rechner" className="text-teal-600 hover:underline font-medium">
                Rendite Rechner — Brutto- und Nettomietrendite
              </Link>
            </li>
            <li>
              <Link href="/kaufnebenkosten-rechner" className="text-teal-600 hover:underline font-medium">
                Kaufnebenkosten Rechner — Grunderwerbsteuer, Notar, Makler
              </Link>
            </li>
            <li>
              <Link href="/irr-rechner" className="text-teal-600 hover:underline font-medium">
                IRR Rechner — Gesamtrendite über den Anlagehorizont
              </Link>
            </li>
            <li>
              <Link href="/ratgeber/cashflow-immobilien" className="text-teal-600 hover:underline font-medium">
                Ratgeber: Cashflow bei Immobilien
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
