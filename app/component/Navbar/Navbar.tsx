"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import uchslogo from "@/public/uchslogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchButton from "../SearchButton/SearchButton";

const navData = [
    { navTo: "customhooks", child: "CustomHooks", id:585  },
    { navTo: "about", child: "About", id:545  }
]

const Navbar = () => {
  const router = usePathname();
  const findRoute = router.split("/").at(1);
  const [searchActive, setSearch] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event : any) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault(); 
        setSearch(searchActive === true? false : true);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchActive]);


  return (
    <div className=" w-full bg-[#0000007e] flex justify-between items-center px-6 lg:px-16 z-[1000] relative ">
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
          {navData.map((nav)=> {
              return (
                <li className={`text-[#fbfbfbb3] text-lg hover:text-white`} key={nav.id}>
                  <Link href={`/${nav.navTo}`} className={`${findRoute === `${nav.navTo}` ? "active" : ""}`}>{nav.child}</Link>
                </li>
              )})}
        </ul>
      </div>


      <div className=" w-1/3 flex justify-end items-center text-white pt-2 ">
        <div onClick={() => setSearch(searchActive === true? false : true)}>
           <SearchButton/>
        </div>
      </div>


      <div className={`h-screen w-full  absolute bg-[#00000096] top-0 left-0 z-[20] backdrop-blur-sm ${searchActive === true ? "flex" : "hidden"}`}
        onClick={() => setSearch(false)} >

      </div>
    </div>
  );
};

export default Navbar;
