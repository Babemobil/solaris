"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [20, 45, 70, 90, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setVisible(false), 300);
      }
    }, 220);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A1F1C]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] } }}
        >
          {/* Sun symbol */}
          <motion.div
            className="relative w-20 h-20 mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
              {/* Rays */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <motion.line
                  key={deg}
                  x1="40" y1="40"
                  x2={40 + 30 * Math.cos((deg * Math.PI) / 180)}
                  y2={40 + 30 * Math.sin((deg * Math.PI) / 180)}
                  stroke="#4ADE80"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                />
              ))}
              {/* Core */}
              <circle cx="40" cy="40" r="12" fill="#4ADE80" opacity="0.9" />
              {/* Battery fill */}
              <motion.circle
                cx="40" cy="40" r="12"
                fill="#FCD34D"
                initial={{ scale: 0 }}
                animate={{ scale: progress / 100 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </svg>
          </motion.div>

          {/* Logo text */}
          <motion.div
            className="text-[#F0F4F2] text-2xl font-bold tracking-[0.3em] uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SOLARIS
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#4ADE80] to-[#FCD34D] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          <motion.span
            className="text-[#4ADE80] text-xs font-mono mt-3 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
