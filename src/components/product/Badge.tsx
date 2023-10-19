import { twMerge } from "tailwind-merge";

interface BadgeProps {
  tag: string;
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
      <div
        className={twMerge(
          `badge ${BADGE_TAGS[tag as keyof typeof BADGE_TAGS]}`,
          className
        )}
      >
        <span className="font-semibold text-xs">{tag}</span>
      </div>
    )
  );
}
