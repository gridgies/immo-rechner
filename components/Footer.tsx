import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
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
          <div>
            <h3 className="font-semibold mb-4">Rechner</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/rechner" className="text-gray-400 hover:text-white transition-colors">Komplett-Rechner</Link></li>
              <li><Link href="/cashflow-rechner" className="text-gray-400 hover:text-white transition-colors">Cashflow Rechner</Link></li>
              <li><Link href="/rendite-rechner" className="text-gray-400 hover:text-white transition-colors">Rendite Rechner</Link></li>
              <li><Link href="/irr-rechner" className="text-gray-400 hover:text-white transition-colors">IRR Rechner</Link></li>
              <li><Link href="/kaufnebenkosten-rechner" className="text-gray-400 hover:text-white transition-colors">Kaufnebenkosten</Link></li>
              <li><Link href="/mikrolage-analyse" className="text-gray-400 hover:text-white transition-colors">Mikrolage-Analyse</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Ratgeber</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ratgeber/cashflow-immobilien" className="text-gray-400 hover:text-white transition-colors">Cashflow bei Immobilien</Link></li>
              <li><Link href="/ratgeber/irr-erklaert" className="text-gray-400 hover:text-white transition-colors">IRR einfach erklärt</Link></li>
              <li><Link href="/ratgeber/eigenkapital-immobilie" className="text-gray-400 hover:text-white transition-colors">Eigenkapital für Immobilien</Link></li>
              <li><Link href="/ratgeber/finanzierung" className="text-gray-400 hover:text-white transition-colors">Immobilienfinanzierung</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">Impressum</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Immobilien Rechner. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
