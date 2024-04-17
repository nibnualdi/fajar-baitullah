"use client";

import React from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene/Scene"), {
  ssr: false,
});

const pageContent: { title: string; desc: string }[] = [
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
];

const page = () => {
  const pageCount = `h-[${pageContent.length}00vh]`;

  return (
    <div className={`relative w-screen h-screen bg-white`}>
      <Scene content={pageContent} />
    </div>
  );
};

export default page;
