import { openSans700, openSans400 } from "@/assets/fonts";
import { Card, Swiper } from "@/components";

import { articles } from "@/constans/dummyData";

export default function Activity() {
  return (
    <main className="bg-white py-[141px]">
      <div className="lg:max-w-[1278px] md:max-w-[600px] max-w-[300px] w-full h-[712px] m-auto mb-[59px]">
        <Swiper
          containerClassName="lg:max-w-[1278px] md:max-w-[600px] max-w-[300px] w-full h-[712px] rounded-[32px]"
          overlayClassName="backdrop-blur-[32.2px] bg-white/10 max-w-[1245px] w-full !h-[300px] rounded-[26px] absolute bottom-[15px] m-auto left-0 right-0 py-[50px] px-[76px] flex flex-col lg:gap-[28px] gap-5"
          h1ClassName={`${openSans700.className} md:text-[48px] text-[20px] max-w-[1106px] lg:leading-0 md:leading-10 leading-0 md:line-clamp-none line-clamp-3`}
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
