"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Plus, ZoomIn } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
  onCardClick?: (product: Product) => void;
};

export default function ProductCard({ product, onCardClick }: ProductCardProps) {
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
      onClick={() => onCardClick?.(product)}
      className="rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-row md:flex-col justify-between shadow-xs hover:shadow-lg md:hover:shadow-xl hover:-translate-y-0.5 md:hover:-translate-y-1.5 transition-all duration-300 group border border-black/5 cursor-pointer bg-white"
    >
      {/* Visual / Image Section:
          - Mobile (< 768px): Fixed width ~115px-125px, full height, object-cover
          - Desktop (>= 768px): Top container with pastel background and rounded packshot
      */}
      <div
        className="w-28 sm:w-32 md:w-full shrink-0 relative flex items-center justify-center md:p-5"
        style={{ backgroundColor: product.color || "#FDE68A" }}
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
            <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-white/95 text-[#231F20] text-[9px] md:text-[10px] font-heading font-bold shadow-xs">
              {product.badge}
            </span>
          </div>
        )}

        {/* Image Container */}
        <div className="relative w-full h-full min-h-[115px] md:min-h-0 md:w-40 md:h-40 md:my-1 md:rounded-2xl overflow-hidden shadow-none md:shadow-md md:group-hover:scale-105 md:group-hover:rotate-2 transition-transform duration-300 bg-white/40">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 130px, 200px"
          />

          {/* Zoom hint overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/90 text-[#231F20] flex items-center justify-center shadow">
              <ZoomIn className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section:
          - Mobile (< 768px): Right side with clean, tight padding
          - Desktop (>= 768px): Bottom crisp white container
      */}
      <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col justify-between bg-white rounded-r-2xl md:rounded-r-none md:rounded-b-[2rem] gap-2 md:gap-3">
        <div>
          {product.category && (
            <span className="text-[9px] md:text-[10px] font-heading font-bold text-[#231F20]/50 uppercase tracking-wider block mb-0.5">
              {product.category}
            </span>
          )}
          <h3 className="font-heading font-bold text-sm md:text-base text-[#231F20] leading-snug group-hover:text-amber-800 transition-colors line-clamp-1 md:line-clamp-none">
            {product.name}
          </h3>
          {product.description && (
            <p className="mt-0.5 md:mt-1 text-[11px] text-[#231F20]/70 font-body line-clamp-2 md:line-clamp-1 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Price & Add Button */}
        <div className="flex items-center justify-between pt-1 mt-auto">
          <span className="font-heading font-bold text-xs md:text-sm text-[#231F20]">
            Rp {product.price.toLocaleString("id-ID")}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            className={`inline-flex items-center gap-1 px-3 md:px-3.5 py-1 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-heading font-bold transition-all active:scale-95 cursor-pointer shadow-xs ${
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
