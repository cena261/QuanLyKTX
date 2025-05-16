import { useEffect } from "react";
import ManagerLayout from "../components/Layout/ManagerLayout.jsx";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function RequestManager() {
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
        <h1 className="text-2xl font-bold mb-4">Quản lý yêu cầu</h1>
        {/* Thêm nội dung quản lý yêu cầu ở đây */}
      </div>
    </ManagerLayout>
  );
}

export default RequestManager;
