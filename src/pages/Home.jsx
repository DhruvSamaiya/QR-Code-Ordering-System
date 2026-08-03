import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingCart from "../components/layout/FloatingCart";

import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedDishes from "../components/home/FeaturedDishes";
import OfferBanner from "../components/home/OfferBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <FeaturedDishes />
        <OfferBanner />
      </main>

      <Footer />
      <FloatingCart />
    </div>
  );
}