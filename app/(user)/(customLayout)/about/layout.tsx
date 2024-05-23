import { Navbar } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
