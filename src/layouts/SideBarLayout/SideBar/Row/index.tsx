import React from "react";
import { FaRegChartBar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useCurrentRoute } from "../../../../hooks";
import { IMenuItem } from "../../../../menu-items";

const SideBarRow = ({ title, Icon, url }: IMenuItem) => {
  const location = useLocation();

  return (
    <div className="w-full px-4">
      <Link
        to={url || "#"}
        className={`sidebar-row transition-all duration-500 flex items-center gap-x-4 rounded-md py-3 px-4 hover:bg-[#f2f3f8] active:bg-[#f2f3f8] ${
          location?.pathname === url && "bg-[#f2f3f8]"
        }`}
      >
        {Icon && <Icon className="text-2xl text-gray-400" />}
        <span className="text-sm font-medium">{title}</span>
      </Link>
    </div>
  );
};

export default SideBarRow;
