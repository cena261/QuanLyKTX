


function Sidebar() {
    
    return (
        <div className="sidebar flex pt-[85px] w-[300px] h-auto">
            <div>
                <ul className="list-disc pl-10 pt-5 pb-5 border-b border-r border-gray-300">
                    <li>Thông tin cá nhân</li>
                    <li>Thông tin phòng</li>
                </ul>
                <div className="p-2 border-r border-gray-300">
                    <ul className="list-none pl-1">
                        <li className="text-gray-400 font-medium text-sm"> Hóa đơn
                            <ul className="list-none pt-5 text-black">
                                <li className="bg-gray-100 px-4 py-2 rounded-xl mt-1 hover:bg-[#2F80ED]">
                                    <button className="cursor-pointer">Tra cứu thông tin hóa đơn</button>

                                </li>
                                <li className="bg-gray-100 px-4 py-2 rounded-xl mt-1 hover:bg-[#2F80ED]">
                                    <button className="cursor-pointer">Đăng ký gia hạn hợp đồng</button>
                                </li>
                            </ul>
                        </li>
                        <li className="pt-5 text-gray-400 font-medium text-sm">Đăng ký yêu cầu
                            <ul className="list-none pt-5 text-black">
                                <li className="bg-gray-100 px-4 py-2 rounded-xl mt-1 hover:bg-[#2F80ED]">
                                    <button className="cursor-pointer">Chuyển phòng</button>
                                </li>
                                <li className="bg-gray-100 px-4 py-2 rounded-xl mt-1 hover:bg-[#2F80ED]">
                                    <button className="cursor-pointer"> Đồ dùng</button>
                                </li>
                            </ul>
                        </li>
                        <li className="pt-5 text-gray-400 font-medium text-sm" >Hỗ trợ và phản ánh
                            <ul className="list-none pt-5 text-black">
                                <li className="bg-gray-100 px-4 py-2 rounded-xl mt-1 hover:bg-[#2F80ED]">
                                    <button className="cursor-pointer">Phản ánh thiết bị</button>
                                </li>
                                <li className="bg-gray-100 px-4 py-2 rounded-xl mt-1 hover:bg-[#2F80ED]">
                                    <button className="cursor-pointer">Phản ánh trực tiếp</button>

                                </li>
                                <li className="bg-gray-100 px-4 py-2 rounded-xl mt-1 hover:bg-[#2F80ED]">
                                    <button className="cursor-pointer"> Hỗ trợ khẩn cấp</button>
                                </li>
                            </ul>
                        </li>
                        <li className="pt-5 text-gray-400 font-medium text-sm">Khác
                            <ul className="list-none pt-5 text-black">
                                <li className="bg-gray-100 px-4 py-2 rounded-xl mt-1 hover:bg-[#2F80ED]">
                                    <button className="cursor-pointer">Quy định ký túc xá</button>
                                </li>
                                <li className="bg-gray-100 px-4 py-2 rounded-xl mt-1 hover:bg-[#2F80ED]">
                                    <button className="cursor-pointer">Lịch sử yêu cầu</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;