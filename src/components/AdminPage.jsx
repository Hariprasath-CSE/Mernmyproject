import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    originalPrice: '',
    image: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Product added successfully!");
        setFormData({ name: '', price: '', originalPrice: '', image: '' });
      } else {
        setMessage("Failed to add product.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error adding product.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin - Add Product</h1>
      <p className="text-gray-600 mb-4">Only users with role === 'admin' can access this page.</p>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <div className="p-4 border rounded bg-white shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text" name="name" required
              className="mt-1 block w-full p-2 border rounded"
              value={formData.name} onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number" name="price" required
              className="mt-1 block w-full p-2 border rounded"
              value={formData.price} onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Original Price (Optional)</label>
            <input
              type="number" name="originalPrice"
              className="mt-1 block w-full p-2 border rounded"
              value={formData.originalPrice} onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url" name="image" required
              className="mt-1 block w-full p-2 border rounded"
              value={formData.image} onChange={handleChange}
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminPage
