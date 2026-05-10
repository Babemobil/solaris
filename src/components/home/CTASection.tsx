"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, #4ADE80 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em] mb-4 block">
            Kostenloses Erstgespräch
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-[#F0F4F2] leading-tight mb-6">
            Bereit für Ihre<br />
            <span className="text-gradient-leaf">Energiewende?</span>
          </h2>
          <p className="text-[#F0F4F2]/60 text-lg max-w-xl mx-auto mb-10">
            Kostenloses Beratungsgespräch — wir analysieren Ihr Potenzial und erstellen ein unverbindliches Angebot innerhalb von 48 Stunden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="magnetic-btn group inline-flex items-center gap-3 px-8 py-4 bg-[#4ADE80] text-[#0A1F1C] rounded-full font-bold text-lg hover:bg-[#86EFAC] transition-all duration-300 shadow-[0_0_50px_rgba(74,222,128,0.3)]"
            >
              Beratungsgespräch buchen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+4912344555"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-[#F0F4F2] rounded-full font-semibold text-base hover:border-[#4ADE80]/40 hover:bg-white/5 transition-all"
            >
              <Phone className="w-4 h-4 text-[#4ADE80]" />
              +49 123 44555
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
