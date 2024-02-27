// import React from "react";
// import Image from "next/image";
// import { parse, serialize } from "parse5";
// import blogposter from '../../../asserts/blogposter.png'
// import mediumlogo from '../../../asserts/mediumlogo.png'
// import profilepicture from '../../../asserts/profilepicture.jpg'

// const BlogCard = async () => {
//     try {
//         const raw = await fetch("http://localhost:3000/api/blog");
//         const data = await raw.json();
//         const parsedContent = parse(data?.content);
//         const serializedContent = serialize(parsedContent);

//         console.log(data);
        

//         return (
//             <div className=" md:hidden w-[95%] md:w-[70%] lg:w-[50%] xl:w-[35%] text-desc-gray flex flex-col gap-8 rounded-xl pt-2 pb-12 px-4 overflow-y-scroll scroll-smooth">
//                 <div className="h-[7vh] w-full flex justify-between items-center">
//                     <Image 
//                         src={mediumlogo} alt="pfp"
//                         width={50} height={50}
//                         className="rounded-lg"
//                     />
                    
//                     <div className="flex justify-center items-center gap-3">
//                        <p className="text-desc-gray cursor-pointer text-[18px] hover:text-white"><a href={data?.mediumUrl} target="_blank"> @vinayisactive</a></p>
//                        <Image 
//                            src={profilepicture} alt="pfp"
//                            width={40} height={40}
//                            className="rounded-lg"
//                        />
//                     </div>
//                 </div>

//                 <div className="flex flex-col justify-center items-center gap-6">
//                     <p className="text-white text-[28px] md:text-[32px] text-start ">{data?.name}</p>
//                     <Image src={blogposter} alt="" width={680} height={50} className="rounded-lg"/>
//                 </div>

//                 <div
//                     className="text-[18px] md:text-[20px]"
//                     dangerouslySetInnerHTML={{ __html: serializedContent }}
//                 />
//             </div>
//         );
//     } catch (error) {
//         return <div className="text-white text-xl md:hidden">explore customhooks...</div>;
//     }
// };

// export default BlogCard;
