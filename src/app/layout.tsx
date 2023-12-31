import Footer from "@/app/Footer";
import Navbar from "@/app/Navbar/Navbar";
import ToastProvider from "@/components/Toastify";
import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FaviconMetadata from "./FaviconMetadata";
import SessionProvider from "./SessionProvider";
import "./globals.css";

const signika = Signika({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ReStyle Fashion",
    template: "%s - ReStyle Fashion",
  },
  description:
    "E-commerce website for affordable dresses, shorts, and skirts for women.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <FaviconMetadata />
      <body className={signika.className}>
        <SessionProvider>
          <ToastProvider>
            <Navbar />
            <main className="bg-white">{children}</main>
            <Footer />
          </ToastProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
