import type { Metadata } from 'next';
import Link from 'next/link';
import AppWithAuth from '@/components/AppWithAuth';

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
  },
};

export default function KaufnebenkostenRechnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">IR</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Immobilien Rechner</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <Link href="/cashflow-rechner" className="hover:text-gray-900">Cashflow</Link>
              <Link href="/rendite-rechner" className="hover:text-gray-900">Rendite</Link>
              <Link href="/mikrolage-analyse" className="hover:text-gray-900">Mikrolage</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-gray-900">Kaufnebenkosten Rechner</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Kaufnebenkosten Rechner 2026
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Beim Immobilienkauf fallen neben dem Kaufpreis erhebliche Nebenkosten an: 
          Grunderwerbsteuer, Notar, Grundbuch und ggf. Makler. In Summe können diese 
          8,5 bis 15 Prozent des Kaufpreises ausmachen. Unser Rechner berechnet alle 
          Kosten automatisch – inklusive der aktuellen Grunderwerbsteuersätze aller 16 Bundesländer.
        </p>
      </div>

      <div className="bg-gray-50 border-y border-gray-200">
        <div className="h-[800px]">
          <AppWithAuth />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Grunderwerbsteuer Table */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Grunderwerbsteuer alle 16 Bundesländer (Stand 2026)</h2>
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

        <div className="prose prose-lg max-w-none">
          <h2>Welche Kaufnebenkosten fallen beim Immobilienkauf an?</h2>
          <p>
            Die Kaufnebenkosten setzen sich aus vier Hauptposten zusammen, von denen drei unvermeidbar sind 
            und einer optional. Die Grunderwerbsteuer ist die größte Position und variiert je nach Bundesland 
            zwischen 3,5 Prozent (Bayern) und 6,5 Prozent (Brandenburg, NRW, Saarland, Schleswig-Holstein). 
            Sie wird fällig, sobald das Finanzamt den Steuerbescheid nach der notariellen Beurkundung erlässt. 
            Erst nach Zahlung wird die Unbedenklichkeitsbescheinigung ausgestellt, die für den Grundbucheintrag 
            erforderlich ist.
          </p>
          <p>
            Die Notarkosten belaufen sich auf rund 1,5 Prozent des Kaufpreises. Der Notar beurkundet den 
            Kaufvertrag, kümmert sich um die Grundschuldbestellung und wickelt den Eigentumsübergang ab. 
            Diese Kosten sind gesetzlich geregelt (Gerichts- und Notarkostengesetz) und lassen sich nicht 
            verhandeln. Die Grundbuchkosten betragen weitere 0,5 Prozent und fallen für die Eintragung 
            des neuen Eigentümers und der Grundschuld an.
          </p>
          <p>
            Die Maklerprovision ist seit der Reform von 2020 bei Wohnimmobilienkäufen in der Regel zwischen 
            Käufer und Verkäufer geteilt. Die übliche Gesamtprovision beträgt 5,95 bis 7,14 Prozent des 
            Kaufpreises inklusive Mehrwertsteuer, wobei der Käufer maximal die Hälfte tragen muss. 
            Bei Direktkäufen vom Eigentümer oder bei Zwangsversteigerungen entfällt die Maklerprovision.
          </p>

          <h2>Warum sind Kaufnebenkosten so wichtig für die Rendite?</h2>
          <p>
            Die Kaufnebenkosten sind „verlorenes" Geld – sie steigern weder den Wert der Immobilie noch 
            werden sie durch Mieteinnahmen gedeckt. Bei einem Kaufpreis von 300.000 Euro in NRW summieren 
            sich die Nebenkosten schnell auf 35.000 bis 40.000 Euro. Diese Summe muss über die Haltedauer 
            durch Mieteinnahmen und Wertsteigerung erst wieder erwirtschaftet werden, bevor ein Gewinn 
            entsteht. Deshalb sollten Kaufnebenkosten idealerweise vollständig aus Eigenkapital finanziert 
            werden – Banken finanzieren Nebenkosten in der Regel nicht oder nur zu deutlich schlechteren 
            Konditionen.
          </p>

          <h2>Nebenkosten sparen: Ist das möglich?</h2>
          <p>
            Bei der Grunderwerbsteuer gibt es keinen Verhandlungsspielraum – sie ist gesetzlich fixiert. 
            Wer die Wahl hat, kann allerdings Bundesländer mit niedrigerem Steuersatz bevorzugen: 
            Der Unterschied zwischen Bayern (3,5%) und NRW (6,5%) beträgt bei 400.000 Euro Kaufpreis 
            immerhin 12.000 Euro. Die Notarkosten sind ebenfalls gesetzlich geregelt. 
            Den größten Spielraum gibt es bei der Maklerprovision: Direktkäufe vom Eigentümer sparen 
            die gesamte Provision. Und auch bei maklergestützten Käufen lohnt sich die Verhandlung – 
            die Maklerprovision ist nicht gesetzlich festgelegt und kann verhandelt werden.
          </p>

          <h2>Häufig gestellte Fragen</h2>

          <h3>Kann ich die Kaufnebenkosten von der Steuer absetzen?</h3>
          <p>
            Bei vermieteten Immobilien ja – teilweise. Notarkosten für die Grundschuldbestellung und 
            die Grunderwerbsteuer werden dem Kaufpreis zugerechnet und über die AfA abgeschrieben. 
            Maklerkosten können als Werbungskosten sofort abgesetzt oder dem Kaufpreis zugeschlagen werden. 
            Bei selbstgenutzten Immobilien sind Kaufnebenkosten nicht steuerlich absetzbar.
          </p>

          <h3>Wie hoch sind die Nebenkosten insgesamt?</h3>
          <p>
            Die Gesamtnebenkosten liegen typischerweise zwischen 8,5 Prozent (Bayern, ohne Makler) und 
            rund 15 Prozent (Schleswig-Holstein, mit Makler) des Kaufpreises. Die genaue Höhe hängt vom 
            Bundesland und davon ab, ob ein Makler involviert ist. Unser Rechner berechnet alle Posten 
            individuell.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <Link href="/rendite-rechner" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Rendite berechnen &rarr;</div>
            <div className="text-sm text-gray-600">Mietrendite inkl. Nebenkosten</div>
          </Link>
          <Link href="/mikrolage-analyse" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">KI Mikrolage &rarr;</div>
            <div className="text-sm text-gray-600">Standort automatisch analysieren</div>
          </Link>
          <Link href="/ratgeber/eigenkapital-immobilie" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Eigenkapital Ratgeber &rarr;</div>
            <div className="text-sm text-gray-600">Wie viel Eigenkapital brauchst du?</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
