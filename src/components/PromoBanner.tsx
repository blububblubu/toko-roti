import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8">
      {/* Giant Split Rounded Card - Happies Style */}
      <div className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden grid lg:grid-cols-12 shadow-sm border border-black/5">
        {/* Left Side: Bakery Lifestyle Photo */}
        <div
          className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-[#FDE68A]"
          style={{ position: "relative" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
            alt="Aneka Roti Arini Bakery"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        {/* Right Side: Pastel Mint Green Promo Area */}
        <div className="lg:col-span-7 bg-[#DDF0E2] p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4 max-w-md z-10">
            {/* Tag */}
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#231F20] text-[10px] font-heading font-bold uppercase tracking-wider shadow-xs">
              NEW FLAVOR
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#231F20] leading-[1.02] tracking-tight">
              WARM, FLUFFY,<br />
              IRRESISTIBLE
            </h2>

            {/* Subtext */}
            <p className="text-xs sm:text-sm text-[#231F20]/80 font-body leading-relaxed">
              Varian Roti Sobek Cokelat & Donat Gula Salju kami siap menemani hari santai Anda.
              Dipanggang dengan 100% mentega asli untuk kelembutan tak tertandingi.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-[#231F20] text-white font-heading font-semibold text-xs sm:text-sm hover:bg-[#3E2723] transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                <span>Shop now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Floating Bakery Accent with rays */}
          <div className="absolute -bottom-6 -right-6 w-32 sm:w-44 h-32 sm:h-44 rounded-full overflow-hidden border-4 border-[#DDF0E2] shadow-xl hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=300&auto=format&fit=crop"
              alt="Donat Manis"
              fill
              className="object-cover"
              sizes="176px"
            />
          </div>

          {/* Hand-drawn rays decoration */}
          <div className="absolute top-10 right-16 text-lg text-[#231F20]/40 font-bold hidden lg:block">
            \\\ ///
          </div>
        </div>
      </div>
    </section>
  );
}
