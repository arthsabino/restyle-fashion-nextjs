import Accordion from "@/components/Accordion";
import { twMerge } from "tailwind-merge";

interface CheckoutDetailsProps {
  className?: string;
}
export default function CheckoutDetails({ className }: CheckoutDetailsProps) {
  return (
    <div className={twMerge("sticky top-20", className)}>
      <Accordion
        title={"Checkout details:"}
        defaultOpen
        collapseCls="bg-primary"
      >
        test
      </Accordion>
    </div>
  );
}
