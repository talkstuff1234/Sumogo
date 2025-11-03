import React from "react";
import Button from "../ui/Button";
import FruitsSlider from "./FruitsSlider";

function Hero() {
  return (
    <section className="w-full bg-sectionBg overflow-x-hidden" id="home">
      <div className="w-full bg-white px-5 pt-16 max-w-[1200px] flex flex-col items-center mx-auto">
        <div className="w-full max-w-[800px]">
          <div className="flex flex-col items-center">
            <Button className="outline py-2">Natures Best, Exported</Button>
            <h1 className="text-textTitle font-semibold text-2xl md:text-3xl lg:text-5xl py-2 text-center">
              From <span className="text-[#036D2B]">Nigerian Farmlands</span> to
              Tables Around the World.
            </h1>
            <p className="text-textContent py-2 text-center">
              Sumogo Ltd is a trusted Nigerian agro-processing and export
              company turning Africas harvest into premium fresh, dried, and
              frozen foods, spices, and nuts from tropical fruits to essential
              ingredients like onions and ginger for global markets
            </p>
            <div className="py-2 flex gap-3">
              <Button varient="green">Explore Our Products</Button>
              <Button>Partner With Us</Button>
            </div>
          </div>
        </div>

        {/* FruitsSlider with full width */}
        <div className="w-screen relative mt-8">
          <FruitsSlider />
        </div>
      </div>
      <div className="bg-darkGreen w-full h-36 md:h-46"></div>
    </section>
  );
}

export default Hero;