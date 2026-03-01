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
      "@id": "https://immo-rechner.net/ratgeber/cashflow-immobilien#article",
      "headline": "Cashflow bei Immobilien: Berechnung, Beispiele und Tipps für Investoren",
      "description": "Was ist der Cashflow bei Immobilien? Lerne die Berechnung, typische Werte und häufige Fehler. Mit Praxisbeispielen und kostenlosem Cashflow-Rechner.",
      "url": "https://immo-rechner.net/ratgeber/cashflow-immobilien",
      "datePublished": "2025-06-01",
      "dateModified": "2026-02-28",
      "inLanguage": "de",
      "wordCount": 1200,
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
        "@id": "https://immo-rechner.net/ratgeber/cashflow-immobilien"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://immo-rechner.net" },
        { "@type": "ListItem", "position": 2, "name": "Ratgeber", "item": "https://immo-rechner.net/ratgeber/immobilie-als-kapitalanlage" },
        { "@type": "ListItem", "position": 3, "name": "Cashflow bei Immobilien", "item": "https://immo-rechner.net/ratgeber/cashflow-immobilien" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Was ist der Cashflow bei einer Immobilie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der Cashflow einer Immobilie ist die Differenz zwischen den monatlichen Mieteinnahmen und allen laufenden Kosten: Annuität (Zins + Tilgung), nicht umlegbares Hausgeld und Instandhaltungsrücklage. Ein positiver Cashflow bedeutet, dass die Immobilie nach Abzug aller Kosten monatlich Überschüsse erwirtschaftet."
          }
        },
        {
          "@type": "Question",
          "name": "Wie berechnet man den Cashflow einer Immobilie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Formel: Monatlicher Cashflow = Kaltmiete − Annuität − nicht umlegbares Hausgeld. Beispiel: Kaltmiete 750 € − Annuität 660 € − Hausgeld 60 € = 30 € monatlicher Cashflow."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist ein guter Cashflow bei einer Immobilie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In B- und C-Lagen (Leipzig, Dresden, Magdeburg) sind positive Cashflows von 50–200 € pro Monat realistisch. In A-Lagen (München, Hamburg) ist es aktuell schwierig, einen positiven Cashflow zu erzielen – hier investiert man primär wegen der Wertsteigerung."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist der Unterschied zwischen Cashflow und Rendite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der Cashflow zeigt den monatlichen Geldfluss einer Immobilie. Die Rendite (z.B. IRR) berechnet die Gesamtrentabilität über die gesamte Haltedauer inkl. Wertsteigerung und Verkaufserlös. Eine Immobilie kann negativen Cashflow haben, aber trotzdem eine gute Gesamtrendite erzielen."
          }
        },
        {
          "@type": "Question",
          "name": "Wie verbessere ich den Cashflow meiner Immobilie?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die 5 wichtigsten Hebel: (1) Kaufpreis verhandeln – jeder Euro weniger senkt die Kreditrate. (2) Günstigere Finanzierung finden – 0,3% weniger Zins spart 30–50 € / Monat. (3) Marktgerechte Miete ausschöpfen. (4) Nicht umlegbares Hausgeld minimieren durch WEG-Wahl und Verwaltung. (5) Eigenkapital optimieren, um Fremdkapitalbedarf zu senken."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Cashflow bei Immobilien: Berechnung, Beispiele & Tipps (2026) | Immo-Rechner",
  description: "Was ist der Cashflow bei Immobilien? Lerne die Berechnung, typische Werte und häufige Fehler. Mit Praxisbeispielen und kostenlosem Cashflow-Rechner.",
  alternates: { canonical: "https://immo-rechner.net/ratgeber/cashflow-immobilien" },
  openGraph: {
    title: "Cashflow bei Immobilien: Berechnung, Beispiele & Tipps (2026)",
    description: "Was ist der Cashflow bei Immobilien? Lerne die Berechnung, typische Werte und häufige Fehler. Mit Praxisbeispielen und kostenlosem Cashflow-Rechner.",
    url: "https://immo-rechner.net/ratgeber/cashflow-immobilien",
    siteName: "Immo-Rechner.net",
    locale: "de_DE",
    type: "article",
    images: [
      {
        url: "/api/og?title=Cashflow+bei+Immobilien%3A+Berechnung+%26+Tipps&subtitle=Ratgeber+mit+Praxisbeispielen+f%C3%BCr+Investoren",
        width: 1200,
        height: 630,
        alt: "Cashflow bei Immobilien – Berechnung, Beispiele und Tipps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cashflow bei Immobilien: Berechnung, Beispiele & Tipps (2026)",
    description: "Formel, Beispielrechnung und 5 Hebel für positiven Cashflow.",
    images: ["/api/og?title=Cashflow+bei+Immobilien%3A+Berechnung+%26+Tipps&subtitle=Ratgeber+mit+Praxisbeispielen+f%C3%BCr+Investoren"],
  },
};

export default function CashflowRatgeber() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLdData} />
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Cashflow bei Immobilien</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cashflow bei Immobilien: Berechnung, Beispiele und Tipps für Investoren
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Der Cashflow ist die wichtigste Kennzahl für die laufende Wirtschaftlichkeit deiner Immobilieninvestition. 
            In diesem Ratgeber lernst du, wie du ihn berechnest und welche Faktoren ihn beeinflussen.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
            <span>Aktualisiert: Februar 2026</span>
            <span>•</span>
            <span>8 Min. Lesezeit</span>
          </div>
        </header>

        <QuickAnswer
          question="Was ist der Cashflow bei einer Immobilie und wann ist er positiv?"
          answer="Der Cashflow ist die Differenz zwischen monatlichen Mieteinnahmen und allen laufenden Kosten (Annuität, nicht umlagefähiges Hausgeld). Ist er größer als 0, trägt sich die Immobilie selbst. In A-Lagen (München, Frankfurt) ist positiver Cashflow bei aktuellen Zinsen kaum noch erreichbar; in B- und C-Lagen (Leipzig, Magdeburg) sind +50 bis +200 € / Monat realistisch."
          keyFacts={[
            "Formel: Kaltmiete − Annuität − nicht umlagefähiges Hausgeld",
            "Positiver Cashflow: Immobilie trägt sich selbst",
            "Negativer Cashflow ist akzeptabel, wenn Wertsteigerung + Tilgungseffekt kompensieren",
            "Liquiditätsreserve von 3–6 Monatskaltmieten empfohlen",
          ]}
        />

        {/* CTA Box */}
        <div className="bg-gradient-to-br from-[#7099A3]/10 to-[#5d7e87]/10 rounded-xl p-6 mb-10 border border-[#7099A3]/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="font-semibold text-gray-900">Direkt Cashflow berechnen?</p>
              <p className="text-sm text-gray-600">Kostenloser Rechner mit allen relevanten Kennzahlen.</p>
            </div>
            <Link href="/cashflow-rechner" className="px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm">
              Zum Cashflow-Rechner →
            </Link>
          </div>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4">
          
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
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-6 not-prose">
            <p className="text-center">
              <span className="text-sm text-gray-600 block mb-2">Monatlicher Cashflow =</span>
              <span className="text-lg font-bold text-gray-900">
                Kaltmiete − Annuität (Zins + Tilgung) − nicht umlegbares Hausgeld
              </span>
            </p>
          </div>

          <h3>Die Bestandteile im Detail</h3>
          <p>
            Die <strong>Kaltmiete</strong> ist deine monatliche Einnahme. Sie sollte marktgerecht sein – 
            orientiere dich am Mietspiegel der jeweiligen Stadt oder Gemeinde.
          </p>
          <p>
            Die <strong>Annuität</strong> setzt sich zusammen aus Zinsen und Tilgung. Bei einer Finanzierung 
            von 250.000 € mit 3,5% Zins und 2% Tilgung beträgt die monatliche Annuität etwa 1.146 €. 
            Über die Jahre sinkt der Zinsanteil, während der Tilgungsanteil steigt. Mehr dazu in unserem 
            <Link href="/ratgeber/finanzierung" className="text-[#7099A3] hover:underline"> Ratgeber zur Immobilienfinanzierung</Link>.
          </p>
          <p>
            Das <strong>nicht umlegbare Hausgeld</strong> umfasst die Kosten, die du als Eigentümer nicht 
            auf den Mieter umlegen kannst. Dazu gehören die Instandhaltungsrücklage und 
            Verwaltungskosten. Als Faustregel rechnet man mit etwa 25-35% des gesamten Hausgeldes.
          </p>

          <h2>Beispielrechnung: Cashflow einer Eigentumswohnung</h2>
          
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-6 not-prose">
            <p className="text-sm font-bold text-gray-900 mb-4">Beispiel: 2-Zimmer-Wohnung in Leipzig</p>
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
              <div className="flex justify-between text-base"><span className="font-bold text-gray-900">Monatlicher Cashflow:</span><span className="font-bold text-green-600">+30 € / Monat</span></div>
            </div>
          </div>

          <h2>Was ist ein guter Cashflow?</h2>
          <p>
            Grundsätzlich gilt: Ein positiver Cashflow ist besser als ein negativer. Aber wie hoch sollte er sein? 
            In der Praxis orientieren sich viele Investoren an folgenden Richtwerten:
          </p>
          <p>
            In <strong>A-Lagen</strong> (München, Hamburg, Frankfurt) ist es aktuell schwierig, einen positiven Cashflow zu erzielen. 
            Hier investiert man primär wegen der Wertsteigerung. In <strong>B- und C-Lagen</strong> (Leipzig, Dresden, Magdeburg, 
            Chemnitz) sind positive Cashflows von 50-200 € pro Monat und Einheit realistisch.
          </p>

          <h2>Häufige Fehler bei der Cashflow-Berechnung</h2>
          <p>
            Der größte Fehler ist das Vergessen der nicht umlegbaren Kosten. Viele Anfänger rechnen nur 
            Miete minus Kreditrate und vergessen Hausgeld, Instandhaltung und Leerstandsrisiko. 
            Außerdem wird oft die Mieterhöhung über die Zeit nicht berücksichtigt – ein Fehler, 
            der gerade bei langen Haltedauern den Cashflow erheblich beeinflusst.
          </p>

          <h2>Cashflow verbessern: 5 Hebel für Immobilieninvestoren</h2>
          <ul className="space-y-2">
            <li><strong>Kaufpreis verhandeln:</strong> Jeder Euro weniger Kaufpreis senkt die Kreditrate und verbessert den Cashflow.</li>
            <li><strong>Eigenkapital optimieren:</strong> Sondertilgung der Nebenkosten aus Eigenkapital, um den Finanzierungsbedarf zu senken.</li>
            <li><strong>Marktgerechte Miete:</strong> Den lokalen Mietspiegel kennen und anwenden.</li>
            <li><strong>Hausgeld prüfen:</strong> Hohe Verwaltungskosten oder überdimensionierte Rücklagen mindern den Cashflow.</li>
            <li><strong>Zinssatz vergleichen:</strong> Schon 0,3% weniger Zins können den Cashflow um 30-50 € pro Monat verbessern.</li>
          </ul>

          <h2>Cashflow vs. Rendite: Was ist wichtiger?</h2>
          <p>
            Cashflow und Rendite sind verwandte, aber unterschiedliche Kennzahlen. Der Cashflow zeigt den 
            monatlichen Geldfluss, während die Rendite (z.B. IRR) die Gesamtrentabilität über die Haltedauer 
            berechnet. Eine Immobilie kann einen negativen Cashflow haben, aber trotzdem eine gute Rendite 
            erzielen – etwa wenn die Wertsteigerung den negativen monatlichen Cashflow überkompensiert.
          </p>
          <p>
            Für die <strong>Finanzplanung</strong> ist der Cashflow entscheidender, für die <strong>Gesamtbewertung</strong> der 
            Investition eher die <Link href="/ratgeber/irr-erklaert" className="text-[#7099A3] hover:underline">IRR (Internal Rate of Return)</Link>.
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
            <Link href="/ratgeber/irr-erklaert" className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7099A3] transition-colors">
              <p className="font-bold text-gray-900">IRR einfach erklärt →</p>
              <p className="text-sm text-gray-600 mt-1">Was der Internal Rate of Return aussagt und wie du ihn interpretierst</p>
            </Link>
            <Link href="/ratgeber/eigenkapital-immobilie" className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7099A3] transition-colors">
              <p className="font-bold text-gray-900">Eigenkapital für Immobilien →</p>
              <p className="text-sm text-gray-600 mt-1">Wie viel Eigenkapital brauchst du wirklich?</p>
            </Link>
            <Link href="/ratgeber/finanzierung" className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#7099A3] transition-colors">
              <p className="font-bold text-gray-900">Immobilienfinanzierung →</p>
              <p className="text-sm text-gray-600 mt-1">Zinsen, Tilgung, Zinsbindung und Sondertilgung verstehen</p>
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
