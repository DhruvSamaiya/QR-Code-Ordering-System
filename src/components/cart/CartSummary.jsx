import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CartSummary({
  subtotal,
  discount,
  gst,
  total,
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-lg sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Bill Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between text-gray-600 dark:text-gray-300">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between text-green-600 font-medium">
          <span>Discount</span>
          <span>- ₹{discount}</span>
        </div>

        <div className="flex justify-between text-gray-600 dark:text-gray-300">
          <span>GST (5%)</span>
          <span>₹{gst}</span>
        </div>

        <div className="flex justify-between text-gray-600 dark:text-gray-300">
          <span>Delivery</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>

        <div className="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Grand Total
            </span>
            <span className="text-2xl font-extrabold text-orange-500">
              ₹{total}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Link
          to="/checkout"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition shadow-lg hover:shadow-xl"
        >
          Proceed to Checkout
          <FiArrowRight />
        </Link>

        <Link
          to="/menu"
          className="block text-center py-3 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          Add More Items
        </Link>
      </div>
    </div>
  );
}