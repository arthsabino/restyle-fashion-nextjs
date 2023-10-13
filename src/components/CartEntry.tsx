"use client";
import { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import { computeQty } from "@/lib/productUtil";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ChangeQtyBtn from "./cart/ChangeQtyBtn";

interface CartEntryProps {
  item: CartItemWithProduct;
  setProductQty: (productId: string, qty: number) => Promise<void>;
}
export default function CartEntry({ item, setProductQty }: CartEntryProps) {
  const [qty, setQty] = useState(item.quantity);
  const handleIncrement = (num: number) => {
    const computed = computeQty(item.product.stock, num, qty);

    setQty(computed);
    setProductQty(item.product.id, computed);
  };
  return (
    <div>
      <div className="flex gap-4 items-stretch relative text-white">
        <Image
          src={item.product.imageUrl}
          alt={item.product.name}
          height={150}
          width={150}
          className="h-48 object-cover rounded"
        />
        <div className="flex flex-1 flex-col">
          <Link
            href={`/products/${item.product.shortName}`}
            className="hover:text-primary font-semibold text-2xl"
          >
            {item.product.name}
          </Link>
          <div className="flex flex-col justify-center flex-1">
            <span>
              <span className="text-gray mr-1">Description:</span>
              {item.product.description}
            </span>
            <span>
              <span className="text-gray mr-1">Price:</span>
              {formatPrice(item.product.price)}
            </span>
            <div className="flex items-center mt-2">
              <ChangeQtyBtn onClick={() => handleIncrement(-1)} btnCls="btn-sm">
                -
              </ChangeQtyBtn>
              <span className="mx-4">{qty}</span>
              <ChangeQtyBtn onClick={() => handleIncrement(1)} btnCls="btn-sm">
                +
              </ChangeQtyBtn>
            </div>
          </div>
        </div>
        <span className="absolute top-0 right-0 cursor-pointer hover:text-primary">
          X
        </span>
      </div>
      <div className="text-right text-xl text-white font-bold">
        <span>
          <span className="text-gray mr-1">Total:</span>
          {formatPrice(item.product.price * item.quantity)}
        </span>
      </div>
      <div className="divider before:bg-gray after:bg-gray" />
    </div>
  );
}
