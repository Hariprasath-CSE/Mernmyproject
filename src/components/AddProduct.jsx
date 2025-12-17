import React, { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    sellPrice: "",
    originalPrice: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Product Added:", form);
    alert("Product Added Successfully!");
  }

  return (
    <div className="w-full flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="w-[550px] border-2 border-orange-400 rounded-2xl p-8 shadow-sm"
      >
        <h2 className="text-center text-2xl font-semibold mb-6">Add products</h2>

        {/* Name */}
        <label className="text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-md p-2 mb-4"
          placeholder="Enter Product Name"
        />

        
        {/* Selling Price */}
        <label className="text-gray-700">Selling Price</label>
        <input
          type="number"
          name="sellPrice"
          value={form.sellPrice}
          onChange={handleChange}
          className="w-full border rounded-md p-2 mb-4"
          placeholder="Selling Price"
        />

        {/* Original Price */}
        <label className="text-gray-700">Original Price</label>
        <input
          type="number"
          name="originalPrice"
          value={form.originalPrice}
          onChange={handleChange}
          className="w-full border rounded-md p-2 mb-4"
          placeholder="Original Price"
        />


        {/* Add Button */}
        <button
          type="submit"
          className="w-full border border-gray-600 rounded-md py-2 hover:bg-gray-200">
          Add Panra !!!!!
        </button>
      </form>
    </div>
  );
}
