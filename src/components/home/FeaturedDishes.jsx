import FoodCard from "../menu/FoodCard";
import SectionHeader from "../common/SectionHeader";
import menuData from "../../data/menuData";
import Button from "../common/Button";
import { Link } from "react-router-dom";

export default function FeaturedDishes() {
  const featured = menuData.slice(0, 3);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Featured Dishes"
          subtitle="Chef's special recommendations for today"
          action={
            <Link to="/menu">
              <Button variant="outline">View All</Button>
            </Link>
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}