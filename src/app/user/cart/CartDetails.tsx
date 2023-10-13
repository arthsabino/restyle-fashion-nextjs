import Accordion from "@/components/Accordion";
import CartEntry from "@/components/CartEntry";
import NoData from "@/components/NoData";
import { getCart } from "@/lib/db/cart";
import { setProductQty } from "./action";

interface CartDetailsProps {
  className?: string;
}
export default async function CartDetails({ className }: CartDetailsProps) {
  const cart = await getCart();
  return (
    <div className={className}>
      <Accordion
        title={"Items:"}
        defaultOpen
        collapseCls="bg-neutral text-white"
      >
        {cart && cart?.items.length > 0 ? (
          cart?.items.map((i) => (
            <CartEntry key={i.id} item={i} setProductQty={setProductQty} />
          ))
        ) : (
          <NoData />
        )}
      </Accordion>
    </div>
  );
}
