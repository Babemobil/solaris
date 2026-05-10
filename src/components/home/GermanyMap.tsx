"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bundeslaender = [
  { id: "sh",   name: "Schleswig-Holstein",        sun: 950,  yield: 910,  savings: 1095, labelX: 148, labelY: 42,
    path: "M 94,0 L 162,0 L 208,22 L 200,62 L 162,78 L 140,92 L 107,78 L 94,44 Z", color: 0.47 },
  { id: "hh",   name: "Hamburg",                   sun: 960,  yield: 920,  savings: 1105, labelX: 178, labelY: 88,
    path: "M 162,78 L 188,78 L 188,98 L 162,98 Z", color: 0.50 },
  { id: "mv",   name: "Mecklenburg-Vorpommern",    sun: 990,  yield: 950,  savings: 1140, labelX: 295, labelY: 38,
    path: "M 162,0 L 390,0 L 390,62 L 258,68 L 200,62 L 208,22 Z", color: 0.55 },
  { id: "ni",   name: "Niedersachsen",             sun: 985,  yield: 945,  savings: 1135, labelX: 130, labelY: 138,
    path: "M 14,82 L 107,78 L 140,92 L 162,98 L 188,98 L 208,88 L 258,92 L 252,158 L 202,176 L 158,176 L 82,180 L 44,182 L 14,148 Z", color: 0.53 },
  { id: "hb",   name: "Bremen",                   sun: 965,  yield: 925,  savings: 1110, labelX: 118, labelY: 104,
    path: "M 106,98 L 130,95 L 132,114 L 107,116 Z", color: 0.52 },
  { id: "bb",   name: "Brandenburg",              sun: 1040, yield: 995,  savings: 1195, labelX: 322, labelY: 132,
    path: "M 258,68 L 390,62 L 400,172 L 358,208 L 308,198 L 282,168 L 252,158 L 258,92 Z", color: 0.68 },
  { id: "be",   name: "Berlin",                   sun: 1040, yield: 995,  savings: 1195, labelX: 342, labelY: 136,
    path: "M 328,122 L 354,122 L 354,146 L 328,146 Z", color: 0.68 },
  { id: "st",   name: "Sachsen-Anhalt",           sun: 1040, yield: 995,  savings: 1195, labelX: 228, labelY: 168,
    path: "M 208,88 L 252,158 L 282,168 L 268,212 L 218,218 L 188,188 L 182,158 Z", color: 0.68 },
  { id: "nrw",  name: "NRW",                      sun: 1010, yield: 970,  savings: 1165, labelX: 92,  labelY: 212,
    path: "M 14,148 L 82,180 L 158,176 L 166,208 L 128,252 L 78,268 L 28,248 L 14,208 Z", color: 0.60 },
  { id: "he",   name: "Hessen",                   sun: 1050, yield: 1000, savings: 1200, labelX: 178, labelY: 228,
    path: "M 158,176 L 202,176 L 218,218 L 198,268 L 168,282 L 146,262 L 128,252 L 166,208 Z", color: 0.70 },
  { id: "th",   name: "Thüringen",                sun: 1060, yield: 1010, savings: 1210, labelX: 238, labelY: 256,
    path: "M 218,218 L 268,212 L 282,262 L 266,298 L 218,298 L 193,278 L 198,268 Z", color: 0.72 },
  { id: "sn",   name: "Sachsen",                  sun: 1070, yield: 1020, savings: 1225, labelX: 338, labelY: 248,
    path: "M 282,168 L 308,198 L 358,208 L 400,172 L 420,268 L 378,302 L 308,308 L 266,298 L 282,262 L 268,212 Z", color: 0.75 },
  { id: "rp",   name: "Rheinland-Pfalz",          sun: 1030, yield: 990,  savings: 1190, labelX: 48,  labelY: 296,
    path: "M 28,248 L 78,268 L 68,332 L 54,348 L 18,328 L 14,272 Z", color: 0.65 },
  { id: "saar", name: "Saarland",                 sun: 1020, yield: 980,  savings: 1175, labelX: 72,  labelY: 340,
    path: "M 68,332 L 88,318 L 96,340 L 78,356 L 54,348 Z", color: 0.62 },
  { id: "bw",   name: "Baden-Württemberg",        sun: 1150, yield: 1100, savings: 1320, labelX: 118, labelY: 348,
    path: "M 78,268 L 128,252 L 146,262 L 168,282 L 180,332 L 170,408 L 126,438 L 86,432 L 56,388 L 54,348 L 68,332 Z", color: 0.90 },
  { id: "by",   name: "Bayern",                   sun: 1180, yield: 1150, savings: 1380, labelX: 288, labelY: 398,
    path: "M 168,282 L 193,278 L 218,298 L 266,298 L 308,308 L 378,302 L 420,268 L 420,392 L 348,498 L 178,498 L 126,438 L 170,408 L 180,332 Z", color: 0.95 },
];

const getColor = (strength: number) => {
  const g = Math.round(31 + strength * 150);
  return `rgb(10,${g},28)`;
};

export function GermanyMap() {
  const [active, setActive] = useState<string | null>(null);
  const activeState = bundeslaender.find((b) => b.id === active);

  const toggle = (id: string) => setActive(a => a === id ? null : id);

  return (
    <section className="section-light py-12 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">
                Solar-Potenzial
              </span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#0A1F1C] mt-3 mb-6 leading-tight">
                Ihr Bundesland,<br />
                <span className="text-[#1B3A36]">Ihr Potenzial</span>
              </h2>
              <p className="text-[#0A1F1C]/60 leading-relaxed mb-8">
                Deutschland hat mehr Sonnenpotenzial als viele denken. Tippen Sie auf Ihr Bundesland und entdecken Sie das Solar-Potenzial in Ihrer Region.
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {activeState ? (
                <motion.div
                  key={activeState.id}
                  className="rounded-2xl p-6 bg-[#0A1F1C] text-[#F0F4F2]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-xl font-bold text-[#4ADE80] mb-4">{activeState.name}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Sonnenstunden", value: `${activeState.sun} h/Jahr`, color: "#FCD34D" },
                      { label: "Ertrag/kWp",   value: `${activeState.yield} kWh`,  color: "#4ADE80" },
                      { label: "Ersparnis/Jahr",value: `~${activeState.savings} €`, color: "#86EFAC" },
                    ].map(({ label, value, color }) => (
                      <div key={label}>
                        <p className="text-[#F0F4F2]/40 text-xs mb-1">{label}</p>
                        <p className="font-mono font-bold text-base" style={{ color }}>{value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#F0F4F2]/30 text-xs mt-4">
                    *Schätzwerte für 10 kWp Anlage, Südausrichtung, 0,32 €/kWh
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  className="rounded-2xl p-6 bg-[#E8EDEB] text-[#0A1F1C]/40 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Bundesland antippen um Solar-Potenzial zu sehen
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right — map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <svg viewBox="0 0 420 498" className="w-full max-w-sm mx-auto touch-manipulation">
              {bundeslaender.map((land, i) => (
                <motion.path
                  key={land.id}
                  d={land.path}
                  fill={active === land.id ? "#4ADE80" : getColor(land.color)}
                  stroke="#F0F4F2"
                  strokeWidth="1.5"
                  className="cursor-pointer"
                  onClick={() => toggle(land.id)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.03 + i * 0.03, duration: 0.3 }}
                  whileHover={{ fill: active === land.id ? "#4ADE80" : "#86EFAC" }}
                />
              ))}
              {/* State labels for larger viewports */}
              {bundeslaender
                .filter(l => !["hh","hb","be","saar"].includes(l.id))
                .map(land => (
                  <text
                    key={`label-${land.id}`}
                    x={land.labelX}
                    y={land.labelY}
                    fontSize="8"
                    fontFamily="monospace"
                    fill={active === land.id ? "#0A1F1C" : "#F0F4F2"}
                    textAnchor="middle"
                    pointerEvents="none"
                    opacity="0.7"
                  >
                    {land.id.toUpperCase()}
                  </text>
                ))
              }
            </svg>

            {/* Legend */}
            <div className="flex items-center gap-3 mt-4 justify-center">
              <span className="text-xs text-[#0A1F1C]/50">Weniger</span>
              <div className="flex gap-1">
                {[0.3, 0.5, 0.7, 0.85, 1].map((v) => (
                  <div key={v} className="w-6 h-3 rounded" style={{ background: getColor(v) }} />
                ))}
              </div>
              <span className="text-xs text-[#0A1F1C]/50">Mehr Potenzial</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
