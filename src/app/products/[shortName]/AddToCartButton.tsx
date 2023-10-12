"use client";
import { useState, useTransition } from "react";
import { twMerge } from "tailwind-merge";
import { svgs } from "../../../components/util/SVGImages";
import { incrementProductQuantity } from "./actions";

interface AddToCartButtonProps {
  productId: string;
  qty: number;
  className?: string;
  btnCls?: string;
  incrementProductQuantity: (productId: string, qty: number) => Promise<void>;
}
export default function AddToCartButton({
  productId,
  qty,
  className,
  btnCls,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div
      className={twMerge(
        "flex flex-col justify-end items-center gap-4",
        className
      )}
    >
      <button
        className={twMerge("btn btn-primary", btnCls)}
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId, qty);
            setSuccess(true);
          });
        }}
      >
        Add to Cart <span className="h-5 w-5 text-default">{svgs.cart}</span>
        {isPending && <span className="loading loading-spinner loading-md" />}
      </button>
      <p>
        {!isPending && success && (
          <div className="flex items-center justify-center font-semibold">
            Added to cart.
            <span className="h-5 w-5 ml-2">{svgs.checkMark}</span>
          </div>
        )}
      </p>
    </div>
  );
}
