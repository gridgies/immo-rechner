import type { Metadata } from 'next';
import Link from 'next/link';
import AppWithAuth from '@/components/AppWithAuth';

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
              <Link href="/kaufnebenkosten-rechner" className="hover:text-gray-900">Nebenkosten</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">&rsaquo;</span>
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
      </div>

      <div className="bg-gray-50 border-y border-gray-200">
        <div className="h-[800px]">
          <AppWithAuth />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2>Was ist der IRR bei Immobilien?</h2>
          <p>
            Der IRR (Internal Rate of Return), auf Deutsch „Interner Zinsfuß", ist eine finanzmathematische 
            Kennzahl aus der dynamischen Investitionsrechnung. Bei Immobilien gibt er die durchschnittliche 
            jährliche Rendite auf das eingesetzte Eigenkapital an – unter Berücksichtigung aller 
            Zahlungsströme und deren zeitlicher Verteilung.
          </p>
          <p>
            Mathematisch betrachtet ist der IRR derjenige Zinssatz, bei dem der Kapitalwert (Net Present Value) 
            aller Zahlungsströme einer Investition gleich null wird. Anders gesagt: Es ist die Rendite, bei der 
            sich die Investition exakt selbst finanziert – weder Gewinn noch Verlust.
          </p>

          <h2>Warum ist der IRR besser als die Mietrendite?</h2>
          <p>
            Die klassische Mietrendite (Brutto oder Netto) ist immer eine Momentaufnahme. Sie berücksichtigt 
            nicht, dass sich Mieten und Kosten über die Jahre verändern, und ignoriert den Verkaufserlös am 
            Ende der Haltedauer vollständig. Der IRR hingegen bezieht alle relevanten Faktoren ein:
          </p>
          <p>
            Er berücksichtigt den initialen Eigenkapitaleinsatz (Kaufnebenkosten plus Eigenkapitalanteil am 
            Kaufpreis), die laufenden monatlichen Cashflows (Mieteinnahmen minus Annuität minus nicht umlegbares 
            Hausgeld), die Entwicklung über die Zeit (Mietsteigerungen, Kostensteigerungen, sinkende Zinsanteile) 
            und den Verkaufserlös am Ende (Immobilienwert nach Wertsteigerung minus Restschuld).
          </p>

          <h2>IRR bei Immobilien: Rechenbeispiel</h2>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 my-6 not-prose">
            <div className="text-sm font-medium text-gray-900 mb-4">Beispiel: 3-Zimmer-Wohnung, Kaufpreis 250.000 €</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Kaufpreis:</span><span className="font-medium">250.000 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Kaufnebenkosten (~11%):</span><span className="font-medium">27.500 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Eigenkapital (20% + NK):</span><span className="font-medium">77.500 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Finanzierung:</span><span className="font-medium">200.000 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Zins / Tilgung:</span><span className="font-medium">3,5% / 2,0%</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Kaltmiete (Start):</span><span className="font-medium">950 € / Monat</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Mietsteigerung:</span><span className="font-medium">2% p.a.</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Wertsteigerung über 20 Jahre:</span><span className="font-medium">+50%</span></div>
              <div className="border-t border-gray-300 my-3"></div>
              <div className="flex justify-between"><span className="text-gray-600">Zahlungsstrom Jahr 0:</span><span className="font-medium text-red-600">&minus;77.500 € (Eigenkapital)</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Zahlungsstrom Jahr 1-19:</span><span className="font-medium">Miete &minus; Rate &minus; Hausgeld (variiert)</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Zahlungsstrom Jahr 20:</span><span className="font-medium text-green-600">Cashflow + Verkauf &minus; Restschuld</span></div>
              <div className="border-t border-gray-300 my-3"></div>
              <div className="flex justify-between text-base"><span className="font-semibold text-gray-900">Berechneter IRR:</span><span className="font-bold text-[#7099A3]">~8,2% p.a.</span></div>
            </div>
          </div>

          <h2>Was ist ein guter IRR bei Immobilien?</h2>
          <p>
            Die Bewertung des IRR hängt vom Vergleichsmaßstab ab. Als Referenz dienen typischerweise 
            alternative Anlageformen: Festgeld bringt aktuell etwa 2 bis 3 Prozent, ein breit gestreutes 
            Aktienportfolio (wie ein MSCI World ETF) liefert historisch rund 7 bis 8 Prozent pro Jahr. 
            Eine Immobilieninvestition sollte also mindestens einen IRR von 5 bis 6 Prozent erzielen, 
            um den höheren Aufwand und die geringere Liquidität zu rechtfertigen. 
            Erfahrene Investoren streben IRR-Werte von 8 bis 12 Prozent an.
          </p>

          <h2>Grenzen des IRR</h2>
          <p>
            Trotz seiner Aussagekraft hat der IRR Schwächen, die du kennen solltest. Er unterstellt implizit, 
            dass alle Rückflüsse zum gleichen Zinssatz wiederangelegt werden – was in der Praxis selten der 
            Fall ist. Dadurch kann der IRR die tatsächliche Rendite leicht überschätzen. Außerdem reagiert er 
            sensibel auf die angenommene Wertsteigerung: Schon kleine Änderungen bei der erwarteten 
            Wertsteigerung können den IRR erheblich verschieben. Deshalb empfehlen wir, immer mehrere 
            Szenarien durchzurechnen – konservativ, realistisch und optimistisch. Unser Rechner macht dies 
            mit verschiedenen Haltedauern (10, 20, 30 Jahre) und einstellbarer Wertsteigerung besonders einfach.
          </p>

          <h2>IRR vs. andere Renditekennzahlen</h2>
          <p>
            Im Vergleich zur Bruttomietrendite, die nur den schnellen Überblick liefert, und der 
            Nettomietrendite, die immerhin Kosten berücksichtigt, ist der IRR die einzige Kennzahl, die den 
            gesamten Investitionszyklus abbildet: vom Eigenkapitaleinsatz über die laufende Bewirtschaftung 
            bis zum Verkauf. Die Bruttomietrendite eignet sich als erster Filter, die Nettomietrendite für 
            den Vergleich ähnlicher Objekte, und der IRR für die finale Investitionsentscheidung.
          </p>

          <h2>Häufig gestellte Fragen</h2>

          <h3>Kann der IRR negativ sein?</h3>
          <p>
            Ja, ein negativer IRR bedeutet, dass die Investition Geld vernichtet – die Summe aller 
            Rückflüsse ist geringer als der eingesetzte Eigenkapitalbetrag. Das kann passieren, wenn 
            die Mieteinnahmen dauerhaft nicht die Kosten decken und gleichzeitig der Immobilienwert sinkt.
          </p>

          <h3>Wie beeinflusst die Finanzierung den IRR?</h3>
          <p>
            Durch den Leverage-Effekt (Hebelwirkung) kann eine höhere Fremdfinanzierung den IRR steigern – 
            solange die Gesamtrendite der Immobilie über dem Darlehenszins liegt. Bei einem Zinssatz von 
            3,5 Prozent und einer Objektrendite von 5 Prozent profitiert der Investor von jedem fremdfinanzierten 
            Euro. Umgekehrt drückt eine zu teure Finanzierung den IRR nach unten.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <Link href="/rendite-rechner" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Rendite Rechner &rarr;</div>
            <div className="text-sm text-gray-600">Alle Renditekennzahlen berechnen</div>
          </Link>
          <Link href="/ratgeber/irr-erklaert" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Ratgeber: IRR erklärt &rarr;</div>
            <div className="text-sm text-gray-600">Ausführliche Erklärung mit Beispielen</div>
          </Link>
          <Link href="/cashflow-rechner" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Cashflow Rechner &rarr;</div>
            <div className="text-sm text-gray-600">Monatlichen Cashflow berechnen</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
