import { PRODUCT_TAGS } from "@/lib/consts";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  tag: (typeof PRODUCT_TAGS)[number] | null;
  className?: string;
}
export default function Badge({ tag, className }: BadgeProps) {
  const BADGE_TAGS = {
    NEW: "badge-secondary",
    FEATURED: "badge-warning",
    HOT: "badge-error",
  };
  return (
    tag && (
      <div className={twMerge(`badge ${BADGE_TAGS[tag]}`, className)}>
        <span className="font-semibold text-xs">{tag}</span>
      </div>
    )
  );
}
