import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Fajar Baitullah",
    template: "%s - Fajar Baitullah",
  },
  description: "Generated by create next app",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
