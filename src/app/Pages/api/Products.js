// export default function handler(req,res){
//     const products = [
// {
//     id:1,
//     name: "Cheese Burger",
//     price:10,
//     image: "/bur1.jpg"
// },
// {
//     id:2,
//     name: "French Burger",
//     price:50,
//     image: "/bur1.jpg"
// },
// {
//     id:3,
//     name: "3 Burger",
//     price:100,
//     image: "/bur1.jpg"
// },
// {
//     id:4,
//     name: "xl Burger",
//     price:200,
//     image: "/bur1.jpg"
// },
// {
//     id:5,
//     name: "Crunch Burger",
//     price:100,
//     image: "/bur1.jpg"
// },
// {
//     id:6,
//     name: "Cheesy Burger",
//     price:100,
//     image: "/bur1.jpg"
// },

//     ];


// res.status(200).json(products);


// }
import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');  // Make sure this is correct
      const data = await res.json();
      setProducts(data);
    };
    
    fetchProducts();
  }, []);

  return (
    <section className='py-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-extrabold mb-8 text-gray-800'>Our Burgers</h2>
        
        {/* Grid for Product Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <div key={product.id} className='bg-white shadow-lg rounded-lg overflow-hidden'>
              
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-48 object-cover object-center'
              />
              
              {/* Product Info */}
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-800'>{product.name}</h3>
                <p className='text-lg font-medium text-gray-500'>${product.price}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
