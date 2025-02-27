import React, { useState, createContext, useMemo, memo } from "react";

export const ToggleContext = createContext();

export default memo(function ToggleProvider({ children }) {
  const [isToggle, setToggle] = useState(false);

  return (
    <ToggleContext.Provider
      value={useMemo(() => [isToggle, setToggle], [isToggle, setToggle])}
    >
      {children}
    </ToggleContext.Provider>
  );
});
