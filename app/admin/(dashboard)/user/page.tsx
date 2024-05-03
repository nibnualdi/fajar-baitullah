"use client";

import { EditIcon, UserIcon } from "@/assets/icons/admin";
import dynamic from "next/dynamic";
import React from "react";

const UserCardsContainer = dynamic(() => import("@/components/Admin/Cards/UserCardsContainer"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="mb-4">
      <div className="w-full rounded-2xl bg-gray-200 p-4 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <span className="relative rounded-xl p-2">
              <UserIcon />
            </span>
            <div className="flex flex-col">
              <span className="ml-2 font-bold text-black">Users</span>
              <span className="ml-2 text-sm text-gray-500">Manage Users</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-gray-400">
              <EditIcon />
            </button>
          </div>
        </div>
        <UserCardsContainer />
      </div>
    </div>
  );
};

export default page;
