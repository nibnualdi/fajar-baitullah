import { SectionOne, SectionTwo } from "@/components";
import { getArticle } from "@/lib/api/articlesAPI";
import dynamic from "next/dynamic";

const MimbarArticle = dynamic(() => import("@/components/home/MimbarArticle/MimbarArticle"), {
  ssr: false,
});
const GalerySection = dynamic(() => import("@/components/home/GalerySection/GalerySection"), {
  ssr: false,
});

export default async function Home() {
  const articles = await getArticle();

  return (
    <main>
      <SectionOne />
      <GalerySection articles={articles.data} />
      <MimbarArticle articles={articles.data} />
      <SectionTwo articles={articles.data} />
    </main>
  );
}
