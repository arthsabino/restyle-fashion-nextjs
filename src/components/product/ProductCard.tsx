import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import PriceTag from "./PriceTag";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="card bg-secondary w-96 card-compact hover:scale-[1.02] transition-transform"
    >
      <div className="relative">
        <Badge type={"FEATURED"} className="absolute top-0 left-0" />
        <figure>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={800}
            className="h-48 object-cover"
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
