"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { openSans400, openSans700 } from "@/assets/fonts";
import flatIcon from "@/assets/icons/flat-arrow.json";
import { HTMLMotionProps, motion } from "framer-motion";

type item = {
  id: string;
  image: string;
  title: string;
  desc: string;
};

type CardProps = HTMLMotionProps<"div"> & {
  item: item;
};

const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon/AnimatedIcon"), {
  ssr: false,
});

const Card = ({ item, className, ...props }: CardProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { y: 0, opacity: 1, transition: { delay: .8 } },
        hidden: { y: 20, opacity: 0 },
      }}
      key={item.id}
      className={`max-w-[401px] text-black ${className}`}
      {...props}
    >
      <Image
        src={item.image}
        alt={item.id}
        width={401}
        height={267}
        className="rounded-[25px] mb-[25px] w-full h-auto"
      />
      <Link href={`activity/detail/${item.id}`}>
        <div className="flex justify-between">
          <h3 className={`mb-[9px] text-[24px] ${openSans700.className} line-clamp-1`}>
            {item.title}
          </h3>
          <div className="max-w-[13.96px] w-full h-[30px] -rotate-45 overflow-hidden relative">
            <AnimatedIcon icon={flatIcon} className="absolute top-[5px] left-[-17px]" />
          </div>
        </div>
        <h3 className={`text-[20px] ${openSans400.className} line-clamp-3`}>{item.desc}</h3>
      </Link>
    </motion.div>
  );
};

export default Card;
