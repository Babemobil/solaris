"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bundeslaender = [
  { id: "by", name: "Bayern", sun: 1180, yield: 1150, savings: 1380, path: "M 230 280 L 310 270 L 340 310 L 330 370 L 270 390 L 230 360 L 210 320 Z", labelX: 270, labelY: 335, color: 0.95 },
  { id: "bw", name: "Baden-Württemberg", sun: 1150, yield: 1100, savings: 1320, path: "M 185 290 L 230 280 L 230 360 L 210 390 L 175 380 L 160 350 L 165 310 Z", labelX: 195, labelY: 340, color: 0.9 },
  { id: "he", name: "Hessen", sun: 1050, yield: 1000, savings: 1200, path: "M 185 225 L 225 215 L 240 240 L 230 280 L 185 290 L 165 270 L 175 245 Z", labelX: 205, labelY: 258, color: 0.7 },
  { id: "rp", name: "Rheinland-Pfalz", sun: 1030, yield: 990, savings: 1190, path: "M 130 260 L 185 225 L 175 245 L 165 270 L 165 310 L 140 320 L 115 300 Z", labelX: 153, labelY: 280, color: 0.65 },
  { id: "saar", name: "Saarland", sun: 1020, yield: 980, savings: 1175, path: "M 130 260 L 150 250 L 155 270 L 140 280 L 115 270 Z", labelX: 135, labelY: 262, color: 0.62 },
  { id: "nrw", name: "NRW", sun: 1010, yield: 970, savings: 1165, path: "M 105 175 L 175 165 L 190 200 L 185 225 L 130 260 L 100 245 L 90 210 Z", labelX: 143, labelY: 210, color: 0.6 },
  { id: "th", name: "Thüringen", sun: 1060, yield: 1010, savings: 1210, path: "M 225 215 L 280 205 L 295 230 L 290 260 L 240 265 L 230 280 L 230 260 Z", labelX: 262, labelY: 240, color: 0.72 },
  { id: "sn", name: "Sachsen", sun: 1070, yield: 1020, savings: 1225, path: "M 280 205 L 340 195 L 360 220 L 345 255 L 310 270 L 295 230 Z", labelX: 320, labelY: 233, color: 0.75 },
  { id: "st", name: "Sachsen-Anhalt", sun: 1040, yield: 995, savings: 1195, path: "M 245 155 L 310 145 L 330 175 L 320 205 L 280 205 L 260 185 Z", labelX: 285, labelY: 178, color: 0.68 },
  { id: "bb", name: "Brandenburg", sun: 1040, yield: 995, savings: 1195, path: "M 310 120 L 375 115 L 400 145 L 390 185 L 350 200 L 330 175 L 310 145 Z", labelX: 355, labelY: 158, color: 0.68 },
  { id: "be", name: "Berlin", sun: 1040, yield: 995, savings: 1195, path: "M 340 155 L 360 153 L 360 175 L 340 175 Z", labelX: 350, labelY: 165, color: 0.68 },
  { id: "mv", name: "Mecklenburg-Vorpommern", sun: 990, yield: 950, savings: 1140, path: "M 245 80 L 375 70 L 400 100 L 400 130 L 375 115 L 310 120 L 260 105 Z", labelX: 320, labelY: 98, color: 0.55 },
  { id: "hh", name: "Hamburg", sun: 960, yield: 920, savings: 1105, path: "M 200 100 L 220 95 L 225 115 L 205 118 Z", labelX: 213, labelY: 108, color: 0.5 },
  { id: "sh", name: "Schleswig-Holstein", sun: 950, yield: 910, savings: 1095, path: "M 175 60 L 250 50 L 260 80 L 245 80 L 220 95 L 200 100 L 180 85 Z", labelX: 215, labelY: 73, color: 0.47 },
  { id: "hb", name: "Bremen", sun: 965, yield: 925, savings: 1110, path: "M 168 125 L 183 122 L 185 135 L 170 137 Z", labelX: 177, labelY: 130, color: 0.52 },
  { id: "ni", name: "Niedersachsen", sun: 985, yield: 945, savings: 1135, path: "M 105 110 L 200 100 L 220 95 L 245 80 L 260 105 L 245 155 L 200 165 L 175 165 L 105 175 L 90 155 Z", labelX: 180, labelY: 140, color: 0.53 },
];

const getColor = (strength: number) => {
  const r = Math.round(10 + strength * 0);
  const g = Math.round(31 + strength * 150);
  const b = Math.round(28 + strength * 10);
  return `rgb(${r},${g},${b})`;
};

export function GermanyMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const activeId = isMobile ? selected : hovered;
  const hoveredState = bundeslaender.find((b) => b.id === activeId);

  return (
    <section className="section-light py-12 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                Deutschland hat mehr Sonnenpotenzial als viele denken. Hover über Ihr Bundesland und entdecken Sie das Solar-Potenzial in Ihrer Region.
              </p>
            </motion.div>

            {/* Data card */}
            <AnimatePresence mode="wait">
              {hoveredState ? (
                <motion.div
                  key={hoveredState.id}
                  className="rounded-2xl p-6 bg-[#0A1F1C] text-[#F0F4F2]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-xl font-bold text-[#4ADE80] mb-4">{hoveredState.name}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Sonnenstunden", value: `${hoveredState.sun} h/Jahr`, color: "#FCD34D" },
                      { label: "Ertrag/kWp", value: `${hoveredState.yield} kWh`, color: "#4ADE80" },
                      { label: "Ersparnis/Jahr", value: `~${hoveredState.savings} €`, color: "#86EFAC" },
                    ].map(({ label, value, color }) => (
                      <div key={label}>
                        <p className="text-[#F0F4F2]/40 text-xs mb-1">{label}</p>
                        <p className="font-mono font-bold text-lg" style={{ color }}>{value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#F0F4F2]/40 text-xs mt-4">
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
                  {isMobile ? "Tippen Sie auf ein Bundesland um das Solar-Potenzial zu sehen" : "Hover über ein Bundesland um das Solar-Potenzial zu sehen"}
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
            <svg viewBox="60 40 370 380" className="w-full max-w-md mx-auto">
              {bundeslaender.map((land, i) => (
                <motion.path
                  key={land.id}
                  d={land.path}
                  fill={hovered === land.id ? "#4ADE80" : getColor(land.color)}
                  stroke="#F0F4F2"
                  strokeWidth="1.5"
                  className="cursor-pointer transition-colors duration-200"
                  onHoverStart={() => !isMobile && setHovered(land.id)}
                  onHoverEnd={() => !isMobile && setHovered(null)}
                  onTap={() => isMobile && setSelected(s => s === land.id ? null : land.id)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                  whileHover={{ scale: 1.02, originX: "50%", originY: "50%" }}
                />
              ))}
            </svg>

            {/* Legend */}
            <div className="flex items-center gap-3 mt-4 justify-center">
              <span className="text-xs text-[#0A1F1C]/50">Weniger Potenzial</span>
              <div className="flex gap-1">
                {[0.3, 0.5, 0.7, 0.85, 1].map((v) => (
                  <div
                    key={v}
                    className="w-6 h-3 rounded"
                    style={{ background: getColor(v) }}
                  />
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
