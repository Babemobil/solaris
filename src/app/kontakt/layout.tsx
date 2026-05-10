import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Kostenloses Beratungsgespräch",
  description: "Angebot anfragen, Fragen stellen oder unverbindlich beraten lassen. Wir melden uns innerhalb von 24 Stunden.",
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return children;
}
