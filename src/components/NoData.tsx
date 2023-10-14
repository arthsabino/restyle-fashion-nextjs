import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NoDataProps {
  children?: ReactNode;
  className?: string;
}
export default function NoData({
  children = "No data...",
  className,
}: NoDataProps) {
  return (
    <div
      className={twMerge(
        "h-40 flex mt-2 items-center justify-center bg-base-200 text-neutral",
        className
      )}
    >
      {children}
    </div>
  );
}
