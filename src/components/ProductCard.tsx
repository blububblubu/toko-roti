"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Plus } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  };

  return (
    <div
      className="rounded-[2rem] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group border border-black/5"
      style={{ backgroundColor: product.color }}
    >
      {/* Top Section with Pastel Background */}
      <div className="p-4 sm:p-5 flex flex-col items-center relative">
        {/* White Pill Badge at Top-Left */}
        {product.badge && (
          <div className="self-start mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#231F20] text-[10px] font-heading font-bold shadow-xs">
              {product.badge}
            </span>
          </div>
        )}

        {/* Product Packshot Visual */}
        <div
          className="relative w-36 h-36 sm:w-40 sm:h-40 my-1 rounded-2xl overflow-hidden shadow-md group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300 bg-white/40"
          style={{ position: "relative", minHeight: "144px" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 160px, 200px"
          />
        </div>
      </div>

      {/* Bottom Section - Crisp White Container (Happies Style) */}
      <div className="bg-white p-4 sm:p-5 rounded-b-[2rem] flex flex-col justify-between gap-3">
        <div>
          {product.category && (
            <span className="text-[10px] font-heading font-bold text-[#231F20]/50 uppercase tracking-wider block mb-0.5">
              {product.category}
            </span>
          )}
          <h3 className="font-heading font-bold text-sm sm:text-base text-[#231F20] leading-tight">
            {product.name}
          </h3>
          {product.description && (
            <p className="mt-1 text-[11px] text-[#231F20]/70 font-body line-clamp-1">
              {product.description}
            </p>
          )}
        </div>

        {/* Price & Add+ Button */}
        <div className="flex items-center justify-between pt-1">
          <span className="font-heading font-bold text-xs sm:text-sm text-[#231F20]">
            Rp {product.price.toLocaleString("id-ID")}
          </span>

          <button
            onClick={handleAddToCart}
            className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[11px] font-heading font-bold transition-all active:scale-95 cursor-pointer shadow-xs ${
              isAdded
                ? "bg-emerald-600 text-white"
                : "bg-[#231F20] hover:bg-[#3E2723] text-white hover:scale-105"
            }`}
            aria-label={`Tambah ${product.name} ke keranjang`}
          >
            {isAdded ? (
              <>
                <Check className="w-3 h-3" />
                <span>added</span>
              </>
            ) : (
              <>
                <span>add</span>
                <Plus className="w-3 h-3 stroke-[2.5]" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
