import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex items-center gap-x-2">
      <Image src={"/icon.png"} alt="logo" width={40} height={40} priority />
      <span className="dancing-script font-bold text-xl">ReStyle Fashion</span>
    </div>
  );
}
