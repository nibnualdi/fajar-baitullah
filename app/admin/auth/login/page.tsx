"use client";

import { InputState, formInputs } from "@/components/Auth/Auth";
import { FetchAPI } from "@/lib/api";
import dynamic from "next/dynamic";
import React from "react";

const Auth = dynamic(() => import("@/components/Auth/Auth"), {
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
  return <Auth inputs={inputs} handleSubmit={handleSubmit} />;
};

export default Login;
