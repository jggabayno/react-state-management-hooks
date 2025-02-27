import { useReducer, useMemo } from "react";

import fieldReducer from "../reducers/field";

export default function useField(fields) {
  const [state, dispatch] = useReducer(fieldReducer, fields);

  return useMemo(() => [state, dispatch], [state, dispatch]);
}
