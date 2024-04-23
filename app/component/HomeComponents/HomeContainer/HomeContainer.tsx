import React from "react";
import Background from "./HomeBackground/Background";
import HeaderText from "./HomeHeaderText/HeaderText";
import BlogCard from "../BlogCard/BlogCard";
import { blog } from "@/static/blog";
import { ButtonArr, ButtonArrTwo } from "@/static/btns";
import GradientBar from "./HomeGradientBar/GradientBar";


const HomeContainer = () => {
  return (
    <div className="relative w-full h-[92vh] flex flex-col justify-center items-center overflow-hidden">
      
      <Background ButtonArr={ButtonArr} ButtonArrTwo={ButtonArrTwo} />
      <GradientBar />

      <div className="w-full md:w-[80%] lg:w-[800px] absolute top-0  z-30 mt-14">
          <HeaderText />
      </div>

      <div className="absolute bottom-56 sm:bottom-48 lg:bottom-28 z-20">
          <BlogCard blog={blog} />
      </div>
    </div>
  );
};

export default HomeContainer;
