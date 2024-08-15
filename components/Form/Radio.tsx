"use client";

import React, { Dispatch } from "react";

export type InputState = { [x: string]: string | File };

export type PropsTypeInput = {
  label: string;
  id?: string;
  defaultValue?: any;
  selectedValue?: string;
  setSelectedValue?: Dispatch<React.SetStateAction<string>>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Radio = ({
  label,
  id,
  defaultValue,
  selectedValue,
  setSelectedValue,
  onChange,
  ...props
}: PropsTypeInput) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSelectedValue) {
      setSelectedValue(e.target.id);
    }

    // custom onChange
    onChange && onChange(e);
  };

  return (
    <>
      <input
        {...props}
        type="radio"
        id={id ? id : label}
        value={label}
        className="hidden"
        onChange={handleChange}
      />
      <label
        htmlFor={id ? id : label}
        className={`text-xs font-medium px-2.5 py-0.5 rounded border cursor-pointer ${
          selectedValue === label ||
          defaultValue == label ||
          selectedValue === id ||
          defaultValue == id
            ? "text-gray-100 bg-dark-green"
            : "border-dark-green text-dark-green bg-gray-100 bg-opacity-20 hover:text-gray-600 hover:bg-transparent"
        }`}
      >
        {label}
      </label>
    </>
  );
};

export default Radio;
