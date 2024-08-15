"use client";

import React, { useState } from "react";

export type InputState = { [x: string]: string | File };

export type PropsTypeInput = {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  defaultValue?: string;
  require?: boolean;
  pattern?: string;
  errMessage?: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const File = ({
  name = "input",
  type = "file",
  placeholder = "",
  defaultValue = "",
  require = false,
  pattern = "",
  errMessage = "Something is wrong!",
  label,
  onChange,
  ...props
}: PropsTypeInput) => {
  const [inputState, setInputState] = useState<InputState>({});
  const [ErrMessageInputs, setErrMessageInputs] = useState<InputState>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <input
        {...props}
        className={`border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
          require && "invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
        } ${(ErrMessageInputs[name] as string)?.length && "border-red-500"}`}
        type={type}
        id={name}
        placeholder={placeholder}
        name={name}
        autoComplete="on"
        required={require}
        formNoValidate
        pattern={pattern}
        onChange={handleChange}
      />
      {defaultValue && (
        <div>
          <img
            src={
              inputState[name]
                ? URL.createObjectURL(inputState[name] as File)
                : defaultValue && defaultValue
            }
            alt="image-input"
            style={{ width: "100%", height: "100%", maxHeight: "178px" }}
            className="h-full w-full object-contain"
          />
        </div>
      )}
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

export default File;
