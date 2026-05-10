"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Home, Building2, Battery, Wind } from "lucide-react";

const solutions = [
  {
    href: "/loesungen/privat",
    title: "Photovoltaik Privat",
    sub: "Solaranlage für Ihr Eigenheim",
    icon: Home,
    image: "/images/house-solar-evening.png",
    color: "#4ADE80",
    large: true,
    stats: "Ab 8 kWp",
  },
  {
    href: "/loesungen/gewerbe",
    title: "Gewerbe & Industrie",
    sub: "Großanlagen ab 100 kWp",
    icon: Building2,
    image: "/images/project-industrial-solar.png",
    color: "#FCD34D",
    large: false,
    stats: "Ab 100 kWp",
  },
  {
    href: "/loesungen/speicher",
    title: "Batteriespeicher",
    sub: "Maximale Unabhängigkeit",
    icon: Battery,
    image: "/images/battery-storage.png",
    color: "#86EFAC",
    large: false,
    stats: "5–1000 kWh",
  },
  {
    href: "/loesungen/wind",
    title: "Windkraft",
    sub: "Onshore & Offshore Projekte",
    icon: Wind,
    image: "/images/wind-offshore.png",
    color: "#FCD34D",
    large: false,
    stats: "Ab 1 MW",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function SolutionsBento() {
  return (
    <section className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">
            Unsere Lösungen
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-[#0A1F1C] mt-3 leading-tight">
            Energie für jeden<br />
            <span className="text-[#1B3A36]">Anwendungsfall</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            <BentoCard item={solutions[0]} large />
          </motion.div>

          {/* Small cards */}
          {solutions.slice(1).map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.12, ease: [0.19, 1, 0.22, 1] }}
            >
              <BentoCard item={item} large={false} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({ item, large }: { item: typeof solutions[0]; large: boolean }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      data-cursor="view"
      className={`group relative overflow-hidden rounded-2xl block ${large ? "h-[500px] lg:h-full min-h-[400px]" : "h-[240px]"}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={large ? "(max-width: 768px) 100vw, 66vw" : "33vw"}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F1C]/90 via-[#0A1F1C]/30 to-transparent" />

      {/* Glassmorphism hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(10,31,28,0.15)", backdropFilter: "blur(2px)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
            <Icon className="w-5 h-5" style={{ color: item.color }} />
          </div>
          <motion.div
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(74,222,128,0.2)" }}
          >
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.div>
        </div>

        <div>
          <span
            className="text-xs font-mono uppercase tracking-widest mb-2 block"
            style={{ color: item.color }}
          >
            {item.stats}
          </span>
          <h3 className={`font-bold text-white leading-tight ${large ? "text-2xl lg:text-3xl" : "text-xl"}`}>
            {item.title}
          </h3>
          <p className="text-white/60 text-sm mt-1">{item.sub}</p>
        </div>
      </div>
    </Link>
  );
}
