import type { Metadata } from "next";
import { openSans400 } from "@/assets/fonts";
import { Sidebar } from "@/components";

export const metadata: Metadata = {
  title: {
    default: "Admin | Fajar Baitullah",
    template: "%s - Admin | Fajar Baitullah",
  },
  description: "Admin page for Fajar Baitull",
};

export default function RootLayout({
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
        <Sidebar mobileOrientation="end" />
        <div
          className={`flex flex-col w-full h-screen pl-0 lg:space-y-4 
             ${sidebarOpen ? "lg:w-full" : "lg:pl-4 lg:lg:w-[calc(100%-16rem)]"}`}
        >
          <main className="h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
