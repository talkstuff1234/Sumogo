"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { assets } from "@/assets/assets";
import * as motion from "motion/react-client";

function Vision() {
  return (
    <section className="bg-[#F4FBF7] w-full py-6 md:py-10 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 items-center"
      >
        {/* Image on left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 relative w-[320px] md:w-[220px] h-[320px] aspect-square rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src={assets.images.people3.src}
            alt="fruit"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-3 items-center md:items-start"
        >
          <Button>Our Vision</Button>
          <h1 className="text-[#002E12] text-3xl font-semibold text-center md:text-left">
            Leading Africa’s <span className="text-[#036D2B]">Agro-Export</span>{" "}
            Future
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            Our vision is to become Africa’s most trusted agro-export brand,
            driven by integrity, inclusivity, and innovation.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Vision;
