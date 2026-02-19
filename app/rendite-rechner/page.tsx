import type { Metadata } from 'next';
import Link from 'next/link';
import AppWithAuth from '@/components/AppWithAuth';

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
              <Link href="/irr-rechner" className="hover:text-gray-900">IRR</Link>
              <Link href="/kaufnebenkosten-rechner" className="hover:text-gray-900">Nebenkosten</Link>
              <Link href="/mikrolage-analyse" className="hover:text-gray-900">Mikrolage</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-gray-900">Rendite Rechner</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Rendite Rechner für Immobilien
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Berechne Bruttomietrendite, Nettomietrendite und Eigenkapitalrendite (IRR) deiner Immobilieninvestition. 
          Unser Rechner berücksichtigt Kaufnebenkosten, Hausgeld, Mietsteigerungen und Wertsteigerung über 10 bis 30 Jahre.
        </p>
      </div>

      <div className="bg-gray-50 border-y border-gray-200">
        <div className="h-[800px]">
          <AppWithAuth />
        </div>
      </div>

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

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 my-6 not-prose">
            <div className="text-sm font-medium text-gray-900 mb-3">Formeln im Überblick</div>
            <div className="space-y-4">
              <div className="p-3 bg-white rounded border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Bruttomietrendite</div>
                <div className="font-medium text-gray-900">(Jahreskaltmiete &divide; Kaufpreis) &times; 100</div>
              </div>
              <div className="p-3 bg-white rounded border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">Nettomietrendite</div>
                <div className="font-medium text-gray-900">(Jahreskaltmiete &minus; nicht umlegbare Kosten) &divide; (Kaufpreis + Nebenkosten) &times; 100</div>
              </div>
              <div className="p-3 bg-white rounded border border-gray-200">
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
            (Grunderwerbsteuer, Notar, Grundbuch, ggf. Makler) erhöht. In der Praxis liegt die Nettomietrendite 
            oft ein bis zwei Prozentpunkte unter der Bruttomietrendite.
          </p>

          <h3>Eigenkapitalrendite (IRR) – die Königsdisziplin</h3>
          <p>
            Die Eigenkapitalrendite, gemessen als IRR (Internal Rate of Return), ist die umfassendste Kennzahl. 
            Sie berücksichtigt nicht nur die laufenden Mieteinnahmen und Kosten, sondern auch den Zeitpunkt 
            aller Zahlungsströme, den eingesetzten Eigenkapitalbetrag und den Verkaufserlös am Ende der 
            Haltedauer. Dadurch zeigt sie, welche jährliche Verzinsung dein eingesetztes Eigenkapital 
            tatsächlich erwirtschaftet. Unser Rechner berechnet den IRR automatisch.
          </p>

          <h2>Welche Renditen sind realistisch in Deutschland?</h2>
          <p>
            Die erzielbaren Renditen variieren stark nach Lage und Immobilientyp. In den Top-7-Städten 
            (München, Hamburg, Frankfurt, Berlin, Düsseldorf, Köln, Stuttgart) liegen die Bruttomietrenditen 
            typischerweise zwischen 2,5 und 3,5 Prozent. In B-Städten wie Leipzig, Dresden, Hannover oder 
            Nürnberg sind 4 bis 5 Prozent realistisch. In C- und D-Lagen können Bruttomietrenditen von 
            6 bis 8 Prozent erreicht werden – allerdings mit höherem Leerstandsrisiko und weniger 
            Wertsteigerungspotenzial.
          </p>
          <p>
            Als Faustregel gilt: Eine Nettomietrendite von 4 bis 6 Prozent pro Jahr wird von den meisten 
            Experten als erstrebenswert betrachtet. Beim IRR, der Wertsteigerung und Leverage-Effekt 
            einbezieht, sind bei guten Investitionen 6 bis 12 Prozent jährlich realistisch.
          </p>

          <h2>Der Mietpreismultiplikator als Schnellcheck</h2>
          <p>
            Der Mietpreismultiplikator (auch Kaufpreisfaktor oder Vervielfältiger genannt) ist der Kehrwert 
            der Bruttomietrendite. Er berechnet sich als Kaufpreis geteilt durch Jahreskaltmiete und gibt an, 
            nach wie vielen Jahren sich der Kaufpreis durch die Mieteinnahmen amortisiert. Ein Multiplikator 
            unter 20 gilt als günstig, zwischen 20 und 25 als marktgerecht, über 25 als teuer. In Großstädten 
            sind Multiplikatoren von 30 und mehr keine Seltenheit.
          </p>

          <h2>Häufige Fehler bei der Renditeberechnung</h2>
          <p>
            Der häufigste Fehler ist die Verwendung der Bruttomietrendite als alleinige Entscheidungsgrundlage. 
            Da sie weder Kaufnebenkosten noch laufende Kosten berücksichtigt, zeichnet sie ein zu optimistisches Bild. 
            Ein weiterer verbreiteter Fehler: Die Finanzierungskosten werden in der Renditeberechnung oft vergessen. 
            Dabei kann der Leverage-Effekt die Eigenkapitalrendite sowohl positiv als auch negativ beeinflussen – 
            je nachdem, ob der Darlehenszins über oder unter der Objektrendite liegt. Liegt der Sollzins über der 
            Nettomietrendite, drückt die Fremdfinanzierung die Eigenkapitalrendite nach unten.
          </p>

          <h2>Rendite steigern: Die wichtigsten Hebel</h2>
          <p>
            Es gibt mehrere Stellschrauben, um die Rendite einer Immobilieninvestition zu verbessern. 
            Beim Kaufpreis liegt der größte Hebel: Jeder Prozent Nachlass verbessert alle Renditekennzahlen. 
            Die marktgerechte Miete sollte regelmäßig überprüft werden – viele Vermieter verschenken 
            Rendite, weil sie die Miete über Jahre nicht an den Mietspiegel anpassen. 
            Auch die Optimierung der Finanzierung (niedrigerer Zinssatz, angepasste Tilgung) wirkt sich 
            direkt auf Cashflow und Eigenkapitalrendite aus. Nicht zuletzt kann die steuerliche Optimierung 
            durch AfA und Werbungskostenabzug die Rendite nach Steuern erheblich verbessern.
          </p>
        </div>

        {/* Internal Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <Link href="/irr-rechner" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">IRR Rechner &rarr;</div>
            <div className="text-sm text-gray-600">Internal Rate of Return berechnen</div>
          </Link>
          <Link href="/cashflow-rechner" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Cashflow Rechner &rarr;</div>
            <div className="text-sm text-gray-600">Monatlichen Cashflow berechnen</div>
          </Link>
          <Link href="/ratgeber/irr-erklaert" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Ratgeber: IRR erklärt &rarr;</div>
            <div className="text-sm text-gray-600">Internal Rate of Return verstehen</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
