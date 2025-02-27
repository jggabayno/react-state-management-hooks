import React, { cloneElement, memo } from "react";

import {
  AuthProvider,
  FetchProvider,
  ScrollProvider,
  // ToggleProvider,
} from "./index";

import ToggleProvider from "./toggle";

export default memo(function ContextProvider({ children }) {
  function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
      (kids, parent) =>
        cloneElement(parent, {
          children: kids,
        }),
      children
    );
  }

  return (
    <ProviderComposer
      contexts={[
        <FetchProvider />,
        <AuthProvider />,
        <ScrollProvider />,
        <ToggleProvider />,
      ]}
    >
      {children}
    </ProviderComposer>
  );
});
