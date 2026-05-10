import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Häufige Fragen zu Solar & Energiespeicher",
  description: "Antworten auf die häufigsten Fragen rund um Photovoltaik, Batteriespeicher, Förderungen und Installation.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
