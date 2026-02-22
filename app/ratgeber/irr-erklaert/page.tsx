import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "IRR einfach erklärt: Internal Rate of Return bei Immobilien verstehen (2026) | Immo-Rechner",
  description: "Was ist der IRR bei Immobilien? Verständliche Erklärung mit Beispielen, Formel, Berechnung und Interpretation. Lerne, warum der IRR die beste Renditekennzahl ist.",
  alternates: { canonical: "https://immo-rechner.net/ratgeber/irr-erklaert" },
};

export default function IRRRatgeber() {
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
            <Link href="/irr-rechner" className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-sm font-medium">
              IRR berechnen
            </Link>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/ratgeber/irr-erklaert" className="hover:text-gray-700">Ratgeber</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-gray-900">IRR einfach erklärt</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          IRR einfach erklärt: Was der Internal Rate of Return bei Immobilien wirklich aussagt
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>Aktualisiert: Februar 2026</span>
          <span>&bull;</span>
          <span>10 Min. Lesezeit</span>
        </div>

        <div className="bg-[#7099A3]/10 border border-[#7099A3]/20 rounded-xl p-6 mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-semibold text-gray-900">IRR selbst berechnen?</div>
              <div className="text-sm text-gray-600">Unser Rechner berechnet den IRR automatisch aus deinen Eingaben.</div>
            </div>
            <Link href="/irr-rechner" className="px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm">
              Zum IRR-Rechner &rarr;
            </Link>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Was ist der IRR?</h2>
          <p>
            IRR steht für Internal Rate of Return, auf Deutsch „Interner Zinsfuß". Es ist eine Kennzahl 
            aus der Finanzmathematik, die die durchschnittliche jährliche Verzinsung einer Investition angibt. 
            Der entscheidende Unterschied zu einfacheren Kennzahlen wie der Mietrendite: Der IRR berücksichtigt 
            den Zeitwert des Geldes. Das bedeutet, ein Euro heute ist mehr wert als ein Euro in zehn Jahren, 
            weil er in der Zwischenzeit angelegt werden könnte.
          </p>
          <p>
            Technisch formuliert ist der IRR der Zinssatz, bei dem der Kapitalwert (NPV, Net Present Value) 
            aller Zahlungsströme einer Investition gleich null wird. Das klingt kompliziert, lässt sich aber 
            gut veranschaulichen: Stell dir vor, du legst heute 50.000 Euro an und erhältst über 20 Jahre 
            regelmäßige Zahlungen zurück plus einen großen Betrag am Ende. Der IRR ist dann der Zinssatz, 
            den ein hypothetisches Sparkonto haben müsste, um bei gleicher Einzahlung die gleichen 
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
            Momentaufnahme des Verhältnisses von Miete zu Kaufpreis. Der IRR hingegen verdichtet alle 
            Zahlungsströme über die gesamte Haltedauer in eine einzige, vergleichbare Zahl: die 
            durchschnittliche jährliche Rendite auf dein eingesetztes Eigenkapital.
          </p>

          <h2>Der IRR an einem konkreten Beispiel</h2>
          <p>
            Nehmen wir eine Eigentumswohnung in Dresden. Kaufpreis: 200.000 Euro. Kaufnebenkosten 
            (Sachsen, 5,5% Grunderwerbsteuer plus Notar/Grundbuch/Makler): ca. 22.000 Euro. 
            Du bringst 20 Prozent Eigenkapital plus die Nebenkosten mit, also 62.000 Euro. 
            Die restlichen 160.000 Euro finanzierst du mit einem Bankdarlehen zu 3,5 Prozent Zins und 
            2 Prozent Anfangstilgung.
          </p>
          <p>
            Die Wohnung wird für 850 Euro kalt vermietet. Nach Abzug der Annuität (733 Euro) und 
            des nicht umlegbaren Hausgeldes (50 Euro) bleiben im ersten Jahr monatlich rund 67 Euro 
            Cashflow. Über 20 Jahre steigt die Miete um 2 Prozent jährlich, die Kosten steigen ebenfalls. 
            Gleichzeitig verschiebt sich die Annuität zugunsten der Tilgung. Am Ende verkaufst du die 
            Wohnung mit 50 Prozent Wertsteigerung für 300.000 Euro und tilgst die Restschuld.
          </p>
          <p>
            Aus diesen Zahlungsströmen – dem negativen Anfangswert von 62.000 Euro, den 240 monatlichen 
            Cashflows und dem positiven Verkaufserlös am Ende – berechnet der IRR eine jährliche 
            Rendite von etwa 9 Prozent. Das bedeutet: Dein Eigenkapital hat sich so verzinst, als hättest 
            du 62.000 Euro auf ein Konto mit 9 Prozent Jahreszins gelegt.
          </p>

          <h2>IRR interpretieren: Richtwerte für Immobilien</h2>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 my-6 not-prose">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded border border-red-200">
                <span className="text-2xl">🔴</span>
                <div>
                  <div className="font-medium text-gray-900">IRR unter 3%</div>
                  <div className="text-sm text-gray-600">Unterhalb von Festgeldniveau – die Investition lohnt sich kaum.</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded border border-yellow-200">
                <span className="text-2xl">🟡</span>
                <div>
                  <div className="font-medium text-gray-900">IRR 3–6%</div>
                  <div className="text-sm text-gray-600">Vergleichbar mit einem breit gestreuten Aktienportfolio. Akzeptabel, aber nicht herausragend.</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded border border-green-200">
                <span className="text-2xl">🟢</span>
                <div>
                  <div className="font-medium text-gray-900">IRR 6–10%</div>
                  <div className="text-sm text-gray-600">Gute bis sehr gute Immobilieninvestition. Die Mehrheit erfahrener Investoren bewegt sich hier.</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded border border-emerald-200">
                <span className="text-2xl">⭐</span>
                <div>
                  <div className="font-medium text-gray-900">IRR über 10%</div>
                  <div className="text-sm text-gray-600">Exzellent. Typischerweise nur bei günstigem Einkauf oder starker Wertsteigerung erreichbar.</div>
                </div>
              </div>
            </div>
          </div>

          <h2>IRR vs. Mietrendite: Wann welche Kennzahl?</h2>
          <p>
            Beide Kennzahlen haben ihre Berechtigung, aber für unterschiedliche Zwecke. Die Bruttomietrendite 
            eignet sich als schneller Filter bei der Immobiliensuche: Liegt sie unter 3 Prozent, ist ein 
            positiver Cashflow mit marktüblicher Finanzierung nahezu ausgeschlossen. Die Nettomietrendite 
            ermöglicht den besseren Vergleich zwischen ähnlichen Objekten, weil sie Kosten einbezieht. 
            Der IRR jedoch ist die finale Entscheidungskennzahl: Er beantwortet die Frage, ob die Investition 
            in ihrer Gesamtheit – von Kauf bis Verkauf – rentabel ist und wie sie im Vergleich zu 
            Alternativanlagen abschneidet.
          </p>

          <h2>Was beeinflusst den IRR am stärksten?</h2>
          <p>
            Der Kaufpreis hat den größten Hebel: Jeder Prozent günstiger eingekauft verbessert den IRR 
            direkt. Die Wertsteigerung ist der zweitgrößte Faktor, da der Verkaufserlös einen erheblichen 
            Anteil am Gesamtergebnis hat. Die Eigenkapitalquote wirkt über den Leverage-Effekt: Weniger 
            Eigenkapital bedeutet einen höheren IRR, solange die Objektrendite über dem Darlehenszins liegt. 
            Die laufenden Cashflows (Miete, Hausgeld, Zinssatz) beeinflussen den IRR ebenfalls, allerdings 
            weniger stark als Kaufpreis und Verkaufserlös.
          </p>

          <h2>Schwächen des IRR – und wie du damit umgehst</h2>
          <p>
            Der IRR hat eine bekannte Schwachstelle: Er unterstellt, dass alle Rückflüsse aus der Investition 
            zum gleichen IRR-Zinssatz wiederangelegt werden. In der Praxis ist das selten möglich. 
            Ein IRR von 10 Prozent unterstellt, dass du jede Monatsmiete ebenfalls zu 10 Prozent 
            anlegen kannst – was unrealistisch ist. Diese sogenannte Wiederanlageprämisse führt dazu, 
            dass der IRR die tatsächliche Rendite tendenziell leicht überschätzt.
          </p>
          <p>
            Für die Praxis empfiehlt es sich, den IRR nicht als absolute Wahrheit zu betrachten, sondern 
            als relative Vergleichsgröße: Investition A hat einen höheren IRR als Investition B, also 
            ist A unter den getroffenen Annahmen vorteilhafter. Zusätzlich solltest du mehrere Szenarien 
            durchrechnen: Was passiert bei 0 Prozent Wertsteigerung (Worst Case)? Bei 50 Prozent 
            (realistisch)? Bei 100 Prozent (optimistisch)? Unser Rechner macht dies über die einstellbare 
            Wertsteigerung und Haltedauer besonders einfach.
          </p>
        </div>

        <div className="mt-12 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Berechne den IRR deiner Immobilie</h2>
          <p className="text-white/90 mb-6">Kostenlos, ohne Anmeldung und mit allen Faktoren.</p>
          <Link href="/irr-rechner" className="px-8 py-4 bg-white text-[#7099A3] rounded-lg hover:bg-gray-50 transition-all text-lg font-medium inline-block">
            Zum IRR-Rechner &rarr;
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Weitere Ratgeber</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/ratgeber/cashflow-immobilien" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Cashflow bei Immobilien &rarr;</div>
              <div className="text-sm text-gray-600 mt-1">Berechnung, Beispiele und Tipps für positiven Cashflow</div>
            </Link>
            <Link href="/ratgeber/eigenkapital-immobilie" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Eigenkapital für Immobilien &rarr;</div>
              <div className="text-sm text-gray-600 mt-1">Wie viel Eigenkapital brauchst du wirklich?</div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
