import React, { createContext } from "react";
import useScroll from "../hooks/useScroll";

export const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  return (
    <ScrollContext.Provider value={useScroll}>
      {children}
    </ScrollContext.Provider>
  );
}
