"use client";

import { philosopher700 } from "@/assets/fonts";
import { Button } from "@/components";
import { articleType } from "@/lib/api/articlesAPI";
import Image from "next/image";
import { useState } from "react";

type GalerySectionProps = {
  articles: articleType[];
};

const GalerySection = ({ articles }: GalerySectionProps) => {
  const [selectedHover, setSelectedHover] = useState(0);

  return (
    <div className="bg-white px-16">
      <div className="bg-white mx-auto max-w-[1440px] h-full py-36 px-10 border-solid border-l-2 border-r-2 border-black/50">
        <div className="mb-5 flex justify-between items-center">
          <span>
            <h1 className={`${philosopher700.className} text-6xl text-black`}>Galeri</h1>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas!
            </p>
          </span>
          <span>
            <Button
              name="Lihat semua"
              variant="outline"
              colorSceme="green"
              className="!w-44 h-12 !rounded-full text-dark-green font-extrabold text-lg mx-auto"
            />
          </span>
        </div>
        <div className="flex justify-between overflow-hidden">
          {articles.map((e, index) => {
            if (index > 17) return;
            return (
              <div
                className={`${
                  selectedHover === index ? "!w-full shadow-inner" : "w-[96px]"
                } transition-all ease-out duration-200 min-w-24 h-56 cursor-pointer relative`}
                onMouseEnter={() => setSelectedHover(index)}
              >
                <div className="absolute z-10 bg-gradient-to-t from-black/30 to-zinc-900/30 w-full h-full" />
                <h2 className="absolute z-10 bottom-6 left-6 text-base font-semibold capitalize line-clamp-1">
                  {e.title}
                </h2>
                <Image
                  src={e.image}
                  alt={e.title}
                  objectFit="cover"
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{ width: "100%", height: "100%" }}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalerySection;
