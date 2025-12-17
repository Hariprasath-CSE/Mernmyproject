import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { CartContext } from "./CartContext";

const ProductList = () => {
    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
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
                            image={product.image}
                            onAddToCart={() => addToCart(product)}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ProductList;
