"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";

export function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="section-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">Referenzprojekte</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#0A1F1C] mt-3">
              Projekte die<br />
              <span className="text-[#1B3A36]">für sich sprechen</span>
            </h2>
          </motion.div>
          <Link
            href="/projekte"
            className="hidden lg:flex items-center gap-2 text-[#0A1F1C] font-semibold hover:text-[#1B3A36] transition-colors link-underline"
          >
            Alle Projekte <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Link
                href={`/projekte/${project.slug}`}
                data-cursor="view"
                className="group block rounded-2xl overflow-hidden border border-[#E8EDEB] hover:border-[#4ADE80]/30 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(10,31,28,0.1)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F1C]/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#4ADE80] text-[#0A1F1C] text-xs font-bold uppercase tracking-wide">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#0A1F1C]/40 text-xs font-mono uppercase tracking-widest mb-2">
                    {project.region} · {project.year}
                  </p>
                  <h3 className="text-[#0A1F1C] font-bold text-lg mb-2 group-hover:text-[#1B3A36] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#0A1F1C]/50 text-sm line-clamp-2">{project.description}</p>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#E8EDEB]">
                    <div>
                      <p className="text-[#0A1F1C]/40 text-xs">Leistung</p>
                      <p className="font-mono font-bold text-[#0A1F1C] text-sm">
                        {project.kwp >= 1000 ? `${(project.kwp / 1000).toFixed(1)} MWp` : `${project.kwp} kWp`}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#0A1F1C]/40 text-xs">CO₂/Jahr</p>
                      <p className="font-mono font-bold text-[#4ADE80] text-sm">{project.co2} t</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#0A1F1C]/30 group-hover:text-[#4ADE80] transition-colors ml-auto" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center lg:hidden">
          <Link
            href="/projekte"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#0A1F1C]/20 rounded-full text-[#0A1F1C] hover:bg-[#0A1F1C] hover:text-[#F0F4F2] transition-all"
          >
            Alle Projekte <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
