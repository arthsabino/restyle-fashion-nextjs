import { svgs } from "@/components/util/SVGImages";
import Link from "next/link";

export default function ShopNowButton() {
  return (
    <Link href={"/"} className="btn btn-accent">
      <div className="flex items-center gap-2">
        Shop Now
        <span className="h-5 w-5">{svgs.bag}</span>
      </div>
    </Link>
  );
}
