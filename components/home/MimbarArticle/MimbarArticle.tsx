"use client";

import { philosopher700 } from "@/assets/fonts";
import { Button } from "@/components";
import dynamic from "next/dynamic";
import Image from "next/image";
import flatIcon from "@/assets/icons/flat-arrow.json";
import { articleType } from "@/lib/api/articlesAPI";
import { useState } from "react";

const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon/AnimatedIcon"), {
  ssr: false,
});

type MimbarArticleProps = {
  articles: articleType[];
};

const MimbarArticle = ({ articles }: MimbarArticleProps) => {
  const [articleHover, setArticleHover] = useState(false);

  return (
    <div className="h-[1000px] flex flex-col justify-center bg-gradient-to-t from-black to-zinc-900">
      <div className="text-right mb-20 w-full max-w-[1440px] mx-auto">
        <h1 className={`${philosopher700.className} text-6xl`}>Mimbar Artikel</h1>
        <p className="text-xl bg-gradient-to-l from-teal-400 to-yellow-200 bg-clip-text text-transparent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit!
        </p>
      </div>
      <div className="grid grid-cols-3 mb-16">
        {articles.map((e) => (
          <div
            className="relative group overflow-hidden cursor-pointer"
            onMouseEnter={() => setArticleHover(!articleHover)}
            key={e.id}
          >
            <div className="absolute z-10 bg-gradient-to-t from-black to-zinc-900/50 w-full h-full" />
            <Image
              src={e.image}
              alt={e.title}
              layout="fill"
              objectFit="cover"
              className="w-full max-h-[575px] absolute group-hover:grayscale-0 grayscale transition-all group-hover:scale-110 scale-100"
            />
            <h2 className="absolute z-10 bottom-6 left-6 text-xl font-bold capitalize">
              {e.title}
            </h2>
            <AnimatedIcon
              icon={flatIcon}
              containerHover={articleHover}
              className="absolute z-10 bottom-6 right-6 text-white bg-white rounded-full p-1 -rotate-45 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] scale-75"
            />
            <div className="h-64" />
          </div>
        ))}
      </div>
      <Button
        name="Lihat semua"
        colorSceme="custom"
        className="bg-gradient-to-r from-teal-400 to-yellow-200 !w-44 h-12 !rounded-full text-dark-green font-extrabold text-lg mx-auto"
      />
    </div>
  );
};

export default MimbarArticle;
