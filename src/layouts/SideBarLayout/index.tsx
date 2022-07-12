import React from "react";
import { Outlet } from "react-router-dom";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import SideBarLayoutBody from "./Body";
import SideBarLayoutHeader from "./Header";

const SideBarLayout = () => {
  return (
    <div className="h-screen w-full grid grid-cols-12">
      {/* SidebarContainer */}
      <div className="col-span-2 bg-white shadow-xl">
        <SideBar />
      </div>
      {/* SidebarBody */}
      <div className="col-span-10 bg-[#f2f3f8]">
        <SideBarLayoutBody>
          <div className="grid gap-y-8">
            <SideBarLayoutHeader />
            <Outlet />
          </div>
        </SideBarLayoutBody>
      </div>
    </div>
  );
};

export default SideBarLayout;
