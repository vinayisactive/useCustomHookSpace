import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post } : any) => {
  return (
    <Link href={post.url} target="_blank" rel="noopener noreferrer">
      <div className="border max-h-[160px] sm:max-w-[500px] lg:max-w-[600px] flex justify-center items-center gap-3 p-2 rounded-xl border-gray-500 bg-blur-dark backdrop-blur-sm">
       
        <Image src={post.coverImageUrl} width={250} height={250} alt={post.title} loading="lazy" className="rounded-lg"/>

        <div>
          <h2 className="text-white text-xl">{post.title}</h2>
            <div className="flex items-center text-white">
              <Image src={post.authorImageUrl} width={30} height={30} alt={post.authorName}/>
              <p className="text-desc-gray">{post.authorName}</p>
            </div>
        </div>

      </div>
    </Link>
  );
};

export default BlogCard;

