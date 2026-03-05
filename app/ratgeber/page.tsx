import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ratgeber Immobilien Kapitalanlage — Guides für Investoren | Immo-Rechner.net',
  description:
    'Kostenlose Ratgeber für Immobilieninvestoren: Rendite, Cashflow, IRR, Finanzierung, Steuervorteile und mehr — verständlich erklärt mit Rechenbeispielen.',
  alternates: { canonical: 'https://immo-rechner.net/ratgeber' },
};

const GUIDES = [
  {
    href: '/ratgeber/kaufnebenkosten-uebersicht',
    title: 'Kaufnebenkosten beim Immobilienkauf: Alle Kosten im Überblick',
    description: 'Grunderwerbsteuer aller 16 Bundesländer, Notarkosten, Maklerprovision und Gesamtberechnung — alle Kaufnebenkosten auf einen Blick.',
    tag: 'Finanzierung',
  },
  {
    href: '/ratgeber/mietrendite-berechnen',
    title: 'Mietrendite berechnen: Formel, Beispiel & Rechner',
    description: 'Bruttomietrendite und Nettomietrendite berechnen: Formeln, Rechenbeispiele, Kaufpreisfaktor-Tabelle und Richtwerte für 2026.',
    tag: 'Rendite',
  },
  {
    href: '/ratgeber/rendite-immobilien-realistisch',
    title: 'Welche Rendite ist bei Immobilien realistisch?',
    description: 'Bruttomietrendite, Nettomietrendite und IRR: Konkrete Richtwerte 2026 für A-, B- und C-Lagen mit Rechenbeispiel Leipzig vs. München.',
    tag: 'Rendite',
  },
  {
    href: '/ratgeber/immobilie-als-kapitalanlage',
    title: 'Immobilie als Kapitalanlage: Der ultimative Guide',
    description: 'Alles was du als Immobilien-Investor wissen musst: Rendite berechnen, Finanzierung planen, Steuern verstehen — Schritt für Schritt.',
    tag: 'Einsteiger',
  },
  {
    href: '/ratgeber/wohnung-kaufen-vermieten',
    title: 'Wohnung kaufen und vermieten: Lohnt es sich?',
    description: 'Rechte & Pflichten, Cashflow berechnen, Steuervorteile nutzen und häufige Fehler vermeiden — der praktische Guide für Erstvermieter.',
    tag: 'Vermietung',
  },
  {
    href: '/ratgeber/cashflow-immobilien',
    title: 'Cashflow bei Immobilien: Berechnung & Optimierung',
    description: 'Was bedeutet Cashflow bei einer Kapitalanlage? Formel, Beispielrechnung und Tipps für einen positiven monatlichen Überschuss.',
    tag: 'Cashflow',
  },
  {
    href: '/ratgeber/irr-erklaert',
    title: 'IRR einfach erklärt: Die Gesamtrendite einer Immobilie',
    description: 'Der Internal Rate of Return bewertet deine Immobilie über die gesamte Haltedauer. Formel, Beispiel und warum der IRR wichtiger ist als die Mietrendite.',
    tag: 'Rendite',
  },
  {
    href: '/ratgeber/eigenkapital-immobilie',
    title: 'Wie viel Eigenkapital brauchst du für eine Immobilie?',
    description: 'Eigenkapitalanforderungen, Daumenregeln und Strategien für Kapitalanleger — mit Rechenbeispiel für verschiedene Finanzierungsquoten.',
    tag: 'Finanzierung',
  },
  {
    href: '/ratgeber/finanzierung',
    title: 'Immobilienfinanzierung für Kapitalanleger',
    description: 'Annuität, Tilgung, Zinsbindung und Anschlussfinanzierung — was du als Investor bei der Finanzierung beachten musst.',
    tag: 'Finanzierung',
  },
];

const TAG_COLORS: Record<string, string> = {
  Rendite: 'bg-teal-50 text-teal-700',
  Einsteiger: 'bg-blue-50 text-blue-700',
  Vermietung: 'bg-amber-50 text-amber-700',
  Cashflow: 'bg-green-50 text-green-700',
  Finanzierung: 'bg-purple-50 text-purple-700',
};

export default function RatgeberIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:text-[#7099A3]">Startseite</Link></li>
            <li aria-hidden="true"> / </li>
            <li className="text-gray-800" aria-current="page">Ratgeber</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Ratgeber Immobilien Kapitalanlage
        </h1>
        <p className="text-gray-600 leading-relaxed mb-10">
          Kostenlose Guides für Immobilien-Investoren — von der ersten Renditeberechnung bis zur steuerlichen Optimierung. Mit Formeln, Rechenbeispielen und eingebetteten Rechnern.
        </p>

        <ul className="space-y-4">
          {GUIDES.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="block border border-gray-200 rounded-xl p-5 hover:border-[#7099A3] hover:bg-[#7099A3]/5 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="font-semibold text-gray-900 group-hover:text-[#7099A3] transition-colors">
                    {guide.title}
                  </h2>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${TAG_COLORS[guide.tag] ?? 'bg-gray-100 text-gray-600'}`}>
                    {guide.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{guide.description}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
          <p className="text-gray-600 text-sm mb-3">Lieber direkt rechnen?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/rendite-rechner" className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-sm font-medium">Rendite Rechner</Link>
            <Link href="/irr-rechner" className="px-4 py-2 border border-[#7099A3] text-[#7099A3] rounded-lg hover:bg-[#7099A3]/10 transition-colors text-sm font-medium">IRR Rechner</Link>
            <Link href="/kaufnebenkosten-rechner" className="px-4 py-2 border border-[#7099A3] text-[#7099A3] rounded-lg hover:bg-[#7099A3]/10 transition-colors text-sm font-medium">Kaufnebenkosten</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
