"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps: { step: string; title: string; desc: string; icon: string; color: string }[] = [
  { step: "01", title: "Leeres Dach", desc: "Ihre Reise beginnt: Ein freies Dach voller Potenzial. Wir analysieren Lage, Neigung und Verschattung.", icon: "🏠", color: "#F0F4F2" },
  { step: "02", title: "Vermessung & Planung", desc: "Unsere Ingenieure vermessen das Dach digital. Ein maßgeschneiderter Plan entsteht.", icon: "📐", color: "#86EFAC" },
  { step: "03", title: "Montagesystem", desc: "Präzise Aluminiumschienen werden montiert — stabil, winddicht, dachschutzgerecht.", icon: "🔧", color: "#4ADE80" },
  { step: "04", title: "Solarpanele", desc: "Hochleistungsmodule werden eingehängt und gesichert. Jedes Panel optimal ausgerichtet.", icon: "⚡", color: "#4ADE80" },
  { step: "05", title: "Verkabelung", desc: "DC-Leitungen werden verlegt, sauber und sicher. Alle Verbindungen überprüft.", icon: "🔌", color: "#FCD34D" },
  { step: "06", title: "Wechselrichter", desc: "Das Herzstück: Wandelt Gleichstrom in nutzbaren Wechselstrom. Monitoring aktiviert.", icon: "🖥️", color: "#FCD34D" },
  { step: "07", title: "Aktivierung", desc: "Inbetriebnahme — Ihre Anlage produziert erstmals Strom. Herzlichen Glückwunsch!", icon: "☀️", color: "#4ADE80" },
];

export function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="wie-es-funktioniert"
      ref={containerRef}
      className="relative section-dark"
      style={{ height: `${steps.length * 60}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">So funktioniert es</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#F0F4F2] mt-3">
              So entsteht deine<br />
              <span className="text-gradient-leaf">Solaranlage</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
              {steps.map((step, i) => (
                <StepRow key={step.step} step={step} index={i} total={steps.length} scrollYProgress={scrollYProgress} />
              ))}
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <ProgressArc scrollYProgress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepRow({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: (typeof steps)[0];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const mid = (index + 0.5) / total;
  const lo = Math.max(0, mid - 0.15);
  const hi = Math.min(1, mid + 0.15);

  const opacity = useTransform(scrollYProgress, [lo, mid, hi], [0.25, 1, 0.25]);
  const x = useTransform(scrollYProgress, [lo, mid], [-16, 0]);

  return (
    <motion.div style={{ opacity, x }} className="flex gap-4 items-start">
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base border-2"
        style={{ borderColor: step.color, color: step.color }}
      >
        {step.icon}
      </div>
      <div>
        <span className="text-xs font-mono text-[#F0F4F2]/30">Step {step.step}</span>
        <h3 className="text-[#F0F4F2] font-bold text-lg">{step.title}</h3>
        <p className="text-[#F0F4F2]/50 text-sm leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  );
}

function ProgressArc({ scrollYProgress }: { scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const dashOffset = useTransform(scrollYProgress, [0, 1], [565, 0]);
  const panelOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <div className="relative w-72 h-72">
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        {/* House */}
        <path d="M100 20 L180 80 L20 80 Z" stroke="#1B3A36" strokeWidth="2" fill="#0A1F1C" />
        <rect x="40" y="80" width="120" height="100" stroke="#1B3A36" strokeWidth="2" fill="#0A1F1C" />
        {/* Panels fade in */}
        {[0,1,2,3,4,5].map((i) => (
          <motion.rect
            key={i}
            x={48 + (i % 3) * 34} y={26 + Math.floor(i / 3) * 22}
            width="28" height="16" rx="2"
            fill="#4ADE80"
            style={{ opacity: panelOpacity }}
          />
        ))}
      </svg>
      {/* Progress ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" stroke="#1B3A36" strokeWidth="2" fill="none" />
        <motion.circle
          cx="100" cy="100" r="90"
          stroke="#4ADE80" strokeWidth="2" fill="none"
          strokeDasharray="565"
          style={{ strokeDashoffset: dashOffset }}
        />
      </svg>
    </div>
  );
}
