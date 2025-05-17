"use client";
import React from "react";
import { useCart } from "@/Components/context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Total Summary at the top */}
          <div className="mb-6 p-4 bg-gray-100 rounded">
            <p className="text-lg font-semibold">
              Total Amount:{" "}
              <span className="text-[#B88E2F]">₦{total.toLocaleString()}</span>
            </p>
          </div>

          {/* Cart Items */}
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                    <p>₦{item.price.toLocaleString()} each</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Bottom Summary & Clear Button */}
          <div className="mt-8 border-t pt-4 flex justify-between items-center">
            <p className="text-xl font-bold">
              Total: ₦{total.toLocaleString()}
            </p>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
