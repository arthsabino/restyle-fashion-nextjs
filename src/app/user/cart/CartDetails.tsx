import Accordion from "@/components/Accordion";
import CartEntry from "@/components/CartEntry";
import { getCart } from "@/lib/db/cart";

interface CartDetailsProps {
  className?: string;
}
export default async function CartDetails({ className }: CartDetailsProps) {
  const cart = await getCart();
  return (
    <div className={className}>
      <Accordion title={"Items:"} defaultOpen>
        <div className="flex flex-col gap-y-4">
          {cart?.items.map((i) => <CartEntry key={i.id} item={i} />)}
        </div>
      </Accordion>
    </div>
  );
}
