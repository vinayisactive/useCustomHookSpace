import React from "react";
import Background from "./Background/Background";
import HeaderText from "./HeaderText/HeaderText";


const HomeContainer = () => {
  return (
    <div className="w-[100%] h-[92vh] overflow-hidden relative flex flex-col justify-center items-center">
      <div className="z-10 w-full relative">
        <Background />
      </div>

      <div className="absolute top-0 inset-x-0 h-[70%] bg-gradient-to-b from-black via-via-dark to-end-dark z-30">
      </div>

      <div className="h-[50%] w-full absolute top-0 flex justify-start items-start pt-10 xl:pt-20 sm:justify-center z-40">
        <div className=" sm:w-[70%] lg:w-[60%] xl:w-[50%] lg:h-1/2 flex justify-center items-center">
          <HeaderText />
        </div>
      </div>

    </div>
  );
};

export default HomeContainer;