import React from 'react';
import products from "@/data/products.json"
import Image from 'next/image';
const Products = () => {
    return (
         <div className="bg-amber-50 min-h-screen py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-amber-800">☀️ Summer Collection</h1>
        <p className="text-amber-600 mt-2">Beat the heat with our best picks</p>
      </div>

    
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.products.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
            
         
            <div className="relative w-full h-48 bg-amber-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

   
            <div className="p-4 flex flex-col gap-2 flex-1">


              <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-1 rounded-full w-fit">
                {product.category}
              </span>

  
              <h2 className="text-base font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-400">{product.brand}</p>


              <p className="text-sm text-gray-500 leading-relaxed">{product.description}</p>

  
              <p className="text-sm text-amber-500">⭐ {product.rating} / 5</p>

   
              <div className="mt-auto flex items-center justify-between pt-3 border-t border-amber-50">
                <span className="text-lg font-bold text-amber-700">৳{product.price}</span>
                <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm px-4 py-2 rounded-xl transition-colors">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Products;