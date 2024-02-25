"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { hooks } from "../../../Static/hooks";
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
        <div className="absolute w-[80%] sm:w-[50%] lg:w-[35%] h-[60%] lg:h-[60%] flex flex-col justify-start items-center bg-modal-dark border border-gray-light rounded-lg">
            <div className="w-full flex justify-start items-center text-white px-4">
                <IoSearchOutline className="text-xl" />
                <input
                    type="text"
                    className="w-[80%] text-sm bg-transparent focus:outline-none py-3 px-2 "
                    placeholder="Search customhook here..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    ref={inputRef}
                    autoFocus
                />
            </div>

            <div className=" w-full h-[95%] flex flex-col gap-2 border-t border-gray-light ">
                <div></div>

                <div className="w-full h-full flex flex-col items-start gap-1 text-white px-2">
                    {filteredData.length === 0 ? (
                        <li className="w-full h-full flex justify-center items-center gap-2 ">
                            {`No result found =( `}
                        </li>
                    ) : (
                        filteredData.map((hook, index) => (
                            <li key={index} className={` w-full flex items-center gap-2 rounded-lg cursor-pointer p-2 group ${index === hoverIndex ? "bg-hover-gray" : ""}`}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(index)}>
                                <Link href={`/customhooks/${hook}`} className="flex items-center gap-2" onClick={() => setSearch(false)}>
                                    <span className={`text-2xl group-hover:text-theme-green group-hover:ml-4 ${index === hoverIndex ? "ml-4 text-theme-green " : ""}`}>|</span>{hook}<span className="text-lg"><GoArrowUpRight /></span>
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
