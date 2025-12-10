export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://immo-rechner.net/#website",
        "url": "https://immo-rechner.net",
        "name": "Immobilien Rechner",
        "description": "Kostenloser Rechner für Immobilieninvestitionen - IRR, Cashflow und Rendite berechnen für den deutschen Immobilienmarkt",
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
        "description": "Analysiere potenzielle Immobilieninvestitionen in Minuten. Berechne IRR (Internal Rate of Return), monatlichen Cashflow und Vermögenszuwachs über 10-30 Jahre für deine erste oder nächste Immobilieninvestition.",
        "featureList": [
          "IRR Berechnung (Internal Rate of Return)",
          "Monatlicher Cashflow Analyse",
          "Vermögenszuwachs über 10-30 Jahre",
          "Mieterhöhungen planbar",
          "Szenarien speichern und vergleichen",
          "Kaufnebenkosten Berechnung",
          "Eigenkapitalrendite",
          "Tilgungsplan"
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
          "url": "https://immo-rechner.net/logo.png",
        },
        "sameAs": [],
      },
      {
        "@type": "SoftwareApplication",
        "name": "Immobilien Rechner",
        "applicationCategory": "FinanceApplication",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "1"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR"
        }
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
