"use client";

import React from "react";
import Image from "next/image";

const Card: React.FC<{ onOrderNow?: () => void }> = ({ onOrderNow = () => {} }) => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Burgers</h2>
        <p className="text-lg text-gray-300 mb-6">
          Experience the juiciest burgers in town and enjoy!
        </p>

        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-200 ease-in-out"
          onClick={onOrderNow}
        >
          Order Now
        </button>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="/bur1.jpg"
          alt="Delicious burger"
          width={400}
          height={400}
          className="rounded-lg shadow-lg hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Card;
