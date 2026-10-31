import {
  Flame,
  Wallet,
  Users,
  ShieldCheck,
  Gift,
  Truck,
} from "lucide-react";

const badges = [
  {
    icon: Flame,
    title: "Freshly Baked",
    desc: "Diproduksi baru setiap hari",
  },
  {
    icon: Wallet,
    title: "Harga Merakyat",
    desc: "Ramah di kantong",
  },
  {
    icon: Users,
    title: "Terima Hajatan",
    desc: "Kapasitas besar",
  },
  {
    icon: ShieldCheck,
    title: "Halal & Higienis",
    desc: "Bahan pilihan terjamin",
  },
  {
    icon: Gift,
    title: "Oleh-oleh Khas",
    desc: "Khas Jember",
  },
  {
    icon: Truck,
    title: "Pesan Antar",
    desc: "Siap kirim ke lokasi",
  },
];

export default function TrustBadges() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 items-center justify-items-center">
        {badges.map((b, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-2 group cursor-default w-full p-2"
          >
            {/* Circular Dark Icon Container */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#231F20] text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
              <b.icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8] text-[#F9D02F]" />
            </div>

            {/* Title & Desc */}
            <div className="space-y-0.5">
              <h4 className="text-xs sm:text-sm font-heading font-bold text-[#231F20] leading-tight">
                {b.title}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-[#231F20]/70 font-body leading-tight">
                {b.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
