import type { Metadata } from 'next';
import MikrolageClient from './MikrolageClient';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://immo-rechner.net/mikrolage-analyse#app",
      "name": "Mikrolage-Analyse für Immobilien",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web",
      "url": "https://immo-rechner.net/mikrolage-analyse",
      "description": "Kostenlose KI-gestützte Standortanalyse für Immobilien in Deutschland: ÖPNV, Nahversorgung, Schulen, Ärzte, Grünflächen und Lärmbelastung.",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
      "inLanguage": "de-DE"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://immo-rechner.net" },
        { "@type": "ListItem", "position": 2, "name": "Mikrolage-Analyse", "item": "https://immo-rechner.net/mikrolage-analyse" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Was ist eine Mikrolage-Analyse bei Immobilien?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Mikrolage-Analyse bewertet das unmittelbare Umfeld einer Immobilie in einem Radius von wenigen hundert Metern bis zwei Kilometern. Sie analysiert ÖPNV-Anbindung, Einkaufsmöglichkeiten, Schulen, Ärzte, Gastronomie, Grünflächen und Lärmquellen – und gibt einen Score von 1–10."
          }
        },
        {
          "@type": "Question",
          "name": "Welche Faktoren werden bei der Mikrolage bewertet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unsere Analyse bewertet acht Kategorien: ÖPNV-Anbindung (Bus, U-Bahn, S-Bahn), Nahversorgung (Supermärkte), Bildungseinrichtungen (Schulen, Kitas), medizinische Versorgung (Ärzte, Apotheken), Gastronomie, Grünflächen, Bahnhofsnähe und potenzielle Lärmbelastung durch Hauptverkehrsstraßen."
          }
        },
        {
          "@type": "Question",
          "name": "Warum ist die Mikrolage für Immobilieninvestoren wichtig?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Mikrolage beeinflusst direkt die Vermietbarkeit und die erzielbare Miete. Eine Wohnung mit guter ÖPNV-Anbindung und Nahversorgung erzielt höhere Mieten und hat geringeres Leerstandsrisiko als ein vergleichbares Objekt ohne diese Vorteile. Für die Renditeberechnung ist die Mikrolage daher unverzichtbar."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist der Unterschied zwischen Mikrolage und Makrolage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Makrolage beschreibt die übergeordnete Lage: Stadt, Region, Wirtschaftsstruktur, Einwohnerentwicklung. Die Mikrolage betrachtet das direkte Umfeld der Immobilie: konkrete Straße, Stadtteil, Infrastruktur im Umkreis von 500 m bis 2 km. Beide Ebenen sind wichtig für eine vollständige Standortbewertung."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Mikrolage-Analyse – Standort deiner Immobilie kostenlos bewerten | Immo-Rechner",
  description: "Kostenlose Standortanalyse für Immobilien in Deutschland. Bewerte ÖPNV, Nahversorgung, Schulen, Ärzte und Grünflächen – mit Score und interaktiver Karte.",
  alternates: { canonical: "https://immo-rechner.net/mikrolage-analyse" },
  openGraph: {
    title: "Mikrolage-Analyse – Standort bewerten",
    description: "Kostenlose Standortanalyse: ÖPNV, Nahversorgung, Schulen, Ärzte, Grünflächen und Lärmbelastung bewerten.",
    images: [
      {
        url: "/api/og?title=Mikrolage-Analyse+f%C3%BCr+Immobilien&subtitle=Standort+kostenlos+bewerten+%E2%80%93+%C3%96PNV%2C+Infrastruktur%2C+Score",
        width: 1200,
        height: 630,
        alt: "Mikrolage-Analyse für Immobilien – Standort kostenlos bewerten",
      },
    ],
  },
};

export default function MikrolagePage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLdData} />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Mikrolage-Analyse</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mikrolage-Analyse für Immobilien
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Gib die Adresse deiner Wunschimmobilie ein und erhalte eine automatische Bewertung der Mikrolage –
            mit ÖPNV-Anbindung, Nahversorgung, Bildungseinrichtungen und mehr. Kostenlos und ohne Anmeldung.
          </p>
        </div>

        {/* Client-side interactive component */}
        <MikrolageClient />

        {/* SEO Content - server-rendered */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Was ist eine Mikrolage-Analyse?</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              Die Mikrolage beschreibt das unmittelbare Umfeld einer Immobilie und ist einer der wichtigsten
              Faktoren für die Bewertung und Vermietbarkeit eines Objekts. Im Gegensatz zur Makrolage
              (Stadt, Region, Wirtschaftsstruktur) betrachtet die Mikrolage einen Radius von wenigen hundert
              Metern bis zwei Kilometern um die Immobilie.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Welche Faktoren werden bewertet?</h3>
            <p>
              Unsere automatische Analyse bewertet acht Kategorien, die für Mieter und
              Immobilieninvestoren besonders relevant sind: die Anbindung an den öffentlichen Nahverkehr
              (Bushaltestellen, U-Bahn, S-Bahn), Einkaufsmöglichkeiten wie Supermärkte und Nahversorger,
              Bildungseinrichtungen (Schulen und Kindertagesstätten), medizinische Versorgung
              (Arztpraxen, Apotheken, Kliniken), gastronomisches Angebot, Grünflächen und Parks,
              die Nähe zu Bahnhöfen sowie potenzielle Lärmquellen durch Hauptverkehrsstraßen.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Wie funktioniert der Score?</h3>
            <p>
              Jede Kategorie wird anhand der Anzahl der gefundenen Einrichtungen im relevanten Radius
              bewertet und gewichtet. Der Gesamtscore von 1-10 gibt eine schnelle Orientierung über die
              Qualität der Mikrolage. Dabei fließen positive Faktoren (gute Infrastruktur) ebenso ein
              wie negative Faktoren (Lärmbelastung durch Hauptstraßen).
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Warum ist die Mikrolage so wichtig?</h3>
            <p>
              Die Mikrolage beeinflusst maßgeblich die Vermietbarkeit, die erzielbare Miete und die
              langfristige Wertentwicklung einer Immobilie. Eine Wohnung in einer Straße mit guter
              ÖPNV-Anbindung und Nahversorgung kann deutlich höhere Mieten erzielen als ein vergleichbares
              Objekt wenige hundert Meter entfernt ohne diese Vorteile. Für Kapitalanleger ist die
              Mikrolage-Analyse daher ein unverzichtbarer Bestandteil der Investitionsentscheidung.
            </p>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <Link href="/cashflow-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Cashflow Rechner →</div>
            <div className="text-sm text-gray-600">Monatlichen Cashflow berechnen</div>
          </Link>
          <Link href="/kaufnebenkosten-rechner" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Kaufnebenkosten →</div>
            <div className="text-sm text-gray-600">Alle Kosten im Überblick</div>
          </Link>
          <Link href="/ratgeber/finanzierung" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Ratgeber: Finanzierung →</div>
            <div className="text-sm text-gray-600">Immobilienfinanzierung verstehen</div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
