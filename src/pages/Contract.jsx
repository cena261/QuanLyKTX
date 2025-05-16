function ContractExtension() {
  return (
    <div className="flex-1 pt-[85px] p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Thông tin hợp đồng</h2>
        <div className="h-[1px] bg-gray-300 mt-2"></div>
      </div>

      <div className="bg-gray-100 rounded-xl p-6 mb-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-[150px] h-[150px] relative mx-auto md:mx-0 mb-6 md:mb-0 md:mr-8">
            <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
              <img src="/profile-silhouette.jpg" alt="Student profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            <div>
              <InfoItem label="Mã hợp đồng" value="HD001" />
              <InfoItem label="MSSV" value="2000000000" />
              <InfoItem label="Họ tên" value="Nguyễn Văn A" />
              <InfoItem label="Giới tính" value="Nam" />
              <InfoItem label="Ngày sinh" value="01/01/2005" />
              <InfoItem label="Nơi sinh" value="TP Hồ Chí Minh" />
              <InfoItem label="Số điện thoại" value="0903000000" />
              <InfoItem label="Email" value="duc00@gmail.com" />
              <InfoItem label="Ngày hết hạn" value="08/07/2025" />
            </div>

            <div>
              <InfoItem label="Mã phòng" value="RA101" />
              <InfoItem label="Lớp" value="14DHTH11" />
              <InfoItem label="Khóa học" value="2023" />
              <InfoItem label="Ngành" value="Công nghệ thông tin" />
              <InfoItem label="Phòng" value="A101" />
              <InfoItem label="Ngày bắt đầu thuê phòng" value="30/08/2023" />
              <InfoItem label="Mức phí thuê" value="6 tháng" />
              <InfoItem label="Ngày bắt đầu" value="08/01/2025" />
              <InfoItem label="Trạng thái hợp đồng" value="Còn hạn" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold">Gia hạn hợp đồng</h2>
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
                <label className="block text-gray-700 mb-2">Số căn cước công dân</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="079205000000" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Khoa</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="Công nghệ thông tin"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Ngày sinh</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="01/01/2005"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Số điện thoại</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="0903000000" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Nơi sinh</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="TP Hồ Chí Minh"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="duc00@gmail.com" />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">B. Thông tin hợp đồng</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Mã hợp đồng cũ</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="HD001" readOnly />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Số phòng/ Khu vực</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="A101" readOnly />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Thời gian bắt đầu (Hợp đồng cũ)</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="08/01/2025"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Thời gian kết thúc (Hợp đồng cũ)</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="08/07/2025"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Tình trạng thanh toán</label>
                <input type="text" className="w-full px-4 py-2 bg-gray-200 rounded-md" placeholder="Đã thanh toán" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Thời gian gia hạn</label>
                <select className="w-full px-4 py-2 bg-gray-200 rounded-md">
                  <option value="3">3 tháng</option>
                  <option value="6" selected>
                    6 tháng
                  </option>
                  <option value="12">12 tháng</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Thời gian bắt đầu mới</label>
                <input type="date" className="w-full px-4 py-2 bg-gray-200 rounded-md" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Thời gian kết thúc mới</label>
                <input type="date" className="w-full px-4 py-2 bg-gray-200 rounded-md" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Hình ảnh cccd</label>
                <input type="file" className="w-full px-4 py-2 bg-gray-200 rounded-md" accept=".pdf, .doc, .docx, .jpg, .png" placeholder="Thêm hình ảnh liên quan"/>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Lý do gia hạn hợp đồng</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-200 rounded-md"
                  placeholder="Nhập lý do gia hạn"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2">Đồng ý điều khoản hợp đồng</span>
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Gửi thông tin
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function InfoItem({ label, value }) {
  return (
    <div className="mb-2">
      <p className="text-sm text-gray-500">{label}:</p>
      <p className="font-medium">{value}</p>
    </div>
  )
}

export default ContractExtension
