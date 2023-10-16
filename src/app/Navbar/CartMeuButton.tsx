import { svgs } from "@/components/util/SVGImages";
import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Link from "next/link";

interface CartMenuButtonProps {
  cart: ShoppingCart | null;
}
export default function CartMenuButton({ cart }: CartMenuButtonProps) {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <span className="h-5 w-5">{svgs.cart}</span>
          <span className="badge badge-sm indicator-item">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{`${
            cart?.size || 0
          } Items`}</span>
          <span className="text-info">{`Subtotal: ${formatPrice(
            cart?.subtotal || 0
          )}`}</span>
          <div className="card-actions">
            <Link href={"/user/cart"} className="w-full">
              <button className="btn btn-primary btn-block">View cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
