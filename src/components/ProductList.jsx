import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { CartContext } from "./CartContext";
import { getImageUrl } from "../utils";

const ProductList = () => {
    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Changed to local server to avoid 401 and use current running backend
        fetch("https://mernmyprojectbackend.onrender.com/products")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setProducts(data);
                } else {
                    console.error("Data received is not an array:", data);
                }
            })
            .catch((err) => console.error("Error loading products:", err));
    }, []);

    return (
        <>
            <div className="w-[800px] mx-auto mt-10 grid grid-cols-3 gap-4">
                <h1 className="text-3xl col-span-3 mb-4">Product List</h1>
                {products.map((product) => {
                    return (
                        <ProductCard
                            key={product._id}
                            name={product.name}
                            price={typeof product.sell_price === 'number' ? `₹${product.sell_price}` : product.sell_price}
                            image={getImageUrl(product.image || product.image_url)}
                            onAddToCart={() => addToCart(product)}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ProductList;
