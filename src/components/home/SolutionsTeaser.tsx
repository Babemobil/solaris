"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sun, Wind, Battery, ArrowUpRight } from "lucide-react";

const solutions = [
  {
    href: "/loesungen/solar",
    title: "Solar",
    desc: "Photovoltaik für Eigenheim und Unternehmen. Maßgeschneidert, TÜV-zertifiziert, 25 Jahre Leistungsgarantie.",
    icon: Sun,
    color: "#4ADE80",
  },
  {
    href: "/loesungen/wind",
    title: "Windkraft",
    desc: "Onshore & Offshore Projekte ab 1 MW. Planung, Genehmigung und Betrieb aus einer Hand.",
    icon: Wind,
    color: "#FCD34D",
  },
  {
    href: "/loesungen/speicher",
    title: "Speicher",
    desc: "Batteriespeicher 5–1000 kWh. Maximale Unabhängigkeit, Peak-Shaving, 24/7 Monitoring.",
    icon: Battery,
    color: "#86EFAC",
  },
];

export function SolutionsTeaser() {
  return (
    <section className="section-light py-12 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">Unsere Lösungen</span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-[#0A1F1C] mt-3 leading-tight">
            Energie für jeden<br />
            <span className="text-[#1B3A36]">Anwendungsfall</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={sol.href}
                  className="group block rounded-2xl border border-[#E8EDEB] p-8 hover:border-[#4ADE80] hover:bg-[#F0F4F2] transition-all duration-300 h-full"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${sol.color}25`, color: sol.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1F1C] mb-3">{sol.title}</h3>
                  <p className="text-[#0A1F1C]/60 text-sm leading-relaxed mb-8">{sol.desc}</p>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-[#0A1F1C] group-hover:gap-2.5 transition-all duration-200">
                    Mehr erfahren <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
