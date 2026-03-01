import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CITIES } from '@/data/cities';

export const metadata: Metadata = {
  title: 'Immobilien Kapitalanlage nach Stadt: Renditen & Preise 2026 | Immo-Rechner.net',
  description:
    'Immobilien als Kapitalanlage in deutschen Städten: Vergleiche Renditen, Kaufpreise und Grunderwerbsteuer für Berlin, München, Hamburg, Leipzig und 20+ weitere Städte.',
  alternates: { canonical: 'https://immo-rechner.net/immobilien-kapitalanlage' },
};

const profileColor = (profile: string) => {
  if (profile === 'A-Lage') return 'text-red-600 bg-red-50';
  if (profile === 'B-Lage') return 'text-amber-600 bg-amber-50';
  if (profile === 'C-Lage') return 'text-green-600 bg-green-50';
  return 'text-gray-600 bg-gray-50';
};

export default function KapitalanlageIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1">
          <li><Link href="/" className="hover:text-teal-600">Startseite</Link></li>
          <li aria-hidden="true"> / </li>
          <li className="text-gray-800" aria-current="page">Kapitalanlage nach Stadt</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Immobilien-Kapitalanlage in deutschen Städten
      </h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Vergleiche Kaufpreise, Mietrenditen und Grunderwerbsteuern für über 25 deutsche Städte.
        Klicke auf eine Stadt für detaillierte Marktdaten und einen integrierten Rendite-Rechner.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Stadt</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700">€/m²</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700">Rendite (Brutto)</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-700">Profil</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {CITIES.map((city) => {
              const rendite = ((city.avgRentPerSqmCold * 12) / city.avgPricePerSqm * 100).toFixed(1);
              return (
                <tr key={city.slug} className="bg-white hover:bg-teal-50 transition-colors">
                  <td className="px-4 py-3">
                    <Link
                      href={`/immobilien-kapitalanlage/${city.slug}`}
                      className="font-medium text-teal-700 hover:underline"
                    >
                      {city.name}
                    </Link>
                    <span className="text-xs text-gray-400 ml-2">{city.bundesland}</span>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-700 font-medium">
                    {city.avgPricePerSqm.toLocaleString('de-DE')}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-teal-700">
                    {rendite} %
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${profileColor(city.investmentProfile)}`}>
                      {city.investmentProfile}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">
        Näherungswerte basierend auf Marktdaten 2025/2026. Keine Anlageberatung.
      </p>
    </main>
    <Footer />
    </div>
  );
}
