import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header /> {/* Thêm Header nếu cần */}
        <div className="pt-[85px] p-6">{children}</div>
      </div>
    </div>
  );
}

export default Layout;