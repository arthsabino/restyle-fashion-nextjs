import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ChangeQtyBtnProps {
  children: ReactNode;
  onClick: () => void;
  btnCls?: string;
}
export default function ChangeQtyBtn({
  children,
  onClick,
  btnCls,
}: ChangeQtyBtnProps) {
  return (
    <button
      className={twMerge("btn-primary btn", btnCls)}
      onClick={() => onClick?.()}
    >
      <span className="text-2xl">{children}</span>
    </button>
  );
}
