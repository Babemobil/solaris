import { notFound } from "next/navigation";
import Link from "next/link";
import { jobs } from "@/lib/data/jobs";
import { ArrowLeft, MapPin, Clock, CheckCircle } from "lucide-react";
import { ApplicationForm } from "./ApplicationForm";
import type { Metadata } from "next";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return { title: job.title, description: job.description };
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <>
      <section className="section-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/karriere" className="inline-flex items-center gap-2 text-[#F0F4F2]/50 hover:text-[#4ADE80] text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Alle Stellen
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#4ADE80]/10 text-[#4ADE80] text-xs font-medium">{job.department}</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-[#F0F4F2]/60 text-xs font-medium">{job.type}</span>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-[#F0F4F2] leading-tight">{job.title}</h1>
          <div className="flex items-center gap-4 mt-4">
            <span className="flex items-center gap-2 text-[#F0F4F2]/50"><MapPin className="w-4 h-4" />{job.location}</span>
            <span className="flex items-center gap-2 text-[#F0F4F2]/50"><Clock className="w-4 h-4" />{job.type}</span>
          </div>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#0A1F1C] mb-4">Über die Stelle</h2>
              <p className="text-[#0A1F1C]/70 leading-relaxed">{job.description}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1F1C] mb-4">Aufgaben</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[#0A1F1C]/70">
                    <CheckCircle className="w-5 h-5 text-[#4ADE80] flex-shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A1F1C] mb-4">Anforderungen</h2>
              <ul className="space-y-2">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[#0A1F1C]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] mt-2 flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
