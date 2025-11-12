import FreshFruits from "@/components/public/FreshFruits";
import Nuts from "@/components/public/Nuts";
import ProductHero from "@/components/public/ProductHero";
import ProductsShow from "@/components/public/ProductsShow";
import Spices from "@/components/public/Spices";
import React from "react";

export default function Products() {
  return (
    <>
      <ProductHero />
      <FreshFruits />
      <ProductsShow />
      <Spices />
      <Nuts />
    </>
  );
}
