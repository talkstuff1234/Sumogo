"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";

interface TransformData {
  scale: number;
  tilt: number;
  depth: number;
}

const FruitsSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [transforms, setTransforms] = useState<TransformData[]>([]);
  const [scrollX, setScrollX] = useState(0);
  const speed = 2; // Faster animation

  const images = [
    assets.images.fruitOne,
    assets.images.fruitTwo,
    assets.images.fruitThree,
    assets.images.fruitFour,
    assets.images.fruitFive,
    assets.images.fruitSix,
    assets.images.fruitSeven,
  ];

  // Duplicate for seamless loop
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    let animationFrame: number;

    const updateTransforms = () => {
      if (!containerRef.current || !trackRef.current) {
        animationFrame = requestAnimationFrame(updateTransforms);
        return;
      }

      const container = containerRef.current;
      const track = trackRef.current;
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      // Move the track
      let newScrollX = scrollX - speed;

      // Loop the track seamlessly
      const totalWidth = track.scrollWidth / 2;
      if (-newScrollX >= totalWidth) newScrollX = 0;
      setScrollX(newScrollX);

      // Update each item's transform
      const itemElements = container.querySelectorAll(".item");
      const updatedTransforms: TransformData[] = [];

      itemElements.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const distance = itemCenterX - centerX;
        const maxDistance = containerRect.width / 2;
        const normalized = distance / maxDistance;
        const absNorm = Math.abs(normalized);

        // Scale: smallest at center, biggest at edges
        const minScale = 0.6;
        const maxScale = 1.5;
        const scale = minScale + absNorm * (maxScale - minScale);

        // Tilt: toward center
        const maxTilt = 55;
        const tilt = -normalized * maxTilt;

        // Depth
        const maxDepth = -120;
        const depth = absNorm * maxDepth;

        updatedTransforms.push({ scale, tilt, depth });
      });

      setTransforms(updatedTransforms);
      animationFrame = requestAnimationFrame(updateTransforms);
    };

    animationFrame = requestAnimationFrame(updateTransforms);
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollX, speed]);

  return (
    <div
      ref={containerRef}
      className="py-14 mx-auto flex gap-5 overflow-x-auto w-[1650px]"
      style={{
        overflow: "hidden", // Changed from overflow-x-auto to hidden for the 3D effect
        perspective: "1600px",
        perspectiveOrigin: "center center",
        position: "relative",
      }}
    >
      <motion.div
        ref={trackRef}
        className="flex gap-5"
        style={{
          x: scrollX,
        }}
      >
        {duplicatedImages.map((imgSrc, index) => (
          <motion.div
            key={index}
            className="item relative rounded-2xl overflow-hidden"
            style={{
              width: "200px",
              height: "250px",
              flexShrink: 0, // Prevent items from shrinking
              transformStyle: "preserve-3d",
            }}
            animate={{
              transform: transforms[index]
                ? `translateZ(${transforms[index].depth}px) rotateY(${transforms[index].tilt}deg) scale(${transforms[index].scale})`
                : "translateZ(0px) rotateY(0deg) scale(1)",
            }}
            transition={{ duration: 0.15 }}
          >
            <Image
              src={imgSrc}
              alt={`fruit-${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FruitsSlider;
