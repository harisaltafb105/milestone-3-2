import React from 'react';

export const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/mainbur.jpg"
          alt="Delicious burger banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg mb-6 max-w-xl">
          Shop Now For Exclusive Burger Discount
        </p>
        <button className="bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-600 transition-transform duration-300 hover:scale-105">
          Exciting Deals Launch at 12PM
        </button>
      </div>
    </div>
  );
};
