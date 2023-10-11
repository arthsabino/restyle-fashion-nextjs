import { twMerge } from "tailwind-merge";
import { svgs } from "../util/SVGImages";

interface AddToCartButtonProps {
  className?: string;
}
export default function AddToCartButton({ className }: AddToCartButtonProps) {
  return (
    <button className={twMerge("btn btn-block btn-primary", className)}>
      Add to Cart <span className="h-5 w-5 text-default">{svgs.cart}</span>
    </button>
  );
}
