export const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export default function fetch(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "ADD_REQUEST":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "ADD_FULFILLED":
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    case "ADD_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "UPDATE_REQUEST":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "UPDATE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.filter((row) => row.id !== action.payload.id),
          action.payload,
        ],
      };

    case "UPDATE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "DELETE_REQUEST":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "DELETE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((row) => row.id !== Number(action.payload)),
      };
    case "DELETE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error("store action must be defined");
  }
}
