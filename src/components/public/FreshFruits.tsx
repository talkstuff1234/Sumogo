"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets"; // adjust according to your file structure

function FreshFruits() {

  return (
    <section className="w-full bg-white py-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#036D2B]">
          Fresh Fruits
        </h2>
        <p className="text-[#4C4C4C] mt-3 max-w-[650px] mx-auto">
          From lush tropical farms to global markets, our fresh fruit exports
          capture the authentic sweetness of Africa.
        </p>

        <div className="mt-12">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 flex  p-3">
              <div className="relative w-full h-[200px] rounded-md flex-1">
                <Image
                  src={assets.images.food5}
                  alt="Pineapple"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="p-5 text-left flex-1">
                <h3 className="text-[#141414] font-semibold text-lg">
                  Pineapple
                </h3>
                <p className="text-[#7E7E7E] text-sm mt-1">
                  Golden, juicy, and sun-ripened for exceptional flavor.
                </p>
              </div>
            </div>
            <div className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 flex p-3">
              <div className="relative w-full h-[200px] rounded-md flex-1">
                <Image
                  src={assets.images.food6}
                  alt="Pineapple"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="p-5 text-left flex-1">
                <h3 className="text-[#141414] font-semibold text-lg">Mango</h3>
                <p className="text-[#7E7E7E] text-sm mt-1">
                  Premium Nigerian varieties known for rich aroma and taste.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            <div className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 p-3">
              <div className="relative w-full h-[200px] rounded-md flex-1">
                <Image
                  src={assets.images.food4}
                  alt="Pineapple"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="pt-3 text-left flex-1">
                <h3 className="text-[#141414] font-semibold text-lg">
                  Papaya (Pawpaw)
                </h3>
                <p className="text-[#7E7E7E] text-sm mt-1">
                  Naturally sweet and packed with nutrients.
                </p>
              </div>
            </div>
            <div className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 p-3">
              <div className="relative w-full h-[200px] rounded-md flex-1">
                <Image
                  src={assets.images.food7}
                  alt="Pineapple"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="pt-3 text-left flex-1">
                <h3 className="text-[#141414] font-semibold text-lg">
                  Coconut
                </h3>
                <p className="text-[#7E7E7E] text-sm mt-1">
                  Fresh, tender coconuts for water, milk, or meat processing.
                </p>
              </div>
            </div>
            <div className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 p-3">
              <div className="relative w-full h-[200px] rounded-md flex-1">
                <Image
                  src={assets.images.food8}
                  alt="Strawberry"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="pt-3 text-left flex-1">
                <h3 className="text-[#141414] font-semibold text-lg">
                  Strawberry
                </h3>
                <p className="text-[#7E7E7E] text-sm mt-1">
                  Vibrant and handpicked at peak ripeness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreshFruits;
