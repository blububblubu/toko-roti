import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  ShoppingBag,
  Heart,
  Sparkles,
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#231F20] text-[#FAF6EF] pt-16 pb-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="Arini Bakery">
              <Image
                src="/logo-arini.jpg"
                alt="Logo Arini Bakery"
                width={52}
                height={52}
                className="h-12 w-12 object-contain rounded-xl bg-white p-1 shadow-xs"
              />
            </Link>
            <p className="text-sm font-heading font-bold text-[#F9D02F]">
              Enak e gak mari-mari!
            </p>
            <p className="text-xs sm:text-sm text-[#FAF6EF]/75 font-body leading-relaxed max-w-xs">
              Toko roti lokal legendaris Jember. Roti, kue, dan brownies lezat dipanggang segar setiap hari untuk keluarga Anda.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-[#F9D02F]">
              <Sparkles className="w-3.5 h-3.5 fill-[#F9D02F]" />
              <span>100% Halal & Tanpa Pengawet</span>
            </div>
          </div>

          {/* Lokasi Toko & Google Maps */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white tracking-wider uppercase">
              Lokasi Outlet
            </h4>
            <div className="space-y-2.5 text-xs text-[#FAF6EF]/80 font-body">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F9D02F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Outlet Utama Tanggul:</p>
                  <p>Jl. Urip Sumoharjo, Tanggul, Jember (Timur Polsek Tanggul)</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F9D02F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Cabang Bangsalsari:</p>
                  <p>Cabang Bangsalsari, Jember</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed kecil */}
            <div className="w-full h-28 rounded-xl overflow-hidden border border-white/10 mt-3 shadow-xs">
              <iframe
                title="Peta Lokasi Arini Bakery Tanggul Jember"
                src="https://maps.google.com/maps?q=Jl.+Urip+Sumoharjo+Tanggul+Jember&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Jam Buka & Pemesanan */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white tracking-wider uppercase">
              Jam Buka
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#FAF6EF]/75 font-body">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F9D02F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Setiap Hari</p>
                  <p className="text-xs text-[#FAF6EF]/70">08.00 - 22.00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#F9D02F] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Layanan Pesanan / WA</p>
                  <a
                    href="https://wa.me/6281336664010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F9D02F] transition-colors font-semibold"
                  >
                    +62 813-3666-4010
                  </a>
                </div>
              </div>

              <p className="text-xs text-[#FAF6EF]/60 leading-relaxed">
                Melayani pesanan online dan offline setiap hari.
              </p>
            </div>
          </div>

          {/* Media Sosial */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white tracking-wider uppercase">
              Sosial Media
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#FAF6EF]/75 font-body">
              <a
                href="https://instagram.com/bakeryarini"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#F9D02F] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#F9D02F] shrink-0" />
                <span>Instagram: @bakeryarini</span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#F9D02F] transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-[#F9D02F] shrink-0" />
                <span>Facebook: Arini Bakery</span>
              </a>

              <a
                href="https://shopee.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#F9D02F] transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-[#F9D02F] shrink-0" />
                <span>Shopee: Arini Bakery</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#FAF6EF]/50 font-body">
          <p>© {new Date().getFullYear()} Arini Bakery. Hak Cipta Dilindungi.</p>
          <p className="flex items-center justify-center gap-1">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" /> untuk pecinta roti & kue.
          </p>
        </div>
      </div>
    </footer>
  );
}
