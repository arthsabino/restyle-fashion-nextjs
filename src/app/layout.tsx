import Footer from "@/app/Footer";
import Navbar from "@/app/Navbar/Navbar";
import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SessionProvider from "./SessionProvider";
import "./globals.css";

const signika = Signika({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReStyle Fashion",
  description: "E-commerce for dresses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={signika.className}>
        <SessionProvider>
          <Navbar />
          <main className="bg-white">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
