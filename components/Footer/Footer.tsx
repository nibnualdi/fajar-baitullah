import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

import logo from "@/assets/logo.png";
import cellphone from "@/assets/icons/call-phone-white.json";
import location from "@/assets/icons/location-pin-white.json";
import email from "@/assets/icons/email-white.json";
import { Open_Sans } from "next/font/google";

const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon/AnimatedIcon"), {
  ssr: false,
});

const openSans300 = Open_Sans({ weight: "300", subsets: ["latin"] });
const openSans400 = Open_Sans({ weight: "400", subsets: ["latin"] });
const openSans700 = Open_Sans({ weight: "700", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="text-[20px]">
      <div
        className={`min-h-[302px] w-full bg-black flex items-center justify-center gap-56 ${openSans300.className}`}
      >
        <Image src={logo} alt="logo" width={154} />
        <div className="flex flex-col gap-3">
          <h3 className={openSans700.className}>KONTAK</h3>
          <AnimatedIcon icon={cellphone} className="flex items-center gap-[7px]">
            <p>+62 8123456789</p>
          </AnimatedIcon>
          <AnimatedIcon icon={email} className="flex items-center gap-[7px]">
            <p>fajarbaitullah@gmail.com</p>
          </AnimatedIcon>
        </div>
        <div className="max-w-[302px] flex flex-col gap-3">
          <AnimatedIcon icon={location} className="flex items-center gap-[7px]">
            <h3 className={openSans700.className}>ALAMAT</h3>
          </AnimatedIcon>
          <p>
            Jl. Perum Lipi No.B7, RW.8, Rw. Panjang, Kecamatan Bojonggede, Kabupaten Bogor, Jawa
            Barat 16920
          </p>
        </div>
      </div>
      <div className="relative min-h-[42px] w-full bg-white flex items-center justify-center text-black">
        <p className={openSans400.className}>© 2024 | Fajar Baitullah</p>
        <a
          href="https://lordicon.com/"
          target="_blank"
          className={`absolute right-8 ${openSans300.className}`}
        >
          Icons by Lordicon.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
