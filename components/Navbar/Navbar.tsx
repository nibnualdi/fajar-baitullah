"use client";

import dynamic from "next/dynamic";

import home from "@/assets/icons/home.json";
import article from "@/assets/icons/article.json";
// import cellPhone from "@/assets/icons/call-phone.json";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import logo from "@/assets/logo2.png";
import Dropdown, { menus } from "../Dropdown/Dropdown";
import { pages } from "@/constans/othersPage";

const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon/AnimatedIcon"), {
  ssr: false,
});

const MenuToggleNav = dynamic(() => import("@/components/Navbar/MenuToggle"), {
  ssr: false,
});

export type navType = {
  name: string;
  icon?: any;
  to: string;
  menuDropdown?: boolean;
  childMenus?: menus[];
};

const AboutMenu = () => {
  return (
    <p className="hover:scale-95 duration-75 font-semibold capitalize cursor-pointer">About</p>
  );
};
const OthersMenu = () => {
  return (
    <p className="hover:scale-95 duration-75 font-semibold capitalize cursor-pointer">Others</p>
  );
};

const othersMenuState = pages.map((page) => {
  return {
    name: page.name,
    href: `/others/${page.name.toLocaleLowerCase()}`,
    closeDropdownInAction: true,
  };
});

const nav: navType[] = [
  { name: "home", icon: home, to: "/" },
  { name: "activity", icon: article, to: "/activity" },
  {
    name: "about",
    to: "/about",
    icon: AboutMenu,
    menuDropdown: true,
    childMenus: [
      { name: "Tentang kami", href: "/about#tentang-kami", closeDropdownInAction: true },
      { name: "Sejarah kami", href: "/about#sejarah-kami", closeDropdownInAction: true },
      { name: "Kontak kami", href: "/about#kontak-kami", closeDropdownInAction: true },
      { name: "Pembangunan", href: "/about#pembangunan", closeDropdownInAction: true },
      {
        name: "Struktur organisasi",
        href: "/about#struktur-organisasi",
        closeDropdownInAction: true,
      },
      { name: "Lorem ipsum", href: "/about#lorem-ipsum", closeDropdownInAction: true },
    ],
  },
  { name: "others", to: "/others", icon: OthersMenu, menuDropdown: true, childMenus: othersMenuState },
  // { name: "contact", icon: cellPhone, to: "/contact" },
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
        className="w-[68px] h-[68px] bg-white rounded-full shadow-md flex justify-center items-center pb-2"
      >
        <Image alt="logo" src={logo} width={50} height={50} />
      </motion.div>
      <div className="text-black gap-10 hidden lg:flex">
        {nav.map((item) => {
          return !item.menuDropdown ? (
            <Link
              href={item.to}
              key={item.name}
              className={`my-auto drop-shadow opacity-50 hover:opacity-100 ${
                pathname === item.to && "!opacity-100"
              }`}
            >
              {item.icon ? (
                <AnimatedIcon
                  icon={item.icon}
                  className="flex items-center gap-1 font-semibold capitalize cursor-pointer"
                >
                  <p className="hover:scale-95 duration-75">{item.name}</p>
                </AnimatedIcon>
              ) : (
                <p className="hover:scale-95 duration-75 font-semibold capitalize cursor-pointer">
                  {item.name}
                </p>
              )}
            </Link>
          ) : (
            item.childMenus?.length && (
              <div
                key={item.name}
                className={`my-auto drop-shadow opacity-50 hover:opacity-100 ${
                  pathname === item.to && "!opacity-100"
                }`}
              >
                <Dropdown name={item.name} menus={item.childMenus} Icon={item.icon} onOpen="hover" />
              </div>
            )
          );
        })}
      </div>
      <MenuToggleNav className="lg:hidden flex items-center" navItem={nav} pathname={pathname} />
    </header>
  );
};

export default Navbar;
