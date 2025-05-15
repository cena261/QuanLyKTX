import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import MainContent from "../components/StudentInfo"
import RightSidebar from "../components/RightSideBar"

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <div className="flex flex-1 pt-[85px]">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Dashboard