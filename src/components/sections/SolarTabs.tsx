"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";

const tabs = [
  {
    id: "privat",
    label: "Privat",
    accentColor: "#4ADE80",
    features: [
      { title: "Kostenlose Dachanalyse", desc: "Wir prüfen Ihr Dach auf Eignung, Ausrichtung und Verschattung — völlig kostenfrei und unverbindlich." },
      { title: "Maßgeschneiderter Plan", desc: "Jede Anlage wird individuell geplant. Kein Baukastensystem, sondern echte Ingenieursarbeit." },
      { title: "25 Jahre Leistungsgarantie", desc: "Unsere Module garantieren 25 Jahre mindestens 80 % Nennleistung. TÜV-geprüft und zertifiziert." },
      { title: "Plug-and-Play Monitoring", desc: "Ihr eigenes Energie-Dashboard — verfolgen Sie Produktion und Verbrauch in Echtzeit per App." },
      { title: "0 % Mehrwertsteuer", desc: "Seit 2023 gilt 0 % MwSt. auf PV-Anlagen für Privatpersonen. Sie sparen direkt." },
      { title: "Rundum-Service", desc: "Anmeldung beim Netzbetreiber, Marktstammdatenregister, Inbetriebnahme — wir erledigen das alles." },
    ],
    specs: [
      { label: "Anlagengrößen", value: "4 – 20 kWp" },
      { label: "Module", value: "Mono PERC, TOPCon" },
      { label: "Wirkungsgrad Module", value: "bis 23 %" },
      { label: "Garantie Modul", value: "25 Jahre" },
      { label: "Garantie Wechselrichter", value: "10 Jahre" },
      { label: "Montagezeit", value: "1–2 Tage" },
      { label: "Monitoring", value: "App + Web" },
      { label: "Amortisation", value: "8–12 Jahre" },
    ],
    faqs: [
      { q: "Was kostet eine Anlage für mein Haus?", a: "Für ein typisches Einfamilienhaus (10–12 kWp) liegen die Kosten bei ca. 10.000–15.000 € inkl. Montage. Mit Speicher 18.000–24.000 €." },
      { q: "Brauche ich eine Baugenehmigung?", a: "In den meisten Bundesländern nicht. Ausnahme: Denkmalschutz. Wir prüfen das kostenlos für Sie." },
      { q: "Was passiert im Winter?", a: "Auch im Winter produziert die Anlage Strom — ca. 10–20 % des Sommerertrags. Der Jahresertrag berücksichtigt das bereits." },
      { q: "Kann ich die Anlage nachträglich erweitern?", a: "Ja, unser System ist modular. Speicher kann jederzeit nachgerüstet werden." },
      { q: "Welche Förderungen gibt es?", a: "EEG-Einspeisevergütung (20 Jahre garantiert), KfW 270, ggf. Landesförderungen. Wir beraten Sie individuell." },
    ],
  },
  {
    id: "gewerbe",
    label: "Gewerbe",
    accentColor: "#FCD34D",
    features: [
      { title: "Machbarkeitsstudie", desc: "Detaillierte Wirtschaftlichkeitsanalyse inkl. Amortisationsrechnung und Cashflow-Projektion." },
      { title: "Schlüsselfertig", desc: "Planung, Genehmigung, Montage und Inbetriebnahme aus einer Hand. Ein Ansprechpartner." },
      { title: "Peak-Shaving & Lastoptimierung", desc: "Kombination mit Speicher reduziert Leistungsspitzen und senkt Netzentgelte um bis zu 35 %." },
      { title: "EEG & Direktvermarktung", desc: "Wir optimieren zwischen Eigenverbrauch, Einspeisevergütung und Direktvermarktung." },
      { title: "Steueroptimierung", desc: "Lineare Abschreibung, Investitionsabzugsbetrag (IAB) und Sonderabschreibungen nutzen." },
      { title: "O&M Verträge", desc: "Monitoring, Wartung und Versicherung als Full-Service-Paket. Maximale Verfügbarkeit garantiert." },
    ],
    specs: [
      { label: "Anlagengrößen", value: "100 kWp – 10 MWp" },
      { label: "Module", value: "Bifazial, TOPCon HE" },
      { label: "Wechselrichter", value: "Zentral- / Stringwechselrichter" },
      { label: "Speicher", value: "100 kWh – 10 MWh" },
      { label: "Monitoring", value: "24/7 SCADA" },
      { label: "Garantie", value: "25 Jahre Modul / 10 Jahre WR" },
      { label: "ROI", value: "ab 6–10 Jahren" },
      { label: "Amortisation", value: "8–14 Jahre" },
    ],
    faqs: [
      { q: "Ab welcher Größe lohnt sich Gewerbesolar?", a: "Ab ca. 50 kWp und einem Jahresstromverbrauch von 100.000 kWh+ rechnet sich die Investition sehr attraktiv." },
      { q: "Können wir Leasing oder Contracting nutzen?", a: "Ja. Wir bieten Solar-Leasing (keine Upfront-Kosten), Mietstrom und klassischen Eigeninvestment als Modelle an." },
      { q: "Wie wird die Anlage ins Netz eingebunden?", a: "Abstimmung mit Netzbetreiber, Netzverträglichkeitsprüfung und Anschluss erfolgen durch uns." },
      { q: "Was ist bei Denkmalschutz oder besonderen Dachkonstruktionen?", a: "Unsere Statiker und Architekten finden Lösungen auch für besondere Situationen." },
      { q: "Bieten Sie auch Balkonkraftwerke für Mieter an?", a: "Für Unternehmen mit Mitarbeitern bieten wir Balkonkraftwerk-Programme als Benefit an." },
    ],
  },
];

export function SolarTabs() {
  const [activeTab, setActiveTab] = useState("privat");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="section-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Tab buttons */}
        <div className="flex gap-2 mb-12 bg-[#E8EDEB] rounded-2xl p-1.5 w-fit">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => { setActiveTab(t.id); setOpenFaq(null); }}
              className="relative px-8 py-3 rounded-xl text-sm font-semibold transition-colors duration-200"
              style={{ color: activeTab === t.id ? "#0A1F1C" : "#0A1F1C60" }}
            >
              {activeTab === t.id && (
                <motion.span
                  layoutId="tab-bg"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {/* Features */}
            <div className="mb-16">
              <h3 className="text-2xl font-black text-[#0A1F1C] mb-8">Leistungen</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tab.features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: tab.accentColor }}
                    />
                    <div>
                      <h4 className="font-semibold text-[#0A1F1C] mb-1">{f.title}</h4>
                      <p className="text-[#0A1F1C]/55 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="mb-16">
              <h3 className="text-2xl font-black text-[#0A1F1C] mb-8">Technische Daten</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tab.specs.map((s) => (
                  <div key={s.label} className="rounded-xl border border-[#E8EDEB] p-5">
                    <p className="text-[#0A1F1C]/40 text-xs mb-1">{s.label}</p>
                    <p className="font-mono font-bold text-[#0A1F1C]">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-2xl font-black text-[#0A1F1C] mb-8">Häufige Fragen</h3>
              <div className="space-y-3 max-w-3xl">
                {tab.faqs.map((faq, i) => (
                  <div key={i} className="rounded-xl border border-[#E8EDEB] overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F0F4F2] transition-colors"
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-semibold text-[#0A1F1C] pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-200`}
                        style={{ color: tab.accentColor, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-[#0A1F1C]/60 text-sm leading-relaxed">{faq.a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
