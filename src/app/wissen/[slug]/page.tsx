import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <>
      <section className="section-dark pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/wissen" className="inline-flex items-center gap-2 text-[#F0F4F2]/50 hover:text-[#4ADE80] text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Wissens-Hub
          </Link>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#4ADE80]/10 text-[#4ADE80]">{article.category}</span>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-[#F0F4F2] mt-4 leading-tight">{article.title}</h1>
          <div className="flex items-center gap-4 mt-4 text-[#F0F4F2]/40 text-sm">
            <span>{formatDate(article.date)}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{article.readTime} Minuten Lesezeit</span>
          </div>
        </div>
      </section>

      <section className="section-light py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative h-64 rounded-2xl overflow-hidden mb-10">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>
          <p className="text-[#0A1F1C]/70 text-xl leading-relaxed mb-8">{article.excerpt}</p>
          <div className="prose prose-lg max-w-none text-[#0A1F1C]/80">
            {article.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-black text-[#0A1F1C] mt-8 mb-4">{line.slice(3)}</h2>;
              if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-bold text-[#0A1F1C] mt-6 mb-3">{line.slice(4)}</h3>;
              if (line.startsWith("- ")) return <li key={i} className="ml-4 mb-2 list-disc">{line.slice(2)}</li>;
              if (line.startsWith("| ")) return <p key={i} className="font-mono text-sm bg-[#F0F4F2] p-2 rounded">{line}</p>;
              if (line.trim() === "") return <br key={i} />;
              return <p key={i} className="mb-4 leading-relaxed">{line}</p>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
