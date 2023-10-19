import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Accordion from "@/components/Accordion";
import NoData from "@/components/NoData";
import { getOrders } from "@/lib/db/order";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import OrderEntry from "./OrderEntry";

export const metadata: Metadata = {
  title: "Orders - ReStyle Fashion",
};

interface OrderTitleProps {
  title: string;
  status: string;
}

function OrderTitle({ title, status }: OrderTitleProps) {
  const badgeClass = {
    PENDING: "badge-warning",
    COMPLETED: "badge-success",
    DEFAULT: "badge-warning",
  };
  return (
    <div className="flex flex-col">
      {title}
      <div
        className={`badge ${
          badgeClass[status as keyof typeof badgeClass] || "badge-warning"
        }`}
      >
        {status}
      </div>
    </div>
  );
}
export default async function OrdersPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/user/orders");
  }
  const orders = await getOrders();
  return (
    <div className="content-container py-4 pb-8">
      <h2 className="text-4xl text-center">Orders</h2>
      {orders && orders.length > 0 ? (
        <div className="flex flex-col gap-4">
          {orders.map((o) => (
            <Accordion
              key={o.id}
              title={
                <OrderTitle title={`Order #${o.id}`} status={o.status.name} />
              }
            >
              {o.items.map((p) => (
                <OrderEntry
                  key={p.id}
                  product={p.product}
                  quantity={p.quantity}
                />
              ))}
            </Accordion>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
}
