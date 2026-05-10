import Image from "next/image";
import { SolarJourneyCarousel } from "@/components/home/SolarJourneyCarousel";
import { SolarTabs } from "@/components/sections/SolarTabs";
import { CTASection } from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar — Photovoltaik für Privat & Gewerbe",
  description: "Maßgeschneiderte Solaranlagen für Eigenheim und Unternehmen. TÜV-zertifiziert, 25 Jahre Leistungsgarantie, 0 % MwSt.",
};

export default function SolarPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 section-dark pt-20 md:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/house-solar-evening.png"
            alt="Solaranlage"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F1C] via-[#0A1F1C]/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em] mb-4 block">
            Lösungen / Solar
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-[#F0F4F2] leading-tight mb-6">
            Solar für Privat<br />& Gewerbe
          </h1>
          <p className="text-[#F0F4F2]/70 text-lg max-w-xl leading-relaxed">
            Von der Beratung bis zum Netzanschluss — Ihre Solaranlage aus einer Hand. Für Eigenheim und Unternehmen.
          </p>
        </div>
      </section>

      <SolarJourneyCarousel />

      <SolarTabs />

      <CTASection />
    </>
  );
}
