import React from "react";
import Link from "next/link";

const ListingCards = ({ hook }) => {
  return (
    <div className="relative w-[90%] md:w-[48%] h-28 flex justify-center items-center overflow-hidden text-3xl border rounded-xl  hover:cursor-pointer group">
        <div className=" h-full w-[0%] group-hover:w-full absolute top-0 left-0 transition-all duration-500 delay-50 bg-animation-gray z-0"></div>

        <Link href={`/customhooks/${hook}`} className="w-full h-full flex justify-center items-center z-[10] ">
             <div className="group-hover:text-theme-green">{hook}</div>
        </Link>
    </div>
  );
};

export default ListingCards;
