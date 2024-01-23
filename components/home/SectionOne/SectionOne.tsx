import React from "react";
import Image from "next/image";

import Circles from "./DragableCircles";
import paperCutImg from "@/assets/paper cut mosque.svg";
import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"] });

const SectionOne = () => {
  return (
    <section className="min-h-screen bg-[url('../assets/bg1.jpg')]">
      <div className="relative h-screen max-w-[1440px] max-h-[1150px] ml-auto mr-auto">
        <Circles />
        <Image
          src={paperCutImg}
          alt="paper cut"
          height={816}
          priority
          className="absolute bottom-[-76px] left-[-230px] drop-shadow-image"
        />
        <div className="absolute top-[117px] right-[93px] w-[564px] text-black">
          <h1
            className={`${permanentMarker.className} text-[96px] leading-[110px] drop-shadow-header`}
          >
            FAJAR BAITULLAH
          </h1>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, iste!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
