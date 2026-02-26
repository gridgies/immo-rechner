import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import AnimatedHero from '@/components/AnimatedHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Immobilien Rechner – Cashflow, Rendite & IRR kostenlos berechnen (2026)",
  description: "Kostenloser Immobilien-Rechner für Deutschland: Berechne Cashflow, Mietrendite, IRR und Kaufnebenkosten in Minuten. Inkl. Grunderwerbsteuer für alle 16 Bundesländer und Mikrolage-Analyse.",
  alternates: { canonical: "https://immo-rechner.net" },
};

export default function HomePage() {
  const rechnerLinks = [
    { href: '/cashflow-rechner', title: 'Cashflow Rechner (inkl. IRR)', desc: 'Monatlichen Cashflow und IRR deiner Immobilie berechnen' },
    { href: '/rendite-rechner', title: 'Rendite Rechner', desc: 'Brutto- und Nettomietrendite ermitteln' },
    { href: '/kaufnebenkosten-rechner', title: 'Kaufnebenkosten Rechner', desc: 'Grunderwerbsteuer, Notar, Makler berechnen' },
    { href: '/mikrolage-analyse', title: 'Mikrolage-Analyse', desc: 'Standort analysieren – Infrastruktur, ÖPNV, Nahversorgung' },
  ];

  const features = [
    'Cashflow-Berechnung – monatlich und jährlich',
    'IRR (Internal Rate of Return) über 10-30 Jahre',
    'Kaufnebenkosten inkl. aller 16 Bundesländer',
    'Eigenkapitalrendite und Mietrendite',
    'AfA-Berechnung und Steuervorteile',
    'Mieterhöhungen und Kostensteigerungen einplanen',
    'Wertsteigerung und Verkaufserlös berechnen',
    'Automatische Mikrolage-Analyse mit Karte',
  ];

  const bundeslaender = [
    { name: 'Bayern', slug: 'bayern', rate: '3,5' },
    { name: 'Berlin', slug: 'berlin', rate: '6,0' },
    { name: 'Hamburg', slug: 'hamburg', rate: '5,5' },
    { name: 'Nordrhein-Westfalen', slug: 'nordrhein-westfalen', rate: '6,5' },
  ];

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Kostenloser{' '}
                <span className="bg-gradient-to-r from-[#7099A3] to-[#5d7e87] bg-clip-text text-transparent">
                  Immobilien Rechner
                </span>{' '}
                für deine Investition
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Berechne Cashflow, IRR, Mietrendite und Kaufnebenkosten für Immobilien in Deutschland. 
                Mit automatischer Standortanalyse und Steuerberechnung – kostenlos und ohne Anmeldung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/cashflow-rechner"
                  className="group px-8 py-4 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-all text-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Jetzt kostenlos berechnen
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <Link
                  href="/mikrolage-analyse"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all text-lg font-medium"
                >
                  Standort-Analyse
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Keine Anmeldung erforderlich • Komplett kostenlos • Für den deutschen Markt
              </p>

              {/* Deal Agent Teaser */}
              <div className="mt-6 inline-flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600">
                <span>🤖</span>
                <span>
                  <strong className="text-gray-800">Bald verfügbar:</strong> Der Immo-Deal-Agent findet rentable Immobilien automatisch.
                </span>
                <Link
                  href="/deal-agent"
                  className="text-[#7099A3] hover:text-[#5d7e87] font-medium whitespace-nowrap transition-colors"
                >
                  Frühzugang sichern →
                </Link>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">IRR</div>
                <div className="text-sm text-gray-600">Internal Rate of Return</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">30 Jahre</div>
                <div className="text-sm text-gray-600">Projektionszeitraum</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">16</div>
                <div className="text-sm text-gray-600">Bundesländer</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Auto</div>
                <div className="text-sm text-gray-600">Mikrolage-Analyse</div>
              </div>
            </div>

            {/* Calculator Preview */}
            <div className="max-w-6xl mx-auto">
              <AnimatedHero />
            </div>
          </div>
        </section>

        {/* Rechner Grid Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 flex-1">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere Rechner im Überblick</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Von der schnellen Renditeberechnung bis zur detaillierten Cashflow-Analyse mit IRR – 
                alle Tools für deine Investitionsentscheidung.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {rechnerLinks.map((rechner) => (
                <Link
                  key={rechner.href}
                  href={rechner.href}
                  className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-[#7099A3] hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#7099A3] transition-colors">
                    {rechner.title}
                  </h3>
                  <p className="text-gray-600">{rechner.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          {/* Deal Agent Callout – under the tool grid */}
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#7099A3]/8 to-[#5d7e87]/8 border border-[#7099A3]/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#7099A3]/10 rounded-full text-xs font-medium text-[#5d7e87] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7099A3]" />
                  Demnächst verfügbar
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Keine Lust mehr, Deals manuell zu suchen?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unser neuer Agent scannt Immobilienportale, filtert rentable Objekte und bereitet die Analyse automatisch für dich vor.
                </p>
              </div>
              <Link
                href="/deal-agent"
                className="flex-shrink-0 px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm whitespace-nowrap"
              >
                Zur Warteliste →
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Alle Funktionen im Überblick</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Der umfassendste kostenlose Immobilienrechner für den deutschen Markt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <svg className="w-5 h-5 text-[#7099A3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grunderwerbsteuer Teaser */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Grunderwerbsteuer nach Bundesland</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Die Kaufnebenkosten variieren stark je nach Bundesland. Unser Rechner berücksichtigt 
                automatisch die aktuellen Steuersätze.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              {bundeslaender.map((land) => (
                <Link
                  key={land.slug}
                  href={`/grunderwerbsteuer/${land.slug}`}
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] hover:shadow-md transition-all text-center"
                >
                  <div className="text-2xl font-bold text-[#7099A3]">{land.rate}%</div>
                  <div className="text-sm text-gray-600">{land.name}</div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/kaufnebenkosten-rechner"
                className="text-[#7099A3] hover:text-[#5d7e87] font-medium inline-flex items-center gap-1"
              >
                Alle 16 Bundesländer ansehen
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Ratgeber Teaser */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ratgeber für Immobilieninvestoren</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fundiertes Wissen für erfolgreiche Investitionsentscheidungen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Link href="/ratgeber/cashflow-immobilien" className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#7099A3]">Cashflow bei Immobilien</h3>
                <p className="text-sm text-gray-600">Was ist ein guter Cashflow und wie berechnest du ihn?</p>
              </Link>
              <Link href="/ratgeber/irr-erklaert" className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#7099A3]">IRR einfach erklärt</h3>
                <p className="text-sm text-gray-600">Der Internal Rate of Return als wichtigste Renditekennzahl.</p>
              </Link>
              <Link href="/ratgeber/eigenkapital-immobilie" className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#7099A3]">Eigenkapital</h3>
                <p className="text-sm text-gray-600">Wie viel Eigenkapital brauchst du wirklich?</p>
              </Link>
              <Link href="/ratgeber/finanzierung" className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#7099A3]">Finanzierung</h3>
                <p className="text-sm text-gray-600">Zinsen, Tilgung und die optimale Finanzierungsstrategie.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Deal Agent Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium text-gray-300 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7099A3] animate-pulse" />
                  In Entwicklung · Frühzugang verfügbar
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                  Der nächste Schritt für Immobilieninvestoren
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Vom Analysieren zum automatischen Finden profitabler Deals.
                </p>
                <Link
                  href="/deal-agent"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium"
                >
                  Frühzugang sichern
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              <div className="space-y-3">
                {[
                  'scannt Immobilienportale automatisch',
                  'filtert nach Rendite & Kriterien',
                  'fragt fehlende Daten bei Maklern an',
                  'erstellt Rentabilitätsanalysen',
                  'vergleicht Deals objektiv',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3">
                    <svg className="w-5 h-5 text-[#7099A3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Bereit für deine Immobilienanalyse?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Berechne Cashflow, IRR und Rendite in wenigen Minuten – kostenlos und ohne Anmeldung.
            </p>
            <Link
              href="/cashflow-rechner"
              className="group px-8 py-4 bg-white text-[#7099A3] rounded-lg hover:bg-gray-50 transition-all text-lg font-medium inline-flex items-center gap-2 shadow-xl"
            >
              Jetzt kostenlos berechnen
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
