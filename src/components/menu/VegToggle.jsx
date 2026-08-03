export default function VegToggle({ vegOnly, setVegOnly }) {
  return (
    <button
      onClick={() => setVegOnly(!vegOnly)}
      className={`
        flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all shadow-sm
        ${
          vegOnly
            ? "bg-green-500 text-white border-green-500 shadow-lg"
            : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-green-300"
        }
      `}
    >
      <span
        className={`
          w-3 h-3 rounded-full
          ${vegOnly ? "bg-white" : "bg-green-500"}
        `}
      />
      <span className="font-semibold text-sm">Veg Only</span>
    </button>
  );
}