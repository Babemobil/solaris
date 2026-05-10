"use client";

import { useRef, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";

const Broken3D = dynamic(() => import("@/components/three/Broken3D").then((m) => m.Broken3D), {
  ssr: false,
  loading: () => <div className="w-full h-64 flex items-center justify-center text-[#4ADE80] text-6xl">☀️</div>,
});

export default function NotFound() {
  return (
    <div className="min-h-screen section-dark flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        className="w-full max-w-md h-72 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Broken3D />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-[#4ADE80] font-mono text-sm uppercase tracking-widest mb-4">Error 404</p>
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-[#F0F4F2] mb-4 leading-tight">
          Diese Seite ist<br />
          <span className="text-gradient-leaf">offline gegangen</span>
        </h1>
        <p className="text-[#F0F4F2]/50 text-lg mb-10 max-w-sm mx-auto">
          Das Solarpanel dieser Seite hat leider einen Kurzschluss erlitten. Kehren Sie zurück zur Startseite.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#4ADE80] text-[#0A1F1C] rounded-full font-bold text-base hover:bg-[#86EFAC] transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>
      </motion.div>
    </div>
  );
}
