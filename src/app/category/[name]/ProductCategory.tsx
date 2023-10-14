"use client";

import NoData from "@/components/NoData";
import { Product } from "@prisma/client";
import { twMerge } from "tailwind-merge";
import ProductCard from "../../../components/product/ProductCard";

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
      <h3 className="font-semibold text-4xl dancing-script">{name}</h3>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
}
