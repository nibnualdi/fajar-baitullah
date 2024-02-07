import { openSans700, openSans400 } from "@/assets/fonts";
import { Card, Swiper } from "@/components";

import { articles } from "@/constans/dummyData";

export default function Activity() {
  return (
    <main className="bg-white py-[141px]">
      <div className="w-[1278px] h-[712px] m-auto mb-[59px]">
        <Swiper
          containerClassName="max-w-[1278px] w-full h-[712px] rounded-[32px]"
          overlayClassName="backdrop-blur-[32.2px] bg-white/10 max-w-[1245px] w-full h-[300px] rounded-[26px] absolute bottom-[15px] m-auto left-0 right-0 py-[50px] px-[76px] flex flex-col gap-[28px]"
          h1ClassName={`${openSans700.className} text-[48px] max-w-[1106px]`}
          pClassName={`${openSans400.className} text-[20px] max-w-[1106px] line-clamp-3`}
        />
      </div>

      <div className="w-[1278px] m-auto flex flex-wrap gap-[37px]">
        {articles.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
