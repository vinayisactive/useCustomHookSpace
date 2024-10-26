import React, { FC } from "react";
import CodeSnippet from "./code-snippet";
import { HookWithDescriptionInterface as HookWithDescriptionProps } from "@/interfaces/ts-interfaces";

const HookWithDescription: FC<HookWithDescriptionProps> = ({ hookname, description, code, demo = false, toUse,}) => {
  return (
    <div className="flex flex-col  items-center gap-14">
      <div className="flex flex-col gap-4 text-theme-green px-6 lg:px-0">
        <h1 className="text-2xl lg:text-4xl">
          {demo === true ? (
            <span>
              ▸Using <span className="text-theme-green"> {hookname} </span> customhook
            </span>
          ) : (
            `▸${hookname}`
          )}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-lg text-desc-gray"
        />
      </div>

      <CodeSnippet primaryLang={code} hookname={toUse ? toUse : hookname} />
    </div>
  );
};

export default HookWithDescription;
