"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Toast } from "@/components";
import { ToastType } from "@/components/Toast/Toast";

export default function ShowToastFromCookie() {
  const [isToastActive, setIsToastActive] = useState(Cookies.get("showToast") || "");
  const toasTypeFromCookie = isToastActive.split("_")[0] as ToastType;
  const toasMessageFromCookie = isToastActive.split("_")[1];
  const timeout = 6000;

  useEffect(() => {
    const timeoutDeleteCookie = setTimeout(() => {
      Cookies.remove("showToast");
      setIsToastActive(Cookies.get("showToast") || "");
    }, timeout);

    return () => {
      clearTimeout(timeoutDeleteCookie);
    };
  }, [isToastActive]);

  return (
    <>{isToastActive && <Toast type={toasTypeFromCookie} message={toasMessageFromCookie} />}</>
  );
}
