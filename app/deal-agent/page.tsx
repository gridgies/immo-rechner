import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DealAgentWaitlist from '@/components/DealAgentWaitlist';

export const metadata: Metadata = {
  title: 'Immo-Deal-Agent – Rentable Deals automatisch finden | Frühzugang sichern',
  description:
    'Der Immo-Deal-Agent scannt Immobilienportale, filtert rentable Objekte nach deinen Kriterien und bereitet die Analyse automatisch vor. Jetzt Frühzugang sichern.',
  alternates: { canonical: 'https://immo-rechner.net/deal-agent' },
};

const features = [
  {
    title: 'Automatisches Portal-Scanning',
    desc: 'Scannt Immobilienportale rund um die Uhr und erkennt neue Inserate sofort.',
  },
  {
    title: 'Rendite-Filter nach deinen Kriterien',
    desc: 'Nur Objekte, die deine Mindestrendite, Region und Budgetvorgaben erfüllen.',
  },
  {
    title: 'Automatische Makler-Anfragen',
    desc: 'Fehlende Informationen werden selbstständig bei Maklern angefragt.',
  },
  {
    title: 'Vollständige Rentabilitätsanalyse',
    desc: 'Cashflow, IRR und Nettomietrendite werden automatisch berechnet.',
  },
  {
    title: 'Objektiver Deal-Vergleich',
    desc: 'Deals werden nach Rentabilität eingestuft und priorisiert – ohne Bias.',
  },
  {
    title: 'Mikrolage-Check inklusive',
    desc: 'Infrastruktur, ÖPNV und Nahversorgung werden automatisch mitbewertet.',
  },
];

const bullets = [
  'scannt Immobilienportale automatisch',
  'filtert nach Rendite & Kriterien',
  'fragt fehlende Daten bei Maklern an',
  'erstellt Rentabilitätsanalysen',
  'vergleicht Deals objektiv',
];

export default function DealAgentPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#7099A3]/10 rounded-full text-sm font-medium text-[#5d7e87] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7099A3] animate-pulse" />
            Frühzugang · Beta
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Der nächste Schritt für{' '}
            <span className="bg-gradient-to-r from-[#7099A3] to-[#5d7e87] bg-clip-text text-transparent">
              Immobilieninvestoren
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Vom Analysieren zum automatischen Finden profitabler Deals.
          </p>
          <p className="text-base text-gray-500 mb-10 max-w-2xl mx-auto">
            Der Immo-Deal-Agent scannt Immobilienportale, filtert rentable Objekte nach deinen Kriterien
            und bereitet die vollständige Analyse automatisch vor – damit du nur noch entscheiden musst.
          </p>

          {/* Bullets */}
          <ul className="text-left inline-flex flex-col gap-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5 text-[#7099A3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {b}
              </li>
            ))}
          </ul>

          <div className="flex justify-center">
            <a
              href="#warteliste"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
            >
              Frühzugang sichern
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Was der Agent für dich erledigt</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Weniger manuelle Arbeit, mehr Zeit für die wirklich wichtigen Entscheidungen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-8 h-8 bg-[#7099A3]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-[#7099A3]">{i + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Warum ein Agent statt manueller Suche?</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Gute Immobiliendeal sind selten und werden schnell vergriffen. Wer täglich Portale manuell durchsucht,
              verbringt Stunden mit Filterung, Recherche und Makler-Korrespondenz – bevor überhaupt eine
              Rentabilitätsanalyse möglich ist.
            </p>
            <p>
              Der Immo-Deal-Agent übernimmt genau diesen Prozess: vollautomatisch, nach deinen Kriterien und
              rund um die Uhr. Du bekommst nur noch vorqualifizierte Deals mit vollständiger Analyse – und kannst
              dich auf das Wesentliche konzentrieren.
            </p>
            <p className="text-sm text-gray-500 bg-white rounded-lg p-4 border border-gray-200">
              <strong>Transparenz:</strong> Der Immo-Deal-Agent befindet sich in der Entwicklung.
              Mit dem Frühzugang wirst du als Erste/r informiert, wenn der Beta-Zugang öffnet.
              Kein Kauf, kein Abo – nur frühe Information.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="warteliste" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-lg mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Frühzugang sichern</h2>
          <p className="text-gray-600">
            Trag dich jetzt ein und erhalte als Erste/r Zugang zum Immo-Deal-Agenten,
            sobald der Beta-Test startet.
          </p>
        </div>

        <DealAgentWaitlist />
      </section>

      {/* Back to tools */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            In der Zwischenzeit – analysiere deine Deals manuell mit unseren kostenlosen Rechnern:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/cashflow-rechner" className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg hover:border-[#7099A3] text-gray-700 hover:text-[#7099A3] transition-colors text-sm font-medium">
              Cashflow-Rechner
            </Link>
            <Link href="/rendite-rechner" className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg hover:border-[#7099A3] text-gray-700 hover:text-[#7099A3] transition-colors text-sm font-medium">
              Rendite-Rechner
            </Link>
            <Link href="/mikrolage-analyse" className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg hover:border-[#7099A3] text-gray-700 hover:text-[#7099A3] transition-colors text-sm font-medium">
              Mikrolage-Analyse
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
