import React from "react";
import { Link } from "react-router-dom";

const SideBarTop = () => {
  return (
    <Link to="/dashboard">
      <p className="text-3xl">
        <span className="text-6xl font-semibold">H</span>
        <span className="hidden md:inline">onda</span>
      </p>
    </Link>
  );
};

export default SideBarTop;
