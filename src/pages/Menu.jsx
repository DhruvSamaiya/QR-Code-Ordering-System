import { useMemo, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingCart from "../components/layout/FloatingCart";

import SearchBar from "../components/menu/SearchBar";
import CategoryTabs from "../components/menu/CategoryTabs";
import VegToggle from "../components/menu/VegToggle";
import SortDropdown from "../components/menu/SortDropdown";
import FoodCard from "../components/menu/FoodCard";

import EmptyState from "../components/common/EmptyState";
import SectionHeader from "../components/common/SectionHeader";

import menuData from "../data/menuData";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [vegOnly, setVegOnly] = useState(false);
  const [sortBy, setSortBy] = useState("popular");

  const filteredItems = useMemo(() => {
    let items = [...menuData];

    if (selectedCategory !== "All") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    if (vegOnly) {
      items = items.filter((item) => item.isVeg);
    }

    if (search.trim()) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (sortBy) {
      case "low":
        items.sort((a, b) => a.price - b.price);
        break;
      case "high":
        items.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        items.sort((a, b) => b.rating - a.rating);
        break;
      default:
        items.sort((a, b) => b.rating - a.rating);
    }

    return items;
  }, [search, selectedCategory, vegOnly, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader
          title="Our Menu"
          subtitle="Freshly prepared dishes for every craving"
        />

        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <SearchBar search={search} setSearch={setSearch} />
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <CategoryTabs
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <VegToggle vegOnly={vegOnly} setVegOnly={setVegOnly} />
        </div>

        <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">
          Showing <span className="text-orange-500 font-bold">{filteredItems.length}</span> item(s)
        </p>

        {filteredItems.length === 0 ? (
          <EmptyState
            title="No dishes found"
            description="Try changing your search, category, or filters."
            buttonText="Reset Filters"
            buttonLink="/menu"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      <Footer />
      <FloatingCart />
    </div>
  );
}