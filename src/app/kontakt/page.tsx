"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

const schema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  telefon: z.string().optional(),
  anliegen: z.string().min(1, "Bitte wählen Sie ein Anliegen"),
  nachricht: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
  dsgvo: z.boolean().refine((v) => v, "Bitte akzeptieren Sie die Datenschutzerklärung"),
});

type FormData = z.infer<typeof schema>;

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 800)); // Mock delay
    setSubmitted(true);
  };

  return (
    <>
      <section className="section-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">Kontakt</span>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-[#F0F4F2] mt-3 leading-tight">
            Sprechen wir.<br /><span className="text-gradient-leaf">Kostenlos.</span>
          </h1>
          <p className="text-[#F0F4F2]/60 text-xl mt-4 max-w-xl">
            Angebot anfragen, Fragen stellen oder einfach unverbindlich beraten lassen.
          </p>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center py-20 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="w-16 h-16 text-[#4ADE80] mb-4" />
                  <h2 className="text-2xl font-black text-[#0A1F1C] mb-2">Nachricht gesendet!</h2>
                  <p className="text-[#0A1F1C]/60">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Name *" error={errors.name?.message}>
                      <input {...register("name")} placeholder="Max Mustermann" className={inputCls(!!errors.name)} />
                    </Field>
                    <Field label="E-Mail *" error={errors.email?.message}>
                      <input {...register("email")} type="email" placeholder="max@beispiel.de" className={inputCls(!!errors.email)} />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Telefon (optional)">
                      <input {...register("telefon")} type="tel" placeholder="+49 123 456789" className={inputCls(false)} />
                    </Field>
                    <Field label="Anliegen *" error={errors.anliegen?.message}>
                      <select {...register("anliegen")} className={inputCls(!!errors.anliegen)}>
                        <option value="">Bitte wählen...</option>
                        <option>Angebot anfragen</option>
                        <option>Technische Frage</option>
                        <option>Wartung & Service</option>
                        <option>Sonstiges</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Nachricht *" error={errors.nachricht?.message}>
                    <textarea {...register("nachricht")} rows={5} placeholder="Beschreiben Sie Ihr Anliegen..." className={`${inputCls(!!errors.nachricht)} resize-none`} />
                  </Field>
                  <Field label="" error={errors.dsgvo?.message}>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" {...register("dsgvo")} className="mt-1 w-4 h-4 accent-[#4ADE80]" />
                      <span className="text-sm text-[#0A1F1C]/60">
                        Ich akzeptiere die{" "}
                        <a href="/datenschutz" className="text-[#4ADE80] underline underline-offset-2">Datenschutzerklärung</a>
                      </span>
                    </label>
                  </Field>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#4ADE80] text-[#0A1F1C] rounded-2xl font-bold text-lg hover:bg-[#86EFAC] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-[#0A1F1C] p-6 space-y-4">
              {[
                { icon: MapPin, label: "Adresse", value: "Musterstraße 123\n12345 Musterstadt" },
                { icon: Phone, label: "Telefon", value: "+49 123 44555" },
                { icon: Mail, label: "E-Mail", value: "info@solaris-demo.example" },
                { icon: Clock, label: "Erreichbar", value: "Mo–Fr 8–18 Uhr\nSa 9–14 Uhr" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#4ADE80]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#4ADE80]" />
                  </div>
                  <div>
                    <p className="text-[#F0F4F2]/40 text-xs">{label}</p>
                    <p className="text-[#F0F4F2] text-sm whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/4912344555"
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
              <div>
                <p className="text-[#0A1F1C] font-semibold text-sm">WhatsApp Chat</p>
                <p className="text-[#0A1F1C]/50 text-xs">Direkte Antwort Mo–Fr</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-xl border ${hasError ? "border-red-400 bg-red-50" : "border-[#E8EDEB] bg-white"} text-[#0A1F1C] placeholder:text-[#0A1F1C]/30 focus:outline-none focus:border-[#4ADE80] text-sm transition-colors`;

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      {label && <label className="block text-[#0A1F1C]/70 text-sm font-medium mb-1.5">{label}</label>}
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
