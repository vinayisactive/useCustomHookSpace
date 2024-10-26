"use client"
import React, { createContext, useState } from "react";

const SearchContext = createContext(undefined);

const SearchContextProvider = ({ children }) => {
    const [searchActive, setSearch] = useState(false);

    return (
        <SearchContext.Provider value={{ searchActive, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

export { SearchContext, SearchContextProvider };


