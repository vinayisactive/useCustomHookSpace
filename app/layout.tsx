import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from './component/Navbar/Navbar'

const inter = Manrope({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "useCustomHookSpace",
  description: "say 'so long' to non-modular code! explore custom hooks and helpers at useCustomHookSpace.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-[100%] h-auto bg-black relative">
          <div className="h-[8vh] w-[100%] relative">
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
