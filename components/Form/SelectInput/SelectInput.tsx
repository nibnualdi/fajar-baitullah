"use client";

import React, { Dispatch } from "react";

export type SelectInputState = { [x: string]: string };

export type PropsTypeSelectInput = {
  label: string;
  id?: string;
  defaultValue?: any;
  selectedValue?: string;
  setSelectedValue?: Dispatch<React.SetStateAction<string>>;
} & React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;

const SelectInput = ({
  label,
  id,
  defaultValue,
  selectedValue,
  setSelectedValue,
  ...props
}: PropsTypeSelectInput) => {
  return (
    <option
      {...props}
      id={id ? id : label}
      className={`text-xs font-medium px-2.5 py-0.5 rounded border cursor-pointer ${
        selectedValue === label ||
        selectedValue === id ||
        (!selectedValue && defaultValue == label) ||
        (!selectedValue && defaultValue == id)
          ? "text-gray-100 bg-dark-green"
          : "border-dark-green text-dark-green bg-gray-100 bg-opacity-20 hover:text-gray-600 hover:bg-transparent"
      }`}
    >
      {label}
    </option>
  );
};

export default SelectInput;
