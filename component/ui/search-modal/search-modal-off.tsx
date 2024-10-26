"use client"
import React, { useContext } from "react";
import SearchModal from "./search-modal";
import { SearchContext } from "@/contexts/SearchContext/SearchContext";

const Search = () => {
  const { searchActive, setSearch }: any = useContext(SearchContext);

  return (
    <div>
      { searchActive && (
        <div className="w-screen h-[100vh] absolute top-0 bottom-0 left-0 flex justify-center items-center z-40 bg-blur-dark backdrop-blur-md overflow-y-hidden">
            <div className=" w-full h-full" onClick={() => setSearch(false)}></div>
            <SearchModal/>
        </div>
      )}
    </div>
  );
};

export default Search;
