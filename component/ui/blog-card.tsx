import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogInterface } from "@/interfaces/ts-interfaces"; 

interface BlogCardProps {
  blog: BlogInterface;
}

const BlogCard : React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={blog.url} target="_blank" rel="noopener noreferrer">
      <div className="border max-h-[160px] max-w-[350px] sm:max-w-[500px] lg:max-w-[600px] flex justify-center items-center gap-3 p-2 rounded-xl border-gray-500 bg-blur-dark backdrop-blur-sm">
       
        <Image src={blog.coverImageUrl} width={250} height={250} alt={blog.title} loading="lazy" className="rounded-lg hidden sm:flex"/>

        <div className="flex flex-col gap-2">
          <h2 className="text-white text-xl">{blog.title}</h2>
            <div className="flex items-center text-white">
              <Image src={blog.authorImageUrl} width={30} height={30} alt={blog.authorName}/>
              <p className="text-desc-gray">{blog.authorName}</p>
            </div>
        </div>

      </div>
    </Link>
  );
};

export default BlogCard;

