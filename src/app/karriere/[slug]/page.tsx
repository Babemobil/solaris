"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { jobs } from "@/lib/data/jobs";
import { ArrowLeft, MapPin, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = jobs.find((j) => j.slug === params.slug);
  if (!job) notFound();

  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="section-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/karriere" className="inline-flex items-center gap-2 text-[#F0F4F2]/50 hover:text-[#4ADE80] text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Alle Stellen
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] text-xs font-medium">{job.department}</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-[#F0F4F2]/60 text-xs font-medium">{job.type}</span>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-[#F0F4F2] leading-tight">{job.title}</h1>
          <div className="flex items-center gap-4 mt-4">
            <span className="flex items-center gap-2 text-[#F0F4F2]/50"><MapPin className="w-4 h-4" />{job.location}</span>
            <span className="flex items-center gap-2 text-[#F0F4F2]/50"><Clock className="w-4 h-4" />{job.type}</span>
          </div>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#0A1F1C] mb-4">Über die Stelle</h2>
              <p className="text-[#0A1F1C]/70 leading-relaxed">{job.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1F1C] mb-4">Aufgaben</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[#0A1F1C]/70">
                    <CheckCircle className="w-5 h-5 text-[#4ADE80] flex-shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1F1C] mb-4">Anforderungen</h2>
              <ul className="space-y-2">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[#0A1F1C]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] mt-2 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application form */}
          <div className="rounded-2xl border border-[#E8EDEB] p-6">
            <h2 className="text-xl font-bold text-[#0A1F1C] mb-6">Jetzt bewerben</h2>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-[#4ADE80] mx-auto mb-4" />
                <p className="font-bold text-[#0A1F1C]">Bewerbung eingegangen!</p>
                <p className="text-[#0A1F1C]/50 text-sm mt-2">Wir melden uns innerhalb von 48 Stunden.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <input type="text" placeholder="Vor- und Nachname" required className="w-full px-4 py-3 rounded-xl border border-[#E8EDEB] bg-white text-[#0A1F1C] focus:outline-none focus:border-[#4ADE80] text-sm" />
                <input type="email" placeholder="E-Mail-Adresse" required className="w-full px-4 py-3 rounded-xl border border-[#E8EDEB] bg-white text-[#0A1F1C] focus:outline-none focus:border-[#4ADE80] text-sm" />
                <input type="tel" placeholder="Telefon (optional)" className="w-full px-4 py-3 rounded-xl border border-[#E8EDEB] bg-white text-[#0A1F1C] focus:outline-none focus:border-[#4ADE80] text-sm" />
                <textarea placeholder="Kurze Motivation (optional)" rows={3} className="w-full px-4 py-3 rounded-xl border border-[#E8EDEB] bg-white text-[#0A1F1C] focus:outline-none focus:border-[#4ADE80] text-sm resize-none" />
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                  <div className="flex-1 px-4 py-3 rounded-xl border border-dashed border-[#E8EDEB] text-[#0A1F1C]/40 text-sm text-center hover:border-[#4ADE80] transition-colors">
                    Lebenslauf hochladen (PDF)
                  </div>
                </label>
                <button type="submit" className="w-full py-3 bg-[#4ADE80] text-[#0A1F1C] rounded-xl font-bold hover:bg-[#86EFAC] transition-colors">
                  Bewerbung senden
                </button>
                <p className="text-[#0A1F1C]/30 text-xs text-center">Ihre Daten werden vertraulich behandelt.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
