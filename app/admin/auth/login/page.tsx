"use client";

import { InputState, formInputs } from "@/components/Form/Form";
import { FetchAPI } from "@/lib/api";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { jwtFunc } from "@/lib/utils/jwtDecode";
import { useAppDispatch } from "@/lib/hooks";
import { setUser } from "@/lib/features/userSlice";

const Form = dynamic(() => import("@/components/Form/Form"), {
  ssr: false,
});

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const token = Cookies.get("session_token") as string;
  const inputs: formInputs = [
    {
      name: "email",
      type: "email",
      placeholder: "mail@example.com",
      require: true,
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
    },
    {
      name: "password",
      type: "password",
      placeholder: "********",
      require: true,
      pattern: ".{6,}",
      customErrMessage: "Please input Password at least 8 character",
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        const payload = await jwtFunc({ token });
        console.log(payload);
        dispatch(setUser(payload));
        router.push("/admin/dashboard");
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleSubmit = async (inputState: InputState, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // login
      const { token } = await FetchAPI({
        endpoint: "/api/user/login",
        method: "POST",
        body: JSON.stringify(inputState),
      });
      Cookies.set("session_token", token);

      // set data user to redux
      const payload = await jwtFunc({ token });
      dispatch(setUser(payload));

      router.push("/admin/dashboard");
    } catch (err) {
      console.log(err);
    }
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
