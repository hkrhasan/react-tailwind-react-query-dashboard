import React from "react";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="h-screen w-full bg-[#f2f3f8]">
      <Outlet />
    </div>
  );
};

export default BaseLayout;
