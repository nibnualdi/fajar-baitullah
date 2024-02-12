"use client";

import { openSans400, permanentMarker400 } from "@/assets/fonts";
import { articles } from "@/constans/dummyData";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AnimatedLetters = dynamic(() => import("@/components/AnimatedLetters/AnimatedLetters"), {
  ssr: false,
});

const variants: Variants = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 1,
    },
  },
};

const childVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const DetailPage = ({ params }: { params: { id: string } }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scroll = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [number, setNumber] = useState(0);

  const selectedActivity = articles.filter((item) => item.id === params.id);

  useEffect(() => {
    scroll.on("change", (v) => setNumber(Math.round(v)));
  }, [scrollYProgress]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate="animate"
      className="h-[calc(100%+800px)] bg-white text-black"
    >
      <motion.div variants={childVariants}>
        <Image
          alt="activity-image-detail"
          src={selectedActivity[0].image}
          layout="fill"
          objectFit="cover"
          className="w-full max-h-[575px] !static"
        />
      </motion.div>
      <div className="h-[calc(100%-575px)] flex">
        <motion.div variants={childVariants} className="relative h-full max-w-[456px] w-full">
          <div className="sticky top-[150px] left-[206px] z-10 h-[62.5px] w-fit flex items-center bg-white">
            <p>{number}%</p>
          </div>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="bg-black h-full w-[1px] absolute top-[0px] left-[217px] origin-top"
          />
        </motion.div>
        <div className="max-w-[901px] w-full mt-[10px]">
          <AnimatedLetters
            letters={selectedActivity[0].title}
            className={`${permanentMarker400.className} text-[96px] leading-[100px] mb-[32px]`}
          />
          <motion.p variants={childVariants} className={`${openSans400.className} text-[24px] whitespace-pre`}>
            {selectedActivity[0].desc}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailPage;
