import Link from 'next/link';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';

// This is a SERVER COMPONENT - content is fully rendered as HTML for Google
export const metadata = {
  title: "Immobilien Rechner – Cashflow, Rendite & IRR kostenlos berechnen (2026)",
  description: "Kostenloser Immobilien-Rechner für Deutschland: Berechne Cashflow, Mietrendite, IRR und Kaufnebenkosten in Minuten. Inkl. Grunderwerbsteuer für alle 16 Bundesländer und KI-Mikrolage-Analyse.",
  alternates: { canonical: "https://immo-rechner.net" },
};

export default function HomePage() {
  const rechnerLinks = [
    { href: '/cashflow-rechner', title: 'Cashflow Rechner', desc: 'Monatlichen Cashflow deiner Immobilie berechnen' },
    { href: '/rendite-rechner', title: 'Rendite Rechner', desc: 'Eigenkapitalrendite und Mietrendite ermitteln' },
    { href: '/irr-rechner', title: 'IRR Rechner', desc: 'Internal Rate of Return über 10-30 Jahre' },
    { href: '/kaufnebenkosten-rechner', title: 'Kaufnebenkosten Rechner', desc: 'Grunderwerbsteuer, Notar, Makler berechnen' },
    { href: '/mikrolage-analyse', title: 'KI Mikrolage-Analyse', desc: 'Standort mit KI analysieren – Infrastruktur, ÖPNV, Nahversorgung' },
  ];

  const features = [
    'Cashflow-Berechnung – monatlich und jährlich',
    'IRR (Internal Rate of Return) über 10-30 Jahre',
    'Kaufnebenkosten inkl. aller 16 Bundesländer',
    'Eigenkapitalrendite und Mietrendite',
    'AfA-Berechnung und Steuervorteile',
    'Mieterhöhungen und Kostensteigerungen einplanen',
    'Wertsteigerung und Verkaufserlös berechnen',
    'KI-gestützte Mikrolage-Analyse mit Karte',
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
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IR</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Immobilien Rechner</span>
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                <Link href="/cashflow-rechner" className="hover:text-gray-900 transition-colors">Cashflow</Link>
                <Link href="/rendite-rechner" className="hover:text-gray-900 transition-colors">Rendite</Link>
                <Link href="/kaufnebenkosten-rechner" className="hover:text-gray-900 transition-colors">Nebenkosten</Link>
                <Link href="/mikrolage-analyse" className="hover:text-gray-900 transition-colors">Mikrolage</Link>
              </div>
              <Link
                href="/rechner"
                className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-sm font-medium"
              >
                Zum Rechner
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section - fully SSR rendered */}
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
                Mit KI-gestützter Standortanalyse und Steuerberechnung – kostenlos und ohne Anmeldung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/rechner"
                  className="group px-8 py-4 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-all text-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Jetzt kostenlos berechnen
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <Link
                  href="/mikrolage-analyse"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all text-lg font-medium"
                >
                  KI Standort-Analyse
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Keine Anmeldung erforderlich • Komplett kostenlos • Für den deutschen Markt
              </p>
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
                <div className="text-2xl font-bold text-gray-900">KI</div>
                <div className="text-sm text-gray-600">Mikrolage-Analyse</div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7099A3]/20 to-[#5d7e87]/20 blur-3xl transform -translate-y-12"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-600 font-medium">
                    immo-rechner.net
                  </div>
                </div>
                <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src="/screenshot.png"
                    alt="Immobilien Rechner: Cashflow, IRR und Rendite berechnen für Kapitalanlage-Immobilien in Deutschland"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="object-cover object-top"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rechner-Übersicht (SEO: internal links + keyword-rich content) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="rechner">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Alle Rechner für deine Immobilieninvestition
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Von der ersten Cashflow-Analyse bis zur KI-gestützten Standortbewertung – kostenlos und ohne Anmeldung.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rechnerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="group bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#7099A3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="text-[#7099A3] text-sm font-medium flex items-center gap-1">
                    Jetzt berechnen
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section - SEO content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Präzise Berechnungen für fundierte Entscheidungen
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Unser Immobilien Rechner berücksichtigt alle wichtigen Faktoren für den deutschen Immobilienmarkt:
                </p>
                <div className="space-y-4">
                  {features.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#7099A3]/5 to-[#5d7e87]/5 rounded-2xl p-8 border border-[#7099A3]/20">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Interner Zinsfuß (IRR)</div>
                    <div className="text-3xl font-bold text-[#7099A3]">8,42%</div>
                    <div className="text-xs text-gray-500 mt-1">Über 30 Jahre</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Monatlicher Cashflow</div>
                    <div className="text-3xl font-bold text-green-600">+342 €</div>
                    <div className="text-xs text-gray-500 mt-1">Nach allen Kosten</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Vermögenszuwachs</div>
                    <div className="text-3xl font-bold text-[#7099A3]">243.500 €</div>
                    <div className="text-xs text-gray-500 mt-1">Nach 30 Jahren</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section - important for Google */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Immobilien als Kapitalanlage berechnen</h2>
            <p className="text-gray-600 leading-relaxed">
              Der Kauf einer Immobilie als Kapitalanlage ist eine der beliebtesten Formen der Vermögensbildung in Deutschland. 
              Doch bevor du eine Investitionsentscheidung triffst, solltest du genau wissen, ob sich das Objekt finanziell lohnt. 
              Unser kostenloser Immobilien Rechner hilft dir dabei, alle relevanten Kennzahlen auf einen Blick zu berechnen.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Was berechnet der Immobilien Rechner?</h3>
            <p className="text-gray-600 leading-relaxed">
              Der Rechner analysiert deine Immobilieninvestition aus drei Perspektiven: Der <strong>Cashflow</strong> zeigt dir, 
              wie viel Geld monatlich nach Abzug aller Kosten (Annuität, nicht umlegbares Hausgeld) übrig bleibt. 
              Die <strong>Eigenkapitalrendite (IRR)</strong> berücksichtigt alle Zahlungsströme über die gesamte Haltedauer 
              und berechnet, welche jährliche Rendite dein eingesetztes Eigenkapital erwirtschaftet. 
              Der <strong>Vermögenszuwachs</strong> zeigt dir den Gesamtertrag inklusive Wertsteigerung und Tilgung.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Kaufnebenkosten nicht vergessen</h3>
            <p className="text-gray-600 leading-relaxed">
              Ein häufiger Fehler bei der Immobilienkalkulation ist das Unterschätzen der Kaufnebenkosten. 
              Diese setzen sich zusammen aus der Grunderwerbsteuer (3,5% in Bayern bis 6,5% in Brandenburg, NRW und Schleswig-Holstein), 
              Notarkosten (~1,5%), Grundbuchkosten (~0,5%) und ggf. Maklergebühren (bis zu 3,57% inkl. MwSt). 
              In Summe kommen schnell 10-13% des Kaufpreises zusammen. Unser Rechner berücksichtigt die aktuellen 
              Grunderwerbsteuersätze aller 16 Bundesländer automatisch.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Steuervorteile durch AfA nutzen</h3>
            <p className="text-gray-600 leading-relaxed">
              Vermietete Immobilien bieten steuerliche Vorteile durch die Absetzung für Abnutzung (AfA). 
              Bei Gebäuden, die nach dem 31.12.1924 errichtet wurden, beträgt der AfA-Satz 2% über 50 Jahre. 
              Für Neubauten ab 2023 gilt ein erhöhter AfA-Satz von 3%. Diese Abschreibung mindert dein zu versteuerndes Einkommen 
              und verbessert damit die effektive Rendite deiner Immobilieninvestition erheblich. 
              Unser Rechner berücksichtigt die AfA bei der Steuerberechnung.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">KI-Mikrolage-Analyse: Standort automatisch bewerten</h3>
            <p className="text-gray-600 leading-relaxed">
              Die Lage ist der wichtigste Faktor bei einer Immobilieninvestition. Unsere KI-gestützte Mikrolage-Analyse 
              bewertet den Standort deiner Wunschimmobilie automatisch. Gib einfach die Adresse ein und erhalte eine 
              detaillierte Auswertung zu ÖPNV-Anbindung, Nahversorgung, Schulen und Kitas, Grünflächen, 
              medizinischer Versorgung und potenziellen Lärmquellen – inklusive interaktiver Karte.
            </p>
          </div>
        </section>

        {/* Grunderwerbsteuer Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Grunderwerbsteuer nach Bundesland</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {bundeslaender.map((bl) => (
                <Link key={bl.slug} href={`/grunderwerbsteuer/${bl.slug}`} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors text-center">
                  <div className="text-2xl font-bold text-[#7099A3]">{bl.rate}%</div>
                  <div className="text-sm text-gray-600">{bl.name}</div>
                </Link>
              ))}
            </div>
            <p className="text-center mt-6">
              <Link href="/kaufnebenkosten-rechner" className="text-[#7099A3] hover:text-[#5d7e87] font-medium text-sm">
                Alle 16 Bundesländer anzeigen →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Starte jetzt deine Immobilienanalyse
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Kostenlos, ohne Anmeldung und speziell für den deutschen Immobilienmarkt entwickelt.
            </p>
            <Link
              href="/rechner"
              className="group px-8 py-4 bg-white text-[#7099A3] rounded-lg hover:bg-gray-50 transition-all text-lg font-medium inline-flex items-center gap-2 shadow-xl"
            >
              Jetzt kostenlos berechnen
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </section>

        {/* Footer with proper links */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">IR</span>
                  </div>
                  <span className="text-lg font-semibold">Immobilien Rechner</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Der kostenlose Rechner für Immobilieninvestitionen in Deutschland.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Rechner</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/rechner" className="text-gray-400 hover:text-white transition-colors">Komplett-Rechner</Link></li>
                  <li><Link href="/cashflow-rechner" className="text-gray-400 hover:text-white transition-colors">Cashflow Rechner</Link></li>
                  <li><Link href="/rendite-rechner" className="text-gray-400 hover:text-white transition-colors">Rendite Rechner</Link></li>
                  <li><Link href="/irr-rechner" className="text-gray-400 hover:text-white transition-colors">IRR Rechner</Link></li>
                  <li><Link href="/kaufnebenkosten-rechner" className="text-gray-400 hover:text-white transition-colors">Kaufnebenkosten</Link></li>
                  <li><Link href="/mikrolage-analyse" className="text-gray-400 hover:text-white transition-colors">KI Mikrolage</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Ratgeber</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/ratgeber/cashflow-immobilien" className="text-gray-400 hover:text-white transition-colors">Cashflow bei Immobilien</Link></li>
                  <li><Link href="/ratgeber/irr-erklaert" className="text-gray-400 hover:text-white transition-colors">IRR einfach erklärt</Link></li>
                  <li><Link href="/ratgeber/eigenkapital-immobilie" className="text-gray-400 hover:text-white transition-colors">Eigenkapital für Immobilien</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Rechtliches</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">Datenschutz</Link></li>
                  <li><Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">Impressum</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Immobilien Rechner. Alle Rechte vorbehalten.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
