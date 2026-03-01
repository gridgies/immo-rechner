import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import QuickAnswer from '@/components/QuickAnswer';

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://immo-rechner.net/ratgeber/irr-erklaert#article",
      "headline": "IRR einfach erklärt: Was der Internal Rate of Return bei Immobilien wirklich aussagt",
      "description": "Was ist der IRR bei Immobilien? Verständliche Erklärung mit Beispielen, Formel, Berechnung und Interpretation. Lerne, warum der IRR die beste Renditekennzahl ist.",
      "url": "https://immo-rechner.net/ratgeber/irr-erklaert",
      "datePublished": "2025-06-01",
      "dateModified": "2026-02-28",
      "inLanguage": "de",
      "wordCount": 1400,
      "author": {
        "@type": "Organization",
        "name": "Immobilien Rechner",
        "url": "https://immo-rechner.net"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Immobilien Rechner",
        "url": "https://immo-rechner.net",
        "logo": {
          "@type": "ImageObject",
          "url": "https://immo-rechner.net/favicon.svg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://immo-rechner.net/ratgeber/irr-erklaert"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://immo-rechner.net" },
        { "@type": "ListItem", "position": 2, "name": "Ratgeber", "item": "https://immo-rechner.net/ratgeber/immobilie-als-kapitalanlage" },
        { "@type": "ListItem", "position": 3, "name": "IRR einfach erklärt", "item": "https://immo-rechner.net/ratgeber/irr-erklaert" }
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
            "text": "IRR steht für Internal Rate of Return (Interner Zinsfuß). Es ist die durchschnittliche jährliche Rendite auf das eingesetzte Eigenkapital über die gesamte Haltedauer der Immobilie. Der IRR berücksichtigt alle Zahlungsströme: Eigenkapital, monatliche Cashflows, Mieterhöhungen und den Verkaufserlös."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist ein guter IRR für eine Immobilie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unter 3% ist der IRR unattraktiv. 3–6% gelten als akzeptabel, 6–10% als gut bis sehr gut. Über 10% ist exzellent und typischerweise nur bei günstigem Einkauf oder starker Wertsteigerung erreichbar."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist der Unterschied zwischen IRR und Mietrendite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Mietrendite ist eine Momentaufnahme und zeigt nur das Verhältnis von Jahreskaltmiete zu Kaufpreis. Der IRR hingegen berücksichtigt den Zeitwert des Geldes, alle laufenden Cashflows über die Haltedauer, Mieterhöhungen und den Verkaufserlös – und ist damit die aussagekräftigere Gesamtrendite."
          }
        },
        {
          "@type": "Question",
          "name": "Welche Faktoren beeinflussen den IRR bei Immobilien am stärksten?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Den IRR beeinflussen vor allem: der Kaufpreis (größter Hebel), die erwartete Wertsteigerung beim Verkauf, die Eigenkapitalquote (Leverage-Effekt) und die laufenden Cashflows aus Miete minus Kosten."
          }
        },
        {
          "@type": "Question",
          "name": "Kann eine Immobilie mit negativem Cashflow einen guten IRR haben?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja. Wenn die Wertsteigerung beim Verkauf den negativen monatlichen Cashflow überkompensiert, kann der IRR trotzdem attraktiv sein. Beispiel: Eine Wohnung in München mit −200 € / Monat Cashflow, aber 80 % Wertsteigerung in 15 Jahren kann einen IRR von 6–8 % erzielen."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "IRR einfach erklärt: Internal Rate of Return bei Immobilien verstehen (2026) | Immo-Rechner",
  description: "Was ist der IRR bei Immobilien? Verständliche Erklärung mit Beispielen, Formel, Berechnung und Interpretation. Lerne, warum der IRR die beste Renditekennzahl ist.",
  alternates: { canonical: "https://immo-rechner.net/ratgeber/irr-erklaert" },
  openGraph: {
    title: "IRR einfach erklärt: Internal Rate of Return bei Immobilien",
    description: "Was ist der IRR bei Immobilien? Verständliche Erklärung mit Beispielen, Formel, Berechnung und Interpretation.",
    url: "https://immo-rechner.net/ratgeber/irr-erklaert",
    siteName: "Immo-Rechner.net",
    locale: "de_DE",
    type: "article",
    images: [
      {
        url: "/api/og?title=IRR+einfach+erkl%C3%A4rt%3A+Internal+Rate+of+Return&subtitle=Ratgeber+mit+Beispielrechnung+%26+Richtwerten",
        width: 1200,
        height: 630,
        alt: "IRR einfach erklärt – Internal Rate of Return bei Immobilien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRR einfach erklärt: Internal Rate of Return bei Immobilien",
    description: "Was ist der IRR, was ist ein guter Wert und wie berechnest du ihn?",
    images: ["/api/og?title=IRR+einfach+erkl%C3%A4rt%3A+Internal+Rate+of+Return&subtitle=Ratgeber+mit+Beispielrechnung+%26+Richtwerten"],
  },
};

export default function IRRRatgeber() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLdData} />
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

        <QuickAnswer
          question="Was ist der IRR bei Immobilien und was ist ein guter Wert?"
          answer="Der IRR (Interner Zinsfuß) ist die durchschnittliche jährliche Rendite auf das eingesetzte Eigenkapital über die gesamte Haltedauer einer Immobilie — inklusive aller Cashflows und des Verkaufserlöses. Er ist die aussagekräftigste Renditekennzahl, weil er den Zeitwert des Geldes berücksichtigt."
          keyFacts={[
            "IRR unter 3 %: Unattraktiv — schlechter als Festgeld",
            "IRR 3–6 %: Akzeptabel",
            "IRR 6–10 %: Gut bis sehr gut — Zielbereich erfahrener Investoren",
            "IRR über 10 %: Exzellent — nur mit günstigem Einkauf oder starker Wertsteigerung",
            "Unterschied zur Mietrendite: IRR berücksichtigt Haltedauer und Verkauf",
          ]}
        />

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

      <Footer />
    </div>
  );
}
