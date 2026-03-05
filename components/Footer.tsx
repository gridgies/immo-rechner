import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">IR</span>
              </div>
              <span className="text-lg font-semibold">Immobilien Rechner</span>
            </div>
            <p className="text-gray-400 text-sm">
              Der kostenlose Rechner für Immobilieninvestitionen in Deutschland.
            </p>
          </div>

          {/* Rechner */}
          <div>
            <h3 className="font-semibold mb-4">Rechner</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cashflow-rechner" className="text-gray-400 hover:text-white transition-colors">Cashflow Rechner</Link></li>
              <li><Link href="/rendite-rechner" className="text-gray-400 hover:text-white transition-colors">Rendite Rechner</Link></li>
              <li><Link href="/kaufnebenkosten-rechner" className="text-gray-400 hover:text-white transition-colors">Kaufnebenkosten</Link></li>
              <li><Link href="/irr-rechner" className="text-gray-400 hover:text-white transition-colors">IRR Rechner</Link></li>
              <li><Link href="/rechner/afa-rechner-immobilien" className="text-gray-400 hover:text-white transition-colors">AfA Rechner</Link></li>
              <li><Link href="/rechner/grunderwerbsteuer-rechner" className="text-gray-400 hover:text-white transition-colors">Grunderwerbsteuer</Link></li>
              <li><Link href="/mikrolage-analyse" className="text-gray-400 hover:text-white transition-colors">Mikrolage-Analyse</Link></li>
            </ul>
          </div>

          {/* Ratgeber */}
          <div>
            <h3 className="font-semibold mb-4">Ratgeber</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ratgeber" className="text-gray-400 hover:text-white transition-colors">Alle Ratgeber →</Link></li>
              <li><Link href="/ratgeber/kaufnebenkosten-uebersicht" className="text-gray-400 hover:text-white transition-colors">Kaufnebenkosten Übersicht</Link></li>
              <li><Link href="/ratgeber/mietrendite-berechnen" className="text-gray-400 hover:text-white transition-colors">Mietrendite berechnen</Link></li>
              <li><Link href="/ratgeber/rendite-immobilien-realistisch" className="text-gray-400 hover:text-white transition-colors">Rendite realistisch 2026</Link></li>
              <li><Link href="/ratgeber/immobilie-als-kapitalanlage" className="text-gray-400 hover:text-white transition-colors">Immobilie als Kapitalanlage</Link></li>
              <li><Link href="/ratgeber/wohnung-kaufen-vermieten" className="text-gray-400 hover:text-white transition-colors">Wohnung kaufen &amp; vermieten</Link></li>
              <li><Link href="/ratgeber/cashflow-immobilien" className="text-gray-400 hover:text-white transition-colors">Cashflow bei Immobilien</Link></li>
              <li><Link href="/ratgeber/finanzierung" className="text-gray-400 hover:text-white transition-colors">Immobilienfinanzierung</Link></li>
            </ul>
          </div>

          {/* Stadtseiten & Lexikon */}
          <div>
            <h3 className="font-semibold mb-4">Stadtseiten</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/immobilien-kapitalanlage" className="text-gray-400 hover:text-white transition-colors">Alle Städte →</Link></li>
              <li><Link href="/immobilien-kapitalanlage/berlin" className="text-gray-400 hover:text-white transition-colors">Berlin</Link></li>
              <li><Link href="/immobilien-kapitalanlage/hamburg" className="text-gray-400 hover:text-white transition-colors">Hamburg</Link></li>
              <li><Link href="/immobilien-kapitalanlage/muenchen" className="text-gray-400 hover:text-white transition-colors">München</Link></li>
              <li><Link href="/immobilien-kapitalanlage/leipzig" className="text-gray-400 hover:text-white transition-colors">Leipzig</Link></li>
              <li><Link href="/immobilien-kapitalanlage/frankfurt" className="text-gray-400 hover:text-white transition-colors">Frankfurt</Link></li>
            </ul>
            <h3 className="font-semibold mt-6 mb-4">Lexikon</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/lexikon" className="text-gray-400 hover:text-white transition-colors">Alle Begriffe →</Link></li>
              <li><Link href="/lexikon/bruttomietrendite" className="text-gray-400 hover:text-white transition-colors">Bruttomietrendite</Link></li>
              <li><Link href="/lexikon/cashflow" className="text-gray-400 hover:text-white transition-colors">Cashflow</Link></li>
              <li><Link href="/lexikon/kaufpreisfaktor" className="text-gray-400 hover:text-white transition-colors">Kaufpreisfaktor</Link></li>
              <li><Link href="/lexikon/leverage-effekt" className="text-gray-400 hover:text-white transition-colors">Leverage-Effekt</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <span>© {new Date().getFullYear()} Immobilien Rechner. Alle Rechte vorbehalten.</span>
          <div className="flex gap-6">
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
