import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const API_URL = "https://mernmyprojectbackend.onrender.com/cart";

  const getHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      "Content-Type": "application/json",
      "Authorization": token
    };
  };

  const mapCartData = (data) => {
    if (!data || !data.cart || !data.cart.products) return [];
    return data.cart.products.map(item => ({
      id: item.product._id,
      name: item.product.name,
      price: item.product.sell_price,
      image: item.product.image,
      quantity: item.quantity
    }));
  };

  const fetchCart = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: getHeaders()
      });
      if (response.ok) {
        const data = await response.json();
        setCart(mapCartData(data));
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []); // Note: You might want to re-fetch when isLoggedIn changes

  async function addToCart(item) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ productId: item._id, quantity: 1 }),
      });

      if (response.ok) {
        const updatedCart = await response.json();
        setCart(mapCartData(updatedCart));
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }

  async function updateQuantity(id, quantity) {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify({ quantity }),
      });
      if (response.ok) {
        const updatedCart = await response.json();
        setCart(mapCartData(updatedCart));
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  }

  async function removeItem(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getHeaders()
      });
      if (response.ok) {
        const updatedCart = await response.json();
        setCart(mapCartData(updatedCart));
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  }

  async function placeOrder() {
    try {
      const response = await fetch("https://mernmyprojectbackend.onrender.com/orders", {
        method: "POST",
        headers: getHeaders()
      });
      if (response.ok) {
        const data = await response.json();
        setCart([]); // Clear local cart
        return data;
      } else {
        throw new Error("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }
  }

  async function clearCart() {
    // Backend doesn't have clear cart yet, but assuming one by one or new endpoint
    // For now just set local empty
    setCart([]);
  }

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => {
      let price = item.price;
      if (typeof price === 'string') {
        price = parseFloat(price.replace(/[₹,]/g, ''));
      }
      return sum + (price || 0) * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, clearCart, getTotalPrice, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
}

