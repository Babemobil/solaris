"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Cloud, CloudRain } from "lucide-react";

type WeatherState = "sunny" | "cloudy" | "rainy";

const weatherIcons: Record<WeatherState, { icon: typeof Sun; label: string; kwh: string; color: string }> = {
  sunny: { icon: Sun, label: "Sonnig", kwh: "6.2 kWh/m²", color: "#FCD34D" },
  cloudy: { icon: Cloud, label: "Bewölkt", kwh: "2.8 kWh/m²", color: "#86EFAC" },
  rainy: { icon: CloudRain, label: "Regen", kwh: "0.9 kWh/m²", color: "#4ADE80" },
};

export function WeatherWidget() {
  const [city] = useState("München");
  const [weather] = useState<WeatherState>("sunny");

  const { icon: WeatherIcon, label, kwh, color } = weatherIcons[weather];

  return (
    <motion.div
      className="glass-dark rounded-2xl p-5 flex items-center gap-4 max-w-sm mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <WeatherIcon className="w-10 h-10" style={{ color }} />
      </motion.div>
      <div>
        <p className="text-[#F0F4F2]/50 text-xs">
          In <span className="text-[#4ADE80]">{city}</span> ist es {label.toLowerCase()} —
        </p>
        <p className="text-[#F0F4F2] font-mono font-bold text-sm">
          <span style={{ color }}>{kwh}</span> heute möglich
        </p>
      </div>
    </motion.div>
  );
}
