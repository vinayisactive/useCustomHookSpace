import React from "react";
import parseAndSerialize from "@/helper/parseAndSerialize";
import CustomHook from "@/component/section/custom-hook";
import HookError from "@/component/ui/hook-error";
import { hooks } from "@/static/index";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  return {
    title: params?.slug,
  };
};

export const generateStaticParams = () => {
  return hooks.map((slug: string) => {
    return { slug };
  });
};

const page = async ({ params }: { params: { slug: string } }) => {
  try {
    const raw = await fetch(`https://usecustomhookspace.vercel.app/api/hook/${params.slug}`);
    const data = await raw.json();
    const hook = await data?.hook;

    if (!hook) {
      return <HookError message={"Hook not found"} />;
    }

    const { hookname, code, description, toUseDescription, toUse, toUseCode } = hook;

    const serializedDescriptionOne = parseAndSerialize(description);
    const serializedDescriptionTwo = parseAndSerialize(toUseDescription);

    return (
      <CustomHook
        hookname={hookname}
        descOne={serializedDescriptionOne}
        code={code}
        toUse={toUse}
        descTwo={serializedDescriptionTwo}
        toUseCode={toUseCode}
      />
    );
  } catch (err: any) {
    return <HookError message={err.message} />;
  }
};

export default page;
