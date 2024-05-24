"use client";

import React from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene/Scene"), {
  ssr: false,
});
const OverlayAbout = dynamic(() => import("@/components/OverlayAbout/OverlayAbout"), {
  ssr: false,
});

const page = () => {
  return (
    <div className={`relative w-screen bg-white scroll-smooth`}>
      <Scene />
      <OverlayAbout />
    </div>
  );
};

export default page;
