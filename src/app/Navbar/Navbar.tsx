import { getCart } from "@/lib/db/cart";
import { getAllCategory } from "@/lib/db/product";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logo from "../../components/Logo";
import { authOptions } from "../api/auth/[...nextauth]/route";
import CartMenuButton from "./CartMeuButton";
import UserMenuButton from "./UserMenuButton";
export default async function Navbar() {
  const category = await getAllCategory();
  const navigations = category.map((t) => ({
    text: t.name,
    href: `/category/${t.name.toLowerCase()}`,
  }));
  const session = await getServerSession(authOptions);
  const cart = await getCart();
  return (
    <div className="navbar bg-primary sticky top-0 z-20">
      <div className="navbar-start sm:!w-1/2 w-2/3">
        <div className="dropdown inline-block md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigations.map((p) => (
              <li key={p.text}>
                <Link href={p.href} className="font-semibold">
                  {p.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
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
        <CartMenuButton cart={cart} />
        <UserMenuButton session={session} />
      </div>
    </div>
  );
}
