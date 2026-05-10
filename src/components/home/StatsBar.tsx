"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { value: 4800, suffix: "+", label: "Anlagen installiert", color: "#4ADE80" },
  { value: 250, suffix: " GWh", label: "Sauberer Strom erzeugt", color: "#FCD34D" },
  { value: 12000, suffix: " t", label: "CO₂ eingespart (Jahr)", color: "#4ADE80" },
  { value: 98, suffix: " %", label: "Kundenzufriedenheit", color: "#FCD34D" },
];

function LiveCO2() {
  const [kg, setKg] = useState(0);

  useEffect(() => {
    const calc = () => {
      const dayStart = new Date();
      dayStart.setHours(0, 0, 0, 0);
      const secs = (Date.now() - dayStart.getTime()) / 1000;
      setKg(Math.floor(secs * 0.00208 * 1000));
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-4 px-6 py-5 md:px-8 md:py-6 md:border-l border-t md:border-t-0 border-white/10 col-span-2 md:col-span-1">
      <div className="flex items-center gap-2">
        <span className="pulse-dot w-2 h-2 rounded-full bg-[#4ADE80] inline-block" />
        <span className="text-[#F0F4F2]/50 text-xs font-mono uppercase tracking-widest">Live</span>
      </div>
      <div>
        <p className="text-xs text-[#F0F4F2]/50 mb-0.5">CO₂ heute gespart</p>
        <p className="font-mono font-bold text-[#4ADE80] text-xl">
          {kg.toLocaleString("de-DE")} kg
        </p>
      </div>
    </div>
  );
}

export function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="section-forest border-y border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:flex md:flex-wrap md:items-center md:divide-x md:divide-white/10">
          {stats.map(({ value, suffix, label, color }) => (
            <div key={label} className="px-6 py-5 md:flex-1 md:px-8 md:py-6 border-b md:border-b-0 border-r md:border-r-0 border-white/10 last:border-r-0">
              <p
                className="font-mono font-black text-3xl lg:text-4xl mb-1"
                style={{ color }}
              >
                {inView ? (
                  <CountUp end={value} duration={2.5} separator="." suffix={suffix} />
                ) : (
                  `0${suffix}`
                )}
              </p>
              <p className="text-[#F0F4F2]/50 text-xs uppercase tracking-widest">{label}</p>
            </div>
          ))}
          <LiveCO2 />
        </div>
      </div>
    </div>
  );
}
