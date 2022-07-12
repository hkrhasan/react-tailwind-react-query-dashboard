import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { ButtonWithRightIcon } from "../../components";
import { GoSettings } from "react-icons/go";
import { useLocation } from "react-router-dom";
import MenuItems, { IMenuItem } from "../../menu-items";

const PageHeader = () => {
  const [title, setTitle] = useState<string>("Dashboard");
  const location = useLocation();

  const findRoute = () => {
    return MenuItems.bodyItems.find(
      (item: IMenuItem, index: number) => location?.pathname === item.url
    );
  };

  useEffect(() => {
    const route = findRoute();
    if (route) {
      setTitle(route.title);
    }
  }, [location]);

  return (
    <div className="flex items-center justify-between">
      {/* Title */}
      <div>
        <span className="text-4xl font-semibold">{title}</span>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-x-4">
        <ButtonWithRightIcon
          color="#4d47c3"
          title="Add Driver"
          Icon={FaUserAlt}
        />
        <div className="bg-white p-3 rounded-md shadow-md cursor-pointer">
          <GoSettings className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
