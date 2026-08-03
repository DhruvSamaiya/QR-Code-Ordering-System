import { FiTrash2 } from "react-icons/fi";

export default function CartItem({
  item,
  increaseQty,
  decreaseQty,
  removeItem,
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm flex gap-4 items-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-2xl"
      />

      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {item.name}
        </h3>

        <p className="text-gray-500 mt-1">{item.category}</p>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={decreaseQty}
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 text-xl font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            −
          </button>

          <span className="w-8 text-center font-semibold text-lg text-gray-900 dark:text-white">
            {item.quantity}
          </span>

          <button
            onClick={increaseQty}
            className="w-10 h-10 rounded-xl bg-orange-500 text-white text-xl font-bold hover:bg-orange-600 transition"
          >
            +
          </button>
        </div>
      </div>

      <div className="text-right flex flex-col items-end gap-3">
        <button
          onClick={removeItem}
          className="text-red-500 hover:text-red-600 transition"
        >
          <FiTrash2 size={20} />
        </button>

        <div>
          <p className="text-sm text-gray-400">Total</p>
          <p className="text-2xl font-extrabold text-orange-500">
            ₹{item.price * item.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}