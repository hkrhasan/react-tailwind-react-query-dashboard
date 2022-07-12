import React from "react";

type Props = {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
};

const ButtonWithRightIcon = ({ title, Icon, color }: Props) => {
  // alert(color);
  return (
    <span
      className={`flex items-center gap-x-2 py-3 bg-[#4d47c3] shadow-xl rounded-md px-4 text-white cursor-pointer hover:bg-opacity-80`}
    >
      <Icon className="text-md" />
      <span className="text-sm font-semibold">{title}</span>
    </span>
  );
};

export default ButtonWithRightIcon;
