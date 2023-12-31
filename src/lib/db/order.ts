"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { OrderStatus, Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { deleteCart, getCart } from "./cart";
import { prisma } from "./prisma";

export type OrderWithProducts = Prisma.OrderGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type OrderWithProductsAndStatus = Prisma.OrderGetPayload<{
  include: { items: { include: { product: true } }; status: true };
}>;

export async function getOrders(): Promise<
  OrderWithProductsAndStatus[] | null
> {
  const session = await getServerSession(authOptions);
  if (session) {
    const orders: OrderWithProductsAndStatus[] = await prisma.order.findMany({
      where: { userId: session.user.id },
      include: { items: { include: { product: true } }, status: true },
    });
    return orders;
  }
  return null;
}

export async function getOrderById(
  id: string
): Promise<OrderWithProductsAndStatus | null> {
  const order: OrderWithProductsAndStatus | null =
    await prisma.order.findUnique({
      where: { id },
      include: { items: { include: { product: true } }, status: true },
    });
  return order;
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

    if (orderData) {
      await deleteCart();
      revalidatePath("/cart", "page");
      return orderData;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
