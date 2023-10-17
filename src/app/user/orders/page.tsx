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
        orders.map((o) => (
          <Accordion key={o.id} title={`Order #${o.id}`}>
            {o.items.map((p) => (
              <OrderEntry
                key={p.id}
                product={p.product}
                quantity={p.quantity}
              />
            ))}
          </Accordion>
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
}
