"use client";

import { roboto400, roboto700, openSans400 } from "@/assets/fonts";
import { Scroll } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Navbar } from "@/components";
import { useInView, motion } from "framer-motion";

type PropsOverlayAbout = {
  content: { title: string; desc: string }[];
  setAtBuildPage: React.Dispatch<React.SetStateAction<boolean>>;
};

const OverlayAbout = ({ content, setAtBuildPage }: PropsOverlayAbout) => {
  const refDevelopmentMosque: any = useRef();
  const isInView = useInView(refDevelopmentMosque);

  useEffect(() => {
    setAtBuildPage(isInView);
  }, [isInView, setAtBuildPage]);

  return (
    <Scroll html>
      <div className="w-screen">
        <Navbar />
      </div>
      <section className="flex">
        <div className="flex flex-col">
          {content.map((e, index) => (
            <div
              className="max-w-[442px] h-screen ml-[10vw] flex flex-col gap-[30px] justify-center"
              key={`${e.title} ${index}`}
            >
              <h1 className={`text-dark-green text-[36px] ${roboto700.className}`}>{e.title}</h1>
              <p className={`text-black text-[20px] ${roboto400.className}`}>{e.desc}</p>
            </div>
          ))}
          <div
            className="w-screen h-screen relative select-none grid grid-cols-2 grid-rows-2 place-content-around place-items-center gap-32 hover:cursor-grab"
            id="development-mosque"
            ref={refDevelopmentMosque}
          >
            <div />
            <div />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 2.5 } }}
            >
              <p className={`text-black text-[15px] mb-3 ${openSans400.className}`}>
                dalam proses - 30%
              </p>
              <div className="w-full rounded-full h-1 mb-1 bg-gray-400">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{
                    width: `${50}%`,
                    transition: { duration: .8, type: "spring", delay: .5 },
                  }}
                  className="h-1 rounded-full bg-dark-green w-full"
                />
              </div>
              <div className="flex gap-[19px] items-center flex-wrap">
                <h1 className={`text-black text-[36px] ${roboto700.className}`}>Rp.300.000.000</h1>
                <p className={`text-dark-green text-[16px] ${openSans400.className}`}>
                  total donasi
                </p>
              </div>
            </motion.div>

            <div />
          </div>
        </div>
      </section>
    </Scroll>
  );
};

export default OverlayAbout;
