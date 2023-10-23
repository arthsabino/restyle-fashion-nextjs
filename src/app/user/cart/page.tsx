import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NoData from "@/components/NoData";
import { getCart } from "@/lib/db/cart";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import CartDetails from "./CartDetails";
import CheckoutDetails from "./CheckoutDetails";
import ShopNowButton from "./ShopNowButton";

export const metadata: Metadata = {
  title: "My Cart",
};

export default async function CartPage() {
  const cart = await getCart();
  const session = await getServerSession(authOptions);
  return (
    <div className="content-container py-4 pb-8">
      <h1 className="text-4xl text-center">My Cart</h1>

      {cart && cart.items.length > 0 ? (
        <div className="flex gap-x-4 gap-y-6 mt-4 md:flex-row flex-col">
          <CartDetails className="basis-2/3" />
          <CheckoutDetails
            className="basis-1/3"
            cart={cart}
            session={session}
          />
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center gap-4">
          <NoData className="h-20 w-full">Your cart is empty.</NoData>
          <ShopNowButton />
        </div>
      )}
    </div>
  );
}
