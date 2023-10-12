import { Metadata } from "next";
import CartDetails from "./CartDetails";
import CheckoutDetails from "./CheckoutDetails";

export const metadata: Metadata = {
  title: "My Cart - ReStyle Fashion",
};

export default function CartPage() {
  return (
    <div className="content-container py-4 h-screen">
      <h2 className="text-4xl text-center">My Cart</h2>
      <div className="flex gap-x-4 mt-4 md:flex-row flex-col">
        <CartDetails className="basis-2/3" />
        <CheckoutDetails className="basis-1/3" />
      </div>
    </div>
  );
}
