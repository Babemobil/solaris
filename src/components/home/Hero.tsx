"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Shield, Award, Zap } from "lucide-react";
import dynamic from "next/dynamic";

const SolarHero3D = dynamic(
  () => import("@/components/three/SolarHero3D").then((m) => m.SolarHero3D),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

const headline = "Energie\naus der\nZukunft";
const words = headline.split(/\n/);

const trustBadges = [
  { icon: Shield, label: "TÜV Zertifiziert" },
  { icon: Award, label: "ISO 9001" },
  { icon: Zap, label: "Made in Germany" },
];

export function Hero() {
  const mouse = useRef<[number, number]>([0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showScroll, setShowScroll] = useState(true);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 80]);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouse.current = [x, -y];
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setShowScroll(v < 50));
    return unsub;
  }, [scrollY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden section-dark"
    >
      {/* WebGL-style animated gradient bg */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 60% 40%, rgba(27,58,54,0.8) 0%, rgba(10,31,28,1) 60%)",
          }}
        />
        {/* Animated light beams */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full opacity-10"
          style={{ background: "linear-gradient(to bottom, transparent, #4ADE80, transparent)" }}
          animate={{ x: [-40, 40, -40], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full opacity-10"
          style={{ background: "linear-gradient(to bottom, transparent, #FCD34D, transparent)" }}
          animate={{ x: [30, -30, 30], opacity: [0.03, 0.12, 0.03] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Aurora glow blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(74,222,128,0.08) 0%, rgba(252,211,77,0.04) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left — content */}
          <motion.div style={{ opacity, y }}>
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-8 h-[1px] bg-[#4ADE80]" />
              <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">
                Erneuerbare Energie 2025
              </span>
            </motion.div>

            {/* Headline — split word reveal */}
            <div className="aurora-glow mb-6">
              {words.map((word, wi) => (
                <div key={wi} className="overflow-hidden">
                  <motion.h1
                    className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.9] tracking-tight text-[#F0F4F2]"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4 + wi * 0.12,
                      ease: [0.77, 0, 0.175, 1],
                    }}
                  >
                    {wi === 1 ? (
                      <span className="text-gradient-leaf">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.p
              className="text-[#F0F4F2]/60 text-lg leading-relaxed max-w-md mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Photovoltaik, Batteriespeicher und Windkraft — präzise geplant, professionell umgesetzt. Für Privat und Gewerbe.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
            >
              <Link
                href="/kontakt"
                className="magnetic-btn group px-8 py-4 bg-[#4ADE80] text-[#0A1F1C] rounded-full font-bold text-base hover:bg-[#86EFAC] transition-all duration-300 shadow-[0_0_30px_rgba(74,222,128,0.3)]"
              >
                Angebot anfragen
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="#wie-es-funktioniert"
                className="magnetic-btn px-8 py-4 border border-white/20 text-[#F0F4F2] rounded-full font-semibold text-base hover:border-[#4ADE80]/50 hover:bg-white/5 transition-all duration-300"
              >
                Wie es funktioniert
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5"
                >
                  <Icon className="w-4 h-4 text-[#4ADE80]" />
                  <span className="text-[#F0F4F2]/70 text-xs font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — 3D */}
          <motion.div
            className="relative h-[400px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            {isMobile ? (
              /* Mobile: static visual instead of 3D */
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-[#4ADE80]/20 flex items-center justify-center relative">
                  <div className="w-48 h-48 rounded-full border border-[#4ADE80]/30 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#1B3A36] flex items-center justify-center">
                      <Zap className="w-12 h-12 text-[#0A1F1C]" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <SolarHero3D mouse={mouse} />
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-[#F0F4F2]/40 text-xs font-mono uppercase tracking-widest">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4 text-[#4ADE80]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
