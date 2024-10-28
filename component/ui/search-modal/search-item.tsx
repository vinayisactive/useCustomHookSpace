import React, { Dispatch, SetStateAction, RefObject } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface SearchItemProps {
  hook: string;
  index: number;
  isActive: boolean;
  itemRefs: RefObject<(HTMLAnchorElement | null)[]>;
  setHoverIndex: Dispatch<SetStateAction<number>>;
  setSearch: Dispatch<SetStateAction<boolean>>;
}

const SearchItem: React.FC<SearchItemProps> = ({ hook, index, isActive, itemRefs, setHoverIndex, setSearch }) => {
  return (
    <Link
      href={`/customhooks/${hook}`}
      ref={(el) => {
        if (itemRefs.current) 
          itemRefs.current[index] = el;
      }}

      className={`w-full flex items-center gap-2 rounded-lg cursor-pointer p-2 group ${
        isActive ? "bg-hover-gray" : ""
      }`}
      
      onMouseEnter={() => setHoverIndex(index)}
    >
      <div className="flex items-center gap-2" onClick={() => setSearch(false)}>
        <span
          className={`text-2xl group-hover:text-theme-green group-hover:ml-4 ${
            isActive ? "ml-4 text-theme-green" : ""
          }`}
        >
          |
        </span>
        {hook}
        <span className="text-lg">
          <GoArrowUpRight />
        </span>
      </div>
    </Link>
  );
};

export default SearchItem;
