import { routes } from "@/constans/adminSidebar";
import Link from "next/link";
import React from "react";

const SpeedDial = () => {
  return (
    <div className="fixed end-6 bottom-6 group">
      <div
        id="speed-dial-menu-default"
        className="group-hover:flex flex-col items-center hidden mb-4 space-y-2"
      >
        {routes.map(
          (item) =>
            item.speedDial && (
              <Link
                href={`/admin/form/${item.title.toLocaleLowerCase()}/create`}
                className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 relative hover:text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300 focus:outline-none group/article"
                key={item.title}
              >
                {item.icon}
                <span className="sr-only">{item.title}</span>
                <div className="absolute right-16 z-10 hidden w-max px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip group-hover/article:inline-block">
                  Create a new {item.title}
                </div>
              </Link>
            )
        )}
      </div>
      <button
        type="button"
        className="flex items-center justify-center text-white bg-dark-green rounded-full w-14 h-14 hover:bg-dark-green focus:ring-4 focus:ring-light-green focus:outline-none"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:rotate-45"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default SpeedDial;
