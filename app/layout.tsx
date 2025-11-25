import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Immobilien Rechner",
  description: "Real estate investment calculator for beginners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
