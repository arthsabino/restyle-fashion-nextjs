"use client";
import { ComponentProps, ReactNode } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";

type FormSubmitButtonProps = {
  children: ReactNode;
  className?: string;
} & ComponentProps<"button">;
export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      type="submit"
      className={twMerge("btn btn-primary", className)}
      disabled={pending}
    >
      {pending ? <span className="loading loading-spinner" /> : children}
    </button>
  );
}
