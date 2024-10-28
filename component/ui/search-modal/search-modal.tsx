"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { hooks } from "@/utils/static/index";
import { SearchContext } from "@/contexts/SearchContext";
import SearchInput from "./search-input";
import SearchResults from "./search-result";

const SearchModal = () => {
  const { searchActive, setSearch }: any = useContext(SearchContext);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoverIndex, setHoverIndex] = useState(0);

  const filteredData =
    searchTerm !== ""
      ? hooks.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : hooks;

      useEffect(() => {
        if (searchActive) {
          document.documentElement.style.overflowY = "hidden"; 
          document.body.style.overflowY = "hidden";
          inputRef.current?.focus(); 
        } else {
          document.documentElement.style.overflowY = "";
          document.body.style.overflowY = "";
        }
        
        return () => {
          document.documentElement.style.overflowY = "";
          document.body.style.overflowY = "";
        };
      }, [searchActive]);

  const handleKeyNavigation = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;
      if (key === "ArrowUp") {
        setHoverIndex((prev) =>
          prev === 0 ? filteredData.length - 1 : prev - 1
        );
      } else if (key === "ArrowDown") {
        setHoverIndex((prev) =>
          prev === filteredData.length - 1 ? 0 : prev + 1
        );
      } else if (key === "Enter") {
        router.push(`/customhooks/${filteredData[hoverIndex]}`);
        setSearch(false);
      }
    },
    [filteredData, hoverIndex, router, setSearch]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyNavigation);
    return () => {
      document.removeEventListener("keydown", handleKeyNavigation);
    };
  }, [handleKeyNavigation]);

  useEffect(() => {
 if (itemRefs.current && itemRefs.current[hoverIndex]) {
    (itemRefs.current[hoverIndex] as HTMLAnchorElement).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
  }, [hoverIndex]);

  useEffect(() => {
    if (filteredData.length === 1) {
      setHoverIndex(0); 
    }
  }, [filteredData]);

  return (
    <div
      className="absolute w-[80%] sm:w-[50%] lg:w-[35%] h-[60%] flex flex-col justify-start items-center
     bg-modal-dark border border-gray-light rounded-lg"
    >
      <SearchInput
        inputRef={inputRef}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <SearchResults
        filteredData={filteredData}
        hoverIndex={hoverIndex}
        setHoverIndex={setHoverIndex}
        itemRefs={itemRefs}
        setSearch={setSearch}
      />
    </div>
  );
};

export default SearchModal;
