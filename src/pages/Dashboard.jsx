import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="text-2xl font-bold text-center mt-10">
        Welcome to the Dashboard!
      </div>
    </div>
  );
}

export default Dashboard;
