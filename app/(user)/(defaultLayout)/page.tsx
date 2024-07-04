import { SectionOne, SectionTwo } from "@/components";
import { articles } from "@/constans/dummyData";
// import { FetchAPI } from "@/lib/api";

export default async function Home() {
  // const articles = await FetchAPI({ endpoint: "/api/article/list" });

  return (
    <main>
      <SectionOne />
      <SectionTwo articles={articles} />
    </main>
  );
}
