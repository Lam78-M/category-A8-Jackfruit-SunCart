import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';

import products from "@/data/products.json"
import Link from 'next/link';

const PopularCard = () => {
    return (
        <div>
                   <div className="text-center mb-8">
  <h2 className="text-4xl font-bold text-amber-700 tracking-wide relative inline-block">
    Our Popular Products
    <span className="block h-1 w-24 bg-amber-500 mx-auto mt-2 rounded-full"></span>
  </h2>
</div>
                <div className="w-full sm:w-[60%] md:w-[60%] lg:w-[40%] mx-auto mt-3">
              <hr className="border-t border-amber-700 opacity-15" />
            </div>
               <div className="mt-15 p-10"        
  style={{
    background: "linear-gradient(180deg, #FEF3C7 0%, #FDE68A 40%, #6EE7B7 100%)",
    borderRadius: "16px"
  }}>
              <Marquee pauseOnHover={true} speed={100} >
             <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-6">
                    {products.products.slice(0, 5).map(product => (
                      <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                        
                  
                        <div className="relative w-full h-48 sm:h-52 md:h-60 lg:h-60 bg-amber-50">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-t-2xl"
                          />
                        </div>
            
                 
                        <div className="p-4 flex flex-col gap-2 flex-1">
               
                          <h2 className=" text-2xl font-semibold text-gray-800">{product.name}</h2>
         
                          <p className="text-sm text-amber-500 flex items-center gap-2 pt-3"><FaRegStar className='text-lg' /> {product.rating} / 5</p>
            
          
                          <div className="mt-auto flex items-center justify-between pt-3 border-t border-amber-100">
                            <span className="text-lg font-bold text-amber-700">৳{product.price}</span>
                            
                          </div>
                          

                      
                         <Link href={`/products/${product.id}`}>
            <button className="btn mt-7 bg-amber-400 text-white rounded-b-xl 
                          hover:bg-amber-600">
              View Details
            </button>
          </Link>
                         
            
                        </div>
                      </div>
                    ))}
                  </div>
            
                        </Marquee>     
                      </div>
        </div>
    );
};

export default PopularCard;