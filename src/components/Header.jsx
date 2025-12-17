import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function Header({ onCartClick, showCart }) {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full bg-white shadow-md py-4 flex items-center justify-between px-8 border-b border-gray-300">

      <h1
        className="text-2xl font-semibold text-gray-950 text-bold hover:text-orange-500 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Hp
      </h1>


      <div className="flex gap-10 text-lg font-medium">

        <p
          onClick={() => {
            if (showCart) onCartClick();
            navigate("/products");
          }}
          className="hover:text-orange-500 cursor-pointer"
        >
          Products
        </p>
        <p
          onClick={() => {
            if (showCart) onCartClick();
            navigate("/orders");
          }}
          className="hover:text-orange-500 cursor-pointer"
        >
          Orders
        </p>
        <p
          onClick={onCartClick}
          className={`hover:text-orange-500 cursor-pointer font-semibold transition-colors ${showCart ? 'text-orange-500' : ''}`}
        >
          Cart ({cart.length})
        </p>
        <p
          onClick={() => {
            if (showCart) onCartClick();
            navigate("/add");
          }}
          className="hover:text-orange-500 cursor-pointer"
        >
          Add Product
        </p>
        <p
          onClick={() => {
            if (showCart) onCartClick();
            if (localStorage.getItem('isLoggedIn') === 'true') {
              localStorage.clear();
              navigate("/login");
            } else {
              navigate("/login");
            }
          }}
          className="hover:text-orange-500 cursor-pointer"
        >
          {localStorage.getItem('isLoggedIn') === 'true' ? "Log out" : "Log in"}
        </p>

      </div>
    </div>
  );
}
