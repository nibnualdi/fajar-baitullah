"use client";

import Image from "next/image";

import Circles from "./DragableCircles";
import paperCutImg from "@/assets/paper cut mosque.svg";
import { permanentMarker400 } from "@/assets/fonts";
import { HTMLMotionProps, motion } from "framer-motion";

type AnimatedLettersProps = HTMLMotionProps<"h1"> & {
  letters: string;
};

const variants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedLetters = ({ letters, ...props }: AnimatedLettersProps) => {
  return (
    <motion.h1
      {...props}
      className={`${props.className} relative overflow-hidden`}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      {letters.split("").map((letter, index) => (
        <motion.span
          className={`${letter === " " ? "block" : "inline-block"}`}
          variants={letterAnimation}
          key={letter + index}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const SectionOne = () => {
  return (
    <section className="min-h-screen bg-[url('../assets/bg1.webp')]">
      <div className="relative h-screen max-w-[1440px] max-h-[1150px] ml-auto mr-auto">
        <Circles />
        <Image
          src={paperCutImg}
          alt="paper cut"
          height={816}
          priority
          className="absolute bottom-[-76px] left-[-230px] drop-shadow-image z-10"
        />
        <div className="absolute top-[117px] right-[93px] w-[564px] text-black">
          <AnimatedLetters
            letters="FAJAR BAITULLAH"
            className={`${permanentMarker400.className} text-[96px] leading-[110px] drop-shadow-header`}
          />
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, iste!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
