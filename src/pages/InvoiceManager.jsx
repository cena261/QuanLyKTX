"use client";

import { useState, useEffect, useCallback } from "react";
import ManagerLayout from "../components/Layout/ManagerLayout.jsx";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  ArrowUpDown,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  MoreHorizontal,
  Download,
  Printer,
  Eye,
} from "lucide-react";

// Mock service - replace with your actual API service
const invoiceService = {
  getInvoices: async (params) => {
    // Simulate API call
    console.log("Fetching invoices with params:", params);
    return {
      content: [
        {
          id: 1,
          invoiceNumber: "INV-2023-001",
          studentName: "Nguyễn Văn A",
          roomNumber: "A101",
          amount: 1500000,
          status: "PAID",
          dueDate: "2023-05-15",
          createdDate: "2023-05-01",
        },
        {
          id: 2,
          invoiceNumber: "INV-2023-002",
          studentName: "Trần Thị B",
          roomNumber: "B205",
          amount: 1500000,
          status: "PENDING",
          dueDate: "2023-05-15",
          createdDate: "2023-05-01",
        },
        {
          id: 3,
          invoiceNumber: "INV-2023-003",
          studentName: "Lê Văn C",
          roomNumber: "C310",
          amount: 1500000,
          status: "OVERDUE",
          dueDate: "2023-04-15",
          createdDate: "2023-04-01",
        },
        {
          id: 4,
          invoiceNumber: "INV-2023-004",
          studentName: "Phạm Thị D",
          roomNumber: "A102",
          amount: 1500000,
          status: "PAID",
          dueDate: "2023-05-15",
          createdDate: "2023-05-01",
        },
        {
          id: 5,
          invoiceNumber: "INV-2023-005",
          studentName: "Hoàng Văn E",
          roomNumber: "B210",
          amount: 1500000,
          status: "PENDING",
          dueDate: "2023-05-15",
          createdDate: "2023-05-01",
        },
      ],
      totalElements: 25,
      totalPages: 5,
      size: 5,
      number: 0,
    };
  },
  updateInvoiceStatus: async (id, status) => {
    console.log(`Updating invoice ${id} status to ${status}`);
    return { success: true };
  },
};

function InvoiceManager() {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [studentIdMap, setStudentIdMap] = useState(new Map());

  // Pagination state
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  // Filter and sort state
  const [filters, setFilters] = useState({
    status: "",
    searchTerm: "",
  });
  const [sortBy, setSortBy] = useState("createdDate");
  const [sortDirection, setSortDirection] = useState("desc");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Notification state
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isActionLoading, setIsActionLoading] = useState(false);

  // Add debounce effect for search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(filters.searchTerm);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [filters.searchTerm]);

  // Memoize fetchInvoices function with useCallback
  const fetchInvoices = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      const token = userData?.access_token;

      if (!token) {
        throw new Error("No token found");
      }

      // Build query parameters
      const queryParams = new URLSearchParams();

      // Add pagination parameters
      queryParams.append("page", page);
      queryParams.append("size", size);

      // Add filter parameters if they exist
      if (filters.status) {
        queryParams.append("trangThai", filters.status);
      }
      if (filters.searchTerm) {
        queryParams.append("search", filters.searchTerm);
      }

      // Add sort parameters
      if (sortBy) {
        queryParams.append("sortBy", sortBy);
        queryParams.append("sortDirection", sortDirection);
      }

      const response = await fetch(
        `http://localhost:8080/api/invoices?${queryParams.toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        logout();
        navigate("/login");
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `Failed to fetch invoices: ${response.status}`
        );
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data.code === 0 && data.result) {
        const invoiceList = data.result.content || [];
        setInvoices(invoiceList);
        setTotalPages(data.result.totalPages || 0);
        setTotalElements(data.result.totalElements || 0);

        // Fetch student IDs after getting invoices
        await fetchStudentIds(invoiceList);
      } else {
        setInvoices([]);
        setTotalPages(0);
        setTotalElements(0);
        throw new Error(data.message || "Failed to fetch invoices");
      }
    } catch (err) {
      console.error("Error fetching invoices:", err);
      setError(
        err.message || "Không thể tải danh sách hóa đơn. Vui lòng thử lại sau."
      );
      setInvoices([]);
      setTotalPages(0);
      setTotalElements(0);
    } finally {
      setLoading(false);
    }
  }, [
    page,
    size,
    filters.status,
    filters.searchTerm,
    sortBy,
    sortDirection,
    logout,
    navigate,
  ]);

  // Separate useEffect for initial data fetch
  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  // Handle search with debounce
  const handleSearchChange = (e) => {
    const searchValue = e.target.value;

    // Clear any existing timeout
    if (window.searchTimeout) {
      clearTimeout(window.searchTimeout);
    }

    // Set a new timeout to update the search term after 500ms
    window.searchTimeout = setTimeout(() => {
      setPage(0); // Reset to first page when searching
      setFilters((prev) => ({
        ...prev,
        searchTerm: searchValue,
      }));
    }, 500);
  };

  useEffect(() => {
    if (!isAdmin) {
      logout();
      navigate("/login");
    }
  }, [isAdmin, logout, navigate]);

  const fetchStudentIds = async (invoices) => {
    const newStudentIdMap = new Map();

    for (const invoice of invoices) {
      if (!invoice.maHopDong) continue;

      try {
        const userData = JSON.parse(localStorage.getItem("user"));
        const token = userData?.access_token;

        if (!token) {
          throw new Error("No token found");
        }

        const response = await fetch(
          `http://localhost:8080/api/contracts/${invoice.maHopDong}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.error(
            `Failed to fetch contract for ${invoice.maHopDong}: ${response.status}`
          );
          continue;
        }

        const data = await response.json();
        if (data.code === 0 && data.result) {
          newStudentIdMap.set(invoice.maHopDong, data.result.maSV);
        }
      } catch (err) {
        console.error(`Error fetching contract for ${invoice.maHopDong}:`, err);
      }
    }

    setStudentIdMap(newStudentIdMap);
  };

  const handleFilterChange = (e) => {
    setPage(0); // Reset to first page when filtering
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    setIsActionLoading(true);
    try {
      const userData = JSON.parse(localStorage.getItem("user"));
      const token = userData?.access_token;

      const response = await fetch(
        `http://localhost:8080/api/invoices/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Lỗi không xác định");
      }

      // Refresh danh sách hóa đơn
      await fetchInvoices();

      setShowSuccessNotification(true);
      setNotificationMessage("Cập nhật trạng thái hóa đơn thành công!");
      setTimeout(() => {
        setShowSuccessNotification(false);
        setNotificationMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error updating invoice status:", err);
      setShowErrorNotification(true);
      setNotificationMessage(
        err.message || "Không thể cập nhật trạng thái hóa đơn"
      );
      setTimeout(() => {
        setShowErrorNotification(false);
        setNotificationMessage("");
      }, 3000);
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleViewDetails = (invoice) => {
    setSelectedInvoice(invoice);
    setShowDetailModal(true);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "DaThanhToan":
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 flex items-center">
            <CheckCircle className="w-3 h-3 mr-1" />
            Đã thanh toán
          </span>
        );
      case "ChuaThanhToan":
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            Chờ thanh toán
          </span>
        );
      case "QuaHan":
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 flex items-center">
            <XCircle className="w-3 h-3 mr-1" />
            Quá hạn
          </span>
        );
      default:
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {status}
          </span>
        );
    }
  };

  const getInvoiceType = (type) => {
    switch (type) {
      case "TienPhong":
        return "Tiền phòng";
      case "TienDienNuoc":
        return "Tiền điện nước";
      case "TongHop":
        return "Tổng hợp";
      case "Khac":
        return "Khác";
      default:
        return type;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("vi-VN");
  };

  return (
    <ManagerLayout>
      <div className="p-4">
        {/* Success notification */}
        {showSuccessNotification && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            {notificationMessage}
          </div>
        )}

        {/* Error notification */}
        {showErrorNotification && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
            <XCircle className="w-5 h-5 mr-2" />
            {notificationMessage}
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl font-bold text-primary mb-4 md:mb-0">
            Quản lý hóa đơn
          </h1>
          <button className="mt-2 md:mt-0 bg-primary text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 cursor-pointer">
            <FileText className="w-4 h-4 mr-2" />
            Tạo hóa đơn mới
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Tìm kiếm theo mã hóa đơn, mã sinh viên"
                className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                onChange={handleSearchChange}
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
            <div className="relative">
              <select
                className="h-10 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white cursor-pointer"
                value={filters.status}
                onChange={handleFilterChange}
                name="status"
              >
                <option value="">Tất cả trạng thái</option>
                <option value="DaThanhToan">Đã thanh toán</option>
                <option value="ChuaThanhToan">Chờ thanh toán</option>
                <option value="QuaHan">Quá hạn</option>
              </select>
              <Filter
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th
                    className="py-3 px-4 text-left cursor-pointer"
                    onClick={() => handleSort("maHoaDon")}
                  >
                    <div className="flex items-center">Mã hóa đơn</div>
                  </th>
                  <th
                    className="py-3 px-4 text-left cursor-pointer"
                    onClick={() => handleSort("loaiHoaDon")}
                  >
                    <div className="flex items-center">Loại hóa đơn</div>
                  </th>
                  <th
                    className="py-3 px-4 text-left cursor-pointer"
                    onClick={() => handleSort("maSV")}
                  >
                    <div className="flex items-center">Mã sinh viên</div>
                  </th>
                  <th
                    className="py-3 px-4 text-left cursor-pointer"
                    onClick={() => handleSort("soTien")}
                  >
                    <div className="flex items-center">Số tiền</div>
                  </th>
                  <th
                    className="py-3 px-4 text-left cursor-pointer"
                    onClick={() => handleSort("hanThanhToan")}
                  >
                    <div className="flex items-center">Hạn thanh toán</div>
                  </th>
                  <th
                    className="py-3 px-4 text-left cursor-pointer"
                    onClick={() => handleSort("trangThai")}
                  >
                    <div className="flex items-center">Trạng thái</div>
                  </th>
                  <th className="py-3 px-4 text-center">Thao tác</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="py-6 text-center">
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                      </div>
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="7" className="py-6 text-center text-red-500">
                      {error}
                    </td>
                  </tr>
                ) : invoices.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="py-6 text-center text-gray-500">
                      Không có hóa đơn nào
                    </td>
                  </tr>
                ) : (
                  invoices.map((invoice) => (
                    <tr
                      key={invoice.maHoaDon}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-medium">
                        {invoice.maHoaDon}
                      </td>
                      <td className="py-3 px-4">
                        {getInvoiceType(invoice.loaiHoaDon)}
                      </td>
                      <td className="py-3 px-4">
                        {studentIdMap.get(invoice.maHopDong) || "N/A"}
                      </td>
                      <td className="py-3 px-4">
                        {formatCurrency(invoice.soTien)}
                      </td>
                      <td className="py-3 px-4">
                        {formatDate(invoice.hanThanhToan)}
                      </td>
                      <td className="py-3 px-4">
                        {getStatusBadge(invoice.trangThai)}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex justify-center items-center gap-2">
                          <button
                            onClick={() => handleViewDetails(invoice)}
                            className="text-blue-600 hover:text-blue-900 cursor-pointer"
                            title="Xem chi tiết"
                          >
                            <Eye size={18} />
                          </button>
                          <div className="relative group">
                            <button className="text-gray-500 hover:text-gray-700">
                              <MoreHorizontal size={18} />
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                              <button
                                onClick={() =>
                                  handleStatusUpdate(
                                    invoice.maHoaDon,
                                    "DaThanhToan"
                                  )
                                }
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                disabled={invoice.trangThai === "DaThanhToan"}
                              >
                                Đánh dấu đã thanh toán
                              </button>
                              <button
                                onClick={() =>
                                  handleStatusUpdate(
                                    invoice.maHoaDon,
                                    "ChuaThanhToan"
                                  )
                                }
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                disabled={invoice.trangThai === "ChuaThanhToan"}
                              >
                                Đánh dấu chờ thanh toán
                              </button>
                              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center">
                                <Download className="h-4 w-4 mr-2" />
                                Tải xuống PDF
                              </button>
                              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center">
                                <Printer className="h-4 w-4 mr-2" />
                                In hóa đơn
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {invoices.length > 0 && (
            <div className="flex justify-between items-center mt-6">
              <div className="text-sm text-gray-500">
                Hiển thị {page * size + 1} đến{" "}
                {Math.min((page + 1) * size, totalElements)} trong tổng số{" "}
                {totalElements} hóa đơn
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                  disabled={page === 0}
                  className={`px-3 py-1 rounded ${
                    page === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Trước
                </button>
                {Array.from({ length: totalPages }, (_, i) => i).map(
                  (pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`px-3 py-1 rounded ${
                        page === pageNum
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {pageNum + 1}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages - 1))
                  }
                  disabled={page >= totalPages - 1}
                  className={`px-3 py-1 rounded ${
                    page >= totalPages - 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Sau
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Add loading overlay for actions */}
        {isActionLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
      </div>

      {/* Invoice Detail Modal */}
      {showDetailModal && selectedInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Chi tiết hóa đơn</h2>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Mã hóa đơn
                  </h3>
                  <p className="text-lg font-semibold">
                    {selectedInvoice.maHoaDon}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Trạng thái
                  </h3>
                  <div>{getStatusBadge(selectedInvoice.trangThai)}</div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Sinh viên
                  </h3>
                  <p>{selectedInvoice.studentName}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Phòng
                  </h3>
                  <p>{selectedInvoice.maPhong}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Ngày tạo
                  </h3>
                  <p>{formatDate(selectedInvoice.createdDate)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">
                    Hạn thanh toán
                  </h3>
                  <p>{formatDate(selectedInvoice.hanThanhToan)}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Chi tiết thanh toán
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tiền phòng</span>
                    <span>{formatCurrency(1200000)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tiền điện</span>
                    <span>{formatCurrency(200000)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tiền nước</span>
                    <span>{formatCurrency(100000)}</span>
                  </div>
                  <div className="border-t border-gray-300 my-2"></div>
                  <div className="flex justify-between font-bold">
                    <span>Tổng cộng</span>
                    <span>{formatCurrency(selectedInvoice.soTien)}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Đóng
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center">
                  <Printer className="w-4 h-4 mr-2" />
                  In hóa đơn
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Tải xuống PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </ManagerLayout>
  );
}

export default InvoiceManager;
