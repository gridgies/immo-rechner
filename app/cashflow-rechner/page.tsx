import type { Metadata } from 'next';
import AppWithAuth from '@/components/AppWithAuth';
import JsonLd from '@/components/JsonLd';

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://immo-rechner.net/cashflow-rechner#app",
      "name": "Cashflow Rechner Immobilien (inkl. IRR)",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "url": "https://immo-rechner.net/cashflow-rechner",
      "description": "Berechne Cashflow, IRR und Eigenkapitalrendite deiner Immobilieninvestition. Inkl. AfA, Steuer, Mieterhöhungen und Wertsteigerung über 10–30 Jahre.",
      "featureList": [
        "IRR Berechnung (Internal Rate of Return)",
        "Monatlicher und jährlicher Cashflow",
        "Eigenkapitalrendite",
        "AfA und Steuerberechnung",
        "Mieterhöhungen und Kostensteigerungen",
        "Wertsteigerung und Verkaufserlös",
        "Vermögenszuwachs über 10–30 Jahre"
      ],
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
      "inLanguage": "de-DE"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://immo-rechner.net" },
        { "@type": "ListItem", "position": 2, "name": "Cashflow Rechner", "item": "https://immo-rechner.net/cashflow-rechner" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Was berechnet der Cashflow Rechner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der Cashflow Rechner berechnet den monatlichen Netto-Cashflow (Mieteinnahmen minus Annuität minus Hausgeld), den IRR (Internal Rate of Return) als jährliche Eigenkapitalrendite, den Vermögenszuwachs über die gewählte Haltedauer und die Steuereffekte durch AfA und Werbungskosten."
          }
        },
        {
          "@type": "Question",
          "name": "Was ist der IRR bei Immobilien?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Der IRR (Internal Rate of Return) ist die durchschnittliche jährliche Rendite auf das eingesetzte Eigenkapital über die gesamte Haltedauer. Er berücksichtigt den Zeitwert des Geldes und alle Zahlungsströme – von der Anfangsinvestition bis zum Verkaufserlös. Ein IRR von 6–10% gilt als gut bis sehr gut."
          }
        },
        {
          "@type": "Question",
          "name": "Brauche ich eine Anmeldung für den Cashflow Rechner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Für eine einfache Berechnung ist keine Anmeldung nötig. Wer Berechnungen speichern und verwalten möchte, kann sich kostenlos registrieren. Alternativ stehen der kostenlose Rendite Rechner und Kaufnebenkosten Rechner ohne Anmeldung zur Verfügung."
          }
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Cashflow Rechner Immobilien (inkl. IRR) – Kostenlos berechnen | Immo-Rechner",
  description: "Berechne Cashflow, IRR und Eigenkapitalrendite deiner Immobilieninvestition. Kostenloser Rechner inkl. Mieteinnahmen, AfA, Steuer und Wertsteigerung für den deutschen Markt.",
  alternates: { canonical: "https://immo-rechner.net/cashflow-rechner" },
  openGraph: {
    title: "Cashflow Rechner für Immobilien (inkl. IRR) – kostenlos berechnen",
    description: "Monatlichen Cashflow und IRR deiner Immobilieninvestition berechnen. Kostenloser Rechner für Mieteinnahmen, Kosten und Rendite.",
    images: [
      {
        url: "/api/og?title=Cashflow+Rechner+Immobilien+(inkl.+IRR)&subtitle=Monatlichen+Cashflow+%26+Eigenkapitalrendite+berechnen",
        width: 1200,
        height: 630,
        alt: "Cashflow Rechner für Immobilien inkl. IRR – kostenlos berechnen",
      },
    ],
  },
};

export default function CashflowRechnerPage() {
  return (
    <>
      <JsonLd data={jsonLdData} />
      <AppWithAuth />
    </>
  );
}
