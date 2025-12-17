import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { CartContext } from "./CartContext";

export default function Items() {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://mernmyprojectbackend.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Helper to construct image URL
  const getImageUrl = (image) => {
    if (!image) return "https://via.placeholder.com/150";
    if (image.startsWith("http")) {
      return image.replace("http://localhost:3000", "https://mernmyprojectbackend.onrender.com");
    }
    return `https://mernmyprojectbackend.onrender.com${image.startsWith("/") ? "" : "/"}${image}`;
  };

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((item) => (
        <ProductCard
          key={item._id}
          name={item.name}
          price={typeof item.sell_price === 'number' ? `₹${item.sell_price}` : item.sell_price}
          originalPrice={item.original_price ? (typeof item.original_price === 'number' ? `₹${item.original_price}` : item.original_price) : null}
          image={getImageUrl(item.image)}
          onAddToCart={() => addToCart(item)}
        />
      ))}
    </div>
  );
}

