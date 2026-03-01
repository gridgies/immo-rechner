import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GLOSSARY_TERMS } from '@/data/glossary';

export const metadata: Metadata = {
  title: 'Immobilien-Lexikon für Kapitalanleger | Immo-Rechner.net',
  description:
    'Alle wichtigen Begriffe rund um Immobilien als Kapitalanlage: Bruttomietrendite, IRR, AfA, Kaufpreisfaktor, Cashflow und mehr — mit Formeln und Beispielen.',
  alternates: { canonical: 'https://immo-rechner.net/lexikon' },
};

export default function LexikonIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1">
          <li><Link href="/" className="hover:text-teal-600">Startseite</Link></li>
          <li aria-hidden="true"> / </li>
          <li className="text-gray-800" aria-current="page">Lexikon</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">Immobilien-Lexikon für Kapitalanleger</h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Alle wichtigen Begriffe rund um Immobilien als Kapitalanlage — von Bruttomietrendite bis
        Zinsbindung. Mit Formeln, Rechenbeispielen und direkten Links zu den passenden Rechnern.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {GLOSSARY_TERMS.map((term) => (
          <li key={term.slug}>
            <Link
              href={`/lexikon/${term.slug}`}
              className="block border border-gray-200 rounded-xl p-4 hover:border-teal-300 hover:bg-teal-50 transition-colors"
            >
              <span className="font-semibold text-gray-800 block">{term.term}</span>
              <span className="text-xs text-gray-500 line-clamp-2 mt-1">{term.shortDefinition}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
    <Footer />
    </div>
  );
}
