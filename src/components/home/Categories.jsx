import { GiFullPizza, GiHamburger, GiNoodles, GiSodaCan } from "react-icons/gi";
import SectionHeader from "../common/SectionHeader";

const categories = [
  {
    name: "Pizza",
    icon: GiFullPizza,
    color: "from-red-400 to-red-500",
  },
  {
    name: "Burger",
    icon: GiHamburger,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Pasta",
    icon: GiNoodles,
    color: "from-orange-400 to-orange-500",
  },
  {
    name: "Drinks",
    icon: GiSodaCan,
    color: "from-blue-400 to-blue-500",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Browse Categories"
          subtitle="Choose your favorite meal category"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <button
                key={cat.name}
                className="group bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} text-white flex items-center justify-center text-2xl shadow-lg mb-4`}
                >
                  <Icon />
                </div>

                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {cat.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  12 items available
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}