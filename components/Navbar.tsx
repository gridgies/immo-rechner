'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogIn, LogOut } from 'lucide-react';

interface NavbarProps {
  userId?: string | null;
  userEmail?: string | null;
  onSignOut?: () => void;
  onLoginClick?: () => void;
}

export default function Navbar({ userId, userEmail, onSignOut, onLoginClick }: NavbarProps = {}) {
  const pathname = usePathname();
  
  const links = [
    { href: '/cashflow-rechner', label: 'Cashflow' },
    { href: '/rendite-rechner', label: 'Rendite' },
    { href: '/kaufnebenkosten-rechner', label: 'Nebenkosten' },
    { href: '/mikrolage-analyse', label: 'Mikrolage' },
  ];

  // Check if current path matches or starts with the link href
  const isActive = (href: string) => {
    if (pathname === href) return true;
    if (pathname === '/rechner' && href === '/cashflow-rechner') return true;
    if (pathname?.startsWith('/ratgeber') && href.startsWith('/ratgeber')) return true;
    return false;
  };

  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">IR</span>
            </div>
            <span className="text-xl font-semibold text-gray-900 hidden sm:block">Immobilien Rechner</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            {links.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`hover:text-gray-900 transition-colors ${isActive(link.href) ? 'text-[#7099A3] font-medium' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {userId ? (
              <>
                <span className="hidden lg:block text-sm text-gray-600 truncate max-w-[150px]">{userEmail}</span>
                <button
                  onClick={onSignOut}
                  className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Abmelden</span>
                </button>
              </>
            ) : onLoginClick ? (
              <button
                onClick={onLoginClick}
                className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-sm font-medium flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Anmelden</span>
              </button>
            ) : (
              <Link
                href="/cashflow-rechner"
                className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors text-sm font-medium flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Anmelden</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
