import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuickAnswer from '@/components/QuickAnswer';
import RenditerechnerSimple from '@/components/RenditerechnerSimple';

export const metadata: Metadata = {
  title: 'Mietrendite berechnen: Formel, Beispiel & Rechner (2026) | Immo-Rechner.net',
  description:
    'Mietrendite berechnen leicht gemacht: Bruttomietrendite- und Nettomietrendite-Formel mit Rechenbeispielen, Richtwerten für 2026 und kostenlosem Online-Rechner.',
  alternates: { canonical: 'https://immo-rechner.net/ratgeber/mietrendite-berechnen' },
  openGraph: {
    title: 'Mietrendite berechnen: Formel, Beispiel & Rechner (2026)',
    description:
      'Brutto- und Nettomietrendite berechnen: Formeln, Rechenbeispiele und kostenloser Rechner für Kapitalanleger.',
    url: 'https://immo-rechner.net/ratgeber/mietrendite-berechnen',
    siteName: 'Immo-Rechner.net',
    locale: 'de_DE',
    type: 'article',
    images: [
      {
        url: '/api/og?title=Mietrendite+berechnen&subtitle=Formel%2C+Beispiel+%26+Rechner+2026',
        width: 1200,
        height: 630,
        alt: 'Mietrendite berechnen: Formel und Beispiel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mietrendite berechnen: Formel, Beispiel & Rechner (2026)',
    description: 'Brutto- und Nettomietrendite Formel mit Rechenbeispielen und kostenlosem Rechner.',
    images: ['/api/og?title=Mietrendite+berechnen&subtitle=Formel%2C+Beispiel+%26+Rechner+2026'],
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://immo-rechner.net/ratgeber/mietrendite-berechnen#article',
      headline: 'Mietrendite berechnen: Formel, Beispiel & kostenloser Rechner (2026)',
      description:
        'Bruttomietrendite und Nettomietrendite berechnen: Formeln, Rechenbeispiele und Richtwerte für Kapitalanleger in Deutschland.',
      datePublished: '2026-03-03',
      dateModified: '2026-03-03',
      wordCount: 1500,
      inLanguage: 'de',
      author: {
        '@type': 'Organization',
        name: 'Immobilien Rechner',
        url: 'https://immo-rechner.net',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Immobilien Rechner',
        logo: { '@type': 'ImageObject', url: 'https://immo-rechner.net/favicon.svg' },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://immo-rechner.net/ratgeber/mietrendite-berechnen',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://immo-rechner.net' },
        { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://immo-rechner.net/ratgeber' },
        { '@type': 'ListItem', position: 3, name: 'Mietrendite berechnen', item: 'https://immo-rechner.net/ratgeber/mietrendite-berechnen' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie berechne ich die Mietrendite einer Immobilie?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Bruttomietrendite berechnet sich als: (Jahreskaltmiete ÷ Kaufpreis) × 100. Beispiel: 8.400 € Jahreskaltmiete ÷ 200.000 € Kaufpreis × 100 = 4,2% Bruttomietrendite. Für die Nettomietrendite zieht man nicht umlegbare Kosten ab und rechnet Kaufnebenkosten hinzu.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist eine gute Mietrendite bei Immobilien?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Als Richtwert gilt: Unter 3% Bruttomietrendite ist ein positiver Cashflow kaum möglich. 4–5% ist solide für B-Lagen wie Leipzig oder Hannover. Über 6% ist möglich in C/D-Lagen, geht aber mit höherem Risiko einher. Eine gute Mietrendite allein reicht nicht — der IRR (Gesamtrendite) ist aussagekräftiger.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist der Unterschied zwischen Brutto- und Nettomietrendite?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Bruttomietrendite bezieht sich auf die Jahreskaltmiete und den reinen Kaufpreis — ohne jegliche Kosten. Die Nettomietrendite zieht nicht umlegbare Bewirtschaftungskosten (Verwaltung, Instandhaltung) von der Miete ab und addiert die Kaufnebenkosten (Notar, Grunderwerbsteuer, Makler) zum Kaufpreis. Die Nettomietrendite liegt typisch 1–2 Prozentpunkte unter der Bruttomietrendite.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist der Kaufpreisfaktor und wie hängt er mit der Mietrendite zusammen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Der Kaufpreisfaktor (auch Mietpreismultiplikator) ist der Kehrwert der Bruttomietrendite: Kaufpreis ÷ Jahreskaltmiete. Ein Kaufpreisfaktor von 20 entspricht einer Bruttomietrendite von 5%, ein Faktor von 25 entspricht 4%. Je niedriger der Faktor, desto höher die Mietrendite.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Kosten muss ich für die Nettomietrendite abziehen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Für die Nettomietrendite ziehst du von der Jahreskaltmiete ab: nicht umlegbares Hausgeld (Verwaltungskosten, Instandhaltungsrücklage), Mietausfallwagnis (ca. 2–3% der Jahresmiete) und ggf. Verwaltungskosten für externe Verwaltung. Zum Kaufpreis addierst du die Kaufnebenkosten: Grunderwerbsteuer (3,5–6,5% je Bundesland), Notar und Grundbuch (ca. 2%), Maklerprovision (0–3,57%).',
          },
        },
      ],
    },
  ],
};

export default function MietrenditeBerechnenPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLdData} />
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:text-[#7099A3]">Startseite</Link></li>
            <li aria-hidden="true"> / </li>
            <li><Link href="/ratgeber" className="hover:text-[#7099A3]">Ratgeber</Link></li>
            <li aria-hidden="true"> / </li>
            <li className="text-gray-800" aria-current="page">Mietrendite berechnen</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Mietrendite berechnen: Formel, Beispiel &amp; kostenloser Rechner (2026)
        </h1>

        <p className="text-gray-600 leading-relaxed mb-2">
          Die Mietrendite ist die wichtigste Kennzahl beim ersten Blick auf eine Immobilie als Kapitalanlage. Sie sagt dir, wie viel Prozent des eingesetzten Kapitals du jährlich als Mieteinnahmen zurückbekommst. Aber es gibt zwei Varianten — Brutto und Netto — und viele Investoren verwechseln sie oder rechnen sie falsch. Dieser Ratgeber erklärt beide Formeln, zeigt dir konkrete Rechenbeispiele und gibt dir die Richtwerte, die du für eine fundierte Kaufentscheidung brauchst.
        </p>

        <QuickAnswer
          question="Wie berechne ich die Mietrendite?"
          answer="Bruttomietrendite = (Jahreskaltmiete ÷ Kaufpreis) × 100. Nettomietrendite = ((Jahreskaltmiete − nicht umlegbare Kosten) ÷ (Kaufpreis + Kaufnebenkosten)) × 100. Typisch liegt die Nettomietrendite 1–2 Prozentpunkte unter der Bruttomietrendite."
          keyFacts={[
            'Bruttomietrendite: schnelle Kennzahl für den Erstvergleich',
            'Nettomietrendite: realistischer nach Kosten und Kaufnebenkosten',
            'Kaufpreisfaktor = Kaufpreis ÷ Jahreskaltmiete (Kehrwert der Bruttomietrendite)',
            'Richtwert 2026: unter 3% = kritisch, 4–5% = solide (B-Lage), über 6% = möglich in C/D-Lagen',
          ]}
        />

        {/* Section 1: Bruttomietrendite */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Bruttomietrendite: Formel und Rechenbeispiel
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Die <Link href="/lexikon/bruttomietrendite" className="text-[#7099A3] hover:underline">Bruttomietrendite</Link> ist die einfachste Form der Mietrendite. Sie berücksichtigt ausschließlich die Jahreskaltmiete und den Kaufpreis — ohne Kosten, ohne Kaufnebenkosten.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-5">
          <div className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide">Formel Bruttomietrendite</div>
          <div className="font-mono text-lg text-[#7099A3] font-bold mb-3">
            (Jahreskaltmiete ÷ Kaufpreis) × 100
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <div className="font-medium text-gray-700 mb-2">Rechenbeispiel:</div>
            <div className="flex justify-between"><span>Kaufpreis der Wohnung</span><span className="font-medium">200.000 €</span></div>
            <div className="flex justify-between"><span>Kaltmiete monatlich</span><span className="font-medium">700 €</span></div>
            <div className="flex justify-between"><span>Jahreskaltmiete (× 12)</span><span className="font-medium">8.400 €</span></div>
            <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between font-bold text-[#7099A3]">
              <span>Bruttomietrendite</span><span>(8.400 ÷ 200.000) × 100 = 4,2%</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Die Bruttomietrendite eignet sich perfekt für den schnellen Vergleich mehrerer Objekte. Wenn du 20 Exposés prüfst, willst du nicht jedes Mal alle Kosten durchrechnen — die Bruttomietrendite gibt dir in Sekunden einen ersten Eindruck, ob das Objekt überhaupt interessant ist.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Wichtig:</strong> Makler und Verkäufer nennen fast immer die Bruttomietrendite — und zwar bezogen auf den Kaufpreis ohne Nebenkosten. Das klingt besser als es ist. Für eine echte Kaufentscheidung brauchst du die Nettomietrendite.
        </p>

        {/* Section 2: Nettomietrendite */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Nettomietrendite: Formel mit allen Kosten
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Die Nettomietrendite ist ehrlicher. Sie zieht die nicht auf den Mieter umlegbaren Kosten von der Miete ab und addiert die Kaufnebenkosten zum Kaufpreis. Das Ergebnis zeigt dir, was nach allen Kosten wirklich übrig bleibt.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-5">
          <div className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide">Formel Nettomietrendite</div>
          <div className="font-mono text-base text-[#7099A3] font-bold mb-3 leading-relaxed">
            ((Jahreskaltmiete − nicht umlegbare Kosten) ÷ (Kaufpreis + Kaufnebenkosten)) × 100
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <div className="font-medium text-gray-700 mb-2">Rechenbeispiel (gleiche Wohnung wie oben):</div>
            <div className="flex justify-between"><span>Jahreskaltmiete</span><span className="font-medium">8.400 €</span></div>
            <div className="flex justify-between text-red-600"><span>− Nicht umlegbares Hausgeld (2 €/m²/Mon. × 60 m²)</span><span className="font-medium">−1.440 €</span></div>
            <div className="flex justify-between text-red-600"><span>− Mietausfallwagnis (2% der Jahreskaltmiete)</span><span className="font-medium">−168 €</span></div>
            <div className="flex justify-between font-medium border-t border-gray-300 mt-1 pt-1"><span>Nettomieteinnahmen</span><span>6.792 €</span></div>
            <div className="mt-3 flex justify-between"><span>Kaufpreis</span><span className="font-medium">200.000 €</span></div>
            <div className="flex justify-between text-red-600"><span>+ Kaufnebenkosten (ca. 12 %: GrESt, Notar, Makler)</span><span className="font-medium">+24.000 €</span></div>
            <div className="flex justify-between font-medium border-t border-gray-300 mt-1 pt-1"><span>Gesamtinvestition</span><span>224.000 €</span></div>
            <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between font-bold text-[#7099A3]">
              <span>Nettomietrendite</span><span>(6.792 ÷ 224.000) × 100 = 3,03%</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Im Beispiel sinkt die Rendite von 4,2% (brutto) auf 3,0% (netto) — ein Unterschied von 1,2 Prozentpunkten. Das ist typisch. Rechne bei deiner Analyse immer mit diesem Abstand, damit dich keine bösen Überraschungen erwarten.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
          <strong>Was sind nicht umlegbare Kosten?</strong> Das Hausgeld einer Eigentumswohnung enthält zwei Teile: umlegbare Betriebskosten (Heizung, Wasser, Gebäudeversicherung — bezahlt der Mieter) und nicht umlegbare Kosten (Verwaltungsgebühr, Instandhaltungsrücklage, Kontoführung — trägst du als Eigentümer). Typisch sind 2–4 €/m²/Monat nicht umlegbar.
        </div>

        {/* Rechner */}
        <div className="my-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Mietrendite jetzt berechnen</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Trage Kaufpreis und Kaltmiete ein — der Rechner ermittelt sofort Brutto- und Nettomietrendite sowie den Kaufpreisfaktor.
          </p>
          <RenditerechnerSimple />
          <p className="text-sm text-gray-500 mt-4">
            Für eine vollständige Analyse inkl. Cashflow, Tilgungsplan und IRR:{' '}
            <Link href="/cashflow-rechner" className="text-[#7099A3] hover:underline font-medium">Zum Cashflow-Rechner →</Link>
          </p>
        </div>

        {/* Section 3: Kaufpreisfaktor */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Kaufpreisfaktor: die Kurzformel für schnelle Entscheidungen
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Der <Link href="/lexikon/kaufpreisfaktor" className="text-[#7099A3] hover:underline">Kaufpreisfaktor</Link> (auch Mietpreismultiplikator genannt) ist der Kehrwert der Bruttomietrendite und zeigt, in wie vielen Jahren du den Kaufpreis allein durch Mieteinnahmen zurückverdienen würdest — ohne Zinsen und Kosten.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-5">
          <div className="font-semibold text-gray-800 mb-2 text-sm uppercase tracking-wide">Formel Kaufpreisfaktor</div>
          <div className="font-mono text-lg text-[#7099A3] font-bold mb-3">
            Kaufpreis ÷ Jahreskaltmiete
          </div>
          <div className="text-sm text-gray-600">
            Beispiel: 200.000 € ÷ 8.400 € = <span className="font-bold text-gray-800">Faktor 23,8</span>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Der Kaufpreisfaktor und die Bruttomietrendite sagen dasselbe — nur in verschiedener Sprache. Erfahrene Investoren nutzen meist den Faktor für das schnelle mentale Kalkül: „Unter 20 kaufe ich, über 30 wird es schwierig."
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-700">Kaufpreisfaktor</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Bruttomietrendite</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Einschätzung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-800">Unter 15×</td>
                <td className="px-4 py-3 text-gray-600">über 6,7%</td>
                <td className="px-4 py-3 text-green-700 font-medium">Sehr günstig — C/D-Lage, prüfe Risiken</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">15–20×</td>
                <td className="px-4 py-3 text-gray-600">5,0–6,7%</td>
                <td className="px-4 py-3 text-green-600 font-medium">Günstig — B/C-Lage, Cashflow möglich</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-800">20–25×</td>
                <td className="px-4 py-3 text-gray-600">4,0–5,0%</td>
                <td className="px-4 py-3 text-amber-600 font-medium">Solide — B-Lage, neutraler Cashflow</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">25–30×</td>
                <td className="px-4 py-3 text-gray-600">3,3–4,0%</td>
                <td className="px-4 py-3 text-amber-700 font-medium">Teuer — A/B-Lage, negativer Cashflow wahrscheinlich</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-800">Über 30×</td>
                <td className="px-4 py-3 text-gray-600">unter 3,3%</td>
                <td className="px-4 py-3 text-red-600 font-medium">Sehr teuer — nur mit starker Wertsteigerung interessant</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-2">Richtwerte 2026. Einzelobjekte können erheblich abweichen.</p>
        </div>

        {/* Section 4: Brutto vs. Netto */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Brutto vs. Netto: Wann welche Kennzahl verwenden?
        </h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-700">Kennzahl</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Vorteile</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Nachteile</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Wofür geeignet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-800">Bruttomietrendite</td>
                <td className="px-4 py-3 text-gray-600">Schnell berechenbar, wenig Datenbedarf</td>
                <td className="px-4 py-3 text-gray-600">Ignoriert alle Kosten und Nebenkosten</td>
                <td className="px-4 py-3 text-gray-600">Erstvergleich von Objekten</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">Nettomietrendite</td>
                <td className="px-4 py-3 text-gray-600">Realistische Rendite nach Kosten</td>
                <td className="px-4 py-3 text-gray-600">Mehr Datenbedarf, ohne Finanzierungseffekt</td>
                <td className="px-4 py-3 text-gray-600">Fundierte Kaufentscheidung</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-800">IRR</td>
                <td className="px-4 py-3 text-gray-600">Berücksichtigt Wertsteigerung, Tilgung, Steuer</td>
                <td className="px-4 py-3 text-gray-600">Komplex, braucht viele Annahmen</td>
                <td className="px-4 py-3 text-gray-600">Gesamtrendite über Haltedauer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          In der Praxis verwendest du alle drei: Bruttomietrendite als Filter im ersten Schritt, Nettomietrendite für die ernsthafte Prüfung, und den <Link href="/irr-rechner" className="text-[#7099A3] hover:underline">IRR</Link> für die finale Investitionsentscheidung.
        </p>

        {/* Section 5: Richtwerte */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Gute vs. schlechte Mietrendite: Richtwerte 2026
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Was eine „gute" Mietrendite ist, hängt immer von deiner Strategie, deinem Finanzierungszins und dem Markt ab. Als allgemeine Orientierung für 2026:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex gap-3">
            <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
            <div>
              <span className="font-medium text-gray-800">Unter 3% Bruttomietrendite:</span>
              <span className="text-gray-600"> Bei einem Zinssatz von 3,5–4% ist ein positiver Cashflow rechnerisch nicht möglich. Das Investment lebt ausschließlich von der Wertsteigerung — ein erhebliches Wettrisiko.</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-500 font-bold shrink-0 mt-0.5">~</span>
            <div>
              <span className="font-medium text-gray-800">3–4% Bruttomietrendite:</span>
              <span className="text-gray-600"> Typisch für A-Lagen. Negativer Cashflow ist die Norm, aber bei stabiler Wertsteigerung kann der IRR trotzdem attraktiv sein. Geeignet für Investoren mit hohem Eigenkapital oder strategischem Lage-Fokus.</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-green-500 font-bold shrink-0 mt-0.5">✓</span>
            <div>
              <span className="font-medium text-gray-800">4–5,5% Bruttomietrendite:</span>
              <span className="text-gray-600"> Das Ziel für die meisten Kapitalanleger. Neutraler bis leicht positiver Cashflow ist möglich. Typisch in B-Städten wie Leipzig, Hannover, Nürnberg oder Dresden. Gutes Verhältnis aus Cashflow und Wertsteigerungspotenzial.</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold shrink-0 mt-0.5">!</span>
            <div>
              <span className="font-medium text-gray-800">Über 6% Bruttomietrendite:</span>
              <span className="text-gray-600"> Möglich in C/D-Lagen. Positiver Cashflow bei normaler Finanzierung. Aber: höheres Leerstandsrisiko, geringeres Wertsteigerungspotenzial, strukturell schwächere Märkte. Gründliche Standortanalyse ist Pflicht.</span>
            </div>
          </li>
        </ul>

        {/* Section 6: 3 Fehler */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Die 3 häufigsten Fehler bei der Renditeberechnung
        </h2>

        <div className="space-y-4 mb-6">
          <div className="border border-red-100 rounded-xl p-5 bg-red-50">
            <div className="font-semibold text-red-800 mb-2">Fehler 1: Kaufnebenkosten vergessen</div>
            <p className="text-sm text-gray-600">
              Wer die Mietrendite auf den Kaufpreis ohne Kaufnebenkosten rechnet, überschätzt die Rendite um rund 1 Prozentpunkt. Bei einem Kaufpreis von 200.000 € und 12% Nebenkosten musst du 224.000 € als Gesamtinvestition ansetzen — nicht 200.000 €.
            </p>
          </div>
          <div className="border border-red-100 rounded-xl p-5 bg-red-50">
            <div className="font-semibold text-red-800 mb-2">Fehler 2: Gesamtes Hausgeld als Einnahme rechnen</div>
            <p className="text-sm text-gray-600">
              Das Hausgeld enthält einen umlegbaren Teil (zahlt der Mieter) und einen nicht umlegbaren Teil (trägst du). Wer nur die Nettokaltmiete als Einnahme hat, aber das komplette Hausgeld des Mieters als „Einnahme" wertet, überschätzt die tatsächlichen Mittel erheblich. Nur die Kaltmiete zählt als deine Einnahme.
            </p>
          </div>
          <div className="border border-red-100 rounded-xl p-5 bg-red-50">
            <div className="font-semibold text-red-800 mb-2">Fehler 3: Soll-Miete statt tatsächlicher Miete</div>
            <p className="text-sm text-gray-600">
              Manche Exposés werben mit der theoretisch erzielbaren Marktmiete — nicht mit der tatsächlich vereinbarten. Bei einer bewohnten Wohnung mit laufendem Mietvertrag ist ausschließlich die vertraglich vereinbarte Kaltmiete relevant. Erst nach einer Mieterhöhung oder einem Mieterwechsel gilt ggf. die Marktmiete.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#7099A3]/10 to-[#5d7e87]/10 rounded-2xl p-6 my-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-gray-900 mb-1">Mietrendite für dein Objekt berechnen</div>
              <div className="text-sm text-gray-600">Kaufpreis, Kaltmiete und Nebenkosten eingeben — sofort Brutto- und Nettomietrendite sowie Kaufpreisfaktor.</div>
            </div>
            <Link
              href="/rendite-rechner"
              className="px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm whitespace-nowrap shrink-0"
            >
              Zum Rendite-Rechner →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
          Häufige Fragen zur Mietrendite
        </h2>
        <div className="space-y-5">
          {[
            {
              q: 'Wie berechne ich die Mietrendite einer Immobilie?',
              a: 'Bruttomietrendite: (Jahreskaltmiete ÷ Kaufpreis) × 100. Nettomietrendite: ((Jahreskaltmiete − nicht umlegbare Kosten) ÷ (Kaufpreis + Kaufnebenkosten)) × 100. Die Nettomietrendite liegt typisch 1–2 Prozentpunkte unter der Bruttomietrendite.',
            },
            {
              q: 'Was ist eine gute Mietrendite bei Immobilien?',
              a: 'Als Richtwert gilt: Unter 3% ist ein positiver Cashflow kaum möglich. 4–5% ist solide für B-Lagen wie Leipzig oder Hannover. Über 6% ist möglich in C/D-Lagen — mit entsprechend höherem Risiko.',
            },
            {
              q: 'Was ist der Kaufpreisfaktor und wie hängt er mit der Mietrendite zusammen?',
              a: 'Der Kaufpreisfaktor ist der Kehrwert der Bruttomietrendite: Kaufpreis ÷ Jahreskaltmiete. Faktor 20 = 5% Bruttomietrendite, Faktor 25 = 4%. Je niedriger der Faktor, desto höher die Rendite.',
            },
            {
              q: 'Kann ich die Mietrendite erhöhen, ohne den Preis zu senken?',
              a: 'Ja — durch Mieterhöhung auf Marktniveau (bei Neuvermietung oder nach § 558 BGB), durch Reduzierung nicht umlegbarer Kosten (günstigere Hausverwaltung, geringeres Hausgeld) oder durch Aufteilung und Modernisierung zur Wertsteigerung der Miete.',
            },
            {
              q: 'Ist die Mietrendite oder der IRR wichtiger?',
              a: 'Für die erste Einschätzung ist die Mietrendite schneller. Für die finale Kaufentscheidung ist der IRR entscheidender, weil er Wertsteigerung, Tilgungseffekt, Steuerersparnis und den steuerfreien Verkauf nach 10 Jahren berücksichtigt. Beide Kennzahlen ergänzen sich.',
            },
          ].map(({ q, a }) => (
            <details key={q} className="border border-gray-200 rounded-xl p-4 group">
              <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center gap-2">
                {q}
                <span className="text-gray-400 text-lg shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>

        {/* Internal links */}
        <div className="mt-12 grid sm:grid-cols-2 gap-3">
          <Link href="/rendite-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900 text-sm">Rendite Rechner →</div>
            <div className="text-xs text-gray-500 mt-0.5">Brutto- &amp; Nettomietrendite berechnen</div>
          </Link>
          <Link href="/rechner/bruttomietrendite-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900 text-sm">Bruttomietrendite Rechner →</div>
            <div className="text-xs text-gray-500 mt-0.5">Schnellrechner für den Erstvergleich</div>
          </Link>
          <Link href="/lexikon/kaufpreisfaktor" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900 text-sm">Lexikon: Kaufpreisfaktor →</div>
            <div className="text-xs text-gray-500 mt-0.5">Definition, Formel &amp; Richtwerte</div>
          </Link>
          <Link href="/ratgeber/rendite-immobilien-realistisch" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900 text-sm">Welche Rendite ist realistisch? →</div>
            <div className="text-xs text-gray-500 mt-0.5">Richtwerte 2026 nach A/B/C-Lage</div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
