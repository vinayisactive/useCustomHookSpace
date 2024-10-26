"use client";
import React, { useEffect, useState } from "react";
import {
  Logo,
  HomeNav,
  TwitterNav,
  SearchButton,
  Search,
  Login,
  Profile,
} from "../indexes/navbar-index";
import { SearchContextProvider } from "@/contexts/SearchContext/SearchContext";
import MaxWithWrapper from "../ui/max-width-wrapper";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    let isAuth: any = localStorage.getItem("isAuthenticated");
    isAuth = isAuth === "true";
    let userInfo: any = localStorage.getItem("userInfo");
    if (userInfo) setUserInfo(JSON.parse(userInfo));

    setIsAuthenticated(isAuth);
  }, []);

  return (
    <MaxWithWrapper className="h-[5vh] flex justify-between items-center text-white z-40 px-2 pt-8">
        <div className="w-1/3 flex justify-start">
          <Logo />
        </div>

        <div className="w-1/3 flex justify-center items-center gap-4 text-inactive-gray hover:text-white">
          <HomeNav />
          <TwitterNav />
        </div>

        <SearchContextProvider>
          <div className="w-1/3 flex justify-end items-cente gap-2">
            <SearchButton />
            {isAuthenticated ? <Profile userInfo={userInfo} /> : <Login />}
          </div>

          <Search />
        </SearchContextProvider>
    </MaxWithWrapper>
  );
};

export default Navbar;
