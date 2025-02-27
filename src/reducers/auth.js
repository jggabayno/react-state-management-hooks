import {
  getToken,
  setToken,
  setUserId,
  setUser,
  setUserAccessId,
  clearSession,
} from "../utilities/storage";

// since we get the values by antd form, no need to use the email and password state to control the field.

export const initialState = {
  // email: "",
  // password: "",
  isLoading: false,
  error: "",
  isAuthenticated: getToken() !== null,
};

export default function loginReducer(state, action) {
  switch (action.type) {
    // case "FIELD": {
    //   return {
    //     ...state,
    //     [action.fieldName]: action.payload,
    //   };
    // }
    case "LOGIN": {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    }
    case "SUCCESS": {
      const { access_token, user } = action.payload;
      const { id, first_name, last_name, access_id } = user;
      setToken(access_token);
      setUserId(id);
      setUser(`${first_name} ${last_name}`);
      setUserAccessId(access_id);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };
    }
    case "ERROR": {
      return {
        ...state,
        error: "Incorrect username or password!",
        isLoading: false,
        // email: "",
        // password: "",
      };
    }
    case "LOGOUT": {
      clearSession();
      return {
        ...state,
        // email: "",
        // password: "",
        isAuthenticated: false,
      };
    }
    default:
      return state;
  }
}
