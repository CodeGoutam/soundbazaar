import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1000/api",
});

http.interceptors.request.use((config) => {
  const token = document.cookie.match(/token=([^;]+)/)?.[1];
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      document.cookie = "token=; Max-Age=0; path=/";
      window.location.href = "/hi/signin";
    }
    return Promise.reject(err);
  },
);
