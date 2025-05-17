import axios from "axios";

// Use import.meta.env for Vite or window.location for fallback
const API_URL = import.meta.env?.VITE_API_URL || "http://localhost:8080/api";

class NotificationService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
    });

    // Add request interceptor to add auth token
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData?.access_token) {
          config.headers.Authorization = `Bearer ${userData.access_token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor to handle errors
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          localStorage.removeItem("user");
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }
    );
  }

  // Get paginated notifications for admin
  async getNotifications(page = 0, size = 10, filters = {}) {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        size: size.toString(),
      });

      // Add filters to params
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });

      const response = await this.axiosInstance.get(`/notifications`, {
        params,
      });

      if (response.data.code === 0) {
        return response.data.result;
      } else {
        throw new Error(response.data.message || "Lỗi không xác định");
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
      throw new Error(
        error.response?.data?.message || "Không thể tải danh sách thông báo"
      );
    }
  }

  // Get notifications for current student
  async getMyNotifications() {
    try {
      const response = await this.axiosInstance.get(`/notifications/me`);
      if (response.data.code === 0) {
        return response.data.result;
      } else {
        throw new Error(response.data.message || "Lỗi không xác định");
      }
    } catch (error) {
      console.error("Error fetching my notifications:", error);
      throw new Error(
        error.response?.data?.message || "Không thể tải thông báo của bạn"
      );
    }
  }

  // Create new notification (admin only)
  async createNotification(notificationData) {
    try {
      const response = await this.axiosInstance.post(
        `/notifications`,
        notificationData
      );
      if (response.data.code === 0) {
        return response.data.result;
      } else {
        throw new Error(response.data.message || "Lỗi không xác định");
      }
    } catch (error) {
      console.error("Error creating notification:", error);
      throw new Error(
        error.response?.data?.message || "Không thể tạo thông báo"
      );
    }
  }

  // Mark notification as read
  async markAsRead(id) {
    try {
      const response = await this.axiosInstance.put(
        `/notifications/${id}/read`
      );
      if (response.data.code === 0) {
        return response.data.result;
      } else {
        throw new Error(response.data.message || "Lỗi không xác định");
      }
    } catch (error) {
      console.error(`Error marking notification ${id} as read:`, error);
      throw new Error(
        error.response?.data?.message || "Không thể đánh dấu thông báo đã đọc"
      );
    }
  }

  // Delete notification (admin only)
  async deleteNotification(id) {
    try {
      const response = await this.axiosInstance.delete(`/notifications/${id}`);
      if (response.data.code === 0) {
        return true;
      } else {
        throw new Error(response.data.message || "Lỗi không xác định");
      }
    } catch (error) {
      console.error(`Error deleting notification ${id}:`, error);
      throw new Error(
        error.response?.data?.message || "Không thể xóa thông báo"
      );
    }
  }
}

export default new NotificationService();
