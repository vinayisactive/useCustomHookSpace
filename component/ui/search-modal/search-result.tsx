import React, { Dispatch, SetStateAction, useEffect, RefObject } from "react";
import SearchItem from "./search-item";

interface SearchResultsProps {
    filteredData: string[];
    hoverIndex: number;
    setHoverIndex: Dispatch<SetStateAction<number>>;
    itemRefs: RefObject<(HTMLAnchorElement | null)[]>;
    setSearch: Dispatch<SetStateAction<boolean>>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ filteredData, hoverIndex, setHoverIndex, itemRefs, setSearch}) => {
   
    useEffect(() => {
        if(itemRefs.current?.length === 0)
        itemRefs.current[hoverIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }, [hoverIndex, itemRefs]);

    return (
        <div className="w-full h-[90%] flex flex-col gap-2 border-t border-gray-light pt-2 overflow-y-scroll">
            <ul className="w-full h-full flex flex-col items-start gap-1 text-white px-2">
                {filteredData.length === 0 ? (
                    <li className="w-full h-full flex justify-center items-center gap-2">
                        {`No custom hook found`}
                    </li>
                ) : (
                    filteredData.map((hook, index) => (
                        <SearchItem
                            key={index}
                            hook={hook}
                            index={index}
                            isActive={index === hoverIndex}
                            itemRefs={itemRefs}
                            setHoverIndex={setHoverIndex}
                            setSearch={setSearch}
                        />
                    ))
                )}
            </ul>
        </div>
    );
};

export default SearchResults;
