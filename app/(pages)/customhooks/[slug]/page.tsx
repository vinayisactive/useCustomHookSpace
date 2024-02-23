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
    const {
      hookname,
      primarylang,
      description,
      toUseDescription,
      toUse,
      toUseCode,
    } = data;

    


    const parsedDescriptionOne = parse(description);
    const serializedDescriptionOne = serialize(parsedDescriptionOne);

    const parsedDescriptionTwo = parse(toUseDescription);
    const serializedDescriptionTwo = serialize(parsedDescriptionTwo);

    return (
      <div className="w-full h-full text-white flex flex-col items-center gap-14 pt-14 overflow-y-scroll lg:pr-4 scroll-smooth pb-14">
        <div className="w-full flex flex-col gap-4 px-6 lg:px-0 text-white">
          <h1 className="text-4xl"> ▸{hookname}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: serializedDescriptionOne }}
            className="text-lg text-[#8e8e8e]"
          />
        </div>

        <CodeSnippet primaryLang={primarylang} hookname={hookname} />

        {toUse === "" 
        ? (<div></div>) 
        : (<div className="w-full flex flex-col gap-4 px-6 lg:px-0 text-white">
            <h1 className="text-4xl">▸Using <span className="text-[#62F983]"> {hookname} </span>customhook</h1>
            <div
              dangerouslySetInnerHTML={{ __html: serializedDescriptionTwo }}
              className="text-lg text-[#8e8e8e]"
           />
          </div>
         )}

        {toUse === "" ? (<div></div>) : (<CodeSnippet primaryLang={toUseCode} hookname={toUse} />)}
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
