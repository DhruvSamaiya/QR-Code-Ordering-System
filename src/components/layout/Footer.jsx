import { FiInstagram, FiFacebook, FiTwitter, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                Q
              </div>

              <div>
                <h3 className="font-bold text-xl text-white">QRDine</h3>
                <p className="text-sm text-gray-400">Smart Restaurant Ordering</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Experience fast and modern QR-based food ordering with a beautiful mobile-first interface and WhatsApp integration.
            </p>

            <div className="flex gap-3">
              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-all hover:scale-105"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
              <li><Link to="/menu" className="hover:text-orange-400 transition">Menu</Link></li>
              <li><Link to="/cart" className="hover:text-orange-400 transition">Cart</Link></li>
              <li><Link to="/checkout" className="hover:text-orange-400 transition">Checkout</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-3">
              <li className="hover:text-orange-400 transition cursor-pointer">Pizza</li>
              <li className="hover:text-orange-400 transition cursor-pointer">Burger</li>
              <li className="hover:text-orange-400 transition cursor-pointer">Pasta</li>
              <li className="hover:text-orange-400 transition cursor-pointer">Drinks</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-orange-400" />
                <span>JIIT Noida, Sector 62, Uttar Pradesh</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-orange-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-orange-400" />
                <span>hello@qrdine.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 QRDine. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-orange-400 transition">Privacy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms</a>
            <a href="#" className="hover:text-orange-400 transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}