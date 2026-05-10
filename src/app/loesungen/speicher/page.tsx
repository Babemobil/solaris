import { SolutionPage } from "@/components/sections/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Batteriespeicher — Maximale Energieunabhängigkeit",
  description: "Heimspeicher und Gewerbespeicher von 5 bis 1000 kWh. Erhöhen Sie Ihren Eigenverbrauch auf bis zu 80 %.",
};

export default function SpeicherPage() {
  return (
    <SolutionPage
      title="Energieunabhängigkeit speichern"
      subtitle="Batteriespeicher"
      description="Sonne scheint nicht immer dann, wenn Sie Strom brauchen. Unser Speicher sorgt für maximale Autarkie rund um die Uhr."
      heroImage="/images/battery-storage.png"
      accentColor="#86EFAC"
      features={[
        { title: "Bis 80 % Eigenverbrauch", desc: "Mit passendem Speicher steigt Ihr Eigenverbrauch von ~30 % auf bis zu 80 %. Maximale Unabhängigkeit vom Netz." },
        { title: "Lithium-Eisenphosphat (LFP)", desc: "Modernste LFP-Technologie: keine Brandgefahr, keine Degradation, 6.000+ Ladezyklen." },
        { title: "Peak-Shaving", desc: "Leistungsspitzen abschneiden reduziert Netzentgelte und schont das Netz." },
        { title: "Notstromfähig", desc: "Optionaler Inselbetrieb: Bei Stromausfall versorgt Ihr Speicher das Haus weiter." },
        { title: "Smart Charging", desc: "Integration mit Wallbox: PV-Überschuss lädt bevorzugt das E-Auto." },
        { title: "Nachrüstbar", desc: "Kein PV auf dem Dach? Kein Problem — Speicher kann auch mit Netzstrom günstig nachts laden." },
      ]}
      specs={[
        { label: "Kapazitäten Heim", value: "5 – 30 kWh" },
        { label: "Kapazitäten Gewerbe", value: "30 – 1.000+ kWh" },
        { label: "Zellchemie", value: "LFP (Li-Fe-Phosphat)" },
        { label: "Ladezyklen", value: "> 6.000" },
        { label: "Garantie", value: "10 Jahre / 4.000 Zyklen" },
        { label: "Wirkungsgrad", value: "> 96 %" },
        { label: "Notstrom", value: "optional" },
        { label: "Monitoring", value: "App + API" },
      ]}
      faqs={[
        { q: "Lohnt sich Speicher ohne eigene PV-Anlage?", a: "Eingeschränkt. Mit PV zusammen ist der ROI am besten. Reiner Netzspeicher kann sich durch Nacht-Tarife lohnen." },
        { q: "Wie lange hält ein Batteriespeicher?", a: "LFP-Batterien halten 20+ Jahre / 6.000+ Zyklen. Die Garantie deckt 80 % Kapazität nach 10 Jahren ab." },
        { q: "Ist der Speicher notstromfähig?", a: "Ja, als optionale Konfiguration. Bei Stromausfall schaltet der Speicher automatisch in den Inselbetrieb." },
        { q: "Welche Speichergröße brauche ich?", a: "Als Faustregel: 1 kWh Speicher pro 1.000 kWh Jahresverbrauch. Für 4.500 kWh/Jahr empfehlen wir 5–10 kWh." },
        { q: "Gibt es Förderungen für Speicher?", a: "Viele Bundesländer (Bayern, Thüringen, etc.) fördern Batteriespeicher direkt. Wir beraten Sie zu aktuellen Programmen." },
      ]}
    />
  );
}
