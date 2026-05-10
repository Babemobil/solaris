"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { ComposableMap, Geographies, Geography } = require("react-simple-maps");

const GEO_URL =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/germany/germany-states.json";

const stateInfo: Record<string, { sun: number; yield: number; savings: number; color: number }> = {
  "Schleswig-Holstein":         { sun: 950,  yield: 910,  savings: 1095, color: 0.47 },
  "Hamburg":                    { sun: 960,  yield: 920,  savings: 1105, color: 0.50 },
  "Mecklenburg-Vorpommern":     { sun: 990,  yield: 950,  savings: 1140, color: 0.55 },
  "Niedersachsen":              { sun: 985,  yield: 945,  savings: 1135, color: 0.53 },
  "Bremen":                     { sun: 965,  yield: 925,  savings: 1110, color: 0.52 },
  "Brandenburg":                { sun: 1040, yield: 995,  savings: 1195, color: 0.68 },
  "Berlin":                     { sun: 1040, yield: 995,  savings: 1195, color: 0.68 },
  "Sachsen-Anhalt":             { sun: 1040, yield: 995,  savings: 1195, color: 0.68 },
  "Nordrhein-Westfalen":        { sun: 1010, yield: 970,  savings: 1165, color: 0.60 },
  "Hessen":                     { sun: 1050, yield: 1000, savings: 1200, color: 0.70 },
  "Thüringen":                  { sun: 1060, yield: 1010, savings: 1210, color: 0.72 },
  "Sachsen":                    { sun: 1070, yield: 1020, savings: 1225, color: 0.75 },
  "Rheinland-Pfalz":            { sun: 1030, yield: 990,  savings: 1190, color: 0.65 },
  "Saarland":                   { sun: 1020, yield: 980,  savings: 1175, color: 0.62 },
  "Baden-Württemberg":          { sun: 1150, yield: 1100, savings: 1320, color: 0.90 },
  "Bayern":                     { sun: 1180, yield: 1150, savings: 1380, color: 0.95 },
};

const getColor = (strength: number) => {
  const g = Math.round(31 + strength * 150);
  return `rgb(10,${g},28)`;
};

export function GermanyMap() {
  const [active, setActive] = useState<string | null>(null);
  const activeData = active ? stateInfo[active] : null;

  return (
    <section className="section-light py-12 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
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
              {active && activeData ? (
                <motion.div
                  key={active}
                  className="rounded-2xl p-6 bg-[#0A1F1C] text-[#F0F4F2]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-xl font-bold text-[#4ADE80] mb-4">{active}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Sonnenstunden", value: `${activeData.sun} h/Jahr`, color: "#FCD34D" },
                      { label: "Ertrag/kWp",    value: `${activeData.yield} kWh`,  color: "#4ADE80" },
                      { label: "Ersparnis/Jahr", value: `~${activeData.savings} €`, color: "#86EFAC" },
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
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 2600, center: [10.4, 51.2] }}
              className="w-full max-w-sm mx-auto"
              style={{ height: "auto" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any) => {
                    const name: string = geo.properties.NAME_1 ?? geo.properties.name ?? "";
                    const data = stateInfo[name];
                    const isActive = active === name;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onClick={() => setActive(n => n === name ? null : name)}
                        style={{
                          default: {
                            fill: isActive ? "#4ADE80" : getColor(data?.color ?? 0.6),
                            stroke: "#F0F4F2",
                            strokeWidth: 0.8,
                            outline: "none",
                            cursor: "pointer",
                          },
                          hover: {
                            fill: isActive ? "#4ADE80" : "#86EFAC",
                            stroke: "#F0F4F2",
                            strokeWidth: 0.8,
                            outline: "none",
                            cursor: "pointer",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>

            {/* Legend */}
            <div className="flex items-center gap-3 mt-2 justify-center">
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
