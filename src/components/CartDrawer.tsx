"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CheckoutForm from "./CheckoutForm";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  const [isCheckoutStep, setIsCheckoutStep] = useState(false);

  if (!isCartOpen) return null;

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const handleClose = () => {
    setIsCheckoutStep(false);
    closeCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDF8F0] shadow-2xl flex flex-col justify-between border-l border-[#3E2723]/10 animate-in slide-in-from-right duration-300">
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-[#3E2723]/10 bg-white/70 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FDE68A] flex items-center justify-center text-btn-primary">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-heading font-extrabold text-lg text-text-main leading-tight">
                  {isCheckoutStep ? "Checkout Pre-Order" : "Keranjang Belanja"}
                </h2>
                <span className="text-xs text-text-main/60 font-body">
                  {totalItems > 0 ? `${totalItems} produk terpilih` : "0 produk"}
                </span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-xl text-text-main hover:bg-[#3E2723]/5 transition-colors cursor-pointer"
              aria-label="Tutup keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {isCheckoutStep ? (
              <CheckoutForm onBack={() => setIsCheckoutStep(false)} />
            ) : cartItems.length === 0 ? (
              /* Empty Cart State */
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-20 h-20 rounded-3xl bg-[#FDE68A]/60 flex items-center justify-center shadow-inner">
                  <ShoppingBag className="w-9 h-9 text-[#231F20]/50" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-text-main">
                    Keranjang Masih Kosong
                  </h3>
                  <p className="mt-1 text-xs text-text-main/70 max-w-xs font-body leading-relaxed">
                    Yuk pilih aneka roti hangat dan kue lezat favorit Anda dari menu Arini Bakery!
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="mt-4 px-6 py-2.5 rounded-2xl bg-btn-primary text-white font-heading font-bold text-xs shadow hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Lihat Menu Sekarang
                </button>
              </div>
            ) : (
              /* Cart Items List */
              <div className="space-y-4 divide-y divide-[#3E2723]/10">
                {cartItems.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                    {/* Item Image */}
                    <div
                      className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white border border-[#3E2723]/10 shrink-0"
                      style={{ position: "relative", minHeight: "72px" }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-bold text-sm text-text-main truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs font-heading font-bold text-btn-primary mt-0.5">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>

                      {/* Quantity Controller */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="inline-flex items-center border border-[#3E2723]/15 rounded-xl bg-white overflow-hidden shadow-xs">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-[#FDE68A]/50 text-text-main transition-colors cursor-pointer"
                            aria-label="Kurangi kuantitas"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-heading font-bold text-text-main">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#FDE68A]/50 text-text-main transition-colors cursor-pointer"
                            aria-label="Tambah kuantitas"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-xs text-text-main/60 ml-auto font-medium">
                          Subtotal:{" "}
                          <strong className="text-text-main">
                            Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                          </strong>
                        </span>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-text-main/40 hover:text-rose-600 transition-colors cursor-pointer"
                      aria-label={`Hapus ${item.name} dari keranjang`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer (Only if items exist and not on checkout step) */}
          {!isCheckoutStep && cartItems.length > 0 && (
            <div className="p-6 border-t border-[#3E2723]/10 bg-white/70 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-text-main/70">
                  <span>Total Produk</span>
                  <span>{totalItems} item</span>
                </div>
                <div className="flex justify-between items-center text-base font-heading font-extrabold text-text-main">
                  <span>Total Pembayaran</span>
                  <span className="text-xl text-btn-primary">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckoutStep(true)}
                className="w-full py-4 px-6 rounded-2xl bg-btn-primary hover:bg-btn-primary/95 text-white font-heading font-bold text-sm shadow-lg shadow-btn-primary/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <span>Lanjut ke Formulir Pemesanan</span>
                <ArrowRight className="w-4 h-4 text-accent-orange" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
