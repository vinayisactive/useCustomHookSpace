'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { hooks } from "@/static/hooks";

const Sidebar =  () => {
    const router = usePathname();
    const findRoute = router.split("/").at(2)

  return (
    <div className="w-full h-[92vh] flex flex-col justify-between gap-3 text-white pb-5 ml-2 pt-10">
        <Link href={"/customhooks"}>
           <h1 className="text-xl hover:text-[#62F983] hover:pl-2 hover:scale-[10px] transition-all delay-50">All CustomHooks</h1>
        </Link>
      
      <ul className="w-full h-[98%] flex flex-col gap-3 overflow-y-auto pl-1">
        {hooks?.map((hook,i: any) => {
          return (
            <li className="text-[#ffffff9c] text-sm hover:text-[#62F983] hover:pl-2 hover:scale-[10px] transition-all delay-50 " key={`hook${i*5}`}>
              <Link className={`${findRoute === `${hook}` ? "active2 pl-2" : ""}`} href={`/customhooks/${hook}`}>
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
