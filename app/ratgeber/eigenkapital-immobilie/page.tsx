import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Eigenkapital für Immobilien: Wie viel brauchst du wirklich? (2026) | Immo-Rechner",
  description: "Wie viel Eigenkapital brauchst du für eine Immobilie als Kapitalanlage? Aktuelle Anforderungen der Banken, Leverage-Effekt, Beispielrechnungen und Tipps zum Eigenkapitalaufbau.",
  alternates: { canonical: "https://immo-rechner.net/ratgeber/eigenkapital-immobilie" },
};

export default function EigenkapitalRatgeber() {
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
            <Link href="/rechner" className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-sm font-medium">
              Jetzt berechnen
            </Link>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">&rsaquo;</span>
          <Link href="/ratgeber/eigenkapital-immobilie" className="hover:text-gray-700">Ratgeber</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-gray-900">Eigenkapital für Immobilien</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Eigenkapital für Immobilien: Wie viel brauchst du wirklich?
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>Aktualisiert: Februar 2026</span>
          <span>&bull;</span>
          <span>9 Min. Lesezeit</span>
        </div>

        <div className="bg-[#7099A3]/10 border border-[#7099A3]/20 rounded-xl p-6 mb-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-semibold text-gray-900">Finanzierung durchrechnen?</div>
              <div className="text-sm text-gray-600">Sieh, wie sich verschiedene EK-Quoten auf Cashflow und IRR auswirken.</div>
            </div>
            <Link href="/rechner" className="px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm">
              Zum Rechner &rarr;
            </Link>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Die Faustregel: 20 bis 30 Prozent</h2>
          <p>
            Die meisten Banken und Finanzierungsberater empfehlen, mindestens 20 bis 30 Prozent des 
            Kaufpreises als Eigenkapital mitzubringen – zuzüglich der Kaufnebenkosten, die in der Regel 
            vollständig aus eigenen Mitteln bezahlt werden müssen. Bei einem Kaufpreis von 300.000 Euro 
            bedeutet das: 60.000 bis 90.000 Euro Eigenkapital plus rund 33.000 Euro Kaufnebenkosten (bei 
            durchschnittlich 11% Nebenkosten). In Summe also 93.000 bis 123.000 Euro.
          </p>
          <p>
            Diese Faustregel hat sich nach dem Zinsanstieg ab 2022 weiter verschärft. Während in der 
            Niedrigzinsphase Vollfinanzierungen verbreitet waren, setzen die meisten Kreditinstitute 
            heute deutlich höhere Eigenkapitalanteile voraus. Die vollständige Umsetzung der 
            Basel-III-Regulierung in EU-Recht hat diese Entwicklung zusätzlich verstärkt: Banken müssen 
            für risikoreichere Kredite mehr eigenes Kapital vorhalten und geben diese Kosten an die 
            Kreditnehmer weiter.
          </p>

          <h2>Eigenkapital bei Selbstnutzung vs. Kapitalanlage</h2>
          <p>
            Bei einer Immobilie als Kapitalanlage gelten andere Überlegungen als bei der Selbstnutzung. 
            Selbstnutzer sollten möglichst viel Eigenkapital einbringen, um die monatliche Belastung zu 
            senken und schneller schuldenfrei zu sein. Bei einer Kapitalanlage hingegen kann ein niedrigerer 
            Eigenkapitalanteil unter bestimmten Bedingungen sinnvoll sein – Stichwort Leverage-Effekt.
          </p>

          <h2>Der Leverage-Effekt: Weniger Eigenkapital, mehr Rendite?</h2>
          <p>
            Der Leverage-Effekt (Hebelwirkung) ist eines der mächtigsten Werkzeuge für Immobilieninvestoren. 
            Die Idee: Wenn die Gesamtrendite der Immobilie über dem Darlehenszins liegt, verbessert jeder 
            fremdfinanzierte Euro die Eigenkapitalrendite. Je weniger eigenes Geld im Deal steckt, desto 
            höher ist die prozentuale Rendite auf das eingesetzte Kapital.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 my-6 not-prose">
            <div className="text-sm font-medium text-gray-900 mb-4">Leverage-Effekt: Vergleich 20% vs. 40% Eigenkapital</div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-sm font-semibold text-gray-900 mb-3">Szenario A: 20% EK</div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Kaufpreis:</span><span>300.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Nebenkosten:</span><span>33.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Eigenkapital:</span><span className="font-medium">93.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Finanzierung:</span><span>240.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Rate (3,5% + 2%):</span><span>1.100 €/M</span></div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between font-semibold"><span className="text-gray-900">IRR (20 Jahre):</span><span className="text-[#7099A3]">~9,5%</span></div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-sm font-semibold text-gray-900 mb-3">Szenario B: 40% EK</div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Kaufpreis:</span><span>300.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Nebenkosten:</span><span>33.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Eigenkapital:</span><span className="font-medium">153.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Finanzierung:</span><span>180.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Rate (3,3% + 2%):</span><span>795 €/M</span></div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between font-semibold"><span className="text-gray-900">IRR (20 Jahre):</span><span className="text-[#7099A3]">~7,1%</span></div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Annahmen: Kaltmiete 1.100 €, Mietsteigerung 2% p.a., Wertsteigerung 50% über 20 Jahre. 
              Niedrigerer Zins bei höherem EK berücksichtigt (3,3% vs. 3,5%).
            </p>
          </div>

          <p>
            Das Beispiel zeigt: Weniger Eigenkapital führt zu einem höheren IRR – aber auch zu einem 
            höheren Risiko und einem niedrigeren absoluten Gewinn. Szenario A hat einen besseren IRR 
            (9,5% vs. 7,1%), aber Szenario B hat einen höheren monatlichen Cashflow und ein geringeres 
            Ausfallrisiko, weil weniger Fremdkapital bedient werden muss.
          </p>

          <h2>Achtung: Wenn der Hebel nach hinten losgeht</h2>
          <p>
            Der Leverage-Effekt funktioniert auch umgekehrt: Wenn der Darlehenszins über der 
            Gesamtrendite der Immobilie liegt, verstärkt die Fremdfinanzierung den Verlust. Bei einem 
            Sollzins von 3,5 Prozent und einer Nettoobjektrendite von nur 3 Prozent verlierst du mit 
            jedem fremdfinanzierten Euro Geld. In diesem Fall wäre mehr Eigenkapital die bessere Wahl – 
            oder die Investition sollte grundsätzlich überdacht werden.
          </p>

          <h2>Was zählt als Eigenkapital?</h2>
          <p>
            Zum Eigenkapital zählt nicht nur das Geld auf dem Girokonto oder Sparbuch. Banken akzeptieren 
            in der Regel auch Wertpapiere (mit Abschlag auf den aktuellen Kurswert), Bausparverträge 
            (die sich hervorragend eignen, da sie zweckgebunden sind), Lebensversicherungen, bereits 
            vorhandene schuldenfreie Immobilien (als zusätzliche Sicherheit) und Eigenleistungen bei 
            renovierungsbedürftigen Objekten (die sogenannte „Muskelhypothek", wobei Banken hier oft 
            konservativer bewerten als erhofft).
          </p>

          <h2>Eigenkapital aufbauen: Strategien für angehende Investoren</h2>
          <p>
            Wer noch nicht über ausreichend Eigenkapital verfügt, hat mehrere Möglichkeiten. Der 
            klassischste Weg ist ein Bausparvertrag, der neben dem Ansparen auch ein zinsgünstiges 
            Darlehen garantiert. ETF-Sparpläne bieten langfristig höhere Renditen, unterliegen aber 
            Kursschwankungen und eignen sich daher eher für einen Anlagehorizont von mindestens 
            fünf Jahren. Festgeld und Tagesgeld sind bei den aktuellen Zinsen wieder attraktiv für 
            den kurzfristigen Aufbau.
          </p>
          <p>
            Ein oft übersehener Ansatz: Das erste Investment kleiner ansetzen. Statt auf die „perfekte" 
            Wohnung für 300.000 Euro zu warten, kann eine kleinere Einheit für 120.000 bis 150.000 Euro 
            in einer B- oder C-Stadt der Einstieg sein. Mit geringerem Eigenkapitalbedarf (30.000 bis 
            50.000 Euro) ist der Start schneller möglich, und die Mieteinnahmen helfen beim Aufbau von 
            Kapital für die nächste Investition.
          </p>

          <h2>Konkrete Empfehlung nach Investorentyp</h2>
          <p>
            Für Erstinvestoren empfehlen wir mindestens die Kaufnebenkosten plus 10 bis 20 Prozent des 
            Kaufpreises als Eigenkapital. Das sichert vernünftige Finanzierungskonditionen und einen 
            leicht positiven oder neutralen Cashflow. Für erfahrene Investoren mit mehreren Objekten 
            kann ein niedrigerer Eigenkapitalanteil sinnvoll sein, um das Kapital auf mehrere Investments 
            zu verteilen – vorausgesetzt, der Cashflow jedes einzelnen Objekts ist positiv oder nur 
            leicht negativ.
          </p>

          <h2>Die wichtigste Regel: Puffer einplanen</h2>
          <p>
            Unabhängig von der Eigenkapitalquote solltest du niemals dein gesamtes Erspartes in die 
            Immobilie stecken. Als Rücklage sollten mindestens drei bis sechs Monatsgehälter übrig bleiben. 
            Unvorhergesehene Kosten – eine defekte Heizung, ein längerer Leerstand, eine Sonderumlage 
            der Eigentümergemeinschaft – können jederzeit auftreten. Wer dann kein Polster hat, gerät 
            schnell in eine finanzielle Schieflage.
          </p>
        </div>

        <div className="mt-12 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Wie wirkt sich dein Eigenkapital auf den IRR aus?</h2>
          <p className="text-white/90 mb-6">Probiere verschiedene EK-Quoten aus und sieh den Effekt sofort.</p>
          <Link href="/rechner" className="px-8 py-4 bg-white text-[#7099A3] rounded-lg hover:bg-gray-50 transition-all text-lg font-medium inline-block">
            Zum Rechner &rarr;
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Weitere Ratgeber</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/ratgeber/cashflow-immobilien" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">Cashflow bei Immobilien &rarr;</div>
              <div className="text-sm text-gray-600 mt-1">Berechnung, Beispiele und Tipps für Investoren</div>
            </Link>
            <Link href="/ratgeber/irr-erklaert" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
              <div className="font-semibold text-gray-900">IRR einfach erklärt &rarr;</div>
              <div className="text-sm text-gray-600 mt-1">Was der Internal Rate of Return aussagt</div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
