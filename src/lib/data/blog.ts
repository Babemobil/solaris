export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "balkonkraftwerk-2025",
    title: "Balkonkraftwerk 2025: Neue Regeln, mehr Leistung",
    excerpt: "Das neue EEG erlaubt jetzt bis 800 Watt — was das für Mieter bedeutet und wie man die beste Anlage wählt.",
    category: "Förderung",
    date: "2025-05-01",
    readTime: 6,
    image: "/images/smart-home-display.png",
    content: `## Was ändert sich 2025?

Mit der Novelle des EEG dürfen Balkonkraftwerke nun bis zu 800 Watt einspeisen. Das macht die Mini-PV-Anlagen für Mieter deutlich attraktiver.

### Vorteile der neuen Regelung

- **Höhere Einspeiseleistung**: 800 Watt statt bisher 600 Watt
- **Vereinfachte Anmeldung**: Nur noch beim Netzbetreiber, kein Eintrag ins Marktstammdatenregister
- **Mehr Modelle verfügbar**: Faltbare und leistungsstarke Panels für Balkone

### Was kostet ein Balkonkraftwerk?

Einsteigersets mit 600–800 Watt gibt es ab ca. 400 Euro. Die Amortisation liegt bei 3–5 Jahren, je nach Sonneneinstrahlung und Eigenverbrauch.`,
  },
  {
    slug: "batteriespeicher-lohnt-sich",
    title: "Lohnt sich ein Batteriespeicher wirklich?",
    excerpt: "Kostenrechnung, Amortisation und ehrliche Erwartungen — wann Speicher sinnvoll sind, wann nicht.",
    category: "Technik",
    date: "2025-04-15",
    readTime: 8,
    image: "/images/battery-storage.png",
    content: `## Batteriespeicher: Chancen und Realität

Ein Heimspeicher erhöht den Eigenverbrauch von ca. 30 % auf 70–80 %. Klingt verlockend — aber lohnt es sich wirklich?

### Rechenbeispiel

Eine 5-kWh-PV-Anlage ohne Speicher liefert Eigenverbrauch von 1.500 kWh/Jahr. Mit 10-kWh-Speicher steigt der Eigenverbrauch auf ca. 3.800 kWh/Jahr.

Bei einem Strompreis von 0,35 €/kWh: Ersparnis **ca. 805 €/Jahr** mehr durch Speicher.

Kosten Speicher (10 kWh): ca. 8.000–12.000 €. Amortisation: **10–15 Jahre**.

### Wann lohnt Speicher?

- Hoher Tagesverbrauch nachmittags/abends
- Einspeisevergütung unter 0,08 €/kWh
- Netzeinspeise-Peak-Shaving (Gewerbe)`,
  },
  {
    slug: "solar-potential-deutschland",
    title: "Wo in Deutschland lohnt sich Solar am meisten?",
    excerpt: "Bayern und Baden-Württemberg führen — aber auch der Norden hat mehr Potenzial als viele denken.",
    category: "Markt",
    date: "2025-03-20",
    readTime: 5,
    image: "/images/hero-solarpark-sunrise.png",
    content: `## Sonnenstunden im Deutschlandvergleich

Oft wird Deutschland unterschätzt. Mit 900–1.200 kWh/kWp Ertrag pro Jahr liegt Deutschland europaweit im guten Mittelfeld.

### Top-Regionen

| Region | Ertrag/kWp/Jahr |
|--------|-----------------|
| Bayern (Süd) | 1.100–1.200 kWh |
| Baden-Württemberg | 1.050–1.150 kWh |
| Sachsen | 1.000–1.100 kWh |
| NRW | 950–1.050 kWh |
| Hamburg | 920–980 kWh |

### Fazit

Auch im Norden lohnt sich Solar. Die Ertragsdifferenz zwischen München und Hamburg beträgt nur ca. 20 % — die Amortisation verschiebt sich um 1–2 Jahre.`,
  },
];
