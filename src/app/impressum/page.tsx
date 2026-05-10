import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <section className="section-light pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-black text-[#0A1F1C] mb-10">Impressum</h1>
        <div className="space-y-8 text-[#0A1F1C]/70 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-[#0A1F1C] mb-2">Angaben gemäß § 5 TMG</h2>
            <p>Solaris Energie GmbH (fiktiv)<br />
            Musterstraße 123<br />
            12345 Musterstadt<br />
            Deutschland</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0A1F1C] mb-2">Vertreten durch</h2>
            <p>Max Mustermann (Geschäftsführer)</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0A1F1C] mb-2">Kontakt</h2>
            <p>Telefon: +49 123 44555<br />
            E-Mail: info@solaris-demo.example</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0A1F1C] mb-2">Registereintrag</h2>
            <p>Eingetragen im Handelsregister.<br />
            Registergericht: Amtsgericht Musterstadt<br />
            Registernummer: HRB 00000</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0A1F1C] mb-2">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
            DE000000000</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0A1F1C] mb-2">Hinweis</h2>
            <p>Dies ist eine fiktive Demo-Website. Alle Angaben sind Musterdaten. Erstellt von Studio27 Berlin.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
