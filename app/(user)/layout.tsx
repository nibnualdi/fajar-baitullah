import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: {
    default: "Fajar Baitullah",
    template: "%s - Fajar Baitullah",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
