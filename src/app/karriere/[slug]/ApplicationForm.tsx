"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
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
  );
}
