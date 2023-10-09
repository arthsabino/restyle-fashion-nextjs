'use client';

import { Product } from "@prisma/client";
import Slider from "react-slick";
import { twMerge } from "tailwind-merge";
import ProductCard from "./ProductCard";

interface ProductCategoryProps {
  name: string;
  products: Product[];
  className?: string;
}
export default function ProductCategory({
  name,
  products,
  className,
}: ProductCategoryProps) {
  return (
    <div className={twMerge("py-4 relative w-full", className)}>
      <h3 className="text-center font-semibold text-lg">{name}</h3>
      <div className="py-4 w-full">
        <Slider slidesToShow={2} infinite>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Slider>
      </div>
    </div>
  );
}