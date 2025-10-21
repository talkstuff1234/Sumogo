import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { assets } from "@/assets/assets";

function Hero() {
  return (
    <section className="w-full bg-sectionBg">
      <div className="w-full bg-white px-5 pt-16 max-w-[1200px] flex flex-col items-center mx-auto ">
        <div className="w-full max-w-[800px]">
          <div className="flex flex-col items-center">
            <Button varient="lightGreen" className="outline py-2">
              Pure. Local. Delicious.
            </Button>
            <h1 className="text-textTitle font-semibold text-2xl md:text-3xl lg:text-5xl py-2 text-center">
              Taste the Sunshine Naturally Dried Fruits
            </h1>
            <p className="text-textContent py-2 text-center">
              From the lush farms of Nigeria to your table, Sumogo transforms
              fresh mangoes, pineapples, bananas, coconuts, and pawpaws into
              premium dried fruits that keep nature’s sweetness intact.
            </p>
            <div className="py-2 flex gap-3">
              <Button varient="green">Buy Now</Button>
              <Button>Learn More</Button>
            </div>
          </div>

          <div className="mt-20 mx-auto flex justify-center items-center">
            <Image
              src={assets.images.pack2.src}
              alt="image1"
              width={280}
              height={260}
              className="object-contain translate-y-3 md:translate-y-8 translate-x-8 
             "
            />
            <Image
              src={assets.images.pack3.src}
              alt="image2"
              width={280}
              height={260}
              className="object-contain z-10 
               "
            />
            <Image
              src={assets.images.pack1.src}
              alt="image3"
              width={280}
              height={260}
              className="object-contain translate-y-3 md:translate-y-2 -translate-x-8 
               "
            />
          </div>
        </div>
      </div>
      <div className="bg-darkGreen w-full h-36 md:h-46"></div>
    </section>
  );
}

export default Hero;
