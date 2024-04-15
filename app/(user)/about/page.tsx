"use client";

import React from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene/Scene"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="w-screen h-screen bg-white flex justify-end">
      <div className="w-[1300px] h-screen">
        <Scene />
      </div>
    </div>
  );
};

export default page;
