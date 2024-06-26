"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export type formInput = {
  name: string;
  type?: (React.HTMLInputTypeAttribute | "textarea") | undefined;
  placeholder: string;
  require?: boolean;
  pattern?: string;
  customErrMessage?: string;
};

export type radioInput = {
  values?: { id: string; value: string }[];
} & formInput;

export type formInputs = formInput[] | radioInput[];

export type InputState = { [x: string]: string | File };

type FormProps = {
  title?: string;
  inputs: formInputs;
  buttonName?: string;
  cancelButton?: boolean;
  defaultForm?: any;
  handleSubmit: (inputState: InputState, event: React.FormEvent<HTMLFormElement>) => void;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Form = ({
  inputs,
  handleSubmit,
  title = "Form",
  buttonName = "Submit",
  cancelButton,
  defaultForm,
  ...props
}: FormProps) => {
  const [inputState, setInputState] = useState<InputState>({});
  const [ErrMessageInputs, setErrMessageInputs] = useState<InputState>({});

  const router = useRouter();

  useEffect(() => {
    let arrInputs: InputState = {};
    inputs.forEach((e) => {
      arrInputs = { ...arrInputs, [e.name]: "" };
    });

    setInputState(arrInputs);
    setErrMessageInputs(arrInputs);
  }, [inputs]);

  const createHandleChange = (data: formInput) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.preventDefault();

      if (data.type === "file") {
        const targetInput = e.target as HTMLInputElement;
        const file = (targetInput.files as FileList)[0];

        setInputState((input) => ({ ...input, [e.target.name]: file }));
      } else {
        setInputState((input) => ({ ...input, [e.target.name]: e.target.value }));
      }

      if (data.pattern && (inputState[data.name] as string)?.length) {
        const regex = new RegExp(data.pattern, "g");
        const res = regex.test(e.target.value);

        if (!res) {
          setErrMessageInputs((val) => ({
            ...val,
            [data.name]: `${
              data.customErrMessage ? data.customErrMessage : `Please input ${data.name} correctly!`
            }`,
          }));
        } else {
          setErrMessageInputs((val) => ({
            ...val,
            [data.name]: "",
          }));
        }
      }
    };

    return handleChange;
  };

  const createHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleSubmit(inputState, e);
  };

  const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  const handleInputTypes = (e: formInput | radioInput) => {
    const defInput = defaultForm && defaultForm[e.name.charAt(0).toUpperCase() + e.name.slice(1)];
    const defInputCategoryId = defaultForm && defaultForm[e.name.charAt(0).toUpperCase() + e.name.slice(1) + "ID"];
    if (e.type === "radio") {
      if ("values" in e) {
        return (
          <div className="flex gap-3 flex-wrap w-full">
            {e.values?.map((each) => (
              <span key={each.value}>
                <input
                  type="radio"
                  id={each.id}
                  name={e.name}
                  value={each.id}
                  className="hidden"
                  onChange={createHandleChange(e)}
                />
                <label
                  htmlFor={each.id}
                  className={`text-xs font-medium px-2.5 py-0.5 rounded border cursor-pointer ${
                    inputState[e.name] === each.id || defInputCategoryId == each.id
                      ? "text-gray-100 bg-dark-green"
                      : "border-dark-green text-dark-green bg-gray-100 bg-opacity-20 hover:text-gray-600 hover:bg-transparent"
                  }`}
                >
                  {each.value}
                </label>
              </span>
            ))}
          </div>
        );
      }
      return;
    }
    if (e.type === "textarea") {
      return (
        <textarea
          className={`border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            e.require && "invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
          } ${(ErrMessageInputs[e.name] as string)?.length && "border-red-500"}`}
          placeholder={e.placeholder}
          rows={8}
          id={e.name}
          name={e.name}
          required={e.require}
          onChange={createHandleChange(e)}
          defaultValue={defInput ? defInput : ""}
        ></textarea>
      );
    }
    if (e.type === "file")
      return (
        <>
          <input
            className={`border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
              e.require && "invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
            } ${(ErrMessageInputs[e.name] as string)?.length && "border-red-500"}`}
            type={e.type}
            id={e.name}
            placeholder={e.placeholder}
            name={e.name}
            autoComplete="on"
            required={e.require}
            formNoValidate
            pattern={e.pattern}
            onChange={createHandleChange(e)}
          />
          {defInput && (
            <div>
              <img
                src={
                  inputState[e.name]
                    ? URL.createObjectURL(inputState[e.name] as File)
                    : defInput && defInput
                }
                alt="image-input"
                style={{ width: "100%", height: "100%", maxHeight: "178px" }}
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </>
      );
    return (
      <input
        className={`border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
          e.require && "invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
        } ${(ErrMessageInputs[e.name] as string)?.length && "border-red-500"}`}
        type={e.type}
        id={e.name}
        placeholder={e.placeholder}
        name={e.name}
        autoComplete="on"
        required={e.require}
        formNoValidate
        pattern={e.pattern}
        onChange={createHandleChange(e)}
        defaultValue={defInput ? defInput : ""}
      />
    );
  };

  return (
    <div {...props}>
      <div className="mb-8 space-y-3">
        <p className="text-xl font-semibold">{title}</p>
      </div>

      <form className="w-full group" onSubmit={createHandleSubmit} noValidate>
        <div className="mb-10 space-y-3">
          <div className="space-y-1">
            {inputs.map((e) => (
              <div className="space-y-2" key={e.name}>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor={e.name}
                >
                  {e.name}
                </label>
                {handleInputTypes(e)}
                {e.require && (
                  <p
                    className={`peer-[&:not(:placeholder-shown):not(:focus):invalid]:block mt-2 text-sm hidden text-red-500`}
                  >
                    {e.customErrMessage ? (
                      <>{e.customErrMessage}</>
                    ) : (
                      <>
                        <span className="font-medium">Oops!</span> Please input {e.name} correctly!
                      </>
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>
          {cancelButton ? (
            <div className="flex justify-between gap-2">
              <button
                className="ring-offset-background border border-dark-green text-dark-green focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-black/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                disabled={Boolean(Object.values(ErrMessageInputs).join(""))}
                type="reset"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-dark-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 group-invalid:pointer-events-none group-invalid:opacity-70"
                disabled={Boolean(Object.values(ErrMessageInputs).join(""))}
                type="submit"
              >
                {buttonName}
              </button>
            </div>
          ) : (
            <button
              className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-dark-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 group-invalid:pointer-events-none group-invalid:opacity-70"
              disabled={Boolean(Object.values(ErrMessageInputs).join(""))}
              type="submit"
            >
              {buttonName}
            </button>
          )}
        </div>
      </form>

      {/* <div className="text-center">
              {" "}
              No account?{" "}
              <a className="text-blue-500" href="/signup">
                Create one
              </a>{" "}
            </div> */}
    </div>
  );
};

export default Form;
