"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function ProductGrid() {
  const featuredProducts = products.slice(0, 4);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      {/* Big Yellow Card Container - Reduced mobile padding */}
      <div className="bg-[#FDE68A] rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-10 lg:p-12 shadow-xs">
        {/* Header inside yellow container: clean vertical stack on mobile, horizontal on md */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-8">
          <div>
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#231F20]/75 uppercase">
              PRODUK UNGGULAN
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#231F20] tracking-tight mt-0.5 sm:mt-1">
              Menu Favorit Arini
            </h2>
            <p className="text-xs sm:text-sm text-[#231F20]/80 font-body mt-0.5 sm:mt-1">
              Klik foto produk untuk melihat gambar lebih besar.
            </p>
          </div>

          {/* Prominent View All Button: Full width on mobile, auto on md */}
          <Link
            href="/galeri"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#231F20] hover:bg-[#3E2723] text-white text-xs sm:text-sm font-heading font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Lihat Semua Menu</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Responsive Grid:
            - Mobile (< 768px): 1 column (horizontal cards look sleek & compact)
            - Tablet (>= 768px): 2 columns
            - Desktop (>= 1024px): 4 columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onCardClick={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Extra Bottom Banner for Layman Users */}
        <div className="mt-5 sm:mt-6 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 bg-white/70 backdrop-blur-xs p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl">
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-bold text-xs sm:text-sm md:text-base text-[#231F20]">
              Masih banyak pilihan roti & kue lezat lainnya!
            </h3>
            <p className="text-[11px] sm:text-xs text-[#231F20]/75 font-body mt-0.5">
              Lihat seluruh koleksi lengkap produk Arini Bakery di katalog galeri kami.
            </p>
          </div>

          <Link
            href="/galeri"
            className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#F9D02F] hover:bg-[#e0b925] text-[#231F20] font-heading font-bold text-xs sm:text-sm shadow hover:scale-105 active:scale-95 transition-all"
          >
            <span>Buka Katalog Lengkap</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* Product Image Lightbox Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
