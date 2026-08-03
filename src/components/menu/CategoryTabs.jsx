const categories = [
  "All",
  "Pizza",
  "Burger",
  "Pasta",
  "Drinks",
];

export default function CategoryTabs({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`
            px-5 py-3 rounded-2xl whitespace-nowrap text-sm font-semibold transition-all border
            ${
              selectedCategory === category
                ? "bg-orange-500 text-white border-orange-500 shadow-lg"
                : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-orange-300 hover:text-orange-500"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}