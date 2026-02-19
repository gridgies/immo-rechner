export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://immo-rechner.net/#website",
        "url": "https://immo-rechner.net",
        "name": "Immobilien Rechner",
        "description": "Kostenloser Rechner für Immobilieninvestitionen – Cashflow, IRR, Rendite und Kaufnebenkosten für den deutschen Immobilienmarkt",
        "inLanguage": "de-DE",
      },
      {
        "@type": "WebApplication",
        "@id": "https://immo-rechner.net/#webapplication",
        "url": "https://immo-rechner.net",
        "name": "Immobilien Rechner",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR"
        },
        "description": "Analysiere Immobilieninvestitionen: Berechne Cashflow, IRR, Mietrendite, Kaufnebenkosten und Steuervorteile. Mit KI-gestützter Mikrolage-Analyse.",
        "featureList": [
          "IRR Berechnung (Internal Rate of Return)",
          "Monatlicher Cashflow Analyse",
          "Vermögenszuwachs über 10-30 Jahre",
          "Kaufnebenkosten inkl. 16 Bundesländer",
          "AfA und Steuerberechnung",
          "KI-gestützte Mikrolage-Analyse",
          "Eigenkapitalrendite",
          "Tilgungsplan und Annuität",
          "Mieterhöhungen und Kostensteigerungen",
        ],
        "inLanguage": "de-DE",
        "audience": {
          "@type": "Audience",
          "audienceType": "Immobilieninvestoren, Erstkäufer, Kapitalanleger"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://immo-rechner.net/#organization",
        "name": "Immobilien Rechner",
        "url": "https://immo-rechner.net",
        "logo": {
          "@type": "ImageObject",
          "url": "https://immo-rechner.net/favicon.svg",
        },
        "sameAs": [],
      },
      // FAQPage schema for landing page
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Was ist der Cashflow bei einer Immobilie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Der Cashflow bei einer Immobilie ist die Differenz zwischen den monatlichen Mieteinnahmen und allen laufenden Kosten (Annuität, nicht umlegbares Hausgeld, Instandhaltung). Ein positiver Cashflow bedeutet, dass die Immobilie sich selbst trägt und monatlich Überschüsse erwirtschaftet."
            }
          },
          {
            "@type": "Question",
            "name": "Was bedeutet IRR bei Immobilien?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IRR steht für Internal Rate of Return (Interner Zinsfuß) und ist eine Kennzahl, die die durchschnittliche jährliche Rendite auf das eingesetzte Eigenkapital über die gesamte Haltedauer berechnet. Im Gegensatz zur einfachen Mietrendite berücksichtigt der IRR alle Zahlungsströme inklusive Kaufnebenkosten, laufende Cashflows und den Verkaufserlös."
            }
          },
          {
            "@type": "Question",
            "name": "Wie viel Eigenkapital brauche ich für eine Immobilie als Kapitalanlage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Für eine Immobilie als Kapitalanlage verlangen die meisten Banken mindestens die Kaufnebenkosten (10-13% des Kaufpreises) als Eigenkapital. Idealerweise bringen Sie 20-30% des Kaufpreises plus Nebenkosten mit, da dies zu besseren Zinskonditionen führt und den monatlichen Cashflow verbessert."
            }
          },
          {
            "@type": "Question",
            "name": "Was ist eine Mikrolage-Analyse bei Immobilien?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Eine Mikrolage-Analyse bewertet das direkte Umfeld einer Immobilie: ÖPNV-Anbindung, Einkaufsmöglichkeiten, Schulen, Ärzte, Grünflächen und potenzielle Störfaktoren wie Lärm. Unser KI-gestütztes Tool analysiert die Mikrolage automatisch anhand der Adresse und bewertet den Standort auf einer Skala von 1-10."
            }
          },
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
