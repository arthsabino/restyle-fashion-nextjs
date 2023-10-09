import { twMerge } from "tailwind-merge";

interface BadgeProps {
  type: "NEW" | "FEATURED" | "HOT";
  className?: string;
}
export default function Badge({ type, className }: BadgeProps) {
  const BADGE_TYPES = {
    NEW: "badge-secondary",
    FEATURED: "badge-warning",
    HOT: "badge-error",
  };
  return (
    <div className={twMerge(`badge ${BADGE_TYPES[type]}`, className)}>
      <span className="font-semibold text-xs">{type}</span>
    </div>
  );
}
