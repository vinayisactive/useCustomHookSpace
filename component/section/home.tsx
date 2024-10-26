import React from "react";
import { ButtonArr, ButtonArrTwo, blog } from "@/static/index";
import {
  HomeBackground,
  HeaderText,
  BlogCard,
  GradientBar,
} from "../indexes/home-index";

const Home = () => {
  return (
    <div className="w-screen h-[95vh] flex flex-col justify-center items-center overflow-hidden">
      <HomeBackground ButtonArr={ButtonArr} ButtonArrTwo={ButtonArrTwo} />
      <GradientBar />

      <div className="w-full md:w-[80%] lg:w-[800px] absolute top-0 z-30 mt-20">
        <HeaderText />
      </div>

      <div className="absolute bottom-56 sm:bottom-48 lg:bottom-28 z-30">
        <BlogCard blog={blog} />
      </div>
    </div>
  );
};

export default Home;
