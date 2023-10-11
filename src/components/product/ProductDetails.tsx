"use client";
import { Product } from "@prisma/client";
import { useState } from "react";
import AddToCartButton from "../button/AddToCartButton";
import PriceTag from "./PriceTag";
import ProductReview from "./ProductReviews";

interface ProductDetailsProps {
  product: Product;
}
export default function ProductDetails({ product }: ProductDetailsProps) {
  const [qty, setQty] = useState(1);
  const handleChangeQty = (num: number) => {
    setQty((prev) => {
      if (num < 0 && prev === 0) {
        return 0;
      } else if (num > 0 && prev >= (product.quantity ?? 1)) {
        return prev;
      } else {
        return prev + num;
      }
    });
  };
  return (
    <div className="w-full md:w-1/2">
      <div className="text-center">
        <h2 className="font-bold text-4xl">{product.name}</h2>
        <PriceTag price={product.price} className="font-bold text-2xl" />
        <div className="border-y border-y-black py-2 my-4 flex items-center w-full">
          <div className="w-1/5 flex justify-center">
            <button
              className="btn-neutral btn"
              onClick={() => handleChangeQty(-1)}
            >
              <span className="text-2xl">-</span>
            </button>
          </div>
          <span className="w-3/5 text-center">{qty}</span>
          <div className="w-1/5 flex justify-center">
            <button
              className="btn-neutral btn"
              onClick={() => handleChangeQty(1)}
            >
              <span className="text-2xl">+</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full text-right">
        <span className="italic pr-1">In stock:</span>
        {product.quantity ?? 0}
      </div>
      <div className="my-8 p-4 bg-grey">
        <p>{product.description}</p>
      </div>
      <AddToCartButton />
      <div className="mt-12">
        <span className="italic">Feedback & Reviews</span>
        <div className="border-t-neutral border-t-2 h-2 mt-2">
          <ProductReview />
        </div>
      </div>
    </div>
  );
}
