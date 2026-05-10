import { SolutionsBento } from "@/components/home/SolutionsBento";
import { GermanyMap } from "@/components/home/GermanyMap";
import { CTASection } from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsere Lösungen — Solar, Speicher & Windkraft",
  description: "Photovoltaik für Privat und Gewerbe, Batteriespeicher und Windkraft — entdecken Sie alle Solaris-Lösungen.",
};

export default function LoesungenPage() {
  return (
    <>
      <div className="section-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">Portfolio</span>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-[#F0F4F2] mt-3 leading-tight">
            Unsere<br /><span className="text-gradient-leaf">Lösungen</span>
          </h1>
          <p className="text-[#F0F4F2]/60 text-xl mt-6 max-w-2xl">
            Von der kleinen Dachanlage bis zum Windpark — wir planen und realisieren erneuerbare Energieprojekte jeder Größe.
          </p>
        </div>
      </div>
      <SolutionsBento />
      <GermanyMap />
      <CTASection />
    </>
  );
}
