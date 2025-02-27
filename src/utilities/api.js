import axios from "axios";
import { getToken } from "./storage";

const url = process.env.REACT_APP_API_URL;

const req = {
  headers: {
    Authorization: `Bearer ${getToken()}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const loginRequest = (ep, val) => axios.post(url + ep, val);
export const getRequest = (ep) => axios.get(url + ep, req);
export const postRequest = (ep, d) => axios.post(url + ep, d, req);
export const updateRequest = (ep, d) => axios.put(url + ep, d, req);
export const deleteRequest = (ep, d) => axios.post(url + ep, d, req);
export const logoutRequest = (ep, d) => axios.put(url + ep, d, req);
