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
        "description": "Analysiere Immobilieninvestitionen: Berechne Cashflow, IRR, Mietrendite, Kaufnebenkosten und Steuervorteile. Mit Mikrolage-Analyse.",
        "featureList": [
          "IRR Berechnung (Internal Rate of Return)",
          "Monatlicher Cashflow Analyse",
          "Vermögenszuwachs über 10-30 Jahre",
          "Kaufnebenkosten inkl. 16 Bundesländer",
          "AfA und Steuerberechnung",
          "Mikrolage-Analyse",
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
      // FAQPage schema for landing page — optimized for AI search engines (AEO)
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Wie berechne ich die Mietrendite einer Immobilie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bruttomietrendite = (Jahreskaltmiete ÷ Kaufpreis) × 100. Beispiel: Kaltmiete 800 € × 12 = 9.600 € ÷ 200.000 € × 100 = 4,8 %. Die Nettomietrendite zieht zusätzlich nicht umlegbare Kosten (Hausgeld, Verwaltung) ab und addiert Kaufnebenkosten (10–15 %) zum Kaufpreis. Unser kostenloser Rendite-Rechner berechnet beides automatisch."
            }
          },
          {
            "@type": "Question",
            "name": "Wann lohnt sich eine Immobilie als Kapitalanlage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Eine Immobilie lohnt sich als Kapitalanlage, wenn der Kaufpreisfaktor unter 25 liegt (entspricht > 4 % Bruttomietrendite), die Nettomietrendite den aktuellen Darlehenszins übersteigt und/oder Wertsteigerungspotenzial besteht. In B-Lagen (Leipzig, Hannover, Nürnberg) sind 4–5 % Bruttomietrendite realistisch. Steuervorteile (AfA, Zinsenabzug) und steuerfreier Verkauf nach 10 Jahren verbessern die Gesamtrendite zusätzlich."
            }
          },
          {
            "@type": "Question",
            "name": "Was ist eine gute Rendite für eine Kapitalanlage-Immobilie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Eine Bruttomietrendite von mindestens 4 % gilt als Mindestanforderung für positive Cashflows bei aktuellen Zinsen. Als IRR (Gesamtrendite inkl. Wertsteigerung) gelten 6–10 % p.a. als gut. In A-Lagen (München, Frankfurt) liegen Bruttomietrenditen oft bei nur 2–3 % — dort zählt primär die Wertsteigerung."
            }
          },
          {
            "@type": "Question",
            "name": "Was ist der Unterschied zwischen Brutto- und Nettomietrendite?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bruttomietrendite = Jahreskaltmiete ÷ Kaufpreis × 100 — schnelle Kennzahl ohne Kosten. Nettomietrendite = (Jahreskaltmiete − nicht umlegbare Kosten) ÷ (Kaufpreis + Kaufnebenkosten) × 100 — realistischere Kennzahl. Die Nettomietrendite liegt typischerweise 0,5–1,5 Prozentpunkte unter der Bruttomietrendite."
            }
          },
          {
            "@type": "Question",
            "name": "Welche Kosten fallen beim Immobilienkauf an?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Kaufnebenkosten betragen 10–15 % des Kaufpreises: Grunderwerbsteuer 3,5–6,5 % (je nach Bundesland), Notarkosten ca. 1–1,5 %, Grundbuchgebühren ca. 0,5 %, Maklerprovision 0–3,57 % (seit 2020 hälftig geteilt). Diese müssen in der Regel aus Eigenkapital bezahlt werden."
            }
          },
          {
            "@type": "Question",
            "name": "Was ist der Cashflow bei einer Immobilie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Der Cashflow bei einer Immobilie ist die Differenz zwischen monatlichen Mieteinnahmen und allen laufenden Kosten: Annuität (Zins + Tilgung), nicht umlagefähiges Hausgeld und Verwaltungskosten. Ein positiver Cashflow bedeutet, dass die Immobilie sich selbst trägt. In B/C-Lagen sind +50 bis +200 € / Monat realistisch."
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
