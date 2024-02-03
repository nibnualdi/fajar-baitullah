import { openSans700, openSans400 } from "@/assets/fonts";
import { Swiper } from "@/components";
import Image from "next/image";
import dynamic from "next/dynamic";

import flatIcon from "@/assets/icons/flat-arrow.json";
import Link from "next/link";
import { articles } from "@/constans/dummyData";

const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon/AnimatedIcon"), {
  ssr: false,
});

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
          <div key={item.id} className="max-w-[401px] text-black">
            <Image
              src={item.image}
              alt={item.id}
              width={401}
              height={267}
              className="rounded-[25px] mb-[25px] w-full h-auto"
            />
            <Link href={`activity/detail/${item.id}`}>
              <div className="flex justify-between">
                <h3 className={`mb-[9px] text-[24px] ${openSans700.className} line-clamp-1`}>
                  {item.title}
                </h3>
                <div className="w-[13.96px] h-[30px] -rotate-45 overflow-hidden relative">
                  <AnimatedIcon icon={flatIcon} className="absolute top-[5px] left-[-17px]" />
                </div>
              </div>
              <h3 className={`text-[20px] ${openSans400.className} line-clamp-3`}>{item.desc}</h3>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
