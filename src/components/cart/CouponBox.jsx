import { FiTag } from "react-icons/fi";

export default function CouponBox({
  coupon,
  setCoupon,
  applyCoupon,
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
          <FiTag />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Have a coupon?
          </h3>
          <p className="text-sm text-gray-500">
            Apply discount code
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          onClick={applyCoupon}
          className="px-5 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
}