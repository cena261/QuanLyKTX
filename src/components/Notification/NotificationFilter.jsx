"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";

const NotificationFilter = ({ onFilter, onSearch, onReset }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    sender: "",
    startDate: "",
    endDate: "",
    searchTerm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(filters.searchTerm);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({
      status: filters.status,
      sender: filters.sender,
      startDate: filters.startDate,
      endDate: filters.endDate,
    });
    setIsOpen(false);
  };

  const handleReset = () => {
    setFilters({
      status: "",
      sender: "",
      startDate: "",
      endDate: "",
      searchTerm: "",
    });
    onReset();
    setIsOpen(false);
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <input
              type="text"
              name="searchTerm"
              value={filters.searchTerm}
              onChange={handleChange}
              placeholder="Tìm kiếm theo tiêu đề hoặc nội dung..."
              className="w-full rounded-md border-gray-300 pl-10 pr-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-indigo-600 hover:text-indigo-800"
            >
              Tìm
            </button>
          </div>
        </form>

        {/* Filter Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Filter className="h-5 w-5 mr-2 text-gray-500" />
            Bộ lọc
          </button>

          {/* Filter Panel */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <div className="flex justify-between items-center p-3 border-b">
                <h3 className="text-lg font-medium">Lọc thông báo</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleFilter} className="p-4">
                <div className="space-y-4">
                  {/* Status Filter */}
                  <div>
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Trạng thái
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={filters.status}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option value="">Tất cả</option>
                      <option value="read">Đã đọc</option>
                      <option value="unread">Chưa đọc</option>
                    </select>
                  </div>

                  {/* Sender Filter */}
                  <div>
                    <label
                      htmlFor="sender"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Người gửi
                    </label>
                    <input
                      type="text"
                      id="sender"
                      name="sender"
                      value={filters.sender}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Nhập tên người gửi"
                    />
                  </div>

                  {/* Date Range */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label
                        htmlFor="startDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Từ ngày
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={filters.startDate}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="endDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Đến ngày
                      </label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={filters.endDate}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Đặt lại
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Áp dụng
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Active Filters */}
      {(filters.status ||
        filters.sender ||
        filters.startDate ||
        filters.endDate) && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-500">Bộ lọc đang áp dụng:</span>

          {filters.status && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              Trạng thái: {filters.status === "read" ? "Đã đọc" : "Chưa đọc"}
              <button
                onClick={() => {
                  setFilters((prev) => ({ ...prev, status: "" }));
                  onFilter({ ...filters, status: "" });
                }}
                className="ml-1 text-indigo-600 hover:text-indigo-800"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}

          {filters.sender && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              Người gửi: {filters.sender}
              <button
                onClick={() => {
                  setFilters((prev) => ({ ...prev, sender: "" }));
                  onFilter({ ...filters, sender: "" });
                }}
                className="ml-1 text-indigo-600 hover:text-indigo-800"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}

          {(filters.startDate || filters.endDate) && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              Thời gian: {filters.startDate || "Bất kỳ"} -{" "}
              {filters.endDate || "Bất kỳ"}
              <button
                onClick={() => {
                  setFilters((prev) => ({
                    ...prev,
                    startDate: "",
                    endDate: "",
                  }));
                  onFilter({ ...filters, startDate: "", endDate: "" });
                }}
                className="ml-1 text-indigo-600 hover:text-indigo-800"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}

          <button
            onClick={handleReset}
            className="text-sm text-indigo-600 hover:text-indigo-800"
          >
            Xóa tất cả
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationFilter;
