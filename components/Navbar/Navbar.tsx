"use client";

import dynamic from "next/dynamic";

import home from "@/assets/icons/home.json";
import article from "@/assets/icons/article.json";
import cellPhone from "@/assets/icons/call-phone.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon/AnimatedIcon"), {
  ssr: false,
});

const MenuToggleNav = dynamic(() => import("@/components/Navbar/MenuToggle"), {
  ssr: false,
});

type navType = {
  name: string;
  icon?: any;
  to: string;
};

const nav: navType[] = [
  { name: "home", icon: home, to: "/" },
  { name: "activity", icon: article, to: "/activity" },
  { name: "contact", icon: cellPhone, to: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full absolute bg-transparent flex justify-between pl-[69px] pr-[93px] pt-[34px] z-50">
      <motion.div
        initial={{ y: -400 }}
        animate={{
          y: 0,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
          },
        }}
        className="w-[68px] h-[68px] bg-black rounded-full"
      />
      <div className="text-black gap-10 hidden lg:flex">
        {nav.map((item) => (
          <Link
            href={item.to}
            key={item.name}
            className={`my-auto drop-shadow opacity-50 ${pathname === item.to && "!opacity-100"}`}
          >
            <AnimatedIcon
              icon={item.icon}
              className="flex items-center gap-1 font-semibold capitalize cursor-pointer"
            >
              <p className="hover:scale-95 duration-75">{item.name}</p>
            </AnimatedIcon>
          </Link>
        ))}
      </div>
      <MenuToggleNav className="lg:hidden flex items-center" navItem={nav} pathname={pathname} />
    </header>
  );
};

export default Navbar;
