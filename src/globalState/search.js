import React, { createContext } from "react";

import useSearch from "../hooks/useSearch";

export const SearchContext = createContext();

// note: need to get the array of data using context and pass it into SearchContext as value data

export function SearchContext({ children }) {
  return (
    <SearchContext.Provider
      value={useSearch(
        {
          searchValue: "",
          dataSearched: [],
          // data:  array data here,
        }
        // (row) => row... || row... data might want to search
      )}
    >
      {children}
    </SearchContext.Provider>
  );
}
