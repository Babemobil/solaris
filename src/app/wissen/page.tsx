import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wissens-Hub — Solar, Förderung & Energietechnik",
  description: "Expertenwissen rund um Photovoltaik, Batteriespeicher, Förderungen und die Energiewende.",
};

export default function WissenPage() {
  return (
    <>
      <section className="section-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#4ADE80] text-sm font-mono uppercase tracking-[0.2em]">Wissens-Hub</span>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-[#F0F4F2] mt-3 leading-tight">
            Alles über<br /><span className="text-gradient-leaf">Erneuerbare</span>
          </h1>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/wissen/${article.slug}`}
                className="group block rounded-2xl overflow-hidden border border-[#E8EDEB] hover:border-[#4ADE80]/30 transition-all hover:shadow-[0_8px_32px_rgba(10,31,28,0.08)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#4ADE80]/10 text-[#1B3A36]">{article.category}</span>
                  <h3 className="text-[#0A1F1C] font-bold text-lg mt-3 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-[#0A1F1C]/50 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#E8EDEB]">
                    <div className="flex items-center gap-3 text-[#0A1F1C]/40 text-xs">
                      <span>{formatDate(article.date)}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime} Min.</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#0A1F1C]/30 group-hover:text-[#4ADE80] transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
