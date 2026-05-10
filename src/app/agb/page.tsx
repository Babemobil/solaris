import type { Metadata } from "next";

export const metadata: Metadata = { title: "AGB — Allgemeine Geschäftsbedingungen" };

export default function AGBPage() {
  return (
    <section className="section-light pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-black text-[#0A1F1C] mb-10">Allgemeine Geschäftsbedingungen</h1>
        <p className="text-xs text-[#0A1F1C]/40 italic mb-8">Dies ist eine fiktive Demo-AGB für Demo-Zwecke.</p>
        <div className="space-y-8 text-[#0A1F1C]/70 text-sm leading-relaxed">
          {[
            { title: "§ 1 Geltungsbereich", content: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Solaris Energie GmbH (fiktiv), Musterstraße 123, 12345 Musterstadt, und dem Kunden." },
            { title: "§ 2 Vertragsschluss", content: "Angebote von Solaris sind freibleibend. Ein Vertrag kommt durch schriftliche Auftragsbestätigung oder Lieferung zustande." },
            { title: "§ 3 Leistungserbringung", content: "Solaris erbringt Planungs-, Lieferungs- und Montageleistungen für Photovoltaikanlagen und Energiespeicher gemäß dem vereinbarten Leistungsumfang." },
            { title: "§ 4 Zahlungsbedingungen", content: "Rechnungen sind innerhalb von 14 Tagen ohne Abzug zahlbar. Bei Verzug gelten die gesetzlichen Verzugszinsen." },
            { title: "§ 5 Gewährleistung", content: "Für erbrachte Leistungen gilt die gesetzliche Gewährleistungsfrist von 2 Jahren. Herstellergarantien werden weitergegeben." },
            { title: "§ 6 Haftung", content: "Solaris haftet bei Vorsatz und grober Fahrlässigkeit. Bei leichter Fahrlässigkeit nur für die Verletzung wesentlicher Vertragspflichten." },
            { title: "§ 7 Gerichtsstand", content: "Gerichtsstand für alle Streitigkeiten ist Musterstadt, soweit der Kunde Kaufmann ist." },
          ].map(({ title, content }) => (
            <div key={title}>
              <h2 className="text-lg font-bold text-[#0A1F1C] mb-2">{title}</h2>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
