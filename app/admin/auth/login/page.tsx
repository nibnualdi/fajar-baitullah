"use client";

import { FetchAPI } from "@/lib/api";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { jwtFunc } from "@/lib/utils/jwtDecode";
import { useAppDispatch } from "@/lib/hooks";
import { setUser } from "@/lib/features/userSlice";
import { InputState } from "@/components/Form/Input";

const Button = dynamic(() => import("@/components/Form/Button"), {
  ssr: false,
});
const Input = dynamic(() => import("@/components/Form/Input"), {
  ssr: false,
});

const Login = () => {
  const [inputState, setInputState] = useState<InputState>({ email: "", password: "" });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const token = Cookies.get("session_token") as string;

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    // set value by name
    setInputState((input) => ({ ...input, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      <div className="max-h-auto mx-auto w-full max-w-md bg-white p-4 rounded-lg shadow-xl">
        <div className="mb-8 space-y-3">
          <p className="text-xl font-semibold">Login</p>
        </div>

        <form className="w-full group" onSubmit={handleSubmit} noValidate>
          <div className="mb-10 space-y-3">
            <div className="space-y-1">
              <Input
                name="email"
                label="email"
                type="email"
                placeholder="mail@example.com"
                require={true}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
                errMessage="email is not correct!"
                onChange={handleChange}
              />
              <Input
                name="password"
                label="password"
                type="password"
                placeholder="********"
                require={true}
                pattern=".{6,}"
                errMessage="Please input Password at least 8 character"
                onChange={handleChange}
              />
            </div>
            <Button name="Login" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
