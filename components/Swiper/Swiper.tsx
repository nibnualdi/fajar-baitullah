"use client";

import * as React from "react";
import { useState } from "react";
import { wrap, motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

import arrow from "@/assets/icons/arrow.json";
import Image from "next/image";
import { articles } from "@/constans/dummyData";
import Link from "next/link";

const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon/AnimatedIcon"), {
  ssr: false,
});

type SwiperProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  containerClassName: string;
  overlayClassName: string;
  h1ClassName: string;
  pClassName: string;
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

const Swiper = (props: SwiperProps) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const contentIndex = wrap(0, articles.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={true} custom={direction}>
        <motion.div
          className={`absolute z-20 overflow-hidden ${props.containerClassName}`}
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
          <div className={`absolute z-20 w-full h-full ${props.overlayClassName}`}>
            <Link href={`activity/detail/${articles[contentIndex].id}`}>
              <motion.h1
                className={props.h1ClassName}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, type: "spring" }}
                key={`h1 ${page}`}
              >
                {articles[contentIndex].title}
              </motion.h1>
            </Link>
            <Link href={`activity/detail/${articles[contentIndex].id}`}>
              <motion.p
                className={props.pClassName}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, type: "spring" }}
                key={`p ${page}`}
              >
                {articles[contentIndex].desc}
              </motion.p>
            </Link>
          </div>
          <Image
            draggable={false}
            // width={1056}
            // height={487}
            layout="fill"
            objectFit="cover"
            src={articles[contentIndex].image}
            loader={({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`}
            alt={articles[contentIndex].image}
            className="absolute top-0 left-0 w-full h-full"
          />
        </motion.div>
      </AnimatePresence>
      <div
        className="right-[10px] absolute z-10 top-[calc(50%-20px)] w-10 h-10 flex justify-center items-center cursor-pointer"
        onClick={() => paginate(1)}
      >
        <AnimatedIcon icon={arrow} className="rotate-90" />
      </div>
      <div
        className="left-[10px] rotate-180 absolute z-10 top-[calc(50%-20px)] w-10 h-10 flex justify-center items-center cursor-pointer"
        onClick={() => paginate(-1)}
      >
        <AnimatedIcon icon={arrow} className="rotate-90" />
      </div>
    </>
  );
};

export default Swiper;
