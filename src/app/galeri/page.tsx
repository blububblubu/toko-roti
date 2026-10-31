import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CatalogGrid from "@/components/CatalogGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Collection | Arini Bakery",
  description:
    "Katalog dan galeri produk bakery, kue, dan aneka jajan terbaik dari Arini Bakery Jember.",
};

export default function GaleriPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#231F20]">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDE68A] text-[#231F20] text-xs font-heading font-bold tracking-wider uppercase">
              GALERI & KATALOG
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#231F20] tracking-tight">
              Collection
            </h1>
            <p className="text-sm sm:text-base text-gray-600 font-body">
              Our collection currently contains {products.length} photos of our best bakery items.
            </p>
          </div>

          {/* Masonry Catalog Grid */}
          <CatalogGrid />
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
