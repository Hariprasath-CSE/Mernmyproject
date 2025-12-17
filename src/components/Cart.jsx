import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cart, updateQuantity, removeItem, getTotalPrice, placeOrder } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = getTotalPrice();

  return (
    <div className="p-10 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 mb-4 flex items-center justify-between bg-white shadow-md"
              >
                <div className="flex items-center gap-4 flex-1">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-blue-600 font-bold">{item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-200 font-semibold"
                  >
                    −
                  </button>
                  <span className="px-4 font-semibold text-lg">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-200 font-semibold"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}

                  className="ml-4 px-4 py-2 text-red-600 hover:bg-red-100 rounded transition-colors font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-lg p-6 sticky top-10">
              <h3 className="text-2xl font-bold mb-6">Price Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span>₹{totalPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>GST:</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-blue-600">₹{totalPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
              </div>

              <button
                onClick={async () => {
                  try {
                    if (cart.length > 0) {
                      await placeOrder();
                      navigate("/orders");
                    }
                  } catch (err) {
                    alert("Order failed!");
                  }
                }}
                className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
