import { cloneElement } from "react";

const SidebarItem = ({ item }) => {
  const { label, icon, active } = item;

  const styledIcon =
    icon &&
    cloneElement(icon, {
      className: `${icon.props.className || ""} ${
        active ? "text-primary" : ""
      }`,
    });

  return (
    <li
      className={`flex items-center ml-4 text-lg cursor-pointer px-4 py-2 rounded-lg ${
        active ? "bg-primaryBlur" : ""
      }`}
    >
      {styledIcon}
      <h5 className={`ml-3 ${active ? "text-primary" : ""}`}>{label}</h5>
    </li>
  );
};

export default SidebarItem;
