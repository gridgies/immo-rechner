import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "IRR einfach erklärt: Internal Rate of Return bei Immobilien verstehen (2026) | Immo-Rechner",
  description: "Was ist der IRR bei Immobilien? Verständliche Erklärung mit Beispielen, Formel, Berechnung und Interpretation. Lerne, warum der IRR die beste Renditekennzahl ist.",
  alternates: { canonical: "https://immo-rechner.net/ratgeber/irr-erklaert" },
};

export default function IRRRatgeber() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">IRR einfach erklärt</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            IRR einfach erklärt: Was der Internal Rate of Return bei Immobilien wirklich aussagt
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Der IRR ist die wichtigste Kennzahl für die Gesamtrentabilität einer Immobilieninvestition. 
            In diesem Ratgeber lernst du, was er bedeutet, wie er berechnet wird und wie du ihn richtig interpretierst.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
            <span>Aktualisiert: Februar 2026</span>
            <span>•</span>
            <span>10 Min. Lesezeit</span>
          </div>
        </header>

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-[#7099A3]/10 to-[#5d7e87]/10 rounded-xl p-6 mb-10 border border-[#7099A3]/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-semibold text-gray-900">IRR selbst berechnen?</p>
              <p className="text-sm text-gray-600">Unser Rechner berechnet den IRR automatisch aus deinen Eingaben.</p>
            </div>
            <Link href="/irr-rechner" className="px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm">
              Zum IRR-Rechner →
            </Link>
          </div>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4">
          
          <h2>Was ist der IRR?</h2>
          <p>
            IRR steht für Internal Rate of Return, auf Deutsch „Interner Zinsfuß". Es ist eine Kennzahl 
            aus der Finanzmathematik, die die durchschnittliche jährliche Verzinsung einer Investition angibt. 
            Der entscheidende Unterschied zu einfacheren Kennzahlen wie der Mietrendite: Der IRR berücksichtigt 
            den <strong>Zeitwert des Geldes</strong>. Das bedeutet, ein Euro heute ist mehr wert als ein Euro in zehn Jahren, 
            weil er in der Zwischenzeit angelegt werden könnte.
          </p>
          <p>
            Technisch formuliert ist der IRR der Zinssatz, bei dem der Kapitalwert (NPV, Net Present Value) 
            aller Zahlungsströme einer Investition gleich null wird. Stell dir vor, du legst heute 50.000 Euro an 
            und erhältst über 20 Jahre regelmäßige Zahlungen zurück plus einen großen Betrag am Ende. Der IRR ist 
            dann der Zinssatz, den ein hypothetisches Sparkonto haben müsste, um bei gleicher Einzahlung die gleichen 
            Auszahlungen zu liefern.
          </p>

          <h2>Warum ist der IRR so wichtig für Immobilieninvestoren?</h2>
          <p>
            Bei einer Immobilieninvestition fließen über viele Jahre unterschiedliche Beträge in verschiedene 
            Richtungen. Am Anfang steht eine große Ausgabe (Eigenkapital plus Kaufnebenkosten). Dann folgen 
            monatliche Einnahmen und Ausgaben (Miete minus Rate minus Hausgeld). Und am Ende steht idealerweise 
            ein Verkaufserlös, der deutlich über dem ursprünglichen Kaufpreis liegt.
          </p>
          <p>
            Die einfache Mietrendite kann dieses komplexe Bild nicht abbilden. Sie zeigt nur eine 
            Momentaufnahme. Der IRR hingegen verdichtet alle Zahlungsströme über die gesamte Haltedauer 
            in eine einzige, vergleichbare Zahl: die durchschnittliche jährliche Rendite auf dein eingesetztes Eigenkapital.
          </p>

          <h2>Der IRR an einem konkreten Beispiel</h2>
          <p>
            Nehmen wir eine Eigentumswohnung in Dresden. Kaufpreis: 200.000 Euro. Kaufnebenkosten 
            (Sachsen, 5,5% Grunderwerbsteuer plus Notar/Grundbuch/Makler): ca. 22.000 Euro. 
            Du bringst 20 Prozent Eigenkapital plus die Nebenkosten mit, also 62.000 Euro. 
            Die restlichen 160.000 Euro finanzierst du mit einem Bankdarlehen. Mehr zu den Finanzierungsoptionen 
            findest du in unserem <Link href="/ratgeber/finanzierung" className="text-[#7099A3] hover:underline">Finanzierungsratgeber</Link>.
          </p>
          <p>
            Die Wohnung wird für 850 Euro kalt vermietet. Nach Abzug der Annuität (733 Euro) und 
            des nicht umlegbaren Hausgeldes (50 Euro) bleiben im ersten Jahr monatlich rund 67 Euro 
            Cashflow. Über 20 Jahre steigt die Miete um 2 Prozent jährlich. Am Ende verkaufst du die 
            Wohnung mit 50 Prozent Wertsteigerung für 300.000 Euro und tilgst die Restschuld.
          </p>
          <p>
            Aus diesen Zahlungsströmen berechnet der IRR eine <strong>jährliche Rendite von etwa 9 Prozent</strong>. 
            Das bedeutet: Dein Eigenkapital hat sich so verzinst, als hättest du 62.000 Euro auf ein Konto mit 
            9 Prozent Jahreszins gelegt.
          </p>

          <h2>IRR interpretieren: Richtwerte für Immobilien</h2>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-6 not-prose">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <span className="text-2xl">🔴</span>
                <div>
                  <p className="font-bold text-gray-900">IRR unter 3%</p>
                  <p className="text-sm text-gray-600">Unterhalb von Festgeldniveau – die Investition lohnt sich kaum.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <span className="text-2xl">🟡</span>
                <div>
                  <p className="font-bold text-gray-900">IRR 3–6%</p>
                  <p className="text-sm text-gray-600">Vergleichbar mit einem breit gestreuten Aktienportfolio. Akzeptabel, aber nicht herausragend.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="text-2xl">🟢</span>
                <div>
                  <p className="font-bold text-gray-900">IRR 6–10%</p>
                  <p className="text-sm text-gray-600">Gute bis sehr gute Immobilieninvestition. Die Mehrheit erfahrener Investoren bewegt sich hier.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-bold text-gray-900">IRR über 10%</p>
                  <p className="text-sm text-gray-600">Exzellent. Typischerweise nur bei günstigem Einkauf oder starker Wertsteigerung erreichbar.</p>
                </div>
              </div>
            </div>
          </div>

          <h2>IRR vs. Mietrendite: Wann welche Kennzahl?</h2>
          <p>
            Beide Kennzahlen haben ihre Berechtigung, aber für unterschiedliche Zwecke:
          </p>
          <ul className="space-y-2">
            <li><strong>Bruttomietrendite:</strong> Schneller Filter bei der Immobiliensuche. Unter 3% ist positiver Cashflow schwierig.</li>
            <li><strong>Nettomietrendite:</strong> Besserer Vergleich zwischen ähnlichen Objekten, weil Kosten einbezogen werden.</li>
            <li><strong>IRR:</strong> Die finale Entscheidungskennzahl für die Gesamtrentabilität von Kauf bis Verkauf.</li>
          </ul>

          <h2>Was beeinflusst den IRR am stärksten?</h2>
          <ul className="space-y-2">
            <li><strong>Kaufpreis:</strong> Der größte Hebel – jeder Prozent günstiger eingekauft verbessert den IRR direkt.</li>
            <li><strong>Wertsteigerung:</strong> Zweitgrößter Faktor, da der Verkaufserlös erheblichen Anteil am Gesamtergebnis hat.</li>
            <li><strong>Eigenkapitalquote:</strong> Weniger EK = höherer IRR (Leverage-Effekt), solange Objektrendite über Darlehenszins liegt.</li>
            <li><strong>Laufende Cashflows:</strong> Miete, Hausgeld, Zinssatz beeinflussen den IRR ebenfalls, aber weniger stark.</li>
          </ul>

          <h2>Schwächen des IRR – und wie du damit umgehst</h2>
          <p>
            Der IRR unterstellt, dass alle Rückflüsse zum gleichen IRR-Zinssatz wiederangelegt werden. 
            In der Praxis ist das selten möglich. Diese sogenannte Wiederanlageprämisse führt dazu, 
            dass der IRR die tatsächliche Rendite tendenziell leicht überschätzt.
          </p>
          <p>
            Für die Praxis empfiehlt es sich, den IRR als <strong>relative Vergleichsgröße</strong> zu betrachten und 
            mehrere Szenarien durchzurechnen: Was passiert bei 0% Wertsteigerung? Bei 50%? Bei 100%?
          </p>
        </div>

        {/* CTA Bottom */}
        <div className="mt-12 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Berechne den IRR deiner Immobilie</h2>
          <p className="text-white/90 mb-6">Kostenlos, ohne Anmeldung und mit allen Faktoren.</p>
          <Link href="/irr-rechner" className="px-8 py-4 bg-white text-[#7099A3] rounded-lg hover:bg-gray-50 transition-all text-lg font-medium inline-block">
            Zum IRR-Rechner →
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Weitere Ratgeber</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/ratgeber/cashflow-immobilien" className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7099A3] transition-colors">
              <p className="font-bold text-gray-900">Cashflow bei Immobilien →</p>
              <p className="text-sm text-gray-600 mt-1">Berechnung, Beispiele und Tipps für positiven Cashflow</p>
            </Link>
            <Link href="/ratgeber/eigenkapital-immobilie" className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7099A3] transition-colors">
              <p className="font-bold text-gray-900">Eigenkapital für Immobilien →</p>
              <p className="text-sm text-gray-600 mt-1">Wie viel Eigenkapital brauchst du wirklich?</p>
            </Link>
            <Link href="/ratgeber/finanzierung" className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7099A3] transition-colors">
              <p className="font-bold text-gray-900">Immobilienfinanzierung →</p>
              <p className="text-sm text-gray-600 mt-1">Zinsen, Tilgung, Zinsbindung und Sondertilgung verstehen</p>
            </Link>
            <Link href="/rendite-rechner" className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7099A3] transition-colors">
              <p className="font-bold text-gray-900">Rendite Rechner →</p>
              <p className="text-sm text-gray-600 mt-1">Brutto- und Nettomietrendite berechnen</p>
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
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
