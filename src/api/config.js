import axios from "axios";

export const baseURL = "http://backend-pms1.test";

// Public instance
export const axiosPublic = axios.create({
  baseURL,
  headers: { "X-Custom-Header": "foobar", "Content-Type": "application/json" },
});

// Private instance without default headers
export const axiosPrivate = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

// Add interceptor to dynamically add authToken
axiosPrivate.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Public instance for FormData
export const axiosPublicFormData = axios.create({
  baseURL,
  headers: {
    "X-Custom-Header": "foobar",
    "Content-Type": "multipart/form-data",
  },
});

// Private instance for FormData without default headers
export const axiosPrivateFormData = axios.create({
  baseURL,
  headers: { "Content-Type": "multipart/form-data" },
});

// Add interceptor for private FormData
axiosPrivateFormData.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
