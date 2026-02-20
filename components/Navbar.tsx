'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const links = [
    { href: '/cashflow-rechner', label: 'Cashflow' },
    { href: '/rendite-rechner', label: 'Rendite' },
    { href: '/kaufnebenkosten-rechner', label: 'Nebenkosten' },
    { href: '/mikrolage-analyse', label: 'Mikrolage' },
  ];

  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">IR</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Immobilien Rechner</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            {links.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`hover:text-gray-900 transition-colors ${pathname === link.href ? 'text-[#7099A3] font-medium' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/rechner"
            className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-sm font-medium"
          >
            Zum Rechner
          </Link>
        </div>
      </div>
    </nav>
  );
}
