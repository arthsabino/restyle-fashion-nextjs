"use client";
import Accordion from "@/components/Accordion";
import { ShoppingCart } from "@/lib/db/cart";
import { createOrderFromCart } from "@/lib/db/order";
import { formatPrice } from "@/lib/format";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import { useTransition } from "react";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

interface CheckoutDetailsProps {
  session: Session | null;
  cart: ShoppingCart | null;
  className?: string;
}
export default function CheckoutDetails({
  session,
  cart,
  className,
}: CheckoutDetailsProps) {
  const [isPending, startTransition] = useTransition();
  const { push } = useRouter()
  return (
    <div className={twMerge("sticky top-20", className)}>
      <Accordion
        title={"Checkout details:"}
        defaultOpen
        collapseCls="bg-primary"
      >
        <div className="flex items-center justify-between">
          <span>Subtotal:</span>
          <span className="font-bold">
            {formatPrice(cart?.subtotal as number)}
          </span>
        </div>
        <div className="divider" />
        <div className="flex items-center justify-between">
          <span>Total:</span>
          <span className="font-bold">
            {formatPrice(cart?.subtotal as number)}
          </span>
        </div>
        <button
          className="btn btn-accent mt-4 btn-block"
          onClick={() => {
            if(session && session.user) {
              
            startTransition(async () => {
              await createOrderFromCart();
              toast.success(
                "Order has been placed! Please check your email for updates."
              );
            });
            } else {
              push("/api/auth/signin?callbackUrl=/user/cart");
            }
          }}
        >
          <span>Checkout</span>
          {isPending && (
            <span className="loading loading-spinner loading-md ml-2" />
          )}
        </button>
      </Accordion>
    </div>
  );
}
