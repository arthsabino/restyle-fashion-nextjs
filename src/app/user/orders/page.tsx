import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NoData from "@/components/NoData";
import PaginationBar from "@/components/PaginationBar";
import { OrderWithProductsAndStatus, getOrders } from "@/lib/db/order";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import OrderRow from "./OrderRow";

export const metadata: Metadata = {
  title: "Orders",
};

interface OrderPageProps {
  searchParams: { page: string };
}

export default async function OrdersPage({
  searchParams: { page = "1" },
}: OrderPageProps) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/user/orders");
  }
  const orders = (await getOrders()) as OrderWithProductsAndStatus[];
  const currentPage = parseInt(page);
  const pageSize = 10;
  const totalItemCount = orders.length;
  const totalPages = Math.ceil(totalItemCount / pageSize);
  const paginateOrders: OrderWithProductsAndStatus[] =
    totalItemCount > 0
      ? await prisma.order.findMany({
          skip: (currentPage - 1) * pageSize,
          take: pageSize,
          include: { items: { include: { product: true } }, status: true },
        })
      : [];
  return (
    <div className="content-container py-4 pb-8">
      <h1 className="text-4xl text-center">Orders</h1>
      {paginateOrders && paginateOrders.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Order No.</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {paginateOrders.map((o) => (
                  <OrderRow key={o.id} order={o} />
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex flex-col items-center">
              <PaginationBar
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </div>
          )}
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
}
