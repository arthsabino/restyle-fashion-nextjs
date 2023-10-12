"use client";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
interface AccordionProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  collapseCls?: string;
}

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  className,
  collapseCls,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={className}>
      <div
        className={twMerge(
          `shadow-xl collapse bg-base-200 collapse-arrow ${
            isOpen ? "collapse-open" : "collapse-close"
          }`,
          collapseCls
        )}
      >
        <div
          className="collapse-title text-xl font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </div>
        <div className="collapse-content">{children}</div>
      </div>
    </div>
  );
}
