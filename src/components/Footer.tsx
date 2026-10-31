import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Heart,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#231F20] text-[#FAF6EF] pt-16 pb-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <span className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight uppercase block">
              ARINI&apos;S<span className="text-xs align-super ml-0.5 text-[#F9D02F]">®</span>
            </span>
            <p className="text-xs sm:text-sm text-[#FAF6EF]/75 font-body leading-relaxed max-w-xs">
              Real snacks. Real bakes. Dibuat dengan resep istimewa, bahan alami, dan dipanggang segar setiap pagi untuk keluarga Anda.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-[#F9D02F]">
              <Sparkles className="w-3.5 h-3.5 fill-[#F9D02F]" />
              <span>100% Halal & Tanpa Pengawet</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF6EF]/75 font-body">
              <li>
                <Link href="/#about" className="hover:text-[#F9D02F] transition-colors flex items-center gap-1.5">
                  <span>›</span> About
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-[#F9D02F] transition-colors flex items-center gap-1.5">
                  <span>›</span> Our Favorites
                </Link>
              </li>
              <li>
                <Link href="/#ingredients" className="hover:text-[#F9D02F] transition-colors flex items-center gap-1.5">
                  <span>›</span> Real Ingredients
                </Link>
              </li>
              <li>
                <Link href="/testimoni" className="hover:text-[#F9D02F] transition-colors flex items-center gap-1.5">
                  <span>›</span> Customer Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Jam Operasional */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white tracking-wider uppercase">
              Store Hours
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#FAF6EF]/75 font-body">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F9D02F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Senin - Minggu</p>
                  <p className="text-xs text-[#FAF6EF]/70">07:00 - 20:00 WIB</p>
                </div>
              </div>
              <p className="text-xs text-[#FAF6EF]/60 leading-relaxed">
                *Pre-order WhatsApp dapat dipesan kapan saja dan dikonfirmasi langsung oleh admin toko.
              </p>
            </div>
          </div>

          {/* Kontak & Lokasi */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white tracking-wider uppercase">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#FAF6EF]/75 font-body">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F9D02F] shrink-0 mt-0.5" />
                <p>Jl. Melati No. 12, Jawa Timur, Indonesia</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F9D02F] shrink-0" />
                <a
                  href="https://wa.me/6281235742097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F9D02F] transition-colors font-semibold"
                >
                  +62 812-3574-2097
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#F9D02F] shrink-0" />
                <span className="text-[#FAF6EF]/75">@arinibakery.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#FAF6EF]/50 font-body">
          <p>© {new Date().getFullYear()} ARINI&apos;S®. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Baked with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" /> for snack lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
