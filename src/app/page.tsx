import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { SolutionsTeaser } from "@/components/home/SolutionsTeaser";
import { EnergyFlow } from "@/components/home/EnergyFlow";
import { GermanyMap } from "@/components/home/GermanyMap";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { SavingsCalculator } from "@/components/home/SavingsCalculator";
import { Testimonials } from "@/components/home/Testimonials";
import { SectionMarquee } from "@/components/home/SectionMarquee";
import { CTASection } from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solaris Energie — Premium Solar, Speicher & Windkraft",
  description:
    "Photovoltaik, Batteriespeicher und Windkraft auf Premium-Niveau. Kostenlose Beratung, Planung & Montage aus einer Hand.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <SectionMarquee />
      <SolutionsTeaser />
      <SectionMarquee inverted />
      <EnergyFlow />
      <GermanyMap />
      <ProjectsPreview />
      <SavingsCalculator />
      <Testimonials />
      <CTASection />
    </>
  );
}
