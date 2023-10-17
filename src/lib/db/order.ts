"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { getCart } from "./cart";
import { prisma } from "./prisma";

export type OrderWithProducts = Prisma.OrderGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export async function getOrders() {
  const session = await getServerSession(authOptions);
  if (session) {
    const orders = await prisma.order.findMany({
      where: { userId: session.user.id },
      include: { items: { include: { product: true } } },
    });
    return orders;
  }
}

export async function createOrderFromCart() {
  const session = await getServerSession(authOptions);

  const cart = await getCart();
  if (session && cart) {
    const newOrder = await prisma.order.create({
      data: {
        userId: session.user.id,
      },
    });
    await prisma.orderItem.createMany({
      data: cart?.items.map((p) => ({
        productId: p.product.id,
        quantity: p.quantity,
        orderId: newOrder.id,
      })),
    });
    return newOrder;
  } else {
    return null;
  }
}
