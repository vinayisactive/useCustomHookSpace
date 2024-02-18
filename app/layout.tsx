import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar/navbar";

const inter = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "useCustomHookSpace",
  description: "hehe enough information for now",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-[100%] h-auto bg-black relative">
          <div className="h-[8vh] w-[100%]">
            <Navbar />
          </div>

          <div className="h-[92vh]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
