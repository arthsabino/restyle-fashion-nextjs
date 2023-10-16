import { PRODUCT_CATEGORY } from "@/lib/consts";
import { getCart } from "@/lib/db/cart";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logo from "../../components/Logo";
import { authOptions } from "../api/auth/[...nextauth]/route";
import CartMenuButton from "./CartMeuButton";
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
        <CartMenuButton cart={cart} />
        <UserMenuButton session={session} />
      </div>
    </div>
  );
}
