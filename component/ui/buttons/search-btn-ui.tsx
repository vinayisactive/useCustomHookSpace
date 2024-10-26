"use client"
import React, {useContext, useEffect} from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { SearchContext } from "@/contexts/SearchContext/SearchContext";


const SearchButton = () => {
    const {searchActive, setSearch}:any = useContext(SearchContext); 

    useEffect(() => {
      const handleKeyDown = (event: any) => {
        if (event.ctrlKey && event.key === "k") {
          event.preventDefault();
          setSearch(searchActive === true ? false : true);
        }
      };
  
      document.addEventListener("keydown", handleKeyDown);
  
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [setSearch, searchActive]);
  

  return (
    <button className="flex justify-center items-center gap-2 border border-gray-light rounded-xl text-sm px-3 mt-1 py-2 cursor-pointer "
      onClick={() => setSearch(searchActive === true ? false : true)}
    >
         
      <IoIosSearch className="text-md text-white"  size={17}/>

      <div className="hidden lg:flex justify-center items-center gap-2 text-inactive-gray hover:text-white">
         Search CustomHooks
         <span className="flex justify-center items-center bg-gray-light rounded-md px-2">
            <MdKeyboardCommandKey /> + k
         </span>
      </div>

    </button> 
  );
};

export default SearchButton;
