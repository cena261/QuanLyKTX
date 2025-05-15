const sidebarData = [
    {
        title: "Thông tin cá nhân",
        items: []
    },
    {
        title: "Thông tin phòng",
        items: []
    },
    {
        title: "Hóa đơn",
        items: [
            "Tra cứu thông tin hóa đơn",
            "Đăng ký gia hạn hợp đồng"
        ]
    },
    {
        title: "Đăng ký yêu cầu",
        items: [
            "Chuyển phòng",
            "Đồ dùng"
        ]
    },
    {
        title: "Hỗ trợ và phản ánh",
        items: [
            "Phản ánh thiết bị",
            "Phản ánh trực tiếp",
            "Hỗ trợ khẩn cấp"
        ]
    },
    {
        title: "Khác",
        items: [
            "Quy định ký túc xá",
            "Lịch sử yêu cầu"
        ]
    }
];

function Sidebar() {
    return (
        <div className="sidebar flex w-[300px] h-auto">
            <div>
                <ul className="list-disc pl-10 pt-5 pb-5 border-b border-r border-gray-300">
                    {sidebarData.slice(0, 2).map((section, idx) => (
                        <li key={idx}>{section.title}</li>
                    ))}
                </ul>

                <div className="p-2 border-r border-gray-300">
                    <ul className="list-none pl-1">
                        {sidebarData.slice(2).map((section, idx) => (
                            <li key={idx} className="pt-5 text-gray-400 font-medium text-sm">
                                {section.title}
                                <ul className="list-none pt-5 text-black">
                                    {section.items.map((item, itemIdx) => (
                                        <li
                                            key={itemIdx}
                                            className="bg-gray-100 px-4 py-2 rounded-xl mt-1 hover:bg-[#2F80ED]"
                                        >
                                            <button className="cursor-pointer">{item}</button>
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
