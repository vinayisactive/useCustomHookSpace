import React from "react";
import parseAndSerialize from "@/helpers/parseAndSerialize";
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
    const raw = await fetch(`${process.env.UCHS_URL}${params.slug}`);
    const response = await raw.json();

    if (!response?.data) {
      return <HookError message={"Hook not found"} />;
    }

    const { hookname, code, description, toUse, toUseDescription, toUseCode } = response?.data;

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
