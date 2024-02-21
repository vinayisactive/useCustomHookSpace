import React from "react";
import CodeSnippet from "@/app/component/CodeSnippet/CodeSnippet";
import { parse, serialize } from "parse5";

const page = async ({ params }: { params: { slug: string } }) => {
  try {
    const raw = await fetch("https://usecustomhookspace.vercel.app/api/hook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hookname: params?.slug }),
      next: { revalidate: 0 },
    });

    if (!raw.ok) {
      throw new Error(`Failed to fetch hook: ${raw.statusText}`); 
    }

    const jsonData = await raw.json();
    const data = jsonData?.hook;
    const { description } = data;

    const parsedHTML = parse(description);
    const serializedHTML = serialize(parsedHTML);

    return (
      <div className="w-full h-full text-white flex flex-col items-center gap-10 pt-14 overflow-y-scroll lg:pr-4 scroll-smooth pb-14">
        <div className="w-full flex flex-col gap-3 px-6 lg:px-0 text-white">
          <h1 className="text-4xl"> ▸{data?.hookname}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: serializedHTML }}
            className="text-lg text-[#8e8e8e]"
          />
        </div>

        <CodeSnippet
          primaryLang={data?.primarylang}
          hookname={data?.hookname}
        />
      </div>
    );
  } catch (err) {
    console.log(err);
    return (
      <div className=" w-full h-full flex justify-center items-center text-3xl text-white">
        Oops! maybe your internet..
      </div>
    );
  }
};

export default page;
