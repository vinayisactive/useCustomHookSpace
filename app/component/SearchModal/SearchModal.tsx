"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { hooks } from "@/static/hooks";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const SearchModal = ({ setSearch, searchActive, router }: any) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [hoverIndex, setHoverIndex] = useState(0);

    const filteredData = searchTerm !== ""
        ? hooks.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
        : hooks;


    useEffect(() => {
        const keyHandler = (event: any) => {
            const { key } = event;
            if (key === 'ArrowUp') {
                setHoverIndex((prev) => prev === 0 ? filteredData.length - 1 : prev - 1);
            } else if (key === 'ArrowDown') {
                setHoverIndex((prev) => prev === filteredData.length - 1 ? 0 : prev + 1);
            } else if (key === "Enter") {
                if (filteredData.length > 0) {
                    router.push(`/customhooks/${filteredData[hoverIndex]}`);
                    setSearch(false);
                }
            } else {
                return;
            }
        };

        document.addEventListener('keydown', keyHandler);

        return () => { document.removeEventListener('keydown', keyHandler) };
    }, [hoverIndex, filteredData, router, setSearch]);



    useEffect(() => {
        if (searchActive && inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchActive]);

    return (
        <div className="absolute w-[80%] sm:w-[50%] lg:w-[35%] h-[60%] lg:h-[60%] rounded-lg bg-[#070707] flex flex-col justify-start items-center border border-[#aaaaaa40]">
            <div className="flex justify-start items-center w-full text-white px-4">
                <IoSearchOutline className="text-xl" />
                <input
                    type="text"
                    className="text-sm w-[80%] bg-transparent py-3 px-2 focus:outline-none"
                    placeholder="Search customhook here..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    ref={inputRef}
                    autoFocus
                />
            </div>

            <div className="border-t border-[#aaaaaa40] w-full h-[95%] flex flex-col gap-2">
                <div></div>

                <div className="w-full h-full flex flex-col gap-1 items-start px-2 text-white">
                    {filteredData.length === 0 ? (
                        <li className="flex h-full justify-center items-center gap-2 w-full">
                            {`No result found =( `}
                        </li>
                    ) : (
                        filteredData.map((hook, index) => (
                            <li key={index} className={`flex items-center py-2 gap-2 hover:bg-[#2c2c2ca7] cursor-pointer w-full rounded-lg px-2 group ${index === hoverIndex ? "bg-[#2c2c2ca7] " : ""}`}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(index)}>
                                <Link href={`/customhooks/${hook}`} className="flex items-center gap-2" onClick={() => setSearch(false)}>
                                    <span className={`text-2xl group-hover:text-[#62F983] group-hover:ml-4 ${index === hoverIndex ? "ml-4 text-[#62F983] " : ""}`}>|</span>{hook}<span className="text-lg"><GoArrowUpRight /></span>
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
