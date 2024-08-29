"use client";

import { CategoryIcon, UserIcon } from "@/assets/icons/admin";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const ArticleCardSContainer = dynamic(
  () => import("@/components/Admin/Cards/ArticleCardSContainer"),
  {
    ssr: false,
  }
);
const CategoryCardsContainer = dynamic(
  () => import("@/components/Admin/Cards/CategoryCardsContainer"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <div className="grid md:grid-cols-5 grid-rows-5 gap-3">
      <div className="mb-4 md:col-span-3 row-span-3">
        <div className="w-full rounded-2xl bg-gray-200 p-4 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <span className="relative rounded-xl p-2">
                <UserIcon />
              </span>
              <div className="flex flex-col">
                <span className="ml-2 font-bold text-black">Articles</span>
                <span className="ml-2 text-sm text-gray-500">Manage Articles</span>
              </div>
            </div>
            <Link href="/admin/activity" className="flex items-center">
              <button className="text-gray-500 hover:text-gray-900 border rounded-lg border-gray-500 p-2 text-sm">
                View more
              </button>
            </Link>
          </div>
          <ArticleCardSContainer limit={1} />
        </div>
      </div>

      <div className="mb-4 md:col-span-2 row-span-2">
        <div className="w-full rounded-2xl p-4 border border-white">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <span className="relative rounded-xl p-2">
                <CategoryIcon />
              </span>
              <div className="flex flex-col">
                <span className="ml-2 font-bold text-black">Categories</span>
                <span className="ml-2 text-sm text-gray-500">Manage Categories</span>
              </div>
            </div>
          </div>

          <CategoryCardsContainer />
        </div>
      </div>
    </div>
  );
};

export default page;
