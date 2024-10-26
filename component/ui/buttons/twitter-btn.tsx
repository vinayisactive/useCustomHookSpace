import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const TwitterNav = () => {
  return (
    <Link
      href={"https://twitter.com/vinayisactive"}
      target="_blank"
      className="hidden sm:flex justify-center items-center gap-1 lg:border text-sm px-2 py-1 rounded-3xl border-desc-gray group"
    >
      <FaXTwitter />
      <span className=" hidden lg:flex group-hover:text-white">
        vinayisactive
      </span>
    </Link>
  );
};

export default TwitterNav;
