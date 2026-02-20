import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Cashflow Rechner Immobilien – Monatlichen Cashflow kostenlos berechnen | Immo-Rechner",
  description: "Berechne den monatlichen Cashflow deiner Immobilieninvestition. Kostenloser Rechner inkl. Mieteinnahmen, Hausgeld, Annuität und Mieterhöhungen für den deutschen Markt.",
  alternates: { canonical: "https://immo-rechner.net/cashflow-rechner" },
  openGraph: {
    title: "Cashflow Rechner für Immobilien – kostenlos berechnen",
    description: "Monatlichen Cashflow deiner Immobilieninvestition berechnen. Kostenloser Rechner für Mieteinnahmen, Kosten und Rendite.",
  },
};

export default function CashflowRechnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Cashflow Rechner</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Cashflow Rechner für Immobilien
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Berechne den monatlichen und jährlichen Cashflow deiner Immobilieninvestition. 
          Berücksichtigt werden Mieteinnahmen, Annuität, Hausgeld, Mietsteigerungen und Kostensteigerungen.
        </p>

        {/* CTA to Calculator */}
        <div className="bg-gradient-to-br from-[#7099A3]/10 to-[#5d7e87]/10 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Jetzt Cashflow berechnen</h2>
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

      {/* SEO Content */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h2>Wie funktioniert der Cashflow Rechner?</h2>
            <p>
              Unser Cashflow Rechner berechnet den monatlichen Geldfluss deiner Immobilieninvestition 
              in vier einfachen Schritten: Zuerst gibst du den Kaufpreis und die Kaufnebenkosten ein 
              (Grunderwerbsteuer wird automatisch nach Bundesland berechnet). Dann definierst du die 
              monatliche Kaltmiete und das Hausgeld. Im dritten Schritt legst du Eigenkapital, 
              Zinssatz und Tilgung fest. Abschließend wählst du die Haltedauer und erwartete Wertsteigerung.
            </p>

            <h2>Was sagt der Cashflow über eine Immobilie aus?</h2>
            <p>
              Der Cashflow ist die zentrale Kennzahl für die laufende Wirtschaftlichkeit einer Immobilieninvestition. 
              Er beantwortet die Frage: Bleibt am Ende des Monats Geld übrig, oder muss ich zuschießen? 
              Anders als die Rendite, die den Gesamtertrag über die Haltedauer bewertet, zeigt der Cashflow 
              den konkreten monatlichen Geldfluss.
            </p>
            <p>
              Für Banken ist ein positiver Cashflow ein wichtiges Signal bei der Kreditvergabe. 
              Er zeigt, dass das Objekt sich selbst trägt und kein zusätzliches Einkommen zur 
              Deckung der Kosten benötigt wird. Unser Rechner berechnet den Cashflow nicht nur 
              für das erste Jahr, sondern projiziert ihn über die gesamte Haltedauer unter 
              Berücksichtigung von Mieterhöhungen und Kostensteigerungen.
            </p>

            <h2>Cashflow-Formel für Immobilien</h2>
            <p>
              Die Berechnung des monatlichen Netto-Cashflows folgt einer einfachen Formel: 
              Monatliche Kaltmiete abzüglich der monatlichen Annuität (Zins plus Tilgung), 
              abzüglich des nicht umlegbaren Hausgeldes. Dabei ist zu beachten, dass das 
              umlegbare Hausgeld (Betriebskosten) bereits über die Nebenkostenvorauszahlung 
              des Mieters gedeckt wird und daher nicht in die Cashflow-Berechnung einfließt.
            </p>

            <h2>Häufig gestellte Fragen</h2>
            
            <h3>Wie viel Cashflow pro Wohnung ist realistisch?</h3>
            <p>
              In B- und C-Lagen (mittelgroße Städte, Randlagen) sind Cashflows von 50 bis 200 Euro 
              pro Monat und Wohneinheit realistisch. In A-Lagen (Top-7-Städte, Innenstadtlagen) 
              ist aufgrund der hohen Kaufpreise ein positiver Cashflow oft nur schwer zu erzielen.
            </p>

            <h3>Was tun bei negativem Cashflow?</h3>
            <p>
              Ein leicht negativer Cashflow (bis -100 €/Monat) ist nicht automatisch ein Ausschlusskriterium. 
              Wenn die erwartete Wertsteigerung den negativen Cashflow überkompensiert, 
              kann die Investition trotzdem sinnvoll sein. Prüfe dies mit unserem IRR-Rechner.
            </p>
          </div>

          {/* Internal Links */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            <Link href="/rendite-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Rendite Rechner →</div>
              <div className="text-sm text-gray-600">Eigenkapitalrendite berechnen</div>
            </Link>
            <Link href="/irr-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">IRR Rechner →</div>
              <div className="text-sm text-gray-600">Internal Rate of Return</div>
            </Link>
            <Link href="/ratgeber/cashflow-immobilien" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Ratgeber →</div>
              <div className="text-sm text-gray-600">Cashflow bei Immobilien erklärt</div>
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
