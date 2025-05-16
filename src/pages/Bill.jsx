import { useNavigate } from "react-router-dom"

function BillPayment() {
  const navigate = useNavigate()

  const handlePayment = () => {
    navigate("/payment-confirmation")
  }

  return (
    <div className="flex-1 pt-[85px] p-6">
      <h2 className="text-2xl font-bold mb-6">Thanh toán trực tuyến</h2>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#1e5bb7] text-white">
                <th className="py-3 px-4 border border-gray-300 text-center">Mã</th>
                <th className="py-3 px-4 border border-gray-300 text-center">Nội dung thu</th>
                <th className="py-3 px-4 border border-gray-300 text-center">Số lượng</th>
                <th className="py-3 px-4 border border-gray-300 text-center">Số tiền (VND)</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr>
                <td className="py-3 px-4 border border-gray-300 text-center">003</td>
                <td className="py-3 px-4 border border-gray-300">Tiền thuê phòng tháng 3</td>
                <td className="py-3 px-4 border border-gray-300 text-center">1</td>
                <td className="py-3 px-4 border border-gray-300 text-right">1,500,000</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-gray-300 text-center">005</td>
                <td className="py-3 px-4 border border-gray-300">Tiền nước tháng 3</td>
                <td className="py-3 px-4 border border-gray-300 text-center">3</td>
                <td className="py-3 px-4 border border-gray-300 text-right">30,000</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-gray-300 text-center">006</td>
                <td className="py-3 px-4 border border-gray-300">Tiền điện tháng 3</td>
                <td className="py-3 px-4 border border-gray-300 text-center">50</td>
                <td className="py-3 px-4 border border-gray-300 text-right">175,000</td>
              </tr>
              <tr>
                <td colSpan="3" className="py-3 px-4 border border-gray-300 font-bold">
                  Tổng số tiền cần thanh toán
                </td>
                <td className="py-3 px-4 border border-gray-300 text-right font-bold">1,705,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex">
          <button
            onClick={handlePayment}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-8 rounded-md transition-colors"
          >
            Thanh toán
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Thông tin điện/nước đang sử dụng</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#1e5bb7] text-white">
                <th className="py-3 px-4 border border-gray-300 text-center">Thông tin</th>
                <th className="py-3 px-4 border border-gray-300 text-center">Số cũ</th>
                <th className="py-3 px-4 border border-gray-300 text-center">Số mới</th>
                <th className="py-3 px-4 border border-gray-300 text-center">Số lượng tiêu thụ</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr>
                <td className="py-3 px-4 border border-gray-300 text-center">Điện</td>
                <td className="py-3 px-4 border border-gray-300 text-center">1.250</td>
                <td className="py-3 px-4 border border-gray-300 text-center">1.320</td>
                <td className="py-3 px-4 border border-gray-300 text-center">70</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border border-gray-300 text-center">Nước</td>
                <td className="py-3 px-4 border border-gray-300 text-center">150</td>
                <td className="py-3 px-4 border border-gray-300 text-center">151</td>
                <td className="py-3 px-4 border border-gray-300 text-center">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BillPayment
