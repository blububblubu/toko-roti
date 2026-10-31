"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "About", href: "/#about" },
  { label: "Ingredients", href: "/#ingredients" },
  { label: "Testimonials", href: "/testimoni" },
];

export default function Header() {
  const { getTotalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6EF]/95 backdrop-blur-sm transition-all py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Brand Logo - HAPPIES Style */}
          <Link
            href="/"
            className="flex items-center gap-1 group transition-transform active:scale-95"
          >
            <span className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-[#231F20] uppercase">
              ARINI&apos;S<span className="text-xs align-super ml-0.5">®</span>
            </span>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm font-body font-semibold text-[#231F20]/80 hover:text-[#231F20] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Icon */}
            <a
              href="/#products"
              className="p-2 text-[#231F20] hover:bg-black/5 rounded-full transition-colors hidden sm:block"
              aria-label="Cari menu"
            >
              <Search className="w-4 h-4 stroke-[2.2]" />
            </a>

            {/* User Icon */}
            <a
              href="https://wa.me/6281235742097"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#231F20] hover:bg-black/5 rounded-full transition-colors hidden sm:block"
              aria-label="Akun WhatsApp"
            >
              <User className="w-4 h-4 stroke-[2.2]" />
            </a>

            {/* Cart Icon with badge */}
            <button
              onClick={openCart}
              className="relative p-2 text-[#231F20] hover:bg-black/5 rounded-full transition-transform active:scale-90 cursor-pointer"
              aria-label="Buka keranjang belanja"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              <span className="absolute -top-1 -right-1 bg-[#F9D342] text-[#231F20] text-[10px] font-heading font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white shadow-xs">
                {totalItems}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#231F20] hover:bg-black/5 rounded-xl transition-colors cursor-pointer"
              aria-label="Menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-black/10 flex flex-col gap-2 mt-2 bg-[#FAF6EF]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-[#231F20] hover:bg-[#F9D342]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
