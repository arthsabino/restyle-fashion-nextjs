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
      <h3 className="text-center font-semibold text-4xl dancing-script">
        {name}
      </h3>
      {products && products.length > 0 ? (
        <div className="mt-2 w-full">
          <Slider slidesToShow={3} infinite arrows={false}>
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="h-40 flex mt-2 items-center justify-center bg-base-200">
          No data...
        </div>
      )}
    </div>
  );
}