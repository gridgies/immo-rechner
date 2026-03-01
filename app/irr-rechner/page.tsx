import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://immo-rechner.net/irr-rechner#app",
      "name": "IRR Rechner Immobilien",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "url": "https://immo-rechner.net/irr-rechner",
      "description": "Lerne den IRR (Internal Rate of Return) bei Immobilien und berechne ihn kostenlos. Erklärt mit Beispielen und Richtwerten.",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
      "inLanguage": "de-DE"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://immo-rechner.net" },
        { "@type": "ListItem", "position": 2, "name": "IRR Rechner", "item": "https://immo-rechner.net/irr-rechner" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Was ist der IRR bei Immobilien?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der IRR (Internal Rate of Return, Interner Zinsfuß) ist die durchschnittliche jährliche Rendite auf das eingesetzte Eigenkapital über die gesamte Haltedauer der Immobilie. Er berücksichtigt alle Zahlungsströme: Eigenkapitaleinsatz, monatliche Cashflows, Mieterhöhungen, Kostensteigerungen und den Verkaufserlös abzüglich Restschuld."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist ein guter IRR für eine Immobilie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Richtwerte: Unter 3% = unattraktiv. 3–6% = akzeptabel (vergleichbar mit Aktien-ETF). 6–10% = gut bis sehr gut. Über 10% = exzellent, typischerweise nur bei günstigem Einkauf oder starker Wertsteigerung erreichbar."
          }
        },
        {
          "@type": "Question",
          "name": "Wie berechne ich den IRR einer Immobilie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der IRR wird durch iterative Berechnung ermittelt: Man sucht den Zinssatz, bei dem der Kapitalwert (NPV) aller Zahlungsströme gleich null ist. Praktisch: Nutze unseren kostenlosen Cashflow-Rechner unter immo-rechner.net/cashflow-rechner, der den IRR automatisch berechnet."
          }
        },
        {
          "@type": "Question",
          "name": "Was beeinflusst den IRR einer Immobilie am stärksten?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die größten Hebel sind: (1) Kaufpreis – günstiger Einkauf verbessert den IRR direkt. (2) Wertsteigerung beim Verkauf – der Verkaufserlös hat erheblichen Anteil. (3) Eigenkapitalquote – weniger EK erhöht durch den Leverage-Effekt den IRR, solange Objektrendite über Darlehenszins liegt."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "IRR Rechner Immobilien – Internal Rate of Return verstehen (2026) | Immo-Rechner",
  description: "Was ist der IRR bei Immobilien? Lerne die Bedeutung des Internal Rate of Return und berechne ihn kostenlos mit unserem Cashflow-Rechner.",
  alternates: { canonical: "https://immo-rechner.net/irr-rechner" },
  openGraph: {
    title: "IRR bei Immobilien – Internal Rate of Return verstehen",
    description: "Der IRR ist die wichtigste Renditekennzahl für Immobilieninvestitionen. Erfahre, warum und berechne deinen IRR kostenlos.",
    images: [
      {
        url: "/api/og?title=IRR+Rechner+Immobilien&subtitle=Internal+Rate+of+Return+verstehen+%26+berechnen",
        width: 1200,
        height: 630,
        alt: "IRR Rechner Immobilien – Internal Rate of Return berechnen",
      },
    ],
  },
};

export default function IRRRechnerPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <JsonLd data={jsonLdData} />
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="mb-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Startseite</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900">IRR Rechner</span>
            </nav>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              IRR – Die wichtigste Renditekennzahl für Immobilien
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Der Internal Rate of Return (IRR) zeigt dir die tatsächliche jährliche Rendite deiner Immobilieninvestition – 
              unter Berücksichtigung aller Cashflows über die gesamte Haltedauer.
            </p>
            
            <Link
              href="/cashflow-rechner"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
            >
              Zum Cashflow-Rechner (inkl. IRR)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Was ist der IRR?</h2>
            <p className="text-gray-700 mb-6">
              Der IRR (Internal Rate of Return) ist der Zinssatz, bei dem der Kapitalwert aller Zahlungsströme 
              einer Investition gleich null wird. Einfacher ausgedrückt: Es ist die durchschnittliche jährliche 
              Verzinsung deines eingesetzten Eigenkapitals über die gesamte Haltedauer der Immobilie.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Warum ist der IRR besser als die Mietrendite?</h2>
            <p className="text-gray-700 mb-4">
              Die einfache Mietrendite zeigt nur eine Momentaufnahme. Der IRR hingegen berücksichtigt:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Dein eingesetztes Eigenkapital (nicht den Kaufpreis)</li>
              <li>Alle monatlichen Cashflows über die gesamte Haltedauer</li>
              <li>Mieterhöhungen und Kostensteigerungen</li>
              <li>Den Verkaufserlös nach Tilgung der Restschuld</li>
              <li>Den Zeitwert des Geldes (ein Euro heute ist mehr wert als ein Euro in 10 Jahren)</li>
            </ul>

            <div className="bg-gray-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">IRR-Richtwerte für Immobilien</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="font-bold text-red-700">Unter 3%</div>
                  <div className="text-sm text-gray-600">Unattraktiv</div>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="font-bold text-yellow-700">3–6%</div>
                  <div className="text-sm text-gray-600">Akzeptabel</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="font-bold text-green-700">6–10%</div>
                  <div className="text-sm text-gray-600">Gut bis sehr gut</div>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <div className="font-bold text-emerald-700">Über 10%</div>
                  <div className="text-sm text-gray-600">Exzellent</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">IRR selbst berechnen</h2>
            <p className="text-gray-700 mb-6">
              Unser Cashflow-Rechner berechnet automatisch den IRR deiner Immobilie. Du gibst einfach die 
              Eckdaten ein – Kaufpreis, Eigenkapital, Finanzierung, Miete, Haltedauer und erwartete Wertsteigerung – 
              und erhältst sofort deinen IRR sowie den monatlichen Cashflow.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Berechne jetzt deinen IRR</h2>
            <p className="text-white/90 mb-6">Kostenlos, ohne Anmeldung, in wenigen Minuten.</p>
            <Link
              href="/cashflow-rechner"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#7099A3] rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium"
            >
              Zum Cashflow-Rechner (inkl. IRR)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Related Links */}
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            <Link href="/ratgeber/irr-erklaert" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">IRR ausführlich erklärt →</div>
              <div className="text-sm text-gray-600">Ratgeber mit Beispielrechnungen und Interpretation</div>
            </Link>
            <Link href="/ratgeber/cashflow-immobilien" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Cashflow bei Immobilien →</div>
              <div className="text-sm text-gray-600">Was ist ein guter Cashflow und wie berechnest du ihn?</div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
