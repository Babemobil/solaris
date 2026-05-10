import { SolutionPage } from "@/components/sections/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Gewerbe & Industrie — Großanlagen ab 100 kWp",
  description: "Gewerbliche Solaranlagen für KMU, Industrie und Kommunen. Wirtschaftlichkeitsrechnung, Planung & Betrieb.",
};

export default function GewerbePage() {
  return (
    <SolutionPage
      title="Solar für Ihr Unternehmen"
      subtitle="Gewerbe & Industrie"
      description="Bis zu 60 % Energiekosten senken. Wir planen Ihre Anlage — von der Machbarkeitsstudie bis zum laufenden Betrieb."
      heroImage="/images/project-industrial-solar.png"
      accentColor="#FCD34D"
      features={[
        { title: "Machbarkeitsstudie", desc: "Detaillierte Wirtschaftlichkeitsanalyse inkl. Amortisationsrechnung und Cashflow-Projektion." },
        { title: "Schlüsselfertig", desc: "Planung, Genehmigung, Montage und Inbetriebnahme aus einer Hand. Ein Ansprechpartner." },
        { title: "Peak-Shaving & Lastoptimierung", desc: "Kombination mit Speicher reduziert Leistungsspitzen und senkt Netzentgelte um bis zu 35 %." },
        { title: "EEG & Direktvermarktung", desc: "Wir optimieren zwischen Eigenverbrauch, Einspeisevergütung und Direktvermarktung." },
        { title: "Steueroptimierung", desc: "Lineare Abschreibung, Investitionsabzugsbetrag (IAB) und Sonderabschreibungen nutzen." },
        { title: "O&M Verträge", desc: "Monitoring, Wartung und Versicherung als Full-Service-Paket. Maximale Verfügbarkeit garantiert." },
      ]}
      specs={[
        { label: "Anlagengrößen", value: "100 kWp – 10 MWp" },
        { label: "Module", value: "Bifazial, TOPCon HE" },
        { label: "Wechselrichter", value: "Zentralwechselrichter / Stringwechselrichter" },
        { label: "Speicher", value: "100 kWh – 10 MWh" },
        { label: "Monitoring", value: "24/7 SCADA" },
        { label: "Garantie", value: "25 Jahre Modul / 10 Jahre WR" },
        { label: "ROI", value: "ab 6–10 Jahren" },
        { label: "Amortisation", value: "8–14 Jahre" },
      ]}
      faqs={[
        { q: "Ab welcher Größe lohnt sich Gewerbesolar?", a: "Ab ca. 50 kWp und einem Jahresstromverbrauch von 100.000 kWh+ rechnet sich die Investition sehr attraktiv." },
        { q: "Können wir Leasing oder Contracting nutzen?", a: "Ja. Wir bieten Solar-Leasing (keine Upfront-Kosten), Mietstrom und klassischen Eigeninvestment als Modelle an." },
        { q: "Wie wird die Anlage ins Netz eingebunden?", a: "Abstimmung mit Netzbetreiber, Netzverträglichkeitsprüfung und Anschluss erfolgen durch uns." },
        { q: "Was ist bei Denkmalschutz oder besonderen Dachkonstruktionen?", a: "Unsere Statiker und Architekten finden Lösungen auch für besondere Situationen." },
        { q: "Bieten Sie auch Balkonkraftwerke für Mieter an?", a: "Für Unternehmen mit Mitarbeitern bieten wir Balkonkraftwerk-Programme als Benefit an." },
      ]}
    />
  );
}
