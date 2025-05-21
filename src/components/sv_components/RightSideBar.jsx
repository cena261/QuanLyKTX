function RightSideBar() {
  return (
    <aside className="w-[280px] border-l border-gray-200 p-4">
      <div className="mb-6">
        <div className="text-sm font-medium mb-2">Thông báo</div>
        <div className="space-y-2">
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="p-1 bg-gray-200 rounded-md mt-0.5"></div>
            <div>
              <div className="text-sm">Đã có hóa đơn tháng 3</div>
              <div className="text-xs text-gray-500">5 phút trước</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="p-1 bg-gray-200 rounded-md mt-0.5"></div>
            <div>
              <div className="text-sm">Lịch sửa chữa vào ngày 09/03</div>
              <div className="text-xs text-gray-500">1 tiếng trước</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="p-1 bg-gray-200 rounded-md mt-0.5"></div>
            <div>
              <div className="text-sm">Thay đổi nhân sự phòng A101</div>
              <div className="text-xs text-gray-500">1 tiếng trước</div>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2 rounded-xl">
            <div className="p-1 bg-gray-200 rounded-md mt-0.5"></div>
            <div>
              <div className="text-sm">Đã tiếp nhận phản ánh thiết bị</div>
              <div className="text-xs text-gray-500">2 tiếng trước</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default RightSideBar;
