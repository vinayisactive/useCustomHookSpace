import React from "react";
import CodeSnippet from "@/app/component/CodeSnippet/CodeSnippet";
import { parse, serialize } from "parse5";

const page = async ({ params }: { params: { slug: any } }) => {
  try {    
    const raw = await fetch("https://usecustomhookspace.vercel.app/api/hook", {  
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hookname: params?.slug }),  
      next: { revalidate: 7200 },
    });

    if (!raw.ok) { 
      throw new Error(`Failed to fetch hook: ${raw.statusText}`);
    }

    const jsonData = await raw.json();
    const data = jsonData?.hook;
    const { hookname, primarylang, description, toUseDescription, toUse, toUseCode } = data;

    
    const parsedDescriptionOne = parse(description);
    const serializedDescriptionOne = serialize(parsedDescriptionOne);

    const parsedDescriptionTwo = parse(toUseDescription);
    const serializedDescriptionTwo = serialize(parsedDescriptionTwo);

    return (
      <div className="w-full h-full  flex flex-col items-center gap-14 overflow-y-scroll scroll-smooth text-white  pb-14 pt-6 lg:pr-4 ">
        <div className="w-full flex flex-col gap-4 text-theme-green px-6 lg:px-0">
          <h1 className="text-4xl"> ▸{hookname}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: serializedDescriptionOne }}
            className="text-lg text-desc-gray"
          />
        </div>

        <CodeSnippet primaryLang={primarylang} hookname={hookname} />

        {toUseDescription &&
         <div className="w-full flex flex-col gap-4 text-  px-6 lg:px-0">
            <h1 className="text-4xl">▸Using <span className="text-theme-green"> {hookname} </span>customhook</h1>
            <div
              dangerouslySetInnerHTML={{ __html: serializedDescriptionTwo }}
              className="text-lg text-desc-gray"
           />
          </div>
         }

        {toUseCode && <CodeSnippet primaryLang={toUseCode} hookname={toUse} />}
      </div>
    );

  } catch (err) {
    console.log(err);
    return (
      <div className=" w-full h-full flex justify-center items-center text-3xl text-white">
        {params.slug} hook is coming soon...
      </div>
    );
  }
};

export default page;
