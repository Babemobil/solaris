"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Familie Schneider",
    location: "München",
    anlagengroesse: "12,6 kWp + 10 kWh Speicher",
    text: "Seit der Installation ist unsere Stromrechnung minimal. Die Beratung war exzellent, die Montage in 2 Tagen erledigt. Beste Investition, die wir je getätigt haben.",
    image: "/images/customer-consultation.png",
    stars: 5,
  },
  {
    name: "LogiPro GmbH",
    location: "Dortmund",
    anlagengroesse: "980 kWp Gewerbeanlage",
    text: "Unsere Energiekosten sind um 60 % gesunken. Solaris hat das Projekt termingerecht umgesetzt — professionell von der Planung bis zur Abnahme.",
    image: "/images/project-industrial-solar.png",
    stars: 5,
  },
  {
    name: "Hans-Peter Maier",
    location: "Allgäu",
    anlagengroesse: "2,2 MWp Agri-PV",
    text: "Die Schafe weiden unter den Panels — eine Win-Win-Lösung. Solaris hat das Agri-PV-Konzept kompetent umgesetzt und uns durch alle Förderprogramme begleitet.",
    image: "/images/agri-solar-sheep.png",
    stars: 5,
  },
  {
    name: "Prof. Dr. Stefan Lenz",
    location: "TH Musterstadt",
    anlagengroesse: "450 kWp Campus-Anlage",
    text: "Innovative Lösung, kompetente Umsetzung — der Hochschulcampus spart jetzt 35 % Netzkosten durch Peak-Shaving. Absolut zu empfehlen.",
    image: "/images/team-office.png",
    stars: 5,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [auto]);

  const prev = () => { setAuto(false); setActive((a) => (a - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setAuto(false); setActive((a) => (a + 1) % testimonials.length); };

  return (
    <section className="section-dark py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">
            Kundenstimmen
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#F0F4F2] mt-3">
            Was unsere Kunden<br />
            <span className="text-gradient-leaf">über uns sagen</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="grid lg:grid-cols-5 gap-8 items-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
            >
              {/* Image */}
              <div className="lg:col-span-2">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F1C]/60 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <div className="flex gap-1 mb-6">
                  {Array(testimonials[active].stars).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FCD34D] text-[#FCD34D]" />
                  ))}
                </div>
                <blockquote className="text-[#F0F4F2] text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                  "{testimonials[active].text}"
                </blockquote>
                <div>
                  <p className="text-[#4ADE80] font-bold">{testimonials[active].name}</p>
                  <p className="text-[#F0F4F2]/50 text-sm">{testimonials[active].location}</p>
                  <p className="text-[#FCD34D]/70 text-xs font-mono mt-1">{testimonials[active].anlagengroesse}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F0F4F2]/60 hover:border-[#4ADE80] hover:text-[#4ADE80] transition-all"
              aria-label="Vorheriger"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAuto(false); setActive(i); }}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-[#4ADE80]" : "w-4 bg-white/20"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#F0F4F2]/60 hover:border-[#4ADE80] hover:text-[#4ADE80] transition-all"
              aria-label="Nächster"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
