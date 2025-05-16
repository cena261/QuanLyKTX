import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const sidebarData = [
  {
    title: "Thông tin cá nhân",path: "/personal-info",
    items: []
  },
  {
    title: "Thông tin phòng",
    items: [],
  },
  {
    title: "Hóa đơn",
    items: [
      { name: "Tra cứu thông tin hóa đơn", path: "/bill" },
      { name: "Đăng ký gia hạn hợp đồng", path: "/" },
    ],
  },
  {
    title: "Đăng ký yêu cầu",
    items: [
      { name: "Chuyển phòng", path: "/" },
      { name: "Đồ dùng", path: "/" },
    ],
  },
  {
    title: "Hỗ trợ và phản ánh",
    items: [
      { name: "Phản ánh thiết bị", path: "/" },
      { name: "Phản ánh trực tiếp", path: "/" },
      { name: "Hỗ trợ khẩn cấp", path: "/" },
    ],
  },
  {
    title: "Khác",
    items: [
      { name: "Quy định ký túc xá", path: "/" },
      { name: "Lịch sử yêu cầu", path: "/" },
    ],
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    sidebarData.forEach((section, idx) => {
      section.items.forEach((item, itemIdx) => {
        if (item.path === location.pathname) {
          setActiveItem(`${idx}-${itemIdx}`);
        }
      });
    });
  }, [location.pathname]);

  const handleItemClick = (path, idx, itemIdx) => {
    setActiveItem(`${idx}-${itemIdx}`);
    navigate(path);
  };

  const handleSectionClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="sidebar flex pt-[85px] w-[300px] h-auto min-h-screen">
      <div className="w-full">
        <ul className="list-disc pl-10 pt-5 pb-5 border-b border-r border-gray-300">
          {sidebarData.slice(0, 2).map((section, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-blue-600"
              onClick={() => handleSectionClick(section.path || "/")}
            >
              {section.title}
            </li>
          ))}
        </ul>

        <div className="p-2 border-r border-gray-300 h-full">
          <ul className="list-none pl-1">
            {sidebarData.slice(2).map((section, idx) => (
              <li key={idx} className="pt-5 text-gray-400 font-medium text-sm">
                {section.title}
                <ul className="list-none pt-5 text-black">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className={`bg-gray-100 px-4 py-2 rounded-xl mt-1 hover:bg-[#2F80ED] hover:text-white ${
                        activeItem === `${idx}-${itemIdx}` ? "bg-[#2F80ED] text-white" : ""
                      }`}
                      onClick={() => handleItemClick(item.path, idx, itemIdx)}
                    >
                      <button className="cursor-pointer w-full text-left">{item.name}</button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;