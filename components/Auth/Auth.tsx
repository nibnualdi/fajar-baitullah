"use client";

import React, { useEffect, useState } from "react";

export type formInput = {
  name: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  require?: boolean;
  pattern?: string;
  customErrMessage?: string;
};

export type formInputs = formInput[];

type AuthProps = {
  inputs: formInputs;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};

type InputState = { [x: string]: string };

const Auth = ({ inputs, handleSubmit }: AuthProps) => {
  const [inputState, setInputState] = useState<InputState>({});
  const [ErrMessageInputs, setErrMessageInputs] = useState<InputState>({});

  useEffect(() => {
    let arrInputs: InputState = {};
    inputs.forEach((e) => {
      arrInputs = { ...arrInputs, [e.name]: "" };
    });

    setInputState(arrInputs);
    setErrMessageInputs(arrInputs);
  }, []);

  const createHandleChange = (data: formInput) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      e.preventDefault();

      setInputState((input) => ({ ...input, [e.target.name]: e.target.value }));

      if (data.pattern && inputState[data.name]?.length) {
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

  return (
    <div>
      <div className="bg-white text-dark-green">
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="max-h-auto mx-auto w-full max-w-md bg-white p-4 rounded-lg shadow-xl">
            <div className="mb-8 space-y-3">
              <p className="text-xl font-semibold">{inputs.length > 2 ? "Signup" : "Login"}</p>
            </div>

            <form className="w-full group" onSubmit={handleSubmit} noValidate>
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
                      <input
                        className={`border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          e.require &&
                          "invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                        } ${ErrMessageInputs[e.name]?.length && "border-red-500"}`}
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
                      {e.require && (
                        <p
                          className={`peer-[&:not(:placeholder-shown):not(:focus):invalid]:block mt-2 text-sm hidden text-red-500`}
                        >
                          {e.customErrMessage ? (
                            <>{e.customErrMessage}</>
                          ) : (
                            <>
                              <span className="font-medium">Oops!</span> Please input {e.name}{" "}
                              correctly!
                            </>
                          )}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-dark-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 group-invalid:pointer-events-none group-invalid:opacity-70"
                  disabled={Boolean(Object.values(ErrMessageInputs).join(""))}
                  type="submit"
                >
                  {inputs.length > 2 ? "Signup" : "Login"}
                </button>
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
        </div>
      </div>
    </div>
  );
};

export default Auth;
