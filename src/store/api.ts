import axios from "axios";
import { BASE_URL } from "./utills";

const api = axios.create({
  baseURL: BASE_URL,
});

// api.interceptors.request.use(
//   async (config) => {
//     const tokens = JSON.parse(localStorage.getItem("tokens"));
//     if (tokens) {
//       config.headers = {
//         ...config.headers,
//         Authorization: `Bearer ${tokens.access}`,
//       };
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;
