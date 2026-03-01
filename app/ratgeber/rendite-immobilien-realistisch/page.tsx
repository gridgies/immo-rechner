import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuickAnswer from '@/components/QuickAnswer';
import RenditerechnerSimple from '@/components/RenditerechnerSimple';

export const metadata: Metadata = {
  title: 'Welche Rendite ist bei Immobilien realistisch? (2026) | Immo-Rechner.net',
  description:
    'Welche Rendite kannst du bei Immobilien realistisch erwarten? Bruttomietrendite, Nettomietrendite und IRR für A-, B- und C-Lagen erklärt – mit Rechenbeispielen für 2026.',
  alternates: { canonical: 'https://immo-rechner.net/ratgeber/rendite-immobilien-realistisch' },
  openGraph: {
    title: 'Welche Rendite ist bei Immobilien realistisch? (2026)',
    description:
      'Bruttomietrendite, Nettomietrendite und IRR für A-, B- und C-Lagen. Mit Rechenbeispiel Leipzig vs. München.',
    url: 'https://immo-rechner.net/ratgeber/rendite-immobilien-realistisch',
    siteName: 'Immo-Rechner.net',
    locale: 'de_DE',
    type: 'article',
    images: [
      {
        url: '/api/og?title=Immobilien+Rendite+realistisch&subtitle=Richtwerte+2026+f%C3%BCr+A%2C+B+%26+C-Lagen',
        width: 1200,
        height: 630,
        alt: 'Welche Rendite ist bei Immobilien realistisch?',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welche Rendite ist bei Immobilien realistisch? (2026)',
    description: 'Bruttomietrendite, Nettomietrendite und IRR – Richtwerte für alle Lagentypen mit Rechenbeispielen.',
    images: ['/api/og?title=Immobilien+Rendite+realistisch&subtitle=Richtwerte+2026+f%C3%BCr+A%2C+B+%26+C-Lagen'],
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://immo-rechner.net/ratgeber/rendite-immobilien-realistisch#article',
      headline: 'Welche Rendite ist bei Immobilien realistisch? (2026)',
      description:
        'Bruttomietrendite, Nettomietrendite und IRR für A-, B- und C-Lagen erklärt – mit Rechenbeispielen.',
      datePublished: '2026-03-01',
      dateModified: '2026-03-01',
      wordCount: 1800,
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
        '@id': 'https://immo-rechner.net/ratgeber/rendite-immobilien-realistisch',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://immo-rechner.net' },
        { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://immo-rechner.net/ratgeber/immobilie-als-kapitalanlage' },
        { '@type': 'ListItem', position: 3, name: 'Rendite realistisch', item: 'https://immo-rechner.net/ratgeber/rendite-immobilien-realistisch' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Welche Rendite ist bei Immobilien realistisch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine Bruttomietrendite von 4–5% gilt in B-Lagen (Leipzig, Hannover, Nürnberg) als realistisch. In A-Lagen wie München oder Frankfurt sind nur 2–3% Brutto erreichbar. Als Gesamtrendite (IRR inkl. Wertsteigerung und Steuereffekte) gelten 6–10% p.a. als guter Richtwert.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist der Unterschied zwischen Brutto- und Nettomietrendite?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Bruttomietrendite berechnet sich als Jahreskaltmiete geteilt durch den Kaufpreis – ohne jede Kosten. Die Nettomietrendite zieht nicht umlegbare Betriebskosten ab und addiert die Kaufnebenkosten zum Kaufpreis. Typisch liegt die Nettomietrendite 0,5–1,5 Prozentpunkte unter der Bruttomietrendite.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ab welcher Mietrendite lohnt sich eine Immobilie als Kapitalanlage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Als Faustregel gilt: Unter 3% Bruttomietrendite ist ein positiver Cashflow nach Finanzierungskosten kaum möglich. Ab 4,5–5% Bruttomietrendite wird ein neutraler bis leicht positiver Cashflow realistisch. Die reine Mietrendite sollte aber nicht das einzige Kriterium sein – der IRR (Gesamtrendite) ist aussagekräftiger.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist ein guter IRR bei einer Immobilieninvestition?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ein IRR von 6–8% p.a. gilt als solide Immobilieninvestition. Ab 10% p.a. ist die Investition sehr attraktiv. Unter 4% p.a. solltest du die Investition kritisch hinterfragen – dann schlägt ein breit gestreuter ETF die Immobilie wahrscheinlich.',
          },
        },
        {
          '@type': 'Question',
          name: 'Warum weicht die tatsächliche Rendite oft von der Makler-Angabe ab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Makler nennen meist die Bruttomietrendite ohne Kaufnebenkosten (10–15%) und ohne laufende Kosten (Hausgeld, Verwaltung, Instandhaltung). Die reale Nettomietrendite liegt dadurch oft 1–2 Prozentpunkte niedriger. Rechne immer selbst mit allen Kosten nach.',
          },
        },
      ],
    },
  ],
};

export default function RenditeRealistischPage() {
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
            <li><Link href="/ratgeber/immobilie-als-kapitalanlage" className="hover:text-[#7099A3]">Ratgeber</Link></li>
            <li aria-hidden="true"> / </li>
            <li className="text-gray-800" aria-current="page">Rendite realistisch</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Welche Rendite ist bei Immobilien realistisch? (2026)
        </h1>

        <p className="text-gray-600 leading-relaxed mb-2">
          Ob eine Immobilie als Kapitalanlage taugt, hängt maßgeblich von der erzielbaren Rendite ab. Aber welche Rendite ist 2026 in Deutschland wirklich realistisch — und welche Kennzahl ist überhaupt die richtige? Dieser Ratgeber gibt dir konkrete Richtwerte nach Lage, erklärt die drei wichtigsten Renditekennzahlen und zeigt an einem Rechenbeispiel, warum eine 4%-Bruttomietrendite in Leipzig und eine 2,5%-Bruttomietrendite in München für sehr unterschiedliche Investitionen stehen können.
        </p>

        <QuickAnswer
          question="Welche Rendite ist bei Immobilien realistisch?"
          answer="In B-Lagen (Leipzig, Hannover, Nürnberg) sind 4–5% Bruttomietrendite realistisch. In A-Lagen (München, Frankfurt, Hamburg) nur 2–3%. Als Gesamtrendite (IRR) gelten 6–10% p.a. als guter Richtwert — abhängig von Wertsteigerung, Finanzierung und Steuereffekten."
          keyFacts={[
            'A-Lagen (München, Frankfurt): 2–3% Bruttomietrendite — Fokus auf Wertsteigerung',
            'B-Lagen (Leipzig, Hannover, Nürnberg): 4–5% Bruttomietrendite — Cashflow möglich',
            'C/D-Lagen (Chemnitz, Halle): 6–8% Bruttomietrendite — höheres Leerstandsrisiko',
            'IRR (Gesamtrendite) 6–10% p.a. = solide Immobilieninvestition',
          ]}
        />

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Bruttomietrendite, Nettomietrendite und IRR — welche Kennzahl ist die richtige?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Wenn Makler von „5% Rendite" sprechen, meinen sie fast immer die <Link href="/lexikon/bruttomietrendite" className="text-[#7099A3] hover:underline">Bruttomietrendite</Link> — die einfachste, aber auch unvollständigste Kennzahl. Für eine fundierte Investitionsentscheidung brauchst du alle drei:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-700">Kennzahl</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Formel</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Berücksichtigt</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Wofür geeignet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-800">Bruttomietrendite</td>
                <td className="px-4 py-3 text-gray-600 font-mono text-xs">(Jahreskaltmiete ÷ Kaufpreis) × 100</td>
                <td className="px-4 py-3 text-gray-600">Kaltmiete, Kaufpreis</td>
                <td className="px-4 py-3 text-gray-600">Schnellvergleich mehrerer Objekte</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">Nettomietrendite</td>
                <td className="px-4 py-3 text-gray-600 font-mono text-xs">(Nettomiete ÷ Gesamtinvestition) × 100</td>
                <td className="px-4 py-3 text-gray-600">+ Bewirtschaftungskosten, Kaufnebenkosten</td>
                <td className="px-4 py-3 text-gray-600">Realistischer Rendite­vergleich</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-800">IRR</td>
                <td className="px-4 py-3 text-gray-600 font-mono text-xs">Interner Zinsfuß aller Zahlungsströme</td>
                <td className="px-4 py-3 text-gray-600">+ Wertsteigerung, Tilgung, Steuer, Verkauf</td>
                <td className="px-4 py-3 text-gray-600">Gesamtrendite über Haltedauer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Die Bruttomietrendite eignet sich für den ersten Überblick. Die Nettomietrendite zeigt, was nach laufenden Kosten wirklich übrig bleibt. Der <Link href="/lexikon/irr" className="text-[#7099A3] hover:underline">IRR (Internal Rate of Return)</Link> ist die ehrlichste Kennzahl — er berücksichtigt die gesamte Haltedauer inklusive Wertsteigerung, Tilgungseffekt und steuerfreiem Verkauf nach 10 Jahren.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Aktuelle Richtwerte 2026 nach Lage
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Die erzielbare Rendite variiert in Deutschland stark nach Lagetyp. Das ist kein Zufall: Hohe Kaufpreise in begehrten Städten drücken die Mietrendite, während die Wertsteigerungserwartung das Preisniveau oben hält.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-700">Lagetyp</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Beispielstädte</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Bruttomietrendite</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Cashflow</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Investitionsfokus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-red-700">A-Lage</td>
                <td className="px-4 py-3 text-gray-600">München, Frankfurt, Hamburg, Berlin</td>
                <td className="px-4 py-3 font-semibold text-gray-800">2,0–3,5%</td>
                <td className="px-4 py-3 text-red-600">Meist negativ</td>
                <td className="px-4 py-3 text-gray-600">Wertsteigerung</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-amber-700">B-Lage</td>
                <td className="px-4 py-3 text-gray-600">Leipzig, Hannover, Nürnberg, Dresden</td>
                <td className="px-4 py-3 font-semibold text-gray-800">4,0–5,5%</td>
                <td className="px-4 py-3 text-amber-600">Neutral bis +</td>
                <td className="px-4 py-3 text-gray-600">Cashflow + Wertsteigerung</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-green-700">C/D-Lage</td>
                <td className="px-4 py-3 text-gray-600">Chemnitz, Halle, Magdeburg</td>
                <td className="px-4 py-3 font-semibold text-gray-800">5,5–8,0%</td>
                <td className="px-4 py-3 text-green-600">Positiv</td>
                <td className="px-4 py-3 text-gray-600">Cashflow (höheres Risiko)</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-2">Richtwerte 2026. Einzelobjekte können erheblich abweichen.</p>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Wichtig: Höhere Bruttomietrenditen in C/D-Lagen gehen typischerweise mit höherem Leerstandsrisiko, stärkerem Bevölkerungsrückgang und schwächerer Wertsteigerung einher. Eine 7%-Bruttomietrendite in Halle ist nicht automatisch besser als eine 4%-Rendite in Leipzig — das hängt von deiner Gesamtstrategie ab.
        </p>

        {/* Rechner */}
        <div className="my-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Rendite für dein Objekt berechnen</h2>
          <p className="text-gray-600 mb-4 text-sm">Trage Kaufpreis und Kaltmiete ein — der Rechner ermittelt sofort Brutto- und Nettomietrendite sowie den Mietmultiplikator.</p>
          <RenditerechnerSimple />
          <p className="text-sm text-gray-500 mt-4">
            Für eine vollständige Analyse inkl. Cashflow, IRR und Vermögenszuwachs:{' '}
            <Link href="/cashflow-rechner" className="text-[#7099A3] hover:underline font-medium">Zum Cashflow-Rechner →</Link>
          </p>
        </div>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Rechenbeispiel: 200.000 €-Wohnung in Leipzig vs. München
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Zahlen machen den Unterschied zwischen Lagetypen greifbarer. Vergleichen wir zwei typische 60-m²-Wohnungen:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="border border-amber-200 rounded-xl p-5 bg-amber-50">
            <div className="font-semibold text-amber-800 mb-3">B-Lage: Leipzig</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Kaufpreis</span><span className="font-medium">200.000 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Kaufnebenkosten (~12%)</span><span className="font-medium">24.000 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Gesamtinvestition</span><span className="font-medium">224.000 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Kaltmiete/Monat</span><span className="font-medium">700 €</span></div>
              <div className="border-t border-amber-200 pt-2 mt-2">
                <div className="flex justify-between"><span className="text-gray-600">Bruttomietrendite</span><span className="font-bold text-amber-700">4,2%</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Nettomietrendite (ca.)</span><span className="font-bold text-amber-700">~3,0%</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Mietmultiplikator</span><span className="font-bold text-amber-700">23,8x</span></div>
              </div>
            </div>
          </div>

          <div className="border border-red-200 rounded-xl p-5 bg-red-50">
            <div className="font-semibold text-red-800 mb-3">A-Lage: München</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Kaufpreis</span><span className="font-medium">520.000 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Kaufnebenkosten (~10%)</span><span className="font-medium">52.000 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Gesamtinvestition</span><span className="font-medium">572.000 €</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Kaltmiete/Monat</span><span className="font-medium">1.250 €</span></div>
              <div className="border-t border-red-200 pt-2 mt-2">
                <div className="flex justify-between"><span className="text-gray-600">Bruttomietrendite</span><span className="font-bold text-red-700">2,9%</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Nettomietrendite (ca.)</span><span className="font-bold text-red-700">~1,8%</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Mietmultiplikator</span><span className="font-bold text-red-700">34,7x</span></div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Das Münchner Objekt hat eine deutlich niedrigere Mietrendite — trotzdem kann es langfristig eine bessere Investition sein, wenn die Wertsteigerung stark genug ausfällt. Genau das erfasst der IRR: Er bewertet beide Szenarien über die gesamte Haltedauer.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Warum Rendite ≠ Rendite: Was Makler oft verschweigen
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Die häufigsten Fallen bei Renditeangaben:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex gap-3">
            <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
            <div>
              <span className="font-medium text-gray-800">Kaufnebenkosten fehlen.</span>
              <span className="text-gray-600"> Die Bruttomietrendite bezieht sich auf den Kaufpreis, nicht auf die Gesamtinvestition. Mit 12% Kaufnebenkosten sinkt die effektive Rendite sofort um rund 1 Prozentpunkt.</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
            <div>
              <span className="font-medium text-gray-800">Hausgeld wird ignoriert.</span>
              <span className="text-gray-600"> Typisches nicht umlegbares Hausgeld (Verwaltung, Instandhaltungsrücklage) liegt bei 2–4 €/m²/Monat — das sind bei einer 60-m²-Wohnung 120–240 € monatlich weniger Nettomieteinnahmen.</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
            <div>
              <span className="font-medium text-gray-800">Kein Mietausfallrisiko eingerechnet.</span>
              <span className="text-gray-600"> Realistisch solltest du 2–5% der Jahresmiete für Leerstand und Mietausfall einplanen. Über 10 Jahre entspricht das mindestens 2–6 Monatsmieten.</span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
            <div>
              <span className="font-medium text-gray-800">Soll-Miete statt Ist-Miete.</span>
              <span className="text-gray-600"> Manche Exposés werben mit der theoretisch möglichen Marktmiete, nicht mit der tatsächlich vereinbarten Miete. Immer den aktuellen Mietvertrag anfordern.</span>
            </div>
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Rendite vs. Wertsteigerung: Gesamtrendite (IRR) richtig berechnen
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Eine Immobilie mit 3% Nettomietrendite kann trotzdem eine hervorragende Investition sein — wenn die Wertsteigerung stimmt. Genau das erfasst der <Link href="/irr-rechner" className="text-[#7099A3] hover:underline">IRR (Internal Rate of Return)</Link>: die Gesamtrendite auf das eingesetzte Eigenkapital über die gesamte Haltedauer.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Der IRR berücksichtigt alle Faktoren, die eine reine Mietrendite ausblendet:
        </p>
        <ul className="space-y-2 mb-6 text-gray-600">
          <li className="flex gap-2"><span className="text-[#7099A3] font-bold shrink-0">→</span><span><strong>Tilgungseffekt:</strong> Jede Tilgungsrate baut Vermögen auf — auch wenn der monatliche Cashflow negativ ist.</span></li>
          <li className="flex gap-2"><span className="text-[#7099A3] font-bold shrink-0">→</span><span><strong>Wertsteigerung:</strong> Selbst 1–2% jährliche Preissteigerung kann den IRR auf das eingesetzte Eigenkapital stark hebeln.</span></li>
          <li className="flex gap-2"><span className="text-[#7099A3] font-bold shrink-0">→</span><span><strong>Steuerfreier Verkauf nach 10 Jahren:</strong> Kursgewinne aus der Wertsteigerung sind nach der <Link href="/lexikon/spekulationsfrist" className="text-[#7099A3] hover:underline">Spekulationsfrist</Link> steuerfrei — ein erheblicher Vorteil gegenüber Aktien.</span></li>
          <li className="flex gap-2"><span className="text-[#7099A3] font-bold shrink-0">→</span><span><strong>AfA-Steuerersparnis:</strong> Die jährliche Abschreibung (2–3% des Gebäudewerts) reduziert die Steuerlast und verbessert den effektiven Cashflow.</span></li>
        </ul>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6 text-sm">
          <div className="font-semibold text-gray-800 mb-2">Beispiel: Leipzig-Wohnung (200.000 €) nach 15 Jahren</div>
          <div className="space-y-1 text-gray-600">
            <div className="flex justify-between"><span>Eigenkapital eingesetzt (20% + Nebenkosten)</span><span className="font-medium">64.000 €</span></div>
            <div className="flex justify-between"><span>Verkaufserlös nach 15 Jahren (2% p.a. Steigerung)</span><span className="font-medium">~270.000 €</span></div>
            <div className="flex justify-between"><span>Restschuld bei Verkauf</span><span className="font-medium">~95.000 €</span></div>
            <div className="flex justify-between"><span>Netto-Verkaufserlös</span><span className="font-medium">~175.000 €</span></div>
            <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between font-bold text-[#7099A3]">
              <span>Geschätzter IRR auf Eigenkapital</span><span>~9–11% p.a.</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">Vereinfachte Modellrechnung. Steuern, Instandhaltung und Mietentwicklung nicht berücksichtigt. Für genaue Berechnung: <Link href="/cashflow-rechner" className="text-[#7099A3] hover:underline">Cashflow-Rechner</Link> verwenden.</p>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Das Rechenbeispiel zeigt: Eine B-Lage-Wohnung mit „nur" 4% Bruttomietrendite kann auf das eingesetzte Eigenkapital einen IRR von 9–11% p.a. erzielen — wenn Wertsteigerung, Finanzierungshebel und Steuerstrategie stimmen.
        </p>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#7099A3]/10 to-[#5d7e87]/10 rounded-2xl p-6 my-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-gray-900 mb-1">IRR für dein konkretes Objekt berechnen</div>
              <div className="text-sm text-gray-600">Cashflow, Vermögenszuwachs und Gesamtrendite über 10–30 Jahre — kostenlos und ohne Anmeldung.</div>
            </div>
            <Link
              href="/irr-rechner"
              className="px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm whitespace-nowrap shrink-0"
            >
              Zum IRR-Rechner →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
          Häufige Fragen zur Immobilienrendite
        </h2>
        <div className="space-y-5">
          {[
            {
              q: 'Welche Rendite ist bei Immobilien realistisch?',
              a: 'In B-Lagen sind 4–5% Bruttomietrendite realistisch, in A-Lagen 2–3%. Als Gesamtrendite (IRR inkl. Wertsteigerung) gelten 6–10% p.a. als guter Richtwert.',
            },
            {
              q: 'Ab welcher Mietrendite lohnt sich eine Immobilie als Kapitalanlage?',
              a: 'Unter 3% Bruttomietrendite ist ein positiver Cashflow nach Finanzierungskosten kaum möglich. Ab 4,5–5% wird ein neutraler bis positiver Cashflow realistisch. Entscheidend ist aber der IRR, nicht allein die Mietrendite.',
            },
            {
              q: 'Was ist der Unterschied zwischen Brutto- und Nettomietrendite?',
              a: 'Die Bruttomietrendite ignoriert Kosten und Kaufnebenkosten. Die Nettomietrendite zieht nicht umlegbare Bewirtschaftungskosten ab und addiert Kaufnebenkosten zum Kaufpreis. Typisch liegt sie 0,5–1,5 Prozentpunkte darunter.',
            },
            {
              q: 'Kann eine Immobilie mit negativem Cashflow trotzdem rentabel sein?',
              a: 'Ja. In A-Lagen ist negativer Cashflow die Norm. Wenn Wertsteigerung und Tilgungseffekt den negativen Cashflow überkompensieren, kann der IRR trotzdem attraktiv sein. Entscheidend ist, ob du die monatliche Unterdeckung dauerhaft tragen kannst.',
            },
            {
              q: 'Wie berechne ich die Gesamtrendite (IRR) einer Immobilie?',
              a: 'Der IRR berücksichtigt alle Zahlungsströme: Eigenkapitaleinsatz, monatliche Cashflows, Steuereffekte und den Verkaufserlös am Ende der Haltedauer. Nutze unseren IRR-Rechner für die genaue Berechnung — zu viele Variablen für eine schnelle Formel.',
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
          <Link href="/irr-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900 text-sm">IRR Rechner →</div>
            <div className="text-xs text-gray-500 mt-0.5">Gesamtrendite über 10–30 Jahre</div>
          </Link>
          <Link href="/lexikon/bruttomietrendite" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900 text-sm">Lexikon: Bruttomietrendite →</div>
            <div className="text-xs text-gray-500 mt-0.5">Definition, Formel &amp; Beispiel</div>
          </Link>
          <Link href="/ratgeber/immobilie-als-kapitalanlage" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900 text-sm">Immobilie als Kapitalanlage →</div>
            <div className="text-xs text-gray-500 mt-0.5">Der ultimative Einsteiger-Guide</div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
