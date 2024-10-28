"use client";

import React from "react";
import { motion } from "framer-motion";

export type PropsTypeSwitch = {
  name: string;
  value: boolean;
  /** this function onclick for switch */
  onClick: () => void;
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Switch = ({ name, value, onClick }: PropsTypeSwitch) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <div className="w-fit">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor={name}
      >
        {name}
        {/* switch */}
      </label>
      <motion.div
        className={`w-14 h-[30px] bg-white shadow-inner flex justify-start items-center px-2 rounded-[50px] cursor-pointer ${
          value ? "justify-end" : "justify-start"
        }`}
        animate={{ backgroundColor: value ? "#16a34a" : "rgb(34 34 34 / 0.3)" }}
        onClick={handleClick}
      >
        <motion.div
          className="w-3 h-w-3 p-[10px] bg-white text-center select-none shadow-sm rounded-[40px] flex justify-center items-center"
          layout
          transition={spring}
        ></motion.div>
      </motion.div>
      <p className="text-black/50 text-sm text-center select-none">
        {value ? "active" : "disable"}
      </p>
    </div>
  );
};

export default Switch;
