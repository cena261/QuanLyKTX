import axios from "axios";

// Cấu hình mặc định cho Axios
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true; // Quan trọng cho CORS với credentials

// Interceptor cho request
axios.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage nếu có
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.access_token) {
      config.headers.Authorization = `Bearer ${user.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor cho response
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xử lý lỗi chung
    console.error("API error:", error);

    // Xử lý lỗi 401 Unauthorized
    if (error.response && error.response.status === 401) {
      // Có thể logout người dùng hoặc làm mới token
      localStorage.removeItem("user");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axios;
