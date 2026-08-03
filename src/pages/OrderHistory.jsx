import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import EmptyState from "../components/common/EmptyState";
import SectionHeader from "../components/common/SectionHeader";

export default function OrderHistory() {
  const orders = [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <SectionHeader
          title="Order History"
          subtitle="Track your previous orders"
        />

        {orders.length === 0 ? (
          <EmptyState
            title="No orders yet"
            description="Once you place an order, it will appear here."
            buttonText="Start Ordering"
            buttonLink="/menu"
          />
        ) : (
          <div className="space-y-4">
            {/* Future order cards */}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}