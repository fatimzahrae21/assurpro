import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AssurPro — Votre Courtier Assurance de Confiance",
  description:
    "Comparez et souscrivez les meilleures assurances santé, auto, habitation et prêt. Devis gratuit en 3 minutes. Économisez jusqu'à 40% sur vos cotisations.",
  keywords:
    "assurance santé, mutuelle, assurance auto, assurance habitation, courtier assurance, devis gratuit, comparateur assurance",
  openGraph: {
    title: "AssurPro — Votre Courtier Assurance de Confiance",
    description:
      "Comparez et souscrivez les meilleures assurances en 3 minutes. Économisez jusqu'à 40%.",
    type: "website",
    locale: "fr_FR",
    siteName: "AssurPro",
  },
  twitter: {
    card: "summary_large_image",
    title: "AssurPro — Courtier Assurance",
    description: "Devis gratuit en 3 minutes. Économisez jusqu'à 40%.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0f0d2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased font-body">{children}</body>
    </html>
  );
}
