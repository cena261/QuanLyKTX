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
              <div className="mb-4">
                <p className="text-sm text-gray-500">Mã hồ sơ:</p>
                <p className="font-medium">{studentData.maHoSo}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">MSSV:</p>
                <p className="font-medium">{studentData.mssv}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">CCCD:</p>
                <p className="font-medium">{studentData.cccd}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Họ tên:</p>
                <p className="font-medium">{studentData.hoTen}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Giới tính:</p>
                <p className="font-medium">{studentData.gioiTinh}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Ngày sinh:</p>
                <p className="font-medium">{studentData.ngaySinh}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Nơi sinh:</p>
                <p className="font-medium">{studentData.noiSinh}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Dân tộc:</p>
                <p className="font-medium">{studentData.danToc}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Số điện thoại:</p>
                <p className="font-medium">{studentData.soDienThoai}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Email:</p>
                <p className="font-medium">{studentData.email}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Ngày bắt đầu:</p>
                <p className="font-medium">{studentData.ngayBatDau}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Tình trạng học phí:</p>
                <p className="font-medium">{studentData.tinhTrangHocPhi}</p>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Mã phòng:</p>
                <p className="font-medium">{studentData.maPhong}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Lớp:</p>
                <p className="font-medium">{studentData.lop}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Khóa học:</p>
                <p className="font-medium">{studentData.khoaHoc}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Ngành:</p>
                <p className="font-medium">{studentData.nganh}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Chuyên ngành:</p>
                <p className="font-medium">{studentData.chuyenNganh}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Ngành:</p>
                <p className="font-medium">{studentData.nganh}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Bậc đào tạo:</p>
                <p className="font-medium">{studentData.bacDaoTao}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Loại hình đào tạo:</p>
                <p className="font-medium">{studentData.loaiHinhDaoTao}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Phòng:</p>
                <p className="font-medium">{studentData.phong}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Ngày bắt đầu thuê phòng:</p>
                <p className="font-medium">{studentData.ngayBatDauThuePhong}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Mức phí thuê:</p>
                <p className="font-medium">{studentData.mucPhiThue}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Ngày hết hạn:</p>
                <p className="font-medium">{studentData.ngayHetHan}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500">Trạng thái hợp đồng:</p>
                <p className="font-medium">{studentData.trangThaiHopDong}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Quan hệ gia đình</h2>

      <div className="bg-gray-100 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Họ tên cha:</p>
              <p className="font-medium">{familyData.father.hoTen}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Quốc tịch:</p>
              <p className="font-medium">{familyData.father.quocTich}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Họ tên mẹ:</p>
              <p className="font-medium">{familyData.mother.hoTen}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Quốc tịch:</p>
              <p className="font-medium">{familyData.mother.quocTich}</p>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Năm sinh:</p>
              <p className="font-medium">{familyData.father.namSinh}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Dân tộc:</p>
              <p className="font-medium">{familyData.father.danToc}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Năm sinh:</p>
              <p className="font-medium">{familyData.mother.namSinh}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Dân tộc:</p>
              <p className="font-medium">{familyData.mother.danToc}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Nghề nghiệp:</p>
              <p className="font-medium">{familyData.father.ngheNghiep}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">Nghề nghiệp:</p>
              <p className="font-medium">{familyData.mother.ngheNghiep}</p>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">SĐT:</p>
              <p className="font-medium">{familyData.father.sdt}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">SĐT:</p>
              <p className="font-medium">{familyData.mother.sdt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
