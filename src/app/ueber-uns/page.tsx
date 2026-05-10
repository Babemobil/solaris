import Image from "next/image";
import { CTASection } from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns — Story, Mission & Team",
  description: "Erfahren Sie mehr über Solaris Energie — unsere Geschichte, Mission und das Team hinter der Energiewende.",
};

const team = [
  { name: "Max Mustermann", role: "Geschäftsführer", image: "/images/engineer-tablet.png" },
  { name: "Anna Müller", role: "Leiterin Technik", image: "/images/team-installation.png" },
  { name: "Jonas Weber", role: "Vertrieb & Beratung", image: "/images/team-office.png" },
  { name: "Sarah Schreiber", role: "Projektleitung", image: "/images/customer-consultation.png" },
];

const values = [
  { title: "Präzision", desc: "Jede Anlage wird mit höchster Sorgfalt geplant. Kein Kompromiss bei Qualität." },
  { title: "Nachhaltigkeit", desc: "Nicht nur Energie — auch unsere Prozesse, Materialien und Lieferketten sind nachhaltig." },
  { title: "Transparenz", desc: "Ehrliche Kalkulation, klare Verträge, keine versteckten Kosten." },
  { title: "Innovation", desc: "Wir testen neue Technologien bevor sie Standard werden — für unsere Kunden." },
];

const timeline = [
  { year: "2010", text: "Gründung als 2-Mann-Betrieb für private PV-Anlagen in Musterstadt" },
  { year: "2014", text: "Erweiterung auf Gewerbekunden, erste Anlage > 500 kWp" },
  { year: "2018", text: "Einstieg in Windkraft, erstes Offshore-Beteiligungsprojekt" },
  { year: "2021", text: "Batteriespeicher-Sparte gegründet, ISO 9001 Zertifizierung" },
  { year: "2024", text: "1.000. Anlage installiert, 250 GWh saubere Energie seit Gründung" },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(#4ADE80, transparent 60%)", filter: "blur(60px)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">Unternehmen</span>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-[#F0F4F2] mt-3 leading-tight max-w-2xl">
            Die Kraft der Sonne.<br /><span className="text-gradient-leaf">Seit 2010.</span>
          </h1>
          <p className="text-[#F0F4F2]/60 text-xl mt-6 max-w-2xl leading-relaxed">
            Was als kleine Werkstatt begann, ist heute eines der führenden Unternehmen für erneuerbare Energien in Deutschland. Über 4.800 Anlagen. Über 250 GWh saubere Energie.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">Mission</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#0A1F1C] mt-3 mb-6 leading-tight">
              100 % erneuerbar.<br />Für jeden.
            </h2>
            <p className="text-[#0A1F1C]/60 leading-relaxed">
              Unsere Mission ist es, erneuerbare Energie für jeden zugänglich zu machen — ob Privathaushalt, KMU oder Großindustrie. Wir glauben, dass die Energiewende keine Kompromisse bei Qualität oder Wirtschaftlichkeit erfordert.
            </p>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image src="/images/hero-solarpark-sunrise.png" alt="Solarpark bei Sonnenaufgang" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-forest py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#F0F4F2] mb-10">Unsere Werte</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border border-white/10 bg-black/10">
                <h3 className="text-[#4ADE80] font-bold text-xl mb-3">{v.title}</h3>
                <p className="text-[#F0F4F2]/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#F0F4F2] mb-12">Unsere Geschichte</h2>
          <div className="relative pl-8 border-l border-white/10">
            {timeline.map((item) => (
              <div key={item.year} className="relative mb-8 last:mb-0">
                <div className="absolute -left-[2.25rem] w-4 h-4 rounded-full bg-[#4ADE80] border-4 border-[#0A1F1C]" />
                <span className="font-mono font-bold text-[#4ADE80] text-sm">{item.year}</span>
                <p className="text-[#F0F4F2]/70 mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A1F1C] mb-10">Das Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="font-bold text-[#0A1F1C]">{member.name}</h3>
                <p className="text-[#0A1F1C]/50 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
