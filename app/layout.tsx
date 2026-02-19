import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Immobilien Rechner – Cashflow, Rendite & IRR kostenlos berechnen (2026)",
  description: "Kostenloser Immobilien-Rechner für Deutschland: Berechne Cashflow, Mietrendite, IRR und Kaufnebenkosten in Minuten. Inkl. Grunderwerbsteuer für alle 16 Bundesländer und KI-Mikrolage-Analyse.",
  keywords: [
    "Immobilien Rechner",
    "Immobilieninvestition berechnen",
    "IRR Rechner Immobilien",
    "Cashflow Rechner Immobilien",
    "Rendite Immobilie berechnen",
    "Eigenkapitalrendite berechnen",
    "Immobilienkauf Rechner",
    "Kaufnebenkosten Rechner",
    "Mietrendite berechnen",
    "Kapitalanlage Immobilien",
    "Grunderwerbsteuer Rechner",
    "Mikrolage Analyse",
    "Standortanalyse Immobilie",
    "AfA Immobilien Rechner",
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
    languages: {
      'de': '/',
    },
  },
  openGraph: {
    title: "Immobilien Rechner – Cashflow, Rendite & IRR kostenlos berechnen",
    description: "Kostenloser Immobilien-Rechner für Deutschland. Cashflow, IRR, Mietrendite und Kaufnebenkosten berechnen – inkl. KI-Mikrolage-Analyse.",
    url: "https://immo-rechner.net",
    siteName: "Immobilien Rechner",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Immobilien Rechner – Cashflow und IRR Berechnung für Kapitalanlage-Immobilien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Immobilien Rechner – Cashflow, Rendite & IRR kostenlos berechnen",
    description: "Kostenloser Rechner für Immobilieninvestitionen in Deutschland. Cashflow, IRR, Rendite, Kaufnebenkosten und KI-Mikrolage-Analyse.",
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
    google: 'i8ewISMSiFpXzWV6AiMbtBXNF88AjtIAB7temNoET-M',
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
        <meta name="theme-color" content="#7199a2" />
        {/* canonical is handled per-page via metadata.alternates */}
      </head>
      <body className="overflow-x-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
