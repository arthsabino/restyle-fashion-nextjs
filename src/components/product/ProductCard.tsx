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
        `card bg-primary w-96 card-compact transition-transform shadow-xl hover:scale-[97%] duration-200`,
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
            className="h-72 object-cover rounded-t-xl"
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
