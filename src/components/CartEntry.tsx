"use client";
import { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import { computeQty } from "@/lib/productUtil";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import DescriptionRow from "./DescriptionRow";
import ChangeQtyBtn from "./cart/ChangeQtyBtn";

interface CartEntryProps {
  item: CartItemWithProduct;
  setProductQty: (productId: string, qty: number) => Promise<void>;
  removeItemFromCart: (productId: string) => Promise<void>;
}
export default function CartEntry({
  item,
  setProductQty,
  removeItemFromCart,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();
  const [qty, setQty] = useState(item.quantity);
  const handleIncrement = (num: number) => {
    const computed = computeQty(item.product.stock, num, qty);
    setQty(computed);
    startTransition(async () => {
      setProductQty(item.product.id, computed);
    });
  };
  return (
    <div>
      <div className="flex gap-4 items-start sm:items-stretch relative text-white">
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
          <DescriptionRow
            label="Description:"
            text={item.product.description}
          />
          <DescriptionRow
            label="Price:"
            text={formatPrice(item.product.price)}
          />
          <div className="flex items-center mt-auto">
            <ChangeQtyBtn onClick={() => handleIncrement(-1)} btnCls="btn-sm">
              -
            </ChangeQtyBtn>
            <span className="mx-4">{qty}</span>
            <ChangeQtyBtn onClick={() => handleIncrement(1)} btnCls="btn-sm">
              +
            </ChangeQtyBtn>
            {isPending && <span className="loading loading-spinner ml-3" />}
          </div>
        </div>
        <button
          className="static sm:absolute top-0 right-0 cursor-pointer hover:text-primary"
          onClick={() => {
            startTransition(async () => {
              removeItemFromCart(item.product.id);
            });
          }}
        >
          X
        </button>
      </div>
      <div className="text-right text-xl mt-4 text-white font-bold">
        <DescriptionRow
          label="Total:"
          text={formatPrice(item.product.price * item.quantity)}
        />
      </div>
      <div className="divider before:bg-gray after:bg-gray" />
    </div>
  );
}
