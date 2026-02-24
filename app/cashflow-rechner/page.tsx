import type { Metadata } from 'next';
import AppWithAuth from '@/components/AppWithAuth';

export const metadata: Metadata = {
  title: "Cashflow Rechner Immobilien (inkl. IRR) – Kostenlos berechnen | Immo-Rechner",
  description: "Berechne Cashflow, IRR und Eigenkapitalrendite deiner Immobilieninvestition. Kostenloser Rechner inkl. Mieteinnahmen, AfA, Steuer und Wertsteigerung für den deutschen Markt.",
  alternates: { canonical: "https://immo-rechner.net/cashflow-rechner" },
  openGraph: {
    title: "Cashflow Rechner für Immobilien (inkl. IRR) – kostenlos berechnen",
    description: "Monatlichen Cashflow und IRR deiner Immobilieninvestition berechnen. Kostenloser Rechner für Mieteinnahmen, Kosten und Rendite.",
  },
};

export default function CashflowRechnerPage() {
  return <AppWithAuth />;
}
