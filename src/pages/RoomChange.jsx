import { useNavigate } from "react-router-dom"
function RoomChangeRequest() {
  const navigate = useNavigate()
  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Phiếu đăng ký chuyển phòng</h2>
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
                <label className="block text-gray-700 mb-2">MSSV</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="2000000000"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Khoa</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="Công nghệ thông tin"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Ngày sinh</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="01/01/2005"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Số điện thoại</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="0903000000" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Nơi sinh</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="TP Hồ Chí Minh"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="duc00@gmail.com" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Giấy tờ liên quan</label>
                <input type="file" className="w-full px-4 py-2 bg-gray-200 rounded-md" 
                accept=".pdf, .doc, .docx, .jpg, .png"/>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">B. Thông tin phòng hiện tại</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Mã hợp đồng</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="HD001" readOnly />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mã số phòng</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="RA101" readOnly />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Số phòng hiện tại</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="A101" readOnly />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Thời gian bắt đầu hợp đồng</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="08/01/2025"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Thời gian kết thúc hợp đồng</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="08/07/2025"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">C. Thông tin phòng muốn chuyển</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Loại phòng</label>
                <select className="w-full px-4 py-2 bg-gray-200 rounded-md">
                  <option value="">Chọn loại phòng</option>
                  <option value="4">Phòng 4 người</option>
                  <option value="6">Phòng 6 người</option>
                  <option value="8">Phòng 8 người</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Số phòng</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="Nhập số phòng" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Thời gian chuyển</label>
                <input type="date" className="w-full px-4 py-2 bg-gray-200 rounded-md" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Lý do muốn chuyển</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="Nhập lý do chuyển phòng"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2">Cam kết hiểu thực nội quy của ký túc xá</span>
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

export default RoomChangeRequest
