"use client";

import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {SearchModal, SearchButton} from '../index'


const navData = [
    { navTo: "", child: "Home", id:560  },
    { navTo: "customhooks", child: "CustomHooks", id:585  },
    { navTo: "about", child: "About", id:545  }
]

const Navbar = () => {
  const route = usePathname();
  const router = useRouter();
  const findRoute = route.split("/").at(1);
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
    <div className=" w-full flex justify-between items-center bg-blur-dark  px-6 lg:px-16 z-[1000]">
      <div className=" w-1/2 md:w-1/3 flex justify-between items-center">
        <Link href="/">
          <div className="flex justify-start items-center gap-2">
          <Image src={"https://res.cloudinary.com/dbs9ulw2r/image/upload/v1709561122/n5kdrlwz1bmavs2n2ajh.png"} alt="uchslogo" width={40} height={40}  />
            <h1 className=" hidden md:flex text-md md:text-lg lg:text-xl text-white pb-1">
              use<span className="text-theme-green">Custom</span>HookSpace           
            </h1>
          </div>
        </Link>
      </div>

      <div className="w-1/2 md:1/3 flex justify-center items-center">
        <ul className="flex items-center gap-3 md:gap-5">
          {navData.map((nav : any)=> {
              return (
                <li className={`text-lg text-inactive-gray  hover:text-white`} key={nav.id}>
                  <Link href={`/${nav.navTo}`} className={`${findRoute === `${nav.navTo}` ? "active" : ""}`}>{nav.child}</Link>
                </li>
              )})}
        </ul>
      </div>


      <div className=" w-1/3 flex justify-end items-center text-white ml-3">
        <div onClick={() => setSearch(searchActive === true? false : true)}>
           <SearchButton/>
        </div>
      </div>


      <div className={`h-screen w-full absolute top-0 left-0 ${searchActive === true ? "flex" : "hidden"} justify-center items-center bg-blur-dark backdrop-blur-md  z-[20] `}>
            <div className=" w-full h-full" onClick={() => setSearch(false)} ></div>
            <SearchModal setSearch={setSearch} searchActive={searchActive} router={router} />
      </div>
    </div>
  );
};

export default Navbar; 
