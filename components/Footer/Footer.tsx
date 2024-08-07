import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

import logo from "@/assets/logo.png";
import cellphone from "@/assets/icons/call-phone-white.json";
import location from "@/assets/icons/location-pin-white.json";
import email from "@/assets/icons/email-white.json";
import { openSans300, openSans400, openSans700 } from "@/assets/fonts";

const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon/AnimatedIcon"), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer className="text-[20px] lg:text-left text-center">
      <div
        className={`min-h-[302px] w-full bg-black flex flex-col lg:flex-row items-center justify-evenly lg:gap-0 gap-7 lg:py-0 py-12 ${openSans300.className}`}
      >
        <div className="xl:max-w-[500px] max-w-[200px] w-full flex justify-center">
          <Image src={logo} alt="logo" width={154} />
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col gap-3">
            <h3 className={openSans700.className}>KONTAK</h3>
            <AnimatedIcon
              icon={cellphone}
              className="flex items-center lg:justify-normal justify-center gap-[7px]"
            >
              <p>+62  85219966021</p>
            </AnimatedIcon>
            <AnimatedIcon
              icon={email}
              className="flex items-center lg:justify-normal justify-center gap-[7px]"
            >
              <p>dkmfajarbaitullah.lipi1@gmail.com</p>
            </AnimatedIcon>
          </div>
          <div className="max-w-[302px] flex flex-col gap-3">
            <AnimatedIcon
              icon={location}
              className="flex items-center lg:justify-normal justify-center gap-[7px]"
            >
              <h3 className={openSans700.className}>ALAMAT</h3>
            </AnimatedIcon>
            <p>
              Jl. Perum Lipi No.B7, RW.8, Rw. Panjang, Kecamatan Bojonggede, Kabupaten Bogor, Jawa
              Barat 16920
            </p>
          </div>
        </div>
        <a
          href="https://lordicon.com/"
          target="_blank"
          className={`lg:hidden block ${openSans300.className}`}
        >
          Icons by Lordicon.com
        </a>
      </div>
      <div className="relative min-h-[42px] w-full bg-white flex items-center justify-center text-black">
        <p className={openSans400.className}>© 2024 | Fajar Baitullah</p>
        <a
          href="https://lordicon.com/"
          target="_blank"
          className={`absolute right-8 lg:block hidden ${openSans300.className}`}
        >
          Icons by Lordicon.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
