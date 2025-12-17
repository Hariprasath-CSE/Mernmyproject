import React from 'react'
import ProductCard from './ProductCard'

const Hero = () => {
  // top 3 products for hero section; kept simple and local
  const topProducts = [
    {
      id: 1,
      name: 'Smart Watch',
      price: '₹1,299',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0'
    },
    {
      id: 2,
      name: 'LED TV',
      price: '₹24,999',
      image: 'https://tiimg.tistatic.com/fp/1/007/616/table-and-wall-mounted-21-inches-size-black-4k-ultra-hd-smart-tv-458.jpg'
    },
    {
      id: 3,
      name: 'Cricket Bat',
      price: '₹899',
      image: 'https://i.pinimg.com/1200x/af/ed/4d/afed4dd8204e2afdc87af9591a71c693.jpg'
    }
  ]

  // return (
  //   <section className="max-w-6xl mx-auto my-8 px-6">
  //     <h2 className="text-3xl font-semibold mb-4">Top Picks</h2>
  //     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
  //       {topProducts.map(p => (
  //         <div key={p.id} className="rounded-lg overflow-hidden shadow-lg">
  //           <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
  //           <div className="p-4 bg-white">
  //             <h3 className="font-semibold">{p.name}</h3>
  //             <div className="text-orange-600 font-bold">{p.price}</div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // )
}

export default Hero
