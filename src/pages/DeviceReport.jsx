import { useNavigate } from "react-router-dom"
function DeviceReport() {
   const navigate = useNavigate()
  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Phiếu phản ánh thiết bị</h2>
      </div>

      <div className="bg-gray-100 rounded-xl p-6">
        <form>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">A. Thông tin cá nhân</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Họ tên</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="Nguyễn Văn A"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Số phòng</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="A101" readOnly />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">MSSV</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="2000000000"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Số điện thoại</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="0903000000" />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">B. Thông tin thiết bị</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Loại thiết bị</label>
                <select className="w-full px-4 py-2 bg-gray-200 rounded-md">
                  <option value="">Chọn loại thiết bị</option>
                  <option value="dien">Điện</option>
                  <option value="nuoc">Nước</option>
                  <option value="internet">Internet</option>
                  <option value="giuong">Giường</option>
                  <option value="tu">Tủ</option>
                  <option value="ban">Bàn</option>
                  <option value="ghe">Ghế</option>
                  <option value="quat">Quạt</option>
                  <option value="den">Đèn</option>
                  <option value="khac">Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Tình trạng thiết bị</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="Mô tả tình trạng thiết bị"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2">Cam kết thực hiện nội quy của ký túc xá</span>
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              onClick={() => navigate("/request-success")}
            >
              Gửi thông tin
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DeviceReport
