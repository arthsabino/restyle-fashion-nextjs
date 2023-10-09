import { PRODUCT_TAGS } from "@/lib/consts";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Badge from "./Badge";
import PriceTag from "./PriceTag";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={twMerge(
        `card bg-secondary w-96 card-compact transition-transform shadow-xl`,
        className
      )}
    >
      <div className="relative">
        {product.tag && (
          <Badge
            tag={product.tag as (typeof PRODUCT_TAGS)[number]}
            className="absolute top-0 left-0"
          />
        )}
        <figure>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={800}
            className="h-80 object-cover rounded-t-xl"
          />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}
