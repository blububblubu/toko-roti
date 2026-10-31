"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Plus, Check, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail foto produk ${product.name}`}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-black/10 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#231F20]/75 hover:bg-[#231F20] text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-90"
          aria-label="Tutup popup gambar"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </button>

        {/* Large Product Image Preview */}
        <div className="relative w-full h-56 sm:h-72 md:aspect-square bg-[#FAF6EF] overflow-hidden shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 520px"
            className="object-cover"
            priority
          />

          {/* Badge at top-left */}
          {product.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#231F20] text-xs font-heading font-bold shadow-md">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Product Details & Action */}
        <div className="p-5 sm:p-6 flex flex-col justify-between space-y-4 overflow-y-auto">
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block">
              {product.category}
            </span>
            <div className="flex items-start justify-between gap-3 mt-1">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#231F20] leading-tight">
                {product.name}
              </h2>
              <span className="shrink-0 text-lg sm:text-xl font-heading font-bold text-accent-orange">
                Rp {product.price.toLocaleString("id-ID")}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 font-body leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl text-xs sm:text-sm font-heading font-bold transition-all active:scale-95 cursor-pointer shadow-sm ${
                isAdded
                  ? "bg-emerald-600 text-white"
                  : "bg-[#231F20] hover:bg-[#3E2723] text-white"
              }`}
              aria-label={`Tambah ${product.name} ke keranjang`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>Berhasil Ditambahkan</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>+ Tambah ke Keranjang</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-heading font-semibold transition-all cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

