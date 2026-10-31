import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 pb-6 sm:pb-10">
      {/* Giant Rounded Yellow Container - Happies Style */}
      <div className="relative bg-[#F9D02F] rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden p-5 sm:p-10 lg:p-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Typography & Button */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 z-10">
            {/* Micro Tag */}
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#231F20]/80 uppercase">
              TOKO ROTI LOKAL LEGENDARIS JEMBER
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#231F20] leading-[1.02] tracking-tight">
              Enak e gak mari-mari!
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-sm text-[#231F20]/85 font-body max-w-lg leading-relaxed">
              Toko roti lokal legendaris Jember. Menyajikan aneka roti, kue, dan brownies fresh setiap hari. Cocok untuk camilan keluarga hingga pesanan hajatan.
            </p>

            {/* Pill CTA Button */}
            <div className="pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-[#231F20] text-white font-heading font-semibold text-xs sm:text-sm hover:bg-[#3E2723] transition-all hover:scale-105 active:scale-95 shadow-md group"
              >
                <span>Pesan Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Pack */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[320px] sm:min-h-[400px]">
            {/* Accent Circle Photo in top right */}
            <div
              className="absolute -top-4 sm:-top-8 -right-4 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 rounded-full overflow-hidden border-4 border-[#F9D02F] shadow-lg z-20 hidden sm:block"
              style={{ position: "absolute" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop"
                alt="Fudgy Brownies Arini Bakery"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>

            {/* Main Bakery Hero Feature (Tilted Pack Card) */}
            <div className="relative w-full max-w-xs sm:max-w-sm rotate-[-4deg] hover:rotate-0 transition-transform duration-500 ease-out z-10">
              <div
                className="relative h-72 sm:h-88 w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white"
                style={{ position: "relative", minHeight: "288px" }}
              >
                <Image
                  src="/jajan/bolen.jpg"
                  alt="Bolen Arini Bakery"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 280px, 360px"
                />

                {/* Floating Tag over Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-2xl shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-black/50 uppercase tracking-wider block">
                      Favorit Pelanggan
                    </span>
                    <span className="text-sm font-heading font-bold text-[#231F20]">
                      Bolen
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F9D02F] text-[11px] font-heading font-bold text-[#231F20]">
                    Best Seller
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
