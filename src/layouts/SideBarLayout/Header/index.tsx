import { BiSearch } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const SideBarLayoutHeader = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Search */}
      <div className="flex items-center bg-white p-2 gap-x-2 rounded-md shadow-md">
        <BiSearch className="text-xl text-[#9fa0a3]" />
        <input
          type="text"
          placeholder="search"
          style={{
            outline: "none",
            border: "none",
            background: "transparent",
          }}
          className=""
        />
      </div>
      {/* Actions */}
      <div className="flex items-center gap-x-4">
        {/* Notification */}
        <div>
          {/* Icon */}
          <div className="bg-white rounded-md p-3 cursor-pointer shadow-md">
            <BsFillBellFill className="text-sm text-gray-400" />
          </div>
        </div>
        {/* Profile */}
        <div className="flex items-center cursor-pointer">
          {/* Image */}
          <div>
            <img src="" />
          </div>
          {/* title */}
          <span className="text-sm font-semibold mr-1">hkrhasan</span>
          {/* Icon */}
          <MdKeyboardArrowDown className="text-md" />
        </div>
      </div>
    </div>
  );
};

export default SideBarLayoutHeader;
