import React from "react";
import MenuItems from "../../../../menu-items";
import SideBarRow from "../Row";

const SideBarBottom = () => {
  return (
    <div className="sidebar-bottom flex flex-col items-center gap-y-2">
      {MenuItems.bottomItems.map((item, index) => (
        <SideBarRow key={index} {...item} />
      ))}
    </div>
  );
};

export default SideBarBottom;
