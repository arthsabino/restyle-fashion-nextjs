import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { OrderWithProductsAndStatus, getOrderById } from "@/lib/db/order";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import OrderEntry from "../OrderEntry";
import BackButton from "./BackButton";

interface OrderIdPageProps {
  params: { id: string };
}
export function generateMetadata({ params: { id } }: OrderIdPageProps) {
  return {
    title: `Order No. ${id}`,
  };
}

interface OrderTitleProps {
  status: string;
}

function OrderTitle({ status }: OrderTitleProps) {
  const badgeClass = {
    PENDING: "badge-warning",
    COMPLETED: "badge-success",
    DEFAULT: "badge-warning",
  };
  return (
    <div
      className={`badge my-4 ${
        badgeClass[status as keyof typeof badgeClass] || "badge-warning"
      }`}
    >
      {status}
    </div>
  );
}

export default async function OrderIdPage({
  params: { id },
}: OrderIdPageProps) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/user/orders/" + id);
  }
  const order = (await getOrderById(id)) as OrderWithProductsAndStatus;
  return (
    <div className="content-container py-4 pb-8">
      <BackButton />
      <h2 className="break-all mt-4">{`Order No. ${id}`}</h2>
      <OrderTitle status={order.status.name} />
      {order.items.map((p) => (
        <OrderEntry
          key={p.id}
          product={p.product}
          quantity={p.quantity}
          showComment={order.status.name === "COMPLETED"}
        />
      ))}
    </div>
  );
}
