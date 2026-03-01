import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KaufnebenkostenrechnerSimple from '@/components/KaufnebenkostenrechnerSimple';
import JsonLd from '@/components/JsonLd';

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://immo-rechner.net/kaufnebenkosten-rechner#app",
      "name": "Kaufnebenkosten Rechner Immobilien",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "url": "https://immo-rechner.net/kaufnebenkosten-rechner",
      "description": "Kostenloser Rechner für alle Kaufnebenkosten beim Immobilienkauf: Grunderwerbsteuer für alle 16 Bundesländer, Notar, Grundbuch und Makler.",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
      "inLanguage": "de-DE"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://immo-rechner.net" },
        { "@type": "ListItem", "position": 2, "name": "Kaufnebenkosten Rechner", "item": "https://immo-rechner.net/kaufnebenkosten-rechner" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Wie hoch sind die Kaufnebenkosten beim Immobilienkauf?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Kaufnebenkosten liegen je nach Bundesland und Makler zwischen 8,5% (Bayern, ohne Makler) und rund 15% (Schleswig-Holstein, mit Makler) des Kaufpreises. Bei 300.000 € Kaufpreis sind das 25.500 € bis 45.000 € an Nebenkosten."
          }
        },
        {
          "@type": "Question",
          "name": "Welche Kaufnebenkosten gibt es beim Immobilienkauf?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die vier Hauptposten sind: Grunderwerbsteuer (3,5–6,5% je nach Bundesland), Notarkosten (~1,5%), Grundbuchkosten (~0,5%) und ggf. Maklercourtage (bis 3,57% Käuferanteil). Grunderwerbsteuer und Notar sind gesetzlich fixiert und nicht verhandelbar."
          }
        },
        {
          "@type": "Question",
          "name": "Wie hoch ist die Grunderwerbsteuer in Deutschland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Grunderwerbsteuer variiert je nach Bundesland: Bayern und Sachsen erheben 3,5%, Baden-Württemberg, Bremen, Niedersachsen, Rheinland-Pfalz, Sachsen-Anhalt und Thüringen 5,0%, Hamburg 5,5%, Berlin und Hessen 6,0%, sowie Brandenburg, Nordrhein-Westfalen, Saarland und Schleswig-Holstein 6,5%."
          }
        },
        {
          "@type": "Question",
          "name": "Kann ich Kaufnebenkosten bei Immobilien von der Steuer absetzen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bei vermieteten Immobilien werden Kaufnebenkosten dem Kaufpreis zugerechnet und über die AfA (Abschreibung für Abnutzung) über 50 Jahre abgeschrieben. Bei selbstgenutzten Immobilien sind Kaufnebenkosten grundsätzlich nicht steuerlich absetzbar."
          }
        }
      ]
    }
  ]
};

const BUNDESLAENDER = [
  { name: 'Bayern', rate: 3.5, slug: 'bayern' },
  { name: 'Sachsen', rate: 5.5, slug: 'sachsen' },
  { name: 'Baden-Württemberg', rate: 5.0, slug: 'baden-wuerttemberg' },
  { name: 'Bremen', rate: 5.0, slug: 'bremen' },
  { name: 'Niedersachsen', rate: 5.0, slug: 'niedersachsen' },
  { name: 'Rheinland-Pfalz', rate: 5.0, slug: 'rheinland-pfalz' },
  { name: 'Sachsen-Anhalt', rate: 5.0, slug: 'sachsen-anhalt' },
  { name: 'Thüringen', rate: 5.0, slug: 'thueringen' },
  { name: 'Hamburg', rate: 5.5, slug: 'hamburg' },
  { name: 'Berlin', rate: 6.0, slug: 'berlin' },
  { name: 'Hessen', rate: 6.0, slug: 'hessen' },
  { name: 'Mecklenburg-Vorpommern', rate: 6.0, slug: 'mecklenburg-vorpommern' },
  { name: 'Brandenburg', rate: 6.5, slug: 'brandenburg' },
  { name: 'Nordrhein-Westfalen', rate: 6.5, slug: 'nordrhein-westfalen' },
  { name: 'Saarland', rate: 6.5, slug: 'saarland' },
  { name: 'Schleswig-Holstein', rate: 6.5, slug: 'schleswig-holstein' },
].sort((a, b) => a.rate - b.rate);

export const metadata: Metadata = {
  title: "Kaufnebenkosten Rechner 2026 – Grunderwerbsteuer, Notar & Makler berechnen | Immo-Rechner",
  description: "Berechne alle Kaufnebenkosten beim Immobilienkauf: Grunderwerbsteuer nach Bundesland, Notarkosten, Grundbuch und Makler. Kostenloser Rechner für alle 16 Bundesländer.",
  alternates: { canonical: "https://immo-rechner.net/kaufnebenkosten-rechner" },
  openGraph: {
    title: "Kaufnebenkosten Rechner – alle Kosten beim Immobilienkauf",
    description: "Grunderwerbsteuer, Notar, Grundbuch und Makler: Berechne die kompletten Kaufnebenkosten für alle 16 Bundesländer.",
    images: [
      {
        url: "/api/og?title=Kaufnebenkosten+Rechner+2026&subtitle=Grunderwerbsteuer%2C+Notar+%26+Makler+f%C3%BCr+alle+16+Bundesl%C3%A4nder",
        width: 1200,
        height: 630,
        alt: "Kaufnebenkosten Rechner – Grunderwerbsteuer, Notar und Makler berechnen",
      },
    ],
  },
};

export default function KaufnebenkostenRechnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLdData} />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Kaufnebenkosten Rechner</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Kaufnebenkosten Rechner 2026
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Beim Immobilienkauf fallen neben dem Kaufpreis erhebliche Nebenkosten an: 
          Grunderwerbsteuer, Notar, Grundbuch und ggf. Makler. In Summe können diese 
          8,5 bis 15 Prozent des Kaufpreises ausmachen.
        </p>

        {/* Calculator */}
        <div className="mb-12">
          <KaufnebenkostenrechnerSimple />
        </div>

        {/* Grunderwerbsteuer Table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Grunderwerbsteuer alle 16 Bundesländer (Stand 2026)</h2>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full bg-white rounded-lg border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Bundesland</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Steuersatz</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Bei 200.000 €</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Bei 400.000 €</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {BUNDESLAENDER.map((bl) => (
                <tr key={bl.slug} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">
                    <Link href={`/grunderwerbsteuer/${bl.slug}`} className="text-[#7099A3] hover:text-[#5d7e87] font-medium">
                      {bl.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-right font-semibold">{bl.rate} %</td>
                  <td className="px-4 py-3 text-sm text-right">{(200000 * bl.rate / 100).toLocaleString('de-DE')} €</td>
                  <td className="px-4 py-3 text-sm text-right">{(400000 * bl.rate / 100).toLocaleString('de-DE')} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h2>Welche Kaufnebenkosten fallen beim Immobilienkauf an?</h2>
            <p>
              Die Kaufnebenkosten setzen sich aus vier Hauptposten zusammen:
            </p>
            <ul>
              <li><strong>Grunderwerbsteuer</strong> (3,5% - 6,5%): Je nach Bundesland unterschiedlich, größter Posten</li>
              <li><strong>Notarkosten</strong> (~1,5%): Beurkundung des Kaufvertrags, gesetzlich geregelt</li>
              <li><strong>Grundbuchkosten</strong> (~0,5%): Eintragung des neuen Eigentümers</li>
              <li><strong>Maklerkosten</strong> (bis 3,57%): Optional, Käuferanteil max. 50% der Gesamtprovision</li>
            </ul>

            <h2>Warum sind Kaufnebenkosten so wichtig für die Rendite?</h2>
            <p>
              Die Kaufnebenkosten sind „verlorenes" Geld – sie steigern weder den Wert der Immobilie noch 
              werden sie durch Mieteinnahmen gedeckt. Diese Summe muss über die Haltedauer erst wieder 
              erwirtschaftet werden, bevor ein Gewinn entsteht. Deshalb sollten Kaufnebenkosten idealerweise 
              vollständig aus Eigenkapital finanziert werden.
            </p>

            <h2>Nebenkosten sparen: Ist das möglich?</h2>
            <p>
              Bei der Grunderwerbsteuer und den Notarkosten gibt es keinen Verhandlungsspielraum – sie sind 
              gesetzlich fixiert. Den größten Spielraum gibt es bei der Maklerprovision: Direktkäufe vom 
              Eigentümer sparen die gesamte Provision.
            </p>

            <h2>Häufig gestellte Fragen</h2>

            <h3>Kann ich die Kaufnebenkosten von der Steuer absetzen?</h3>
            <p>
              Bei vermieteten Immobilien ja – teilweise. Die Kosten werden dem Kaufpreis zugerechnet 
              und über die AfA abgeschrieben. Bei selbstgenutzten Immobilien sind Kaufnebenkosten nicht absetzbar.
            </p>

            <h3>Wie hoch sind die Nebenkosten insgesamt?</h3>
            <p>
              Typischerweise zwischen 8,5% (Bayern, ohne Makler) und rund 15% (Schleswig-Holstein, mit Makler) 
              des Kaufpreises.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <Link href="/rendite-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Rendite berechnen →</div>
              <div className="text-sm text-gray-600">Mietrendite inkl. Nebenkosten</div>
            </Link>
            <Link href="/ratgeber/finanzierung" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Ratgeber: Finanzierung →</div>
              <div className="text-sm text-gray-600">Immobilienfinanzierung verstehen</div>
            </Link>
            <Link href="/ratgeber/eigenkapital-immobilie" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Eigenkapital Ratgeber →</div>
              <div className="text-sm text-gray-600">Wie viel Eigenkapital brauchst du?</div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
