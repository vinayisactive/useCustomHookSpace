import React from "react";
import Image from "next/image";
import Link from "next/link";

const ReturnToHome = ({ route }: { route: String }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Image
        src={
          "https://res.cloudinary.com/dbs9ulw2r/image/upload/v1709561122/n5kdrlwz1bmavs2n2ajh.png"
        }
        alt="uchslogo"
        width={80}
        height={80}
        className="pr-6"
      />

      <p>
        <Link
          href="/"
          className=" text-desc-gray text-lg hover:text-white hover:underline"
        >
          Home
        </Link>{" "}
        / <span className="text-white">{`${route}`}</span>
      </p>
    </div>
  );
};

export default ReturnToHome;
