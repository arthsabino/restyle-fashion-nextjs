import { PRODUCT_CATEGORY } from "@/lib/consts";
import { getCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logo from "../../components/Logo";
import { svgs } from "../../components/util/SVGImages";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UserMenuButton from "./UserMenuButton";
export default async function Navbar() {
  const navigations = PRODUCT_CATEGORY.map((t) => ({
    text: t,
    href: `/category/${t.toLowerCase()}`,
  }));
  const session = await getServerSession(authOptions);
  const cart = await getCart();
  return (
    <div className="navbar bg-primary sticky top-0 z-20">
      <div className="navbar-start">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigations.map((p) => (
            <li key={p.text}>
              <Link href={p.href} className="font-semibold">
                {p.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-x-2">
        <Link href={"/add-product"}>
          <button className="btn btn-secondary">Add Product</button>
        </Link>
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
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <UserMenuButton session={session} />
      </div>
    </div>
  );
}
