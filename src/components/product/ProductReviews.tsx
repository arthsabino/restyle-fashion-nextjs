import { twMerge } from "tailwind-merge";

interface ProductReviewProps {
  //productId:string
  className?: string;
}
export default function ProductReview({ className }: ProductReviewProps) {
  return <div className={twMerge("py-4", className)}></div>;
}
