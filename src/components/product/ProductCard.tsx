"use client";
import { ProductWithTags } from "@/lib/db/product";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Badge from "./Badge";
import PriceTag from "./PriceTag";

interface ProductCardProps {
  product: ProductWithTags;
  className?: string;
  hideBtn?: boolean;
}

export default function ProductCard({
  product,
  className,
  hideBtn = false,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.shortName}`}
      className={twMerge(
        `card bg-base-content text-white card-compact w-full group hover:scale-95 duration-200 relative`,
        className
      )}
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={600}
          height={800}
          className="h-72 object-cover"
        />
      </figure>

      {product.tag && (
        <Badge tag={product.tag.name} className="absolute top-0 left-0" />
      )}
      <div className="card-body">
        <h2 className="card-title">
          <PriceTag
            price={product.price}
            className="group-hover:text-primary"
          />
        </h2>
        <span className="group-hover:text-primary">{product.name}</span>
        {!hideBtn ? (
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Buy Now
            </button>
          </div>
        ) : null}
      </div>
    </Link>
  );
}

// export function ProductCardv2({ product, className }: ProductCardProps) {
//   return (
//     <Link href={`/products/${product.id}`} className="my-4">
//       <div className="bg-primary rounded-xl group hover:scale-[1.02] hover:duration-200">
//         <Image
//           src={product.imageUrl}
//           alt={product.name}
//           width={400}
//           height={800}
//           className="h-72 w-full object-cover rounded-t-xl"
//         />
//         <div className="p-4 gap-2">
//           <h4 className="text-xl mb-1">{product.name}</h4>
//           <p>{product.description}</p>
//           <PriceTag price={product.price} />
//         </div>
//       </div>
//     </Link>
//   );
// }
