"use client";

import { InputState, formInputs } from "@/components/Form/Form";
import { FetchAPI } from "@/lib/api";
import dynamic from "next/dynamic";
import React from "react";

const Form = dynamic(() => import("@/components/Form/Form"), {
  ssr: false,
});

const Login = () => {
  const inputs: formInputs = [
    {
      name: "Email",
      type: "email",
      placeholder: "mail@example.com",
      require: true,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      name: "Password",
      type: "password",
      placeholder: "********",
      require: true,
      pattern: ".{6,}",
      customErrMessage: "Please input Password at least 8 character",
    },
  ];

  const handleSubmit = async (inputState: InputState, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await FetchAPI({
      endpoint: "/api/user/login",
      method: "POST",
      body: JSON.stringify(inputState),
    });
  };
  return (
    <div className="bg-white text-dark-green flex h-screen flex-col items-center justify-center">
      <Form
        inputs={inputs}
        handleSubmit={handleSubmit}
        buttonName="Login"
        title="Login"
        className="max-h-auto mx-auto w-full max-w-md bg-white p-4 rounded-lg shadow-xl"
      />
    </div>
  );
};

export default Login;
