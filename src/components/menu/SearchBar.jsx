import { FiSearch } from "react-icons/fi";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative flex-1">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search pizza, burger, pasta..."
        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
      />
    </div>
  );
}