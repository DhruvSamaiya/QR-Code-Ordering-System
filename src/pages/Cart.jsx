import { useContext, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import CouponBox from "../components/cart/CouponBox";
import SpecialNote from "../components/cart/SpecialNote";

import EmptyState from "../components/common/EmptyState";

import { CartContext } from "../context/CartContext";

export default function Cart() {
  const [coupon, setCoupon] = useState("");
  const [note, setNote] = useState("");

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    subtotal,
  } = useContext(CartContext);

  const discount = coupon === "QRDINE50" ? 50 : 0;
  const gst = Math.round((subtotal - discount) * 0.05);
  const total = subtotal - discount + gst;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Your Cart
          </h1>
          <p className="text-gray-500 mt-2">
            Review your order before checkout
          </p>
        </div>

        {cart.length === 0 ? (
          <EmptyState
            title="Your cart is empty"
            description="Add some delicious food to continue"
            buttonText="Explore Menu"
            buttonLink="/menu"
          />
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increaseQty={() => increaseQty(item.id)}
                  decreaseQty={() => decreaseQty(item.id)}
                  removeItem={() => removeItem(item.id)}
                />
              ))}

              <CouponBox
                coupon={coupon}
                setCoupon={setCoupon}
                applyCoupon={() => {}}
              />

              <SpecialNote note={note} setNote={setNote} />
            </div>

            <CartSummary
              subtotal={subtotal}
              discount={discount}
              gst={gst}
              total={total}
            />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}