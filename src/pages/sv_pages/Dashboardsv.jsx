import RightSidebar from "@/components/sv_components/RightSideBar";

function Dashboardsv() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-1">
        <main className="flex-1 p-6">
          {/* Student Information */}
          <div className="bg-gray-100 rounded-3xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">THÔNG TIN SINH VIÊN</h2>
            <div className="flex">
              <div className="mr-12">
                <div className="w-[120px] h-[120px] bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src="/student-photo.jpg"
                    alt="Student Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <div>
                  <span className="font-bold">MSSV: </span>
                  <span>2000000000</span>
                </div>
                <div>
                  <span className="font-bold">Lớp: </span>
                  <span>14DHTH11</span>
                </div>
                <div>
                  <span className="font-bold">Họ tên: </span>
                  <span>Nguyễn Văn A</span>
                </div>
                <div>
                  <span className="font-bold">Khóa học: </span>
                  <span>2023</span>
                </div>
                <div>
                  <span className="font-bold">Giới tính: </span>
                  <span>Nam</span>
                </div>
                <div>
                  <span className="font-bold">Ngành: </span>
                  <span>Công nghệ thông tin</span>
                </div>
                <div>
                  <span className="font-bold">Ngày sinh: </span>
                  <span>01/01/2005</span>
                </div>
                <div>
                  <span className="font-bold">Phòng: </span>
                  <span>A101</span>
                </div>
                <div>
                  <span className="font-bold">Nơi sinh: </span>
                  <span>TP.Hồ Chí Minh</span>
                </div>
                <div>
                  <span className="font-bold">Trạng thái hợp đồng: </span>
                  <span>Còn hạn</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="font-semibold">Tổng quan</div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Invoice Notifications */}
            <div className="bg-gray-100 rounded-3xl p-6">
              <h3 className="font-bold mb-4">Thông báo hóa đơn</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm">Đã có hóa đơn tháng 3</div>
                  <div className="text-xs text-gray-500">1 phút trước</div>
                </div>
                <div>
                  <div className="text-sm">
                    Đơn gia hạn hợp đồng đã được phê duyệt
                  </div>
                  <div className="text-xs text-gray-500">3 ngày trước</div>
                </div>
                <div>
                  <div className="text-sm">
                    Đã gửi phiếu đăng ký gia hạn hợp đồng
                  </div>
                  <div className="text-xs text-gray-500">1 tuần trước</div>
                </div>
                <div>
                  <div className="text-sm">Đã thanh toán hóa đơn tháng 2</div>
                  <div className="text-xs text-gray-500">3 tuần trước</div>
                </div>
                <div>
                  <div className="text-sm">Đã có hóa đơn tháng 2</div>
                  <div className="text-xs text-gray-500">1 tháng trước</div>
                </div>
              </div>
            </div>

            {/* Requests & Feedback */}
            <div className="bg-gray-100 rounded-3xl p-6">
              <h3 className="font-bold mb-4">Yêu cầu & Phản hồi</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm">Lịch sửa chữa vào ngày 20/3</div>
                  <div className="text-xs text-gray-500">1 tiếng trước</div>
                </div>
                <div>
                  <div className="text-sm">Đã tiếp nhận phản ánh thiết bị</div>
                  <div className="text-xs text-gray-500">2 tiếng trước</div>
                </div>
                <div>
                  <div className="text-sm">Đã gửi phiếu phản ánh thiết bị</div>
                  <div className="text-xs text-gray-500">2 tiếng trước</div>
                </div>
                <div>
                  <div className="text-sm">
                    Đã tiếp nhận phản ánh trực tuyến
                  </div>
                  <div className="text-xs text-gray-500">2 tháng trước</div>
                </div>
                <div>
                  <div className="text-sm">
                    Đã gửi phiếu phản ánh trực tuyến
                  </div>
                  <div className="text-xs text-gray-500">2 tháng trước</div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}

export default Dashboardsv;
