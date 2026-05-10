"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Leeres Dach",
    desc: "Ihre Reise beginnt: Ein freies Dach voller Potenzial. Wir analysieren Lage, Neigung und Verschattung.",
    icon: "🏠",
    color: "#F0F4F2",
  },
  {
    step: "02",
    title: "Vermessung & Planung",
    desc: "Unsere Ingenieure vermessen das Dach digital. Ein maßgeschneiderter Plan entsteht.",
    icon: "📐",
    color: "#86EFAC",
  },
  {
    step: "03",
    title: "Montagesystem",
    desc: "Präzise Aluminiumschienen werden montiert — stabil, winddicht, dachschutzgerecht.",
    icon: "🔧",
    color: "#4ADE80",
  },
  {
    step: "04",
    title: "Solarpanele",
    desc: "Hochleistungsmodule werden eingehängt und gesichert. Jedes Panel optimal ausgerichtet.",
    icon: "⚡",
    color: "#4ADE80",
  },
  {
    step: "05",
    title: "Verkabelung",
    desc: "DC-Leitungen werden verlegt, sauber und sicher. Alle Verbindungen überprüft.",
    icon: "🔌",
    color: "#FCD34D",
  },
  {
    step: "06",
    title: "Wechselrichter",
    desc: "Das Herzstück: Wandelt Gleichstrom in nutzbaren Wechselstrom. Monitoring aktiviert.",
    icon: "🖥️",
    color: "#FCD34D",
  },
  {
    step: "07",
    title: "Aktivierung",
    desc: "Inbetriebnahme — Ihre Anlage produziert erstmals Strom. Herzlichen Glückwunsch!",
    icon: "☀️",
    color: "#4ADE80",
    active: true,
  },
];

export function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeStep = useTransform(
    scrollYProgress,
    steps.map((_, i) => i / (steps.length - 1)),
    steps.map((_, i) => i)
  );

  return (
    <section
      id="wie-es-funktioniert"
      ref={containerRef}
      className="relative section-dark"
      style={{ height: `${steps.length * 60}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">
              So funktioniert es
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#F0F4F2] mt-3">
              So entsteht deine<br />
              <span className="text-gradient-leaf">Solaranlage</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Steps list */}
            <div className="space-y-4">
              {steps.map((step, i) => (
                <StepItem
                  key={step.step}
                  step={step}
                  index={i}
                  total={steps.length}
                  scrollProgress={scrollYProgress}
                />
              ))}
            </div>

            {/* Visualization */}
            <div className="hidden lg:flex items-center justify-center">
              <ScrollyViz scrollProgress={scrollYProgress} steps={steps} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({
  step,
  index,
  total,
  scrollProgress,
}: {
  step: (typeof steps)[0];
  index: number;
  total: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(scrollProgress, [start - 0.05, start, end - 0.05, end], [0.3, 1, 1, 0.3]);
  const x = useTransform(scrollProgress, [start - 0.05, start], [-20, 0]);

  return (
    <motion.div style={{ opacity, x }} className="flex gap-4 items-start">
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg border-2"
        style={{ borderColor: step.color, color: step.color }}
      >
        <span className="text-base">{step.icon}</span>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono text-[#F0F4F2]/30">Step {step.step}</span>
        </div>
        <h3 className="text-[#F0F4F2] font-bold text-lg">{step.title}</h3>
        <p className="text-[#F0F4F2]/50 text-sm leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  );
}

function ScrollyViz({
  scrollProgress,
  steps,
}: {
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  steps: typeof steps;
}) {
  return (
    <div className="relative w-80 h-80">
      {/* House outline */}
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
        {/* Roof */}
        <path d="M100 20 L180 80 L20 80 Z" stroke="#1B3A36" strokeWidth="2" fill="#0A1F1C" />
        {/* Wall */}
        <rect x="40" y="80" width="120" height="100" stroke="#1B3A36" strokeWidth="2" fill="#0A1F1C" />

        {/* Solar panels — animate in */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const x = 48 + (i % 3) * 34;
          const y = 26 + Math.floor(i / 3) * 22;
          return (
            <motion.rect
              key={i}
              x={x} y={y} width="28" height="16"
              rx="2"
              fill="#4ADE80"
              opacity={0}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              style={{
                opacity: useTransform(
                  scrollProgress,
                  [3 / steps.length, 4 / steps.length],
                  [0, 0.9]
                ),
              }}
            />
          );
        })}

        {/* Glow on activation */}
        <motion.circle
          cx="100" cy="100" r="60"
          fill="none"
          stroke="#4ADE80"
          strokeWidth="1"
          style={{
            opacity: useTransform(scrollProgress, [0.85, 1], [0, 0.5]),
            scale: useTransform(scrollProgress, [0.85, 1], [0.8, 1.2]),
          }}
        />
      </svg>

      {/* Progress arc */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="90" stroke="#1B3A36" strokeWidth="2" fill="none" />
        <motion.circle
          cx="100" cy="100" r="90"
          stroke="#4ADE80"
          strokeWidth="2"
          fill="none"
          strokeDasharray="565"
          style={{
            strokeDashoffset: useTransform(scrollProgress, [0, 1], [565, 0]),
          }}
        />
      </svg>
    </div>
  );
}
