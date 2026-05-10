"use client";

import { useState, useRef, useLayoutEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  { step: "01", title: "Leeres Dach", desc: "Ihre Reise beginnt: Ein freies Dach voller Potenzial. Wir analysieren Lage, Neigung und Verschattung.", icon: "🏠", color: "#F0F4F2" },
  { step: "02", title: "Vermessung & Planung", desc: "Unsere Ingenieure vermessen das Dach digital. Ein maßgeschneiderter Plan entsteht.", icon: "📐", color: "#86EFAC" },
  { step: "03", title: "Montagesystem", desc: "Präzise Aluminiumschienen werden montiert — stabil, winddicht, dachschutzgerecht.", icon: "🔧", color: "#4ADE80" },
  { step: "04", title: "Solarpanele", desc: "Hochleistungsmodule werden eingehängt und gesichert. Jedes Panel optimal ausgerichtet.", icon: "⚡", color: "#4ADE80" },
  { step: "05", title: "Verkabelung", desc: "DC-Leitungen werden verlegt, sauber und sicher. Alle Verbindungen überprüft.", icon: "🔌", color: "#FCD34D" },
  { step: "06", title: "Wechselrichter", desc: "Das Herzstück: Wandelt Gleichstrom in nutzbaren Wechselstrom. Monitoring aktiviert.", icon: "🖥️", color: "#FCD34D" },
  { step: "07", title: "Aktivierung", desc: "Inbetriebnahme — Ihre Anlage produziert erstmals Strom. Herzlichen Glückwunsch!", icon: "☀️", color: "#4ADE80" },
];

const GAP = 24;

export function SolarJourneyCarousel() {
  const [active, setActive] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  useLayoutEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setCardWidth(Math.min(600, Math.round(w * 0.82)));
      }
    };
    const debouncedMeasure = () => {
      clearTimeout(timeout);
      timeout = setTimeout(measure, 80);
    };
    measure();
    window.addEventListener("resize", debouncedMeasure);
    return () => {
      window.removeEventListener("resize", debouncedMeasure);
      clearTimeout(timeout);
    };
  }, []);

  const prev = useCallback(() => setActive((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setActive((i) => Math.min(steps.length - 1, i + 1)), []);

  return (
    <section id="reise-der-solaranlage" className="section-dark py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">So funktioniert es</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#F0F4F2] mt-3">
            Die Reise Ihrer<br />
            <span className="text-gradient-leaf">Solaranlage</span>
          </h2>
        </motion.div>

        <div
          ref={containerRef}
          className="relative overflow-hidden"
          style={{ height: 280 }}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const diff = e.changedTouches[0].clientX - touchStartX.current;
            if (diff < -50) next();
            else if (diff > 50) prev();
          }}
        >
          {cardWidth > 0 && steps.map((step, i) => {
            const offset = i - active;
            return (
              <motion.div
                key={step.step}
                className="absolute top-0 h-[260px]"
                style={{
                  width: cardWidth,
                  left: `calc(50% - ${cardWidth / 2}px)`,
                }}
                animate={{
                  x: offset * (cardWidth + GAP),
                  opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.35 : 0,
                  scale: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.93 : 0.8,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 30 }}
              >
                <div className="h-full bg-[#0A2A20]/80 border border-[#1B3A36] rounded-2xl p-7 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-lg border-2 flex-shrink-0"
                      style={{ borderColor: step.color, color: step.color }}
                    >
                      {step.icon}
                    </div>
                    <span className="text-[#F0F4F2]/30 font-mono text-xs">Step {step.step} / 07</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#F0F4F2] font-black text-xl mb-2">{step.title}</h3>
                    <p className="text-[#F0F4F2]/55 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="h-0.5 bg-[#1B3A36] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${((i + 1) / steps.length) * 100}%`, backgroundColor: step.color }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-5 mt-8">
          <motion.button
            onClick={prev}
            disabled={active === 0}
            className="w-11 h-11 rounded-full border border-[#1B3A36] flex items-center justify-center text-[#F0F4F2] disabled:opacity-20 hover:border-[#4ADE80] hover:text-[#4ADE80] transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Vorheriger Schritt"
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>

          <div className="flex gap-1.5">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 24 : 8,
                  backgroundColor: i === active ? "#4ADE80" : "#1B3A36",
                }}
                aria-label={`Step ${i + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            disabled={active === steps.length - 1}
            className="w-11 h-11 rounded-full border border-[#1B3A36] flex items-center justify-center text-[#F0F4F2] disabled:opacity-20 hover:border-[#4ADE80] hover:text-[#4ADE80] transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Nächster Schritt"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
