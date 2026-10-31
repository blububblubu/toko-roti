# 📄 Product Requirements Document (PRD)
**Project:** Arini Bakery Landing Page & WA Pre-Order System
**Tech Stack:** Next.js (App Router), Tailwind CSS, Lucide React, React Context API + LocalStorage

## 1. Design System & Visual Identity
- **Vibe:** Playful, warm, appetizing, clean. (Terinspirasi dari desain snack modern).
- **Palette Colors:**
  - `bg-main`: `#FDF8F0` (Krem hangat)
  - `bg-section`: `#FDE68A` (Kuning lembut)
  - `text-main`: `#3E2723` (Cokelat tua)
  - `accent-orange`: `#FB923C` (Oranye untuk badge/tombol)
  - `btn-primary`: `#5D4037` (Cokelat tombol)
- **Typography:** 
  - Headline: `Nunito` (ExtraBold) atau `Fredoka One`.
  - Body: `Poppins# 📄 Product Requirements Document (PRD)
**Project:** Arini Bakery Landing Page & WA Pre-Order System
**Tech Stack:** Next.js (App Router), Tailwind CSS, Lucide React, React Context API + LocalStorage

## 1. Design System & Visual Identity
- **Vibe:** Playful, warm, appetizing, clean. (Terinspirasi dari desain snack modern).
- **Palette Colors:**
  - `bg-main`: `#FDF8F0` (Krem hangat)
  - `bg-section`: `#FDE68A` (Kuning lembut)
  - `text-main`: `#3E2723` (Cokelat tua)
  - `accent-orange`: `#FB923C` (Oranye untuk badge/tombol)
  - `btn-primary`: `#5D4037` (Cokelat tombol)
- **Typography:** 
  - Headline: `Nunito` (ExtraBold) atau `Fredoka One`.
  - Body: `Poppins` atau `Inter`.
- **Logo:** Teks tebal "Arini Bakery" menggunakan font Headline.

## 2. File & Folder Structure
```text
/src
 ├── /app
 │    ├── layout.tsx (Global Provider, Fonts, Metadata)
 │    ├── page.tsx (Landing Page Utama)
 │    ├── /testimoni/page.tsx (Halaman Testimoni)
 │    └── globals.css
 ├── /components
 │    ├── Header.tsx
 │    ├── Hero.tsx
 │    ├── TrustBadges.tsx
 │    ├── ProductGrid.tsx
 │    ├── ProductCard.tsx
 │    ├── CartDrawer.tsx (Modal keranjang)
 │    ├── CheckoutForm.tsx (Form WA)
 │    └── Footer.tsx
 ├── /context
 │    └── CartContext.tsx (State management)
 └── /data
      └── products.ts (Dummy data)` atau `Inter`.
- **Logo:** Teks tebal "Arini Bakery" menggunakan font Headline.

## 2. File & Folder Structure
```text
/src
 ├── /app
 │    ├── layout.tsx (Global Provider, Fonts, Metadata)
 │    ├── page.tsx (Landing Page Utama)
 │    ├── /testimoni/page.tsx (Halaman Testimoni)
 │    └── globals.css
 ├── /components
 │    ├── Header.tsx
 │    ├── Hero.tsx
 │    ├── TrustBadges.tsx
 │    ├── ProductGrid.tsx
 │    ├── ProductCard.tsx
 │    ├── CartDrawer.tsx (Modal keranjang)
 │    ├── CheckoutForm.tsx (Form WA)
 │    └── Footer.tsx
 ├── /context
 │    └── CartContext.tsx (State management)
 └── /data
      └── products.ts (Dummy data)