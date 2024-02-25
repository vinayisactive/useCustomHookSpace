'use client'

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { hooks } from "@/static/hooks";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const SearchModal = ({setSearch}: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = searchTerm !== ""
      ? hooks.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
      : hooks;

  return (
    <div className=" absolute w-[80%] sm:w-[50%] lg:w-[35%] h-[60%] lg:h-[60%] rounded-lg bg-[#070707] flex flex-col justify-start items-center border border-[#aaaaaa40]">
      <div className="flex justify-start items-center w-full text-white px-4">
        <IoSearchOutline className="text-xl" />
        <input
          type="text"
          className=" text-sm w-[80%] bg-transparent py-3 px-2 focus:outline-none"
          placeholder="Search customhook here..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="border-t border-[#aaaaaa40] w-full h-[95%] flex flex-col gap-2">
        <div></div>

        <div className="w-full  h-full flex flex-col  gap-1 items-start px-2 text-white">
          {filteredData.length === 0 ? (
            <li className="flex h-full justify-center items-center gap-2 w-full">
              {`No result found =( `}
            </li>
          ) : (
            filteredData.map((hook, index) => (
              <li key={index} className="flex items-center py-2 gap-2 hover:bg-[#2c2c2ca7] cursor-pointer w-full rounded-lg px-2 group">
                <Link 
                    href={`/customhooks/${hook}`} className="flex items-center gap-2" 
                    onClick={() => setSearch(false)}>
                  <span className="text-2xl group-hover:text-[#62F983] group-hover:ml-4 ">|</span> {hook} <span className="text-lg"><GoArrowUpRight /></span>
                </Link>
              </li>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
