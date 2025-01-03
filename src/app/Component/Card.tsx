import React from 'react';
import Image from 'next/image';

export const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      {/* Text Content */}
      <div className="md:w-1/2 md:pr-10 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Burgers</h2>
        <p className="text-lg text-gray-300 mb-6">
          Experience the juiciest burgers in town and enjoy!
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-200 ease-in-out">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">
          Coming Soon: Our New Burger Launches
        </h3>
        <ul className="text-gray-300 space-y-4">
          <li>
            <strong className="text-white">Cheesy BBQ Bacon Burger:</strong> A
            delightful combination of cheese and smoky BBQ flavors.
          </li>
          <li>
            <strong className="text-white">Spicy Jalapeno Burger:</strong> For
            those who crave the heat!
          </li>
          <li>
            <strong className="text-white">Mushroom Swiss Burger:</strong> A
            classic blend of mushrooms and creamy Swiss cheese.
          </li>
          <li>
            <strong className="text-white">Buffalo Chicken Burger:</strong> A
            spicy twist on a beloved favorite.
          </li>
        </ul>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="/bur1.jpg"
          alt="Delicious burger"
          width={400}
          height={400}
          className="rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </section>
  );
};
