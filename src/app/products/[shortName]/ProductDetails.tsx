"use client";
import AddToCartButton from "@/app/products/[shortName]/AddToCartButton";
import Accordion from "@/components/Accordion";
import ChangeQtyBtn from "@/components/cart/ChangeQtyBtn";
import PriceTag from "@/components/product/PriceTag";
import { computeQty } from "@/lib/productUtil";
import { Product } from "@prisma/client";
import { useState } from "react";

interface ProductDetailsProps {
  product: Product;
  incrementProductQuantity: (
    productId: string,
    qty: number
  ) => Promise<void>;
}
export default function ProductDetails({
  product,
  incrementProductQuantity,
}: ProductDetailsProps) {
  const [qty, setQty] = useState(1);
  const handleQty = (num: number) => {
    setQty(computeQty(product.stock, num, qty));
  };
  return (
    <>
      <div className="text-center">
        <h2 className="font-bold text-4xl">{product.name}</h2>
        <PriceTag
          price={product.price}
          className="font-bold text-2xl text-accent"
        />
        <div className="border-y border-y-black py-2 my-4 flex items-center w-full">
          <div className="w-1/5 flex justify-center">
            <ChangeQtyBtn onClick={() => handleQty(-1)}>-</ChangeQtyBtn>
          </div>
          <span className="w-3/5 text-center">{qty}</span>
          <div className="w-1/5 flex justify-center">
            <ChangeQtyBtn onClick={() => handleQty(1)}>+</ChangeQtyBtn>
          </div>
        </div>
      </div>
      <div className="w-full text-right">
        <span className="italic pr-1">In stock:</span>
        {product.stock ?? 0}
      </div>
      <Accordion title="Product details:" className="my-4 md:mb-6" defaultOpen>
        <p>{product.description}</p>
      </Accordion>
      <div className="flex justify-end">
        <AddToCartButton
          productId={product.id}
          qty={qty}
          incrementProductQuantity={incrementProductQuantity}
        />
      </div>
    </>
  );
}
