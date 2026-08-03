import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCart() {
  const { cart } = useContext(CartContext);

  const count = cart.reduce((a, b) => a + b.quantity, 0);
  const total = cart.reduce((a, b) => a + b.price * b.quantity, 0);

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md"
        >
          <Link
            to="/cart"
            className="flex items-center justify-between bg-gray-900 text-white rounded-3xl px-5 py-4 shadow-2xl border border-gray-800 hover:scale-[1.01] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-orange-500 flex items-center justify-center">
                <FiShoppingCart size={22} />
              </div>

              <div>
                <p className="font-bold">{count} item(s)</p>
                <p className="text-sm text-gray-400">₹{total} total</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold text-orange-400">View Cart</p>
              <p className="text-xs text-gray-400">Proceed to order</p>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}