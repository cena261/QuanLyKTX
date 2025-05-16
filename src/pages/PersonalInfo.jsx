function PersonalInfo() {
  const studentData = {
    maHoSo: "HS001",
    maPhong: "RA101",
    mssv: "2000000000",
    lop: "14DHTH11",
    cccd: "079205000000",
    khoaHoc: "2023",
    hoTen: "Nguyễn Văn A",
    nganh: "Công nghệ thông tin",
    gioiTinh: "Nam",
    chuyenNganh: "Công nghệ phần mềm",
    ngaySinh: "01/01/2005",
    bacDaoTao: "Đại học",
    noiSinh: "TP Hồ Chí Minh",
    loaiHinhDaoTao: "Chính quy",
    danToc: "Kinh",
    phong: "A101",
    soDienThoai: "0903000000",
    ngayBatDauThuePhong: "30/08/2023",
    email: "duc00@gmail.com",
    mucPhiThue: "6 tháng",
    ngayBatDau: "08/01/2025",
    ngayHetHan: "08/07/2025",
    tinhTrangHocPhi: "Chưa thanh toán",
    trangThaiHopDong: "Còn hạn",
  }

  const familyData = {
    father: {
      hoTen: "Nguyễn Văn D",
      namSinh: "1989",
      quocTich: "Việt Nam",
      danToc: "Kinh",
      ngheNghiep: "Bán hàng",
      sdt: "0764000000",
    },
    mother: {
      hoTen: "Lê Thị E",
      namSinh: "1989",
      quocTich: "Việt Nam",
      danToc: "Kinh",
      ngheNghiep: "Bán hàng",
      sdt: "0903915000",
    },
  }

  return (
    <div className="flex-1 pt-[85px] p-6">
      <h2 className="text-2xl font-bold mb-6">Thông tin sinh viên</h2>

      <div className="bg-gray-100 rounded-xl p-6 mb-6">
        <div className="flex flex-col md:flex-row">
          <div className="w-[150px] h-[150px] relative mx-auto md:mx-0 mb-6 md:mb-0 md:mr-8">
            <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
              <img src="/profile-silhouette.jpg" alt="Student profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            <div>
              <InfoItem label="Mã hồ sơ" value={studentData.maHoSo} />
              <InfoItem label="MSSV" value={studentData.mssv} />
              <InfoItem label="CCCD" value={studentData.cccd} />
              <InfoItem label="Họ tên" value={studentData.hoTen} />
              <InfoItem label="Giới tính" value={studentData.gioiTinh} />
              <InfoItem label="Ngày sinh" value={studentData.ngaySinh} />
              <InfoItem label="Nơi sinh" value={studentData.noiSinh} />
              <InfoItem label="Dân tộc" value={studentData.danToc} />
              <InfoItem label="Số điện thoại" value={studentData.soDienThoai} />
              <InfoItem label="Email" value={studentData.email} />
              <InfoItem label="Ngày bắt đầu" value={studentData.ngayBatDau} />
              <InfoItem label="Tình trạng học phí" value={studentData.tinhTrangHocPhi} />
            </div>

            <div>
              <InfoItem label="Mã phòng" value={studentData.maPhong} />
              <InfoItem label="Lớp" value={studentData.lop} />
              <InfoItem label="Khóa học" value={studentData.khoaHoc} />
              <InfoItem label="Ngành" value={studentData.nganh} />
              <InfoItem label="Chuyên ngành" value={studentData.chuyenNganh} />
              <InfoItem label="Ngành" value={studentData.nganh} />
              <InfoItem label="Bậc đào tạo" value={studentData.bacDaoTao} />
              <InfoItem label="Loại hình đào tạo" value={studentData.loaiHinhDaoTao} />
              <InfoItem label="Phòng" value={studentData.phong} />
              <InfoItem label="Ngày bắt đầu thuê phòng" value={studentData.ngayBatDauThuePhong} />
              <InfoItem label="Mức phí thuê" value={studentData.mucPhiThue} />
              <InfoItem label="Ngày hết hạn" value={studentData.ngayHetHan} />
              <InfoItem label="Trạng thái hợp đồng" value={studentData.trangThaiHopDong} />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Quan hệ gia đình</h2>

      <div className="bg-gray-100 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <InfoItem label="Họ tên cha" value={familyData.father.hoTen} />
            <InfoItem label="Quốc tịch" value={familyData.father.quocTich} />
            <InfoItem label="Họ tên mẹ" value={familyData.mother.hoTen} />
            <InfoItem label="Quốc tịch" value={familyData.mother.quocTich} />
          </div>
          <div>
            <InfoItem label="Năm sinh" value={familyData.father.namSinh} />
            <InfoItem label="Dân tộc" value={familyData.father.danToc} />
            <InfoItem label="Năm sinh" value={familyData.mother.namSinh} />
            <InfoItem label="Dân tộc" value={familyData.mother.danToc} />
          </div>
          <div>
            <InfoItem label="Nghề nghiệp" value={familyData.father.ngheNghiep} />
            <InfoItem label="SĐT" value={familyData.father.sdt} />
            <InfoItem label="Nghề nghiệp" value={familyData.mother.ngheNghiep} />
            <InfoItem label="SĐT" value={familyData.mother.sdt} />
          </div>
        </div>
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

export default PersonalInfo
