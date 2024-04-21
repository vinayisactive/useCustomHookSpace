import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from './component/index'

const inter = Manrope({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "useCustomHookSpace",
  description: "say 'so long' to non-modular code! explore custom hooks and helpers at useCustomHookSpace.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full bg-black flex flex-col justify-center items-center ">
          <div className="h-[8vh] w-full flex justify-center items-center">
            <Navbar />
          </div>

          <div className="w-full h-[92vh] flex justify-center items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
