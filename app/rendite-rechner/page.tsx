import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Rendite Rechner Immobilien – Mietrendite & Eigenkapitalrendite berechnen (2026) | Immo-Rechner",
  description: "Berechne Bruttomietrendite, Nettomietrendite und Eigenkapitalrendite deiner Immobilie. Kostenloser Rendite-Rechner für den deutschen Immobilienmarkt mit Kaufnebenkosten und IRR.",
  alternates: { canonical: "https://immo-rechner.net/rendite-rechner" },
  openGraph: {
    title: "Rendite Rechner für Immobilien – Mietrendite kostenlos berechnen",
    description: "Bruttomietrendite, Nettomietrendite und Eigenkapitalrendite berechnen. Kostenloser Rechner inkl. aller Kaufnebenkosten.",
  },
};

export default function RenditeRechnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Rendite Rechner</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Rendite Rechner für Immobilien
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Berechne Bruttomietrendite, Nettomietrendite und Eigenkapitalrendite (IRR) deiner Immobilieninvestition. 
          Unser Rechner berücksichtigt Kaufnebenkosten, Hausgeld, Mietsteigerungen und Wertsteigerung über 10 bis 30 Jahre.
        </p>

        {/* CTA to Calculator */}
        <div className="bg-gradient-to-br from-[#7099A3]/10 to-[#5d7e87]/10 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Jetzt Rendite berechnen</h2>
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
            <h2>Welche Rendite-Kennzahlen gibt es bei Immobilien?</h2>
            <p>
              Bei der Bewertung einer Immobilie als Kapitalanlage spielen verschiedene Renditekennzahlen eine Rolle. 
              Jede beantwortet eine andere Frage und hat unterschiedliche Stärken. Die wichtigsten drei sind 
              Bruttomietrendite, Nettomietrendite und Eigenkapitalrendite – und sie unterscheiden sich erheblich 
              in ihrer Aussagekraft.
            </p>

            <h3>Bruttomietrendite – der schnelle Überblick</h3>
            <p>
              Die Bruttomietrendite ist die einfachste Kennzahl und eignet sich gut für eine erste Einschätzung. 
              Sie setzt die Jahreskaltmiete ins Verhältnis zum Kaufpreis. Die Formel lautet: Jahreskaltmiete geteilt 
              durch Kaufpreis, multipliziert mit 100. Bei einer Wohnung für 250.000 Euro mit 1.000 Euro Monatsmiete 
              ergibt das eine Bruttomietrendite von 4,8 Prozent. Der Nachteil: Kaufnebenkosten, laufende Kosten und 
              Finanzierung bleiben unberücksichtigt.
            </p>

            <div className="bg-white rounded-lg p-6 border border-gray-200 my-6 not-prose">
              <div className="text-sm font-medium text-gray-900 mb-3">Formeln im Überblick</div>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <div className="text-xs text-gray-500 mb-1">Bruttomietrendite</div>
                  <div className="font-medium text-gray-900">(Jahreskaltmiete ÷ Kaufpreis) × 100</div>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <div className="text-xs text-gray-500 mb-1">Nettomietrendite</div>
                  <div className="font-medium text-gray-900">(Jahreskaltmiete − nicht umlegbare Kosten) ÷ (Kaufpreis + Nebenkosten) × 100</div>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-gray-200">
                  <div className="text-xs text-gray-500 mb-1">Eigenkapitalrendite (IRR)</div>
                  <div className="font-medium text-gray-900">Berücksichtigt alle Zahlungsströme über die gesamte Haltedauer, inkl. Verkaufserlös</div>
                </div>
              </div>
            </div>

            <h3>Nettomietrendite – die realistischere Kennzahl</h3>
            <p>
              Die Nettomietrendite ist deutlich aussagekräftiger, weil sie die laufenden Kosten und Kaufnebenkosten 
              berücksichtigt. Von der Jahreskaltmiete werden nicht umlegbare Kosten wie Verwaltung, 
              Instandhaltungsrücklage und Leerstandsrisiko abgezogen. Der Kaufpreis wird um die Kaufnebenkosten 
              (Grunderwerbsteuer, Notar, Grundbuch, ggf. Makler) erhöht.
            </p>

            <h3>Eigenkapitalrendite (IRR) – die Königsdisziplin</h3>
            <p>
              Die Eigenkapitalrendite, gemessen als IRR (Internal Rate of Return), ist die umfassendste Kennzahl. 
              Sie berücksichtigt nicht nur die laufenden Mieteinnahmen und Kosten, sondern auch den Zeitpunkt 
              aller Zahlungsströme, den eingesetzten Eigenkapitalbetrag und den Verkaufserlös am Ende der 
              Haltedauer.
            </p>

            <h2>Welche Renditen sind realistisch in Deutschland?</h2>
            <p>
              Die erzielbaren Renditen variieren stark nach Lage und Immobilientyp. In den Top-7-Städten 
              liegen die Bruttomietrenditen typischerweise zwischen 2,5 und 3,5 Prozent. In B-Städten 
              sind 4 bis 5 Prozent realistisch. In C- und D-Lagen können 6 bis 8 Prozent erreicht werden.
            </p>
          </div>

          {/* Internal Links */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <Link href="/irr-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">IRR Rechner →</div>
              <div className="text-sm text-gray-600">Internal Rate of Return berechnen</div>
            </Link>
            <Link href="/cashflow-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Cashflow Rechner →</div>
              <div className="text-sm text-gray-600">Monatlichen Cashflow berechnen</div>
            </Link>
            <Link href="/ratgeber/irr-erklaert" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Ratgeber: IRR erklärt →</div>
              <div className="text-sm text-gray-600">Internal Rate of Return verstehen</div>
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
