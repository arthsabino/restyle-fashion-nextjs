"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { OrderStatus, Prisma } from "@prisma/client";
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
      include: { items: { include: { product: true } }, status: true },
    });
    return orders;
  }
}

export async function getDefaultOrderStatus() {
  const defaultStatus = "PENDING";
  const defaultOrderStatus = await prisma.orderStatus.findFirst({
    where: {
      name: defaultStatus,
    },
  });

  return defaultOrderStatus;
}

export async function createOrderFromCart() {
  const session = await getServerSession(authOptions);

  const cart = await getCart();
  if (session && cart) {
    const defaultOrderStatus = (await getDefaultOrderStatus()) as OrderStatus;
    const newOrder = await prisma.order.create({
      data: {
        userId: session.user.id,
        statusId: defaultOrderStatus?.id,
      },
    });
    await prisma.orderItem.createMany({
      data: cart?.items.map((p) => ({
        productId: p.product.id,
        quantity: p.quantity,
        orderId: newOrder.id,
      })),
    });

    const orderData = await prisma.order.findUnique({
      where: {
        id: newOrder.id,
      },
      include: { status: true },
    });
    return orderData;
  } else {
    return null;
  }
}
