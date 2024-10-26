import React from "react";

const HookError = ({ message }: { message: string }) => {
  return (
    <div className=" w-full h-full flex justify-center items-center text-3xl text-white">
      {message}
    </div>
  );
};

export default HookError;
