import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const BUNDESLAENDER: Record<string, { name: string; rate: number; info: string }> = {
  'bayern': { name: 'Bayern', rate: 3.5, info: 'Bayern hat mit 3,5% den niedrigsten Grunderwerbsteuersatz in Deutschland.' },
  'berlin': { name: 'Berlin', rate: 6.0, info: 'Berlin erhebt 6,0% Grunderwerbsteuer.' },
  'hamburg': { name: 'Hamburg', rate: 5.5, info: 'Hamburg liegt mit 5,5% im Mittelfeld.' },
  'nordrhein-westfalen': { name: 'Nordrhein-Westfalen', rate: 6.5, info: 'NRW hat mit 6,5% einen der hoechsten Saetze.' },
  'baden-wuerttemberg': { name: 'Baden-Württemberg', rate: 5.0, info: 'Baden-Württemberg erhebt 5,0%.' },
  'hessen': { name: 'Hessen', rate: 6.0, info: 'Hessen erhebt 6,0% Grunderwerbsteuer.' },
  'brandenburg': { name: 'Brandenburg', rate: 6.5, info: 'Brandenburg hat 6,5% Grunderwerbsteuer.' },
  'bremen': { name: 'Bremen', rate: 5.0, info: 'Bremen erhebt 5,0%.' },
  'mecklenburg-vorpommern': { name: 'Mecklenburg-Vorpommern', rate: 6.0, info: 'MV erhebt 6,0%.' },
  'niedersachsen': { name: 'Niedersachsen', rate: 5.0, info: 'Niedersachsen liegt bei 5,0%.' },
  'rheinland-pfalz': { name: 'Rheinland-Pfalz', rate: 5.0, info: 'Rheinland-Pfalz erhebt 5,0%.' },
  'saarland': { name: 'Saarland', rate: 6.5, info: 'Saarland hat 6,5%.' },
  'sachsen': { name: 'Sachsen', rate: 5.5, info: 'Sachsen erhebt 5,5%.' },
  'sachsen-anhalt': { name: 'Sachsen-Anhalt', rate: 5.0, info: 'Sachsen-Anhalt erhebt 5,0%.' },
  'schleswig-holstein': { name: 'Schleswig-Holstein', rate: 6.5, info: 'Schleswig-Holstein hat 6,5%.' },
  'thueringen': { name: 'Thüringen', rate: 5.0, info: 'Thüringen erhebt 5,0%.' },
};

const ALL_BL = Object.entries(BUNDESLAENDER).map(([slug, data]) => ({ slug, ...data })).sort((a, b) => a.rate - b.rate);

export function generateStaticParams() {
  return Object.keys(BUNDESLAENDER).map((bundesland) => ({ bundesland }));
}

type Props = { params: { bundesland: string } };

export function generateMetadata({ params }: Props): Metadata {
  const bl = BUNDESLAENDER[params.bundesland];
  if (!bl) return {};
  return {
    title: `Grunderwerbsteuer ${bl.name} ${bl.rate}% – Rechner 2026 | Immo-Rechner`,
    description: `Grunderwerbsteuer in ${bl.name}: ${bl.rate}%. Berechne alle Kaufnebenkosten inkl. Notar, Makler und Grundbuch. Kostenloser Rechner.`,
    alternates: { canonical: `https://immo-rechner.net/grunderwerbsteuer/${params.bundesland}` },
  };
}

export default function GrunderwerbsteuerPage({ params }: Props) {
  const bl = BUNDESLAENDER[params.bundesland];
  if (!bl) notFound();

  const beispielKaufpreis = 300000;
  const grunderwerbsteuer = beispielKaufpreis * (bl.rate / 100);
  const notar = beispielKaufpreis * 0.015;
  const grundbuch = beispielKaufpreis * 0.005;
  const makler = beispielKaufpreis * 0.0357;
  const gesamt = grunderwerbsteuer + notar + grundbuch + makler;

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
            <Link href="/kaufnebenkosten-rechner" className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-sm font-medium">
              Nebenkosten berechnen
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/kaufnebenkosten-rechner" className="hover:text-gray-700">Kaufnebenkosten</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-gray-900">{bl.name}</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Grunderwerbsteuer {bl.name}: {bl.rate}%
        </h1>
        <p className="text-lg text-gray-600 mb-8">{bl.info}</p>

        {/* Example calculation */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Beispielrechnung: Kaufnebenkosten bei {beispielKaufpreis.toLocaleString('de-DE')} € Kaufpreis
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Grunderwerbsteuer ({bl.rate}%)</span>
              <span className="font-semibold">{grunderwerbsteuer.toLocaleString('de-DE')} €</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Notarkosten (~1,5%)</span>
              <span className="font-semibold">{notar.toLocaleString('de-DE')} €</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Grundbuchkosten (~0,5%)</span>
              <span className="font-semibold">{grundbuch.toLocaleString('de-DE')} €</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Makler (~3,57% inkl. MwSt)</span>
              <span className="font-semibold">{makler.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €</span>
            </div>
            <div className="flex justify-between py-3 text-lg">
              <span className="font-bold text-gray-900">Gesamte Kaufnebenkosten</span>
              <span className="font-bold text-[#7099A3]">{gesamt.toLocaleString('de-DE', { maximumFractionDigits: 0 })} € ({(gesamt / beispielKaufpreis * 100).toFixed(1)}%)</span>
            </div>
          </div>
        </div>

        {/* All Bundeslaender comparison */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Grunderwerbsteuer alle Bundesländer im Vergleich</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {ALL_BL.map((item) => (
            <Link
              key={item.slug}
              href={`/grunderwerbsteuer/${item.slug}`}
              className={`p-3 rounded-lg border text-center transition-colors ${
                item.slug === params.bundesland
                  ? 'bg-[#7099A3]/10 border-[#7099A3] text-[#7099A3]'
                  : 'bg-white border-gray-200 hover:border-[#7099A3]'
              }`}
            >
              <div className="text-xl font-bold">{item.rate}%</div>
              <div className="text-xs text-gray-600 truncate">{item.name}</div>
            </Link>
          ))}
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Was ist die Grunderwerbsteuer?</h2>
          <p>
            Die Grunderwerbsteuer ist eine einmalige Steuer, die beim Kauf einer Immobilie anfällt. 
            Sie wird auf den Kaufpreis berechnet und ist in Deutschland nach Bundesland unterschiedlich geregelt. 
            Die Steuersätze reichen von 3,5% in Bayern bis 6,5% in Brandenburg, Nordrhein-Westfalen, 
            dem Saarland und Schleswig-Holstein.
          </p>

          <h2>Wann muss die Grunderwerbsteuer gezahlt werden?</h2>
          <p>
            Die Grunderwerbsteuer wird fällig, sobald das Finanzamt den Steuerbescheid erlässt – 
            in der Regel wenige Wochen nach der notariellen Beurkundung des Kaufvertrags. 
            Erst nach Zahlung der Grunderwerbsteuer wird die Unbedenklichkeitsbescheinigung ausgestellt, 
            die für die Eigentumsumschreibung im Grundbuch erforderlich ist.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#7099A3]/10 border border-[#7099A3]/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-semibold text-gray-900">Komplette Investition berechnen?</div>
              <div className="text-sm text-gray-600">Cashflow, IRR und Rendite inkl. Nebenkosten für {bl.name}.</div>
            </div>
            <Link href="/rechner" className="px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm">
              Zum Komplett-Rechner &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
