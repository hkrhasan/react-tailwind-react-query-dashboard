import React from "react";

type Props = {
  children: JSX.Element;
};

const SideBarLayoutBody = ({ children }: Props) => {
  return <div className="p-5">{children}</div>;
};

export default SideBarLayoutBody;
