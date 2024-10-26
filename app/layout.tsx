import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/section/navbar";

const inter = Manrope({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "useCustomHookSpace",
  description:
    "say 'so long' to non-modular code! explore custom hooks and helpers at useCustomHookSpace.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen bg-black flex flex-col justify-center items-center overflow-x-hidden">
          <Navbar />
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
