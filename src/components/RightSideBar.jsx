function RightSideBar() {
  return (
    
    <aside className="w-[280px] border-l border-gray-200 p-4">
      <div className="mb-6">
        <div className="text-sm font-medium mb-2">Thông báo</div>
        <div className="space-y-2">
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="p-1 bg-gray-200 rounded-md mt-0.5">
            </div>
            <div>
              <div className="text-sm">Đã có hóa đơn tháng 3</div>
              <div className="text-xs text-gray-500">5 phút trước</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="p-1 bg-gray-200 rounded-md mt-0.5">
            </div>
            <div>
              <div className="text-sm">Lịch sửa chữa vào ngày 09/03</div>
              <div className="text-xs text-gray-500">1 tiếng trước</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="p-1 bg-gray-200 rounded-md mt-0.5">
            </div>
            <div>
              <div className="text-sm">Thay đổi nhân sự phòng A101</div>
              <div className="text-xs text-gray-500">1 tiếng trước</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="p-1 bg-gray-200 rounded-md mt-0.5">
            </div>
            <div>
              <div className="text-sm">Đã tiếp nhận phản ánh thiết bị</div>
              <div className="text-xs text-gray-500">2 tiếng trước</div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://huit.edu.vn/tin-tuc">
      <div className="mb-6">
        <div className="text-sm font-medium mb-2">Sự kiện</div>
        <div className="space-y-2">
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs">E</span>
            </div>
            <div>
              <div className="text-sm">LAN TỎA LỐI SỐNG XANH...</div>
              <div className="text-xs text-gray-500">1 phút trước</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs">E</span>
            </div>
            <div>
              <div className="text-sm">BÙNG CHÁY ĐAM MÊ THỂ...</div>
              <div className="text-xs text-gray-500">3 ngày trước</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs">E</span>
            </div>
            <div>
              <div className="text-sm">HIẾN MÁU TÌNH NGUYỆN...</div>
              <div className="text-xs text-gray-500">1 tuần trước</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs">E</span>
            </div>
            <div>
              <div className="text-sm">SINH VIÊN CHUNG TAY LÀM...</div>
              <div className="text-xs text-gray-500">1 tuần trước</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xs">E</span>
            </div>
            <div>
              <div className="text-sm">THAM QUAN KHÔNG GIAN...</div>
              <div className="text-xs text-gray-500">1 tuần trước</div>
            </div>
          </div>
        </div>
      </div>
      </a>

      <a href="https://huit.edu.vn/tin-tuc">
      <div>
        <div className="text-sm font-medium mb-2">Tin tức</div>
        <div className="space-y-2">
          <div className="p-2 rounded-xl">
            <div className="text-sm">Sức khỏe tinh thần & các mối quan hệ</div>
            <div className="text-xs text-gray-500">1 phút trước</div>
          </div>
          <div className="p-2 rounded-xl">
            <div className="text-sm">KẾT QUẢ VÒNG LOẠI CUỘC THI...</div>
            <div className="text-xs text-gray-500">3 ngày trước</div>
          </div>
          <div className="p-2 rounded-xl">
            <div className="text-sm">THƯ NGỎ..một giọt máu cho đi...</div>
            <div className="text-xs text-gray-500">1 tuần trước</div>
          </div>
          <div className="p-2 rounded-xl">
            <div className="text-sm">Đăng ký tình nguyện hỗ trợ kỳ thi...</div>
            <div className="text-xs text-gray-500">1 tuần trước</div>
          </div>
          <div className="p-2 rounded-xl">
            <div className="text-sm">Lấy ý kiến về Nội quy sinh viên...</div>
            <div className="text-xs text-gray-500">1 tuần trước</div>
          </div>
        </div>
      </div>
      </a>
    </aside>
  )
}
export default RightSideBar