"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Check, ZoomIn } from "lucide-react";
import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductModal from "./ProductModal";

export default function CatalogGrid() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {products.map((product) => {
          const isAdded = addedId === product.id;
          return (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="break-inside-avoid mb-6 bg-white p-4 rounded-2xl border border-black/5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
            >
              {/* Product Image with Zoom Hint */}
              <div className="overflow-hidden rounded-xl bg-black/5 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={800}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-300"
                  style={{ width: "100%", height: "auto" }}
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#231F20] text-[10px] font-heading font-bold shadow-xs">
                    {product.badge}
                  </span>
                )}

                {/* Hover zoom overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="w-9 h-9 rounded-full bg-white/90 text-[#231F20] flex items-center justify-center shadow">
                    <ZoomIn className="w-4 h-4 stroke-[2.2]" />
                  </div>
                </div>
              </div>

              {/* Info and Action */}
              <div className="text-left pt-4">
                <span className="text-xs text-gray-500 uppercase tracking-wider block font-semibold">
                  {product.category}
                </span>
                <h3 className="font-heading font-bold text-text-main text-lg mt-0.5 group-hover:text-amber-800 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 font-body leading-relaxed">
                  {product.description}
                </p>
                <p className="font-heading font-bold text-accent-orange text-base mt-2">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  className={`mt-4 w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-heading font-bold transition-all active:scale-95 cursor-pointer shadow-xs ${
                    isAdded
                      ? "bg-emerald-600 text-white"
                      : "bg-[#231F20] hover:bg-[#3E2723] text-white"
                  }`}
                  aria-label={`Tambah ${product.name} ke keranjang`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 stroke-[2.5]" />
                      <span>Ditambahkan</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                      <span>+ Tambah</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Lightbox Popup */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
