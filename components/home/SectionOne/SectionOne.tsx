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
      className={`${props.className} relative overflow-hidden z-30`}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      {letters.split("").map((letter, index) => (
        <motion.span
          className={`${letter === " " ? "block" : "inline-block"}`}
          variants={letterAnimation}
          whileHover={{ scale: 0.5 }}
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: "easeIn", duration: 1.5 } }}
        >
          <Image
            src={paperCutImg}
            alt="paper cut"
            height={816}
            priority
            className="absolute bottom-[-76px] left-[-230px] drop-shadow-image z-10"
          />
        </motion.div>
        <div className="absolute top-[117px] right-[93px] w-[564px] text-black">
          <AnimatedLetters
            letters="FAJAR BAITULLAH"
            className={`${permanentMarker400.className} text-[96px] leading-[110px] drop-shadow-header`}
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            className="text-[20px]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, iste!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
