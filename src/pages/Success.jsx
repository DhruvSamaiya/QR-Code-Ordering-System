import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import Button from "../components/common/Button";

export default function Success() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-10 text-center border border-gray-100 dark:border-gray-800 shadow-2xl max-w-md w-full">
        <div className="w-24 h-24 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
          <FiCheckCircle className="text-green-500" size={48} />
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
          Order Placed!
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
          Your order has been sent successfully to the restaurant. You will receive updates shortly.
        </p>

        <div className="space-y-3">
          <Link to="/menu" className="block">
            <Button fullWidth size="lg">
              Order Again
            </Button>
          </Link>

          <Link to="/history" className="block">
            <Button fullWidth variant="outline">
              View Order History
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}