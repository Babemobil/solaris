"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingDown, Leaf, Euro } from "lucide-react";

export function SavingsCalculator() {
  const [consumption, setConsumption] = useState(4500); // kWh/year
  const [roofArea, setRoofArea] = useState(50); // m²
  const [withStorage, setWithStorage] = useState(false);

  const results = useMemo(() => {
    const kwp = Math.min((roofArea * 0.2), 20); // ~0.2 kWp/m²
    const annualProduction = kwp * 1050; // kWh/year, avg Germany
    const selfConsumptionRate = withStorage ? 0.75 : 0.35;
    const selfConsumed = Math.min(annualProduction * selfConsumptionRate, consumption);
    const electricityPrice = 0.32;
    const annualSavings = selfConsumed * electricityPrice;
    const feedIn = (annualProduction - selfConsumed) * 0.082; // Einspeisevergütung
    const totalAnnual = annualSavings + feedIn;
    const investCost = kwp * 1400 + (withStorage ? 9000 : 0);
    const amortisation = investCost / totalAnnual;
    const co2Annual = annualProduction * 0.485; // kg CO₂/kWh Germany mix

    return {
      kwp: kwp.toFixed(1),
      annualProduction: Math.round(annualProduction),
      annualSavings: Math.round(annualSavings),
      totalAnnual: Math.round(totalAnnual),
      investCost: Math.round(investCost / 100) * 100,
      amortisation: amortisation.toFixed(1),
      co2Annual: Math.round(co2Annual),
      selfConsumptionRate: Math.round(selfConsumptionRate * 100),
    };
  }, [consumption, roofArea, withStorage]);

  return (
    <section className="section-forest py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">
            Spar-Rechner
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#F0F4F2] mt-3">
            Was spart Ihre<br />
            <span className="text-gradient-leaf">Solaranlage?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Sliders */}
          <div className="space-y-8">
            <SliderInput
              label="Jahresverbrauch"
              value={consumption}
              min={1500}
              max={12000}
              step={100}
              unit="kWh/Jahr"
              onChange={setConsumption}
            />
            <SliderInput
              label="Verfügbare Dachfläche"
              value={roofArea}
              min={10}
              max={200}
              step={5}
              unit="m²"
              onChange={setRoofArea}
            />

            <div className="flex items-center gap-4">
              <button
                onClick={() => setWithStorage(!withStorage)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                  withStorage ? "bg-[#4ADE80]" : "bg-white/20"
                }`}
                role="switch"
                aria-checked={withStorage}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                    withStorage ? "translate-x-6" : ""
                  }`}
                />
              </button>
              <span className="text-[#F0F4F2] font-medium">Batteriespeicher inkl.</span>
            </div>
          </div>

          {/* Results */}
          <motion.div
            className="space-y-4"
            key={`${consumption}-${roofArea}-${withStorage}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <ResultCard
                icon={Euro}
                label="Ersparnis/Jahr"
                value={`${results.totalAnnual.toLocaleString("de-DE")} €`}
                sub="inkl. Einspeisevergütung"
                color="#FCD34D"
              />
              <ResultCard
                icon={TrendingDown}
                label="Amortisation"
                value={`${results.amortisation} Jahre`}
                sub={`bei ${results.kwp} kWp`}
                color="#4ADE80"
              />
            </div>
            <ResultCard
              icon={Leaf}
              label="CO₂-Einsparung pro Jahr"
              value={`${results.co2Annual.toLocaleString("de-DE")} kg`}
              sub={`${results.annualProduction.toLocaleString("de-DE")} kWh erzeugt`}
              color="#86EFAC"
              wide
            />

            <div className="rounded-xl p-4 bg-black/20 border border-white/10">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#F0F4F2]/50">Eigenverbrauchsquote</span>
                <span className="text-[#4ADE80] font-mono">{results.selfConsumptionRate} %</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#4ADE80] to-[#FCD34D] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${results.selfConsumptionRate}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>

            <p className="text-[#F0F4F2]/30 text-xs">
              * Unverbindliche Schätzung. Individuelles Angebot auf Anfrage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <label className="text-[#F0F4F2]/70 text-sm">{label}</label>
        <span className="font-mono font-bold text-[#4ADE80] text-sm">
          {value.toLocaleString("de-DE")} {unit}
        </span>
      </div>
      <div className="relative h-2 bg-white/10 rounded-full">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#4ADE80] to-[#FCD34D] rounded-full pointer-events-none"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#4ADE80] border-2 border-[#0A1F1C] pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
    </div>
  );
}

function ResultCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
  wide,
}: {
  icon: typeof Euro;
  label: string;
  value: string;
  sub: string;
  color: string;
  wide?: boolean;
}) {
  return (
    <div className={`rounded-xl p-5 bg-black/20 border border-white/10 ${wide ? "col-span-2" : ""}`}>
      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}20`, border: `1px solid ${color}40` }}
        >
          <Icon className="w-4 h-4" style={{ color }} />
        </div>
        <div>
          <p className="text-[#F0F4F2]/50 text-xs mb-1">{label}</p>
          <p className="font-mono font-black text-2xl" style={{ color }}>{value}</p>
          <p className="text-[#F0F4F2]/40 text-xs mt-1">{sub}</p>
        </div>
      </div>
    </div>
  );
}
