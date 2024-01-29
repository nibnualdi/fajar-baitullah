import { SectionOne, SectionTwo, Footer } from "@/components";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), { ssr: false });
export default function Home() {
  return (
    <main>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </main>
  );
}
