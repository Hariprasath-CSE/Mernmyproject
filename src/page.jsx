// import React from "react";

// export default function Page() {
//  const products = [
//   { id: 1, name: "Wireless Headphone", img: "/wireless.jpg", price: "₹1,999" },
//   { id: 2, name: "LED TV", img: "/led.webp", price: "₹14,999" },
//   { id: 3, name: "Bat", img: "/bat.webp", price: "₹899" },
//   { id: 4, name: "Mac", img: "/mac.jpg", price: "₹499" }
// ];

   
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">

//       {/* HEADER */}
//       <header className="bg-white shadow p-4 text-center">
//         <h1 className="text-2xl font-bold hover:text-orange-500">My E-Commerce Store</h1>
//       </header>

//       {/* ITEMS */}
//       <main className="flex-1 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 hover:scale-105 transition">
//         {products.map((item) => (
//           <div key={item.id} className="bg-white shadow rounded-xl p-4">
            
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-40 object-cover rounded-xl mb-3"
//             />

//             <h2 className="text-lg font-semibold">{item.name}</h2>
//             <p className="text-gray-700 font-bold mb-3">{item.price}</p>

//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </main>

//       {/* FOOTER */}
//       <footer className="bg-white shadow p-4 text-center">
//         <p className="text-gray-600">© 2025 My Store</p>
//       </footer>
//     </div>
//   );
// }
