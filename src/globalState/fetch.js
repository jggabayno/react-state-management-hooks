import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const FetchContext = createContext();

export function FetchProvider({ children }) {
  return (
    <FetchContext.Provider value={useFetch}>{children}</FetchContext.Provider>
  );
}
