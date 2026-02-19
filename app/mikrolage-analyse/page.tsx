import type { Metadata } from 'next';
import MikrolageClient from './MikrolageClient';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "KI Mikrolage-Analyse – Standort deiner Immobilie kostenlos bewerten | Immo-Rechner",
  description: "Kostenlose KI-Standortanalyse für Immobilien in Deutschland. Bewerte ÖPNV, Nahversorgung, Schulen, Ärzte und Grünflächen – mit Score und interaktiver Karte.",
  alternates: { canonical: "https://immo-rechner.net/mikrolage-analyse" },
  openGraph: {
    title: "KI Mikrolage-Analyse – Standort bewerten",
    description: "Kostenlose KI-Standortanalyse: ÖPNV, Nahversorgung, Schulen, Ärzte, Grünflächen und Lärmbelastung bewerten.",
  },
};

export default function MikrolagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">IR</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Immobilien Rechner</span>
            </Link>
            <Link href="/rechner" className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-sm font-medium">
              Zum Rechner
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Startseite</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Mikrolage-Analyse</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            KI Mikrolage-Analyse für Immobilien
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Gib die Adresse deiner Wunschimmobilie ein und erhalte eine automatische Bewertung der Mikrolage – 
            mit ÖPNV-Anbindung, Nahversorgung, Bildungseinrichtungen und mehr. Kostenlos und ohne Anmeldung.
          </p>
        </div>

        {/* Client-side interactive component */}
        <MikrolageClient />

        {/* SEO Content - server-rendered */}
        <div className="mt-16 max-w-4xl">
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
              Unsere KI-gestützte Analyse bewertet automatisch acht Kategorien, die für Mieter und 
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
          <Link href="/ratgeber/cashflow-immobilien" className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#7099A3] transition-colors">
            <div className="font-semibold text-gray-900">Ratgeber →</div>
            <div className="text-sm text-gray-600">Cashflow bei Immobilien erklärt</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
