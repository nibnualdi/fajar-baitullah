"use client";

import { EditIcon, TrashcanIcon } from "@/assets/icons/admin";
import { categoryType, updateCategory } from "@/lib/api/categoriesAPI";
import React, { useState } from "react";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";

import check from "@/assets/icons/check-dark-green.json";
import { handleRevalidateTag } from "@/lib/actions";
import { useRouter } from "next/navigation";

const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon/AnimatedIcon"), {
  ssr: false,
});
const Spinner = dynamic(() => import("@/components/Spinner/Spinner"), {
  ssr: false,
});

const CategoryCard = ({ category, index }: { category: categoryType; index: number }) => {
  const token = Cookies.get("session_token") as string;
  const router = useRouter();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openinputCategory, setOpeninputCategory] = useState(false);

  const handleEditCategory = async () => {
    if (!input) return;
    setIsLoading(true);
    try {
      await updateCategory(category.id, JSON.stringify({ name: input }), {
        authorization: `Bearer ${token}`,
      });
      setIsLoading(false);
      setIsSuccess(true);
      setOpeninputCategory(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      setInput("");
      handleRevalidateTag("list_category");
      router.refresh();
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="text-sm font-medium leading-none border border-white border-t-0 border-l-0 border-r-0 p-4 flex justify-between items-center">
      {openinputCategory ? (
        <>
          <input
            type="text"
            className="text-xs font-medium px-2.5 py-0.5 rounded border border-dark-green text-dark-green bg-gray-100 bg-opacity-20 hover:text-gray-600 hover:bg-transparent outline-none"
            autoFocus
            defaultValue={category.name}
            onChange={(e) => setInput(e.target.value)}
            onBlur={(e) => {
              if (!e.relatedTarget?.id) return setOpeninputCategory(false);
            }}
          ></input>
          {isSuccess ? (
            <AnimatedIcon
              icon={check}
              className="flex items-center gap-1 font-semibold capitalize cursor-pointer"
            ></AnimatedIcon>
          ) : isLoading ? (
            <Spinner />
          ) : (
            <button id={category.id} className="text-gray-400" onClick={handleEditCategory}>
              Submit
            </button>
          )}
        </>
      ) : (
        <>
          <span className="flex gap-1">
            <span>{index + 1}.</span>
            <span>{category.name}</span>
          </span>
          {isSuccess ? (
            <AnimatedIcon
              icon={check}
              className="flex items-center gap-1 font-semibold capitalize cursor-pointer"
            ></AnimatedIcon>
          ) : (
            <span>
              <button
                className="text-gray-400"
                onClick={() => {
                  setOpeninputCategory(true);
                }}
              >
                <EditIcon />
              </button>
              <button
                className="text-gray-400"
                onClick={() => {
                  setOpeninputCategory(true);
                }}
              >
                <TrashcanIcon />
              </button>
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default CategoryCard;
