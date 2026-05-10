import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { CTASection } from "@/components/home/CTASection";
import { ArrowLeft, Quote } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] section-dark flex items-end pb-12 pt-24">
        <div className="absolute inset-0">
          <Image src={project.image} alt={project.title} fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F1C] to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <Link href="/projekte" className="inline-flex items-center gap-2 text-[#F0F4F2]/50 hover:text-[#4ADE80] text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Alle Projekte
          </Link>
          <span className="px-3 py-1 rounded-full bg-[#4ADE80] text-[#0A1F1C] text-xs font-bold uppercase tracking-wide">
            {project.type}
          </span>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-[#F0F4F2] mt-3 leading-tight">
            {project.title}
          </h1>
          <p className="text-[#F0F4F2]/50 text-lg mt-2">{project.region} · {project.year}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-[#0A1F1C]/70 text-lg leading-relaxed mb-8">{project.description}</p>
            {/* Quote */}
            <div className="flex gap-4 p-6 rounded-2xl bg-[#F0F4F2] border border-[#E8EDEB]">
              <Quote className="w-8 h-8 text-[#4ADE80] flex-shrink-0 mt-1" />
              <div>
                <p className="text-[#0A1F1C] text-lg italic leading-relaxed mb-3">"{project.customerQuote}"</p>
                <p className="text-[#0A1F1C]/50 text-sm">— {project.customerName}</p>
              </div>
            </div>
          </div>

          {/* Specs sidebar */}
          <div className="rounded-2xl bg-[#0A1F1C] p-6">
            <h3 className="text-[#4ADE80] font-mono text-xs uppercase tracking-widest mb-4">Projektdaten</h3>
            <div className="space-y-3">
              {project.specs.map((s) => (
                <div key={s.label} className="flex justify-between items-center py-2 border-b border-white/8 last:border-0">
                  <span className="text-[#F0F4F2]/50 text-sm">{s.label}</span>
                  <span className="font-mono font-bold text-[#4ADE80] text-sm">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
