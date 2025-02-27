import { useReducer, useMemo } from "react";

export default function useSearch(initialState, valueToSearch) {
  function reducer(state, action) {
    const result = state.data.filter((row) => {
      function search(arg) {
        return (
          arg &&
          arg
            .toString()
            .toLowerCase()
            .includes(action.searchValue.toString().toLowerCase())
        );
      }

      return search(valueToSearch(row));
    });

    switch (action.type) {
      case "SEARCH":
        return {
          ...state,
          searchValue: action.searchValue.substr(0, 20),
          dataSearched: result,
        };

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return useMemo(() => [state, dispatch], [state, dispatch]);
}
