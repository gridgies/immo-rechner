import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Immobilien Rechner | IRR & Cashflow Berechnung für Immobilieninvestitionen",
  description: "Analysiere potenzielle Immobilieninvestitionen in Minuten. Berechne IRR, Cashflow und Rendite für deine erste oder nächste Immobilieninvestition. Kostenloser Rechner für den deutschen Markt.",
  keywords: [
    "Immobilien Rechner",
    "Immobilieninvestition berechnen",
    "IRR Rechner Immobilien",
    "Cashflow Rechner Immobilien",
    "Rendite Immobilie berechnen",
    "Eigenkapitalrendite berechnen",
    "Immobilienkauf Rechner",
    "Vermietung Rechner",
    "Kaufnebenkosten Rechner",
    "Immobilie finanzieren",
    "Kapitalanlage Immobilien",
    "Mietrendite berechnen",
  ],
  authors: [{ name: "Immobilien Rechner" }],
  creator: "Immobilien Rechner",
  publisher: "Immobilien Rechner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://immo-rechner.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Immobilien Rechner | IRR & Cashflow für Immobilieninvestitionen",
    description: "Analysiere potenzielle Immobilieninvestitionen in Minuten. Berechne IRR, Cashflow und Rendite – präzise und einfach. Kostenlos für den deutschen Markt.",
    url: "https://immo-rechner.net",
    siteName: "Immobilien Rechner",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Immobilien Rechner - IRR und Cashflow Berechnung für Immobilieninvestitionen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Immobilien Rechner | IRR & Cashflow Berechnung",
    description: "Analysiere potenzielle Immobilieninvestitionen in Minuten. Kostenloser Rechner für IRR, Cashflow und Rendite im deutschen Immobilienmarkt.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Add your Google Search Console verification code here after setup
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="canonical" href="https://immo-rechner.net" />
        <meta name="theme-color" content="#7199a2" />
      </head>
      <body>{children}</body>
    </html>
  );
}
