import { Star } from "lucide-react";

const claims = [
  "Photovoltaik",
  "Batteriespeicher",
  "Windkraft",
  "Energiewende",
  "Net Zero",
  "Premium Solar",
  "CO₂-frei",
  "Made in Germany",
  "Erneuerbare Energien",
  "Zukunft jetzt",
];

export function SectionMarquee({ inverted = false }: { inverted?: boolean }) {
  const track = [...claims, ...claims];

  return (
    <div
      className={`py-4 overflow-hidden border-y ${
        inverted
          ? "bg-[#4ADE80] text-[#0A1F1C] border-[#4ADE80]"
          : "bg-[#1B3A36] text-[#F0F4F2]/60 border-white/8"
      }`}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {track.map((claim, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-6 text-sm font-medium uppercase tracking-widest">
            <Star className="w-3 h-3 flex-shrink-0" />
            {claim}
          </span>
        ))}
      </div>
    </div>
  );
}
