"use client";

import React from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const SearchButton = () => {
  return (
    <div className="border border-[#d1d1d139] rounded-xl px-3 py-2 text-sm flex justify-center items-center gap-2 cursor-pointer ">
        
        <div className="flex md:hidden ">
            <IoIosSearch className="text-md text-white" />
        </div>

      <div className="hidden md:flex justify-center items-center gap-2 text-[gray] hover:text-white">
        <IoIosSearch className="text-lg text-white" /> Search CustomHooks
      </div>

      <div className="lg:flex justify-center items-center bg-[#252525ba] px-2 rounded-md hidden">
        <MdKeyboardCommandKey /> + k
      </div>
    </div>
  );
};

export default SearchButton;
