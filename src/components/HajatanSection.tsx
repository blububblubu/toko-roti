import { MessageCircle, CheckCircle2 } from "lucide-react";

export default function HajatanSection() {
  return (
    <section id="hajatan" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 mb-6">
      {/* Warm Yellow Card Container */}
      <div className="bg-[#FDE68A] rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-10 lg:p-14 relative overflow-hidden border border-black/5 shadow-xs">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Content Column */}
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white text-[#231F20] text-[10px] font-heading font-bold uppercase tracking-wider shadow-xs">
              LAYANAN KHUSUS & KATERING
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#231F20] tracking-tight leading-tight">
              Pesanan Hajatan & Acara Besar
            </h2>

            <p className="text-sm sm:text-base text-[#231F20]/85 font-body max-w-2xl leading-relaxed">
              Butuh Snack Box atau Kue untuk Acara Besar? Arini Bakery siap melayani pesanan hajatan, yasinan, dan rapat dengan harga ekonomis.
            </p>

            {/* Benefit highlights */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm font-semibold text-[#231F20]">
              <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Bebas Pilih Menu</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Kemasan Higienis & Rapi</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Pengiriman Tepat Waktu</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://wa.me/6281336664010?text=Halo%20Arini%20Bakery,%20saya%20ingin%20konsultasi%20pesanan%20hajatan%20dan%20acara%20besar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#231F20] hover:bg-[#3E2723] text-white font-heading font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi via WA</span>
              </a>
            </div>
          </div>

          {/* Quick Info Box Column */}
          <div className="lg:col-span-4 bg-white/90 backdrop-blur-xs rounded-2xl p-6 border border-black/5 space-y-3">
            <h3 className="font-heading font-bold text-base text-[#231F20]">
              Paket Rekomendasi
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#231F20]/80 font-body">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#231F20]">•</span>
                <span>Snack Box Rapat Kantor (Roti + Kue + Air)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#231F20]">•</span>
                <span>Kotak Syukuran & Yasinan Warga</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#231F20]">•</span>
                <span>Hantaran Acara Keluarga & Hajatan</span>
              </li>
            </ul>
            <p className="text-[11px] text-[#231F20]/60 italic pt-1 border-t border-black/5">
              *Tersedia diskon khusus untuk pesanan di atas 50 box.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

