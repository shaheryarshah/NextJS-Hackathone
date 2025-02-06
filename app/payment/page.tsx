'use client'
import React from "react";
import { useState } from "react";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 25.0, quantity: 1 },
    { id: 2, name: "Product 2", price: 45.0, quantity: 2 },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 flex justify-between font-semibold">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>

        <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
