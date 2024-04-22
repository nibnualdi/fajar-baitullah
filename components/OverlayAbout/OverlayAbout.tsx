"use client";

import { roboto400, roboto700 } from "@/assets/fonts";
import { Scroll } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Navbar } from "@/components";
import { useInView } from "framer-motion";

type PropsOverlayAbout = {
  content: { title: string; desc: string }[];
  setAtBuildPage: React.Dispatch<React.SetStateAction<boolean>>;
};

const OverlayAbout = ({ content, setAtBuildPage }: PropsOverlayAbout) => {
  const refDevelopmentMosque: any = useRef();
  const isInView = useInView(refDevelopmentMosque);

  useEffect(() => {
      setAtBuildPage(isInView);
  }, [isInView]);

  return (
    <Scroll html>
      <div className="w-screen">
        <Navbar />
      </div>
      <section className="ml-[10vw] flex">
        <div className="flex flex-col">
          {content.map((e, index) => (
            <div
              className="max-w-[442px] h-screen flex flex-col gap-[30px] justify-center"
              key={`${e.title} ${index}`}
            >
              <h1 className={`text-dark-green text-[36px] ${roboto700.className}`}>{e.title}</h1>
              <p className={`text-black text-[20px] ${roboto400.className}`}>{e.desc}</p>
            </div>
          ))}
          <div
            className="max-w-[442px] h-screen flex flex-col gap-[30px] justify-center"
            id="development-mosque"
            ref={refDevelopmentMosque}
          >
            <h1 className={`text-dark-green text-[36px] ${roboto700.className}`}>Pembangunan</h1>
            <p className={`text-black text-[20px] ${roboto400.className}`}>Masjid</p>
          </div>
        </div>
      </section>
    </Scroll>
  );
};

export default OverlayAbout;
