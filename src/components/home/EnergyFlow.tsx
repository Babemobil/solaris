"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Zap, Battery, Home, Power, Moon } from "lucide-react";

const components = [
  { id: "sun", label: "Sonne", icon: Sun, x: 10, y: 40, detail: "Solareinstrahlung\n900 W/m²", color: "#FCD34D" },
  { id: "panel", label: "Solarpanel", icon: Zap, x: 30, y: 40, detail: "Leistung: 12,6 kWp\nErtrag: 8,2 kWh heute", color: "#4ADE80" },
  { id: "inverter", label: "Wechselrichter", icon: Power, x: 50, y: 40, detail: "Typ: Hybrid\nWirkungsgrad: 97,5 %", color: "#86EFAC" },
  { id: "battery", label: "Speicher", icon: Battery, x: 50, y: 70, detail: "Kapazität: 10 kWh\nLadestand: 78 %", color: "#4ADE80" },
  { id: "house", label: "Haushalt", icon: Home, x: 75, y: 40, detail: "Verbrauch: 3,1 kW\nEigenverbrauch: 100 %", color: "#F0F4F2" },
  { id: "grid", label: "Netz", icon: Zap, x: 75, y: 70, detail: "Einspeisung: 0 kW\nEinspeisevergütung: 8,2 ct/kWh", color: "#86EFAC" },
];

const dayFlows = [
  { from: "sun", to: "panel", color: "#FCD34D" },
  { from: "panel", to: "inverter", color: "#4ADE80" },
  { from: "inverter", to: "house", color: "#4ADE80" },
  { from: "inverter", to: "battery", color: "#86EFAC" },
];

const nightFlows = [
  { from: "battery", to: "inverter", color: "#86EFAC" },
  { from: "inverter", to: "house", color: "#4ADE80" },
];

function FlowParticle({ path, color, delay }: { path: string; color: string; delay: number }) {
  return (
    <motion.circle r="4" fill={color}>
      <animateMotion
        dur="2s"
        repeatCount="indefinite"
        begin={`${delay}s`}
      >
        <mpath href={`#${path}`} />
      </animateMotion>
    </motion.circle>
  );
}

export function EnergyFlow() {
  const [isDay, setIsDay] = useState(true);
  const [tooltip, setTooltip] = useState<string | null>(null);
  const [dims, setDims] = useState({ w: 600, h: 300 });
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const update = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setDims({ w: rect.width, h: rect.height });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const flows = isDay ? dayFlows : nightFlows;

  const getPos = (id: string) => {
    const c = components.find((c) => c.id === id)!;
    return { x: (c.x / 100) * dims.w, y: (c.y / 100) * dims.h };
  };

  return (
    <section className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 gap-6">
          <div>
            <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">
              Energie-Visualisierung
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#F0F4F2] mt-3">
              Wie Ihre Energie<br />
              <span className="text-gradient-leaf">zu Ihnen fließt</span>
            </h2>
          </div>

          {/* Day/Night toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDay(true)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 ${
                isDay
                  ? "bg-[#FCD34D] border-[#FCD34D] text-[#0A1F1C]"
                  : "border-white/20 text-[#F0F4F2]/50 hover:border-white/40"
              }`}
            >
              <Sun className="w-4 h-4" />
              <span className="text-sm font-semibold">Tag</span>
            </button>
            <button
              onClick={() => setIsDay(false)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 ${
                !isDay
                  ? "bg-[#1B3A36] border-[#4ADE80] text-[#4ADE80]"
                  : "border-white/20 text-[#F0F4F2]/50 hover:border-white/40"
              }`}
            >
              <Moon className="w-4 h-4" />
              <span className="text-sm font-semibold">Nacht</span>
            </button>
          </div>
        </div>

        {/* SVG Flow diagram */}
        <div className="relative rounded-2xl border border-white/8 bg-[#1B3A36]/30 overflow-hidden">
          <svg
            ref={svgRef}
            className="w-full"
            style={{ height: "320px" }}
            viewBox={`0 0 ${dims.w} ${dims.h}`}
          >
            <defs>
              {flows.map((flow, i) => {
                const from = getPos(flow.from);
                const to = getPos(flow.to);
                const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 - 30 };
                return (
                  <path
                    key={i}
                    id={`flow-${i}`}
                    d={`M ${from.x} ${from.y} Q ${mid.x} ${mid.y} ${to.x} ${to.y}`}
                    fill="none"
                  />
                );
              })}
            </defs>

            {/* Flow lines */}
            {flows.map((flow, i) => {
              const from = getPos(flow.from);
              const to = getPos(flow.to);
              const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 - 30 };
              return (
                <motion.path
                  key={`${flow.from}-${flow.to}`}
                  d={`M ${from.x} ${from.y} Q ${mid.x} ${mid.y} ${to.x} ${to.y}`}
                  stroke={flow.color}
                  strokeWidth="2"
                  fill="none"
                  opacity={0.4}
                  strokeDasharray="8 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
              );
            })}

            {/* Particles */}
            {flows.map((flow, i) => (
              <FlowParticle
                key={`${flow.from}-${flow.to}-particle`}
                path={`flow-${i}`}
                color={flow.color}
                delay={i * 0.5}
              />
            ))}

            {/* Component nodes */}
            {components.map((comp) => {
              const pos = getPos(comp.id);
              const active = flows.some((f) => f.from === comp.id || f.to === comp.id);
              if (comp.id === "sun" && !isDay) return null;

              return (
                <g
                  key={comp.id}
                  transform={`translate(${pos.x}, ${pos.y})`}
                  className="cursor-pointer"
                  onMouseEnter={() => setTooltip(comp.id)}
                  onMouseLeave={() => setTooltip(null)}
                >
                  <circle
                    r="28"
                    fill={active ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.03)"}
                    stroke={active ? comp.color : "rgba(255,255,255,0.1)"}
                    strokeWidth={active ? "2" : "1"}
                  />
                  {active && (
                    <motion.circle
                      r="28"
                      fill="none"
                      stroke={comp.color}
                      strokeWidth="1"
                      opacity={0.3}
                      animate={{ r: [28, 36, 28], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  <text
                    textAnchor="middle"
                    y="5"
                    fontSize="18"
                    className="select-none"
                  >
                    {comp.id === "sun" ? "☀️" :
                     comp.id === "panel" ? "⚡" :
                     comp.id === "inverter" ? "🔌" :
                     comp.id === "battery" ? "🔋" :
                     comp.id === "house" ? "🏠" : "🔗"}
                  </text>
                  <text
                    textAnchor="middle"
                    y="46"
                    fontSize="10"
                    fill={active ? "#F0F4F2" : "rgba(240,244,242,0.4)"}
                    fontFamily="var(--font-geist-sans)"
                  >
                    {comp.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-dark rounded-xl px-4 py-3 text-sm text-[#F0F4F2] text-center pointer-events-none"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
              >
                {components.find((c) => c.id === tooltip)?.detail.split("\n").map((l, i) => (
                  <div key={i} className={i === 0 ? "font-semibold text-[#4ADE80]" : "text-[#F0F4F2]/70"}>
                    {l}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
