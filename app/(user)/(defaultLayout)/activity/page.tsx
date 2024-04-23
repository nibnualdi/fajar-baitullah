import { openSans700, openSans400 } from "@/assets/fonts";
import { Card, Swiper } from "@/components";

import { articles } from "@/constans/dummyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel",
};

export default function Activity() {
  return (
    <main className="bg-white py-[141px]">
      <div className="relative mid-xl:max-w-[1278px] mid-lg:max-w-[840px] max-w-[401px] w-full h-[712px] m-auto mb-[59px]">
        <Swiper
          containerClassName="mid-xl:max-w-[1278px] mid-lg:max-w-[840px] max-w-[401px] w-full h-[712px] rounded-[32px]"
          overlayClassName="backdrop-blur-[32.2px] bg-white/10 max-w-[1245px] w-full !h-[300px] rounded-[26px] absolute bottom-[15px] m-auto left-0 right-0 py-[50px] px-[76px] flex flex-col lg:gap-[28px] gap-5"
          h1ClassName={`${openSans700.className} mid-lg:text-[48px] text-[20px] max-w-[1106px] lg:leading-0 mid-lg:leading-10 leading-0 mid-lg:line-clamp-none line-clamp-3`}
          pClassName={`${openSans400.className} text-[20px] max-w-[1106px] line-clamp-3`}
        />
      </div>

      <div className="max-w-[1278px] w-full m-auto flex flex-wrap justify-center gap-[37px] md:px-0 px-4">
        {articles.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
