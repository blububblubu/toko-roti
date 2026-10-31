import {
  ShieldCheck,
  Heart,
  Smile,
  Sparkles,
  Flame,
  Award,
} from "lucide-react";

const badges = [
  {
    icon: Flame,
    label: "Fresh from oven",
  },
  {
    icon: Heart,
    label: "Tanpa pengawet",
  },
  {
    icon: ShieldCheck,
    label: "100% Halal",
  },
  {
    icon: Sparkles,
    label: "Butter Prancis",
  },
  {
    icon: Award,
    label: "Bahan alami",
  },
  {
    icon: Smile,
    label: "Seriously tasty",
  },
];

export default function TrustBadges() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-4 items-center justify-items-center">
        {badges.map((b, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-2.5 group cursor-default"
          >
            {/* Circular Dark Icon Container - Happies Style */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#231F20] text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              <b.icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
            </div>

            {/* Label */}
            <span className="text-[11px] sm:text-xs font-heading font-semibold text-[#231F20] leading-tight">
              {b.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
