import Image from "next/image";
import React from "react";

const BlogCard = () => {
    return (
        <div className="border w-[400px] flex justify-center items-center gap-3 p-2 rounded-xl border-gray-500">
            <Image src={"https://res.cloudinary.com/dbs9ulw2r/image/upload/v1709557321/fymreohtx5ov37sm8jej.png"}
                width={150} height={150} alt="cover" loading="lazy" className=" rounded-lg" />

            <div className="flex flex-col justify-start items-start">
                <p className="text-desc-gray">
                    Mounting and Unmounting in the context of 🔨hook...
                </p>

                <div className="flex justify-start items-center">
                    <Image src={"https://res.cloudinary.com/dbs9ulw2r/image/upload/v1709558919/fu0y9f68dn43u8evrjux.png"}
                        height={30} width={30} alt="medium" />

                    <p>@vinayisactive</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
