"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 350, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 28 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    const handleHover = (e: Event) => {
      const t = e.target as HTMLElement;
      const card = t.closest("[data-cursor='view']");
      const link = t.closest("a, button");
      if (card) setLabel("View");
      else if (link) setLabel("→");
      else setLabel("");
    };
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[50] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-[#4ADE80] text-[#0A1F1C] font-medium text-xs"
        animate={{
          width: label ? 72 : 12,
          height: label ? 72 : 12,
        }}
        transition={{ duration: 0.25, ease: [0.175, 0.885, 0.32, 1.275] }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
