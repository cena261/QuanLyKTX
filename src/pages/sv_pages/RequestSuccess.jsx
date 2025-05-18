"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function RequestSuccess() {
  const navigate = useNavigate()

  useEffect(() => {
    // chuyển hướng sang trang dashboard sau 3 giây
    const timer = setTimeout(() => {
      navigate("/dashboard")
    }, 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex-1 p-6">
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Yêu cầu đã được gửi thành công!</h2>
          <p className="text-lg">Ban quản lý đã nhận được yêu cầu. Vui lòng chờ thông báo của Ban quản lý ký túc.</p>
          <p className="mt-6 text-gray-500">Bạn sẽ được chuyển về trang chủ sau 3 giây...</p>
        </div>
      </div>
    </div>
  )
}

export default RequestSuccess
