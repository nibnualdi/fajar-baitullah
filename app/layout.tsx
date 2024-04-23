import type { Metadata } from "next";
import { openSans400 } from "@/assets/fonts";
import StoreProvider from "./StoreProvider";
import "./globals.css";

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
      <body className={openSans400.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
