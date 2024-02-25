"use client";

import React from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const SearchButton = () => {
  return (
    <div className="flex justify-center items-center gap-2 border border-gray-light rounded-xl text-sm px-3 py-2 cursor-pointer ">
        
        <div className="flex md:hidden ">
            <IoIosSearch className="text-md text-white" />
        </div>

      <div className="hidden md:flex justify-center items-center gap-2 text-inactive-gray hover:text-white">
        <IoIosSearch className="text-lg text-white" /> Search CustomHooks
      </div>

      <div className="hidden lg:flex justify-center items-center bg-gray-light rounded-md px-2">
        <MdKeyboardCommandKey /> + k
      </div>
    </div>
  );
};

export default SearchButton;
