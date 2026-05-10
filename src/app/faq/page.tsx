"use client";

import { useState } from "react";
import { faqs } from "@/lib/data/faqs";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

const categories = ["Alle", "Technik", "Förderung", "Kosten", "Installation", "Wartung"] as const;

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState<string>("Alle");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = faqs.filter((f) => {
    const matchCat = cat === "Alle" || f.category === cat;
    const matchSearch = search === "" || f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <section className="section-dark pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">Häufige Fragen</span>
          <h1 className="text-[clamp(3rem,8vw,5.5rem)] font-black text-[#F0F4F2] mt-3 leading-tight">
            Haben Sie<br /><span className="text-gradient-leaf">Fragen?</span>
          </h1>

          {/* Search */}
          <div className="relative mt-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F0F4F2]/30" />
            <input
              type="search"
              placeholder="Fragen durchsuchen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/8 border border-white/12 rounded-2xl pl-12 pr-5 py-4 text-[#F0F4F2] placeholder:text-[#F0F4F2]/30 focus:outline-none focus:border-[#4ADE80]/50 text-base"
            />
          </div>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === c
                    ? "bg-[#4ADE80] text-[#0A1F1C]"
                    : "border border-[#E8EDEB] text-[#0A1F1C]/60 hover:border-[#4ADE80]/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="space-y-3">
            {filtered.length === 0 && (
              <div className="text-center py-12 text-[#0A1F1C]/40">
                <p className="text-lg mb-4">Keine Fragen gefunden</p>
                <Link href="/kontakt" className="text-[#4ADE80] underline underline-offset-4">Direkt fragen →</Link>
              </div>
            )}
            {filtered.map((faq) => (
              <div key={faq.id} className="rounded-xl border border-[#E8EDEB] overflow-hidden">
                <button
                  onClick={() => setOpen(open === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F0F4F2] transition-colors"
                  aria-expanded={open === faq.id}
                >
                  <span className="font-semibold text-[#0A1F1C] pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#4ADE80] flex-shrink-0 transition-transform duration-200 ${open === faq.id ? "rotate-180" : ""}`} />
                </button>
                {open === faq.id && (
                  <div className="px-5 pb-5 text-[#0A1F1C]/60 text-sm leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          {/* Not found link */}
          <div className="mt-12 p-6 rounded-2xl bg-[#F0F4F2] border border-[#E8EDEB] text-center">
            <p className="text-[#0A1F1C]/70 mb-3">Frage nicht gefunden?</p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1F1C] text-[#F0F4F2] rounded-full font-semibold text-sm hover:bg-[#1B3A36] transition-colors">
              Direkt anfragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
