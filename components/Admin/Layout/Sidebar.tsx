"use client";

import Link from "next/link";
import { routes } from "@/constans/adminSidebar";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo2.png";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { selectUtil } from "@/lib/features/util/utilSlice";

interface SidebarProps {
  mobileOrientation: "start" | "end";
}

export function SidebarItems() {
  const pathname = usePathname();
  return (
    <ul>
      {routes.map((item) => (
        <li key={item.title}>
          <Link href={item.link}>
            <span
              className={`duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500 
              ${
                item.link === pathname &&
                "bg-gradient-to-r border-r-4 border-green-500 from-white to-green-100 text-green-500"
              }`}
            >
              <span>{item.icon}</span>
              <span className="font-normal mx-4 text-sm">{item.title}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Sidebar(props: SidebarProps) {
  const util = useAppSelector(selectUtil);
  
  return (
    <aside
      className={`bg-gray-200 h-screen overflow-y-auto top-0 lg:relative 
        ${props.mobileOrientation === "start" ? "left-0" : "right-0"} 
        ${
          util.sidebarOpen
            ? "w-8/12 absolute z-40 sm:w-5/12 lg:hidden"
            : "hidden lg:block lg:w-64 lg:z-auto"
        }`}
    >
      <div className="pb-32 lg:pb-6">
        <div className="sticky top-0 z-10 flex items-center justify-center bg-gray-200 py-6">
          <Image alt="logo" src={logo} width={50} height={50} />
        </div>
        <SidebarItems />
      </div>
    </aside>
  );
}
