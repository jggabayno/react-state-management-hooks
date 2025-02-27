import React, { createContext } from "react";
import useField from "../hooks/useField";

export const FieldContext = createContext();

export function FieldProvider({ children }) {
  return (
    <FieldContext.Provider value={useField}>{children}</FieldContext.Provider>
  );
}
