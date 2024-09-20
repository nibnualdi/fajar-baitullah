"use client";

import { openSans400, roboto400, roboto700 } from "@/assets/fonts";
import { toggleDevelopmentAboutPageInView } from "@/lib/features/util/utilSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const content: { title: string; desc?: string; image?: string; overlay?: boolean }[] = [
  {
    title: "Tentang Kami",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quae iste. Odit, obcaecati dicta facere delectus ipsam rerum sed eum officia expedita quae quisquam dignissimos nam corporis aperiam cupiditate minus! loh",
  },
  {
    title: "Sejarah Kami",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quae iste. Odit, obcaecati dicta facere delectus ipsam rerum sed eum officia expedita quae quisquam dignissimos nam corporis aperiam cupiditate minus! loh",
  },
  {
    title: "Kontak Kami",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quae iste. Odit, obcaecati dicta facere delectus ipsam rerum sed eum officia expedita quae quisquam dignissimos nam corporis aperiam cupiditate minus! loh",
  },
  {
    title: "Struktur Organisasi",
    image:
      "https://templatelab.com/wp-content/uploads/2018/10/Free-Organizational-Chart-3-TemplateLab.com_-e1539503242343.jpg",
    overlay: true,
  },
  {
    title: "Lorem Ipsum",
    image:
      "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    overlay: true,
  },
];

const OverlayAbout = () => {
  const dispatch = useAppDispatch();
  const refDevelopmentMosque: any = useRef();
  const isInView = useInView(refDevelopmentMosque);

  useEffect(() => {
    dispatch(toggleDevelopmentAboutPageInView(isInView));
  }, [isInView, dispatch]);

  return (
    <section className="flex pointer-events-none bg-transparent relative" style={{ zIndex: 10 }}>
      <div className="flex flex-col">
        {content.map((e, index) => {
          return (
            !e.overlay && (
              <div
                className="max-w-[442px] h-screen ml-[10vw] flex flex-col gap-[30px] justify-center pointer-events-auto"
                id={e.title.toLocaleLowerCase().split(" ")?.join("-")}
                key={`${e.title} ${index}`}
              >
                <h1 className={`text-dark-green text-[36px] ${roboto700.className}`}>{e.title}</h1>
                <p className={`text-black text-[20px] ${roboto400.className}`}>{e.desc}</p>
              </div>
            )
          );
        })}

        <div
          className="w-screen h-screen relative select-none grid grid-cols-2 grid-rows-2 place-content-around place-items-center gap-32 cursor-grab"
          id="pembangunan"
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
                  transition: { duration: 0.8, type: "spring", delay: 0.5 },
                }}
                className="h-1 rounded-full bg-dark-green w-full"
              />
            </div>
            <div className="flex gap-[19px] items-center flex-wrap">
              <h1 className={`text-black text-[36px] ${roboto700.className}`}>Rp.300.000.000</h1>
              <p className={`text-dark-green text-[16px] ${openSans400.className}`}>total donasi</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { type: "spring", duration: 2.5 } }}
            className="text-right pointer-events-auto cursor-auto"
          >
            <p className={`text-black text-[15px] mb-1 ${openSans400.className}`}>
              Donasi melalui:
            </p>
            <div className="flex flex-col">
              <p className={`text-[#18918F] text-[16px]  ${openSans400.className}`}>
                BSI - a/n Masjid Fajar Baitullah
              </p>
              <h1
                className={`text-[#18918F] text-[36px] leading-none pointer-events-auto select-text  ${roboto700.className}`}
              >
                123 456 789 100
              </h1>
            </div>
          </motion.div>
        </div>

        {content.map((e) => {
          return (
            e.overlay && (
              <div className="bg-white-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10" key={e.title} id={e.title.toLocaleLowerCase().split(" ")?.join("-")}>
                <div
                  className={`w-screen h-screen p-10 text-dark-green text-[36px] text-center ${roboto700.className} flex flex-col justify-center items-center gap-3 opacity-90`}
                >
                  <h1>{e.title}</h1>
                  {e.image && (
                    <Image
                      alt={e.title}
                      src={e.image}
                      width={0}
                      height={0}
                      sizes="100%"
                      style={{ width: "100%", height: "100%" }}
                      className="h-full w-full object-cover rounded-lg p-3"
                    />
                  )}
                </div>
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default OverlayAbout;
