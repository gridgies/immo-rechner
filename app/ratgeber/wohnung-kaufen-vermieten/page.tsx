import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import QuickAnswer from '@/components/QuickAnswer';
import RenditerechnerSimple from '@/components/RenditerechnerSimple';

export const metadata: Metadata = {
  title: 'Wohnung kaufen und vermieten: Lohnt es sich? Guide 2026 | Immo-Rechner.net',
  description:
    'Wohnung kaufen und vermieten: Was musst du als Vermieter wissen? Rechte & Pflichten, Steuervorteile, Cashflow berechnen, häufige Fehler vermeiden.',
  alternates: { canonical: 'https://immo-rechner.net/ratgeber/wohnung-kaufen-vermieten' },
  openGraph: {
    title: 'Wohnung kaufen und vermieten: Lohnt es sich? Guide 2026',
    description:
      'Alles über Vermietung als Kapitalanlage: Rechte, Pflichten, Steuern und Rendite-Berechnung.',
    url: 'https://immo-rechner.net/ratgeber/wohnung-kaufen-vermieten',
    siteName: 'Immo-Rechner.net',
    locale: 'de_DE',
    type: 'article',
    images: [
      {
        url: '/api/og?title=Wohnung%20kaufen%20%26%20vermieten&subtitle=Lohnt%20es%20sich%3F%20Guide%202026',
        width: 1200,
        height: 630,
        alt: 'Wohnung kaufen und vermieten Guide 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wohnung kaufen und vermieten: Lohnt es sich? Guide 2026',
    description: 'Rechte, Pflichten, Steuern, Rendite-Berechnung für Vermieter.',
    images: ['/api/og?title=Wohnung%20kaufen%20%26%20vermieten&subtitle=Lohnt%20es%20sich%3F%20Guide%202026'],
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://immo-rechner.net/ratgeber/wohnung-kaufen-vermieten#article',
      headline: 'Wohnung kaufen und vermieten: Lohnt es sich? Guide 2026',
      description:
        'Praxisratgeber für den Einstieg in die Vermietung: Rechte und Pflichten, Steuern, Mietrecht und Renditeberechnung.',
      datePublished: '2025-10-01',
      dateModified: '2026-02-28',
      inLanguage: 'de',
      wordCount: 2200,
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
        '@id': 'https://immo-rechner.net/ratgeber/wohnung-kaufen-vermieten',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://immo-rechner.net' },
        { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://immo-rechner.net/ratgeber' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Wohnung kaufen und vermieten',
          item: 'https://immo-rechner.net/ratgeber/wohnung-kaufen-vermieten',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Lohnt es sich, eine Wohnung zu kaufen und zu vermieten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es lohnt sich, wenn die Nettomietrendite die Finanzierungskosten übersteigt oder langfristige Wertsteigerung zu erwarten ist. In B-Lagen (Hannover, Leipzig, Nürnberg) sind Bruttomietrenditen von 4–5 % realistisch. Dazu kommen steuerliche Vorteile wie AfA und Zinsenabsetzbarkeit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was sind die Pflichten als Vermieter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Als Vermieter bist du verpflichtet: die Wohnung in bewohnbarem Zustand zu halten, Mängel zu beseitigen, Betriebskostenabrechnungen zu erstellen, die Privatsphäre des Mieters zu respektieren (kein unbegründetes Betreten) und das Mietrecht einzuhalten.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Steuern muss ich als Vermieter zahlen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mieteinnahmen sind als Einkünfte aus Vermietung und Verpachtung (§ 21 EStG) einkommensteuerpflichtig. Du kannst Werbungskosten (Zinsen, AfA, Hausgeld, Reparaturen) abziehen. Nach mehr als 10 Jahren Haltedauer ist der Verkaufsgewinn steuerfrei (Spekulationsfrist).',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie hoch sollte die Miete sein?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Miete sollte am ortsüblichen Mietspiegel orientiert sein. In Gebieten mit Mietpreisbremse darf die Miete maximal 10 % über der ortsüblichen Vergleichsmiete liegen. Bei Neuvermietung nach umfassender Modernisierung gelten Ausnahmen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was passiert, wenn der Mieter nicht zahlt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bei Zahlungsausfall kannst du nach zwei Monatsmieten Rückstand fristlos kündigen. Das Räumungsverfahren dauert in Deutschland 6–18 Monate. Eine Rechtsschutzversicherung mit Mietrechtsbaustein ist empfehlenswert. Mietkaution (3 Kaltmieten) gibt dir einen ersten Puffer.',
          },
        },
      ],
    },
  ],
};

export default function WohnungKaufenVermietenPage() {
  return (
    <>
      <JsonLd data={jsonLdData} />
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:text-teal-600">Startseite</Link></li>
            <li aria-hidden="true"> / </li>
            <li><Link href="/" className="hover:text-teal-600">Ratgeber</Link></li>
            <li aria-hidden="true"> / </li>
            <li className="text-gray-800" aria-current="page">Wohnung kaufen und vermieten</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Wohnung kaufen und vermieten: Lohnt es sich?
        </h1>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Eine Eigentumswohnung kaufen und vermieten — der klassische Einstieg in die Immobilieninvestition.
          Doch bevor du eine Entscheidung triffst: Was musst du als Vermieter wissen? Welche Rechte und
          Pflichten hast du? Und rechnet sich das überhaupt? Dieser Guide gibt dir einen praxisnahen Überblick.
        </p>

        <QuickAnswer
          question="Lohnt es sich, eine Wohnung zu kaufen und zu vermieten?"
          answer="Es lohnt sich, wenn der Kaufpreisfaktor unter 25 liegt (Bruttomietrendite über 4 %), die Lage stabile Mietnachfrage hat und die Nettomietrendite die Finanzierungskosten übersteigt. Als Vermieter profitierst du von AfA-Abschreibung, steuerlich absetzbaren Zinsen und steuerfreiem Verkauf nach 10 Jahren."
          keyFacts={[
            "Kaufpreisfaktor unter 25 = potenziell rentabel",
            "Bonitätsprüfung des Mieters ist Pflicht (SCHUFA + Einkommensnachweise)",
            "Nicht umlagefähiges Hausgeld reduziert den monatlichen Cashflow",
            "Mietpreisbremse: In vielen Städten max. 10 % über ortsüblicher Vergleichsmiete",
            "Liquiditätsreserve: 3–6 Monatskaltmieten als Puffer einplanen",
          ]}
        />

        {/* TOC */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8" aria-label="Inhaltsverzeichnis">
          <h2 className="font-semibold text-gray-800 mb-3">Inhaltsverzeichnis</h2>
          <ol className="space-y-1 text-sm text-teal-700">
            <li><a href="#rechnet-es-sich" className="hover:underline">1. Rechnet es sich?</a></li>
            <li><a href="#kaufpreis-rechner" className="hover:underline">2. Rendite sofort berechnen</a></li>
            <li><a href="#rechte-pflichten" className="hover:underline">3. Rechte und Pflichten als Vermieter</a></li>
            <li><a href="#mieter-finden" className="hover:underline">4. Den richtigen Mieter finden</a></li>
            <li><a href="#miethoehe" className="hover:underline">5. Miethöhe und Mietpreisbremse</a></li>
            <li><a href="#steuern" className="hover:underline">6. Steuern als Vermieter</a></li>
            <li><a href="#haeufige-fehler" className="hover:underline">7. Häufige Fehler bei Erstinvestoren</a></li>
            <li><a href="#faq" className="hover:underline">8. Häufige Fragen</a></li>
          </ol>
        </nav>

        <section id="rechnet-es-sich" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Rechnet es sich?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Die kurze Antwort: Ja — wenn du das richtige Objekt zum richtigen Preis in der richtigen Lage kaufst.
            Die längere Antwort hängt von drei Faktoren ab:
          </p>
          <div className="space-y-3 mb-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-1">Kaufpreisfaktor</h3>
              <p className="text-sm text-gray-600">
                Der Kaufpreisfaktor (Kaufpreis / Jahreskaltmiete) sollte idealerweise unter 25 liegen.
                Bei einem Faktor von 20 = 5 % Bruttomietrendite. Faktor 30 = 3,3 % — in der aktuellen
                Zinsumgebung schwer zu rechtfertigen ohne überzeugendes Wertsteigerungsargument.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-1">Finanzierungskosten</h3>
              <p className="text-sm text-gray-600">
                Bei aktuellen Zinsen (4–5 % p.a.) muss die Nettomietrendite mindestens den Zinssatz
                übersteigen, damit kein dauerhaft negativer Cashflow entsteht. Das ist in A-Lagen
                aktuell kaum realisierbar.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-1">Zeithorizont</h3>
              <p className="text-sm text-gray-600">
                Immobilien sind ein langfristiges Investment. Der steuerfreie Verkauf nach 10 Jahren
                und historische Wertsteigerungen von 2–4 % p.a. machen sie auch bei anfänglich
                schmalem Cashflow rentabel — wenn der Zeithorizont stimmt.
              </p>
            </div>
          </div>
        </section>

        <section id="kaufpreis-rechner" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Rendite sofort berechnen</h2>
          <p className="text-gray-600 mb-4">
            Gib die Daten deines Wunschobjekts ein und sieh sofort, ob es renditetechnisch interessant ist:
          </p>
          <RenditerechnerSimple />
          <p className="text-sm text-gray-500 mt-3">
            Für die vollständige Analyse inklusive Finanzierung:{' '}
            <Link href="/cashflow-rechner" className="text-teal-600 hover:underline">
              Cashflow Rechner öffnen
            </Link>
          </p>
        </section>

        <section id="rechte-pflichten" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Rechte und Pflichten als Vermieter</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Das deutsche Mietrecht schützt primär die Mieter. Als Vermieter musst du das kennen, bevor du
            deinen ersten Mietvertrag unterschreibst.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Deine Pflichten</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-red-500 mt-0.5">•</span> Wohnung in bewohnbarem Zustand halten</li>
                <li className="flex gap-2"><span className="text-red-500 mt-0.5">•</span> Mängel innerhalb angemessener Frist beseitigen</li>
                <li className="flex gap-2"><span className="text-red-500 mt-0.5">•</span> Jährliche Betriebskostenabrechnung erstellen</li>
                <li className="flex gap-2"><span className="text-red-500 mt-0.5">•</span> Privatsphäre des Mieters respektieren</li>
                <li className="flex gap-2"><span className="text-red-500 mt-0.5">•</span> Keine Diskriminierung bei Vergabe</li>
                <li className="flex gap-2"><span className="text-red-500 mt-0.5">•</span> Mietkaution ordnungsgemäß anlegen</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Deine Rechte</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-green-500 mt-0.5">•</span> Pünktliche Mietzahlung einfordern</li>
                <li className="flex gap-2"><span className="text-green-500 mt-0.5">•</span> Miete an Mietspiegel anpassen (max. 20 % in 3 Jahren)</li>
                <li className="flex gap-2"><span className="text-green-500 mt-0.5">•</span> Kündigung bei Zahlungsverzug oder Eigenbedarf</li>
                <li className="flex gap-2"><span className="text-green-500 mt-0.5">•</span> Besichtigung mit Ankündigung (24h)</li>
                <li className="flex gap-2"><span className="text-green-500 mt-0.5">•</span> Modernisierungsumlage (8 % der Kosten p.a.)</li>
                <li className="flex gap-2"><span className="text-green-500 mt-0.5">•</span> Mietkaution (max. 3 Kaltmieten)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="mieter-finden" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Den richtigen Mieter finden</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Die Mieterauswahl ist eine der wichtigsten Entscheidungen. Ein schlechter Mieter kann
            jahrelange Probleme bedeuten — Zahlungsausfälle, Schäden, Rechtsstreitigkeiten.
          </p>
          <h3 className="font-semibold text-gray-800 mb-2">Diese Unterlagen solltest du anfordern:</h3>
          <ul className="space-y-1 text-sm text-gray-600 mb-4">
            <li className="flex gap-2"><span className="text-teal-600">✓</span> SCHUFA-Auskunft (nicht älter als 3 Monate)</li>
            <li className="flex gap-2"><span className="text-teal-600">✓</span> Einkommensnachweise der letzten 3 Monate</li>
            <li className="flex gap-2"><span className="text-teal-600">✓</span> Vormieterbestätigung (Mietschuldenfreiheit)</li>
            <li className="flex gap-2"><span className="text-teal-600">✓</span> Selbstauskunft des Mieters</li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-900 text-sm">
              <strong>Faustregel:</strong> Die Kaltmiete sollte maximal 30 % des Nettoeinkommens des Mieters
              betragen. Bei einem Nettoeinkommen von 3.000 € sollte die Kaltmiete nicht über 900 € liegen.
              Wähle immer einen Mieter, dessen Bonität du auch nach negativem Leerstand noch überprüft hast.
            </p>
          </div>
        </section>

        <section id="miethoehe" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Miethöhe und Mietpreisbremse</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In vielen deutschen Städten gilt die Mietpreisbremse: Bei Neuvermietung darf die Miete
            maximal 10 % über der ortsüblichen Vergleichsmiete liegen (Mietspiegel).
          </p>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-1">Wo gilt die Mietpreisbremse?</h3>
              <p className="text-sm text-gray-600">
                In allen Gebieten, die von den Bundesländern als angespannte Wohnungsmärkte ausgewiesen
                wurden — das betrifft die meisten deutschen Großstädte (Berlin, München, Hamburg,
                Frankfurt, Köln, Düsseldorf etc.). Prüfe für deine Stadt die aktuelle Verordnung.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-1">Ausnahmen von der Mietpreisbremse</h3>
              <p className="text-sm text-gray-600">
                Neubauten (Erstbezug nach Oktober 2014), umfassend sanierte Wohnungen und
                Wohnungen mit Vormiete über der Bremse sind ausgenommen. Prüfe bei jedem Objekt
                den aktuellen Mietstand und Vormiete.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-1">Staffel- und Indexmiete</h3>
              <p className="text-sm text-gray-600">
                Staffelmiete: Vertraglich vereinbarte jährliche Mieterhöhungen — planbare Einnahmensteigerung.
                Indexmiete: Miete ist an den Verbraucherpreisindex gekoppelt — schützt vor Inflation, kann
                aber in Deflationsphasen sinken.
              </p>
            </div>
          </div>
        </section>

        <section id="steuern" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Steuern als Vermieter</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mieteinnahmen sind steuerpflichtig — aber mit erheblichen Abzugsmöglichkeiten:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Einnahmen / Kosten</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Steuerlich</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-600">
                <tr className="bg-white"><td className="px-4 py-3">Kaltmiete</td><td className="px-4 py-3 text-red-600">+ Einnahmen (steuerpflichtig)</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3">Hypothekenzinsen</td><td className="px-4 py-3 text-green-600">− Werbungskosten (absetzbar)</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">AfA (2–3 % des Gebäudewerts)</td><td className="px-4 py-3 text-green-600">− Werbungskosten (absetzbar)</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3">Hausgeld (nicht umlagefähig)</td><td className="px-4 py-3 text-green-600">− Werbungskosten (absetzbar)</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Verwaltungskosten</td><td className="px-4 py-3 text-green-600">− Werbungskosten (absetzbar)</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3">Reparaturen (Erhaltungsaufwand)</td><td className="px-4 py-3 text-green-600">− Sofort absetzbar</td></tr>
                <tr className="bg-white"><td className="px-4 py-3">Tilgungsanteil der Rate</td><td className="px-4 py-3 text-gray-400">Nicht absetzbar</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3">Verkaufsgewinn nach 10 Jahren</td><td className="px-4 py-3 text-green-600">Steuerfrei (Spekulationsfrist)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Empfehlung: Nutze einen Steuerberater, der auf Vermieter spezialisiert ist. Die Beratungskosten
            sind selbst als Werbungskosten absetzbar.
          </p>
        </section>

        <section id="haeufige-fehler" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Häufige Fehler bei Erstinvestoren</h2>
          <ol className="space-y-4">
            {[
              {
                n: 1,
                title: 'Kaufpreis nicht verhandeln',
                desc: 'Viele Erstinvestoren zahlen den Listenpreis. In der aktuellen Marktphase (2026) sind 5–15 % Preisverhandlungsspielraum oft möglich — besonders bei länger insertierten Objekten.',
              },
              {
                n: 2,
                title: 'WEG-Protokolle nicht prüfen',
                desc: 'Die Protokolle der letzten 3 WEG-Versammlungen zeigen geplante Sanierungen, laufende Streitigkeiten und die finanzielle Gesundheit der Gemeinschaft. Viele Käufer lesen sie nicht.',
              },
              {
                n: 3,
                title: 'Hausgeld unterschätzen',
                desc: 'Das Hausgeld wirkt auf den ersten Blick niedrig — aber der nicht umlagefähige Anteil (Verwaltung, Rücklage) belastet direkt den Cashflow. Immer die Einzelpositionen prüfen.',
              },
              {
                n: 4,
                title: 'Kaufnebenkosten nicht einkalkulieren',
                desc: 'Grunderwerbsteuer, Notar, Grundbuch und Makler kosten 10–15 % des Kaufpreises — und müssen aus Eigenkapital bezahlt werden. Viele Einsteiger unterschätzen dies.',
              },
              {
                n: 5,
                title: 'Mieter überstürzt auswählen',
                desc: 'Der Druck, schnell zu vermieten, verführt zur überstürzten Mieterauswahl. Ein schlechter Mieter kostet mehr als 3 Monate Leerstand. Nimm dir Zeit für die Bonitätsprüfung.',
              },
              {
                n: 6,
                title: 'Keine Liquiditätsreserve',
                desc: 'Plane immer 3–6 Monatskaltmieten als Liquiditätsreserve ein — für Leerstand, Reparaturen und unvorhergesehene Sonderumlagen der WEG.',
              },
            ].map((item) => (
              <li key={item.n} className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-700 text-sm font-bold flex items-center justify-center">
                  {item.n}
                </span>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Häufige Fragen</h2>
          <dl className="space-y-5">
            <div>
              <dt className="font-semibold text-gray-800 mb-1">Lohnt es sich, eine Wohnung zu kaufen und zu vermieten?</dt>
              <dd className="text-gray-600 leading-relaxed">
                Ja — wenn Kaufpreisfaktor (unter 25), Lage (stabile oder wachsende Nachfrage) und
                Finanzierung (Nettomietrendite über Zinssatz) stimmen. In B-Lagen sind 4–5 %
                Bruttomietrendite realistisch.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 mb-1">Was sind die Pflichten als Vermieter?</dt>
              <dd className="text-gray-600 leading-relaxed">
                Wohnung in bewohnbarem Zustand halten, Mängel beseitigen, Betriebskostenabrechnung
                erstellen, Privatsphäre des Mieters respektieren, Mietrecht einhalten.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 mb-1">Welche Steuern muss ich als Vermieter zahlen?</dt>
              <dd className="text-gray-600 leading-relaxed">
                Mieteinnahmen sind einkommensteuerpflichtig — aber nach Abzug von Zinsen, AfA,
                Hausgeld und Verwaltungskosten oft erheblich reduziert. Nach 10 Jahren Haltedauer
                ist der Verkaufsgewinn steuerfrei.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 mb-1">Wie hoch sollte die Miete sein?</dt>
              <dd className="text-gray-600 leading-relaxed">
                Orientiere dich am Mietspiegel. In Gebieten mit Mietpreisbremse maximal 10 % über
                der ortsüblichen Vergleichsmiete. Bei Staffelmiete kannst du jährliche Erhöhungen
                vertraglich vereinbaren.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 mb-1">Was passiert, wenn der Mieter nicht zahlt?</dt>
              <dd className="text-gray-600 leading-relaxed">
                Nach zwei Monatsmieten Rückstand: fristlose Kündigung möglich. Räumungsverfahren
                dauert 6–18 Monate. Rechtsschutzversicherung mit Mietrechtsbaustein ist empfehlenswert.
              </dd>
            </div>
          </dl>
        </section>

        {/* Related */}
        <section className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Verwandte Ratgeber & Rechner</h2>
          <ul className="space-y-2">
            <li><Link href="/ratgeber/immobilie-als-kapitalanlage" className="text-teal-600 hover:underline font-medium">→ Immobilie als Kapitalanlage: Der ultimative Guide</Link></li>
            <li><Link href="/ratgeber/cashflow-immobilien" className="text-teal-600 hover:underline font-medium">→ Cashflow bei Immobilien berechnen</Link></li>
            <li><Link href="/ratgeber/finanzierung" className="text-teal-600 hover:underline font-medium">→ Immobilien Finanzierung</Link></li>
            <li><Link href="/ratgeber/eigenkapital-immobilie" className="text-teal-600 hover:underline font-medium">→ Eigenkapital für Immobilien</Link></li>
            <li><Link href="/cashflow-rechner" className="text-teal-600 hover:underline font-medium">→ Cashflow Rechner</Link></li>
            <li><Link href="/rendite-rechner" className="text-teal-600 hover:underline font-medium">→ Rendite Rechner</Link></li>
            <li><Link href="/kaufnebenkosten-rechner" className="text-teal-600 hover:underline font-medium">→ Kaufnebenkosten Rechner</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
