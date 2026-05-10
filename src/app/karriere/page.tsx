import Image from "next/image";
import Link from "next/link";
import { jobs } from "@/lib/data/jobs";
import { ArrowUpRight, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karriere bei Solaris — Stellen & Ausbildung",
  description: "Werde Teil der Energiewende. Offene Stellen bei Solaris Energie in Technik, Montage, Vertrieb und mehr.",
};

const benefits = [
  "30 Tage Urlaub",
  "Flexible Arbeitszeiten",
  "Homeoffice möglich",
  "Firmenwagen (Technik)",
  "Weiterbildungsbudget 1.500 €/Jahr",
  "Jobrad-Leasing",
  "Betriebliche Altersvorsorge",
  "Solaranlage für Mitarbeiter (vergünstigt)",
];

export default function KarrierePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/apprentice-mentor.png" alt="Karriere bei Solaris" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F1C]/80 to-[#0A1F1C]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">Werde Teil des Teams</span>
          <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-black text-[#F0F4F2] mt-3 leading-tight max-w-2xl">
            Karriere bei<br /><span className="text-gradient-leaf">Solaris</span>
          </h1>
          <p className="text-[#F0F4F2]/60 text-xl mt-6 max-w-xl">
            Gestalte die Energiewende aktiv mit. Wir suchen Talente in Technik, Planung, Vertrieb und Montage.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A1F1C] mb-8">Warum Solaris?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 p-4 rounded-xl bg-[#F0F4F2] border border-[#E8EDEB]">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80] flex-shrink-0" />
                <span className="text-[#0A1F1C] text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="section-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A1F1C] mb-8">Offene Stellen</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/karriere/${job.slug}`}
                className="group flex items-center justify-between p-6 rounded-2xl border border-[#E8EDEB] hover:border-[#4ADE80]/40 hover:bg-[#F0F4F2] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#4ADE80]/10 text-[#1B3A36] text-xs font-medium">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#E8EDEB] text-[#0A1F1C]/60 text-xs font-medium">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-[#0A1F1C] font-bold text-lg group-hover:text-[#1B3A36] transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-[#0A1F1C]/40 text-sm">
                      <MapPin className="w-3.5 h-3.5" />{job.location}
                    </span>
                    <span className="flex items-center gap-1 text-[#0A1F1C]/40 text-sm">
                      <Clock className="w-3.5 h-3.5" />{job.type}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#0A1F1C]/30 group-hover:text-[#4ADE80] transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
