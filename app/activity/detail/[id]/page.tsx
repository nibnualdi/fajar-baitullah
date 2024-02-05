"use client";

import { openSans400, permanentMarker400 } from "@/assets/fonts";
import { articles } from "@/constans/dummyData";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scroll = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [number, setNumber] = useState(0);

  const selectedActivity = articles.filter((item) => item.id === params.id);

  useEffect(() => {
    scroll.on("change", (v) => setNumber(Math.round(v)));
    // scroll.onChange((v) => setNumber(Math.round(v)));
  }, [scrollYProgress]);

  return (
    <div ref={ref} className="h-[calc(100%+800px)] bg-white text-black">
      <Image
        alt="activity-image-detail"
        src={selectedActivity[0].image}
        layout="fill"
        objectFit="cover"
        className="w-full max-h-[575px] !static"
      />
      <div className="h-[calc(100%-575px)] flex">
        <div className="relative h-full max-w-[456px] w-full">
          <div className="sticky top-[150px] left-[206px] z-10 h-[62.5px] w-fit flex items-center bg-white">
            <p>{number}%</p>
          </div>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="bg-black h-full w-[1px] absolute top-[0px] left-[217px] origin-top"
          />
        </div>
        <div className="max-w-[901px] w-full mt-[10px]">
          <h1 className={`${permanentMarker400.className} text-[96px] leading-[100px] mb-[32px]`}>
            {selectedActivity[0].title}
          </h1>
          <p className={`${openSans400.className} text-[24px]`}>{selectedActivity[0].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
