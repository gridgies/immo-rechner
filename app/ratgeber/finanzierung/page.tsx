import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Immobilienfinanzierung: Der komplette Ratgeber für Kapitalanleger (2026) | Immo-Rechner",
  description: "Alles über Immobilienfinanzierung: Zinsen, Tilgung, Eigenkapital, Annuitätendarlehen und Sondertilgung. Tipps für die optimale Finanzierung deiner Kapitalanlage-Immobilie.",
  alternates: { canonical: "https://immo-rechner.net/ratgeber/finanzierung" },
  openGraph: {
    title: "Immobilienfinanzierung: Der komplette Ratgeber",
    description: "Alles über Zinsen, Tilgung, Eigenkapital und die optimale Finanzierungsstrategie für Immobilieninvestoren.",
  },
};

export default function FinanzierungRatgeberPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">›</span>
          <Link href="/ratgeber/cashflow-immobilien" className="hover:text-gray-700">Ratgeber</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Finanzierung</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Immobilienfinanzierung: Der komplette Ratgeber für Kapitalanleger
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Die richtige Finanzierung entscheidet maßgeblich über den Erfolg deiner Immobilieninvestition. 
            In diesem Ratgeber erfährst du alles über Zinsen, Tilgung, Eigenkapital und die optimale 
            Finanzierungsstrategie für Kapitalanlage-Immobilien.
          </p>
        </header>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Inhalt</h2>
          <ul className="space-y-2 text-[#7099A3]">
            <li><a href="#grundlagen" className="hover:underline">1. Grundlagen der Immobilienfinanzierung</a></li>
            <li><a href="#annuitaetendarlehen" className="hover:underline">2. Das Annuitätendarlehen erklärt</a></li>
            <li><a href="#zinsen-tilgung" className="hover:underline">3. Zinsen und Tilgung verstehen</a></li>
            <li><a href="#eigenkapital" className="hover:underline">4. Wie viel Eigenkapital brauchst du?</a></li>
            <li><a href="#zinsbindung" className="hover:underline">5. Zinsbindung: 10, 15 oder 20 Jahre?</a></li>
            <li><a href="#sondertilgung" className="hover:underline">6. Sondertilgung und Flexibilität</a></li>
            <li><a href="#leverage" className="hover:underline">7. Der Leverage-Effekt</a></li>
            <li><a href="#fehler" className="hover:underline">8. Häufige Fehler vermeiden</a></li>
            <li><a href="#checkliste" className="hover:underline">9. Checkliste für die Finanzierung</a></li>
          </ul>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 id="grundlagen">1. Grundlagen der Immobilienfinanzierung</h2>
          <p>
            Die Finanzierung einer Kapitalanlage-Immobilie unterscheidet sich grundlegend von der Finanzierung 
            eines Eigenheims. Während bei der Eigennutzung emotionale Faktoren eine große Rolle spielen, 
            steht bei der Kapitalanlage die Rendite im Vordergrund. Das hat direkte Auswirkungen auf die 
            optimale Finanzierungsstrategie.
          </p>
          <p>
            Bei vermieteten Immobilien sind die Finanzierungskosten (Zinsen) als Werbungskosten steuerlich 
            absetzbar. Das bedeutet: Je nach persönlichem Steuersatz übernimmt das Finanzamt einen Teil 
            der Zinskosten. Bei einem Grenzsteuersatz von 42% reduzieren sich die effektiven Zinskosten 
            um fast die Hälfte.
          </p>

          <h2 id="annuitaetendarlehen">2. Das Annuitätendarlehen erklärt</h2>
          <p>
            Das Annuitätendarlehen ist die mit Abstand häufigste Finanzierungsform für Immobilien. 
            Die „Annuität" ist die gleichbleibende monatliche Rate, die du an die Bank zahlst. 
            Sie setzt sich aus zwei Teilen zusammen:
          </p>
          <ul>
            <li><strong>Zinsanteil:</strong> Die Vergütung für die Bank, berechnet auf die aktuelle Restschuld</li>
            <li><strong>Tilgungsanteil:</strong> Der Teil, der deine Schulden tatsächlich reduziert</li>
          </ul>
          <p>
            Das Besondere: Während die Gesamtrate konstant bleibt, verschiebt sich das Verhältnis von 
            Zins zu Tilgung über die Laufzeit. Am Anfang zahlst du viel Zinsen und wenig Tilgung. 
            Mit jeder Rate sinkt die Restschuld, und damit auch der Zinsanteil – der Tilgungsanteil steigt entsprechend.
          </p>

          <div className="bg-[#7099A3]/10 rounded-xl p-6 my-8 not-prose">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Rechenbeispiel: Annuität</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-600">Darlehenssumme:</div>
                <div className="font-semibold">200.000 €</div>
              </div>
              <div>
                <div className="text-gray-600">Zinssatz:</div>
                <div className="font-semibold">3,5% p.a.</div>
              </div>
              <div>
                <div className="text-gray-600">Anfängliche Tilgung:</div>
                <div className="font-semibold">2,0% p.a.</div>
              </div>
              <div>
                <div className="text-gray-600">Monatliche Rate:</div>
                <div className="font-semibold">916,67 €</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#7099A3]/20">
              <div className="text-sm text-gray-600">Davon im ersten Monat:</div>
              <div className="flex gap-4 mt-1">
                <span className="font-semibold">Zinsen: 583,33 €</span>
                <span className="font-semibold">Tilgung: 333,33 €</span>
              </div>
            </div>
          </div>

          <h2 id="zinsen-tilgung">3. Zinsen und Tilgung verstehen</h2>
          
          <h3>Die Zinsen</h3>
          <p>
            Der Zinssatz ist der Preis für das geliehene Geld. Er wird als jährlicher Prozentsatz 
            (p.a. = per annum) angegeben und auf die aktuelle Restschuld berechnet. Der 
            <strong> Sollzins</strong> ist der reine Zinssatz, während der <strong>Effektivzins</strong> 
            zusätzlich Nebenkosten wie Bearbeitungsgebühren einbezieht.
          </p>
          <p>
            Die aktuellen Bauzinsen hängen von vielen Faktoren ab: dem allgemeinen Zinsniveau, 
            deiner Bonität, dem Beleihungsauslauf (Verhältnis von Darlehen zu Immobilienwert) 
            und der Zinsbindungsdauer.
          </p>

          <h3>Die Tilgung</h3>
          <p>
            Die Tilgung bestimmt, wie schnell du schuldenfrei wirst. Eine höhere anfängliche Tilgung 
            bedeutet eine höhere monatliche Rate, aber auch eine kürzere Gesamtlaufzeit und weniger 
            Zinskosten insgesamt.
          </p>
          <p>
            Für Kapitalanleger gilt: Die optimale Tilgung ist ein Balanceakt. Einerseits möchtest du 
            die Schulden irgendwann loswerden, andererseits drückt eine hohe Tilgung auf den Cashflow. 
            Viele Investoren wählen daher eine anfängliche Tilgung von 2% und nutzen Sondertilgungen, 
            um flexibel zu bleiben.
          </p>

          <h2 id="eigenkapital">4. Wie viel Eigenkapital brauchst du?</h2>
          <p>
            Die klassische Faustregel lautet: Mindestens die Kaufnebenkosten (8-15% des Kaufpreises) 
            solltest du aus eigener Tasche zahlen. Warum? Weil Banken diese Kosten ungern finanzieren – 
            sie stellen schließlich keinen Gegenwert dar.
          </p>
          <p>
            Je mehr Eigenkapital du einbringst, desto besser sind in der Regel die Zinskonditionen. 
            Die wichtigen Schwellenwerte:
          </p>
          <ul>
            <li><strong>60% Beleihung:</strong> Beste Zinskonditionen</li>
            <li><strong>80% Beleihung:</strong> Gute Konditionen, Standardfall</li>
            <li><strong>90% Beleihung:</strong> Zinsaufschlag wahrscheinlich</li>
            <li><strong>100%+ Finanzierung:</strong> Deutlicher Aufschlag, schwer zu bekommen</li>
          </ul>
          <p>
            Für eine detaillierte Berechnung, wie viel Eigenkapital du für deine Situation benötigst, 
            nutze unseren <Link href="/rechner" className="text-[#7099A3] hover:underline">Immobilienrechner</Link>.
          </p>

          <h2 id="zinsbindung">5. Zinsbindung: 10, 15 oder 20 Jahre?</h2>
          <p>
            Die Zinsbindung legt fest, wie lange dein Zinssatz garantiert bleibt. Längere Zinsbindungen 
            kosten in der Regel einen Zinsaufschlag, bieten aber Planungssicherheit.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Zinsbindung im Vergleich</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
                <div>
                  <div className="font-medium">10 Jahre</div>
                  <div className="text-sm text-gray-500">Niedrigster Zins, höheres Anschlussrisiko</div>
                </div>
                <div className="text-[#7099A3] font-semibold">Standard</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
                <div>
                  <div className="font-medium">15 Jahre</div>
                  <div className="text-sm text-gray-500">Guter Kompromiss aus Zins und Sicherheit</div>
                </div>
                <div className="text-[#7099A3] font-semibold">+0,2-0,4%</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
                <div>
                  <div className="font-medium">20 Jahre</div>
                  <div className="text-sm text-gray-500">Maximale Sicherheit, höherer Zins</div>
                </div>
                <div className="text-[#7099A3] font-semibold">+0,4-0,7%</div>
              </div>
            </div>
          </div>

          <p>
            Wichtig zu wissen: Nach 10 Jahren Zinsbindung hast du laut §489 BGB ein Sonderkündigungsrecht 
            mit 6 Monaten Frist – unabhängig von der vereinbarten Zinsbindung. Das reduziert das Risiko 
            langer Zinsbindungen erheblich.
          </p>

          <h2 id="sondertilgung">6. Sondertilgung und Flexibilität</h2>
          <p>
            Sondertilgungen ermöglichen es dir, außerplanmäßig Schulden zu tilgen – etwa wenn du einen 
            Bonus erhältst oder eine andere Immobilie verkaufst. Üblich sind Sondertilgungsrechte von 
            5-10% der ursprünglichen Darlehenssumme pro Jahr.
          </p>
          <p>
            Für Kapitalanleger sind Sondertilgungsrechte besonders wertvoll: Sie erlauben eine niedrige 
            Regelttilgung (besserer Cashflow) bei gleichzeitiger Flexibilität, Schulden schneller 
            abzubauen, wenn es die Liquidität erlaubt.
          </p>

          <h2 id="leverage">7. Der Leverage-Effekt</h2>
          <p>
            Der Leverage-Effekt (Hebelwirkung) ist das mächtigste Werkzeug des Immobilieninvestors. 
            Er beschreibt, wie Fremdkapital die Eigenkapitalrendite steigern kann.
          </p>
          <p>
            Die Formel ist einfach: Solange die Gesamtrendite der Immobilie über dem Kreditzins liegt, 
            profitierst du von jedem Euro Fremdkapital. Je höher der Fremdkapitalanteil, desto stärker 
            der Hebel – aber auch das Risiko.
          </p>

          <div className="bg-green-50 rounded-xl p-6 my-8 not-prose border border-green-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Leverage-Beispiel</h3>
            <p className="text-sm text-gray-600 mb-4">
              Immobilie mit 5% Nettomietrendite, Finanzierung zu 3,5%
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-sm text-gray-600">100% Eigenkapital</div>
                <div className="text-2xl font-bold text-gray-900">5,0%</div>
                <div className="text-xs text-gray-500">Eigenkapitalrendite</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="text-sm text-gray-600">20% Eigenkapital</div>
                <div className="text-2xl font-bold text-green-600">11,0%</div>
                <div className="text-xs text-gray-500">Eigenkapitalrendite</div>
              </div>
            </div>
          </div>

          <h2 id="fehler">8. Häufige Fehler vermeiden</h2>
          <ul>
            <li>
              <strong>Nur auf den Zinssatz schauen:</strong> Der Effektivzins ist wichtiger. 
              Achte auch auf Sondertilgungsrechte und Flexibilität.
            </li>
            <li>
              <strong>Zu knapp kalkulieren:</strong> Plane Puffer für Leerstand, Reparaturen 
              und Zinserhöhungen nach der Zinsbindung ein.
            </li>
            <li>
              <strong>Zu kurze Zinsbindung in Niedrigzinsphasen:</strong> Wenn die Zinsen 
              historisch niedrig sind, sichere dir den Zins länger.
            </li>
            <li>
              <strong>Tilgung zu hoch ansetzen:</strong> Bei Kapitalanlagen kann eine niedrige 
              Tilgung sinnvoll sein – die ersparten Zinsen sind steuerlich absetzbar.
            </li>
            <li>
              <strong>Keine Vergleichsangebote einholen:</strong> Die Konditionen zwischen 
              Banken können erheblich variieren. Hole mindestens 3-5 Angebote ein.
            </li>
          </ul>

          <h2 id="checkliste">9. Checkliste für die Finanzierung</h2>
          
          <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vor dem Bankgespräch</h3>
            <ul className="space-y-2">
              {[
                'Eigenkapital zusammenstellen (mind. Kaufnebenkosten)',
                'Einkommensnachweise der letzten 3 Monate',
                'Steuerbescheide der letzten 2 Jahre',
                'Selbstauskunft vorbereiten',
                'Objektunterlagen (Exposé, Grundriss, Teilungserklärung)',
                'Eigene Haushaltsrechnung aufstellen',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#7099A3] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Im Angebot prüfen</h3>
            <ul className="space-y-2">
              {[
                'Effektivzins (nicht nur Sollzins)',
                'Sondertilgungsrechte (mind. 5% p.a.)',
                'Tilgungssatzwechsel möglich?',
                'Bereitstellungszinsen und -frist',
                'Vorfälligkeitsentschädigung bei vorzeitiger Ablösung',
                'Möglichkeit zur Ratenpause',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#7099A3] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded-2xl p-8 mt-12 text-white">
          <h2 className="text-2xl font-bold mb-4">Jetzt deine Finanzierung durchrechnen</h2>
          <p className="text-white/80 mb-6">
            Nutze unseren kostenlosen Rechner, um Cashflow, Rendite und die Auswirkungen 
            verschiedener Finanzierungsszenarien zu berechnen.
          </p>
          <Link
            href="/rechner"
            className="inline-block px-8 py-4 bg-white text-[#7099A3] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Zum Immobilienrechner →
          </Link>
        </div>

        {/* Related Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <Link href="/ratgeber/eigenkapital-immobilie" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Eigenkapital Ratgeber →</div>
            <div className="text-sm text-gray-600">Wie viel Eigenkapital brauchst du?</div>
          </Link>
          <Link href="/irr-rechner" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">IRR Rechner →</div>
            <div className="text-sm text-gray-600">Eigenkapitalrendite berechnen</div>
          </Link>
          <Link href="/ratgeber/cashflow-immobilien" className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Cashflow Ratgeber →</div>
            <div className="text-sm text-gray-600">Cashflow bei Immobilien verstehen</div>
          </Link>
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
