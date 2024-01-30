"use client";

import * as React from "react";
import { useState } from "react";
import { wrap, motion, AnimatePresence } from "framer-motion";
import { Open_Sans } from "next/font/google";
import dynamic from "next/dynamic";

import arrow from "@/assets/icons/arrow.json";
import Image from "next/image";

const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon/AnimatedIcon"), {
  ssr: false,
});

const openSans800 = Open_Sans({ weight: "800", subsets: ["latin"] });
const openSans600 = Open_Sans({ weight: "600", subsets: ["latin"] });

type SwiperContentType = {
  title: string;
  desc: string;
  image: string;
};

const content: SwiperContentType[] = [
  {
    title: "Pertama Contoh Blablablabla",
    desc: "Satu lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae autem obcaecati voluptas dicta soluta. Laudantium tempora aliquid provident soluta excepturi!",
    image:
      "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  },
  {
    title: "Kedua Contoh Blablablabla",
    desc: "Dua lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae autem obcaecati voluptas dicta soluta. Laudantium tempora aliquid provident soluta excepturi!",
    image:
      "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  },
  {
    title: "Ketiga Contoh Blablablabla",
    desc: "Tiga lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae autem obcaecati voluptas dicta soluta. Laudantium tempora aliquid provident soluta excepturi!",
    image:
      "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  },
];

const variantsImg = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const variantsDiv = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Swiper = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const contentIndex = wrap(0, content.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="w-[1056px] max-h-[487px] h-[487px] flex flex-col gap-[88px] py-[104px] px-[182px] rounded-[15px] text-white absolute z-20"
          key={`div ${page}`}
          custom={direction}
          variants={variantsDiv}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div className="w-[1056px] max-h-[487px] h-[487px] flex flex-col gap-[88px] py-[104px] px-[182px] rounded-[15px] bg-[rgba(34,34,34,0.50)] text-white absolute top-0 left-0 z-20">
            <motion.h1
              className={`${openSans800.className} text-[64px] text-white max-w-md leading-[55px] uppercase line-clamp-2`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring" }}
              key={`h1 ${page}`}
            >
              {content[contentIndex].title}
            </motion.h1>
            <motion.p
              className={`${openSans600.className} text-[20px] text-white max-w-32 line-clamp-3`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, type: "spring" }}
              key={`p ${page}`}
            >
              {content[contentIndex].desc}
            </motion.p>
          </div>
          <Image
            draggable={false}
            width={1056}
            height={487}
            src={content[contentIndex].image}
            loader={({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`}
            alt={content[contentIndex].image}
            className="absolute top-0 left-0 w-[1056px] max-h-[487px] h-[487px] rounded-[15px]"
          />
        </motion.div>
      </AnimatePresence>
      <div
        className="right-[10px] absolute top-[calc(50%-20px)] w-10 h-10 flex justify-center items-center cursor-pointer"
        onClick={() => paginate(1)}
      >
        <AnimatedIcon icon={arrow} className="rotate-90" />
      </div>
      <div
        className="left-[10px] rotate-180 absolute top-[calc(50%-20px)] w-10 h-10 flex justify-center items-center cursor-pointer"
        onClick={() => paginate(-1)}
      >
        <AnimatedIcon icon={arrow} className="rotate-90" />
      </div>
    </>
  );
};

export default Swiper;
