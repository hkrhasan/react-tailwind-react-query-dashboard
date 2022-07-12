import React from "react";

type Props = {
  placeholder: string;
  type: string;
  classNames: string;
  value: string | undefined;
  onChange: (e: any) => void;
};

const PlainInputText = ({
  placeholder,
  type,
  classNames,
  value,
  onChange,
}: Props) => {
  return (
    <div className={`bg-[#f1f3f8] px-3 py-4 rounded-md ${classNames}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ background: "transparent", outline: "none", border: "none" }}
        className="w-full"
      />
    </div>
  );
};

export default PlainInputText;
