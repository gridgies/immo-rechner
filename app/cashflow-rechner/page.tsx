import type { Metadata } from 'next';
import Link from 'next/link';
import AppWithAuth from '@/components/AppWithAuth';

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
      {/* Nav */}
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
              <Link href="/rendite-rechner" className="hover:text-gray-900">Rendite</Link>
              <Link href="/kaufnebenkosten-rechner" className="hover:text-gray-900">Nebenkosten</Link>
              <Link href="/mikrolage-analyse" className="hover:text-gray-900">Mikrolage</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header - SSR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      </div>

      {/* Calculator Widget (Client-Side) */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="h-[800px]">
          <AppWithAuth />
        </div>
      </div>

      {/* SEO Content below calculator */}
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
          <Link href="/rendite-rechner" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Rendite Rechner →</div>
            <div className="text-sm text-gray-600">Eigenkapitalrendite berechnen</div>
          </Link>
          <Link href="/mikrolage-analyse" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">KI Mikrolage →</div>
            <div className="text-sm text-gray-600">Standort analysieren</div>
          </Link>
          <Link href="/ratgeber/cashflow-immobilien" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Ratgeber →</div>
            <div className="text-sm text-gray-600">Cashflow bei Immobilien erklärt</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
