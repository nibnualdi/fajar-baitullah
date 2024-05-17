import type { Metadata } from "next";
import { openSans400 } from "@/assets/fonts";
import dynamic from "next/dynamic";
import { SpeedDial } from "@/components";

const Overlay = dynamic(() => import("@/components/Admin/Layout/Overlay"));
const Sidebar = dynamic(() => import("@/components/Admin/Layout/Sidebar"));
const TopBar = dynamic(() => import("@/components/Admin/Layout/TopBar"));
const Breadcrumb = dynamic(() => import("@/components/Breadcrumb/Breadcrumb"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    default: "Admin | Fajar Baitullah",
    template: "%s - Admin | Fajar Baitullah",
  },
  description: "Admin page for Fajar Baitull",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarOpen = false;
  return (
    <div
      className={`${openSans400.className} bg-gray-100 text-black h-screen overflow-hidden relative lg:p-4`}
    >
      <div className="flex items-start">
        <Overlay />
        <Sidebar mobileOrientation="end" />
        <div
          className={`flex flex-col w-full h-screen pl-0 lg:space-y-4 
             ${sidebarOpen ? "lg:w-full" : "lg:pl-4 lg:lg:w-[calc(100%-16rem)]"}`}
        >
          <TopBar />
          <main className="h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0">
            <Breadcrumb />
            {children}
          </main>
        </div>
        <SpeedDial />
      </div>
    </div>
  );
}
