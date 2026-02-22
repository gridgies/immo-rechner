import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cashflow bei Immobilien: Berechnung, Beispiele & Tipps (2026) | Immo-Rechner",
  description: "Was ist der Cashflow bei Immobilien? Lerne die Berechnung, typische Werte und häufige Fehler. Mit Praxisbeispielen und kostenlosem Cashflow-Rechner.",
  alternates: { canonical: "https://immo-rechner.net/ratgeber/cashflow-immobilien" },
};

export default function CashflowRatgeber() {
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
            <Link href="/cashflow-rechner" className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-sm font-medium">
              Cashflow berechnen
            </Link>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">›</span>
          <Link href="/ratgeber/cashflow-immobilien" className="hover:text-gray-700">Ratgeber</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Cashflow bei Immobilien</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Cashflow bei Immobilien: Berechnung, Beispiele und Tipps für Investoren
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>Aktualisiert: Februar 2026</span>
          <span>•</span>
          <span>8 Min. Lesezeit</span>
        </div>

        {/* CTA Box */}
        <div className="bg-[#7099A3]/10 border border-[#7099A3]/20 rounded-xl p-6 mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-semibold text-gray-900">Direkt Cashflow berechnen?</div>
              <div className="text-sm text-gray-600">Kostenloser Rechner mit allen relevanten Kennzahlen.</div>
            </div>
            <Link href="/cashflow-rechner" className="px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm">
              Zum Cashflow-Rechner →
            </Link>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Was ist der Cashflow bei einer Immobilie?</h2>
          <p>
            Der Cashflow einer Immobilie beschreibt den tatsächlichen Geldfluss, der durch Vermietung entsteht. 
            Vereinfacht gesagt: Es ist die Differenz zwischen allen Einnahmen (Mieteinnahmen) und allen Ausgaben 
            (Kreditrate, nicht umlegbare Nebenkosten, Instandhaltung) einer vermieteten Immobilie.
          </p>
          <p>
            Ein <strong>positiver Cashflow</strong> bedeutet, dass nach Abzug aller Kosten monatlich Geld übrig bleibt. 
            Die Immobilie trägt sich also nicht nur selbst, sondern erwirtschaftet einen Überschuss. 
            Ein <strong>negativer Cashflow</strong> bedeutet hingegen, dass du jeden Monat Geld zuschießen musst – 
            die Mieteinnahmen reichen nicht aus, um alle Kosten zu decken.
          </p>

          <h2>Cashflow-Formel: So berechnest du den Immobilien-Cashflow</h2>
          <p>Die grundlegende Formel für den monatlichen Netto-Cashflow lautet:</p>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 my-6 not-prose">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">Monatlicher Cashflow =</div>
              <div className="text-lg font-semibold text-gray-900">
                Kaltmiete − Annuität (Zins + Tilgung) − nicht umlegbares Hausgeld
              </div>
            </div>
          </div>

          <h3>Die Bestandteile im Detail</h3>
          <p>
            Die <strong>Kaltmiete</strong> ist deine monatliche Einnahme. Sie sollte marktgerecht sein – 
            orientiere dich am Mietspiegel der jeweiligen Stadt oder Gemeinde.
          </p>
          <p>
            Die <strong>Annuität</strong> setzt sich zusammen aus Zinsen und Tilgung. Bei einer Finanzierung 
            von 250.000 € mit 3,5% Zins und 2% Tilgung beträgt die monatliche Annuität etwa 1.146 €. 
            Über die Jahre sinkt der Zinsanteil, während der Tilgungsanteil steigt.
          </p>
          <p>
            Das <strong>nicht umlegbare Hausgeld</strong> umfasst die Kosten, die du als Eigentümer nicht 
            auf den Mieter umlegen kannst. Dazu gehören die Instandhaltungsrücklage und 
            Verwaltungskosten. Als Faustregel rechnet man mit etwa 25-35% des gesamten Hausgeldes.
          </p>

          <h2>Beispielrechnung: Cashflow einer Eigentumswohnung</h2>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 my-6 not-prose">
            <div className="text-sm font-medium text-gray-900 mb-4">Beispiel: 2-Zimmer-Wohnung in Leipzig</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Kaufpreis:</span><span className="font-medium">180.000 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Kaufnebenkosten (~11,5%):</span><span className="font-medium">20.700 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Eigenkapital (EK + NK):</span><span className="font-medium">56.700 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Finanzierung:</span><span className="font-medium">144.000 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Zins: 3,5% / Tilgung: 2%:</span><span className="font-medium">660 € / Monat</span></div>
              <div className="border-t border-gray-300 my-3"></div>
              <div className="flex justify-between"><span className="text-gray-600">Kaltmiete:</span><span className="font-medium text-green-600">+750 € / Monat</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Annuität:</span><span className="font-medium text-red-600">−660 € / Monat</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Nicht umlegbar (~60 €):</span><span className="font-medium text-red-600">−60 € / Monat</span></div>
              <div className="border-t border-gray-300 my-3"></div>
              <div className="flex justify-between text-base"><span className="font-semibold text-gray-900">Monatlicher Cashflow:</span><span className="font-bold text-green-600">+30 € / Monat</span></div>
            </div>
          </div>

          <h2>Was ist ein guter Cashflow?</h2>
          <p>
            Grundsätzlich gilt: Ein positiver Cashflow ist besser als ein negativer. Aber wie hoch sollte er sein? 
            In der Praxis orientieren sich viele Investoren an folgenden Richtwerten:
          </p>
          <p>
            In A-Lagen (München, Hamburg, Frankfurt) ist es aktuell schwierig, einen positiven Cashflow zu erzielen. 
            Hier investiert man primär wegen der Wertsteigerung. In B- und C-Lagen (Leipzig, Dresden, Magdeburg, 
            Chemnitz) sind positive Cashflows von 50-200 € pro Monat und Einheit realistisch.
          </p>

          <h2>Häufige Fehler bei der Cashflow-Berechnung</h2>
          <p>
            Der größte Fehler ist das Vergessen der nicht umlegbaren Kosten. Viele Anfänger rechnen nur 
            Miete minus Kreditrate und vergessen Hausgeld, Instandhaltung und Leerstandsrisiko. 
            Außerdem wird oft die Mieterhöhung über die Zeit nicht berücksichtigt – ein Fehler, 
            der gerade bei langen Haltedauern den Cashflow erheblich beeinflusst. Unser 
            Rechner berücksichtigt automatisch jährliche Miet- und Kostensteigerungen.
          </p>

          <h2>Cashflow verbessern: 5 Hebel für Immobilieninvestoren</h2>
          <p>
            Erstens: Kaufpreis verhandeln – jeder Euro weniger Kaufpreis senkt die Kreditrate und verbessert den Cashflow. 
            Zweitens: Sondertilgung der Nebenkosten aus Eigenkapital, um den Finanzierungsbedarf zu senken. 
            Drittens: Marktgerechte Miete ansetzen und den lokalen Mietspiegel kennen. 
            Viertens: Hausgeld kritisch prüfen – hohe Verwaltungskosten oder überdimensionierte 
            Instandhaltungsrücklagen mindern den Cashflow. 
            Fünftens: Zinssatz vergleichen – schon 0,3% weniger Zins können den Cashflow um 30-50 € pro Monat verbessern.
          </p>

          <h2>Cashflow vs. Rendite: Was ist wichtiger?</h2>
          <p>
            Cashflow und Rendite sind verwandte, aber unterschiedliche Kennzahlen. Der Cashflow zeigt den 
            monatlichen Geldfluss, während die Rendite (z.B. IRR) die Gesamtrentabilität über die Haltedauer 
            berechnet. Eine Immobilie kann einen negativen Cashflow haben, aber trotzdem eine gute Rendite 
            erzielen – etwa wenn die Wertsteigerung den negativen monatlichen Cashflow überkompensiert. 
            Für die Finanzplanung ist der Cashflow entscheidender, für die Gesamtbewertung der 
            Investition eher die IRR.
          </p>
        </div>

        {/* CTA Bottom */}
        <div className="mt-12 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Berechne jetzt den Cashflow deiner Immobilie</h2>
          <p className="text-white/90 mb-6">Kostenlos, ohne Anmeldung und in wenigen Minuten.</p>
          <Link href="/cashflow-rechner" className="px-8 py-4 bg-white text-[#7099A3] rounded-lg hover:bg-gray-50 transition-all text-lg font-medium inline-block">
            Zum Cashflow-Rechner →
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Weitere Ratgeber</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/ratgeber/irr-erklaert" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">IRR einfach erklärt →</div>
              <div className="text-sm text-gray-600 mt-1">Was der Internal Rate of Return aussagt und wie du ihn interpretierst</div>
            </Link>
            <Link href="/ratgeber/eigenkapital-immobilie" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Eigenkapital für Immobilien →</div>
              <div className="text-sm text-gray-600 mt-1">Wie viel Eigenkapital brauchst du wirklich?</div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
