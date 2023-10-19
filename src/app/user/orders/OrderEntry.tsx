import DescriptionRow from "@/components/DescriptionRow";
import { formatPrice } from "@/lib/format";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface OrderEntryProps {
  product: Product;
  quantity: number;
}

export default function OrderEntry({ product, quantity }: OrderEntryProps) {
  return (
    <div>
      <div className="flex gap-4 items-start sm:items-stretch relative">
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={150}
          width={150}
          className="h-48 object-cover rounded"
        />
        <div className="flex flex-1 flex-col items-start">
          <Link
            href={`/products/${product.shortName}`}
            className="hover:text-primary font-semibold text-2xl"
          >
            {product.name}
          </Link>
          <DescriptionRow label="Description:" text={product.description} />
          <DescriptionRow label="Price:" text={formatPrice(product.price)} />
          <DescriptionRow label="Quantity:" text={quantity.toString()} />
        </div>
      </div>
      <div className="text-right text-xl mt-4 font-bold">
        <DescriptionRow
          label="Total:"
          text={formatPrice(product.price * quantity)}
        />
      </div>
      <div className="divider before:bg-gray after:bg-gray" />
    </div>
  );
}
