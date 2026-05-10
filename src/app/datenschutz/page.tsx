import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutzerklärung" };

export default function DatenschutzPage() {
  return (
    <section className="section-light pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-black text-[#0A1F1C] mb-10">Datenschutzerklärung</h1>
        <div className="space-y-8 text-[#0A1F1C]/70 text-sm leading-relaxed">
          <p className="text-xs text-[#0A1F1C]/40 italic">Dies ist eine fiktive Demo-Datenschutzerklärung für Demo-Zwecke.</p>
          {[
            { title: "1. Verantwortlicher", content: "Solaris Energie GmbH (fiktiv), Musterstraße 123, 12345 Musterstadt. E-Mail: info@solaris-demo.example" },
            { title: "2. Arten der verarbeiteten Daten", content: "Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail, Telefon), Nutzungsdaten (z.B. besuchte Webseiten), Meta- und Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)." },
            { title: "3. Zweck der Verarbeitung", content: "Erbringung unserer vertraglichen Leistungen und Kundenservice, Sicherheitsmaßnahmen, Reichweitenmessung/Marketing." },
            { title: "4. Ihre Rechte", content: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Kontaktieren Sie uns unter info@solaris-demo.example." },
            { title: "5. Cookies", content: "Diese Website verwendet Cookies zur Funktionsverbesserung. Sie können Cookies in Ihrem Browser deaktivieren." },
            { title: "6. Kontakt", content: "Bei Fragen zum Datenschutz: info@solaris-demo.example" },
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
