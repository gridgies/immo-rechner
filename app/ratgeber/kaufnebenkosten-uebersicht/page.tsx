import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuickAnswer from '@/components/QuickAnswer';
import KaufnebenkostenrechnerSimple from '@/components/KaufnebenkostenrechnerSimple';

export const metadata: Metadata = {
  title: 'Kaufnebenkosten Immobilien: Alle Kosten im Überblick (2026) | Immo-Rechner.net',
  description:
    'Kaufnebenkosten beim Immobilienkauf: Grunderwerbsteuer aller 16 Bundesländer, Notarkosten, Maklerprovision und Gesamtberechnung für 200.000–500.000 € Kaufpreise.',
  alternates: { canonical: 'https://immo-rechner.net/ratgeber/kaufnebenkosten-uebersicht' },
  openGraph: {
    title: 'Kaufnebenkosten Immobilien: Alle Kosten im Überblick (2026)',
    description:
      'Grunderwerbsteuer, Notar, Makler: Alle Kaufnebenkosten beim Immobilienkauf mit Tabellen und kostenlosem Rechner.',
    url: 'https://immo-rechner.net/ratgeber/kaufnebenkosten-uebersicht',
    siteName: 'Immo-Rechner.net',
    locale: 'de_DE',
    type: 'article',
    images: [
      {
        url: '/api/og?title=Kaufnebenkosten+Immobilien&subtitle=Alle+Kosten+im+%C3%9Cberblick+2026',
        width: 1200,
        height: 630,
        alt: 'Kaufnebenkosten beim Immobilienkauf 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaufnebenkosten Immobilien: Alle Kosten im Überblick (2026)',
    description: 'Grunderwerbsteuer, Notar, Makler: Alle Kaufnebenkosten mit Tabellen und kostenlosem Rechner.',
    images: ['/api/og?title=Kaufnebenkosten+Immobilien&subtitle=Alle+Kosten+im+%C3%9Cberblick+2026'],
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://immo-rechner.net/ratgeber/kaufnebenkosten-uebersicht#article',
      headline: 'Kaufnebenkosten beim Immobilienkauf: Alle Kosten im Überblick (2026)',
      description:
        'Grunderwerbsteuer aller 16 Bundesländer, Notarkosten, Maklerprovision und Gesamtberechnung — alle Kaufnebenkosten beim Immobilienkauf für 2026.',
      datePublished: '2026-03-05',
      dateModified: '2026-03-05',
      wordCount: 1600,
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
        '@id': 'https://immo-rechner.net/ratgeber/kaufnebenkosten-uebersicht',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://immo-rechner.net' },
        { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://immo-rechner.net/ratgeber' },
        { '@type': 'ListItem', position: 3, name: 'Kaufnebenkosten', item: 'https://immo-rechner.net/ratgeber/kaufnebenkosten-uebersicht' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wie hoch sind die Kaufnebenkosten beim Immobilienkauf?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Kaufnebenkosten beim Immobilienkauf liegen in Deutschland typisch zwischen 9% und 15% des Kaufpreises, je nach Bundesland. Sie setzen sich zusammen aus: Grunderwerbsteuer (3,5–6,5%), Notarkosten und Grundbuchgebühren (ca. 2%) sowie ggf. Maklerprovision (0–3,57%). Kaufst du ohne Makler, liegst du meist bei 10–11%.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welches Bundesland hat die niedrigste Grunderwerbsteuer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bayern hat mit 3,5% die niedrigste Grunderwerbsteuer in Deutschland. Bei einem Kaufpreis von 300.000 € sparst du im Vergleich zu NRW (6,5%) exakt 9.000 € Grunderwerbsteuer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann ich Kaufnebenkosten finanzieren?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die meisten Banken finanzieren nur den Kaufpreis (100% Finanzierung), nicht die Kaufnebenkosten. Für Nebenkosten brauchst du in der Regel Eigenkapital. Einzelne Banken bieten 110%-Finanzierungen an (Kaufpreis + Nebenkosten), aber nur bei sehr guter Bonität und geringem Beleihungsauslauf.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie kann ich Kaufnebenkosten sparen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die größten Sparpotenziale: 1) Kauf ohne Makler spart bis zu 3,57% Provision. 2) Möbel und Inventar separat im Kaufvertrag aufführen — diese unterliegen nicht der Grunderwerbsteuer. 3) Bundesland mit niedrigerer Grunderwerbsteuer wählen (falls grenznahe Objekte in Frage kommen). Notarkosten und Grundbuchgebühren sind gesetzlich geregelt und nicht verhandelbar.',
          },
        },
        {
          '@type': 'Question',
          name: 'Sind Kaufnebenkosten steuerlich absetzbar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja — bei einer vermieteten Kapitalanlage kannst du die Kaufnebenkosten als Werbungskosten oder über die AfA steuerlich geltend machen. Grunderwerbsteuer, Notarkosten und Maklerprovision erhöhen die Anschaffungskosten der Immobilie und fließen in die Bemessungsgrundlage der Abschreibung ein. Bei selbst genutztem Eigentum sind Nebenkosten nicht absetzbar.',
          },
        },
      ],
    },
  ],
};

const BUNDESLAENDER_GEST = [
  { name: 'Bayern', slug: 'bayern', rate: 3.5 },
  { name: 'Baden-Württemberg', slug: 'baden-wuerttemberg', rate: 5.0 },
  { name: 'Bremen', slug: 'bremen', rate: 5.0 },
  { name: 'Mecklenburg-Vorpommern', slug: 'mecklenburg-vorpommern', rate: 6.0 },
  { name: 'Niedersachsen', slug: 'niedersachsen', rate: 5.0 },
  { name: 'Rheinland-Pfalz', slug: 'rheinland-pfalz', rate: 5.0 },
  { name: 'Sachsen', slug: 'sachsen', rate: 5.5 },
  { name: 'Sachsen-Anhalt', slug: 'sachsen-anhalt', rate: 5.0 },
  { name: 'Hamburg', slug: 'hamburg', rate: 5.5 },
  { name: 'Hessen', slug: 'hessen', rate: 6.0 },
  { name: 'Berlin', slug: 'berlin', rate: 6.0 },
  { name: 'Brandenburg', slug: 'brandenburg', rate: 6.5 },
  { name: 'Nordrhein-Westfalen', slug: 'nordrhein-westfalen', rate: 6.5 },
  { name: 'Saarland', slug: 'saarland', rate: 6.5 },
  { name: 'Schleswig-Holstein', slug: 'schleswig-holstein', rate: 6.5 },
  { name: 'Thüringen', slug: 'thueringen', rate: 6.5 },
].sort((a, b) => a.rate - b.rate || a.name.localeCompare(b.name));

export default function KaufnebenkostenUebersichtPage() {
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
            <li className="text-gray-800" aria-current="page">Kaufnebenkosten</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Kaufnebenkosten beim Immobilienkauf: Alle Kosten im Überblick (2026)
        </h1>

        <p className="text-gray-600 leading-relaxed mb-2">
          Wer eine Immobilie kauft, zahlt deutlich mehr als den Kaufpreis. Die Kaufnebenkosten — Grunderwerbsteuer, Notar, Grundbuch und ggf. Makler — summieren sich schnell auf 10–15% des Kaufpreises. Bei einer 300.000-€-Wohnung sind das bis zu 45.000 € zusätzlich, die du als Eigenkapital mitbringen musst. Dieser Ratgeber zeigt dir alle Kostenpositionen im Detail und erklärt, wo du sparen kannst.
        </p>

        <QuickAnswer
          question="Wie hoch sind die Kaufnebenkosten beim Immobilienkauf?"
          answer="Typisch 9–15% des Kaufpreises, je nach Bundesland. Grunderwerbsteuer: 3,5–6,5% — Notarkosten und Grundbuch: ca. 2% — Maklerprovision: 0–3,57%. Kaufst du ohne Makler in Bayern, kommst du auf ca. 5–6% Nebenkosten."
          keyFacts={[
            'Grunderwerbsteuer: 3,5% (Bayern) bis 6,5% (NRW, Brandenburg, Saarland, Thüringen, Schleswig-Holstein)',
            'Notar und Grundbuch: ca. 1,5–2% des Kaufpreises (gesetzlich geregelt)',
            'Maklerprovision: 0–3,57% (seit 2020 geteilt zwischen Käufer und Verkäufer)',
            'Kaufnebenkosten müssen in der Regel aus Eigenkapital bezahlt werden',
          ]}
        />

        {/* Section 1: Grunderwerbsteuer */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Grunderwerbsteuer 2026: Aktuelle Sätze aller 16 Bundesländer
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Die Grunderwerbsteuer ist die größte Einzelposition unter den Kaufnebenkosten. Die Sätze unterscheiden sich stark nach Bundesland — von 3,5% in Bayern bis 6,5% in fünf Bundesländern. Das macht bei einem 300.000-€-Objekt einen Unterschied von 9.000 €.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-700">Bundesland</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Steuersatz</th>
                <th className="px-4 py-3 font-semibold text-gray-700">bei 200.000 €</th>
                <th className="px-4 py-3 font-semibold text-gray-700">bei 300.000 €</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {BUNDESLAENDER_GEST.map((bl, i) => (
                <tr key={bl.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3">
                    <Link href={`/grunderwerbsteuer/${bl.slug}`} className="text-[#7099A3] hover:underline font-medium">
                      {bl.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 font-bold text-gray-800">{bl.rate.toFixed(1)}%</td>
                  <td className="px-4 py-3 text-gray-600">{(200000 * bl.rate / 100).toLocaleString('de-DE')} €</td>
                  <td className="px-4 py-3 text-gray-600">{(300000 * bl.rate / 100).toLocaleString('de-DE')} €</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-2">Stand: 2026. Quellen: Finanzverwaltungen der Bundesländer.</p>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Die Grunderwerbsteuer wird auf den beurkundeten Kaufpreis fällig und muss in der Regel innerhalb von 4 Wochen nach Erhalt des Steuerbescheids bezahlt werden — ohne Grunderwerbsteuer-Quittung stellt das Finanzamt keine Unbedenklichkeitsbescheinigung aus, und die Eigentumsübertragung im Grundbuch ist blockiert.
        </p>

        {/* Section 2: Notarkosten */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Notarkosten und Grundbuchgebühren — wie viel kostet das?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Notar und Grundbuch sind beim Immobilienkauf in Deutschland Pflicht. Die Gebühren sind im Gerichts- und Notarkostengesetz (GNotKG) festgelegt — du kannst nicht verhandeln, aber du kannst ungefähr kalkulieren.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-700">Kostenposition</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Ca.-Betrag</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Erläuterung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-800">Kaufvertragsbeurkundung</td>
                <td className="px-4 py-3 text-gray-600">ca. 0,75–1,0% des KP</td>
                <td className="px-4 py-3 text-gray-600">Kerngebühr des Notars für die Beurkundung</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">Grundschuldbestellung</td>
                <td className="px-4 py-3 text-gray-600">ca. 0,2–0,3% des Darlehens</td>
                <td className="px-4 py-3 text-gray-600">Notar beurkundet die Grundschuld für die Bank</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-800">Grundbucheintragung</td>
                <td className="px-4 py-3 text-gray-600">ca. 0,3–0,5% des KP</td>
                <td className="px-4 py-3 text-gray-600">Eintragung des neuen Eigentümers im Grundbuch</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">Auslagen, Porto, Kopien</td>
                <td className="px-4 py-3 text-gray-600">200–500 €</td>
                <td className="px-4 py-3 text-gray-600">Nebenkosten des Notars</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-gray-800 border-t border-gray-300">Gesamt Notar + Grundbuch</td>
                <td className="px-4 py-3 font-bold text-[#7099A3] border-t border-gray-300">ca. 1,5–2,0%</td>
                <td className="px-4 py-3 text-gray-600 border-t border-gray-300">Richtwert für die Gesamtkalkulation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
          <strong>Wichtig:</strong> Die Notarkosten werden immer auf den Kaufvertragspreis berechnet, nicht auf den Finanzierungsbetrag. Kaufst du für 300.000 € und finanzierst 80%, zahlt der Notar seine Hauptgebühr trotzdem auf 300.000 €. Nur die Grundschuldbestellung richtet sich nach der Darlehenssumme.
        </div>

        {/* Section 3: Maklerprovision */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Maklerprovision: Wer zahlt was seit 2020?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Seit dem 23. Dezember 2020 gilt das Gesetz zur Verteilung der Maklerprovision: Wer den Makler beauftragt, zahlt mindestens 50% der Provision. In der Praxis bedeutet das bei Kaufimmobilien:
        </p>
        <ul className="space-y-2 mb-6 text-gray-600">
          <li className="flex gap-2"><span className="text-[#7099A3] font-bold shrink-0">→</span><span><strong>Häufigste Variante:</strong> 3,57% Provision für Käufer und 3,57% für Verkäufer (je inkl. MwSt.) — macht 7,14% Gesamtprovision.</span></li>
          <li className="flex gap-2"><span className="text-[#7099A3] font-bold shrink-0">→</span><span><strong>Kauf ohne Makler:</strong> Immer mehr Eigentümer verkaufen direkt — dann fällt für dich keine Provision an. Das spart bis zu 3,57% des Kaufpreises.</span></li>
          <li className="flex gap-2"><span className="text-[#7099A3] font-bold shrink-0">→</span><span><strong>Manche Regionen:</strong> In einigen Regionen ist die Provision regional unterschiedlich — prüfe das Exposé immer genau.</span></li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">
          Bei einem 300.000-€-Objekt mit Makler zahlst du als Käufer 10.710 € Provision — Geld, das vollständig in Eigenkapital fließen muss und die Mietrendite direkt drückt.
        </p>

        {/* Rechner */}
        <div className="my-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Kaufnebenkosten berechnen</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Kaufpreis und Bundesland eingeben — der Rechner ermittelt alle Nebenkosten im Detail.
          </p>
          <KaufnebenkostenrechnerSimple />
          <p className="text-sm text-gray-500 mt-4">
            Für die vollständige Renditeanalyse inkl. Finanzierungsplan:{' '}
            <Link href="/cashflow-rechner" className="text-[#7099A3] hover:underline font-medium">Zum Cashflow-Rechner →</Link>
          </p>
        </div>

        {/* Section 4: Gesamtberechnung */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Gesamtberechnung: Nebenkosten für verschiedene Kaufpreise
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Die folgende Tabelle zeigt die Gesamtnebenkosten für drei typische Kaufpreise — einmal mit Makler (Bayern vs. NRW) und einmal ohne Makler:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-4 py-3 font-semibold text-gray-700">Kaufpreis</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Bayern, ohne Makler</th>
                <th className="px-4 py-3 font-semibold text-gray-700">Bayern, mit Makler</th>
                <th className="px-4 py-3 font-semibold text-gray-700">NRW, mit Makler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { kp: 200000, bayernOhne: 11000, bayernMit: 18140, nrwMit: 24140 },
                { kp: 300000, bayernOhne: 16500, bayernMit: 27210, nrwMit: 36210 },
                { kp: 500000, bayernOhne: 27500, bayernMit: 45350, nrwMit: 60350 },
              ].map(({ kp, bayernOhne, bayernMit, nrwMit }) => (
                <tr key={kp} className="bg-white odd:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{kp.toLocaleString('de-DE')} €</td>
                  <td className="px-4 py-3 text-gray-600">
                    {bayernOhne.toLocaleString('de-DE')} €
                    <span className="text-xs text-gray-400 ml-1">({((bayernOhne / kp) * 100).toFixed(1)}%)</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {bayernMit.toLocaleString('de-DE')} €
                    <span className="text-xs text-gray-400 ml-1">({((bayernMit / kp) * 100).toFixed(1)}%)</span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {nrwMit.toLocaleString('de-DE')} €
                    <span className="text-xs text-gray-400 ml-1">({((nrwMit / kp) * 100).toFixed(1)}%)</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-2">Annahmen: Notar/Grundbuch 2%, Makler 3,57% für Käufer. Gerundete Richtwerte.</p>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Der Unterschied zwischen dem günstigsten (Bayern, kein Makler) und teuersten Szenario (NRW, mit Makler) beträgt bei einem 300.000-€-Objekt rund <strong>19.700 €</strong> — Geld, das deine Rendite direkt senkt und als Eigenkapital vorgehalten werden muss.
        </p>

        {/* Section 5: Finanzierung */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Können Kaufnebenkosten finanziert werden?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Die kurze Antwort: In der Regel nein. Die meisten Banken finanzieren ausschließlich den Kaufpreis — die Kaufnebenkosten musst du aus Eigenkapital begleichen. Das ist ein wichtiger Grund, warum die Faustformel „20% Eigenkapital" oft zu niedrig angesetzt ist:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6 text-sm">
          <div className="font-semibold text-gray-800 mb-3">Rechenbeispiel: Wie viel Eigenkapital brauchst du wirklich?</div>
          <div className="space-y-1.5 text-gray-600">
            <div className="flex justify-between"><span>Kaufpreis</span><span className="font-medium">300.000 €</span></div>
            <div className="flex justify-between"><span>Finanzierter Anteil (80%)</span><span className="font-medium">240.000 €</span></div>
            <div className="flex justify-between font-medium"><span>Eigenkapital für Kaufpreis (20%)</span><span>60.000 €</span></div>
            <div className="flex justify-between text-red-600"><span>+ Grunderwerbsteuer NRW (6,5%)</span><span>+19.500 €</span></div>
            <div className="flex justify-between text-red-600"><span>+ Notar und Grundbuch (2%)</span><span>+6.000 €</span></div>
            <div className="flex justify-between text-red-600"><span>+ Maklerprovision (3,57%)</span><span>+10.710 €</span></div>
            <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between font-bold text-gray-900">
              <span>Eigenkapital insgesamt</span><span>96.210 €</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">Das sind 32% des Kaufpreises — nicht 20%.</p>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          Einzelne Banken bieten sogenannte 110%-Finanzierungen an, bei denen auch die Kaufnebenkosten mitfinanziert werden. Das geht nur mit sehr guter Bonität, einem niedrigen Beleihungsauslauf und führt zu deutlich höheren monatlichen Raten. Für Kapitalanleger ist das meist keine gute Strategie — die monatliche Belastung steigt, der Cashflow leidet.
        </p>

        {/* Section 6: Sparen */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          Tipps zum Sparen bei Kaufnebenkosten
        </h2>

        <div className="space-y-4 mb-6">
          <div className="border border-green-100 rounded-xl p-5 bg-green-50">
            <div className="font-semibold text-green-800 mb-2">Tipp 1: Makler umgehen</div>
            <p className="text-sm text-gray-600">
              Der größte Hebel. Objekte von privat oder von Bauträgern ohne Makler können bis zu 3,57% des Kaufpreises sparen. Plattformen wie ImmoScout24 ermöglichen die direkte Suche nach provisionsfreien Angeboten. Bei 300.000 € sind das über 10.000 € Ersparnis.
            </p>
          </div>
          <div className="border border-green-100 rounded-xl p-5 bg-green-50">
            <div className="font-semibold text-green-800 mb-2">Tipp 2: Inventar und Möbel separat ausweisen</div>
            <p className="text-sm text-gray-600">
              Einbauküche, Gartenhaus, Sauna oder hochwertige Bodenbeläge können im Kaufvertrag separat bewertet und vom beurkundeten Kaufpreis abgezogen werden. Diese Gegenstände unterliegen nicht der Grunderwerbsteuer. Auf 10.000 € ausgewiesenes Inventar sparst du in NRW 650 € Grunderwerbsteuer — bei einem Finanzamt-konformen Wert.
            </p>
          </div>
          <div className="border border-green-100 rounded-xl p-5 bg-green-50">
            <div className="font-semibold text-green-800 mb-2">Tipp 3: Bundesland vergleichen (bei Grenzlagen)</div>
            <p className="text-sm text-gray-600">
              Wer z.B. im Raum Augsburg kauft, kann Objekte in Bayern (3,5% GrESt) mit Objekten knapp jenseits der Grenze in Baden-Württemberg (5,0%) vergleichen. Der Steuervorteil beträgt 4.500 € bei 300.000 € Kaufpreis. Das ist zwar kein Grund, schlechtere Objekte zu kaufen — aber bei gleichwertigen Alternativen ein relevanter Faktor.
            </p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5 bg-gray-50">
            <div className="font-semibold text-gray-700 mb-2">Was nicht funktioniert: Kaufpreis künstlich drücken</div>
            <p className="text-sm text-gray-600">
              Manche Verkäufer schlagen vor, den beurkundeten Kaufpreis niedrig anzusetzen und den Rest bar zu zahlen — das ist Steuerhinterziehung und Urkundenfälschung. Das Finanzamt kann Kaufpreise durch Vergleichswertverfahren überprüfen und nachbelasten. Außerdem entfällt der Eigentumsschutz für den nicht beurkundeten Teil.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#7099A3]/10 to-[#5d7e87]/10 rounded-2xl p-6 my-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-bold text-gray-900 mb-1">Kaufnebenkosten für dein Objekt berechnen</div>
              <div className="text-sm text-gray-600">Kaufpreis, Bundesland und Makler eingeben — alle Nebenkosten auf einen Blick.</div>
            </div>
            <Link
              href="/kaufnebenkosten-rechner"
              className="px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm whitespace-nowrap shrink-0"
            >
              Zum Kaufnebenkosten-Rechner →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
          Häufige Fragen zu Kaufnebenkosten
        </h2>
        <div className="space-y-5">
          {[
            {
              q: 'Wie hoch sind die Kaufnebenkosten beim Immobilienkauf?',
              a: 'Typisch 9–15% des Kaufpreises, je nach Bundesland und ob ein Makler beteiligt ist. Grunderwerbsteuer (3,5–6,5%) + Notar/Grundbuch (ca. 2%) + ggf. Maklerprovision (0–3,57%). Ohne Makler in Bayern liegst du bei ca. 5,5%, in NRW mit Makler bei ca. 12%.',
            },
            {
              q: 'Welches Bundesland hat die niedrigste Grunderwerbsteuer?',
              a: 'Bayern mit 3,5% — das ist der bundesweit niedrigste Satz. Zum Vergleich: In NRW, Brandenburg, Saarland, Schleswig-Holstein und Thüringen zahlt du 6,5%. Das macht bei 300.000 € einen Unterschied von 9.000 €.',
            },
            {
              q: 'Kann ich Kaufnebenkosten finanzieren?',
              a: 'In der Regel nein — Banken finanzieren meist nur den Kaufpreis. Die Kaufnebenkosten müssen aus Eigenkapital kommen. Das bedeutet: Bei 20% Eigenkapital auf den Kaufpreis plus Nebenkosten brauchst du effektiv 30–35% Eigenkapital bezogen auf den Kaufpreis.',
            },
            {
              q: 'Sind Kaufnebenkosten steuerlich absetzbar?',
              a: 'Bei vermieteten Immobilien ja: Grunderwerbsteuer, Notar und Maklerprovision erhöhen die Anschaffungskosten und fließen in die AfA-Bemessungsgrundlage. Bei selbst genutztem Eigentum sind Nebenkosten nicht steuerlich absetzbar.',
            },
            {
              q: 'Wie kann ich Kaufnebenkosten reduzieren?',
              a: 'Die drei größten Hebel: 1) Ohne Makler kaufen (spart bis zu 3,57%). 2) Inventar und Möbel separat im Kaufvertrag ausweisen (unterliegen nicht der Grunderwerbsteuer). 3) Bei Grenzlagen Bundesland mit niedrigerer Grunderwerbsteuer bevorzugen.',
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
          <Link href="/kaufnebenkosten-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900 text-sm">Kaufnebenkosten-Rechner →</div>
            <div className="text-xs text-gray-500 mt-0.5">Alle Nebenkosten für dein Objekt</div>
          </Link>
          <Link href="/rechner/grunderwerbsteuer-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900 text-sm">Grunderwerbsteuer-Rechner →</div>
            <div className="text-xs text-gray-500 mt-0.5">Steuer nach Bundesland berechnen</div>
          </Link>
          <Link href="/ratgeber/mietrendite-berechnen" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900 text-sm">Mietrendite berechnen →</div>
            <div className="text-xs text-gray-500 mt-0.5">Warum Nebenkosten die Rendite drücken</div>
          </Link>
          <Link href="/ratgeber/eigenkapital-immobilie" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900 text-sm">Eigenkapital Immobilie →</div>
            <div className="text-xs text-gray-500 mt-0.5">Wie viel EK brauchst du wirklich?</div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
