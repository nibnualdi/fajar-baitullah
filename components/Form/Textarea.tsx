"use client";

import React, { useState } from "react";

export type InputState = { [x: string]: string | File };

export type PropsTypeHTMLTextAreaElement = {
  name: string;
  placeholder?: string;
  defaultValue?: string;
  require?: boolean;
  pattern?: string;
  errMessage?: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

const Textarea = ({
  name = "input",
  placeholder = "",
  defaultValue = "",
  require = false,
  pattern = "",
  errMessage = "Something is wrong!",
  label,
  onChange,
  ...props
}: PropsTypeHTMLTextAreaElement) => {
  const [inputState, setInputState] = useState<InputState>({});
  const [ErrMessageInputs, setErrMessageInputs] = useState<InputState>({});

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    // custom onChange
    onChange && onChange(e);

    // setValue
    setInputState((input) => ({ ...input, [e.target.name]: e.target.value }));

    // error handling
    if (pattern && (inputState[name] as string)?.length) {
      const regex = new RegExp(pattern, "g");
      const res = regex.test(e.target.value);

      if (!res) {
        setErrMessageInputs((val) => ({
          ...val,
          [name]: `${errMessage ? errMessage : `Please input ${name} correctly!`}`,
        }));
      } else {
        setErrMessageInputs((val) => ({
          ...val,
          [name]: "",
        }));
      }
    }
  };

  return (
    <>
      {label && (
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <textarea
        {...props}
        className={`border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
          require && "invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
        } ${(ErrMessageInputs[name] as string)?.length && "border-red-500"}`}
        placeholder={placeholder}
        rows={8}
        id={name}
        name={name}
        required={require}
        onChange={handleChange}
        defaultValue={defaultValue}
      ></textarea>
      {require && (
        <p
          className={`peer-[&:not(:placeholder-shown):not(:focus):invalid]:block mt-2 text-sm hidden text-red-500`}
        >
          {errMessage ? (
            <>{errMessage}</>
          ) : (
            <>
              <span className="font-medium">Oops!</span> Please input {name} correctly!
            </>
          )}
        </p>
      )}
    </>
  );
};

export default Textarea;
