"use client";
import React from "react";
import { useCart } from "@/Components/context/CartContext";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";

const CartDrawer = () => {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, clearCart } =
    useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 w-[350px] h-10/12  bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 ">
        <h2 className="text-[24px] font-semibold">Shopping Cart</h2>
        <button onClick={toggleCart} className="text-gray-600 text-xl">
          &times;
        </button>
      </div>
      <hr className="text-[#D9D9D9] w-1/2 ml-10 my-5" />
      <div className="p-4 space-y-4 h-[calc(100%-140px)] overflow-y-auto">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <Image
                  src={item.image}
                  alt="image"
                  className="w-[108px] h-[105px] rounded-xl"
                />
                <div className="">
                  <h3 className="text-[16px] tracking-wider mb-2">
                    {item.name}
                  </h3>
                  <div className="flex gap-2 items-center">
                    <p className="text-xs text-gray-600"> {item.quantity} x</p>
                    <p className="text-[12px] text-[#B88E2F] ">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button onClick={() => removeFromCart(item.id)} className=" ">
                  <IoCloseCircleOutline size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <p className="font-bold mb-2">Total: ₦{total.toLocaleString()}</p>
        <button
          onClick={clearCart}
          className="bg-red-500 text-white w-full py-2 rounded text-sm"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
