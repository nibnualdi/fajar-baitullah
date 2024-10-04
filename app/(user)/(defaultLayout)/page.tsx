import { SectionOne, SectionTwo } from "@/components";
import { getArticle } from "@/lib/api/articlesAPI";

export default async function Home() {
  const articles = await getArticle();

  return (
    <main>
      <SectionOne />
      <SectionTwo articles={articles.data} />
    </main>
  );
}
