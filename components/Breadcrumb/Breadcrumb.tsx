"use client";

import { ArrowIcon, HomeIcon } from "@/assets/icons/admin";
import { routes } from "@/constans/adminSidebar";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type PropsBreadcrumb = {
  click?: boolean;
  customPath?: string[];
};

const Breadcrumb = ({ click = true, customPath }: PropsBreadcrumb) => {
  const pathname: string = usePathname();
  const ArrPathname = pathname.split("/");
  ArrPathname.shift();

  const router = useRouter();

  const handleClick = (pathname: string) => {
    if (!click) return;

    const filteredRoutes = routes.filter((route) => {
      return route.link.includes(pathname);
    });

    if (filteredRoutes.length > 1) {
      router.push("/admin/dashboard");
    } else {
      router.push(filteredRoutes[0].link);
    }
  };

  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {!customPath && (
          <li className="inline-flex items-center">
            <button
              onClick={() => router.push("/admin/dashboard")}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HomeIcon />
              Home
            </button>
          </li>
        )}
        {customPath
          ? customPath.map((element, index) => (
              <li key={element}>
                <div className="flex items-center">
                  {index !== 0 && (
                    <span className="w-2">
                      <ArrowIcon />
                    </span>
                  )}
                  <button
                    onClick={() => handleClick(element)}
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    {element}
                  </button>
                </div>
              </li>
            ))
          : ArrPathname.map((element) => (
              <li key={element}>
                <div className="flex items-center">
                  <span className="w-2">
                    <ArrowIcon />
                  </span>
                  <button
                    onClick={() => handleClick(element)}
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    {element}
                  </button>
                </div>
              </li>
            ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
