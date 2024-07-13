import type { Metadata } from "next";
import { openSans400 } from "@/assets/fonts";
import StoreProvider from "./StoreProvider";
import dynamic from "next/dynamic";
import "./globals.css";

const ShowToastFromCookie = dynamic(() => import("@/components/ShowToastFromCookie/ShowToastFromCookie"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    absolute: "Fajar Baitullah",
    template: "%s - Fajar Baitullah",
  },
  description: "(put the description about the Fajar Baitullah here)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${openSans400.className} relative`}>
        <StoreProvider>{children}</StoreProvider>
        <ShowToastFromCookie />
      </body>
    </html>
  );
}
