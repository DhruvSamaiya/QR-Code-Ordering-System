import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent_35%)] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-sm font-medium mb-6">
            🍽️ Smart QR Ordering
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            Delicious Food
            <br />
            <span className="text-yellow-200">Delivered Fast</span>
          </h1>

          <p className="text-lg text-orange-50 max-w-xl mb-8 leading-relaxed">
            Scan the QR code, browse the menu, customize your order, and send it directly to the restaurant through WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu">
              <Button size="lg" variant="secondary">
                Explore Menu
              </Button>
            </Link>

            <Button size="lg" variant="outline">
              Today's Offers
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop"
              alt="Featured Pizza"
              className="relative w-full h-full object-cover rounded-full border-8 border-white/30 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}