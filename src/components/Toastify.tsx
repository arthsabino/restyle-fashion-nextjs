"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        className="min-w-fit text-sm md:text-base bg-base-100"
        position="top-center"
        limit={3}
      />
    </>
  );
}
