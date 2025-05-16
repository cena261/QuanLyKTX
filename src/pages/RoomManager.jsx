import { useEffect } from "react";
import ManagerLayout from "../components/Layout/ManagerLayout.jsx";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function RoomManager() {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      logout();
      navigate("/login");
    }
  }, [isAdmin, logout, navigate]);

  return (
    <ManagerLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Quản lý phòng</h1>
        {/* Thêm nội dung quản lý phòng ở đây */}
      </div>
    </ManagerLayout>
  );
}

export default RoomManager;
