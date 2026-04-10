import axios from "axios";

const PUBLIC_API = axios.create({
  baseURL: "https://cartridges-wireless-kenny-calvin.trycloudflare.com", 
});

PUBLIC_API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default PUBLIC_API;