"use client";

import React from "react";
import { motion } from "framer-motion";

type ScrollIconsProps = {
  iconClassname?: string;
  textClassname?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const ScrollIcons = ({ iconClassname, textClassname, ...props }: ScrollIconsProps) => {
  return (
    <div className={`flex flex-col justify-center items-center ${props.className}`}>
      <svg
        width="42"
        height="60"
        viewBox="0 0 42 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClassname}
      >
        <rect x="2" y="2" width="38" height="56" rx="19" stroke="white" strokeWidth="4" />
        <motion.line
          x1="21"
          y1="15"
          x2="21"
          y2="23"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
      </svg>
      <p className={textClassname}>scroll untuk menutup reminder</p>
    </div>
  );
};

export default ScrollIcons;
