function RoomInfo() {
  const roomData = {
    maPhong: "RA101",
    soPhong: "A101",
    tenToaNha: "Ký túc xá khu A",
    loaiPhong: "Phòng 4 người",
    soGiuong: "G01",
    soLuongToiDa: "4 người",
    ngayBatDauThuePhong: "30/08/2023",
    soNguoiHienTai: "3 người",
    ngayBatDau: "08/01/2025",
    ngayHetHan: "08/07/2025",
  }

  const roommatesData = [
    {
      mssv: "2000000000",
      hoTen: "Nguyễn Văn A",
      soGiuong: "G01",
      ngayVaoO: "30/08/2023",
    },
    {
      mssv: "2001010101",
      hoTen: "Phạm Trường H",
      soGiuong: "G02",
      ngayVaoO: "30/08/2023",
    },
    {
      mssv: "2001230000",
      hoTen: "Hồ Văn G",
      soGiuong: "G03",
      ngayVaoO: "04/09/2023",
    },
  ]

  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-6">Thông tin phòng</h2>

      <div className="bg-gray-100 rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-300">Thông Tin Cơ Bản</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div>
            <InfoItem label="Mã phòng" value={roomData.maPhong} />
            <InfoItem label="Tên tòa nhà" value={roomData.tenToaNha} />
            <InfoItem label="Số giường" value={roomData.soGiuong} />
            <InfoItem label="Ngày bắt đầu thuê phòng" value={roomData.ngayBatDauThuePhong} />
            <InfoItem label="Ngày bắt đầu" value={roomData.ngayBatDau} />
          </div>

          <div>
            <InfoItem label="Số phòng" value={roomData.soPhong} />
            <InfoItem label="Loại phòng" value={roomData.loaiPhong} />
            <InfoItem label="Số lượng tối đa" value={roomData.soLuongToiDa} />
            <InfoItem label="Số người hiện tại" value={roomData.soNguoiHienTai} />
            <InfoItem label="Ngày hết hạn" value={roomData.ngayHetHan} />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Danh sách phòng</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-[#1e5bb7] text-white">
              <th className="py-3 px-4 border border-gray-300 text-center">MSSV</th>
              <th className="py-3 px-4 border border-gray-300 text-center">Họ tên sinh viên</th>
              <th className="py-3 px-4 border border-gray-300 text-center">Số giường</th>
              <th className="py-3 px-4 border border-gray-300 text-center">Ngày vào ở</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {roommatesData.map((roommate, index) => (
              <tr key={index} className="bg-white">
                <td className="py-3 px-4 border border-gray-300 text-center">{roommate.mssv}</td>
                <td className="py-3 px-4 border border-gray-300">{roommate.hoTen}</td>
                <td className="py-3 px-4 border border-gray-300 text-center">{roommate.soGiuong}</td>
                <td className="py-3 px-4 border border-gray-300 text-center">{roommate.ngayVaoO}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function InfoItem({ label, value }) {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-500">{label}:</p>
      <p className="font-medium">{value}</p>
    </div>
  )
}

export default RoomInfo
