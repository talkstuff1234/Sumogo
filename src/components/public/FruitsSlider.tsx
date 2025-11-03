import React from 'react'
import Image from "next/image";
import { assets } from "@/assets/assets";

function FruitsSlider() {
  return (
    <div className="pt-20 mx-auto flex gap-5 overflow-x-auto w-[1650px]">
      <div className="relative w-[250px] h-[300px] rounded-2xl overflow-hidden">
        <Image
          src={assets.images.fruitOne}
          alt="image1"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-[250px] h-[300px] rounded-2xl overflow-hidden">
        <Image
          src={assets.images.fruitTwo}
          alt="image2"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-[250px] h-[300px] rounded-2xl overflow-hidden">
        <Image
          src={assets.images.fruitThree}
          alt="image3"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-[250px] h-[300px] rounded-2xl overflow-hidden">
        <Image
          src={assets.images.fruitFour}
          alt="image3"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-[250px] h-[300px] rounded-2xl overflow-hidden">
        <Image
          src={assets.images.fruitFive}
          alt="image3"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-[250px] h-[300px] rounded-2xl overflow-hidden">
        <Image
          src={assets.images.fruitSix}
          alt="image3"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-[250px] h-[300px] rounded-2xl overflow-hidden">
        <Image
          src={assets.images.fruitSeven}
          alt="image3"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default FruitsSlider