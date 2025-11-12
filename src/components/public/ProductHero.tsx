"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { assets } from "@/assets/assets";

function ProductHero() {
  return (
    <section className="w-full bg-[#F4FBF7] overflow-x-hidden">
      <div className="w-full px-6 py-16 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:justify-center md:items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <Button className="outline py-1.5 px-3 h-6 flex items-center justify-center text-sm font-medium text-[#036D2B] border border-[#036D2B]/30">
            Our Products
          </Button>
          <h1 className="text-[#002E12] text-3xl md:text-4xl font-semibold mt-4 leading-snug">
            Leading Africa’s <span className="text-[#036D2B]">Agro-Export</span>{" "}
            Future
          </h1>
          <p className="text-[#4C4C4C] mt-3 max-w-[480px]">
            Our vision is to become Africa’s most trusted agro-export brand,
            driven by integrity, inclusivity, and innovation.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex-1 flex flex-col gap-4">
          {/* TOP IMAGE */}
          <div className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={assets.images.food1.src}
              alt="Mangoes"
              fill
              className="object-cover"
            />
          </div>

          {/* BOTTOM IMAGES */}
          <div className="flex gap-4">
            <div className="relative flex-1 h-[200px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={assets.images.food2.src}
                alt="Strawberries and oranges"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative flex-1 h-[200px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={assets.images.food3.src}
                alt="Pineapples"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductHero;
