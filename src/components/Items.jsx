import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { CartContext } from "./CartContext";
import { getImageUrl } from "../utils";
import Pagination from "./Pagination";
import GlobalContext from "../context/GlobalContext";

export default function Items() {
  const { addToCart } = useContext(CartContext);
  const { currentPage } = useContext(GlobalContext);
  const [items, setItems] = useState([]);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch("https://mernmyprojectbackend.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error("Data received is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item) => (
          <ProductCard
            key={item._id}
            name={item.name}
            price={typeof item.sell_price === 'number' ? `₹${item.sell_price}` : item.sell_price}
            originalPrice={item.original_price ? (typeof item.original_price === 'number' ? `₹${item.original_price}` : item.original_price) : null}
            image={getImageUrl(item.image || item.image_url)}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

