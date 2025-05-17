function Notifications() {
  const notifications = [
    {
      id: 1,
      date: "08/03/2025",
      message: "Đã có hóa đơn tháng 3. Xin vui lòng thanh toán trước hạn.",
    },
    {
      id: 2,
      date: "08/03/2025",
      message: "Đã tiếp nhận yêu cầu. Lịch sửa chữa đã được sắp xếp vào ngày 09/03.",
    },
    {
      id: 3,
      date: "08/03/2025",
      message: "Thay đổi nhân sự phòng A101.",
    },
    {
      id: 4,
      date: "08/03/2025",
      message: "Đã tiếp nhận phản ánh thiết bị. Chúng tôi sẽ gửi phản hồi sớm nhất có thể.",
    },
    {
      id: 5,
      date: "08/03/2025",
      message: "Đơn xin gia hạn đã được phê duyệt.",
    },
    {
      id: 6,
      date: "08/03/2025",
      message: "Đơn xin gia hạn đã được gửi đi. Chúng tôi sẽ gửi phản hồi sớm nhất có thể.",
    },
  ]

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Thông báo</h2>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 bg-gray-100 rounded-md">
            <p className="font-medium">
              [{notification.date}] {notification.message}
            </p>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="p-4 bg-gray-100 rounded-md text-center">
            <p>Không có thông báo nào.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Notifications
