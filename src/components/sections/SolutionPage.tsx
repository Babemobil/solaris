"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

interface SolutionPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  accentColor: string;
  features: { title: string; desc: string }[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
}

export function SolutionPage({
  title,
  subtitle,
  description,
  heroImage,
  accentColor,
  features,
  specs,
  faqs,
}: SolutionPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 section-dark pt-24">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={title} fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F1C] via-[#0A1F1C]/70 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-sm font-mono uppercase tracking-[0.2em]" style={{ color: accentColor }}>
            {subtitle}
          </span>
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-black text-[#F0F4F2] mt-3 leading-tight">
            {title}
          </h1>
          <p className="text-[#F0F4F2]/60 text-xl mt-4 max-w-2xl">{description}</p>
          <div className="flex gap-4 mt-8">
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-full font-bold text-[#0A1F1C] transition-all duration-300"
              style={{ background: accentColor }}
            >
              Angebot anfragen
            </Link>
            <Link
              href="/faq"
              className="px-8 py-4 rounded-full border border-white/20 text-[#F0F4F2] hover:bg-white/5 transition-all"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl border border-[#E8EDEB] hover:border-[#4ADE80]/30 transition-all hover:shadow-[0_8px_32px_rgba(10,31,28,0.08)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <CheckCircle className="w-6 h-6 mb-3" style={{ color: accentColor }} />
                <h3 className="text-[#0A1F1C] font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-[#0A1F1C]/60 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech specs */}
      <section className="section-dark py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#F0F4F2] mb-8">Technische Spezifikationen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specs.map((s) => (
              <div key={s.label} className="flex justify-between items-center p-4 rounded-xl border border-white/10 bg-white/3">
                <span className="text-[#F0F4F2]/50 text-sm">{s.label}</span>
                <span className="font-mono font-bold text-[#4ADE80] text-sm">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#0A1F1C] mb-8">Häufige Fragen</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-[#E8EDEB] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F0F4F2] transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-[#0A1F1C] pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4ADE80] flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-[#0A1F1C]/60 text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
