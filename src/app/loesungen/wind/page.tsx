import { SolutionPage } from "@/components/sections/SolutionPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Windkraft — Onshore & Offshore Projekte",
  description: "Windkraftprojekte von der Standortanalyse bis zum laufenden Betrieb. Onshore ab 1 MW, Offshore-Projektentwicklung.",
};

export default function WindPage() {
  return (
    <SolutionPage
      title="Wind als Energiequelle"
      subtitle="Windkraft"
      description="Wind weht rund um die Uhr — auch wenn die Sonne schläft. Wir realisieren Windprojekte von der Standortanalyse bis zur Inbetriebnahme."
      heroImage="/images/wind-offshore.png"
      accentColor="#4ADE80"
      features={[
        { title: "Standortanalyse & Windgutachten", desc: "Messungen, Simulationen und Windatlanten bestimmen den optimalen Standort und den zu erwartenden Ertrag." },
        { title: "Genehmigungsmanagement", desc: "BImSchG-Verfahren, Artenschutz, Schallgutachten — wir navigieren durch den komplexen Genehmigungsdschungel." },
        { title: "Onshore 1–50 MW", desc: "Vom Kleinwindrad für Gewerbebetriebe bis zum Bürgerwindpark — alles aus einer Hand." },
        { title: "Offshore-Projektentwicklung", desc: "Beteiligung an Offshore-Konsortien. Planungs- und Entwicklungsdienstleistungen für Offshore-Projekte." },
        { title: "Direktvermarktung", desc: "Optimaler Mix aus Marktprämie und Direktvermarktung. Wir optimieren Ihre Erlöse kontinuierlich." },
        { title: "O&M & Vollwartung", desc: "Vollwartungsverträge für maximale Verfügbarkeit. 24/7-Monitoring und schnelle Reaktionszeiten." },
      ]}
      specs={[
        { label: "Onshore Kapazität", value: "500 kW – 6 MW/Turbine" },
        { label: "Rotordurchmesser", value: "bis 175 m" },
        { label: "Nabenhöhe", value: "80 – 175 m" },
        { label: "Volllaststunden/Jahr", value: "1.800 – 3.000 h" },
        { label: "Offshore Kapazität", value: "3 – 15 MW/Turbine" },
        { label: "Lebensdauer", value: "25 Jahre" },
        { label: "CO₂ Amortisation", value: "< 1 Jahr" },
        { label: "Verfügbarkeit", value: "> 97 %" },
      ]}
      faqs={[
        { q: "Wie lange dauert ein Windpark-Projekt?", a: "Von Standortsuche bis Inbetriebnahme typischerweise 5–10 Jahre, maßgeblich durch Genehmigungsverfahren bestimmt." },
        { q: "Gibt es Mindestabstandsregeln?", a: "Ja. Die '10H-Regel' gilt in Bayern (10× Anlagenhöhe Abstand zu Wohnbebauung). Andere Bundesländer haben eigene Regelungen." },
        { q: "Was kostet eine Windkraftanlage?", a: "Onshore: ca. 1,5–2,5 Mio. € pro MW installierter Leistung. Offshore: 3–5 Mio. € pro MW." },
        { q: "Kann ich mich an einem Windpark beteiligen?", a: "Ja. Als Bürgerwindpark oder über Genossenschaftsmodelle ist eine Beteiligung ab 1.000 € möglich." },
        { q: "Wie laut sind Windkraftanlagen?", a: "Moderne Anlagen erreichen auf 500 m Abstand ca. 35–40 dB — leiser als ein ruhiges Gespräch. Schallgutachten sind Pflicht." },
      ]}
    />
  );
}
