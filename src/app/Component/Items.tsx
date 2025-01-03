
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Items = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-gray-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {/* Classic Bites */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <Link
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/bur1.jpg"
                  alt="Classic Bites"
                  layout="fill"
                  className="absolute inset-0 h-full w-full group-hover:scale-105 object-cover transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                  Classic Bites
                </h3>
              </Link>
            </div>

            {/* Gourmet Grills */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <Link
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/bur1.jpg"
                  alt="Gourmet Grills"
                  layout="fill"
                  className="absolute inset-0 h-full w-full group-hover:scale-105 object-cover transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                  Gourmet Grills
                </h3>
              </Link>

              {/* Sub Grids */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <Link
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="/bur1.jpg"
                    alt="Sub Gourmet Grills"
                    layout="fill"
                    className="absolute inset-0 h-full w-full group-hover:scale-105 object-cover transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                    Gourmet Grills
                  </h3>
                </Link>

                <Link
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="/bur1.jpg"
                    alt="Veggies"
                    layout="fill"
                    className="absolute inset-0 h-full w-full group-hover:scale-105 object-cover transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                    Veggies
                  </h3>
                </Link>
              </div>
            </div>

            {/* Cheesie Delights */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <Link
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="/bur1.jpg"
                  alt="Cheesie Delights"
                  layout="fill"
                  className="absolute inset-0 h-full w-full group-hover:scale-105 object-cover transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                  Cheesie Delights
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
