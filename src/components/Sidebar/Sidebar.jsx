import HomePage from "../../assets/icons/Sidebar/homepage-sb.svg?react";
import Student from "../../assets/icons/Sidebar/students-sb.svg?react";
import Room from "../../assets/icons/Sidebar/room-sb.svg?react";
import HumanResources from "../../assets/icons/Sidebar/hr-sb.svg?react";
import Payment from "../../assets/icons/Sidebar/payment-sb.svg?react";
import Request from "../../assets/icons/Sidebar/request-sb.svg?react";
import Support from "../../assets/icons/Sidebar/support-sb.svg?react";
import Logout from "../../assets/icons/Sidebar/logout-sb.svg?react";
import SidebarItem from "./SidebarItem";

const items = [
  {
    label: "Trang chủ",
    icon: <HomePage className="w-[20px] h-[20px]" alt="HomepageLogo" />,
    active: true,
  },
  {
    label: "Quản lý sinh viên",
    icon: <Student className="w-[20px] h-[20px]" alt="StudentLogo" />,
  },
  {
    label: "Quản lý phòng",
    icon: <Room className="w-[20px] h-[20px]" alt="RoomMNGLogo" />,
  },
  {
    label: "Quản lý hóa đơn",
    icon: <Payment className="w-[20px] h-[20px]" />,
  },
  {
    label: "Quản lý thông báo",
    icon: <HumanResources className="w-[20px] h-[20px]" />,
  },
  {
    label: "Quản lý hợp đồng",
    icon: <Support className="w-[20px] h-[20px]" />,
  },
  {
    label: "Quản lý yêu cầu",
    icon: <Request className="w-[20px] h-[20px]" />,
  },
  {
    label: "Đăng xuất",
    icon: <Logout className="w-[20px] h-[20px]" />,
  },
];

const SidebarItemContainer = () => {
  return (
    <>
      {items.map((item, index) => (
        <SidebarItem item={item} key={index} />
      ))}
    </>
  );
};

function Sidebar() {
  return (
    <div className="w-full h-full">
      <div className="mt-5 mr-4 md:ml-4 md:mt-4 md:mr-0">
        <ul>
          <SidebarItemContainer />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
