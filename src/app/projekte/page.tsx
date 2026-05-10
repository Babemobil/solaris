"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";

const types = ["Alle", "privat", "gewerbe", "solar", "wind"];

export default function ProjektePage() {
  const [filter, setFilter] = useState("Alle");

  const filtered = filter === "Alle"
    ? projects
    : projects.filter((p) => p.type === filter);

  return (
    <>
      <div className="section-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">Portfolio</span>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-[#F0F4F2] mt-3 leading-tight">
            Unsere<br /><span className="text-gradient-leaf">Projekte</span>
          </h1>

          {/* Filter */}
          <div className="flex flex-wrap gap-3 mt-10">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200 ${
                  filter === t
                    ? "bg-[#4ADE80] text-[#0A1F1C]"
                    : "border border-white/20 text-[#F0F4F2]/60 hover:border-white/40 hover:text-[#F0F4F2]"
                }`}
              >
                {t === "Alle" ? "Alle" : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Link
                  href={`/projekte/${project.slug}`}
                  data-cursor="view"
                  className="group block rounded-2xl overflow-hidden border border-[#E8EDEB] hover:border-[#4ADE80]/30 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(10,31,28,0.1)]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F1C]/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#4ADE80] text-[#0A1F1C] text-xs font-bold uppercase">
                      {project.type}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-[#0A1F1C]/40 text-xs font-mono uppercase tracking-widest mb-2">{project.region} · {project.year}</p>
                    <h3 className="text-[#0A1F1C] font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-[#0A1F1C]/50 text-sm line-clamp-2 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-[#E8EDEB]">
                      <span className="font-mono font-bold text-[#4ADE80] text-sm">
                        {project.kwp >= 1000 ? `${(project.kwp/1000).toFixed(1)} MWp` : `${project.kwp} kWp`}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#0A1F1C]/30 group-hover:text-[#4ADE80] transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
