import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "IRR Rechner Immobilien – Internal Rate of Return kostenlos berechnen (2026) | Immo-Rechner",
  description: "Berechne den IRR (Internal Rate of Return) deiner Immobilieninvestition. Kostenloser Rechner mit monatlichen Cashflows, Wertsteigerung und Verkaufserlös über 10-30 Jahre.",
  alternates: { canonical: "https://immo-rechner.net/irr-rechner" },
  openGraph: {
    title: "IRR Rechner für Immobilien – Internal Rate of Return berechnen",
    description: "Internal Rate of Return (IRR) für Immobilieninvestitionen berechnen. Kostenloser Rechner inkl. Cashflows und Wertsteigerung.",
  },
};

export default function IRRRechnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">IRR Rechner</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          IRR Rechner – Internal Rate of Return für Immobilien
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Der IRR (Internal Rate of Return) ist die aussagekräftigste Renditekennzahl für Immobilieninvestitionen. 
          Er berücksichtigt alle Zahlungsströme über die gesamte Haltedauer inklusive Eigenkapitaleinsatz, 
          laufende Cashflows und Verkaufserlös.
        </p>

        {/* CTA to Calculator */}
        <div className="bg-gradient-to-br from-[#7099A3]/10 to-[#5d7e87]/10 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Jetzt IRR berechnen</h2>
              <p className="text-gray-600">Nutze unseren kostenlosen Rechner mit allen Funktionen</p>
            </div>
            <Link
              href="/rechner"
              className="px-8 py-4 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-lg font-medium whitespace-nowrap"
            >
              Zum Rechner →
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h2>Was ist der IRR bei Immobilien?</h2>
            <p>
              Der IRR (Internal Rate of Return), auf Deutsch „Interner Zinsfuß", ist eine finanzmathematische 
              Kennzahl aus der dynamischen Investitionsrechnung. Bei Immobilien gibt er die durchschnittliche 
              jährliche Rendite auf das eingesetzte Eigenkapital an – unter Berücksichtigung aller 
              Zahlungsströme und deren zeitlicher Verteilung.
            </p>

            <h2>Warum ist der IRR besser als die Mietrendite?</h2>
            <p>
              Die klassische Mietrendite ist immer eine Momentaufnahme. Sie berücksichtigt nicht, dass sich 
              Mieten und Kosten über die Jahre verändern, und ignoriert den Verkaufserlös am Ende der Haltedauer. 
              Der IRR hingegen bezieht alle relevanten Faktoren ein: Eigenkapitaleinsatz, laufende Cashflows, 
              Entwicklung über die Zeit und Verkaufserlös.
            </p>

            <div className="bg-white rounded-lg p-6 border border-gray-200 my-6 not-prose">
              <div className="text-sm font-medium text-gray-900 mb-4">Beispiel: 3-Zimmer-Wohnung, Kaufpreis 250.000 €</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">Kaufpreis:</span><span className="font-medium">250.000 €</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Eigenkapital (20% + NK):</span><span className="font-medium">77.500 €</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Zins / Tilgung:</span><span className="font-medium">3,5% / 2,0%</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Kaltmiete (Start):</span><span className="font-medium">950 € / Monat</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Wertsteigerung über 20 Jahre:</span><span className="font-medium">+50%</span></div>
                <div className="border-t border-gray-300 my-3"></div>
                <div className="flex justify-between text-base"><span className="font-semibold text-gray-900">Berechneter IRR:</span><span className="font-bold text-[#7099A3]">~8,2% p.a.</span></div>
              </div>
            </div>

            <h2>Was ist ein guter IRR bei Immobilien?</h2>
            <p>
              Als Referenz: Festgeld bringt etwa 2-3%, ein MSCI World ETF historisch 7-8% pro Jahr. 
              Eine Immobilieninvestition sollte mindestens einen IRR von 5-6% erzielen. 
              Erfahrene Investoren streben IRR-Werte von 8-12% an.
            </p>

            <h2>Häufig gestellte Fragen</h2>

            <h3>Kann der IRR negativ sein?</h3>
            <p>
              Ja, ein negativer IRR bedeutet, dass die Investition Geld vernichtet – die Summe aller 
              Rückflüsse ist geringer als der eingesetzte Eigenkapitalbetrag.
            </p>

            <h3>Wie beeinflusst die Finanzierung den IRR?</h3>
            <p>
              Durch den Leverage-Effekt kann eine höhere Fremdfinanzierung den IRR steigern – 
              solange die Gesamtrendite der Immobilie über dem Darlehenszins liegt.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <Link href="/rendite-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Rendite Rechner →</div>
              <div className="text-sm text-gray-600">Alle Renditekennzahlen berechnen</div>
            </Link>
            <Link href="/ratgeber/irr-erklaert" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Ratgeber: IRR erklärt →</div>
              <div className="text-sm text-gray-600">Ausführliche Erklärung mit Beispielen</div>
            </Link>
            <Link href="/cashflow-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Cashflow Rechner →</div>
              <div className="text-sm text-gray-600">Monatlichen Cashflow berechnen</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">IR</span>
            </div>
            <span className="text-sm">Immobilien Rechner</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
