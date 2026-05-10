export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "Technik" | "Förderung" | "Kosten" | "Installation" | "Wartung";
}

export const faqs: FAQ[] = [
  // Technik
  { id: "t1", category: "Technik", question: "Wie funktioniert eine Photovoltaikanlage?", answer: "Solarzellen wandeln Sonnenlicht direkt in Gleichstrom (DC) um. Ein Wechselrichter konvertiert diesen in Wechselstrom (AC), den Haushaltsgeräte nutzen können. Überschüsse fließen ins öffentliche Netz oder werden im Speicher gepuffert." },
  { id: "t2", category: "Technik", question: "Wie lange halten Solarpanele?", answer: "Hochwertige Module (wie von Solaris verbaut) haben eine Leistungsgarantie von 25–30 Jahren auf mindestens 80 % Nennleistung. Die tatsächliche Lebensdauer beträgt 35–40 Jahre." },
  { id: "t3", category: "Technik", question: "Was passiert bei Bewölkung oder im Winter?", answer: "PV-Anlagen erzeugen auch bei diffusem Licht Strom — allerdings weniger. Im deutschen Winter sind es typischerweise 10–20 % des Sommerertrags. Der Jahresertrag berücksichtigt diese Saisonalität." },
  { id: "t4", category: "Technik", question: "Welche Dachneigung ist optimal?", answer: "Ideal sind 30–35° Neigung nach Süden. Aber auch Ost-West-Belegung (15–20°) ist wirtschaftlich attraktiv, da sie den Eigenverbrauch optimiert und die Einspeisespitzen reduziert." },
  { id: "t5", category: "Technik", question: "Funktioniert Solar bei einem Flachdach?", answer: "Ja. Auf Flachdächern werden die Module in Aufständerungen montiert, die die optimale Neigung herstellen. Besonders für Gewerbegebäude sehr verbreitet." },
  // Förderung
  { id: "f1", category: "Förderung", question: "Welche staatliche Förderung gibt es für PV-Anlagen?", answer: "Die Einspeisevergütung nach EEG ist garantiert für 20 Jahre. Zusätzlich bieten KfW (Kredit 270) und viele Landesbanken zinsgünstige Kredite. Einige Bundesländer gewähren Direktzuschüsse." },
  { id: "f2", category: "Förderung", question: "Gibt es Mehrwertsteuer auf Solaranlagen?", answer: "Seit 2023 gilt 0 % Mehrwertsteuer auf Lieferung und Installation von PV-Anlagen inkl. Speicher für Privatpersonen (§ 12 Abs. 3 UStG). Das senkt die Investitionskosten deutlich." },
  { id: "f3", category: "Förderung", question: "Kann ich die Anlage steuerlich absetzen?", answer: "Gewerblich genutzte Anlagen können abgeschrieben werden. Für Privatpersonen gilt die Kleinunternehmerregelung oder vereinfachte Einkommensteuererklärung. Unser Steuerberater-Partner berät Sie gerne." },
  // Kosten
  { id: "k1", category: "Kosten", question: "Was kostet eine Solaranlage für ein Einfamilienhaus?", answer: "Typischerweise 10–15 kWp für ein Einfamilienhaus. Kosten: ca. 10.000–18.000 € brutto (inkl. Montage und Wechselrichter). Mit 10-kWh-Speicher ca. 18.000–26.000 €." },
  { id: "k2", category: "Kosten", question: "Wann amortisiert sich die Investition?", answer: "Bei aktuellen Strompreisen (ca. 0,30–0,35 €/kWh) und guter Südausrichtung in 8–12 Jahren für eine Privatanlage. Mit Speicher 11–16 Jahre. Danach produzieren Sie 20+ Jahre praktisch kostenlos." },
  { id: "k3", category: "Kosten", question: "Was kostet Wartung und Versicherung?", answer: "Wartungskosten sind minimal: Reinigung alle 2–3 Jahre ca. 150–300 €. Technische Versicherung ca. 100–200 €/Jahr. Viele Hausversicherungen decken Solaranlagen mit ab." },
  // Installation
  { id: "i1", category: "Installation", question: "Wie lange dauert die Installation?", answer: "Ein Einfamilienhaus: 1–2 Tage Montage + 1 Tag Elektro. Gewerbe je nach Größe 3–14 Tage. Planung, Anmeldung und Netzanschluss: 4–8 Wochen insgesamt." },
  { id: "i2", category: "Installation", question: "Brauche ich eine Baugenehmigung?", answer: "In den meisten Bundesländern ist für Aufdachanlagen keine Baugenehmigung nötig (privilegiertes Vorhaben). Ausnahmen: Denkmalschutz, bestimmte Bebauungspläne. Wir prüfen das für Sie kostenlos." },
  { id: "i3", category: "Installation", question: "Muss ich während der Montage zuhause sein?", answer: "Nur am ersten und letzten Tag empfehlen wir Ihre Anwesenheit für Einweisung und Abnahme. Während der Montage können Sie normal Ihren Alltag weiterführen." },
  // Wartung
  { id: "w1", category: "Wartung", question: "Wie oft sollte ich meine Anlage warten lassen?", answer: "Wir empfehlen alle 4–5 Jahre eine professionelle Inspektion. Monitoring-Systeme erkennen Leistungsabfälle automatisch. Im Rahmen unserer Serviceverträge übernehmen wir das Monitoring." },
  { id: "w2", category: "Wartung", question: "Was tun wenn die Anlage weniger produziert als erwartet?", answer: "Mögliche Ursachen: Verschmutzung, Verschattung (Baum gewachsen), Wechselrichter-Problem. Unser Monitoring-System erkennt Abweichungen automatisch und sendet Alarm. Bei Problemen: einfach anrufen." },
];
