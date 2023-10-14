"use server";

import { createCart, deleteItemInCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function setProductQty(productId: string, quantity: number) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart.items.find((item) => item.productId === productId);
  if (articleInCart) {
    await prisma.cartItem.update({
      where: { id: articleInCart.id },
      data: {
        quantity,
      },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity,
      },
    });
  }

  revalidatePath("/cart", "page");
}

export async function removeItemFromCart(productId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = cart.items.find((item) => item.productId === productId);
  if (articleInCart) {
    await deleteItemInCart(articleInCart.id);
  }

  revalidatePath("/cart", "page");
}
