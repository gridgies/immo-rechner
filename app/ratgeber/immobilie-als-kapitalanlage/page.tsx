import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuickAnswer from '@/components/QuickAnswer';
import RenditerechnerSimple from '@/components/RenditerechnerSimple';

export const metadata: Metadata = {
  title: 'Immobilie als Kapitalanlage: Der ultimative Guide 2026 | Immo-Rechner.net',
  description:
    'Immobilie als Kapitalanlage: Rendite berechnen, Finanzierung planen, Steuern verstehen. Schritt-für-Schritt-Guide mit Rechenbeispielen und kostenlosem Rechner.',
  alternates: { canonical: 'https://immo-rechner.net/ratgeber/immobilie-als-kapitalanlage' },
  openGraph: {
    title: 'Immobilie als Kapitalanlage: Der ultimative Guide 2026',
    description:
      'Rendite, Finanzierung, Steuern — alles was du als Immobilien-Investor wissen musst.',
    url: 'https://immo-rechner.net/ratgeber/immobilie-als-kapitalanlage',
    siteName: 'Immo-Rechner.net',
    locale: 'de_DE',
    type: 'article',
    images: [
      {
        url: '/api/og?title=Immobilie%20als%20Kapitalanlage&subtitle=Der%20ultimative%20Guide%202026',
        width: 1200,
        height: 630,
        alt: 'Immobilie als Kapitalanlage Guide 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immobilie als Kapitalanlage: Der ultimative Guide 2026',
    description: 'Rendite, Finanzierung, Steuern — alles für Immobilien-Investoren.',
    images: ['/api/og?title=Immobilie%20als%20Kapitalanlage&subtitle=Der%20ultimative%20Guide%202026'],
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://immo-rechner.net/ratgeber/immobilie-als-kapitalanlage#article',
      headline: 'Immobilie als Kapitalanlage: Der ultimative Guide 2026',
      description:
        'Umfassender Guide für Einsteiger und Fortgeschrittene: Rendite berechnen, Finanzierung, Steuern und Standortwahl.',
      datePublished: '2025-09-01',
      dateModified: '2026-02-28',
      inLanguage: 'de',
      wordCount: 2500,
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
        '@id': 'https://immo-rechner.net/ratgeber/immobilie-als-kapitalanlage',
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
          name: 'Immobilie als Kapitalanlage',
          item: 'https://immo-rechner.net/ratgeber/immobilie-als-kapitalanlage',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Lohnt sich eine Immobilie als Kapitalanlage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine Immobilie lohnt sich als Kapitalanlage, wenn die Nettomietrendite die Finanzierungskosten übersteigt oder wenn langfristige Wertsteigerung erwartet wird. In deutschen B- und C-Lagen sind Bruttomietrenditen von 4–6 % realistisch. In A-Lagen wie München oder Frankfurt liegen die Renditen oft unter 3 %, weshalb dort vor allem Wertsteigerungspotenzial zählt.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie viel Eigenkapital brauche ich für eine Kapitalanlage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Für eine Immobilien-Kapitalanlage solltest du mindestens 20–30 % des Kaufpreises als Eigenkapital mitbringen, plus die Kaufnebenkosten (10–15 %). Das ergibt einen Eigenkapitalbedarf von ca. 30–45 % des Kaufpreises. Manche Banken finanzieren Kapitalanleger bis zu 90 % des Kaufpreises, aber mit höheren Zinsen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Rendite ist bei Immobilien realistisch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Realistisch sind Bruttomietrenditen von 3–6 % je nach Lage. Nach Abzug aller Kosten (Hausgeld, Verwaltung, Leerstand) und Finanzierungskosten bleibt eine Nettomietrendite von 2–4 %. Bei Einbezug von Wertsteigerung und steuerlichen Vorteilen (AfA) können Gesamtrenditen (IRR) von 5–10 % p.a. realistisch sein.',
          },
        },
        {
          '@type': 'Question',
          name: 'Immobilie oder ETF als Kapitalanlage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Beides hat Vor- und Nachteile: ETFs bieten höhere Liquidität, geringere Transaktionskosten und historisch 7–9 % p.a. Rendite. Immobilien bieten Hebelwirkung durch Fremdfinanzierung, steuerliche Vorteile (AfA, Werbungskosten) und einen Inflationsschutz. Für die meisten Anleger ist eine Kombination aus beiden sinnvoll.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Kosten fallen beim Immobilienkauf an?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kaufnebenkosten: Grunderwerbsteuer (3,5–6,5 %), Notarkosten (1–1,5 %), Grundbuchgebühren (0,5 %) und ggf. Maklerprovision (1,785–3,57 %). Zusammen 10–15 % des Kaufpreises. Laufende Kosten: Hausgeld (2,50–4 €/m²), Instandhaltungsrücklage, Verwaltungskosten.',
          },
        },
      ],
    },
  ],
};

export default function ImmobilieAlsKapitalanlagePage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLdData} />
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:text-teal-600">Startseite</Link></li>
            <li aria-hidden="true"> / </li>
            <li><Link href="/" className="hover:text-teal-600">Ratgeber</Link></li>
            <li aria-hidden="true"> / </li>
            <li className="text-gray-800" aria-current="page">Immobilie als Kapitalanlage</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Immobilie als Kapitalanlage: Der ultimative Guide 2026
        </h1>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Immobilien sind in Deutschland seit Jahrzehnten eine beliebte Kapitalanlage. Doch die Frage
          &ldquo;Lohnt es sich?&rdquo; lässt sich nicht pauschal beantworten — sie hängt vom Objekt,
          vom Standort, von der Finanzierung und deiner persönlichen Steuersituation ab. Dieser Guide
          zeigt dir Schritt für Schritt, wie du eine fundierte Investitionsentscheidung triffst.
        </p>

        <QuickAnswer
          question="Lohnt sich eine Immobilie als Kapitalanlage?"
          answer="Eine Immobilie lohnt sich als Kapitalanlage, wenn die Nettomietrendite die Finanzierungskosten übersteigt oder wenn substanzielle Wertsteigerung erwartet wird. In B-Lagen (Leipzig, Hannover, Nürnberg) sind Bruttomietrenditen von 4–5 % realistisch. Hinzu kommen steuerliche Vorteile (AfA, Zinsenabzug) und der steuerfreie Verkauf nach 10 Jahren."
          keyFacts={[
            "Kaufpreisfaktor unter 25 = potenziell rentabel (> 4 % Bruttomietrendite)",
            "Nettomietrendite sollte den Darlehenszins übersteigen für positiven Cashflow",
            "A-Lagen: 2–3 % Bruttomietrendite — lohnt sich v.a. durch Wertsteigerung",
            "B/C-Lagen: 4–7 % Bruttomietrendite — besserer Cashflow, mehr Risiko",
            "Steuerfreier Verkauf nach 10 Jahren Haltedauer (Spekulationsfrist)",
          ]}
        />

        {/* Table of Contents */}
        <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8" aria-label="Inhaltsverzeichnis">
          <h2 className="font-semibold text-gray-800 mb-3">Inhaltsverzeichnis</h2>
          <ol className="space-y-1 text-sm text-teal-700">
            <li><a href="#warum-immobilien" className="hover:underline">1. Warum Immobilien als Kapitalanlage?</a></li>
            <li><a href="#kennzahlen" className="hover:underline">2. Die wichtigsten Renditekennzahlen</a></li>
            <li><a href="#rechner" className="hover:underline">3. Rendite berechnen (Rechner)</a></li>
            <li><a href="#finanzierung" className="hover:underline">4. Finanzierung planen</a></li>
            <li><a href="#standort" className="hover:underline">5. Standortwahl: A-, B- und C-Lagen</a></li>
            <li><a href="#steuern" className="hover:underline">6. Steuerliche Vorteile</a></li>
            <li><a href="#risiken" className="hover:underline">7. Risiken und wie du sie minimierst</a></li>
            <li><a href="#schritt-fuer-schritt" className="hover:underline">8. Schritt-für-Schritt zum Kauf</a></li>
            <li><a href="#faq" className="hover:underline">9. Häufige Fragen</a></li>
          </ol>
        </nav>

        <section id="warum-immobilien" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Warum Immobilien als Kapitalanlage?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Immobilien bieten drei fundamentale Vorteile, die andere Anlageformen nicht kombinieren können:
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3 text-gray-600">
              <span className="text-teal-600 font-bold mt-0.5">1.</span>
              <span><strong className="text-gray-800">Hebelwirkung (Leverage):</strong> Du investierst 50.000 € Eigenkapital und kontrollierst eine 250.000-€-Immobilie. Steigt der Wert um 5 %, hast du 12.500 € Gewinn auf 50.000 € Einsatz — das sind 25 % Eigenkapitalrendite.</span>
            </li>
            <li className="flex gap-3 text-gray-600">
              <span className="text-teal-600 font-bold mt-0.5">2.</span>
              <span><strong className="text-gray-800">Steuerliche Vorteile:</strong> AfA (2–3 % Abschreibung p.a.), Zinsen als Werbungskosten und steuerfreier Verkauf nach 10 Jahren Haltezeit.</span>
            </li>
            <li className="flex gap-3 text-gray-600">
              <span className="text-teal-600 font-bold mt-0.5">3.</span>
              <span><strong className="text-gray-800">Inflationsschutz:</strong> Mieten und Immobilienwerte steigen historisch mit der Inflation. Ein Darlehen in Euro wird in realer Kaufkraft durch Inflation entwertet.</span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Der Nachteil: Immobilien sind illiquide (du kannst nicht schnell &ldquo;aussteigen&rdquo;),
            kapitalintensiv und verursachen laufende Verwaltungsarbeit. Das macht sie für viele Anleger
            attraktiv, aber nicht für jeden geeignet.
          </p>
        </section>

        <section id="kennzahlen" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Die wichtigsten Renditekennzahlen</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Um Investitionsobjekte vergleichen zu können, nutzen Investoren standardisierte Kennzahlen:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Kennzahl</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Formel</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Gut wenn...</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-800">Bruttomietrendite</td>
                  <td className="px-4 py-3 text-gray-600">Jahreskaltmiete / Kaufpreis × 100</td>
                  <td className="px-4 py-3 text-gray-600">≥ 4 %</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">Nettomietrendite</td>
                  <td className="px-4 py-3 text-gray-600">(Miete − Kosten) / Gesamtinvestition × 100</td>
                  <td className="px-4 py-3 text-gray-600">≥ Zinssatz</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-800">Kaufpreisfaktor</td>
                  <td className="px-4 py-3 text-gray-600">Kaufpreis / Jahreskaltmiete</td>
                  <td className="px-4 py-3 text-gray-600">≤ 25</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">Cashflow</td>
                  <td className="px-4 py-3 text-gray-600">Miete − alle Kosten − Kreditrate</td>
                  <td className="px-4 py-3 text-gray-600">≥ 0 € / Monat</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-800">IRR</td>
                  <td className="px-4 py-3 text-gray-600">Interne Rendite inkl. Wertsteigerung</td>
                  <td className="px-4 py-3 text-gray-600">≥ 6 % p.a.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Beginne immer mit der Bruttomietrendite als schnellen Filter. Alles unter 4 % in der aktuellen
            Zinsumgebung erfordert eine sehr gute Begründung (Wertsteigerungspotenzial, steuerliche Situation).
          </p>
        </section>

        <section id="rechner" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Rendite berechnen</h2>
          <p className="text-gray-600 mb-4">
            Trage die Daten deines Wunschobjekts ein und berechne sofort Brutto- und Nettomietrendite:
          </p>
          <RenditerechnerSimple />
          <p className="text-sm text-gray-500 mt-3">
            Für eine vollständige Cashflow-Analyse inklusive Finanzierung, Steuern und Wertsteigerung nutze
            unseren{' '}
            <Link href="/cashflow-rechner" className="text-teal-600 hover:underline">
              vollständigen Cashflow-Rechner
            </Link>
            .
          </p>
        </section>

        <section id="finanzierung" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Finanzierung planen</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Die Finanzierung ist der Hebel, der Immobilien-Investments besonders attraktiv (oder riskant)
            macht. Plane folgende Komponenten:
          </p>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Eigenkapital</h3>
              <p className="text-sm text-gray-600">
                Plane mindestens 20 % Eigenkapital auf den Kaufpreis plus alle Kaufnebenkosten (10–15 %).
                Das ergibt einen Eigenkapitalbedarf von ca. 30–45 % des Kaufpreises. Mehr Eigenkapital
                bedeutet niedrigeren Zinssatz und besseren Cashflow.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Zinsbindung wählen</h3>
              <p className="text-sm text-gray-600">
                In einem Umfeld mit Zinsen von 4–5 % (2026) empfehlen sich 15–20 Jahre Zinsbindung für
                Planungssicherheit. Kürzere Zinsbindungen sind günstiger, bergen aber das Risiko einer
                teuren Anschlussfinanzierung.
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Anfangstilgung</h3>
              <p className="text-sm text-gray-600">
                2 % Anfangstilgung ist für die meisten Kapitalanleger ein guter Kompromiss: ausreichender
                Eigenkapitalaufbau bei vertretbarem Cashflow-Druck. Bei niedrigeren Zinsen war 1 % verbreitet,
                heute sind 2–3 % sinnvoller.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/ratgeber/finanzierung"
              className="text-teal-600 hover:underline font-medium"
            >
              Ausführlicher Ratgeber: Immobilien Finanzierung →
            </Link>
          </div>
        </section>

        <section id="standort" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Standortwahl: A-, B- und C-Lagen</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Die Lage ist der wichtigste Faktor für eine Immobilien-Kapitalanlage — und gleichzeitig
            der größte Trade-off zwischen Rendite und Sicherheit:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Lagetyp</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Beispiele</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Bruttomietrendite</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Profil</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-800">A-Lage</td>
                  <td className="px-4 py-3 text-gray-600">München, Frankfurt, Hamburg</td>
                  <td className="px-4 py-3 text-gray-600">2–3 %</td>
                  <td className="px-4 py-3 text-gray-600">Sicherheit, Wertsteigerung</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">B-Lage</td>
                  <td className="px-4 py-3 text-gray-600">Hannover, Nürnberg, Leipzig</td>
                  <td className="px-4 py-3 text-gray-600">3,5–5 %</td>
                  <td className="px-4 py-3 text-gray-600">Balance aus Rendite & Sicherheit</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-800">C-Lage</td>
                  <td className="px-4 py-3 text-gray-600">Chemnitz, Magdeburg, Halle</td>
                  <td className="px-4 py-3 text-gray-600">5–8 %</td>
                  <td className="px-4 py-3 text-gray-600">Rendite, höheres Risiko</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mt-4">
            Für Einsteiger empfehlen sich B-Lagen: akzeptable Renditen bei überschaubarem Leerstandsrisiko
            und stabiler Nachfrage. C-Lagen können sehr attraktiv sein, erfordern aber gute Marktkenntnisse
            und ein höheres Risikopuffer.
          </p>
        </section>

        <section id="steuern" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Steuerliche Vorteile</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Steuern können einen erheblichen Teil der Rendite ausmachen — in beide Richtungen. Die
            wichtigsten steuerlichen Hebel für Vermieter:
          </p>
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold text-gray-800">AfA (Abschreibung für Abnutzung)</dt>
              <dd className="text-gray-600 text-sm mt-1">
                2 % des Gebäudewerts pro Jahr (Altbau) bzw. 3 % (Neubau ab 2023) sind steuerlich
                absetzbar — ohne realen Geldabfluss. Bei einem Gebäudewert von 150.000 € spart die
                AfA (3.000 €/Jahr) bei 42 % Steuersatz 1.260 € / Jahr.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800">Hypothekenzinsen als Werbungskosten</dt>
              <dd className="text-gray-600 text-sm mt-1">
                Der Zinsanteil deiner monatlichen Kreditrate ist vollständig als Werbungskosten
                absetzbar (nicht der Tilgungsanteil). Das verbessert deinen After-Tax-Cashflow erheblich.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800">Spekulationsfrist: Steuerfreier Verkauf nach 10 Jahren</dt>
              <dd className="text-gray-600 text-sm mt-1">
                Verkaufst du nach mehr als 10 Jahren Haltedauer, ist der Gewinn komplett steuerfrei —
                unabhängig von der Höhe. Bei einer Wertsteigerung von 150.000 € und 42 % Grenzsteuersatz
                sind das 63.000 € Steuerersparnis.
              </dd>
            </div>
          </dl>
          <div className="mt-4">
            <Link href="/ratgeber/steuervorteile-vermietung" className="text-teal-600 hover:underline font-medium">
              Ausführlicher Ratgeber: Steuervorteile bei Vermietung →
            </Link>
          </div>
        </section>

        <section id="risiken" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Risiken und wie du sie minimierst</h2>
          <div className="space-y-4">
            {[
              {
                risk: 'Leerstand und Mietausfall',
                mitigation:
                  'Wähle Objekte in Lagen mit niedriger Leerstandsquote. Halte eine Liquiditätsreserve von 3–6 Monatskaltmieten. Rechtsschutzversicherung mit Mietrechtsbaustein.',
              },
              {
                risk: 'Refinanzierungsrisiko',
                mitigation:
                  'Wähle lange Zinsbindungen (15–20 Jahre) in Zeiten hoher Zinsen. Tilge ausreichend, um die Restschuld bei Anschlussfinanzierung zu begrenzen.',
              },
              {
                risk: 'Instandhaltungskosten',
                mitigation:
                  'Prüfe vor dem Kauf den Zustand des Gebäudes und die Höhe der WEG-Rücklage. Plane 1–2 €/m² Instandhaltungskosten pro Monat ein.',
              },
              {
                risk: 'Wertverfall',
                mitigation:
                  'Kaufe in strukturell stabilen oder wachsenden Lagen. Vermeide Objekte mit strukturellen Problemen (schlechte Mikrolage, fehlende Infrastruktur).',
              },
              {
                risk: 'Zinsänderungsrisiko',
                mitigation:
                  'Finanziere konservativ mit ausreichend Eigenkapital und einer Tilgungsrate, die auch bei 2 % höheren Zinsen noch tragbar ist.',
              },
            ].map((item) => (
              <div key={item.risk} className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{item.risk}</h3>
                <p className="text-sm text-gray-600">{item.mitigation}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="schritt-fuer-schritt" className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Schritt-für-Schritt zum Kauf</h2>
          <ol className="space-y-4">
            {[
              { step: 1, title: 'Ziel und Budget definieren', desc: 'Wie viel Eigenkapital hast du? Wie hoch darf die monatliche Belastung sein? Welches Risikoprofil passt zu dir?' },
              { step: 2, title: 'Markt und Standort recherchieren', desc: 'Analysiere Kaufpreis- und Mietpreisentwicklung in deinen Zielmärkten. Nutze Portale wie Immoscout24 für Marktpreise.' },
              { step: 3, title: 'Objekte vorfiltern', desc: 'Berechne für jeden Kandidaten sofort die Bruttomietrendite. Alles unter 4 % aussortieren (außer mit überzeugenden Wertsteigerungsargumenten).' },
              { step: 4, title: 'Vollständige Cashflow-Analyse', desc: 'Für die verbleibenden Kandidaten: vollständige Kalkulation mit Finanzierungskosten, Hausgeld, Verwaltung, Steuern und Leerstandsrisiko.' },
              { step: 5, title: 'Finanzierung vorab klären', desc: 'Hol dir Finanzierungszusagen ein, bevor du Angebote machst. Nutze Vergleichsportale (Interhyp, Dr. Klein) für die besten Konditionen.' },
              { step: 6, title: 'Objekt besichtigen und prüfen', desc: 'Persönliche Besichtigung, WEG-Protokolle der letzten 3 Jahre prüfen, Teilungserklärung lesen, ggf. Gutachter hinzuziehen.' },
              { step: 7, title: 'Kaufvertrag und Notartermin', desc: 'Lass den Kaufvertrag vorab prüfen. Beim Notartermin werden Kaufvertrag und Finanzierung beurkundet.' },
              { step: 8, title: 'Übergabe und Vermietung', desc: 'Professionelle Übergabe mit Protokoll. Bonität des Mieters prüfen. SCHUFA-Auskunft, Einkommensnachweise, Vormieterbestätigung.' },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Häufige Fragen</h2>
          <dl className="space-y-5">
            <div>
              <dt className="font-semibold text-gray-800 mb-1">Lohnt sich eine Immobilie als Kapitalanlage?</dt>
              <dd className="text-gray-600 leading-relaxed">
                Eine Immobilie lohnt sich, wenn Nettomietrendite die Finanzierungskosten übersteigt oder
                langfristige Wertsteigerung erwartet wird. In deutschen B- und C-Lagen sind Bruttomietrenditen
                von 4–6 % realistisch.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 mb-1">Wie viel Eigenkapital brauche ich?</dt>
              <dd className="text-gray-600 leading-relaxed">
                Mindestens 20–30 % des Kaufpreises plus Kaufnebenkosten (10–15 %) — also ca. 30–45 %
                des Kaufpreises als Gesamteigenkapitalbedarf.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 mb-1">Welche Rendite ist realistisch?</dt>
              <dd className="text-gray-600 leading-relaxed">
                Bruttomietrenditen von 3–6 %, Nettomietrenditen von 2–4 %. Gesamtrendite (IRR) inkl.
                Wertsteigerung und Steuereffekten: 5–10 % p.a. möglich.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 mb-1">Immobilie oder ETF?</dt>
              <dd className="text-gray-600 leading-relaxed">
                ETFs: höhere Liquidität, geringere Transaktionskosten, 7–9 % historische Rendite.
                Immobilien: Hebelwirkung, Steuervorteile, Inflationsschutz. Beide ergänzen sich sinnvoll.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-800 mb-1">Welche Kosten fallen beim Kauf an?</dt>
              <dd className="text-gray-600 leading-relaxed">
                Grunderwerbsteuer (3,5–6,5 %), Notar (1–1,5 %), Grundbuch (0,5 %), Makler (1,785–3,57 %).
                Gesamt: 10–15 % des Kaufpreises.
              </dd>
            </div>
          </dl>
        </section>

        {/* Related links */}
        <section className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Weiterführende Rechner & Ratgeber</h2>
          <ul className="space-y-2">
            <li><Link href="/cashflow-rechner" className="text-teal-600 hover:underline font-medium">→ Cashflow Rechner — monatlichen Überschuss berechnen</Link></li>
            <li><Link href="/rendite-rechner" className="text-teal-600 hover:underline font-medium">→ Rendite Rechner — Brutto- und Nettomietrendite</Link></li>
            <li><Link href="/irr-rechner" className="text-teal-600 hover:underline font-medium">→ IRR Rechner — Gesamtrendite berechnen</Link></li>
            <li><Link href="/kaufnebenkosten-rechner" className="text-teal-600 hover:underline font-medium">→ Kaufnebenkosten Rechner</Link></li>
            <li><Link href="/ratgeber/finanzierung" className="text-teal-600 hover:underline font-medium">→ Ratgeber: Immobilien Finanzierung</Link></li>
            <li><Link href="/ratgeber/cashflow-immobilien" className="text-teal-600 hover:underline font-medium">→ Ratgeber: Cashflow bei Immobilien</Link></li>
            <li><Link href="/ratgeber/irr-erklaert" className="text-teal-600 hover:underline font-medium">→ Ratgeber: IRR erklärt</Link></li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
