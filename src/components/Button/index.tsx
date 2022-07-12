import React from "react";

type Props = {
  title: string;
  color: string;
  className?: string;
};

const Button = ({ title, color, className }: Props) => {
  return (
    <span
      className={`flex items-center gap-x-2 py-3 bg-[${color}] shadow-2xl shadow-[${color}] rounded-md px-4 text-white cursor-pointer hover:bg-opacity-80 ${className}`}
    >
      <span className="text-sm font-semibold">{title}</span>
    </span>
  );
};

export default Button;
