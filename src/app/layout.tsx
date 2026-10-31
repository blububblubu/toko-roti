import type { Metadata } from "next";
import "./compiled.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Arini Bakery - Enak e gak mari-mari!",
  description:
    "Toko roti lokal legendaris Jember. Menyajikan aneka roti, kue, dan brownies fresh setiap hari dengan cita rasa istimewa. Cocok untuk camilan keluarga hingga pesanan hajatan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF6EF] text-[#231F20]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
