"use client";

import React, { Children, cloneElement, HTMLProps, isValidElement, useState } from "react";

export type InputState = { [x: string]: string | File };

type DetailedHTMLPropsCustom = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "onChange">

export type PropsTypeRadioGroup = {
  children: React.JSX.Element | React.JSX.Element[] | undefined;
  name: string;
  defaultValue?: string | number;
  label?: string;
  containerRadioClassName?: HTMLProps<HTMLElement>["className"];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & DetailedHTMLPropsCustom;

const RadioGroup = ({
  children,
  name,
  defaultValue,
  containerRadioClassName,
  onChange,
  ...props
}: PropsTypeRadioGroup) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div {...props}>
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {name}
      </label>

      <span className={containerRadioClassName}>
        {Children.map(
          children,
          (child) =>
            isValidElement(child) &&
            cloneElement(child as React.JSX.Element, {
              name,
              defaultValue,
              selectedValue,
              setSelectedValue,
              onChange,
            })
        )}
      </span>
    </div>
  );
};

export default RadioGroup;
