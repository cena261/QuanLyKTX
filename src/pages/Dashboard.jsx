import { useState } from "react";
import ManagerLayout from "../components/Layout/ManagerLayout.jsx";

function Dashboard() {
  return (
    <ManagerLayout>
      {/* Nội dung trang Dashboard */}
      <div className="text-2xl font-bold text-center mt-10">
        Welcome to the Dashboard!
      </div>
    </ManagerLayout>
  );
}

export default Dashboard;
