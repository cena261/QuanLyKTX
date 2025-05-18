import axios from "./axios.config";

const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post("/api/auth/token", {
        username,
        password,
      });
      if (response.data.code === 0 && response.data.result.authenticated) {
        const token = response.data.result.token;
        const role = response.data.result.role;
        const userData = {
          access_token: token,
          username,
          role,
          isAdmin: role === "QuanTriVien",
        };
        localStorage.setItem("user", JSON.stringify(userData));
        return userData;
      }
      throw new Error("Authentication failed");
    } catch (error) {
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem("user");
  },
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
  isAuthenticated: () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return !!user?.access_token;
  },
  getAdminInfo: async (username) => {
    const res = await axios.get("/api/admin-accounts");
    if (res.data && Array.isArray(res.data.result)) {
      return res.data.result.find((acc) => acc.taiKhoan === username);
    }
    return null;
  },
};

export default authService;
