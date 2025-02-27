import { useEffect, useReducer, useMemo } from "react";
import { getRequest } from "../utilities/api";
import reducer from "../reducers/fetch";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export default function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      dispatch({ type: "FETCH_INIT" });

      try {
        const response = await getRequest(url);
        const data = await response.data;

        if (mounted) dispatch({ type: "FETCH_FULFILLED", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_REJECTED" });
      }
    }

    fetchData();

    return () => (mounted = false);
  }, [url]);

  return useMemo(() => [state, dispatch], [state, dispatch]);
}
