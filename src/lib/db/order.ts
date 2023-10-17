import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { prisma } from "./prisma";

export type CreateOrderPayload = Prisma.Args<
  typeof prisma.order,
  "create"
>["data"];
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

export async function createOrder({
  items,
}: CreateOrderPayload): Promise<OrderWithProducts | null> {
  const session = await getServerSession(authOptions);
  if (session) {
    const newOrder = await prisma.order.create({
      data: {
        userId: session.user.id,
        items,
      },
      include: { items: { include: { product: true } } },
    });
    return newOrder;
  } else {
    return null;
  }
}
