export interface Project {
  slug: string;
  title: string;
  type: "privat" | "gewerbe" | "solar" | "wind";
  region: string;
  year: number;
  kwp: number;
  co2: number;
  image: string;
  description: string;
  customerQuote: string;
  customerName: string;
  specs: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "solarpark-franken",
    title: "Freiflächenanlage Franken",
    type: "solar",
    region: "Bayern",
    year: 2024,
    kwp: 4800,
    co2: 2800,
    image: "/images/project-industrial-solar.jpg",
    description: "4,8 MWp Freiflächenanlage im Fränkischen Seenland — 12 Hektar, 14.000 Panels, Direktlieferung an lokales Industrieunternehmen.",
    customerQuote: "Solaris hat den Zeitplan um 3 Wochen unterboten und die Anlage läuft sauber. Beeindruckende Leistung.",
    customerName: "Ing. Klaus Weber, GF Muster Industrie GmbH",
    specs: [
      { label: "Leistung", value: "4,8 MWp" },
      { label: "Fläche", value: "12 ha" },
      { label: "Module", value: "14.000 Stück" },
      { label: "Ertrag/Jahr", value: "4.800 MWh" },
      { label: "CO₂-Einsparung", value: "2.800 t/Jahr" },
      { label: "Fertigstellung", value: "Q2 2024" },
    ],
  },
  {
    slug: "windpark-nordsee",
    title: "Offshore-Windpark Nordsee Alpha",
    type: "wind",
    region: "Schleswig-Holstein",
    year: 2024,
    kwp: 36000,
    co2: 18000,
    image: "/images/wind-offshore.jpg",
    description: "12 Offshore-Windturbinen, 3 MW pro Turbine. Versorgung von 40.000 Haushalten in der Region.",
    customerQuote: "Die Zusammenarbeit war auf Augenhöhe, das Ergebnis spricht für sich.",
    customerName: "Dr. Anna Schrader, Projektleitung RegioWind GmbH",
    specs: [
      { label: "Turbinen", value: "12 × 3 MW" },
      { label: "Gesamtleistung", value: "36 MW" },
      { label: "Jahresertrag", value: "126 GWh" },
      { label: "Versorgung", value: "40.000 HH" },
      { label: "CO₂-Einsparung", value: "18.000 t/Jahr" },
      { label: "Fertigstellung", value: "Q4 2024" },
    ],
  },
  {
    slug: "einfamilienhaus-muenchen",
    title: "Solardach Einfamilienhaus München",
    type: "privat",
    region: "Bayern",
    year: 2024,
    kwp: 12.6,
    co2: 6.8,
    image: "/images/house-solar-evening.jpg",
    description: "12,6 kWp Aufdachanlage mit 10 kWh Batteriespeicher. Autarkiegrad 78 %, Amortisation in 9 Jahren.",
    customerQuote: "Seit der Installation ist unsere Stromrechnung minimal. Beste Investition.",
    customerName: "Familie Schneider, München-Schwabing",
    specs: [
      { label: "Leistung", value: "12,6 kWp" },
      { label: "Speicher", value: "10 kWh" },
      { label: "Autarkiegrad", value: "78 %" },
      { label: "Amortisation", value: "9 Jahre" },
      { label: "CO₂-Einsparung", value: "6,8 t/Jahr" },
      { label: "Fertigstellung", value: "März 2024" },
    ],
  },
  {
    slug: "logistikzentrum-dortmund",
    title: "Logistikzentrum Dortmund",
    type: "gewerbe",
    region: "NRW",
    year: 2023,
    kwp: 980,
    co2: 570,
    image: "/images/project-industrial-solar.jpg",
    description: "980 kWp Aufdachanlage auf 8.000 m² Hallenfläche, kombiniert mit 500 kWh Gewerbespeicher.",
    customerQuote: "Unsere Energiekosten sind um 60 % gesunken. Absolut empfehlenswert.",
    customerName: "Markus Heller, Betriebsleiter LogiPro GmbH",
    specs: [
      { label: "Leistung", value: "980 kWp" },
      { label: "Dachfläche", value: "8.000 m²" },
      { label: "Speicher", value: "500 kWh" },
      { label: "Kostensenkung", value: "60 %" },
      { label: "CO₂-Einsparung", value: "570 t/Jahr" },
      { label: "Fertigstellung", value: "Juni 2023" },
    ],
  },
  {
    slug: "batteriespeicher-campus",
    title: "Hochschul-Campus Batteriespeicher",
    type: "gewerbe",
    region: "Baden-Württemberg",
    year: 2023,
    kwp: 450,
    co2: 260,
    image: "/images/battery-storage.jpg",
    description: "450 kWp Solar + 800 kWh Großspeicher für Hochschulcampus. Peak-Shaving spart 35 % Netzkosten.",
    customerQuote: "Innovative Lösung, kompetente Umsetzung — genau das, was wir gesucht haben.",
    customerName: "Prof. Dr. Stefan Lenz, TH Musterstadt",
    specs: [
      { label: "Solar", value: "450 kWp" },
      { label: "Speicher", value: "800 kWh" },
      { label: "Peak-Shaving", value: "35 %" },
      { label: "CO₂-Einsparung", value: "260 t/Jahr" },
      { label: "Fertigstellung", value: "Sept 2023" },
    ],
  },
  {
    slug: "agri-pv-allgaeu",
    title: "Agri-PV Allgäu",
    type: "solar",
    region: "Bayern",
    year: 2023,
    kwp: 2200,
    co2: 1300,
    image: "/images/agri-solar-sheep.jpg",
    description: "Agrivoltaik-Anlage: 2,2 MWp über Schafweide. Doppelnutzung der Fläche, gefördert durch BMEL.",
    customerQuote: "Die Schafe weiden unter den Panels — einmalig in der Region.",
    customerName: "Hans-Peter Maier, Landwirt",
    specs: [
      { label: "Leistung", value: "2,2 MWp" },
      { label: "Tiere", value: "120 Schafe" },
      { label: "Flächeneffizienz", value: "+180 %" },
      { label: "Förderung", value: "BMEL" },
      { label: "CO₂-Einsparung", value: "1.300 t/Jahr" },
    ],
  },
];
