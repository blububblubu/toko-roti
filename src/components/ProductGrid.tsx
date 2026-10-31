"use client";

import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Big Yellow Card Container - Happies Style */}
      <div className="bg-[#FDE68A] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12">
        {/* Header inside yellow container */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#231F20]/75 uppercase">
              OUR FAVORITES
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#231F20] tracking-tight mt-1">
              BAKES YOU&apos;LL LOVE
            </h2>
          </div>

          <Link
            href="/galeri"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-semibold text-[#231F20] hover:translate-x-1 transition-all"
          >
            <span>View All →</span>
          </Link>
        </div>

        {/* 4 Cards Responsive Grid with distinct pastel backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
