import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://mernmyprojectbackend.onrender.com/orders', {
          headers: { Authorization: token }
        });
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Your Previous Orders</h1>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <div className="space-y-3">
                {order.products.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      {/* Optional: Add product image if available/populated */}
                      {item.product &&
                        <img
                          src={item.product.image.startsWith('http') ? item.product.image.replace("http://localhost:3000", "https://mernmyprojectbackend.onrender.com") : `https://mernmyprojectbackend.onrender.com${item.product.image.startsWith('/') ? '' : '/'}${item.product.image}`}
                          alt={item.product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                      }
                      <div>
                        <p className="font-medium text-gray-800">{item.product ? item.product.name : 'Unknown Product'}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-gray-800 font-semibold">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t flex justify-between items-center bg-gray-50 p-3 rounded-b-lg -m-6 mb-0">
                <span className="text-lg font-bold text-gray-900">Total Amount</span>
                <span className="text-xl font-bold text-blue-600">₹{order.totalAmount}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
