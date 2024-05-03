"use client";

import { formInputs } from "@/components/Auth/Auth";
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
      pattern: ".{8,}",
      customErrMessage: "Please input Password at least 8 character",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("login");
  };
  return <Auth inputs={inputs} handleSubmit={handleSubmit} />;
};

export default Login;
