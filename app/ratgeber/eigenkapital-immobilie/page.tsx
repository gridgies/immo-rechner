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
      "@id": "https://immo-rechner.net/ratgeber/eigenkapital-immobilie#article",
      "headline": "Eigenkapital für Immobilien: Wie viel brauchst du wirklich?",
      "description": "Wie viel Eigenkapital brauchst du für eine Immobilie als Kapitalanlage? Aktuelle Anforderungen der Banken, Leverage-Effekt, Beispielrechnungen und Tipps zum Eigenkapitalaufbau.",
      "url": "https://immo-rechner.net/ratgeber/eigenkapital-immobilie",
      "datePublished": "2025-06-01",
      "dateModified": "2026-02-28",
      "inLanguage": "de",
      "wordCount": 1300,
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
        "@id": "https://immo-rechner.net/ratgeber/eigenkapital-immobilie"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://immo-rechner.net" },
        { "@type": "ListItem", "position": 2, "name": "Ratgeber", "item": "https://immo-rechner.net/ratgeber/immobilie-als-kapitalanlage" },
        { "@type": "ListItem", "position": 3, "name": "Eigenkapital für Immobilien", "item": "https://immo-rechner.net/ratgeber/eigenkapital-immobilie" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Wie viel Eigenkapital brauche ich für eine Immobilie als Kapitalanlage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Faustregel lautet: mindestens 20–30% des Kaufpreises plus die Kaufnebenkosten (8–15% des Kaufpreises). Bei einem Kaufpreis von 300.000 € bedeutet das typischerweise 93.000 bis 123.000 € Eigenkapital insgesamt."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist der Leverage-Effekt bei Immobilien?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der Leverage-Effekt (Hebelwirkung) beschreibt, wie Fremdkapital die Eigenkapitalrendite steigern kann. Solange die Gesamtrendite der Immobilie über dem Darlehenszins liegt, verbessert jeder fremdfinanzierte Euro die Eigenkapitalrendite. Bei einer Immobilie mit 5% Nettomietrendite und 3,5% Darlehenszins steigt die Eigenkapitalrendite durch Hebel deutlich."
          }
        },
        {
          "@type": "Question",
          "name": "Zählen Wertpapiere als Eigenkapital bei der Bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, viele Banken akzeptieren Wertpapiere als Eigenkapital – allerdings mit einem Abschlag auf den aktuellen Kurswert (meist 70–80%). Auch Bausparverträge, Lebensversicherungen und schuldenfreie Immobilien können als Eigenkapital eingebracht werden."
          }
        },
        {
          "@type": "Question",
          "name": "Kann ich eine Immobilie ohne Eigenkapital kaufen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vollfinanzierungen (100%+ des Kaufpreises) sind nach dem Zinsanstieg ab 2022 selten geworden und mit deutlichen Zinsaufschlägen verbunden. Die meisten Banken verlangen heute mindestens die Kaufnebenkosten aus eigenen Mitteln. Empfehlenswert sind 20–30% Eigenkapital für gute Konditionen."
          }
        },
        {
          "@type": "Question",
          "name": "Wie baue ich schnell Eigenkapital für eine Immobilie auf?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Effektive Methoden: (1) Sparplan aufbauen — 1.000 €/Monat über 5 Jahre = 60.000 € + Zinsen. (2) ETF-Sparplan — historisch 7–9% p.a., aber Kursrisiko beachten. (3) Bausparvertrag — steuerbegünstigt in einigen Bundesländern. (4) Eigenleistungen bei bestehender Immobilie. (5) Schenkung/Darlehen von Familie."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Eigenkapital für Immobilien: Wie viel brauchst du wirklich? (2026) | Immo-Rechner",
  description: "Wie viel Eigenkapital brauchst du für eine Immobilie als Kapitalanlage? Aktuelle Anforderungen der Banken, Leverage-Effekt, Beispielrechnungen und Tipps zum Eigenkapitalaufbau.",
  alternates: { canonical: "https://immo-rechner.net/ratgeber/eigenkapital-immobilie" },
  openGraph: {
    title: "Eigenkapital für Immobilien: Wie viel brauchst du wirklich?",
    description: "Aktuelle Anforderungen der Banken, Leverage-Effekt, Beispielrechnungen und Tipps zum Eigenkapitalaufbau für Kapitalanleger.",
    url: "https://immo-rechner.net/ratgeber/eigenkapital-immobilie",
    siteName: "Immo-Rechner.net",
    locale: "de_DE",
    type: "article",
    images: [
      {
        url: "/api/og?title=Eigenkapital+f%C3%BCr+Immobilien%3A+Wie+viel+brauchst+du%3F&subtitle=Leverage-Effekt%2C+Bankkonditionen+%26+Beispiele",
        width: 1200,
        height: 630,
        alt: "Eigenkapital für Immobilien – Wie viel brauchst du wirklich?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eigenkapital für Immobilien: Wie viel brauchst du wirklich?",
    description: "Leverage-Effekt, Bankanforderungen und Beispielrechnungen für Kapitalanleger.",
    images: ["/api/og?title=Eigenkapital+f%C3%BCr+Immobilien%3A+Wie+viel+brauchst+du%3F&subtitle=Leverage-Effekt%2C+Bankkonditionen+%26+Beispiele"],
  },
};

export default function EigenkapitalRatgeber() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLdData} />
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Eigenkapital für Immobilien</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Eigenkapital für Immobilien: Wie viel brauchst du wirklich?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Die richtige Eigenkapitalquote entscheidet über deine Finanzierungskonditionen, den Cashflow und die Rendite. 
            Hier erfährst du, wie viel Eigenkapital du für deine Immobilieninvestition einplanen solltest.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
            <span>Aktualisiert: Februar 2026</span>
            <span>•</span>
            <span>9 Min. Lesezeit</span>
          </div>
        </header>

        <QuickAnswer
          question="Wie viel Eigenkapital brauche ich für eine Immobilien-Kapitalanlage?"
          answer="Als Faustregel gilt: mindestens 20–30 % des Kaufpreises plus alle Kaufnebenkosten (10–15 % des Kaufpreises) aus Eigenkapital. Bei einem Kaufpreis von 300.000 € ergibt das einen Eigenkapitalbedarf von 93.000 bis 123.000 €. Weniger Eigenkapital erhöht den IRR durch den Leverage-Effekt — aber nur, wenn die Nettomietrendite den Darlehenszins übersteigt."
          keyFacts={[
            "Minimum: Kaufnebenkosten (10–15 %) müssen aus EK bezahlt werden",
            "Empfehlung: 20–30 % EK auf den Kaufpreis für gute Konditionen",
            "Leverage-Effekt: Weniger EK → höherer IRR (bei Nettomietrendite > Zinssatz)",
            "Negativer Hebel: Bei Zinssatz > Nettomietrendite schadet mehr Fremdkapital",
          ]}
        />

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-[#7099A3]/10 to-[#5d7e87]/10 rounded-xl p-6 mb-10 border border-[#7099A3]/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-semibold text-gray-900">Finanzierung durchrechnen?</p>
              <p className="text-sm text-gray-600">Sieh, wie sich verschiedene EK-Quoten auf Cashflow und IRR auswirken.</p>
            </div>
            <Link href="/rechner" className="px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm">
              Zum Rechner →
            </Link>
          </div>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4">
          
          <h2>Die Faustregel: 20 bis 30 Prozent</h2>
          <p>
            Die meisten Banken und Finanzierungsberater empfehlen, mindestens <strong>20 bis 30 Prozent des 
            Kaufpreises</strong> als Eigenkapital mitzubringen – zuzüglich der Kaufnebenkosten, die in der Regel 
            vollständig aus eigenen Mitteln bezahlt werden müssen. Bei einem Kaufpreis von 300.000 Euro 
            bedeutet das: 60.000 bis 90.000 Euro Eigenkapital plus rund 33.000 Euro Kaufnebenkosten. 
            In Summe also <strong>93.000 bis 123.000 Euro</strong>.
          </p>
          <p>
            Diese Faustregel hat sich nach dem Zinsanstieg ab 2022 weiter verschärft. Während in der 
            Niedrigzinsphase Vollfinanzierungen verbreitet waren, setzen die meisten Kreditinstitute 
            heute deutlich höhere Eigenkapitalanteile voraus. Mehr Details zur Finanzierung findest du 
            in unserem <Link href="/ratgeber/finanzierung" className="text-[#7099A3] hover:underline">Ratgeber zur Immobilienfinanzierung</Link>.
          </p>

          <h2>Eigenkapital bei Selbstnutzung vs. Kapitalanlage</h2>
          <p>
            Bei einer Immobilie als Kapitalanlage gelten andere Überlegungen als bei der Selbstnutzung. 
            <strong>Selbstnutzer</strong> sollten möglichst viel Eigenkapital einbringen, um die monatliche Belastung zu 
            senken und schneller schuldenfrei zu sein. Bei einer <strong>Kapitalanlage</strong> hingegen kann ein niedrigerer 
            Eigenkapitalanteil unter bestimmten Bedingungen sinnvoll sein – Stichwort Leverage-Effekt.
          </p>

          <h2>Der Leverage-Effekt: Weniger Eigenkapital, mehr Rendite?</h2>
          <p>
            Der Leverage-Effekt (Hebelwirkung) ist eines der mächtigsten Werkzeuge für Immobilieninvestoren. 
            Die Idee: Wenn die Gesamtrendite der Immobilie über dem Darlehenszins liegt, verbessert jeder 
            fremdfinanzierte Euro die Eigenkapitalrendite.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-6 not-prose">
            <p className="text-sm font-bold text-gray-900 mb-4">Leverage-Effekt: Vergleich 20% vs. 40% Eigenkapital</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-sm font-bold text-gray-900 mb-3">Szenario A: 20% EK</p>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Kaufpreis:</span><span>300.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Nebenkosten:</span><span>33.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Eigenkapital:</span><span className="font-medium">93.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Finanzierung:</span><span>240.000 €</span></div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between font-bold"><span className="text-gray-900">IRR (20 Jahre):</span><span className="text-[#7099A3]">~9,5%</span></div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-sm font-bold text-gray-900 mb-3">Szenario B: 40% EK</p>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Kaufpreis:</span><span>300.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Nebenkosten:</span><span>33.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Eigenkapital:</span><span className="font-medium">153.000 €</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Finanzierung:</span><span>180.000 €</span></div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between font-bold"><span className="text-gray-900">IRR (20 Jahre):</span><span className="text-[#7099A3]">~7,1%</span></div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Annahmen: Kaltmiete 1.100 €, Mietsteigerung 2% p.a., Wertsteigerung 50% über 20 Jahre.
            </p>
          </div>

          <p>
            Das Beispiel zeigt: Weniger Eigenkapital führt zu einem höheren IRR (9,5% vs. 7,1%), aber auch zu einem 
            höheren Risiko. Szenario B hat einen höheren monatlichen Cashflow und ein geringeres 
            Ausfallrisiko, weil weniger Fremdkapital bedient werden muss.
          </p>

          <h2>Achtung: Wenn der Hebel nach hinten losgeht</h2>
          <p>
            Der Leverage-Effekt funktioniert auch umgekehrt: Wenn der Darlehenszins über der 
            Gesamtrendite der Immobilie liegt, verstärkt die Fremdfinanzierung den Verlust. Bei einem 
            Sollzins von 3,5% und einer Nettoobjektrendite von nur 3% verlierst du mit 
            jedem fremdfinanzierten Euro Geld.
          </p>

          <h2>Was zählt als Eigenkapital?</h2>
          <p>
            Zum Eigenkapital zählt nicht nur Bargeld. Banken akzeptieren in der Regel auch:
          </p>
          <ul className="space-y-2">
            <li><strong>Wertpapiere</strong> (mit Abschlag auf den aktuellen Kurswert)</li>
            <li><strong>Bausparverträge</strong> (ideal, da zweckgebunden)</li>
            <li><strong>Lebensversicherungen</strong></li>
            <li><strong>Schuldenfreie Immobilien</strong> (als zusätzliche Sicherheit)</li>
            <li><strong>Eigenleistungen</strong> bei renovierungsbedürftigen Objekten („Muskelhypothek")</li>
          </ul>

          <h2>Eigenkapital aufbauen: Strategien für angehende Investoren</h2>
          <ul className="space-y-2">
            <li><strong>Bausparvertrag:</strong> Klassiker mit garantiertem zinsgünstigem Darlehen</li>
            <li><strong>ETF-Sparpläne:</strong> Höhere Renditen, aber Kursschwankungen (mind. 5 Jahre Horizont)</li>
            <li><strong>Festgeld/Tagesgeld:</strong> Bei aktuellen Zinsen wieder attraktiv für kurzfristigen Aufbau</li>
            <li><strong>Kleiner starten:</strong> Erste Wohnung für 120.000-150.000 € statt auf die „perfekte" warten</li>
          </ul>

          <h2>Die wichtigste Regel: Puffer einplanen</h2>
          <p>
            Unabhängig von der Eigenkapitalquote solltest du niemals dein gesamtes Erspartes in die 
            Immobilie stecken. Als Rücklage sollten <strong>mindestens drei bis sechs Monatsgehälter</strong> übrig bleiben. 
            Unvorhergesehene Kosten – eine defekte Heizung, ein längerer Leerstand, eine Sonderumlage – 
            können jederzeit auftreten.
          </p>
        </div>

        {/* CTA Bottom */}
        <div className="mt-12 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Wie wirkt sich dein Eigenkapital auf den IRR aus?</h2>
          <p className="text-white/90 mb-6">Probiere verschiedene EK-Quoten aus und sieh den Effekt sofort.</p>
          <Link href="/rechner" className="px-8 py-4 bg-white text-[#7099A3] rounded-lg hover:bg-gray-50 transition-all text-lg font-medium inline-block">
            Zum Rechner →
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Weitere Ratgeber</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/ratgeber/finanzierung" className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7099A3] transition-colors">
              <p className="font-bold text-gray-900">Immobilienfinanzierung →</p>
              <p className="text-sm text-gray-600 mt-1">Zinsen, Tilgung, Zinsbindung und Sondertilgung verstehen</p>
            </Link>
            <Link href="/ratgeber/cashflow-immobilien" className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7099A3] transition-colors">
              <p className="font-bold text-gray-900">Cashflow bei Immobilien →</p>
              <p className="text-sm text-gray-600 mt-1">Berechnung, Beispiele und Tipps für Investoren</p>
            </Link>
            <Link href="/ratgeber/irr-erklaert" className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7099A3] transition-colors">
              <p className="font-bold text-gray-900">IRR einfach erklärt →</p>
              <p className="text-sm text-gray-600 mt-1">Was der Internal Rate of Return aussagt</p>
            </Link>
            <Link href="/kaufnebenkosten-rechner" className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7099A3] transition-colors">
              <p className="font-bold text-gray-900">Kaufnebenkosten Rechner →</p>
              <p className="text-sm text-gray-600 mt-1">Grunderwerbsteuer, Notar und Makler berechnen</p>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
