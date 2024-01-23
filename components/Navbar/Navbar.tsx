"use client";

import React, { useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";

import home from "@/assets/icons/home.json";
import article from "@/assets/icons/article.json";
import cellPhone from "@/assets/icons/call-phone.json";

type navType = {
  name: string;
  icon?: any;
  to: string;
};

const nav: navType[] = [
  { name: "home", icon: home, to: "/home" },
  { name: "articles", icon: article, to: "/articles" },
  { name: "contact", icon: cellPhone, to: "/contact" },
];

const NavButton = (props: navType) => {
  const [hover, setHover] = useState(false);
  const playerRef = useRef<any>(null);

  // trigger animation on hover & first load
  useEffect(() => {
    if (playerRef.current?.isPlaying) return;
    playerRef.current?.playFromBeginning();
    if (!playerRef.current?.isPlaying) return setHover(false);
  }, [hover]);

  return (
    <button
      className="flex items-center gap-1 font-semibold capitalize"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Player ref={playerRef} size={30} icon={props.icon} />
      <p>{props.name}</p>
    </button>
  );
};

const Navbar = () => {
  return (
    <header className="w-full absolute bg-transparent flex justify-between pl-[69px] pr-[93px] pt-[34px] z-50">
      <div className="w-[68px] h-[68px] bg-white rounded-full" />
      <div className="text-black flex gap-10">
        {nav.map((item) => (
          <NavButton {...item} key={item.name} />
        ))}
      </div>
    </header>
  );
};

export default Navbar;
