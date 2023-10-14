import { twMerge } from "tailwind-merge";

interface DescriptionRowProps {
  label: string;
  text: string;
  labelCls?: string;
}
export default function DescriptionRow({
  label,
  labelCls,
  text,
}: DescriptionRowProps) {
  return (
    <span>
      <span className={twMerge("text-gray mr-1", labelCls)}>{label}</span>
      {text}
    </span>
  );
}
