"use client";

import { roboto400, roboto700 } from "@/assets/fonts";
import { Scroll } from "@react-three/drei";
import React from "react";
import { Navbar } from "@/components";

const OverlayAbout = ({ content }: { content: { title: string; desc: string }[] }) => {

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
        </div>
      </section>
    </Scroll>
  );
};

export default OverlayAbout;
