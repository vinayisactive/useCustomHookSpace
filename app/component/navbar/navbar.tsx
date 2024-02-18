'use client'

import React from "react";
import Image from "next/image";
import uchslogo from "../../../public/uchslogo.png";
import Link from "next/link";
import { usePathname } from 'next/navigation'


const Navbar = () => {

    const router = usePathname();
    const findRoute = router.split("/").at(1)


    return (
        <div className=" w-full bg-[#0000007e] flex justify-between items-center px-6 lg:px-16 z-[1000]">

            <div className=" w-1/2 md:w-1/3 flex justify-between items-center">
                <Link href="/">
                    <div className="flex justify-start items-center">
                        <Image priority src={uchslogo} alt="uchslogo" className="w-16" />
                        <h1 className=" hidden md:flex text-md md:text-lg lg:text-xl pb-1 text-white">
                            <span className="text-[#62F983]">Custom</span>HookSpace
                        </h1>
                    </div>
                </Link>
            </div>

            <div className="w-1/2 md:1/3 flex justify-center items-center">
                <ul className="flex gap-5 items-center mt-1">
                    <li className={`text-[#fbfbfbb3] text-lg hover:text-white`}>
                        <Link className={`${findRoute === "customhooks" ? "active" : ""}`} href={"/customhooks/useDataAPI"}>customhooks</Link>
                    </li>


                    <li className="text-[#fbfbfbb3] text-lg hover:text-white">
                        <Link className={`${findRoute === "about" ? "active" : ""}`} href="/about">about</Link>
                    </li>
                </ul>
            </div>

            <div className=" w-1/3 hidden md:flex justify-end items-center">
                <div className="w-[60%] border border-[#d1d1d170] rounded-xl">

                </div>
            </div>
        </div>
    );
};

export default Navbar;
