import React, { FC, Dispatch, SetStateAction, RefObject } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface SearchInputProps {
  inputRef: RefObject<HTMLInputElement>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchInput: FC<SearchInputProps> = ({inputRef, searchTerm, setSearchTerm}) => {
  return (
    <div className="w-full flex justify-start items-center text-white px-4">
      <IoSearchOutline className="text-xl" />
      <input
        type="text"
        ref={inputRef}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search customhook here..."
        className="w-[80%] text-sm bg-transparent focus:outline-none py-3 px-2"
      />
    </div>
  );
};

export default SearchInput;
