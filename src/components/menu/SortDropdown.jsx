import { FiChevronDown } from "react-icons/fi";

export default function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div className="relative">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="appearance-none px-5 py-3 pr-10 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
      >
        <option value="popular">Most Popular</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>

      <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
}