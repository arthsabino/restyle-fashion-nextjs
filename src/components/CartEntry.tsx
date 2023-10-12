import { CartItemWithProduct } from "@/lib/db/cart";
import Image from "next/image";
import Link from "next/link";

interface CartEntryProps {
  item: CartItemWithProduct;
}
export default function CartEntry({ item }: CartEntryProps) {
  return (
    <div className="flex gap-4">
      <Image
        src={item.product.imageUrl}
        alt={item.product.name}
        height={150}
        width={150}
        className="h-48 object-cover rounded"
      />
      <div className="flex flex-col justify-between">
        <Link href={`products/${item.product.shortName}`}>
          {item.product.name}
        </Link>
      </div>
    </div>
  );
}
