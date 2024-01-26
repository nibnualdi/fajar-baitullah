import { ParallaxText, Swiper } from "@/components";
import React from "react";

const SectionTwo = () => {
  return (
    <section className="h-[722px] relative flex justify-center items-center bg-white">
      <Swiper />
      <div className="w-full h-[722px] flex flex-col justify-end pb-10 gap-[-100px]">
        <ParallaxText baseVelocity={.3}>Artikel</ParallaxText>
        <ParallaxText baseVelocity={-.3}>Fajar Baitullah</ParallaxText>
      </div>
    </section>
  );
};

export default SectionTwo;
