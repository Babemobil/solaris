export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Vollzeit" | "Teilzeit" | "Ausbildung";
  published: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    slug: "projektleiter-solar",
    title: "Projektleiter Solarsysteme (m/w/d)",
    department: "Technik",
    location: "Musterstadt",
    type: "Vollzeit",
    published: "2025-04-01",
    description: "Du verantwortest eigenständig die Planung, Umsetzung und Übergabe von PV-Projekten im Bereich 100 kWp – 5 MWp.",
    responsibilities: [
      "Technische und kaufmännische Projektverantwortung",
      "Koordination von Montage, Elektro und Netzanschluss",
      "Kommunikation mit Netzbetreibern und Behörden",
      "Inbetriebnahme und Abnahme der Anlagen",
    ],
    requirements: [
      "Elektrotechnik oder Energietechnik Studium / Meister",
      "3+ Jahre PV-Projekterfahrung",
      "Kenntnisse VDE, EEG, Netzanschluss",
      "Reisebereitschaft (D, A, CH)",
    ],
    benefits: ["Firmenwagen", "30 Tage Urlaub", "Homeoffice flexibel", "Weiterbildungsbudget"],
  },
  {
    slug: "elektriker-pv",
    title: "Elektriker PV-Anlagen (m/w/d)",
    department: "Montage",
    location: "Musterstadt / überregional",
    type: "Vollzeit",
    published: "2025-04-10",
    description: "Montage und Inbetriebnahme von Solaranlagen auf Privat- und Gewerbedächern sowie Freiflächen.",
    responsibilities: [
      "DC- und AC-seitige Elektroinstallation",
      "Wechselrichter-Installation und Konfiguration",
      "Fehlersuche und Wartung bestehender Anlagen",
    ],
    requirements: [
      "Abgeschlossene Elektroausbildung",
      "Schaltberechtigung bis 1 kV",
      "Höhentauglichkeit",
      "Führerschein Klasse B",
    ],
    benefits: ["Auslösepauschale", "Werkzeugprämie", "30 Tage Urlaub", "Weiterbildung"],
  },
  {
    slug: "vertrieb-solar",
    title: "Vertriebsmitarbeiter Solar (m/w/d)",
    department: "Vertrieb",
    location: "Musterstadt / Remote",
    type: "Vollzeit",
    published: "2025-03-15",
    description: "Du betreust Bestandskunden und akquirierst Neukunden im Privat- und KMU-Segment.",
    responsibilities: [
      "Beratung und Angebotserstellung",
      "Kundenbetreuung von der Anfrage bis zur Übergabe",
      "Zusammenarbeit mit Technik und Projektmanagement",
    ],
    requirements: [
      "Vertriebserfahrung (idealerweise Energie/Handwerk)",
      "Technisches Grundverständnis",
      "Kommunikationsstärke und Eigeninitiative",
    ],
    benefits: ["Attraktives Fixgehalt + Provision", "Homeoffice", "Firmenwagen", "30 Tage Urlaub"],
  },
  {
    slug: "ausbildung-elektroniker",
    title: "Ausbildung Elektroniker für Energie- und Gebäudetechnik",
    department: "Ausbildung",
    location: "Musterstadt",
    type: "Ausbildung",
    published: "2025-05-01",
    description: "Starte deine Karriere in der Energiewende — 3-jährige Ausbildung mit Spezialisierung auf PV-Systeme.",
    responsibilities: [
      "Elektroinstallation in Theorie und Praxis",
      "PV-Montage und Inbetriebnahme",
      "Mess- und Prüftechnik",
    ],
    requirements: [
      "Mittlerer Schulabschluss oder Abitur",
      "Technisches Interesse",
      "Teamfähigkeit und Zuverlässigkeit",
    ],
    benefits: ["Übertarifliche Vergütung", "Prüfungsvorbereitung", "Übernahmechance", "BVB-Zuschuss"],
  },
];
