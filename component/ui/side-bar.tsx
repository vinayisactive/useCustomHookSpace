"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {hooks} from '@/utils/static';

const Sidebar = () => {
    const router = usePathname();
    const findRoute = router.split("/").at(2)

  return (
    <div className="hidden lg:flex flex-col gap-3 text-white pb-5 ml-2">
        <Link href={"/customhooks"}>
           <h1 className="text-xl hover:text-[#62F983] hover:pl-2 hover:scale-[10px] transition-all delay-50">CustomHooks</h1>
        </Link>
      
        <ul className="flex flex-col gap-3 pl-1">
          {hooks?.map((hook : string, i: number) => {
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
}

export default Sidebar



