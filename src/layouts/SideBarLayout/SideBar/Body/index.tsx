import SideBarRow from "../Row";
import MenuItems from "../../../../menu-items";

const SidebarBody = () => {
  return (
    <div>
      <div className="sidebar flex flex-col items-center gap-y-2">
        {MenuItems.bodyItems.map((item, index) => (
          <SideBarRow key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SidebarBody;
