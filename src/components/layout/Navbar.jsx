import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  const { cart } = useContext(CartContext);

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Orders", path: "/history" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            Q
          </div>

          <div>
            <p className="font-bold text-lg text-gray-900 dark:text-white">
              QRDine
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Smart Restaurant Ordering
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium transition-all
                  ${
                    active
                      ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            to="/cart"
            className="relative w-11 h-11 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <FiShoppingCart size={22} />

            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}