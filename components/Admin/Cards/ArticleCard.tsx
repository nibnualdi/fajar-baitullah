import { EditIcon } from "@/assets/icons/admin";
import { getCategoryByID } from "@/lib/api/categoriesAPI";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsArticleCard = {
  id: string;
  image: string;
  title: string;
  category_id: string;
  desc: string;
};

const ArticleCard = async ({ id, image, category_id, desc, title }: PropsArticleCard) => {
  const category = await getCategoryByID(category_id);
  console.log(category, "dari yg baru");

  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow p-5 mb-5">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-gray-900 text-white shadow-gray-900/20 shadow-lg mx-0 mt-0 mb-4 h-64 xl:h-40">
        <Image
          src={image}
          alt="Scandinavian"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "100%", height: "100%" }}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 py-0 px-1">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
          {category.name}
        </p>
        <h5 className="antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-1 mb-2 line-clamp-2">
          {title}
        </h5>
        <p className="antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500 line-clamp-3">
          {desc}
        </p>
      </div>
      <div className="p-6 mt-6 flex items-center justify-between py-0 px-1">
        <Link href={`/activity/detail/${id}`}>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
            type="button"
          >
            view project
          </button>
        </Link>
        <Link href={`/admin/form/article/${id}`}>
          <EditIcon />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
