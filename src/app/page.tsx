import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ProductGrid from "@/components/ProductGrid";
import IngredientsSection from "@/components/IngredientsSection";
import PromoBanner from "@/components/PromoBanner";
import HajatanSection from "@/components/HajatanSection";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EF] text-[#231F20]">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <ProductGrid />
        <IngredientsSection />
        <PromoBanner />
        <HajatanSection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
