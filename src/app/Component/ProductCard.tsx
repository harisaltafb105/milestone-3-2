// import React from 'react';
// import { Product } from '../Pages/types';
// import Image from 'next/image';

// interface ProductCardProps extends Product{
//   onAddToCart: (product:Product)=>void;

// }

// export const ProductCard: React.FC<ProductCardProps> =({
//   id,
//   name,
//   price,
//   image,
//   onAddToCart,
// })=> {
//  return(
//   <div className='bg-white p-4 rounded-ld shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
// <Image src="{image}"
// alt={name}
// height={56}
// width={100}
// className='w-full object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out'/>
// <h3 className='text-xl font-semibold mb-2'>{name}</h3>
// <p className='text-lg text-slate-600 mb-4'></p>
// <button onClick={()=> onAddToCart({id,name,price,image})}
// className="bg-blue-600 text-white px-4 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">

// Add to Cart

// </button>














// </div>
// ) 
// }


import React from "react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center relative z-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>

      {/* ✅ Fixed Click Issue with cursor-pointer */}
      <button
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition relative z-20"
        onClick={() => {
          console.log("✅ Add to Cart Clicked:", product);
          onAddToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
