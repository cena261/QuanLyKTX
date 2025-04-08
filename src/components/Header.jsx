import DashboardLogo from "../assets/img/sv_logo_dashboard.png";
import SearchLogo from "../assets/icons/search-normal.png";
import Homepage from "../assets/icons/home-page.png";
import Notification from "../assets/icons/bell.png";
import DownArrow from "../assets/icons/down-arrow.png";

function Header() {
  return (
    <div className="w-full h-[85px] flex justify-between items-center border-b border-b-lightgrey">
      <img
        src={DashboardLogo}
        alt="Logo"
        className="w-40 object-contain ml-4 md:w-[250px] md:h-[54px]"
      />
      <div className="relative hidden md:block">
        <input
          className="w-[430px] h-[44px] bg-lightgrey opacity-70 rounded-lg"
          type="text"
          placeholder="  Tìm kiếm"
        />
        <button className="cursor-pointer">
          <img
            className="absolute right-[20px] top-[50%] transform -translate-y-1/2"
            src={SearchLogo}
            alt="Search logo"
          />
        </button>
      </div>
      <button className="cursor-pointer flex">
        <img src={Homepage} alt="Homepage logo" />
        <p className="hidden md:block md:ml-2.5">Trang chủ</p>
      </button>
      <button className="cursor-pointer flex">
        <img src={Notification} alt="Noti logo" />
        <p className="hidden md:block md:ml-2.5">Thông báo</p>
      </button>
      <div className="hidden mr-4 md:block md:flex md:gap-2 md:mr-12">
        <div className="">
          <h4 className="leading-none">Admin User</h4>
          <h6 className="text-sm opacity-50 leading-none">admin@gmail.com</h6>
        </div>
        <button className="cursor-pointer px-1 py-1">
          <img src={DownArrow} alt="Arrow" />
        </button>
      </div>
      <div className="text-2xl text-primary mr-4 md:hidden">
        <i class="bx bx-menu"></i>
      </div>
    </div>
  );
}

export default Header;
