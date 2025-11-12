import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

function Spices() {
  return (
    <section className="w-full bg-white pb-10 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="flex items-center">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-[#002E12] text-3xl md:text-4xl font-semibold mt-4 leading-snug">
              Spices & Culinary
              <span className="text-[#036D2B]"> Ingredients</span>
            </h1>
            <p className="text-[#4C4C4C] mt-3 max-w-[480px]">
              Our vision is to become Africa’s most trusted agro-export brand,
              driven by integrity, inclusivity, and innovation.
            </p>
          </div>
          <div className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 p-3">
            <div className="relative w-full h-[250px] rounded-md">
              <Image
                src={assets.images.food12}
                alt="Pineapple"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="pt-3 text-left flex-1">
              <h3 className="text-[#141414] font-semibold text-lg">Onions</h3>
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <div className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 p-3">
            <div className="relative w-full h-[200px] rounded-md flex-1">
              <Image
                src={assets.images.food13}
                alt="Pineapple"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="pt-3 text-left flex-1">
              <h3 className="text-[#141414] font-semibold text-lg">Ginger</h3>
            </div>
          </div>
          <div className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 p-3">
            <div className="relative w-full h-[200px] rounded-md flex-1">
              <Image
                src={assets.images.food14}
                alt="Pineapple"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="pt-3 text-left flex-1">
              <h3 className="text-[#141414] font-semibold text-lg">Tumeric</h3>
            </div>
          </div>
          <div className="bg-[#FFFFFF] flex-1 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border items-center border-gray-100 p-3">
            <div className="relative w-full h-[200px] rounded-md flex-1">
              <Image
                src={assets.images.food15}
                alt="Strawberry"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="pt-3 text-left flex-1">
              <h3 className="text-[#141414] font-semibold text-lg">
                Pepper varieties
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spices;
