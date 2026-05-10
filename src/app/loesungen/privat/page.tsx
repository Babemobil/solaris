import { SolutionPage } from "@/components/sections/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photovoltaik Privat — Solaranlage für Ihr Eigenheim",
  description: "Maßgeschneiderte Solaranlagen für Einfamilienhäuser und Mehrfamilienhäuser. TÜV-zertifiziert, 25 Jahre Leistungsgarantie.",
};

export default function PrivatPage() {
  return (
    <SolutionPage
      title="Solar für Ihr Zuhause"
      subtitle="Photovoltaik Privat"
      description="Von der Beratung bis zum Netzanschluss — Ihre Solaranlage aus einer Hand. Autark und unabhängig."
      heroImage="/images/house-solar-evening.png"
      accentColor="#4ADE80"
      features={[
        { title: "Kostenlose Dachanalyse", desc: "Wir prüfen Ihr Dach auf Eignung, Ausrichtung und Verschattung — völlig kostenfrei und unverbindlich." },
        { title: "Maßgeschneiderter Plan", desc: "Jede Anlage wird individuell geplant. Kein Baukastensystem, sondern echte Ingenieursarbeit." },
        { title: "25 Jahre Leistungsgarantie", desc: "Unsere Module garantieren 25 Jahre mindestens 80 % Nennleistung. TÜV-geprüft und zertifiziert." },
        { title: "Plug-and-Play Monitoring", desc: "Ihr eigenes Energie-Dashboard — verfolgen Sie Produktion und Verbrauch in Echtzeit per App." },
        { title: "0 % Mehrwertsteuer", desc: "Seit 2023 gilt 0 % MwSt. auf PV-Anlagen für Privatpersonen. Sie sparen direkt." },
        { title: "Rundum-Service", desc: "Anmeldung beim Netzbetreiber, Marktstammdatenregister, Inbetriebnahme — wir erledigen das alles." },
      ]}
      specs={[
        { label: "Anlagengrößen", value: "4 – 20 kWp" },
        { label: "Module", value: "Mono PERC, TOPCon" },
        { label: "Wirkungsgrad Module", value: "bis 23 %" },
        { label: "Garantie Modul", value: "25 Jahre" },
        { label: "Garantie Wechselrichter", value: "10 Jahre" },
        { label: "Montagezeit", value: "1–2 Tage" },
        { label: "Monitoring", value: "App + Web" },
        { label: "Amortisation", value: "8–12 Jahre" },
      ]}
      faqs={[
        { q: "Was kostet eine Anlage für mein Haus?", a: "Für ein typisches Einfamilienhaus (10–12 kWp) liegen die Kosten bei ca. 10.000–15.000 € inkl. Montage. Mit Speicher 18.000–24.000 €." },
        { q: "Brauche ich eine Baugenehmigung?", a: "In den meisten Bundesländern nicht. Ausnahme: Denkmalschutz. Wir prüfen das kostenlos für Sie." },
        { q: "Was passiert im Winter?", a: "Auch im Winter produziert die Anlage Strom — ca. 10–20 % des Sommerertrags. Der Jahresertrag berücksichtigt das bereits." },
        { q: "Kann ich die Anlage nachträglich erweitern?", a: "Ja, unser System ist modular. Speicher kann jederzeit nachgerüstet werden." },
        { q: "Welche Förderungen gibt es?", a: "EEG-Einspeisevergütung (20 Jahre garantiert), KfW 270, ggf. Landesförderungen. Wir beraten Sie individuell." },
      ]}
    />
  );
}
