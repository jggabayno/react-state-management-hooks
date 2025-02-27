import React, { useReducer, createContext, useMemo } from "react";

import { initialState } from "../reducers/auth";
import reducer from "../reducers/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={useMemo(() => [state, dispatch], [state, dispatch])}
    >
      {children}
    </AuthContext.Provider>
  );
}
