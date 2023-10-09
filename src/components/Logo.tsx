import logo from "@/assets/icon.png";
import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex items-center gap-x-2">
      <Image src={logo} alt="logo" width={40} height={40} />
      <span className="dancing-script font-bold text-xl">ReStyle Fashion</span>
    </div>
  );
}
