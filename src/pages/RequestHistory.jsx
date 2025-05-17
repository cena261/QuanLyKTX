import { useState } from "react";

function RequestHistory() {
  const [filter, setFilter] = useState("all");
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const requestHistory = [
    {
      id: 1,
      date: "08/03/2025",
      type: "Đơn xin gia hạn",
      status: "approved",
      statusText: "đã được phê duyệt",
      message: "Bạn có thể tiếp tục sử dụng phòng theo thời gian gia hạn mới.",
    },
    {
      id: 2,
      date: "08/03/2025",
      type: "Phiếu yêu cầu sửa chữa cửa số",
      status: "processing",
      statusText: "đang được xem xét",
      message: "Ban quản lý đã tiếp nhận và sẽ bố trí nhân viên kiểm tra sớm nhất có thể.",
    },
    {
      id: 3,
      date: "08/03/2025",
      type: "Phiếu phản ánh vệ sinh khu vực hành lang tầng 1",
      status: "processing",
      statusText: "đang được xem xét",
      message: "Ban quản lý đã tiếp nhận và sẽ bố trí nhân viên kiểm tra sớm nhất có thể.",
    },
    {
      id: 4,
      date: "05/03/2025",
      type: "Đơn xin gia hạn",
      status: "rejected",
      statusText: "bị từ chối",
      message: "Lý do: Thông tin cá nhân của sinh viên bị sai.",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-500";
      case "processing":
        return "bg-orange-400";
      case "rejected":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getFilteredRequests = () => {
    if (filter === "all") return requestHistory;
    return requestHistory.filter((request) => request.status === filter);
  };

  const handleFilterClick = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const handleFilterSelect = (selectedFilter) => {
    setFilter(selectedFilter);
    setShowFilterOptions(false);
  };

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Lịch sử yêu cầu</h2>
      </div>

      <div className="mb-6 relative">
        <button onClick={handleFilterClick} className="px-4 py-2 border border-gray-300 rounded-md flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Lọc
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showFilterOptions && (
          <div className="absolute mt-1 w-48 bg-white rounded-md shadow-lg z-10">
            <div
              className="py-2 px-4 bg-green-500 text-white cursor-pointer hover:bg-green-600"
              onClick={() => handleFilterSelect("approved")}
            >
              Đã Xử Lý
            </div>
            <div
              className="py-2 px-4 bg-orange-400 text-white cursor-pointer hover:bg-orange-500"
              onClick={() => handleFilterSelect("processing")}
            >
              Đang Xử Lý
            </div>
            <div
              className="py-2 px-4 bg-red-500 text-white cursor-pointer hover:bg-red-600"
              onClick={() => handleFilterSelect("rejected")}
            >
              Bị Từ Chối
            </div>
            <div
              className="py-2 px-4 bg-gray-500 text-white cursor-pointer hover:bg-gray-600"
              onClick={() => handleFilterSelect("all")}
            >
              Tất Cả
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {getFilteredRequests().map((request) => (
          <div
            key={request.id}
            className={`p-4 rounded-md ${getStatusColor(request.status)}`}
          >
            <p className="font-medium">
              [{request.date}] {request.type} {request.statusText}.
            </p>
            <p>{request.message}</p>
          </div>
        ))}

        {getFilteredRequests().length === 0 && (
          <div className="p-4 bg-gray-100 rounded-md text-center">
            <p>Không có yêu cầu nào phù hợp với bộ lọc đã chọn.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestHistory;