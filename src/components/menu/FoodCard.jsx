import { FiPlus, FiClock, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../common/Button";

export default function FoodCard({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all group"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow">
          <FiStar className="text-yellow-500" />
          {item.rating}
        </div>

        {item.isVeg && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
            VEG
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
              {item.name}
            </h3>

            <p className="text-gray-500 text-sm mt-2 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
          <FiClock />
          {item.prepTime}
        </div>

        <div className="flex items-center justify-between mt-5">
          <div>
            <p className="text-sm text-gray-400">Price</p>
            <p className="text-2xl font-extrabold text-orange-500">
              ₹{item.price}
            </p>
          </div>

          <Button
            onClick={() => addToCart(item)}
            icon={FiPlus}
          >
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
}