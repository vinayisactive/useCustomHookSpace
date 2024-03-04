import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
    return (
    <Link href={"https://medium.com/@vinayisactive/mounting-and-unmounting-in-the-context-of-hook-04253869656d"}  target="_blank">
        <div className="border sm:w-[500px] lg:w-[600px] flex justify-center items-center gap-3 p-2 rounded-xl border-gray-500 bg-blur-dark backdrop-blur-sm">
            <Image src={"https://res.cloudinary.com/dbs9ulw2r/image/upload/v1709557321/fymreohtx5ov37sm8jej.png"}
                width={250} height={250} alt="cover" loading="lazy" className=" rounded-lg" />

            <div className="flex flex-col justify-start items-start">
                <p className="text-white text-xl">
                    Mounting and Unmounting in the context of 🔨hook...
                </p>

                <div className="flex justify-start items-center">
                    <Image src={"https://res.cloudinary.com/dbs9ulw2r/image/upload/v1709558919/fu0y9f68dn43u8evrjux.png"}
                        height={30} width={30} alt="medium" />

                    <p className="text-desc-gray">@vinayisactive</p>
                </div>
            </div>
        </div>
    </Link>
    );
};

export default BlogCard;
