"use client";
import { Logo, HomeNav, TwitterNav, SearchButton, Search, Login, UserButton} from "../indexes/navbar-index";
import { SearchContextProvider } from "@/contexts/SearchContext";
import MaxWithWrapper from "../ui/max-width-wrapper";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [name, setName] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/api/auth/check-auth`);

        if (data.success) {
          setName(data.data.name);
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        setIsAuth(false);
      }
    };

    fetchUser();
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
          {isAuth && name ? <UserButton name={name} /> : <Login />}
        </div>

        <Search />
      </SearchContextProvider>
    </MaxWithWrapper>
  );
};

export default Navbar;
