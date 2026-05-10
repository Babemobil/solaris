"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("solaris-cookies");
    if (!accepted) setTimeout(() => setVisible(true), 2000);
  }, []);

  const accept = () => {
    localStorage.setItem("solaris-cookies", "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-[45] glass-dark rounded-2xl p-5 shadow-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35 }}
        >
          <p className="text-[#F0F4F2]/80 text-sm mb-4 leading-relaxed">
            Wir verwenden Cookies für die optimale Nutzung dieser Website.{" "}
            <Link href="/datenschutz" className="text-[#4ADE80] underline underline-offset-2">
              Mehr erfahren
            </Link>
          </p>
          <div className="flex gap-3">
            <button
              onClick={accept}
              className="flex-1 py-2 bg-[#4ADE80] text-[#0A1F1C] rounded-xl text-sm font-semibold hover:bg-[#86EFAC] transition-colors"
            >
              Akzeptieren
            </button>
            <button
              onClick={() => setVisible(false)}
              className="px-4 py-2 border border-white/20 text-[#F0F4F2]/60 rounded-xl text-sm hover:border-white/40 transition-colors"
            >
              Ablehnen
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
