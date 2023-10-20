import { OrderWithProductsAndStatus } from "@/lib/db/order";
import Link from "next/link";

interface OrderRowProps {
  order: OrderWithProductsAndStatus;
}

interface OrderTitleProps {
  status: string;
}

function OrderTitle({ status }: OrderTitleProps) {
  const txtClass = {
    PENDING: "text-warning",
    COMPLETED: "text-success",
    DEFAULT: "text-warning",
  };
  return (
    <span
      className={`${
        txtClass[status as keyof typeof txtClass] || "text-warning"
      }`}
    >
      {status}
    </span>
  );
}

export default function OrderRow({ order }: OrderRowProps) {
  return (
    <>
      <tr>
        <td>
          <span className="font-semibold">{order.id}</span>
        </td>
        <td>
          <OrderTitle status={order.status.name} />
        </td>
        <td>
          <Link
            href={`/user/orders/${order.id}`}
            className="btn btn-link btn-xs"
          >
            details
          </Link>
        </td>
      </tr>
    </>
  );
}
