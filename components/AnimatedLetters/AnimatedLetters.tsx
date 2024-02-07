"use client";

import { HTMLMotionProps, motion } from "framer-motion";

type AnimatedLettersProps = HTMLMotionProps<"h1"> & {
  letters: string;
  breakEachSpace?: boolean;
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

const AnimatedLetters = ({ letters, breakEachSpace, ...props }: AnimatedLettersProps) => {
  return (
    <motion.h1
      {...props}
      className={`${props.className} relative overflow-hidden z-30`}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      {letters.split("").map((letter, index) => {
        if (letter !== " ") {
          return (
            <motion.span
              className="inline-block"
              variants={letterAnimation}
              whileHover={{ scale: 0.5 }}
              key={letter + index}
            >
              {letter}
            </motion.span>
          );
        } else {
          return (
            <motion.span
              className={breakEachSpace ? "block" : "inline-block"}
              variants={letterAnimation}
              whileHover={{ scale: 0.5 }}
              key={letter + index}
            >
              {breakEachSpace ? <p></p> : <p>&nbsp;</p>}
            </motion.span>
          );
        }
      })}
    </motion.h1>
  );
};

export default AnimatedLetters;
