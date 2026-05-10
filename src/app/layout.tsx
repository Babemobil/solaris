import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { CookieBanner } from "@/components/shared/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Solaris Energie — Premium Solaranlagen & Erneuerbare Energien",
    template: "%s | Solaris Energie",
  },
  description:
    "Solaris Energie GmbH — Ihr Partner für Photovoltaik, Batteriespeicher und Windkraft. Premium-Qualität für Privat und Gewerbe.",
  keywords: ["Solaranlage", "Photovoltaik", "Batteriespeicher", "Windkraft", "Erneuerbare Energien", "Solar"],
  authors: [{ name: "Solaris Energie GmbH" }],
  creator: "Solaris Energie GmbH",
  metadataBase: new URL("https://solaris-energie.example"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://solaris-energie.example",
    siteName: "Solaris Energie",
    title: "Solaris Energie — Premium Solaranlagen & Erneuerbare Energien",
    description: "Photovoltaik, Batteriespeicher und Windkraft auf Premium-Niveau.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solaris Energie",
    description: "Ihr Premium-Partner für erneuerbare Energien",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <Preloader />
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </LenisProvider>
      </body>
    </html>
  );
}
