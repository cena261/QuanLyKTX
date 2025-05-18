import { useNavigate } from "react-router-dom"
function Report() {
  const navigate = useNavigate()
  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Phiếu phản ánh tình hình</h2>
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
            <h3 className="text-xl font-bold mb-4">B. Thông tin phản ánh</h3>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Tiêu đề</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-200 rounded-md"
                placeholder="Nhập tiêu đề phản ánh"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Mô tả chi tiết tình hình</label>
              <textarea
                className="w-full px-4 py-2 bg-gray-200 rounded-md"
                rows="6"
                placeholder="Mô tả chi tiết vấn đề bạn muốn phản ánh"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Hình ảnh liên quan</label>
                <input
                    type="file"
                    className="w-full px-4 py-2 bg-gray-200 rounded-md"
                    accept=".jpg, .png, .mp4, .mp3"/>
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
              onClick={() => {
                navigate("/request-success")
              }}
            >
              Gửi thông tin
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Report
