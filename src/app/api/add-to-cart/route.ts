import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { productId, qty = 0 } = body;
  const cart = (await getCart()) ?? (await createCart());

  const isProductInCart = cart.items.find(
    (item) => item.productId === productId
  );
  try {
    if (isProductInCart) {
      await prisma.cartItem.update({
        where: { id: isProductInCart.id },
        data: { quantity: { increment: qty } },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity: qty,
        },
      });
    }
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }
}
