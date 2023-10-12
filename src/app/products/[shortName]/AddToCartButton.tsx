"use client";
import axios from "axios";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { svgs } from "../../../components/util/SVGImages";

interface AddToCartButtonProps {
  productId: string;
  qty: number;
  className?: string;
  btnCls?: string;
}
export default function AddToCartButton({
  productId,
  qty,
  className,
  btnCls,
}: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleClick = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/add-to-cart", {
        productId,
        qty,
      });
      if (res && res.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 10000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={twMerge(
        "flex flex-col justify-end items-center gap-4",
        className
      )}
    >
      <button
        className={twMerge("btn btn-primary", btnCls)}
        onClick={handleClick}
        disabled={isLoading}
      >
        Add to Cart <span className="h-5 w-5 text-default">{svgs.cart}</span>
        {isLoading && <span className="loading loading-spinner loading-md" />}
      </button>
      <p>
        {!isLoading && success && (
          <div className="flex items-center justify-center font-semibold">
            Added to cart.<span className="h-5 w-5 ml-2">{svgs.checkMark}</span>
          </div>
        )}
      </p>
    </div>
  );
}
