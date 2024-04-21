"use client"
import React, { useContext } from "react";
import SearchModal from "./SearchModal/SearchModal";
import { SearchContext } from "@/contexts/SearchContext/SearchContext";

const Search = () => {
  const { searchActive, setSearch }: any = useContext(SearchContext);

  return (
    <div>
      { searchActive && (
        <div className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center z-40 bg-blur-dark backdrop-blur-md ">
            <div className=" w-full h-full" onClick={() => setSearch(false)}></div>
            <SearchModal/>
        </div>
      )}
    </div>
  );
};

export default Search;
