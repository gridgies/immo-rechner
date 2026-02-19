import type { Metadata } from 'next';
import AppWithAuth from '@/components/AppWithAuth';

export const metadata: Metadata = {
  title: "Immobilien Rechner – Cashflow, IRR & Rendite berechnen | Immo-Rechner",
  description: "Berechne Cashflow, IRR, Eigenkapitalrendite und Vermögenszuwachs deiner Immobilieninvestition. Kostenloser Rechner mit AfA-Berechnung für den deutschen Markt.",
  alternates: { canonical: "https://immo-rechner.net/rechner" },
};

export default function RechnerPage() {
  return <AppWithAuth />;
}
