import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RenditerechnerSimple from '@/components/RenditerechnerSimple';
import JsonLd from '@/components/JsonLd';
import QuickAnswer from '@/components/QuickAnswer';

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://immo-rechner.net/rendite-rechner#app",
      "name": "Rendite Rechner Immobilien",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "url": "https://immo-rechner.net/rendite-rechner",
      "description": "Kostenloser Rechner für Bruttomietrendite, Nettomietrendite und Mietmultiplikator. Für den deutschen Immobilienmarkt.",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
      "inLanguage": "de-DE"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://immo-rechner.net" },
        { "@type": "ListItem", "position": 2, "name": "Rendite Rechner", "item": "https://immo-rechner.net/rendite-rechner" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Was ist die Bruttomietrendite bei Immobilien?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Bruttomietrendite berechnet sich als Jahreskaltmiete geteilt durch den Kaufpreis, multipliziert mit 100. Beispiel: Jahreskaltmiete 9.600 € ÷ Kaufpreis 200.000 € × 100 = 4,8% Bruttomietrendite. Sie eignet sich für schnelle Vergleiche, berücksichtigt aber keine Kaufnebenkosten oder laufende Kosten."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist der Unterschied zwischen Brutto- und Nettomietrendite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Bruttomietrendite setzt nur Jahreskaltmiete und Kaufpreis ins Verhältnis. Die Nettomietrendite ist realistischer: Sie zieht nicht umlegbare Kosten (Verwaltung, Instandhaltung) von der Miete ab und addiert die Kaufnebenkosten zum Kaufpreis. Typischerweise liegt die Nettomietrendite 0,5–1,5 Prozentpunkte unter der Bruttomietrendite."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist ein guter Mietmultiplikator bei Immobilien?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der Mietmultiplikator gibt an, nach wie vielen Jahren sich der Kaufpreis durch Mieteinnahmen amortisiert. Unter 20 gilt als günstig, 20–25 als marktgerecht, über 25 als teuer. In Ballungsgebieten wie München liegt der Multiplikator oft bei 30–40, in B- und C-Lagen eher bei 15–22."
          }
        },
        {
          "@type": "Question",
          "name": "Ab welcher Mietrendite lohnt sich eine Immobilie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Als Faustregel gilt: Eine Bruttomietrendite unter 3% macht einen positiven Cashflow nach Finanzierungskosten schwierig. Ab 4–5% Bruttomietrendite sind positive Cashflows in B-Lagen realistisch. Die reine Mietrendite sollte jedoch nicht das einzige Kriterium sein – der IRR (Gesamtrendite inkl. Wertsteigerung) ist aussagekräftiger."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Rendite Rechner Immobilien – Mietrendite & Nettomietrendite berechnen (2026) | Immo-Rechner",
  description: "Berechne Bruttomietrendite, Nettomietrendite und Mietmultiplikator deiner Immobilie. Kostenloser Rendite-Rechner für den deutschen Immobilienmarkt.",
  alternates: { canonical: "https://immo-rechner.net/rendite-rechner" },
  openGraph: {
    title: "Rendite Rechner für Immobilien – Mietrendite kostenlos berechnen",
    description: "Bruttomietrendite, Nettomietrendite und Mietmultiplikator berechnen. Kostenloser Rechner inkl. aller Kaufnebenkosten.",
    images: [
      {
        url: "/api/og?title=Rendite+Rechner+Immobilien&subtitle=Mietrendite+%26+Nettomietrendite+kostenlos+berechnen",
        width: 1200,
        height: 630,
        alt: "Rendite Rechner für Immobilien – Mietrendite kostenlos berechnen",
      },
    ],
  },
};

export default function RenditeRechnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLdData} />
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
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Berechne Bruttomietrendite, Nettomietrendite und Mietmultiplikator deiner Immobilieninvestition.
          Für eine vollständige Analyse inklusive IRR (Internal Rate of Return) nutze unseren erweiterten Cashflow-Rechner.
        </p>

        <QuickAnswer
          question="Was ist die Bruttomietrendite und wie berechne ich sie?"
          answer="Die Bruttomietrendite berechnet sich als Jahreskaltmiete geteilt durch den Kaufpreis, multipliziert mit 100. Beispiel: 800 € Kaltmiete × 12 = 9.600 € ÷ 200.000 € × 100 = 4,8 % Bruttomietrendite. Ab 4 % gelten positive Cashflows als realistisch – vorausgesetzt, die Finanzierungskonditionen stimmen."
          keyFacts={[
            "Bruttomietrendite = (Jahreskaltmiete ÷ Kaufpreis) × 100",
            "Nettomietrendite liegt 0,5–1,5 Prozentpunkte darunter (nach Kosten + Nebenkosten)",
            "Mietmultiplikator = Kaufpreis ÷ Jahreskaltmiete (unter 20 gilt als günstig)",
            "Für Gesamtrendite inkl. Wertsteigerung: IRR-Rechner verwenden",
          ]}
        />

        {/* Calculator */}
        <div className="mb-12">
          <RenditerechnerSimple />
        </div>

        {/* CTA to full calculator */}
        <div className="bg-gradient-to-br from-[#7099A3]/10 to-[#5d7e87]/10 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Erweiterte Analyse mit IRR</h2>
              <p className="text-gray-600">Berechne zusätzlich Cashflow, IRR und Vermögenszuwachs über 10-30 Jahre</p>
            </div>
            <Link
              href="/rechner"
              className="px-8 py-4 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-lg font-medium whitespace-nowrap"
            >
              Zum Komplett-Rechner →
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
              Die wichtigsten sind Bruttomietrendite, Nettomietrendite und der Mietmultiplikator.
            </p>

            <h3>Bruttomietrendite – der schnelle Überblick</h3>
            <p>
              Die Bruttomietrendite ist die einfachste Kennzahl und eignet sich gut für eine erste Einschätzung. 
              Sie setzt die Jahreskaltmiete ins Verhältnis zum Kaufpreis. Die Formel lautet: Jahreskaltmiete geteilt 
              durch Kaufpreis, multipliziert mit 100. Der Nachteil: Kaufnebenkosten und laufende Kosten bleiben unberücksichtigt.
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
                  <div className="text-xs text-gray-500 mb-1">Mietmultiplikator</div>
                  <div className="font-medium text-gray-900">Kaufpreis ÷ Jahreskaltmiete</div>
                </div>
              </div>
            </div>

            {/* Comparison table — optimized for AI extraction and featured snippets */}
            <div className="not-prose my-8 overflow-x-auto">
              <p className="text-sm font-semibold text-gray-700 mb-3">Renditenkennzahlen im Vergleich</p>
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="px-4 py-2 font-semibold text-gray-700">Kennzahl</th>
                    <th className="px-4 py-2 font-semibold text-gray-700">Formel</th>
                    <th className="px-4 py-2 font-semibold text-gray-700">Berücksichtigt</th>
                    <th className="px-4 py-2 font-semibold text-gray-700">Wann verwenden?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-800">Bruttomietrendite</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">(Jahreskaltmiete ÷ Kaufpreis) × 100</td>
                    <td className="px-4 py-3 text-gray-600">Kaltmiete, Kaufpreis</td>
                    <td className="px-4 py-3 text-gray-600">Schnellvergleich, erste Einschätzung</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">Nettomietrendite</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">(Nettomiete ÷ Gesamtinvestition) × 100</td>
                    <td className="px-4 py-3 text-gray-600">+ Bewirtschaftungskosten, Kaufnebenkosten</td>
                    <td className="px-4 py-3 text-gray-600">Realistischer Renditevergleich</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-800">IRR</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">Diskontierungsrate bei NPV = 0</td>
                    <td className="px-4 py-3 text-gray-600">+ Wertsteigerung, Tilgung, Steuer, Verkauf</td>
                    <td className="px-4 py-3 text-gray-600">Gesamtrendite über Haltedauer (10–30 J.)</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-400 mt-2">Quelle: Eigene Berechnungen auf Basis gängiger Immobilienbewertungsstandards (gif e.V., DIN 277).</p>
            </div>

            <h3>Nettomietrendite – die realistischere Kennzahl</h3>
            <p>
              Die Nettomietrendite ist deutlich aussagekräftiger, weil sie die laufenden Kosten und Kaufnebenkosten 
              berücksichtigt. Von der Jahreskaltmiete werden nicht umlegbare Kosten wie Verwaltung, 
              Instandhaltungsrücklage und Leerstandsrisiko abgezogen. Der Kaufpreis wird um die Kaufnebenkosten erhöht.
            </p>

            <h3>Der Mietmultiplikator als Schnellcheck</h3>
            <p>
              Der Mietmultiplikator gibt an, nach wie vielen Jahren sich der Kaufpreis durch die Mieteinnahmen amortisiert. 
              Ein Multiplikator unter 20 gilt als günstig, zwischen 20 und 25 als marktgerecht, über 25 als teuer.
            </p>

            <h2>Welche Renditen sind realistisch in Deutschland?</h2>
            <p>
              Die erzielbaren Renditen variieren stark nach Lage und Immobilientyp. In den Top-7-Städten 
              liegen die Bruttomietrenditen typischerweise zwischen 2,5 und 3,5 Prozent. In B-Städten 
              sind 4 bis 5 Prozent realistisch. In C- und D-Lagen können 6 bis 8 Prozent erreicht werden – 
              allerdings mit höherem Risiko.
            </p>

            <h2>Warum reicht die Mietrendite nicht aus?</h2>
            <p>
              Die Mietrendite ist immer eine Momentaufnahme. Sie berücksichtigt nicht die Finanzierungskosten, 
              Mietsteigerungen über die Zeit oder den Verkaufserlös. Für eine vollständige Analyse empfehlen wir 
              den <Link href="/irr-rechner" className="text-[#7099A3] hover:underline">IRR-Rechner</Link>, der alle 
              Zahlungsströme über die gesamte Haltedauer einbezieht.
            </p>
          </div>

          {/* Internal Links */}
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            <Link href="/ratgeber/rendite-immobilien-realistisch" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Welche Rendite ist realistisch? →</div>
              <div className="text-sm text-gray-600">Richtwerte 2026 für A-, B- und C-Lagen</div>
            </Link>
            <Link href="/irr-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">IRR Rechner →</div>
              <div className="text-sm text-gray-600">Gesamtrendite über 10–30 Jahre</div>
            </Link>
            <Link href="/kaufnebenkosten-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Kaufnebenkosten →</div>
              <div className="text-sm text-gray-600">Alle Nebenkosten berechnen</div>
            </Link>
            <Link href="/ratgeber/finanzierung" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Ratgeber: Finanzierung →</div>
              <div className="text-sm text-gray-600">Immobilienfinanzierung verstehen</div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
