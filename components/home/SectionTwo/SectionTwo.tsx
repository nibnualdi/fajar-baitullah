import { openSans600, openSans800 } from "@/assets/fonts";
import { ParallaxText, Swiper } from "@/components";
import React from "react";

const SectionTwo = ({ articles }: any) => {
  return (
    <section className="h-[722px] relative flex justify-center items-center bg-white">
      <Swiper
        articles={articles}
        containerClassName="lg:max-w-[1056px] md:max-w-[600px] max-w-[300px] w-full max-h-[487px] h-[487px] rounded-[15px]"
        overlayClassName="flex flex-col gap-[88px] py-[104px] md:px-[182px] px-5 md:text-left text-center bg-[rgba(34,34,34,0.50)] top-0 left-0"
        h1ClassName={`${openSans800.className} md:text-[64px] text-[40px] text-white max-w-md md:mx-0 mx-auto leading-[55px] uppercase line-clamp-2`}
        pClassName={`${openSans600.className} text-[20px] text-white max-w-32 md:mx-0 mx-auto line-clamp-3`}
      />
      <div className="w-full h-[722px] flex flex-col justify-end pb-10 gap-[-100px]">
        <ParallaxText baseVelocity={0.3}>Artikel</ParallaxText>
        <ParallaxText baseVelocity={-0.3}>Fajar Baitullah</ParallaxText>
      </div>
    </section>
  );
};

export default SectionTwo;
