const to = sessionStorage;

export const setToken = (at) => to.setItem("token", at);
export const getToken = () => to.getItem("token");
export const deleteToken = () => to.removeItem("token");
export const sessionStatus = () => to.getItem("token") !== null;

export const setUserId = (at) => to.setItem("user-id", at);
export const getUserId = (at) => to.getItem("user-id", at);

export const setUserAccessId = (at) => to.setItem("user-access-id", at);
export const getUserAccessId = (at) => to.getItem("user-access-id", at);

export const setUser = (at) => to.setItem("user", at);
export const getUser = () => to.getItem("user");
export const clearSession = () => to.clear();

export const setUserAccessRoles = (at) => to.setItem("user-access-roles", at);
export const getUserAccessRoles = () => to.getItem("user-access-roles");
