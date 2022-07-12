import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";
import SidebarBody from "./Body";
import SideBarBottom from "./Bottom";
import SideBarTop from "./Top";

const SideBar = () => {
  return (
    <div
      className="sidebar h-full py-4 gap-y-4"
      style={{
        display: "grid",
        gridTemplateRows: "max-content 1fr max-content",
      }}
    >
      {/* Top */}
      <div className="sidebar-top flex items-center px-2 md:px-0 md:justify-center">
        <SideBarTop />
      </div>
      {/* Body */}
      <div className="sidebar-body">
        <SidebarBody />
      </div>
      {/* Bottom */}
      <div className="sidebar-bottom">
        <SideBarBottom />
      </div>
    </div>
  );
};

export default SideBar;
