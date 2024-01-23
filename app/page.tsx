import { SectionOne } from "@/components";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), { ssr: false });
export default function Home() {
  return (
    <main>
      <Navbar />
      <SectionOne />
    </main>
  );
}

// REMINDER
// icon copyright || footer
// <a href="https://lordicon.com/">Icons by Lordicon.com</a>
