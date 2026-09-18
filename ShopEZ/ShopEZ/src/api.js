import axios from "axios";

const API = axios.create({
 baseURL: "https://shopez-app.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

// Interceptor to automatically add JWT token to headers if available
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
