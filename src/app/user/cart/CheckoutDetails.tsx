import Accordion from "@/components/Accordion";
import { getCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import { twMerge } from "tailwind-merge";

interface CheckoutDetailsProps {
  className?: string;
}

const checkoutCart = () => {};

export default async function CheckoutDetails({
  className,
}: CheckoutDetailsProps) {
  const cart = await getCart();
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
        <button className="btn btn-accent mt-4 btn-block">Checkout</button>
      </Accordion>
    </div>
  );
}
