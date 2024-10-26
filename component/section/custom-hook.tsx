import { FC } from "react";
import HookWithDescription from "../ui/hook-with-desc";
import { CustomHookInterface as CustomHookProps } from "@/interfaces/ts-interfaces";

const CustomHook: FC<CustomHookProps> = ({hookname, descOne, descTwo, code, toUseCode, toUse}) => {
  return (
    <div className="flex flex-col gap-14 scroll-smooth pb-14 md:pr-2">
      <HookWithDescription
        hookname={hookname}
        description={descOne}
        code={code}
      />
      <HookWithDescription
        demo={true}
        hookname={hookname}
        toUse={toUse}
        description={descTwo}
        code={toUseCode}
      />
    </div>
  );
};

export default CustomHook;
