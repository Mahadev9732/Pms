export const isAuthenticate = () => {
  return Boolean(localStorage.getItem("JWT"));
};

export const getUserDetails = () => {
  return JSON.parse(localStorage.getItem("userDetails"));
};

export const setUserDetails = (userDetails) => {
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
};
export const setauthToken = (token) => {
  localStorage.setItem("authToken", token);
};
export const getauthToken = () => {
  return localStorage.getItem("authToken");
};

export const setUserRole = (userRole) => {
  localStorage.setItem("Role", userRole);
};
export const getRole = () => {
  const role = localStorage.getItem("Role");
  return role
    ? role.charAt(0).toUpperCase() + role.slice(1).toLowerCase()
    : null;
};
