import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ingredients = [
  {
    title: "TEPUNG GANDUM UTUH",
    desc: "Kaya serat alami dan protein gandum pilihan untuk tekstur roti selembut kapas.",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=300&auto=format&fit=crop",
  },
  {
    title: "100% FRENCH BUTTER",
    desc: "Mentega impor berkualitas tinggi yang memberi aroma wangi khas meleleh di lidah.",
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=300&auto=format&fit=crop",
  },
  {
    title: "BAHAN ALAMI SEGAR",
    desc: "Daun pandan suji asli, cokelat murni, dan nanas madu segar tanpa pemanis buatan.",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=300&auto=format&fit=crop",
  },
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Headline with Brush Underline - Happies Style */}
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#231F20] leading-[1.05] tracking-tight">
            GOOD INGREDIENTS.<br />
            GREAT TASTE.
          </h2>
          {/* Playful Yellow/Orange Brush Underline */}
          <div className="w-32 h-2.5 bg-[#F9D02F] rounded-full" />
        </div>

        {/* Right 3 Ingredient Columns */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {ingredients.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                {/* Ingredient Visual with Hand-drawn Rays */}
                <div className="relative mb-2">
                  <div
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-sm bg-white border-2 border-[#F9D02F]"
                    style={{ position: "relative", minHeight: "96px" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      sizes="112px"
                    />
                  </div>
                  {/* Rays decoration */}
                  <span className="absolute -top-2 -right-1 text-xs text-[#231F20]/60 font-bold pointer-events-none">
                    \\\
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xs sm:text-sm text-[#231F20] tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#231F20]/75 font-body leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="mt-8 text-center sm:text-right">
            <a
              href="https://wa.me/6281235742097?text=Halo%20Arini%20Bakery,%20saya%20ingin%20tahu%20lebih%20banyak%20tentang%20resep%20dan%20bahan%20roti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#231F20] text-white font-heading font-semibold text-xs hover:bg-[#3E2723] transition-all hover:scale-105 active:scale-95"
            >
              <span>Learn more</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
