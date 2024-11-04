"use client";

// import { ArrowIcon } from "@/assets/icons/admin";
import React, { Children, cloneElement, HTMLProps, isValidElement, useState } from "react";

type DetailedHTMLPropsCustom = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "onChange"
>;

export type PropsTypeSelectInputGroup = {
  children: React.JSX.Element | React.JSX.Element[] | undefined;
  name: string;
  defaultValue?: string | number;
  noLabel?: boolean;
  label?: string;
  containerSelectInputClassName?: HTMLProps<HTMLElement>["className"];
  icon?: React.JSX.Element;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
} & DetailedHTMLPropsCustom;

const SelectInputGroup = ({
  children,
  name,
  defaultValue,
  containerSelectInputClassName,
  onChange,
  noLabel = false,
  icon,
  ...props
}: PropsTypeSelectInputGroup) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div {...props}>
      {!noLabel && (
        <label
          htmlFor={name}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {name}
        </label>
      )}

      <span className={containerSelectInputClassName}>
        <select
          id={name}
          onChange={onChange}
          className="flex gap-2 justify-between items-center px-4 py-1 w-full bg-white rounded-lg border-2 border-dark-green/60 cursor-pointer"
        >
          {/* <div className="flex gap-3 items-center">
            <div className="scale-125 text-black/50">{icon && icon}</div>
            <div className="text-xs text-left">
              <p className="text-[9px]">{name}</p>
              <p className="font-semibold text-black">
                {selectedValue ? selectedValue : defaultValue}
              </p>
            </div>
          </div>
          <p className="text-black/50 rotate-90">
            <ArrowIcon />
          </p> */}
          {Children.map(
            children,
            (child) =>
              isValidElement(child) &&
              cloneElement(child as React.JSX.Element, {
                name,
                defaultValue,
                selectedValue,
                setSelectedValue,
              })
          )}
        </select>
      </span>
    </div>
  );
};

export default SelectInputGroup;
