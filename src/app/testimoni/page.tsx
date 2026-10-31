import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { Star, Quote, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan | Arini Bakery",
  description:
    "Cerita kepuasan pelanggan setia Arini Bakery menikmati aneka roti hangat, kue kering, dan pastry lembut berkualitas.",
};

const testimonials = [
  {
    id: 1,
    name: "Sarah Amelia",
    role: "Ibu Rumah Tangga & Pelanggan Setia",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    quote:
      "Roti sobek cokelatnya beneran lumer dan super lembut seperti kapas! Anak-anak di rumah selalu minta stok lagi setiap minggu. Proses pre-order via WA juga ramah banget dan cepat direspons.",
    favoriteMenu: "Roti Sobek Cokelat & Donat Gula",
    date: "2 hari yang lalu",
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "Food Enthusiast",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    quote:
      "Nastar keju Arini Bakery ini juara banget! Renyah di luar, selai nanasnya asam manis pas dari nanas asli, dan gak pelit taburan keju edamnya. Sangat cocok buat hampers lebaran.",
    favoriteMenu: "Kue Kering Nastar Keju",
    date: "1 minggu yang lalu",
  },
  {
    id: 3,
    name: "Dewi Kartika",
    role: "Event Organizer Kantor",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
    quote:
      "Pernah pesan 60 box snack roti untuk gathering kantor, semuanya dipanggang fresh di pagi hari dan sampai tepat waktu dalam keadaan hangat. Semua rekan kerja memuji rasanya enak dan wangi!",
    favoriteMenu: "Bolu Pandan Panggang & Croissant",
    date: "2 minggu yang lalu",
  },
  {
    id: 4,
    name: "Reza Pratama",
    role: "Pecinta Kopi & Pastry",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    quote:
      "Croissant-nya renyah berlapis dengan aroma butter Prancis yang semerbak banget. Pas sekali untuk teman ngopi pagi santai. Harganya sangat terjangkau untuk pastry sekelas cafe bintang lima.",
    favoriteMenu: "Croissant Butter & Roti Gandum",
    date: "3 minggu yang lalu",
  },
];

export default function TestimoniPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F0] text-[#3E2723]">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDE68A] text-[#5D4037] text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wide border border-[#FDE68A]/80 shadow-xs">
              <Sparkles className="w-4 h-4 text-accent-orange fill-accent-orange" />
              <span>ULASAN TULUS DARI PELANGGAN</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-text-main leading-tight">
              Cerita Hangat dari{" "}
              <span className="text-accent-orange underline decoration-wavy decoration-[#FDE68A] underline-offset-8">
                Pecinta Arini Bakery
              </span>
            </h1>

            <p className="text-base sm:text-lg text-text-main/80 font-body leading-relaxed">
              Kepuasan Anda adalah kebahagiaan terbesar kami. Simak apa yang dirasakan para pelanggan setelah mencicipi kelembutan roti dan kue homemade kami.
            </p>

            {/* Overall Rating Banner */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white shadow-sm border border-[#3E2723]/10 mt-2">
              <div className="flex items-center gap-1 text-accent-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-orange" />
                ))}
              </div>
              <div className="text-left border-l border-[#3E2723]/10 pl-3">
                <span className="font-heading font-extrabold text-base text-text-main block leading-tight">
                  4.9 dari 5 Bintang
                </span>
                <span className="text-xs text-text-main/60 font-medium">
                  Berdasarkan 1.500+ ulasan pesanan
                </span>
              </div>
            </div>
          </div>

          {/* 4 Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#3E2723]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Decorative Quote Icon */}
                <Quote className="w-10 h-10 text-[#FDE68A] absolute top-6 right-6 opacity-60 group-hover:scale-110 transition-transform pointer-events-none" />

                <div className="space-y-4">
                  {/* Rating Stars & Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-accent-orange">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent-orange" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      <CheckCircle2 className="w-3 h-3" />
                      Pembeli Terverifikasi
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm sm:text-base text-text-main/85 font-body leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Card Footer: User & Menu Tag */}
                <div className="pt-6 mt-6 border-t border-[#3E2723]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FDE68A] shrink-0"
                      style={{ position: "relative", minHeight: "48px", minWidth: "48px" }}
                    >
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-sm text-text-main">
                        {t.name}
                      </h4>
                      <p className="text-xs text-text-main/60 font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-[10px] uppercase font-bold text-text-main/50 block">
                      Menu Favorit:
                    </span>
                    <span className="text-xs font-heading font-bold text-btn-primary">
                      {t.favoriteMenu}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box at bottom */}
          <div className="mt-16 bg-[#FDE68A]/60 rounded-3xl p-8 md:p-12 border border-[#3E2723]/10 text-center max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-text-main">
              Ingin Menikmati Kelezatan Roti Hangat Hari Ini?
            </h3>
            <p className="text-sm sm:text-base text-text-main/80 font-body max-w-xl mx-auto">
              Semua produk kami dibuat dari bahan pilihan dan dipanggang segar. Pesan sekarang melalui sistem pre-order WhatsApp mudah dan cepat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-btn-primary text-white font-heading font-bold text-sm shadow hover:opacity-90 hover:scale-[1.02] active:scale-98 transition-all"
              >
                <span>Lihat Semua Menu</span>
                <ArrowRight className="w-4 h-4 text-accent-orange" />
              </Link>
              <a
                href="https://wa.me/6281235742097?text=Halo%20Arini%20Bakery,%20saya%20tertarik%20untuk%20pesan%20roti"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[#3E2723]/15 text-text-main font-heading font-bold text-sm hover:bg-white/80 transition-colors shadow-xs"
              >
                <span>Chat Admin WhatsApp</span>
                <span>💬</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
