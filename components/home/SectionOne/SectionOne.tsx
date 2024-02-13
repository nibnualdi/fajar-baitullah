"use client";

// import Image from "next/image";
import Image from "next/legacy/image";

import Circles from "./DragableCircles";
import paperCutImg from "@/assets/paper cut mosque.svg";
import { permanentMarker400 } from "@/assets/fonts";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const AnimatedLetters = dynamic(() => import("@/components/AnimatedLetters/AnimatedLetters"), {
  ssr: false,
});

const SectionOne = () => {
  return (
    <section className="min-h-screen bg-[url('../assets/bg1.webp')]">
      <div className="relative h-screen max-w-[1440px] max-h-[1150px] ml-auto mr-auto">
        <Circles />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: "easeIn", duration: 1.5 } }}
          className="absolute md:bottom-[-76px] lg:left-[-290px] md:left-[-190px] bottom-[-130px] left-[-30px] drop-shadow-image z-10 max-h-[816px] h-full w-full"
        >
          <Image src={paperCutImg} alt="paper cut" layout="fill" objectFit="contain" priority />
          {/* <Image
            src={paperCutImg}
            alt="paper cut"
            height={816}
            priority
            className="absolute bottom-[-76px] left-[-230px] drop-shadow-image z-10"
          /> */}
        </motion.div>
        <div className="absolute lg:top-[117px] top-[170px] lg:right-[93px] lg:m-0 m-auto lg:left-auto left-0 right-0 md:w-[564px] w-fit text-black">
          <AnimatedLetters
            letters="FAJAR BAITULLAH"
            breakEachSpace
            className={`${permanentMarker400.className} lg:text-[96px] md:text-[80px] text-[48px] lg:leading-[110px] md:leading-[74px] leading-[42px] drop-shadow-header`}
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            className="md:text-[20px] text-[16px] md:w-full w-[274px]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, iste!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
