import React from "react";
import CodeSnippet from "@/app/component/CodeSnippet/CodeSnippet";

const page = async () => {
  const raw = await fetch("https://usecustomhookspace.vercel.app/api/hooks", {
    next: { revalidate: 7200 },
  });
  const fresh = await raw.json();
  const { primarylang, hookname, description } = fresh.data[0];

  return (
    <div className="w-full h-full text-white flex flex-col items-center gap-10 pt-14 overflow-y-scroll lg:pr-4">
      <div className="w-full flex flex-col gap-3 px-6 lg:px-0 text-white">
        <h1 className="text-4xl"> ▸ {hookname}</h1>
        <p className="text-lg text-[#8e8e8e]">{description}</p>
      </div>

      <CodeSnippet primaryLang={primarylang} hookname={hookname} />
    </div>
  );
};

export default page;
