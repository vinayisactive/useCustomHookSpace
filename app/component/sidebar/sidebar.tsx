'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { hooks } from "@/static/hooks";

const Sidebar =  () => {
    const router = usePathname();
    const findRoute = router.split("/").at(2)

  return (
    <div className="w-full h-[92vh] flex flex-col justify-between gap-3 text-white pb-5 ml-2 pt-14">
        <Link href={"/customhooks"}>
           <h1 className="text-2xl">customhooks</h1>
        </Link>
      
      <ul className="w-full h-[98%] flex flex-col gap-1 overflow-y-auto pl-2">
        {hooks?.map((hook,i: any) => {
          return (
            <li className="text-[#ffffff9c] text-md hover:text-[#62F983] hover:pl-2 hover:scale-[10px] transition-all delay-150 " key={`hook${i*5}`}>
              <Link className={`${findRoute === `${hook}` ? "active2" : ""}`} href={`/customhooks/${hook}`}>
                {hook}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
