import React from "react";
import Button from "../ui/Button";
import { assets } from "@/assets/assets";
import Image from "next/image";

function CommunityForm() {
  return (
    <section className="w-full p-5">
      <div
        className="w-full overflow-hidden relative px-5 py-10 md:px-10 md:py-20 max-w-[1200px] mx-auto rounded-2xl"
        style={{
          backgroundImage: `url(${assets.images.field.src})`,
          backgroundSize: "cover",
          backgroundPositionY: '-300px',
        }}
      >
        <div className="absolute inset-0 bg-[#012D12] opacity-70"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-3">
          <div className="flex-1">
            <h1 className="text-white text-3xl font-semibold">
              Stay Fresh with Sumogo
            </h1>
            <p className="text-white">
              Join our community for product launches, healthy tips, and farmer
              stories.
            </p>
          </div>
          <form
            className="p-2 md:p-3 backdrop-blur-md flex-1 flex rounded-full gap-1 bg-white/10"
            action=""
          >
            <div className="bg-white rounded-full w-full flex items-center p-3 gap-3">
              <Image src={assets.icons.mail} width={20} height={20} alt="alt" className="mt-1"/>
              <input 
                type="email"
                name=""
                placeholder="Enter email address"
                className=" w-full placeholder:text-[#A4A4A4] outline-none"
                id=""
              />
            </div>
            <Button varient="green">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CommunityForm;
